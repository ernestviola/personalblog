'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
    TableName: process.env.DYNAMODB_TABLE,
};

module.exports.main = (event, context, callback) => {
    dynamoDb.scan(params, (error, result) => {
        if (error) {
            console.error(error);
            const errorMessage = {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t list',
            };

            callback(null, errorMessage);
            return;
        }
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Items),
        };
        callback(null, response);

    })
}