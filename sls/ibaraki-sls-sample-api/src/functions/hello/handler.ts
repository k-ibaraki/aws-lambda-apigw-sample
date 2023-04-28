import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const hello: ValidatedEventAPIGatewayProxyEvent<null> = async (_event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, serverless framework!",
    }),
  };
};

export const main = middyfy(hello);
