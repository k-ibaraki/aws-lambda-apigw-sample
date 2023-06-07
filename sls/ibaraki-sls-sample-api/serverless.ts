import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'ibaraki-sls-sample-api',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  package: {
    individually: true,
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    region: 'ap-northeast-1',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  functions: {
    hello: {
      handler: 'ibaraki-sample-lambda/src/index.handler',
      events: [
        {
          http: {
            path: 'hello',
            method: 'get'
          }
        }
      ]
    }
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node18',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
