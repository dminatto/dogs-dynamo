const dynamoose = require('dynamoose');

module.exports.connect = () => {

    if (process.env.PRODUCAO) {
        dynamoose.aws.ddb.local();
        console.log('BD local ON')
    } else {
        dynamoose.aws.sdk.config.update({
            "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
            "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
            "region": process.env.AWS_REGION
        });

        console.log('BD ON')
    }
}
