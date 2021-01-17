import User from '../models/user'
import Bcryptjs from "bcryptjs";
const create = async (req, res, next) => {
  try {
    req.body.hashed_password = Bcryptjs.hashSync(req.body.hashed_password, 10)

		const user = await new User(req.body)
		user.save()
				 .then(response => {
				 	res.json("User added successfully!")
				 })
				 .catch(error => res.send(error))
	} catch(error) {
		next(error)
	}
}

/**
 * Load user and append to req.
 */

const read = async (req, res) => {
  await User.findByID(req.params.userId, (error, user) => {
    if (error || !user) {
      console.log("User not found")
    }
    res.json(user)
  })
}


const list = async (req, res, next) => {
  try {
    await User.find((error, user) => {
      if (error) {
        res.json("Cannot find user!")
      }
      res.send(user)
    })
  } catch (error) {
    next(error)
  }
}
const oneUser = async (req, res, next) => {
	try {
		await User.findById(req.params.id, (error, user) => {
			if (error) {
				res.json(error)
			} else {
				res.json(user)
			}
		})
	} catch(error) {
		next(error)
	}
}
const addFavorite = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate({_id: req.params.id}, {$addToSet: {"favorite" : 
    {"item" : req.body.item , "note": req.body.note } } },
    {new:true},function(err, updated) {
    if (err) {
      return res.json(err)
    }
      res.send(updated)
    })
  }catch(err){
    next(err)
  }
}
const removeInFavorite = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate({_id: req.params.id}, {$pull: {"favorite" : 
      {"item" : req.body.item} } },
      {new:true},function(err, updated) {
      if (err) {res.json(err)}
        res.send(updated)
      })
  } catch (error) {
    next(error)
  }
}
export default {
  create,
  read,
  list,
  addFavorite,
  oneUser,
  removeInFavorite
}
