import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utlis/verifyToken.js';
const router = express.Router();

/* router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in");
})
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account");
})
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are logged in and you can delete all accounts");
}) */

//update

router.put('/:id', verifyUser, updateUser);

//delete
router.delete('/:id', verifyUser, deleteUser);

//get
router.get('/:id', verifyAdmin, getUser);

//grt all
router.get('/', verifyAdmin, getUsers);

export default router;