const dynamoose = require('dynamoose');

const dogSchema = new dynamoose.Schema({
    id: {
        type: String,
        hashKey: true
    },
    name: {
        type: String,
    },
    nickname: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    });

module.exports = dynamoose.model('Dog', dogSchema);