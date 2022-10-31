const {Schema,model,Types}=require('mongoose');
const thoughtsSchema=require('./Thought');

const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },
        thoughts:[
            {
                type:Schema.Types.ObjectId,
                ref:'thought',
            },
        ],
        friends:[
            {
                type:Schema.Types.ObjectId,
                ref:'User'
        }
    ]
        
    }
);

const User=model('user',userSchema);

module.exports=User;