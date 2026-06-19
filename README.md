🔐 Secure Passwordless Authentication System
📖 Introduction
The Secure Passwordless Authentication System is a modern web application that allows users to log in without using traditional passwords.
Instead of remembering complex passwords, users authenticate using a secure Magic Link sent to their email and a One-Time Password (OTP) for additional verification. This approach improves security, reduces password-related attacks, and provides a smoother login experience.
The system also tracks login devices, records security events, and provides a real-time dashboard for monitoring account activity.
________________________________________
🚀 Why This Project?
Traditional password-based systems have several security issues:
•	Weak passwords
•	Password reuse
•	Phishing attacks
•	Credential theft
•	Brute-force attacks
This project solves these problems by replacing passwords with secure authentication methods.
Benefits include:
✅ Better security
✅ Easier login experience
✅ Reduced risk of password theft
✅ Improved account monitoring
________________________________________
✨ Key Features
🔗 Magic Link Authentication
Users enter their email address and receive a secure login link.
How it works:
1.	User enters email.
2.	System generates a secure token.
3.	Login link is sent to the user's email.
4.	User clicks the link.
5.	System verifies the token.
No password is required.
________________________________________
🔢 OTP Verification
After the Magic Link is verified, the system sends a One-Time Password (OTP) to the user's email.
Features:
•	6-digit OTP
•	Expires after 5 minutes
•	Resend OTP option
•	Additional security layer
This ensures that only the legitimate email owner can access the account.
________________________________________
📱 Device Tracking
The system automatically detects:
•	Device type
•	Browser information
•	Login time
Examples:
•	Windows Laptop
•	Android Phone
•	iPhone
•	MacBook
Users can view trusted devices through the Devices page.
________________________________________
📜 Security Logs
Every authentication event is recorded.
Examples:
•	Magic Link Login Success
•	OTP Verification Success
•	New Device Login
This helps users monitor account activity.
________________________________________
📊 Security Dashboard
The dashboard provides real-time security information.
Displayed information:
•	Security Score
•	Trusted Devices Count
•	Login Count
•	Last Login Time
The dashboard updates automatically to reflect recent activities.
________________________________________
⚙️ Security Settings
Users can manage authentication preferences and view active security features.
Examples:
•	Login Notifications
•	OTP Verification Status
•	Device Monitoring Status
________________________________________
🏗️ System Workflow
The complete authentication flow is shown below:
User Email
     │
     ▼
Send Magic Link
     │
     ▼
Email Verification
     │
     ▼
Device Detection
     │
     ▼
Security Log Created
     │
     ▼
OTP Sent to Email
     │
     ▼
OTP Verification
     │
     ▼
Access Granted
     │
     ▼
Security Dashboard
________________________________________
🛠️ Technologies Used
Frontend
•	React.js
•	React Router DOM
•	Axios
•	CSS
Frontend Responsibilities:
•	User Interface
•	Authentication Pages
•	Dashboard
•	Device Management
•	Security Logs
________________________________________
Backend
•	Node.js
•	Express.js
Backend Responsibilities:
•	API Development
•	Authentication Logic
•	OTP Generation
•	Magic Link Verification
•	Security Logging
________________________________________
Database
•	MongoDB
•	Mongoose
Database Stores:
•	User Information
•	OTP Records
•	Device Information
•	Security Logs
________________________________________
Email Service
•	Nodemailer
•	Gmail SMTP
Used For:
•	Magic Link Delivery
•	OTP Delivery
________________________________________
📂 Project Structure
SecureAuth
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── context
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
└── README.md
________________________________________
⚙️ Installation Guide
Step 1: Clone the Repository
git clone https://github.com/your-username/secureauth.git
________________________________________
Step 2: Install Frontend Dependencies
cd client
npm install
Start frontend:
npm run dev
________________________________________
Step 3: Install Backend Dependencies
cd server
npm install
Start backend:
npm run dev
________________________________________
🔑 Environment Variables
Create a .env file inside the server folder.
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION

JWT_SECRET=YOUR_SECRET_KEY

EMAIL=YOUR_EMAIL@gmail.com

EMAIL_PASSWORD=YOUR_GMAIL_APP_PASSWORD

CLIENT_URL=http://localhost:5173
________________________________________
🔒 Security Features
This project includes:
•	Passwordless Authentication
•	Email Verification
•	OTP Verification
•	Device Recognition
•	Security Logging
•	JWT Authentication
•	Session Protection
These mechanisms help prevent:
•	Password Theft
•	Credential Stuffing
•	Brute Force Attacks
•	Unauthorized Access
________________________________________
📈 Future Enhancements
Potential future improvements:
•	Passkey Authentication (WebAuthn)
•	Biometric Authentication
•	Face Recognition Login
•	Multi-Factor Authentication
•	Geo-location Monitoring
•	AI-based Risk Detection
________________________________________
🎯 Project Outcome
The Secure Passwordless Authentication System demonstrates how modern authentication can be implemented without traditional passwords.
By combining Magic Links and OTP verification, the project provides a secure, scalable, and user-friendly authentication solution suitable for modern web applications.
________________________________________
👨💻 Author
Loshiya
B.Tech Information Technology
Cybersecurity Specialization

