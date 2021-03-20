module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    // Mock css and svg imports
    '\\.css$': '<rootDir>/src/__test__/mock.js',
    '\\.svg$': '<rootDir>/src/__test__/mock.js',
    // For import aliasing
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@lib(.*)$': '<rootDir>/src/lib$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@theme(.*)$': '<rootDir>/src/theme$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1'
  }
};
