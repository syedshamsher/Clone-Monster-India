import React from 'react'
import {useSelector} from "react-redux"
import { useParams } from 'react-router-dom'

export const JobDetails = (props) => {
    console.log(props,"props")

    const [data, setData] = React.useState([])
    const jobs = useSelector(state => state.jobs.jobs)
    const params = useParams()
    console.log( data, "data initailly")

   
    React.useEffect( () =>{
        const id  = Number( params.id )
         jobs.filter( (item) =>  {

            return ( 
                item.job_id === id && setData( [...data, item])
             )
         } )
        
        
    }, [] )

    console.log(data)


    return (
        <div>
            JOB DETAILS PAGE
          {/* bikram u can add your component here */}
        </div>
    )
}
