import mongoose from 'mongoose';

const userModelSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Password will need to be encrypted, storing it here for the time being.
    email: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    registrationDate: { type: Date, required: true},
    accessLevel: { type: Number, default: 0 }
});
//include access level

export default mongoose.model('users', userModelSchema);