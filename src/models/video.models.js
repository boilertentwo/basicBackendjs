import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new mongoose.Schema({
            title:{
                type: String,
                required: true,
                index: true 
            },
            description:{
                type: String,
                required: true
            },
            duration:{
                type: Number,
                required: true
            },
            views:{
                type: Number,
                default: 0
            },
            isPublished:{
                type: Boolean,
                required: true
            },
            createdAt:{
                type: Date,
                required: true
            },
            updatedAt:{
                type: Date,
                required: true
            },
            owner:[{
                type: Schema.Types.ObjectId,
                ref: "User"
            }]
},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model('Video',videoSchema)