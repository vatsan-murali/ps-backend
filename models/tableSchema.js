const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    ID : {
        type: String,
        required: true
    },
    COUNTRY : {
        type: String,
        required: true
    },
    UNIVERSITY : {
        type: String,
        required: true
    },
    TITLE : {
        type: String,
        required: true
    },
    TAGS : {
        type: String,
        required: true
    },
    LINK : {
        type: String,
        required: true
    }
})

const Table = mongoose.model("TABLE",tableSchema)

module.exports = Table