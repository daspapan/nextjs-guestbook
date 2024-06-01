import { kMaxLength } from "buffer";
import mongoose, {Document, Schema} from "mongoose";

export interface IGuestbook extends Document {
    name: string;
    url: string;
    email: string;
    rating: number;
    comment: string;
    status: boolean;
    date: string;
}

const guestbookSchema:Schema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    comment: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Guestbook = mongoose.models.Guestbook || mongoose.model<IGuestbook>("Guestbook", guestbookSchema);

export default Guestbook