import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class IbarakiCdkSampleApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda 関数を作成
    const ibarakiSampleLambda = new lambda.Function(this, 'ibarakiSampleLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('ibaraki-sample-lambda'),
      handler: 'src/index.handler',
    });

    // API Gateway を作成
    const api = new apigateway.RestApi(this, 'IbarakiCdkSampleApi', {
      restApiName: 'Ibaraki CDK Sample API',
    });

    // Lambda を API Gateway に統合
    const ibarakiSampleIntegration = new apigateway.LambdaIntegration(ibarakiSampleLambda);
    const helloApi = api.root.addResource('hello');
    helloApi.addMethod('GET', ibarakiSampleIntegration);
  }
}