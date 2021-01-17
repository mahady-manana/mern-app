import axios from "axios";
import React, {useState, useEffect} from "react";
import Validator from "../mm-admin/auth/auth.validator";
const Table = props => {
const [isOpen, setOpen] = useState(false)
const [currentItem, setcurrentItem] = useState([])

const openNote = event => {
  event.preventDefault()
  setOpen(!isOpen)
}
useEffect(() => {
  let cleanup = false

  if (Validator.isAuthenticated()) {
		const id = Validator.isAuthenticated().user._id;
		axios.get("/user/action/" + id)
		.then(res => {
      setcurrentItem(res.data.favorite)	
		})
	} else {
		console.log("Need to loged")
  }
  
  return () => {
    cleanup = true
  }
}, [])

  return (
      <tr>
        <td><img src={props.item.avatar_url} alt={props.item.login} style={{width : "50px", height : "50px"}}/></td>
        <td>{props.item.login}</td>
        <td>{props.item.id}</td>
        <td>{props.user.note}</td>
        <td><button className="btn btn-primary" onClick={openNote}> View details</button></td>
        <td><button className="btn btn-danger" onClick={props.remove(props.item)}> Remove</button></td>
        <td className={isOpen ? "open-note" : "close-note"} id="popup-note" >
            <span onClick={openNote} className="close-btn">X</span>
            <div className="info">
              <div className="row">
                  <div className="col-8">
                  <h3><a href={`https://github.com/${props.item.login}`}>{props.item.login}</a></h3>
                  <div className="">ID : {props.item.id}</div>
                  <div className="">NODE ID : {props.item.node_id}</div>
                  <div className="">PUBLIC URL : <a href={`https://github.com/${props.item.login}`}>{`https://github.com/${props.item.login}`}</a></div>
                  </div>
                  <div className="col-4">
                  <img src={props.item.avatar_url} alt={props.item.login} style={{width : '150px', height : '150px', objectFit : "cover"}}/>
                  </div>
              </div>
          </div>
        </td>
      </tr>
)
}
export default Table;