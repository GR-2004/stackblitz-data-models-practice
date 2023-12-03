import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    salary: {
      type: String,
      require: true,
    },
    qualification: {
      type: String,
      require: true,
    },
    experienceInYears: {
      type: String,
      require: true,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = new mongoose.model('Doctor', doctorSchema);
