        /* Install and Setup Mongoose and .env */

let mongoose = require('mongoose');

require('dotenv').config();
        
        /* Connection to mongoDB Atlas*/

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) 
    
    .then(() => console.log('Connection successful'))
    
    .catch(err => console.error('Connection error'));
        
        /* Create Person Prototype */
        
let personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
    favoriteFoods: [String]    
});
        
let personModel = mongoose.model("Persons", personSchema);
        
        /* Create and Save A Person with document.save */
        
// let person = new personModel({ name: "Luffyfn", age: 30, favoriteFoods: ["Humburger", "Choclate", "IceCream"] });
        
// person.save((err, person) => {
//     if(err) console.error(err);
//     console.log(person);
//     });
        
        /* Create Many Persons with model.create() */
            
// let arrayOfPeople = [
//     {name: "Mastour", age: 25, favoriteFoods: ["BeefSteak", "Coke"]},
//     {name: "Bouras", age: 40, favoriteFoods: ["Potatos", "Milk"]}
// ];
        
// personModel.create(arrayOfPeople,(err, person) => {
//     if(err) console.error(err);
//     console.log(person);
//     });
        
        /*  Search A Person in Database with model.find() */
        
// personModel.find({name: "Bouras"}, (err, person) => {
//     if(err) console.error(err);
//     console.log(person);
//     });
        
        /* Use model.findOne() to Return a Single Matching Document from Database */
        
// personModel.findOne({favoriteFoods: {"$in" : ["IceCream"]} }, (err, person) => {
//     if(err) console.error(err);
//     console.log(person);
//     });
        
        /* Use model.findById() to Search in Database By _id */

// personModel.findById("5edf5882f5893206ad0f41ac", (err, person) => {
//     if(err) console.log(err);
//     console.log(person);
// })    

        /* Perform Classic Updates by Running Find, Edit, then Save */

// personModel.findById("5edf5882f5893206ad0f41ac", (err, person) => {
//     if(err) console.log(err);
//     person.favoriteFoods.push("Humberger");
//     person.save((err, person) => {
//         if(err) console.log(err)
//         console.log(person);
//     })
// })

        /* Perform New Updates on a Document Using model.findOneAndUpdate() */

// personModel.findOneAndUpdate({name: "Luffyfn"}, {age: 20}, {new: true}, (err, person) => {
//     if(err) console.log(err);
//     console.log(person);
// })

        /* MongoDB and Mongoose - Delete Many Documents with model.remove() */

// personModel.findOneAndRemove("5edf5882f5893206ad0f41ac", (err, person) => {
//     if(err) console.log(err);
//     console.log(person);
// })

        /* Delete Many Documents with model.remove() */

// personModel.deleteMany({name: "Mary"}, (err, person) => {
//     if(err) console.log(err);
//     console.log("Person(s) with name 'Mary' was deleted");
// })
  
        /* Chain Search Query Helpers to Narrow Search Results */

// personModel.find({ favoriteFoods: { "$in" : ["Burrito"] }})
//     .sort({name: 1})
//     .limit(2)
//     .select({name: true, favoriteFoods: true})
//     .exec()
//     .then(person => console.log(person))
//     .catch(err => console.error(err))