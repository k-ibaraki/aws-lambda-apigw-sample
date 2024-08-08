import { defineBackend } from '@aws-amplify/backend';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { ibarakiSampleLambda } from './functions/ibaraki-sample-lambda/resource';

const backend = defineBackend({
  ibarakiSampleLambda,
});
const lambdaFunction = backend.ibarakiSampleLambda.resources.lambda;

// API Gateway用にCdkStackをAmplify Backendに追加
const ApiStack = backend.createStack('ibarakiSampleApiStack');
// API Gateway を作成
const api = new apigateway.RestApi(ApiStack, 'IbarakiAmplifyGen2SampleApi', {
  restApiName: 'Ibaraki AmplifyGen2 Sample API',
});
// API Gateway にLambdaを統合
const ibarakiSampleIntegration = new apigateway.LambdaIntegration(lambdaFunction);
const helloApi = api.root.addResource('hello');
helloApi.addMethod('GET', ibarakiSampleIntegration);

// API Gateway のURLを出力
backend.addOutput({
  custom: {
    [api.restApiName]: {
      apiName: api.restApiName,
      endpoint: api.url,
      region: ApiStack.region,
    }
  }
});