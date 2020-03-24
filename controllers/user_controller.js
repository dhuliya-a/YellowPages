//Create

const User = require('../models/user');
exports.addUser = (req, res, next)=>{
 //render the add user page.
};

exports.create = (req, res, next)=>{

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    contact: req.body.contact,
    profile_img: req.body.profile_img
  });

  newUser.save().then(user=>{
    console.log(user);
    res.send(user);
  }
  ).catch(err=>{
    console.log(err);
  });
};

//Read
exports.show = (req, res, next)=>{

  const user_id = req.params.id;

  User.findById(user_id).then(user=>{
    res.send(user);
  }).catch(err=>{
    res.send(err);
  });
};

exports.index = (req, res, next)=>{
  User.find({}).then(users=>{
    res.send(users);
  });
};


//Update
exports.edit = (req, res, next)=>{
//renders the edit page. and populates it with the current user.
};

exports.update = (req, res, next)=>{

  const user_id = req.params.id;

  User.findByIdAndUpdate(user_id, {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    contact: req.body.contact,
    profile_img: req.body.profile_img
  }).then(user=>{
    console.log(user);
    res.send(user);
  }).catch(err=>{
    console.log(err);
    res.send(err);
  });  
};

//Delete
exports.delete = (req, res, next)=>{

  const user_id = req.params.id;
  
  User.findByIdAndDelete(user_id).then(user=>{
    res.send(user);
  }).catch(err=>{
    res.send(err);
  });
};

