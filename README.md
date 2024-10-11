# Clipology - Clip Art Marketplace

Welcome to **Clipology**, a vibrant online marketplace where users can browse, buy, and sell high-quality clip art, illustrations, and creative assets. Whether you’re an artist looking to showcase your work or a designer searching for the perfect graphics, Clipology has something for everyone.

## Features

- **Browse Clip Art**: Explore a vast collection of clip art across various categories like fantasy, nature, people, and more.
- **Buy and Sell**: Artists can upload their artwork for sale, while buyers can purchase assets easily with a few clicks.
- **Responsive Design**: Optimized for all devices, from desktop to mobile, ensuring a smooth user experience.
- **Search Functionality**: Easily find specific clip art by using the search bar.
- **User Accounts**: Create an account to save your favorite clip art, manage purchases, and upload your own work.
- **Secure Checkout**: Buy and sell with confidence through a secure payment system.

## Technologies Used

### Frontend:
- **React.js**: Utilized for a dynamic and responsive user interface.
- **Vite**: For optimized development and building of the frontend.
- **Vanilla Extract CSS**: For modular, type-safe CSS.
- **React Router**: For navigation and routing between pages.

### Backend:
- **Node.js** and **Express**: Handling the server-side logic and APIs.
- **MongoDB**: A NoSQL database to manage user and product data.
- **Firebase**: Used for user authentication and secure login.

### DevOps:
- **GitHub**: Version control and collaborative development.
- **Continuous Integration/Continuous Deployment (CI/CD)**: Automated testing and deployment to ensure a smooth development process.

## Installation and Setup

### Prerequisites:
- **Node.js** and **npm** installed on your local machine.

### Steps to Setup Locally:

1. **Clone the repository**:
   ```
   git clone https://github.com/CatePobploy/Ass2LasttermAlex.git
   ```

2. **Navigate to the project directory**:
   ```
   cd clipology
   ```

3. **Install dependencies** for both the client and server:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

4. **Run the development server**:
   - For the frontend:
     ```
     cd client
     npm run dev
     ```
   - For the backend:
     ```
     cd ../server
     npm start
     ```

5. Open `http://localhost:3000` in your browser to view the application.

## Folder Structure

```
/client
   /public
   /src
   - index.html
   - vite.config.js
   - package.json
/server
   - server.js
   - package.json
.gitignore
README.md
```

## Contributing

Contributions are welcome! Feel free to submit pull requests to improve the platform or add new features. Please follow the standard GitHub workflow for submitting contributions.

## License

This project is licensed under the MIT License.

