    import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar } from '../../Components/FilterOption/Sidebar/Sidebar'
import { getJobData } from '../../Redux/JobSearch/action'
import {Card} from '../../Components/JobCard/Card/Card'
import { Footer } from '../../Components/JobCard/Footer/Footer'
import { JobCard } from '../../Components/JobCard/JobCard'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import data from './data.json'
import { sendData } from '../../Redux/JobSearchFirst/action'

const JobSearch = () => {
    const dispatch = useDispatch()
    const jobs = useSelector(state => state.jobs.jobs)
    const [keyword, setKeyword] = React.useState("")
    const [location, setLocation] = React.useState("")
    const [locationSuggestion, setLocationSuggestion] = React.useState("")
    const [keywordSuggestion, setKeywordSuggestion] = React.useState("")
    const [active, setActive] = React.useState(0)
    const [experience, setExperience] = React.useState("")
    const history = useHistory()

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

    React.useEffect(() => {
        dispatch(getJobData())
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
    }, [keyword, location])

    const keywordClick = (key) => {
        setKeyword(key)
        setKeywordSuggestion("")
    }

    const locationClick = (key) => {
        setLocation(key)
        setLocationSuggestion("")
    }

    const handleClick = () => {
        dispatch(sendData(keyword))
        // history.push("/jobsearch")
    }

    console.log(jobs)
    return (
        <div style= {{padding: 40}} >
            {/* <p> Home/Job Search/ </p> */}
            <div style= {{background: "#E0E0E0", height: 70, width: 1320, marginTop: 0, display:"flex" }} >
                <input 
                    value = {keyword} 
                    onChange = {(e) => setKeyword(e.target.value)} 
                    placeholder = "Keyword" 
                    style = {{height: 35, width: 500, border: "none", padding: 5, color: "darkgrey", outline: "none", marginTop: 10, marginLeft: 10, marginRight: 5}}
                />
                <SuggestionBox style = {{maxHeight: 130,textAlign: "left", overflow: "scroll", position: "absolute", marginTop: 50, width: 510, background: "white", marginLeft: 10}} active = {active} >
                {
                    keywordSuggestion && keywordSuggestion.map((item, index) => <div style = {{width: 710, paddingLeft: 20}} onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => keywordClick(item.profile_name) } > {item.profile_name} </div>)
                }
                </SuggestionBox>
                <input placeholder = "Location" style = {{width: 350, marginTop: 10, height: 35, border: "0px", padding: 5,marginRight: 5,  color: "darkgrey", outline: "none"}} value= {location} onChange = {(e) => setLocation(e.target.value)} />
                <SuggestionBox style = {{maxHeight: 130, overflow: "scroll", position: "absolute", marginLeft: 525, marginTop: 55, width: 360, background: "white"}} active = {active} >
                {
                    locationSuggestion && locationSuggestion.map((item, index) => <div onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => locationClick(item.location)} > {item.location} </div>)
                }
                </SuggestionBox>
                <select style = {{width: 250, height: 45, marginBottom: 20, border: "2px solid lightgrey", padding: 5, marginTop: 10, color: "darkgrey", outline: "none"}} value = {experience} onChange = {(e) => setExperience(e.target.value)} >
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
                <button onClick= {handleClick} style ={{background: "#6C59D7", borderRadius: "0px", marginTop: 10, border: "0px", height: 44, width: 120, color: "white", outline: "none", fontSize: 15, fontWeight: 700, outline: "none"}} >Search</button> 
            </div>
            <p style = {{fontSize: 30, margin: 30, marginLeft: -1050, color: "grey"}} >Search Results - {jobs.length} </p>
            <div style ={{display: "flex"}} >
            <Sidebar />
            <div style= {{marginLeft: 60}} >
            {/* {
                jobs.length > 0 && jobs?.map(job => (
                    <div> 
                        <Card jobs = {job}  />
                        <Footer jobs = {job}/>
                    </div>
                ))
            } */}
            </div>
        </div>
        </div>
        
    )
}

export default JobSearch
