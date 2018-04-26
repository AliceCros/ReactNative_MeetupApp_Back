import mongoose, {Schema} from 'mongoose';

const MeetupSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, '5 characters long at least']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description must be 10 characters long']
    },

    evenDate:{
      type: Date
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: 'Group'
    }

},{ timestamps: true}
);

export default mongoose.model('Meetup', MeetupSchema);
