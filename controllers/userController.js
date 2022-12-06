const {ObjectId}=require('mongoose').Types;
const {User, Thought}=require('../models');

module.exports={
    getUsers(req,res){
        User.find()
            .then((users)=>res.json(users))
            .catch((err)=>res.status(500).json(err));
    },
    getSingleUser(req,res){
        User.findById(ObjectId(req.params.userId))
            .then(async(user)=>
                !user
                    ?res.status(404).json({message:'No User found with that ID'})
                    :res.json({user})
            )
            .catch((err)=>{
                return res.status(500).json(err);
            });
    },
    addUser(req,res){
        User.create(req.body)
            .then((user)=> res.json(user))
            .catch((err)=>res.status(500).json(err));
    },
    updateUser(req,res){
        User.findOneAndUpdate(
            ObjectId(req.params.userId),
            {$set:req.body}
        )
        .then((user)=>
            !user
                ?res.status(404).json({message:'No user found with that ID'})
                :res.json(user)
        )
        .catch((err)=>res.status(500).json(err));
    },
    async removeUser(req, res) {
        try {
          const user = await User.findOneAndRemove({
            _id: ObjectId(req.params.userId),
          });
    
          if (!user) {
            res.status(404).json({ message: "No such user exists" });
          } else {
            const thoughts = await Thought.deleteMany({ username: user.username });
            const friends = await User.updateMany({},
              {$pull: { friends: req.params.userId }})
            res.json({ message: "User successfully deleted" });
          }
        } catch (err) {
          res.status(500).json(err);
        }
      },
    addFriend(req,res){
        User.findByIdAndUpdate(
            ObjectId(req.params.userId),
            {$addToSet:{friends:ObjectId(req.params.friendId)}}
        )
            .then((user)=>
                !user
                    ?res.status(404).json({message:'No user found with that ID'})
                    :res.json(user)
            )
            .catch((err)=>res.status(500).json(err));
    },
    removeFriend(req,res){
        User.findByIdAndUpdate(
            ObjectId(req.params.userid),
            {$pull:{friends:ObjectId(req.params.friendid)}}
        )
        .then((user)=>
            !user
                ?res.status(404).json({message:'No user found with that ID'})
                :res.json(user)
            )
            .catch((err)=>res.status(500).json(err));
    },
};