import mongoose, { Schema } from 'mongoose';

const MeetupSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [5, 'title must be 5 charactors long'],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, 'description must be 10 charactors long'],
  },
  eventData: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
}, { timestamps: true });

export default mongoose.model('Meetup', MeetupSchema);
