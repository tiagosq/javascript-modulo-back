import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  verbose: true,
}

export default config;