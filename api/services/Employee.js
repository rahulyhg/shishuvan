var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: String,
    title: String,
    phnNo: Number,
    mobileNo: Number,
    dob: Date,
    address: String,
    postCode: String,
    emailId: String,
    nationality: String,
    country: String,
    prsentJobTiltle: String,
    presentJobName: String,
    appointedDate: Date,
    typeOfSchool: String,
    jobAddress: String,
    typeOfWork: {
        type: String,
        enum: ['Part Time', 'Full Time']
    },
    qualification: String,
    collegeName: String,
    dateQ: Date,
    applicantName: String,
    dateApp: Date
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Employee', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    //send apllication form to applicant
    //input: _id
    employeeFormEmail: function (data, callback) {
        Employee.findOne({
            _id: data._id
        }).exec(function (error, created) {
            if (error, created == undefined) {
                console.log("User >>> welcomeEmail >>> User.findOneAndUpdate >>> error", error);
                callback(error, null);
            } else {
                // console.log("User >>> welcomeEmail >>> User.findOneAndUpdate >>> error", created);
                var emailData = {};
                emailData.email = created.emailId;
                emailData.subject = "";
                emailData.filename = "welcome-emailer.ejs";
                emailData.from = "harsh@wohlig.com"
                emailData.firstname = created.name;
                emailData.lastName = created.lastName;
                Config.employeeFormEmail(emailData, function (err, response) {
                    if (err) {
                        console.log("error in email", err);
                        callback("emailError", null);
                    } else if (response) {
                        var sendData = {};
                        sendData._id = created._id;
                        sendData.email = created.emailId;
                        sendData.firstName = created.name;
                        sendData.lastName = created.lastName;
                        callback(null, sendData);
                    } else {
                        callback("errorOccurredRegister", null);
                    }
                });
            }
        })
    }
};
module.exports = _.assign(module.exports, exports, model);