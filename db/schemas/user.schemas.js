import mongoose from "mongoose";

const { Schema, models, model, ObjectId } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
}, {
    timestamps: true,
});

const User = models.user || model("user", UserSchema);

export default User;