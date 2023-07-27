import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
    Name:String ,
    genere:[String] ,
    desc:String ,
    reviews:[String],
    rating:{
        type:NumberDecimals ,
        default:0
    },
    links:String ,
    media:String ,
    Downloads:{
        type:NumberDecimals ,
        default:0
    },
    WCount:{
        type:NumberDecimals ,
        default:0
    },
    createdAT:{
        type:Date ,
        default:new Date()
    }

})

const GameData = mongoose.model('GameData', gameSchema);
export default GameData;