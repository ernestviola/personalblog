'user strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
    const data = JSON.parse(event.body);

    if (typeof data.text !== 'string') {
        console.error('Validation Failed');
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t create the new post.',
        });
        return;
    }

    const params = {
        TableName: proces.env.DYNAMODB_TABLE,
        Item: {
            id: uuid.v1(),
            text: data.text,
            createdAt: date.now()
        },
    };


    dynamoDb.put(params, (error) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t create the new post.',
            });
            return;
        }


        const response = {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
        callback(null, response);
    });
};


// import uuid from "uuid";
// import * as dynamoDbLib from "../libs/dynamodb-lib";
// import { success, failure } from "../libs/response-lib";

// export async function main(event, context, callback) {
//     const data = JSON.parse(event.body);
//     const params = {
//         TableName: "blogs",
//         Item: {
//             postId: uuid.v1(),
//             content: data.content,
//             createdAt: Date.now()
//         }
//     };

//     try {
//         await dynamoDbLib.call("put", params);
//         callback(null, success(params.Item));
//     } catch (e) {
//         callback(null, failure({ status: false }));
//     }
// }