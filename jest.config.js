/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'node',
  transform: {
    '^.+.ts?$': ['@swc/jest'],
  },
  coverageDirectory: 'coverage',
  testMatch: ['**/?(*.)+(spec).ts?(x)'],
};
