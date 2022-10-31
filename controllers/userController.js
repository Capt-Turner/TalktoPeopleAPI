const {ObjectId}=require('mongoose').Types;
const {User}=require('../models');


module.exports={
    getUsers(req,res){
        User.find()
            .then((users)=>res.json(users))
            .catch((err)=>res.status(500).json(err));
    },
    getSingleUser(req,res){
        User.findOne({_id:req.params.userid})
            .select('-__v')
            .then(async(user)=>
                !user
                    ?res.status(404).json({message:'No User found with that ID'})
                    :res.json({
                        user,
                        friends: await friends(req.params.userid),
                        thoughts: await thoughts(req.params.userid),
                    })
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
            {_id:req.params.userid},
            {$set:req.body}
        )
        .then((user)=>
            !user
                ?res.status(404).json({message:'No user found with that ID'})
                :res.json(user)
        )
        .catch((err)=>res.status(500).json(err));
    },
    removeUser(req,res){
        User.findOneAndRemove({_id:req.params.userid})
            .then((user)=>
                !user
                    ?res.status(404).json({message:'No user found with that ID'})
                    // Bonus to remove thoughts as well
                    :res.json({message:'User removed but their Thoughts remain for now'})
            )
            .catch((err)=>{
                res.status(500).json(err);
            })
    }
}