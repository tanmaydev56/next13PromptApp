import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);

export default User;









// so if we are using normal db joh hamesha chalta rehta hai 
// hum esa kuch krte
// const User  = model("User",UserSchema);
// export default User
// but next js me diff hai  jabh fun  call hoga bus server jabh hi chale ga

// the models object is provided by the mongoose lib and stores all the prev registered mdoels
// toh if a model named User  already exists in the  models object then it will return that model
// otherwise it will create a new model and store it in the models object
// so it will return the model that is already registered in the models object