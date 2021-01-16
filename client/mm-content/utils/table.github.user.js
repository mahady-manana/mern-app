import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const ShowCase = props => {
const [isOpen, setOpen] = useState(false)
const [values, setValues] = useState({note : ""})
const openNote = event => {
    event.preventDefault();
    setOpen(!isOpen)
}
const handleChange = event =>{
    event.preventDefault();
    setValues({note : event.target.value})
}
return (
<li className="item">
    <div className="item-wrapper">
        <div className="image-user">
             <img src={props.item.avatar_url} alt={props.item.login}/>
        </div>
        <div className="login">
            {props.item.login}
        </div>
        <div className="visit">
            <a href={`https://github.com/${props.item.login}`}>Visit repos</a>
        </div>
            
        <div className="action">
            <div className="view">
                <button className="btn btn-primary">View details</button>
            </div>
            <div className="addfavorite">
                <button className="btn btn-primary" onClick={openNote}>Add to favorite</button>
            </div>
        </div>
    </div>
    <div className={isOpen ? "open-note" : "close-note"} id="popup-note" >
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
            <form onSubmit={props.favorite(props.item, values.note)}>
                    Add your note here :
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Add note" rows="10" cols="" value={values.note} onChange={handleChange}></textarea>
                    </div>
                <button type="submit" className="btn btn-primary">Finish and add to Favorite.</button>
                </form>
            </div>
</li>   
)
}

export default ShowCase;