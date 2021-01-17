import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import config from '../config/config';
import Bcryptjs from "bcryptjs";
import User from "../models/user"
const signin = async (req, res) => {
  try {
    let user = await User.findOne({
      "email": req.body.email
    }).exec()

    if (!user)
      return res.status('401').json({
        error: "User not found"
      })

    if (!Bcryptjs.compareSync(req.body.hashed_password, user.hashed_password)) {
        return res.json({error : "Invalid password : Please verify your password"})      
    }

    const token = jwt.sign({
      _id: user._id
    }, config.jwtSecret)

    res.cookie("t", token, {
      expire: new Date() + 99999
    })

    return res.json({
      token,
      user: {_id: user._id, firstname: user.firstname, lastname: user.lastname, email: user.email},
      status : "authorized"
    })
  } catch (err) {
    console.log(err)
    return res.status('401').json({
      error: "Could not sign in"
    })

  }
}

const signout = (req, res) => {
  res.clearCookie("t")
  return res.status('200').json({
    message: "signed out"
  })
}

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: 'auth',
  algorithms: ['RS256']
})

const hasAuthorization = (req, res, next) => {
  const authorized = req.email && req.auth && req.profile._id == req.auth._id
  if (!(authorized)) {
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}

export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization
}
