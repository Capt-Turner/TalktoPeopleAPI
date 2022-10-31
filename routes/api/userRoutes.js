const router=require('express').Router();
const{
    getUsers,
    getSingleUser,
    removeUser,
    updateUser,
    addUser,
    addFriend,
    removeFriend,
}=require('../../controllers/userController');

router.route('/').get(getUsers).post(addUser);

router.route('/:userid').get(getSingleUser).delete(removeUser).put(updateUser);

router.route('/:userid/friends/:friendid').post(addFriend).delete(removeFriend);
