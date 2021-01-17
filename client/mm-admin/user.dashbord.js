import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Validator from "./auth/auth.validator";
import Table from './user.dashbord.table';

const UserDashbord = () => {
const [hide, setHide] = useState(false)
const [user, setUser] = useState([])
const [isRemoved, checkRemoved] = useState(false)
const [currentUser, setcurrentUser] = useState({
	name : ""
})
useEffect(() => {
	
	let cleanup = false;
	
	if (Validator.isAuthenticated()) {
		const id = Validator.isAuthenticated().user._id;
		axios.get("/user/action/" + id)
		.then(res => {
			setUser(res.data.favorite)
			setcurrentUser({name : res.data.lastname})			
		})
	} else {
		console.log("Need to loged")
	}
	return () => {
		cleanup = true
	}
}, [hide, isRemoved])
const removeFromFavorite = toremoved => event => {
	event.preventDefault();
	const id = Validator.isAuthenticated().user._id;
	const items = {
	  item : JSON.stringify(toremoved)
	}
	axios.put("/user/action/update/" + id, items)
		.then(res => {
			checkRemoved(!isRemoved)
		})
		.catch(error => console.log(error))
  }

const renderTable = () => {
	return user.map((info, index) => {
		const infoParsed = JSON.parse(info.item);
		return <Table item= {infoParsed} user ={info} remove={removeFromFavorite} key={index}/>
	})
}
const hideOpen = event => {
	event.preventDefault();
	setHide(!hide)
}
return (
<div className={`user-dashbord ${hide ? "closeit" : "openit"}`}>
	<div className="user-info">
		<div className="avatar">
		</div>
		<div className="name">
			{currentUser.name}
		</div>
		<div className="title-dashbord" onClick={hideOpen}>My Dashbord >>></div>
	</div>
	<div className="dashbord">
		<div className="container">
			<h1>Dashbord</h1>
		</div>
	</div>
	<div className="table-dashbord">
		<div className="container">
		<table className="table table-light table-striped">
    <thead>
      <tr>
        <th>#</th>
		<th>Name</th>
        <th>ID</th>
        <th>Notes</th>
		<th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {renderTable()}
    </tbody>
  </table>
		</div>
	</div>
</div>
)
}

export default UserDashbord;