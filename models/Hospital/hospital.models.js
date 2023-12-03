import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    addressLine1: {
      type: String,
      require: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      require: true,
    },
    pincode: {
      type: String,
      require: true,
    },
    specializedIn: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = new mongoose.model('Hospital', hospitalSchema);
