// Pseudocode:
// define a blueprint for an assignment (e.g. "Dissertation")
// it needs a title
// it needs a weight, the % of the module mark it's worth (between 0 and 100)
// it also need a due date
// every assignment belongs to one module, so store which module it belongs to
// it has a status, the default is "Not started"
// It can have a grade, which is a number between 0 and 100
// automatically track when it was created and last updated

// Defines the structure for an assignment
const assignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    dueDate: {
        type: Date,
        required: true
    },
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Module',
        required: true
    },
    status: {
        type: String,
        enum: ['Not started', 'In progress', 'Submitted', 'Overdue', 'Graded'],
        default: 'Not started'
    },
    grade: {
        type: Number,
        min: 0,
        max: 100
    },
}, {
    timestamps: true
});

// Pseudocode:
// turn the blueprint into a real model called "Assignment"
// share it so other files can use it

// Builds the Assignment model from the schema and exports it
module.exports = mongoose.model('Assignment', assignmentSchema);