const mongoose = require('mongoose');

const jobsSchema = mongoose.Schema({
    company_name: String,
    position: String,
    job_description: String,
    contact: Number,
    fieldOfInterest: String,
    createdDate:{
        type: Date,
        default:Date.now
    }

});
module.exports = mongoose.model('Jobs',jobsSchema);