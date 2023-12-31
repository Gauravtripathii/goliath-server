import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
    Name:String ,
    genere:[String] ,
    desc:String ,
    reviews:[String],
    rating:{
        type:Number,
        default:0
    },
    links:String ,
    media:String ,
    Downloads:{
        type:Number,
        default:0
    },
    WCount:{
        type:Number,
        default:0
    },
    createdAT:{
        type:Date ,
        default:new Date()
    },
    Game:String
})

const GameData = mongoose.model('GameData', gameSchema);
export default GameData;