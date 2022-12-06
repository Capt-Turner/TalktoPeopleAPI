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

router.route('/:userId').get(getSingleUser).delete(removeUser).put(updateUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports=router;