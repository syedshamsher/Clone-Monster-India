import React from 'react'
import {useSelector} from "react-redux"
import { useParams } from 'react-router-dom'


export const JobDetails = (props) => {
    console.log(props)
    const [data, setData] = React.useState([])
    const jobs = useSelector(state => state.jobs.jobs)
    const params = useParams()

    const id  = Number( params.id )

    React.useEffect( () =>{
        jobs.filter( (item) =>  {
            console.log( item.job_id, "----", id )
            return ( 
                item.job_id === id && setData( [...data, item] )
             )
         } )

    }, [id] )
    
    console.log(data)

    return (
        <div>
            job details page
        </div>
    )
}