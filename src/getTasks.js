const AWS = require("aws-sdk");
const getTasks = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const result = dynamodb
      .scan({
        TableName: "TaskTable",
      })
      .promise();

    const tasks = (await result).Items;

    return {
      status: 200,
      body: tasks,
    };
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  getTasks,
};
