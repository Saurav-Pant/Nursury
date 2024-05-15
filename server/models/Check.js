import mongoose from "mongoose";

const agronomicMeasureSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const delayedWeeksSchema = new mongoose.Schema({
  weekdelay: {
    type: Number,
    enum: [2, 4, 6, 8],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const changeInCropSchema = new mongoose.Schema({
  crop: [cropSchema],
  delay: [delayedWeeksSchema],
  agronomicMeasures: [agronomicMeasureSchema],
});

const normalCropSchema = new mongoose.Schema({
  crop: [cropSchema],
});

const normalOnsetSchema = new mongoose.Schema({
  normalCrop: [normalCropSchema],
  changeInCrop: [changeInCropSchema],
});

const cropManagementSchema = new mongoose.Schema({
  method: {
    type: String,
    required: true,
  },
});

const soilMoistureSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

const monsoonDelaySchema = new mongoose.Schema({
  monsoonDelay: {
    type: String,
    enum: ["Normal Drought", "Mid-season drought", "Early-season drought"],
    required: true,
  },
});

const delayedOnsetSchema = new mongoose.Schema({
  cropManagement: [cropManagementSchema],
  monsoonDelay: [monsoonDelaySchema],
  soilMoisture: [soilMoistureSchema],
});

const rainfedSchema = new mongoose.Schema({
  normalOnset: [normalOnsetSchema],
  delayedOnset: [delayedOnsetSchema],
});

const Rainfed =
  mongoose.models.Rainfed || mongoose.model("Rainfed", rainfedSchema);

export default Rainfed;
