const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
const Role = { Admin: "admin", teamMember: "Team Member"}

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters long"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
        validate: {
            validator: val => /\d{3}-\d{3}-\d{4}/.test(val),
            message: props => `Please enter a valid phone number`
        }
    },
    role: {
        Role: Role,
        type: String,
        required: [true, "Role is required"],
        default: Role.teamMember,
        enum: [Role.teamMember, Role.Admin]  
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    address: {
        streetAddress: {
            type: String,
            required: [true, "Address is required"]
        },
        city: {
            type: String,
            required: [true, "City is required"]
        },
        state: {
            type: String,
            uppercase: true,
            required: [true, "State is required"],
            enum: statesArray
        },
        zipCode: {
            type: Number,
            required: [true, "Zip Code is required"],
            min: [10000, "Zip Code must be 5 characters long"],
            max: [99999, "Zip Code must be 5 characters long"]
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Passwords must be at least 8 characters long"]
    },
    profileURL: {
        type: String,
    }
}, {timestamps: true})

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => (this._confirmPassword = value) );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});  

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports = mongoose.model('User', UserSchema)