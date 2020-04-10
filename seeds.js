//Import the mongoose module
var mongoose = require('mongoose');

//Set up a mongoose connection
var mongoDB = "https://registry.npmjs.org/mongodb/-/mongodb-3.5.5.tgz"
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get a connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var fitnessschema = mongoose.Schema;

var SomeModelSchema = new Schema({
    exercises: [
        {
          type: "cardio",
          name: "40 meter dash",
          duration: 1,
          weight: null,
          reps: null,
          sets: 3
        },
        exercises [
            {
              type: "cardio",
              name: "400 meter run",
              duration: 2,
              weight: null,
              reps: null,
              sets: null
            },
              exercises [
                {
                  type: "strenght training",
                  name: "Bicep Curl",
                  duration: 20,
                  weight: 100,
                  reps: 10,
                  sets: 4
                }, 

                  exercises: [
                    {
                      type: "strenght training",
                      name: "pull ups",
                      duration: 15,
                      weight: null,
                      reps: 3,
                      sets: 4
                    },
                    exercises [
                        {
                          type: "strenght training",
                          name: "Arm row",
                          duration: 20,
                          weight: 15,
                          reps: 8,
                          sets: 4
                        }
                  
                    ]

                    db.Workout.deleteMany({})
                    .then(() => db.Workout.collection.insertMany(workoutSeed))
                    .then(data => {
                      console.log(data.result.n + " records inserted!");
                      process.exit(0);
                    })
                    .catch(err => {
                      console.error(err);
                      process.exit(1);
                    });
    

                    module.exports = mongoose.model("fitnessschema", fitnessschema)