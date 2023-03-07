const mongoose = require('mongoose');
const argon2 = require('argon2');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'You must enter a name'],
        minlength: [1, 'Your name must be between 1 and 99 characters'],
        maxlength: [99, 'Your name must be between 1 and 99 characters']
    },
    password: {
        type: String,
        required: [true, 'You must enter a password'],
        minlength: [10, 'Your password must be between 10 and 128 characters'],
        maxlength: [128, 'Your password must be between 10 and 128 characters']
    },
    email: {
        type: String,
        required: [true, 'You must enter an email'],
        minlength: [6, 'Your email must be between 5 and 99 characters'],
        maxlength: [128, 'Your email must be between 1 and 99 characters'],
        validate: {
            validator: function(v) {
                return /.+@.+\..+/.test(v)
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    department: {type: Schema.Types.ObjectId, ref: 'Dep'},
    profile: {type: Schema.Types.ObjectId, ref: 'Profile'}
})

// helper function to strip secrets from the user instance
userSchema.set('toObject', {
    transform: function(doc, ret, options) {
        let returnJson = {
            _id: ret._id,
            email: ret.email,
            name: ret.name
        }
        return returnJson;
    }
})

// compares passwords
userSchema.methods.authenticated = function(password) {
    console.log('comparing passwords', password, this.password)
    return argon2.verify(this.password, password);
}

// hashes passwords before saving to the database
userSchema.pre('save', function(next) {
    console.log('presave', this)
    console.log('presave password', this.password)
    if (this.isNew) {
        (async () => {
            console.log('plaintext', this.password)
            let temp = await argon2.hash(this.password);
            console.log('now it is hashed', temp)
            this.password = temp
            console.log('after assigning hash', this.password)
            next();
        })(this)
    } else {
        next()
    }

})

module.exports = mongoose.model('User', userSchema);
