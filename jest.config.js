export default {
    testEnvironment: 'jsdom', // For testing React components
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Optional: Add setup files
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Optional: Map aliases
    },
  };