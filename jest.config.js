module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts)?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testPathIgnorePatterns: ['<rootDir>/src/App.tsx'],
};
