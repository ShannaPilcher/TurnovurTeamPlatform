const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports= {

    register: (req, res) => {
        const user = new User(req.body);
        user
            .save()
            .then(() => {
                res.json({ msg: "success!", user: user})
            })
            .catch(err => res.status(400).json(err))
    },

    login: async(req, res) => {
        const user = await User.findOne({ email: req.body.email} )
            if (user === null) {
                return res.status(400).json( {msg: "Invalid login attempt" })
            }

        const correctPassword = await bcrypt.compare(req.body.password, user.password)
            if(!correctPassword) {
                return res.status(400).json({ msg: "Invalid login attempt" })
            }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET);
            res
                .cookie("usertoken", userToken, {
                    httpOnly: true
                })
                .json({ msg: "success!" });
    },

    logout(req, res) {
        res.clearCookie("usertoken");
        res.json({ msg: "usertoken cookie cleared" });
    },

    getLoggedInUser(req, res) {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true});
        User.findById(decodedJWT.payload._id)
            .then(user => res.josn(user))
            .catch(err => res.json(err))
    },

    getAll: (req, res) => {
        User.find({})
            .then((allUsers) => {
                console.log(allUsers)
                res.json(allUsers)
            })
            .catch((err) => {
                console.log("error found in getAll")
                console.log(err)
                res.json(err)
            })
    },

    getOne: (req, res) => {
        User.findOne({_id: req.params.id})
            .then((user) => {
                console.log(user)
                res.json(user)
            })
            .catch((err) => {
                console.log("error found in getOne")
                console.log(err)
                res.json(err)
            })
    },

    update: (req, res) => {
        User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then((updatedUser) => {
                console.log(updatedUser)
                res.json(updatedUser)
            })
            .catch((err) => {
                console.log("error found in update")
                console.log(err)
                res.json(err)
            })
    },

    delete: (req, res) => {
        User.deleteOne({_id: req.params.id})
            .then((deletedUser) => {
                console.log(deletedUser)
                res.json(deletedUser)
            })
            .catch((err) => {
                console.log("error found in delete")
                console.log(err)
                res.json(err)
            })
    }
}