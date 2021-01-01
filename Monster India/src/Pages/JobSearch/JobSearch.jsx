import React from 'react'
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar } from '../../Components/FilterOption/Sidebar/Sidebar'
import { getJobData } from '../../Redux/JobSearch/action'
import { FilteredJob } from '../../Components/FilteredJob'
import  Footer  from '../../Components/Footer/Footer'

const JobSearch = () => {
    const dipatch = useDispatch()
    const jobs = useSelector(state => state.jobs.jobs)

    React.useEffect(() => {
        dipatch(getJobData())
    }, [])

    console.log(jobs)
    return (
         <div className={styles.wrapper}>
                <div className={styles.searchBarWrapper}>
                    {/*SearchBar*/}

                </div>
             <div className={styles.main}>
                <div className={styles.sidebarWrapper}>
                    <Sidebar />
                </div>
                <div className={styles.midBodyWrapper}>
                    <div className={styles.pgnlimitDiv}>
                    {/*pagination limit page items*/}
                    </div>
                    <div>
                        <FilteredJob/>
                    </div>
                    <div>
                        {/*pagination next previous button*/}
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
