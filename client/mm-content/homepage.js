import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ShowCase from './utils/table.github.user';
import Validator from "../mm-admin/auth/auth.validator"
import { set } from 'mongoose';
const Homepage = () => {

const [organisations, setOrgnisations] = useState([])

const [searchContributor, setSearchContributor] = useState('');
const [searchContributorResult, setSearchContributorResult] = useState([]);

const [isAdded, setAdded] = useState(false);

useEffect(() => {
    let cleanup = false;
        axios.get("https://api.github.com/repos/git/git/contributors")
        .then(response => {
            const all = response.data;
            const result = all.filter(contributor => {
                return contributor.login.toLowerCase().includes(searchContributor.toLowerCase())
            })
            setSearchContributorResult(result)
        })
        axios.get("https://api.github.com/organizations")
        .then(response => {
            const all = response.data;
            const result = all.filter(contributor => {
                return contributor.login.toLowerCase().includes(searchContributor.toLowerCase())
            })
            setOrgnisations(result)
        })
        return () => {
            cleanup = true;
        }
}, [searchContributor])

const makeSearchContr = event => {
    event.preventDefault()
    setSearchContributor(event.target.value)
}
const addFavorite = (favorite, notes) => event => {
    event.preventDefault();
    if (Validator.isAuthenticated()) {
        const id = Validator.isAuthenticated().user._id;
        const favorites = {
            item : JSON.stringify(favorite),
            note : notes
        }
        axios.put("/user/action/" + id, favorites)
        .then(res => {
            setAdded(true)
            const timer = setTimeout(() => {
                setAdded(false)
            }, 4000)
           return () => clearTimeout(timer)
        })
        .catch(error => console.log(error))
    } else {
        console.log("Need to loged")
    }
}
const contributorGit = () => {
    return searchContributorResult.map((contributor, index) => {
        return <ShowCase key={index} item={contributor} status={isAdded} favorite={addFavorite}/>
    })
}
const organisationsGit = () => {
    return organisations.map((organisation, index) => {
        return <ShowCase key={index} item={organisation} favorite={addFavorite}/>
    })
}
return (
    <article>
        <div className="">
                <div className="container">
                    <h1>Github users</h1>
                    <p>Find out the list of github contributor and organisations</p>
                </div>
                <div className="container">
                    <form>
                        <div className="">
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" value={searchContributor} onChange={makeSearchContr}/>
                        </div>
                    </form>
                </div>
        </div>
        <div className="github-user" id="github">
            <div className="container">
                <h2>List contributor :</h2>
                <ul style={{paddingLeft : '0px'}}>
                    {contributorGit()}
                </ul>
                <h2>List contributor :</h2>
                <ul style={{paddingLeft : '0px'}}>
                    {organisationsGit()}
                </ul>
            </div>
        </div>
    </article>
)
}
export default Homepage;