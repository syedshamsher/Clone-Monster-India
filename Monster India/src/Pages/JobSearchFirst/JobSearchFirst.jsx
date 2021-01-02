import React from 'react'
import styled from 'styled-components'
import { sendData } from '../../Redux/JobSearchFirst/action'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'


const SuggestionBox = styled.div`
    & * {
        position: relative;
        width: 360px;
        padding: 5px;
        height: 20px;
        backgroundColor: white;
        padding: 8px;
        border-bottom: 0.5px solid lightgrey
    }
    & :nth-child(${({active}) => active}){
        background: #F8F8F8;
        color: #6C54DA;
        font-weight: bold
    }
`

const JobSearchFirst = () => {
    const data = useSelector(state => state.jobs.jobs)
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
    const history = useHistory()
    
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
        history.push("/jobsearch")
    }

    console.log(keywordSuggestion)
    return (
        <div>
            <h2 style = {{marginLeft: -980, marginTop: 100}} >Advance Job Search</h2>
            <div style = {{margin: "20px 560px 200px 100px", padding: 20, background: "white"}} >
            <input 
                value = {keyword} 
                onChange = {(e) => setKeyword(e.target.value)} 
                placeholder = "Keyword" 
                style = {{height: 35, width: 700, marginBottom: 20, border: "2px solid lightgrey", padding: 5, color: "darkgrey"}}
            />
            <SuggestionBox style = {{maxHeight: 130, overflow: "scroll", position: "absolute", textAlign: "left", marginTop: -20, width: 710, background: "white", marginLeft: 5}} active = {active} >
            {
                keywordSuggestion && keywordSuggestion.map((item, index) => <div style = {{width: 710}} onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => keywordClick(item.profile_name) } > {item.profile_name} </div>)
            }
            </SuggestionBox>
            <br />
            <select style = {{width: 350, height:  32, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey"}} value = {experience} onChange = {(e) => setExperience(e.target.value)} >
            <option selected disabled value = "" hidden > Experience </option>
                        <option value = "0 - 1 Years" > 0 - 1 Years </option>
                        <option value = "1 - 2 Years" > 1 - 2 Years </option>
                        <option value = "2 - 5 Years" > 2 - 5 Years </option>
                        <option value = "5 - 7 Years" > 5 - 7 Years </option>
                        <option value = "7 - 10 Years" > 7 - 10 Years </option>
            </select>
            <input placeholder = "Location" style = {{width: 350, height: 32, border: "2px solid lightgrey", padding: 5,  color: "darkgrey"}} value= {location} onChange = {(e) => setLocation(e.target.value)} />
            <SuggestionBox style = {{maxHeight: 130, overflow: "scroll", position: "absolute", marginLeft: 350, marginTop: -20, width: 360, background: "white"}} active = {active} >
            {
                locationSuggestion && locationSuggestion.map((item, index) => <div onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => locationClick(item.location)} > {item.location} </div>)
            }
            </SuggestionBox>
            <select style = {{height: 45, width: 700, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey", zIndex: 0}} value = {industry} onChange = {(e) => setIndustry(e.target.value)} >
                <option disabled selected value = "" hidden >Industry</option>
                <option value = "Software" > Software </option>
                <option value = "Banking" > Banking </option>
                <option value = "Manufacturing" > Manufacturing </option>
                <option value = "Recruitment" > Recruitment </option>
                <option value = "E-Commerce" > E-Commerce </option>
            </select>
            <select style = {{height: 45, width: 700, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey", zIndex: 0}} value = {functions} onChange = {(e) => setFunctions(e.target.value)} >
                <option disabled selected value = "" hidden >Function</option>
                <option value = "IT" > IT </option>
                <option value = "Manufacturing/Engineering" > Manufacturing/Engineering </option>
                <option value = "IT- Technical Staff" > IT- Technical Staff </option>
                <option value = "Advertising" > Advertising </option>
                <option value = "Team Leader/Technical Leader" > Team Leader/Technical Leader </option>
            </select>
            <select style = {{height: 45, width: 700, marginBottom: 20, border: "2px solid lightgrey", padding: 5,  color: "darkgrey", zIndex: 0}} value = {role} onChange = {(e) => setRoles(e.target.value)} >
                <option disabled selected value = "" hidden >Role</option>
                <option value = "Software Engineer/Programmer" > Software Engineer/Programmer </option>
                <option value = "Application Designer Specialist" > Application Designer Specialist </option>
                <option value = "Application Engineer" > Application Engineer </option>
                <option value = "Software Developer" > Software Developer </option>
                <option value = "Team Leader/Technical Leader" > Team Leader/Technical Leader </option>
            </select>
            <button onClick= {handleClick} style = {{width: 716, height: 50, padding: 10, marginLeft: "auto", background: "#6C59D7", color: "white", fontSize: 16, fontWeight: 700}} >Search</button>
        </div>
        <Footer />
        </div>
        
    )
}

export default JobSearchFirst
