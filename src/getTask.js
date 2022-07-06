const AWS = require("aws-sdk");
const getTask = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const result = await dynamodb
      .get({
        TableName: "TaskTable",
        Key: {
          id,
        },
      })
      .promise();

    const task = result.Item;

    return {
      status: 200,
      body: task,
    };
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  getTask,
};
