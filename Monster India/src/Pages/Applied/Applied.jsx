import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

export const Applied = () => {
    // const [data, setData] = React.useState({})
    // const jobs = useSelector(state => state.jobs.jobs)
    // const {id} = useParams()

    // const id  = ( params.id )

    // React.useEffect( () =>{
    //     const obj = jobs.find( (item) => item.job_id === id )
    //     console.log(obj)
    //     setData(obj)

    // },[] )
    
    // console.log(id)
    return (
        <div>
            <p style = {{marginLeft: -1050, fontSize: 30, marginTop: 30}} >Job Applied</p>
            <div style = {{marginTop: 25, marginLeft: 110, height: 220, width: 700, background: "white", padding: 30}} >
                <div style = {{display: "flex"}}>
                <img style = {{marginTop: 10}} src= "https://www.flaticon.com/svg/static/icons/svg/992/992481.svg" height= "80px" />
                <div>
                    <p style = {{marginTop: 20, marginLeft: -265, lineHeight: -2}}><b>  Congratulations! </b> </p>
                    <p style = {{marginTop: 20, marginLeft: 20, lineHeight: -2}} > <b> You have successfully submitted your job application </b></p>
                </div>
                </div>
                <hr style = {{marginTop: 70, marginLeft: 80, marginRight: 50, color: "darkgrey"}} />
                <p style = {{marginTop: 20, marginLeft: 50, color: "grey"}} > Let recruiters find you before your competition. Get <a href= "http://localhost:3000" >Monster Services</a> and get ahead. Monster Services and get ahead.</p>
            </div>
            
        </div>
    )
}
