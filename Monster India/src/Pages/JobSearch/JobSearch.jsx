import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar } from '../../Components/FilterOption/Sidebar/Sidebar'
import { getJobData } from '../../Redux/JobSearch/action'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
// import data from './data.json'
import { sendData } from '../../Redux/JobSearchFirst/action'
import styles from './style.module.css'
import { FilteredJob } from '../../Components/FilteredJob'
import  Footer  from '../../Components/Footer/Footer'

const JobSearch = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.jobs.jobs)
    const filteredJobs = useSelector(state => state.filteredJobs)
    const keyword2  = useSelector(state => state.jobsFirst.keyword)
    const [keyword, setKeyword] = React.useState("")
    const [location, setLocation] = React.useState("")
    const [locationSuggestion, setLocationSuggestion] = React.useState("")
    const [keywordSuggestion, setKeywordSuggestion] = React.useState("")
    const [active, setActive] = React.useState(0)
    const [experience, setExperience] = React.useState("")
    const history = useHistory()

    const SuggestionBox = styled.div`
    & * {
        // position: relative;
        width: 520px;
        padding: 20px;
        height: 40px;
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
            setLocationSuggestion(output)
        }
        if(keyword === ""){
            setKeywordSuggestion("")
        }
        else{
            let output2 = data.filter(item => item.profile_name.toLowerCase().indexOf(keyword) !== -1)
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
        dispatch(sendData(keyword, experience, location))
        window.location.reload()
    }
    // console.log(jobs)


    // console.log(jobs)
    return (
        <div className={styles.wrapper} style = {{marginTop: 80}} >

                <div className={styles.searchBarWrapper}>
                    {/*SearchBar*/}
                    {/* <input 
                        value = {keyword} 
                        onChange = {(e) => setKeyword(e.target.value)} 
                        placeholder = "Keyword" 
                        style = {{height: 35, width: 500, marginBottom: 20, border: "2px solid lightgrey", padding: 5, color: "darkgrey"}}
                    />
                    <SuggestionBox  id={styles.suggestBox} active = {active} >
                    {
                        keywordSuggestion && keywordSuggestion.map((item, index) => <div style = {{width: 500}}  onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => keywordClick(item.profile_name) } > {item.profile_name} </div>)
                    }
                    </SuggestionBox> */}
                    <br />
                    {/* <input className={styles.locationOpt} placeholder = "Location" style = {{width: 350, height: 32, border: "2px solid lightgrey", padding: 5,  color: "darkgrey"}} value= {location} onChange = {(e) => setLocation(e.target.value)} />
                        <SuggestionBox id={styles.locSuggestBox} active = {active} >
                        {
                            locationSuggestion && locationSuggestion.map((item, index) => <div onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => locationClick(item.location)} > {item.location} </div>)
                        }
                        </SuggestionBox> */}
                    <div style = {{display:'flex', flexDirection:'column'}}>
                        <input 
                            value = {keyword} 
                            onChange = {(e) => setKeyword(e.target.value)} 
                            placeholder = "Keyword" 
                            style = {{height: '45px', width: '580px', marginLeft:'40px',outline:'none', border: "none", color: "darkgrey"}}
                        />
                        <SuggestionBox  id={styles.suggestBox} active = {active} >
                        {
                            keywordSuggestion && keywordSuggestion.map((item, index) => <div style = {{width: 580}}  onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => keywordClick(item.profile_name) } > {item.profile_name} </div>)
                        }
                        </SuggestionBox>
                    </div>
                    <br />
                    <select className={styles.expOpt}  value = {experience} onChange = {(e) => setExperience(e.target.value)} >
                        <option selected disabled value = "" hidden > Experience </option>
                        <option value = "0 - 1 Years" > 0 - 1 Years </option>
                        <option value = "1 - 2 Years" > 1 - 2 Years </option>
                        <option value = "2 - 5 Years" > 2 - 5 Years </option>
                        <option value = "5 - 7 Years" > 5 - 7 Years </option>
                        <option value = "7 - 10 Years" > 7 - 10 Years </option>
                    </select>
                    <div style = {{display:'flex', flexDirection:'column'}}>
                        <input className={styles.locationOpt} placeholder = "Location" value= {location} onChange = {(e) => setLocation(e.target.value)} />
                            <SuggestionBox id={styles.locSuggestBox} active = {active} >
                            {
                                locationSuggestion && locationSuggestion.map((item, index) => <div onMouseOver = {() => setActive(index+1)} key = {item.job_id} onClick = {() => locationClick(item.location)} > {item.location} </div>)
                            }
                            </SuggestionBox>
                    </div>
                    <button className={styles.searchBtn} onClick= {handleClick} >Search</button>
                </div>
                <div className={styles.searchItems}>
                    <h1 className={styles.searchItems}>Search Results - {filteredJobs.jobs.length}</h1>
                </div>
             <div className={styles.main}>
                <div className={styles.sidebarWrapper}>
                    <Sidebar />
                </div>
                <div className={styles.midBodyWrapper}>
                    <div>
                        {
                            keyword2 === "" ? "" : <div> Search Results for: {keyword2} </div>
                        }
                    </div>

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