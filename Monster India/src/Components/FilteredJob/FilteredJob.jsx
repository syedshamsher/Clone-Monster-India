import React from 'react'
import styles from './style.module.css'
import { useSelector } from 'react-redux'
import { Card } from '../JobCard/Card'
import { Footer } from '../JobCard/Footer'
import { useHistory } from "react-router-dom";
import {SelectOption} from "../Pagination"

export const FilteredJob = () => {
    const filteredJobs = useSelector(state => state.filteredJobs)
    const history = useHistory()
    const [currentPage, setCurrentPage] = React.useState(1)
    const [perPage, setPerPage] = React.useState(2)
    
    const goToJobDetails = (id) =>{
        history.push( `/job-details/${id}` )
    }

    const getItemsPerPage = (number) => {
        setPerPage(number)
        setCurrentPage(1)


    }
    const handleNext = () => {
        setCurrentPage( prev => prev + 1)
    }

    const handlePrevious = () => {
        console.log(currentPage, "curr page in handleprev")
        setCurrentPage( prev => prev - 1 )
    }

    
   const  totalPages = Math.ceil( filteredJobs.jobs.length/perPage );
    return (
        <div>
                <div className={styles.pgnlimitDiv}>
                     {/*pagination limit page items*/}
                    { filteredJobs.jobs.length > 0 &&
                        <div  className = {styles.selectBox} >  
                           <div className = {styles.flexgrow}></div>
                           <div style = {{display:"flex", alignItems:"center"}}>
                                <span> Show </span>
                                <SelectOption onChange = {getItemsPerPage} value = {perPage}/>
                                <span>Per Page</span>
                           </div>
                           
                                
                        </div>
                    }
                   
                </div>
                
                {
                        filteredJobs.jobs.length === 0 ?

                        <div> No Matches </div> :

                            filteredJobs.jobs?.filter( (_,index) => ( index >= (currentPage - 1)*perPage ) && ( index < (currentPage*perPage)  )  ).map((item) => {
                                return (
                                    <div key={item.job_id} className={styles.cardCont}>
                                        <div onClick={() => goToJobDetails(item.job_id)}>
                                        <Card jobs={item}/>
                                        </div>
                                        <Footer jobs={item}/>
                                    </div>
                                )
                            }) 
                    }

                <div style = {{marginTop: "20px", display: "flex", justifyContent: "flex-end"}}>
                    {
                    currentPage <= 1 ? 
                        <button  style = {{ visibility: "hidden"}} onClick = {handlePrevious} >Previous</button>:
                        <button 
                            className = {styles.prevButton} 
                            onClick = {handlePrevious} 
                            color = "primary" 
                            variant = "outlined">Previous</button>         
                    }
                    {
                        filteredJobs.jobs && currentPage >= totalPages ? 
                            <button  style = {{ visibility: "hidden"}} onClick = {handleNext} >Next</button>:
                            <button 
                                className = {styles.nextButton} 
                                onClick = {handleNext} >Next</button>
                                
                        
                    }
                    {/*pagination next previous button*/}
                </div>


                
        </div>
    )
}
