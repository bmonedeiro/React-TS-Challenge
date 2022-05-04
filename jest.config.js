/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const path = require('path');

module.exports = {
  preset: 'ts-jest',
  verbose: true,
  rootDir: '.',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@src/(.*)$': path.resolve(__dirname, './src/$1'),
  },
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'ts-jest',
  }
};
