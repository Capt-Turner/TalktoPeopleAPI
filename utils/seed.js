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
        const thinks=getRandomThoughts();
        const reactions=getRandomReactions();
        const friends=[];
        const newUser={
            username: name,
            email: mail,
            thoughts: thinks,
            friends: friends,
        };
        const newThought={
            thoughtText: thinks,
            username: name,
            reactions: reactions,
        };
        const newReaction={
            reactionBody: reactions,
            username:name
        };
        users.push(newUser);
        thoughts.push(newThought);
        
    };

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);



    console.table(users);
    console.table(thoughts);
    console.timeEnd('Done Seeding');
    process.exit(0);
});