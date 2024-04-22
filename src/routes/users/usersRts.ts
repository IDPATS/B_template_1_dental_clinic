import { Router } from "express"
import { createUserCtrl } from "../../controllers/users/creatUserCtrrl"
import { getUsersCtrl } from "../../controllers/users/getAllUsersCtrl"
import { getUserByIdController } from "../../controllers/users/getUserByIdCtrl"
import { loginUserCtrl } from "../../controllers/users/loginUserCtrl"



const usersRouter = Router()

usersRouter.post("/register",createUserCtrl)
usersRouter.post("/login", loginUserCtrl)
usersRouter.get("/:id",getUserByIdController)
usersRouter.get("/",getUsersCtrl)



export default usersRouter
