const userSchema = require('../Model/user');
const {generateToken} = require('../jwt')
const bcrypt=require('bcrypt');

//signup a new user
const createUser=async (req, res) => {
    try {
    //store student data from body parser
    const { username, email, password } = req.body;

    const user = await userSchema.create({
      username,
      email,
      password
    });
      if(user.email)
      console.log('Data saved successfully');
     
  res.status(201).json({
        data:user
      });
    } catch (error) {
      console.error('Error while saving student data:', error);
      res.status(500).json({ err: {error} });
    }
  }

  //login a user
const loginUser =async(req,res)=>{
  const { email, password } = req.body;
  
  // Check if email and password entered by user
  if (!email || !password) {
    // return next(new ErrorHandler("Please enter email and password", 400));
    return res.status(400).json({error:'Please enter email and password'})
  }

  // Finding user in Database
  const user = await userSchema.findOne({ email }).select("+password");

  if (!user) {
    // return next(new ErrorHandler("Invalid Email", 401));
    return res.status(401).json({error:'Invalid Email'})
  }

  // Check if password is correct
  const isPasswordMatched = await bcrypt.compare(password, user.password);

   if (!isPasswordMatched) {
  //   return next(new ErrorHandler("Invalid Email or Password", 401));
    return res.status(401).json({error:'Invalid Password'})

  }
  const payload = {
    id: user.id,
  }
console.log(JSON.stringify(payload));
const token = generateToken(payload);
res.status(201).json({
    success:true,
    data:user,
    token:token
  });
}
const User = async (req, res, next) => {
  try {
      const user = await userSchema.findById(req.user.id);
      const name=user.name;
      if (!user) {
          return res.status(404).json({
              success: false,
              message: 'User not found',
          });
      }
      res.status(200).json({
          success: true,
          user,
      });
  } catch (error) {
      next(error);
  }}
  module.exports= {createUser,loginUser,User};