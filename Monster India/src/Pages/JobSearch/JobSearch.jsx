import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar } from '../../Components/FilterOption/Sidebar/Sidebar'
import { getJobData } from '../../Redux/JobSearch/action'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import data from './data.json'
import { sendData } from '../../Redux/JobSearchFirst/action'
import styles from './style.module.css'
import { FilteredJob } from '../../Components/FilteredJob'
import  Footer  from '../../Components/Footer/Footer'
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
        width: 500px;
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
        <div className={styles.wrapper}>
                <div className={styles.searchBarWrapper}>
                    {/*SearchBar*/}
                    <input 
                        value = {keyword} 
                        onChange = {(e) => setKeyword(e.target.value)} 
                        placeholder = "Keyword" 
                        style = {{height: 35, width: 500, marginBottom: 20, border: "2px solid lightgrey", padding: 5, color: "darkgrey"}}
                    />
                    <SuggestionBox  id={styles.suggestBox} active = {active} >
                    {
                        keywordSuggestion && keywordSuggestion.map((item, index) => <div style = {{width: 500}}  onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => keywordClick(item.profile_name) } > {item.profile_name} </div>)
                    }
                    </SuggestionBox>
                    <br />
                    <select className={styles.expOpt}  value = {experience} onChange = {(e) => setExperience(e.target.value)} >
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
                    <input className={styles.locationOpt} placeholder = "Location" style = {{width: 350, height: 32, border: "2px solid lightgrey", padding: 5,  color: "darkgrey"}} value= {location} onChange = {(e) => setLocation(e.target.value)} />
                        <SuggestionBox id={styles.locSuggestBox} active = {active} >
                        {
                            locationSuggestion && locationSuggestion.map((item, index) => <div onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => locationClick(item.location)} > {item.location} </div>)
                        }
                        </SuggestionBox>
                    <button className={styles.searchBtn} onClick= {handleClick} >Search</button>
                </div>
             <div className={styles.main}>
                <div className={styles.sidebarWrapper}>
                    <Sidebar />
                </div>
                <div className={styles.midBodyWrapper}>
                    
                    <div>
                        <FilteredJob/>
                    </div>
                   
                </div>
                <div className={styles.addsWrapper}>
                    {/*Adds*/}
                    <div className={styles.firstAdd}>
                        <img src="https://www.stellavirium.org/wp-content/uploads/2020/05/logo-cb-1302x1524.png"/>
                        <h1>CAREER  BOOSTER</h1>
                        <h4>GIVE YOUR CAREER A BOOST WITH MASAI'S PROGRAM</h4>
                        <button><a style={{textDecoration: "none", color: "white"}} href="https://www.masaischool.com/">Know more</a></button>
                    </div>
                </div>
             </div>
             <footer style={{marginTop: '20px'}}>
                 <Footer/>
             </footer>
         </div>
    )
}
export default JobSearch