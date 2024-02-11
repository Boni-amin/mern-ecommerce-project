const {DecodeToken} = require("../utility/TokenHelper");
module.exports=(req,res,next)=>{

    // Receive Token
    let token=req.headers['token']
    if(!token){
        token=req.cookies['token']
    };

 
  // Token Decode
  let decoded=DecodeToken(token);


  // Request Header Er Sate Email And UserID Add
  if(decoded===null){ // Akhane null mane jodi token expire hoye jai 
      return res.status(401).json({status:"fail", message:"Unauthorized"});  // Jodi token unvalid hoi backend teke ber kore deya hobe .
  }
  else {
    let email=decoded['email'];
    let user_id=decoded['user_id'];
    req.headers.email=email;
    req.headers.user_id=user_id; 
    next();
  };
};


// ei file user er login verify korbe .