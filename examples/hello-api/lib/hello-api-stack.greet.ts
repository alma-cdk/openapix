import { Context, APIGatewayProxyCallback, APIGatewayEvent } from 'aws-lambda';

export const handler = (event: APIGatewayEvent, _context: Context, callback: APIGatewayProxyCallback): void => {
    const name = event.queryStringParameters?.['name'] ?? 'World';
    const greeting = `Hello ${name}!`;

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: greeting,
        }),
    });
};
