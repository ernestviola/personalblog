'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.main = (event, context, callback) => {
    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);

    if (typeof data.post != 'string' || typeof data.title != 'string') {
        console.error("Validation failed");
        callback(null, {
            statusCode: 400,
            headers: { 'Content-type': 'text/plain' },
            body: 'Couldn\'t update the post either the title or post is not a string'
        });
        return;
    }

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            id: event.pathParameters.id
        },
        UpdateExpression: 'SET post = :post, title = :title, updatedAt = :updatedAt',
        ExpressionAttributeValues: {
            ':post': data.post,
            ':title': data.title,
            ':updatedAt': timestamp
        },

        ReturnValues: 'ALL_NEW',
    };

    dynamoDb.update(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t fetch the blog post.',
            });
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Attributes),
        };
        callback(null, response);
    });
};