
# Email Sending Dashboard (Frontend)

## Objective:
The frontend of this project provides a user-friendly dashboard to interact with the backend for:
1. Uploading CSV files.
2. Customizing and scheduling emails.
3. Viewing email logs and the status of sent emails.

---

## Technologies Used:
- **React** (UI Framework)
- **CSS** (for styling)
- **Axios** (for API requests)

---

## Setup Instructions

### 1. Clone the repository:
```bash
git clone https://github.com/your-repo/email-sender-frontend.git
cd email-sender-frontend
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the development server:
```bash
npm start
```

The frontend will be available at: `http://localhost:3000/`

---

## Features

1. **Upload Data Section:**
   - Users can upload a CSV file containing email addresses and other details.

2. **Email Customization Section:**
   - Users can define the subject, body template, and personalized prompt for email customization.

3. **Send Emails Section:**
   - Allows users to send emails immediately after customizing them.

4. **Schedule Emails Section:**
   - Allows users to schedule emails to be sent at a later time.

5. **Email Logs Section:**
   - Displays a list of all sent emails with their status, timestamp, and other details.

6. **Status Messages:**
   - Shows success or error messages based on user actions.

---

## Running with Docker (Optional)

### 1. Build the Docker image:
```bash
docker build -t email-sender-frontend .
```

### 2. Run the container:
```bash
docker run -p 3000:3000 email-sender-frontend
```

---

## Backend Configuration

- Make sure that your frontend is configured to send API requests to the correct backend URL (i.e., `http://127.0.0.1:5000/` or the respective deployed URL).

---

## How the App Works:

- **Upload CSV:** The user uploads a CSV file with the necessary data (email addresses, names, etc.).
- **Email Customization:** The user can provide an email subject, body, and prompt to personalize the email content.
- **Send Emails:** Once the emails are customized, the user can send the emails immediately using the API.
- **Schedule Emails:** The user can set a future time to send emails using the backend scheduling functionality.
- **Logs:** All actions (sent emails, scheduling) are logged and accessible in the logs section of the dashboard.

---

## Contribution

Feel free to contribute to this project by submitting issues or pull requests.

---
