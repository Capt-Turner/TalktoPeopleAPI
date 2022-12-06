const connection=require('../config/connection');
const {User,Thought,Reaction}=require('../models');
const {getRandomUsername,getRandomEmail,getRandomThoughts,getRandomReactions}=require('./data');
require('console.table');

console.time('seeding');

connection.once('open',async()=>{
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users=[];
    const thoughts=[];
    const reactions=[];
    const friends=[];
    
    for (let index=0;index<10;index++){
        const name=getRandomUsername();
        const mail=getRandomEmail();

        const newUser={
            username: name,
            email: mail,
        };
        users.push(newUser);
    };

    await User.collection.insertMany(users);
    
    for (const user of users){
        const randThought=getRandomThoughts(5);
        const thought=await Thought.create({
            thoughtText: randThought,
            username: user.username,
        });

        try{
            const use=await User.findOneAndUpdate(
                {username:user.username},
                {$addToSet:{thoughts:thought._id}}
            );
        }   catch(err){
            console.log(err);
        }
    }

    console.table(users);
    console.timeEnd('Done Seeding');
    process.exit(0);
});