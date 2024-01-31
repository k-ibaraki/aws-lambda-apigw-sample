import { defineBackend } from '@aws-amplify/backend';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { ibarakiSampleLambda } from './functions/ibaraki-sample-lambda/resource';

const backend = defineBackend({
  ibarakiSampleLambda,
});
const lambdaFunction = backend.ibarakiSampleLambda.resources.lambda

// Amplify Gen2はプレビュー時点でAPI Gatewayを作る機能がないので、手動で追加する //

// API Gateway用にCdkStackをAmplify Backendに追加
const ApiStack = backend.createStack('ibarakiSampliApiStack')
// API Gateway を作成
const api = new apigateway.RestApi(ApiStack, 'IbarakiCdkSampleApi', {
  restApiName: 'Ibaraki CDK Sample API',
});
// API Gateway にLambdaを統合
const ibarakiSampleIntegration = new apigateway.LambdaIntegration(lambdaFunction);
const helloApi = api.root.addResource('hello');
helloApi.addMethod('GET', ibarakiSampleIntegration);
