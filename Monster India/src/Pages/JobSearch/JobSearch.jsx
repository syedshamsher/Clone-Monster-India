import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobData } from '../../Redux/JobSearch/action'
import data from './data.json'

const JobSearch = () => {
    const [keyword, setKeyword] = React.useState("")
    const [experience, setExperience] = React.useState("")
    const [location, setLocation] = React.useState("")
    const [locationSuggestion, setLocationSuggestion] = React.useState("")
    const [industry, setIndustry] = React.useState("")
    const [functions, setFunctions] = React.useState("")
    const [role, setRoles] = React.useState("")
    const data = useSelector(state => state.jobs)
    const dispatch = useDispatch()
    
    React.useEffect(() => {
        dispatch( getJobData() )
        if(location === ""){
            setLocationSuggestion("")
        }
        else{
            let output = data.filter(item => item.location.toLowerCase().indexOf(location) !== -1)
            console.log(output)
            setLocationSuggestion(output)
        }

    }, [location])

    console.log(data)
    return (
        <div style = {{marginTop: 100, padding: 20, marginLeft: 100}} >
            <input 
                value = {keyword} 
                onChange = {(e) => setKeyword(e.target.value)} 
                placeholder = "Keyword" 
                style = {{height: 35, width: 700, marginBottom: 20, border: "2px solid lightgrey", padding: 5, color: "darkgrey"}}
            />
            <br />
            <select style = {{width: 350, height: 45, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey"}} value = {experience} onChange = {(e) => setExperience(e.target.value)} >
                <option disabled defaultValue>Experience</option>
                <option value = "0" > 0 </option>
                <option value = "1" > 1 </option>
                <option value = "2" > 2 </option>
                <option value = "3" > 3 </option>
                <option value = "4" > 4 </option>
                <option value = "5" > 5 </option>
                <option value = "6" > 6 </option>
                <option value = "7" > 7 </option>
                <option value = "8" > 8 </option>
                <option value = "9" > 9 </option>
                <option value = "10" > 10 </option>
            </select>
            <input placeholder = "Location" style = {{width: 350, height: 32, border: "2px solid lightgrey", padding: 5,  color: "darkgrey"}} value= {location} onChange = {(e) => setLocation(e.target.value)} />
            <div style = {{maxHeight: 200, overflow: "scroll", position: "absolute", marginLeft: 350, marginTop: -20}} >
            {
                locationSuggestion && locationSuggestion.map(item => <div style = {{position: "relative", width: 80, backgroundColor: "white", padding: 5}} key = {item.job_id} > {item.location} </div>)
            }
            </div>
            <select style = {{height: 45, width: 715, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey", zIndex: 0}} value = {industry} onChange = {(e) => setIndustry(e.target.value)} >
                <option disabled selected>Industry</option>
                <option value = "education" > Education </option>
                <option value = "FMCG" > FMCG </option>
                <option value = "healthcare" > Healthcare </option>
                <option value = "general" > General </option>
                <option value = "engineering" > Engineering </option>
                <option value = "fashion" > Fashion </option>
                <option value = "other" > Other </option>
            </select>
            <select style = {{height: 45, width: 715, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey", zIndex: 0}} value = {functions} onChange = {(e) => setFunctions(e.target.value)} >
                <option disabled selected>Function</option>
                <option value = "admin" > Admin </option>
                <option value = "finance" > Finance </option>
                <option value = "sales" > Sales </option>
                <option value = "engineer" > Engineer </option>
                <option value = "manager" > Manager </option>
                <option value = "accountant" > Accountant </option>
                <option value = "editor" > Editor </option>
            </select>
            <select style = {{height: 45, width: 715, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey", zIndex: 0}} value = {role} onChange = {(e) => setRoles(e.target.value)} >
                <option disabled defaultChecked>Role</option>
                <option value = "software developer" > Software Developer </option>
                <option value = "account manager" > Account Manager </option>
                <option value = "sales manager" > Sales Manager </option>
                <option value = "assistant" > Assistant </option>
                <option value = "marketing manager" > Marketing Manager </option>
            </select>
        </div>
    )
}

export default JobSearch
