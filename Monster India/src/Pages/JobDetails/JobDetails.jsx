import React from 'react'
import {useSelector} from "react-redux"
import { useParams } from 'react-router-dom'
import { JobPage } from '../JobPage/JobPage'

export const JobDetails = (props) => {
    const [data, setData] = React.useState({})
    const jobs = useSelector(state => state.jobs.jobs)
    const params = useParams()
    
    // console.log(jobs)
    const id  = Number( params.id )

    React.useEffect( () =>{
        jobs.find( (item) =>  {
            // console.log( item.job_id, "----", id )
            return ( 
                item.job_id === id && setData( item )
             )
         } )

    },[] )
    
    
    console.log(data)
    return (
        <div>
            <JobPage data = {data} />
        </div>
    )
}