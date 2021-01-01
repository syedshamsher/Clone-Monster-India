import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar } from '../../Components/FilterOption/Sidebar/Sidebar'
import { getJobData } from '../../Redux/JobSearch/action'
import {Card} from '../../Components/JobCard/Card/Card'
import { Footer } from '../../Components/JobCard/Footer/Footer'
import { JobCard } from '../../Components/JobCard/JobCard'

const JobSearch = () => {
    const dipatch = useDispatch()
    const jobs = useSelector(state => state.jobs.jobs)

    React.useEffect(() => {
        dipatch(getJobData())
    }, [])

    console.log(jobs)
    return (
        <div style= {{padding: 40}} >
            {/* <p> Home/Job Search/ </p> */}
            <div style= {{background: "#E0E0E0", height: 70, width: 1300, marginTop: -50 }} >
                {/* <input 
                    value = {keyword} 
                    onChange = {(e) => setKeyword(e.target.value)} 
                    placeholder = "Keyword" 
                    style = {{height: 35, width: 500, marginBottom: 20, border: "2px solid lightgrey", padding: 5, color: "darkgrey"}}
                /> */}
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
