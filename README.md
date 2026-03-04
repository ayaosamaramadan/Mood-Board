# 🎨 Mood-Board

An interactive web application to track your mood and display inspiring quotes related to it. A modern app built with Vue 3 and Firebase.

![moodBoard](https://github.com/user-attachments/assets/19b5908c-03d6-45f7-a4e2-6c8d2ef84ad1)

---

## ✨ Features

- 🔐 **Secure Authentication**: Login via Firebase with OAuth support (Google & GitHub)
- 😊 **Mood Tracking**: Record and monitor your mood easily
- 📊 **Mood Statistics**: View mood data and statistics
- 💬 **Inspiring Quotes**: Display curated quotes based on your mood
- 🌓 **Dark Mode**: Full support for dark/light theme
- 📱 **Responsive Design**: Seamless interface across all devices
- ⚡ **High Performance**: Built with Vite for fast performance
- 
---

  <img src="https://github.com/user-attachments/assets/7ed5f8f5-d4b9-4e88-973a-7569eef4dae3" alt="moodboard2" width="320" />





## 🛠️ Prerequisites

- Node.js >= 20.19.0 or >= 22.12.0
- npm or yarn
- Firebase account (for authentication)

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/ayaosamaramadan/Mood-Board
cd Mood-Board/frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Firebase
Create a `.env.local` file in the `frontend` folder with the following settings:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 🚀 Running the Application

### Development environment
```bash
npm run dev
```
The application will run on `http://localhost:5173`

---

## 🔧 Libraries Used

### Frontend Framework
- **Vue 3**: Reactive JavaScript framework
- **Vue Router**: Client-side routing

### State Management
- **Pinia** & **Vuex**: Centralized state management

### Backend/Authentication
- **Firebase**: Authentication and database
- **Firebase Auth**: Secure authentication

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Vue Icons Plus**: Icon library

### Build Tools
- **Vite**: Fast build tool
- **Axios**: HTTP client library

---

## 📝 Usage

### Create a new account
1. Click the "Sign Up" button
2. Choose an authentication method (Email, Google, or GitHub)
3. Complete the registration process

### Track your mood
1. Select your mood from the available options
2. View inspiring quotes related to your mood
3. Monitor your statistics in the dashboard

### Enable dark mode
Click the moon/sun icon in the top corner to toggle dark mode



Developed with care. Enjoy tracking your mood! 🌟
