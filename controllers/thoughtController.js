const {ObjectId}=require('mongoose').Types;
const {User,Thought}=require('../models');

module.exports={
    getThoughts(req,res){
        Thought.find()
            .then((thoughts)=>res.json(thoughts))
            .catch((err)=>res.status(500).json(err));
    },
    getAThought(req,res){
        Thought.findOne({_id:req.params.thoughtid})
            .select('__v')
            .then((thought)=>res.json(thought)
            )
            .catch((err)=>res.status(500).json(err));
    },
    think(req,res){
        Thought.create(req.body)
            .then((thought)=>res.json(thought))
            .catch((err)=>res.status(500).json(err));
    },
    reThink(req,res){
        Thought.findOneAndUpdate(
            {_id:req.params.thoughtid},
            {$set:req.body}
        )
            .then((thought)=>
                !thought
                    ?res.status(404).json({message:'No thoughts found with that Id'})
                    :res.json(thought)
            )
            .catch((err)=>res.status(500).json(err));
    },
    unThink(req,res){
        Thought.findOneAndDelete({_id:req.params.thoughtid})
            .then((thought)=>
                !thought
                    ?res.status(404).json({message:'No thoughts found with that id'})
                    :res.json(thought)
                )
                .catch((err)=>res.status(500).json(err));
    },
    react(req,res){

    },
    removeReact(req,res){

    },
}