const express = require("express")


const userRoute = express.Router()
const {createUser, deleteUser, getAllUsers, getSingleUser, updateUser, loginUser} = require(
    "../controller/userController"
)

userRoute.post("/new-user", createUser)
userRoute.get("/all-users", getAllUsers)
userRoute.get("/single-user/:id", getSingleUser)
userRoute.put("/update-user/:id", updateUser)
userRoute.delete("/delete-user/:id", deleteUser)
userRoute.post("/login", loginUser)

module.exports = userRoute