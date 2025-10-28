import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { 
      type: String, 
      required: true, 
      trim: true,
      minlength: 3,
      maxlength: 50
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    password: { 
      type: String, 
      required: true,
      minlength: 6
    },
    isAdmin: { 
      type: Boolean, 
      default: false 
    },
  },
  { timestamps: true } // ✅ adds createdAt and updatedAt automatically
);

// Optional: Remove password from JSON responses
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

export default mongoose.model("User", userSchema);
