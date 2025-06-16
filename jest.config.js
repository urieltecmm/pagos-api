// jest.config.ts
// @ts-check
/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  rootDir: '.',
  testMatch: ['**/?(*.)+(spec|test).ts'],

  // Configurar alias según paths de tsconfig.json
  moduleNameMapper: {
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@api-gateway/(.*)$': '<rootDir>/src/api-gateway/$1',
    '^@validators/(.*)$': '<rootDir>/src/validators/$1',
  },

  // Asegurar que Jest encuentra los módulos en src y node_modules
  moduleDirectories: ['node_modules', 'src'],
};

export default config;
