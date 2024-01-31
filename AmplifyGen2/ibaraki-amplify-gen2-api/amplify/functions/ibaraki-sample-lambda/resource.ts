import { defineFunction } from '@aws-amplify/backend';

export const ibarakiSampleLambda = defineFunction({
  entry: './index.ts'
});