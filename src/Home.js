import React, { useState, useEffect } from "react";
import "./styles.css";

const Home = () => {
  const [statusText, setStatusText] = useState("Awaiting action...");
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const response = await fetch("https://email-scheduling-and-sending-backend.onrender.com/email_logs");
      const result = await response.json();
      setLogs(result);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const uploadData = async () => {
    const fileInput = document.getElementById("dataFile");
    const file = fileInput.files[0];

    if (!file) {
      alert("Please select a CSV file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://email-scheduling-and-sending-backend.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setStatusText("File uploaded successfully!");
      } else {
        setStatusText(`Upload failed: ${result.error}`);
      }
    } catch (error) {
      setStatusText("An error occurred during upload.");
    }
  };

  const sendEmails = async () => {
    const emailSubject = document.getElementById("emailSubject").value;
    const emailBody = document.getElementById("emailBody").value;
    const emailPrompt = document.getElementById("emailPrompt").value;

    if (!emailSubject || !emailBody || !emailPrompt) {
      alert("Please complete all fields in the email customization section.");
      return;
    }

    const emailData = {
      subject: emailSubject,
      bodyTemplate: emailBody,
      prompt: emailPrompt,
    };

    try {
      const response = await fetch("https://email-scheduling-and-sending-backend.onrender.com/send_emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusText("Emails sent successfully!");
      } else {
        setStatusText(`Sending failed: ${result.error}`);
      }
    } catch (error) {
      setStatusText("An error occurred while sending emails.");
    }
  };

  const scheduleEmails = async () => {
    const scheduleTime = document.getElementById("scheduleTime").value;
    const formattedScheduleTime = scheduleTime.replace("T", " ") + ":00";
    try {
      const response = await fetch("https://email-scheduling-and-sending-backend.onrender.com/schedule_emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ schedule_time: scheduleTime }),
      });
      const result = await response.json();
      if (response.ok) {
        setStatusText("Emails scheduled successfully!");
      } else {
        setStatusText(`Scheduling failed: ${result.error}`);
      }
    } catch (error) {
      setStatusText("An error occurred while scheduling emails.");
    }
  };

  return (
    <div className="container">
      <h1>Email Sending Dashboard</h1>

      {/* Upload Data Section */}
      <div className="section">
        <h2>Upload Data</h2>
        <input type="file" id="dataFile" accept=".csv" />
        <button onClick={uploadData}>Upload File</button>
      </div>

      {/* Email Customization Section */}
      <div className="section">
        <h2>Customize Email</h2>
        <input type="text" id="emailSubject" placeholder="Email Subject" required />
        <textarea id="emailBody" placeholder="Email Body Template"></textarea>
        <textarea
          id="emailPrompt"
          placeholder="Prompt for personalization (e.g., 'Write a professional greeting for {name}')"
        ></textarea>
        <button onClick={sendEmails}>Send Emails</button>
      </div>

      {/* Scheduling Section */}
      <div className="section">
        <h2>Schedule Emails</h2>
        <input type="datetime-local" id="scheduleTime" />
        <button onClick={scheduleEmails}>Schedule Emails</button>
      </div>

      {/* Email Logs */}
      <div className="section">
        <h2>Email Logs</h2>
        <ul>
          {logs.map((log) => (
            <li key={log.id}>
              {log.recipient_email} - {log.subject} - {log.status} ({log.timestamp})
            </li>
          ))}
        </ul>
      </div>

      {/* Real-Time Status */}
      <div id="status">
        <h2>Status</h2>
        <p>{statusText}</p>
      </div>
      {/* Made By Section */}
      <div className="footer">
        <p>Made by <a href="https://github.com/AnujPandey123" target="_blank" rel="noopener noreferrer">Anuj Pandey</a></p>
        <p>Connect with me on <a href="https://www.linkedin.com/in/anuj-pandey-551bb6226/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </div>
    
  );
};

export default Home;
