var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    middleName: String,
    familyName: String,
    gender: {
        type: String,
        enum: ['Boy', 'Girl']
    },
    address: String,
    aadharCardNo: Number,
    dob: Date,
    nationality: String,
    applyGrade: String,
    currentSchoolName: String,
    StudyingBoard: String,
    schoolAddress: String,
    nameOfParent: String,
    contactNo: Number,
    emailId: String
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Student', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    //send apllication form to student
    //input: _id
    studentFormEmail: function (data, callback) {
        Student.findOne({
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
                emailData.firstname = created.nameOfParent;
                // emailData.lastName = created.lastName;
                Config.studentFormEmail(emailData, function (err, response) {
                    if (err) {
                        console.log("error in email", err);
                        callback("emailError", null);
                    } else if (response) {
                        var sendData = {};
                        sendData._id = created._id;
                        sendData.email = created.emailId;
                        sendData.firstName = created.nameOfParent;
                        // sendData.lastName = created.lastName;
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