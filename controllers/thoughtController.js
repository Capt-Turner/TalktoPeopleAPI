const {ObjectId}=require('mongoose').Types;
const {User,Thought}=require('../models');

module.exports={
    getThoughts(req,res){
        Thought.find()
            .then((thoughts)=>res.json(thoughts))
            .catch((err)=>res.status(500).json(err));
    },
    getAThought(req,res){
        Thought.findById(ObjectId(req.params.thoughtId))
            .then((thought)=>res.json(thought)
            )
            .catch((err)=>res.status(500).json(err));
    },
    think(req,res){
        Thought.create(req.body)
            .then(async function(thought){
                await User.findOneAndUpdate(
                    {username:req.body.username},
                    {$addToSet:{thoughts:ObjectId(thought._id)}}
                );
                res.json(thought);
            })
            .catch((err)=>{
                return res.status(500).json(err);
            })
    },
    reThink(req,res){
        Thought.findbyIdAndUpdate(
            ObjectId(req.params.thoughtId),
            {$set:req.body}
        )
            .then((thought)=>
                !thought
                    ?res.status(404).json({message:'No thoughts found with that Id'})
                    :res.json(thought)
            )
            .catch((err)=>res.status(500).json(err));
    },
    async unThink(req,res){
        try{
            const thought= await Thought.findByIdAndRemove(ObjectId(req.params.thoughtId));
            if(thought){
                const user=await User.updateOne(
                    {username:thought.username},
                    {$pull:{thoughts:ObjectId(req.params.thoughtId)}}
                );
            } else{
                res.status(404).json({message:"No thoughts found with that Id"});
            }
            res.status(200).json({message:"Though removed"});
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    react(req,res){
        ThoughtfindByIdAndUpdate(
            ObjectId(req.params.thoughtId),
            {$addToSet:{
                reactions:{
                    reactionBody:req.body.reactionBody,
                    username:req.body.username,
                },
            }},
        )
        .then((thought)=>
            !thought
                ? res.status(404).json({message:"No thoughts found with that Id"})
                : res.json(thought))
        .catch((err)=>res.status(500).json(err));
    },
    async removeReact(req,res){
        try{
            const thought=await Thought.findById(ObjectId(req.params.thoughtId));
            const result=thought.reactions.find(
                (reaction)=>reaction.reactionId==req.params.reactionId
            );
            thought.reactions.remove(result);
            thought.save();
            res.json(thought);
        } catch(err){
            res.status(500).json(err);
        }
    },
};