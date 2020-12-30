import React from 'react'
import data from './data.json'
import styled from 'styled-components'
import { sendData } from '../../Redux/JobSearchFirst/action'
import { useDispatch } from 'react-redux'

const SuggestionBox = styled.div`
    & * {
        position: relative;
        width: 360px;
        padding: 5px;
        height: 20px;
        backgroundColor: white;
        padding: 5px;
        border: 0.5px solid lightgrey
    }
    & :nth-child(${({active}) => active}){
        background: lightgray;
        color: white;
        font-weight: bold
    }
`

const JobSearchFirst = () => {
    const [keyword, setKeyword] = React.useState("")
    const [experience, setExperience] = React.useState("")
    const [location, setLocation] = React.useState("")
    const [locationSuggestion, setLocationSuggestion] = React.useState("")
    const [keywordSuggestion, setKeywordSuggestion] = React.useState("")
    const [industry, setIndustry] = React.useState("")
    const [functions, setFunctions] = React.useState("")
    const [role, setRoles] = React.useState("")
    const [active, setActive] = React.useState(0)
    const dispatch = useDispatch()
    
    React.useEffect(() => {
        if(location === ""){
            setLocationSuggestion("")
        }
        else{
            let output = data.filter(item => item.location.toLowerCase().indexOf(location) !== -1)
            console.log(output)
            setLocationSuggestion(output)
        }
        if(keyword === ""){
            setKeywordSuggestion("")
        }
        else{
            let output2 = data.filter(item => item.profile_name.toLowerCase().indexOf(keyword) !== -1)
            console.log(output2)
            setKeywordSuggestion(output2)
        }

    }, [location, keyword])

    const keywordClick = (key) => {
        setKeyword(key)
        setKeywordSuggestion("")
    }

    const locationClick = (key) => {
        setLocation(key)
        setLocationSuggestion("")
    }

    const handleClick = () => {
        dispatch(sendData(keyword, experience, location, industry, functions, role))
    }

    console.log(keywordSuggestion)
    return (
        <div style = {{margin: "100px 560px 0px 100px", padding: 20, background: "white"}} >
            <input 
                value = {keyword} 
                onChange = {(e) => setKeyword(e.target.value)} 
                placeholder = "Keyword" 
                style = {{height: 35, width: 700, marginBottom: 20, border: "2px solid lightgrey", padding: 5, color: "darkgrey"}}
            />
            <SuggestionBox style = {{maxHeight: 130, overflow: "scroll", position: "absolute", marginTop: -20, width: 710, background: "white"}} active = {active} >
            {
                keywordSuggestion && keywordSuggestion.map((item, index) => <div style = {{width: 710}} onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => keywordClick(item.profile_name) } > {item.profile_name} </div>)
            }
            </SuggestionBox>
            <br />
            <select style = {{width: 350, height: 45, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey"}} value = {experience} onChange = {(e) => setExperience(e.target.value)} >
                <option selected disabled value = "" hidden > Experience </option>
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
            <SuggestionBox style = {{maxHeight: 130, overflow: "scroll", position: "absolute", marginLeft: 350, marginTop: -20, width: 360, background: "white"}} active = {active} >
            {
                locationSuggestion && locationSuggestion.map((item, index) => <div onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => locationClick(item.location)} > {item.location} </div>)
            }
            </SuggestionBox>
            <select style = {{height: 45, width: 715, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey", zIndex: 0}} value = {industry} onChange = {(e) => setIndustry(e.target.value)} >
                <option disabled selected value = "" hidden >Industry</option>
                <option value = "education" > Education </option>
                <option value = "FMCG" > FMCG </option>
                <option value = "healthcare" > Healthcare </option>
                <option value = "general" > General </option>
                <option value = "engineering" > Engineering </option>
                <option value = "fashion" > Fashion </option>
                <option value = "other" > Other </option>
            </select>
            <select style = {{height: 45, width: 715, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey", zIndex: 0}} value = {functions} onChange = {(e) => setFunctions(e.target.value)} >
                <option disabled selected value = "" hidden >Function</option>
                <option value = "admin" > Admin </option>
                <option value = "finance" > Finance </option>
                <option value = "sales" > Sales </option>
                <option value = "engineer" > Engineer </option>
                <option value = "manager" > Manager </option>
                <option value = "accountant" > Accountant </option>
                <option value = "editor" > Editor </option>
            </select>
            <select style = {{height: 45, width: 715, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey", zIndex: 0}} value = {role} onChange = {(e) => setRoles(e.target.value)} >
                <option disabled selected value = "" hidden >Role</option>
                <option value = "software developer" > Software Developer </option>
                <option value = "account manager" > Account Manager </option>
                <option value = "sales manager" > Sales Manager </option>
                <option value = "assistant" > Assistant </option>
                <option value = "marketing manager" > Marketing Manager </option>
            </select>
            <button onClick= {handleClick} style = {{width: 716, height: 50, padding: 10, marginLeft: "auto", background: "#6C59D7", color: "white"}} >Search</button>
        </div>
    )
}

export default JobSearchFirst
