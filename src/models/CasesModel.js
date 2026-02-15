// cases: id, customer_id, assigned_to, priority, status, created_at

import mongoose, { Schema } from "mongoose";

const casesSchema = new Schema({
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },

},
    { timestamp: true }
)

const CasesModel = mongoose.model('Case', casesSchema);

export default CasesModel;