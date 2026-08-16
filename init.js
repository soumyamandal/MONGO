const mongoose =require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => console.log("connection built")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



Chat.insertMany([
    {
        from: "neha",
        to: "priya",
        msg: "Hey, how are you?",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "neha",
        msg: "I am good! What about you?",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "aman",
        msg: "Are you coming to college?",
        created_at: new Date()
    },
    {
        from: "aman",
        to: "rahul",
        msg: "Yes, I will come tomorrow.",
        created_at: new Date()
    },
    {
        from: "sneha",
        to: "riya",
        msg: "Did you complete the assignment?",
        created_at: new Date()
    }
]);

