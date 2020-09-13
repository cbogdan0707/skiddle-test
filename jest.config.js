module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts)?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/App.tsx',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/serviceWorker.tsx',
  ],
};
