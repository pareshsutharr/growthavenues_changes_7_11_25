module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/tests/__mocks__/styleMock.js',
    '^.+\\.(svg|png|jpg|jpeg|gif|webp)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^bootstrap/dist/js/bootstrap.bundle.min.js$': '<rootDir>/tests/__mocks__/scriptMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[tj]s?(x)'],
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx}',
    '!src/main.jsx',
    '!src/App.jsx'
  ]
};
