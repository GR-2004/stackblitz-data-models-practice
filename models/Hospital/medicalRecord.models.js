import mongoose from "mongoose"

const medialRecordtSchema = new mongoose.Schema({}, {timestamps:true})

export const MedicalRecord = new mongoose.model("MedicalRecord", medialRecordtSchema)