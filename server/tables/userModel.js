import mongoose from 'mongoose';

const userModelSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Password will need to be encrypted, storing it here for the time being.
    firstName: { type: String, required: true },
    lastName: { type: String },
    registrationDate: { type: Date, required: true}
});//include carbon footprint

export default mongoose.model('users', userModelSchema);