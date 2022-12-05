const connection=require('../config/connection');
const {User,Thought}=require('../models');
const {getRandomUsername,getRandomEmail,getRandomThoughts}=require('./data');
require('console.table');

console.time('seeding');

connection.once('open',async()=>{
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users=[];
    
    for (let index=0;index<10;index++){
        const name=getRandomUsername();
        const mail=getRandomEmail();
        const thinks=getRandomThoughts();
        const newUser={
            username: name,
            email: mail,
            thoughts: thinks,
        }
        users.push(newUser);
    }

    await User.collection.insertMany(users);

    console.table(users);
    console.timeEnd('Done Seeding');
    process.exit(0);
});