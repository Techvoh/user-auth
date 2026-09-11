const express = require("express")


const userRoute = express.Router()
const {createUser, deleteUser, getAllUsers, getSingleUser, updateUser} = require(
    "../controller/userController"
)

userRoute.post("/new-user", createUser)
userRoute.get("/all-users", getAllUsers)
userRoute.get("/single-user/:id", getSingleUser)
userRoute.put("/update-user/:id", updateUser)
userRoute.delete("/delete-user/:id", deleteUser)

module.exports = userRoute