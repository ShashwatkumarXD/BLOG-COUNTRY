
# Travel Blog

A React-based mini travel blog that displays country cards using the REST Countries API. Users can explore different countries with pagination — 6 countries at a time. Includes authentication check before allowing access to the blog content.

## 🔥 Features
- Fetches country data from the [REST Countries API](https://restcountries.com/v3.1/all?fields=name,flags,cca3)
- Displays flag, name, and a short description of each country
- Shows 6 country cards per page with pagination
- Secure user authentication

## 🛠 Built With

### Backend
- Express.js for server handling
- Body-parser for request parsing
- Cookie-parser for handling cookies
- CORS for cross-origin requests
- Express-session for session management

### Frontend
- React for UI development
- React Router for navigation
- Tailwind CSS for styling
- Lucide-react for icons
- GSAP for animations

### Dev Dependencies
- ESLint for code linting
- Vite for fast development builds

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/travel-blog.git
   cd travel-blog
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Project

#### Backend
```sh
cd backend
npm start
```

#### Frontend
```sh
cd frontend
npm run dev
```

## 📌 API Used
[REST Countries API](https://restcountries.com/v3.1/all?fields=name,flags,cca3)

## 📜 License
This project is licensed under the MIT License.

---

Made with ❤️ by [Shashwat Kumar XD](https://github.com/ShashwatkumarXD/)
