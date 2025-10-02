# 🎯 Gifs App

## 📖 Description

This is a web application developed with **React** and **TypeScript** for educational purposes. The application allows searching and displaying GIFs using the Giphy API, implementing modern React concepts such as custom hooks, state management, and API consumption.

## ✨ Features

- 🔍 Real-time GIF search
- 📱 Responsive and modern interface
- 🎣 Custom hooks for state management
- 📋 Previous searches history
- ⚡ Vite optimization
- 🎨 Reusable components
- 🧪 Comprehensive unit testing with Vitest

## 🛠️ Technologies Used

- **React 19** - User interface library
- **TypeScript** - Typed superset of JavaScript
- **Vite** - Development and build tool
- **Vitest** - Unit testing framework
- **Testing Library** - Testing utilities for React components
- **Axios** - HTTP client for API consumption
- **ESLint** - Linter to maintain code quality
- **Giphy API** - Service to fetch GIFs

## 🚀 Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url> <directory_name>
   cd <directory_name>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Copy the environment template file and add your Giphy API key:

   ```bash
   cp -template.env .env
   ```

   Then edit the `.env` file and add your Giphy API key:

   ```env
   # https://developers.giphy.com/dashboard/
   VITE_GIPHY_API_KEY=your_api_key_here
   ```

   > 💡 **Note:** Get your free API key from the [Giphy Developers Dashboard](https://developers.giphy.com/dashboard/)

4. **Run the project in development mode:**

   ```bash
   npm run dev
   ```

## 📁 Project Structure

```text
src/
├── counter/         # Counter module (educational example)
│   ├── components/  # Counter components with tests
│   └── hooks/       # Custom counter hooks with tests
├── gifs/            # Main GIFs module
│   ├── actions/     # Actions for API consumption with tests
│   ├── api/         # API configuration with tests
│   ├── components/  # GIF-specific components
│   ├── hooks/       # Custom hooks with tests
│   └── interfaces/  # TypeScript interfaces
├── mocks-data/      # Test data
└── shared/          # Shared module
    └── components/  # Reusable components with tests

tests/
└── mocks/           # Mock data for testing
    ├── gifs.data.ts
    └── giphy.response.data.ts
```

## 📋 Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the application in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the application for production in the `dist` folder.\
Includes TypeScript compilation and Vite optimization.
Also runs tests before building to ensure code quality.

### `npm run lint`

Runs ESLint to analyze the code and detect quality issues.\
Helps maintain clean and consistent code.

### `npm run preview`

Serves the built application locally for preview.\
Useful for testing the production version before deployment.

## 🧪 Testing

This project includes comprehensive unit tests covering:

- ⚛️ **React Components**: Testing component rendering, user interactions, and state changes
- 🎣 **Custom Hooks**: Testing hook logic, state management, and side effects
- 🌐 **API Services**: Testing API configuration and data transformation
- 🔧 **Actions**: Testing business logic and data processing functions

### Running Tests

```bash
# Run tests in watch mode (default)
npm run test

# Run tests once without watch mode
npm run test:only

# Run tests with coverage
npm run coverage

# Run tests with UI
npm run test:ui
```

## 🎯 Educational Purpose

This project was originally developed as part of a React course, with the goal of learning and practicing:

- ⚛️ Fundamental React concepts
- 🎣 Creating and using custom hooks
- 🌐 REST API consumption
- 📝 TypeScript development
- 🏗️ Modular component architecture
- 🧪 Unit testing with Vitest and Testing Library
- 🔍 Test-driven development practices
- 📊 Code coverage analysis
- 🎭 Mocking and test data management
- 🔧 Development best practices

## 🤝 Contributions

This is an educational project, but suggestions and improvements are welcome for learning purposes.

## 📄 License

This project is licensed under the license specified in the `LICENSE` file.
