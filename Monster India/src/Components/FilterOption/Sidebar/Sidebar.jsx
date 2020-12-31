import React from 'react'
import { OptionHeader } from '../OptionHeader'
import { Option } from '../Option'
import styles from '../style.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredJobData } from '../../../Redux/FilteredJobs/action'
import { getJobData } from '../../../Redux/JobSearch/action'
import { Card } from '../../JobCard/Card';
import { Footer } from '../../JobCard/Footer';
import { useHistory } from "react-router-dom";

export function Sidebar() {
    const filteredJobs = useSelector(state => state.filteredJobs)
    console.log( filteredJobs )
    const dispatch = useDispatch()
    const history = useHistory()
    const [openFunctionOpt, setOpenFunctionOpt] = React.useState(false);
    const [openRoleOpt, setOpenRoleOpt] = React.useState(false);
    const [openExpOpt, setOpenExpOpt] = React.useState(false);
    const [openCityOpt, setOpenCityOpt] = React.useState(false);
    const [openSalaryOpt, setOpenSalaryOpt] = React.useState(false);
    const [openQualificationOpt, setOpenQualificationOpt] = React.useState(false);
    const [openIndustryOpt, setOpenIndustryOpt] = React.useState(false);
    const [openJobTypeOpt, setOpenJobTypeOpt] = React.useState(false);
    const [params, setParams] = React.useState([]);
    const [found, setFound] = React.useState([]);
   
    const handleChange = (e) => {
        let check = e.target.checked;
        var k = e.target.name
        var v = e.target.value
        // console.log( check )
        if( check ) {
            setParams([...params, {key: k, value: v}])
        }
        else {
            setParams(
                params.filter(item => item.value !== v )
            )
        }
    }

    React.useEffect(() => {
        dispatch(getJobData());
        dispatch(getFilteredJobData(params))
    }, []);

    const goToJobDetails = (id) =>{
        history.push( `/job-details/${id}` )
    }

    const handleClick = () => {
        dispatch( getFilteredJobData(params) )
    }
    
    const handleFunctionOpt = () => {
        openFunctionOpt ? setOpenFunctionOpt(false) : setOpenFunctionOpt(true);
    };

    const handleRoleOpt = () => {
        openRoleOpt ? setOpenRoleOpt(false) : setOpenRoleOpt(true);
    };

    const handleExpOpt = () => {
        openExpOpt ? setOpenExpOpt(false) : setOpenExpOpt(true);
    };

    const handleCityOpt = () => {
        openCityOpt ? setOpenCityOpt(false) : setOpenCityOpt(true);
    };

    const handleSalaryOpt = () => {
        openSalaryOpt ? setOpenSalaryOpt(false) : setOpenSalaryOpt(true);
    };

    const handleQualificationOpt = () => {
        openQualificationOpt ? setOpenQualificationOpt(false) : setOpenQualificationOpt(true);
    };

    const handleIndustryOpt = () => {
        openIndustryOpt ? setOpenIndustryOpt(false) : setOpenIndustryOpt(true);
    };

    const handleJobTypeOpt = () => {
        openJobTypeOpt ? setOpenJobTypeOpt(false) : setOpenJobTypeOpt(true);
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <div>
                    <button onClick={handleClick}>Filter</button>
                </div>
                <div className={styles.headerWrapper}>    
                    <div className={styles.header} >Filter By</div>
                    <div className={styles.divider}></div>
                </div>
                <div>
                    <OptionHeader label="Function" open={openFunctionOpt} handleClick={handleFunctionOpt} />
                    {openFunctionOpt && (
                    <div className={styles.options}>
                        <Option handleChange={handleChange} name="function"  label="IT" />
                        <Option handleChange={handleChange} name="function"  label="Manufacturing/Engineering" />
                        <Option handleChange={handleChange} name="function"  label="IT- Technical Staff" />
                        <Option handleChange={handleChange} name="function"  label="Advertising" />
                        <Option handleChange={handleChange} name="function"  label="Team Leader/Technical Leader" />
                    </div>
                    )}
                    <div className={styles.divider}></div>
                </div>
                <div>
                    <OptionHeader label="Role" open={openRoleOpt} handleClick={handleRoleOpt} />
                    {openRoleOpt && (
                    <div className={styles.options}>
                        <Option handleChange={handleChange} name="role" label="Software Engineer/Programmer" />
                        <Option handleChange={handleChange} name="role" label="Application Designer Specialist"  />
                        <Option handleChange={handleChange} name="role" label="Application Engineer" />
                        <Option handleChange={handleChange} name="role" label="Software Developer" />
                        <Option handleChange={handleChange} name="role" label="Team Leader/Technical Leader" />
                    </div>
                    )}
                    <div className={styles.divider}></div>
                </div>
                <div>
                    <OptionHeader label="Experience (in years)" open={openExpOpt} handleClick={handleExpOpt} />
                    {openExpOpt && (
                    <div className={styles.options}>
                        <Option handleChange={handleChange} name="experience" label="0 - 1 Years" />
                        <Option handleChange={handleChange} name="experience" label="1 - 2 Years" />
                        <Option handleChange={handleChange} name="experience" label="2 - 5 Years" />
                        <Option handleChange={handleChange} name="experience" label="5 - 7 Years" />
                        <Option handleChange={handleChange} name="experience" label="7 - 10 Years" />
                    </div>
                    )}
                    <div className={styles.divider}></div>
                </div>
                <div>
                    <OptionHeader label="City"  open={openCityOpt} handleClick={handleCityOpt} />
                    {openCityOpt && (
                    <div className={styles.options}>
                        <Option handleChange={handleChange} name="location" label="Bangaluru / Bangalore" />
                        <Option handleChange={handleChange} name="location" label="Delhi" />
                        <Option handleChange={handleChange} name="location" label="Bhopal" />
                        <Option handleChange={handleChange} name="location" label="Chennai" />
                        <Option handleChange={handleChange} name="location" label="Mumbai" />
                    </div>
                    )}
                    <div className={styles.divider}></div>
                </div>
                <div>
                    <OptionHeader label="Salary" open={openSalaryOpt} handleClick={handleSalaryOpt} />
                    {openSalaryOpt && (
                    <div className={styles.options}>
                        <Option handleChange={handleChange} name="salary" label="Not Specified" />
                        <Option handleChange={handleChange} name="salary" label="0 - 3Lakhs" />
                        <Option handleChange={handleChange} name="salary" label="3Lakhs - 6Lakhs" />
                        <Option handleChange={handleChange} name="salary" label="6Lakhs - 10Lakhs" />
                        <Option handleChange={handleChange} name="salary" label="10Lakhs - 15Lakhs" />
                    </div>
                    )}
                    <div className={styles.divider}></div>
                </div>
                <div>
                    <OptionHeader label="Qualification" open={openQualificationOpt} handleClick={handleQualificationOpt} />
                    {openQualificationOpt && (
                    <div className={styles.options}>
                        <Option handleChange={handleChange} name="qualifications" label="BCA" />
                        <Option handleChange={handleChange} name="qualifications" label="MCA" />
                        <Option handleChange={handleChange} name="qualifications" label="BCOM" />
                        <Option handleChange={handleChange} name="qualifications" label="BTECH" />
                        <Option handleChange={handleChange} name="qualifications" label="MTECH" />
                    </div>
                    )}
                    <div className={styles.divider}></div>
                </div>
                <div>
                    <OptionHeader label="Industry" open={openIndustryOpt} handleClick={handleIndustryOpt} />
                    {openIndustryOpt && (
                    <div className={styles.options}>
                        <Option handleChange={handleChange} name="industry" label="Software" />
                        <Option handleChange={handleChange} name="industry" label="Banking" />
                        <Option handleChange={handleChange} name="industry" label="Manufacturing" />
                        <Option handleChange={handleChange} name="industry" label="Recruitment" />
                        <Option handleChange={handleChange} name="industry" label="E-Commerce" />
                    </div>
                    )}
                    <div className={styles.divider}></div>
                </div>
                <div>
                    <OptionHeader label="Job Type" open={openJobTypeOpt} handleClick={handleJobTypeOpt} />
                    {openJobTypeOpt && (
                    <div className={styles.options}>
                        <Option handleChange={handleChange} name="jobType" label="Permanent Job" />
                        <Option handleChange={handleChange} name="jobType" label="International" />
                        <Option handleChange={handleChange} name="jobType" label="Jobs of COVID-19 Layoff" />
                        <Option handleChange={handleChange} name="jobType" label="Work From Home" />
                        <Option handleChange={handleChange} name="jobType" label="Jobs for Women" />
                    </div>
                    )}
                    <div className={styles.divider}></div>
                </div>
            </div>
            <div>

                {
                    filteredJobs.jobs.length === 0 ?

                    <div> No Matches </div> :


                        filteredJobs.jobs?.map((item) => {
                            return (
                                <div onClick={() => goToJobDetails(item.job_id)} key={item.job_id}>
                                    <Card jobs={item}/>
                                    <Footer jobs={item}/>
                                </div>
                            )
                        }) 
                }
                
            </div>

        </div>

    )
}
