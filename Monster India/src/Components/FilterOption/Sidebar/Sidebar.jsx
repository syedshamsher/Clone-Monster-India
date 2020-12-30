import React from 'react'
import { OptionHeader } from '../OptionHeader'
import { Option } from '../Option'
import styles from '../style.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { getJobData } from '../../../Redux/JobSearch/action'

export function Sidebar() {
    const jobs = useSelector(state => state.jobs)
    const dispatch = useDispatch()
    console.log( jobs )
    React.useEffect(() => {
        dispatch( getJobData() )
    },[])
    
    const [openFunctionOpt, setOpenFunctionOpt] = React.useState(false);
    const [openRoleOpt, setOpenRoleOpt] = React.useState(false);
    const [openExpOpt, setOpenExpOpt] = React.useState(false);
    const [openCityOpt, setOpenCityOpt] = React.useState(false);
    const [openSalaryOpt, setOpenSalaryOpt] = React.useState(false);
    const [openQualificationOpt, setOpenQualificationOpt] = React.useState(false);
    const [openIndustryOpt, setOpenIndustryOpt] = React.useState(false);
    const [openJobTypeOpt, setOpenJobTypeOpt] = React.useState(false);
    const handleChange = (e) => {
        let val = e.target.value;
        let check = e.target.checked
        var arr = [];
        if( check ) {
            arr.push( val )
        } 
        else {
            for( let i = 0; i < arr.length; i++ ) {
                if( val === arr[i] ) {
                    arr.splice(i, 0)
                }
            }
        }
        console.log(check, val, arr)
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
            <div className={styles.headerWrapper}>    
                <div className={styles.header} >Filter By</div>
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Function" open={openFunctionOpt} handleClick={handleFunctionOpt} />
                {openFunctionOpt && (
                <div className={styles.options}>
                    <Option handleChange={handleChange} checked  label="IT" />
                    <Option handleChange={handleChange} checked  label="Manufacturing/Engineering" />
                    <Option handleChange={handleChange} checked  label="IT- Technical Staff" />
                    <Option handleChange={handleChange} checked  label="Advertising" />
                    <Option handleChange={handleChange} checked  label="Team Leader/Technical Leader" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Role" open={openRoleOpt} handleClick={handleRoleOpt} />
                {openRoleOpt && (
                <div className={styles.options}>
                    <Option handleChange={handleChange} label="Software Engineer/Programmer" value="software" />
                    <Option handleChange={handleChange} label="Application Designer Specialist" value="application"  />
                    <Option handleChange={handleChange} label="Application Engineer" />
                    <Option handleChange={handleChange} label="Software Developer" />
                    <Option handleChange={handleChange} label="Team Leader/Technical Leader" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Experience (in years)" open={openExpOpt} handleClick={handleExpOpt} />
                {openExpOpt && (
                <div className={styles.options}>
                    <Option handleChange={handleChange} label="0 - 1 Years" />
                    <Option handleChange={handleChange} label="1 - 2 Years" />
                    <Option handleChange={handleChange} label="2 - 5 Years" />
                    <Option handleChange={handleChange} label="5 - 7 Years" />
                    <Option handleChange={handleChange} label="7 - 10 Years" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="City" open={openCityOpt} handleClick={handleCityOpt} />
                {openCityOpt && (
                <div className={styles.options}>
                    <Option handleChange={handleChange} label="Bangaluru / Bangalore" />
                    <Option handleChange={handleChange} label="Hyderabad / Secunderabad" />
                    <Option handleChange={handleChange} label="Pune" />
                    <Option handleChange={handleChange} label="Chennai" />
                    <Option handleChange={handleChange} label="Mumbai" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Salary" open={openSalaryOpt} handleClick={handleSalaryOpt} />
                {openSalaryOpt && (
                <div className={styles.options}>
                    <Option handleChange={handleChange} label="Not Specified" />
                    <Option handleChange={handleChange} label="0 - 3Lakhs" />
                    <Option handleChange={handleChange} label="3Lakhs - 6Lakhs" />
                    <Option handleChange={handleChange} label="6Lakhs - 10Lakhs" />
                    <Option handleChange={handleChange} label="10Lakhs - 15Lakhs" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Qualification" open={openQualificationOpt} handleClick={handleQualificationOpt} />
                {openQualificationOpt && (
                <div className={styles.options}>
                    <Option handleChange={handleChange} label="BCA" />
                    <Option handleChange={handleChange} label="MCOM" />
                    <Option handleChange={handleChange} label="BCOM" />
                    <Option handleChange={handleChange} label="BTECH" />
                    <Option handleChange={handleChange} label="MTECH" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Industry" open={openIndustryOpt} handleClick={handleIndustryOpt} />
                {openIndustryOpt && (
                <div className={styles.options}>
                    <Option handleChange={handleChange} label="Software" />
                    <Option handleChange={handleChange} label="Banking" />
                    <Option handleChange={handleChange} label="Manufacturing" />
                    <Option handleChange={handleChange} label="Recruitment" />
                    <Option handleChange={handleChange} label="E-Commerce" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Job Type" open={openJobTypeOpt} handleClick={handleJobTypeOpt} />
                {openJobTypeOpt && (
                <div className={styles.options}>
                    <Option handleChange={handleChange} label="Permanent Job" />
                    <Option handleChange={handleChange} label="International" />
                    <Option handleChange={handleChange} label="Jobs of COVID-19 Layoff" />
                    <Option handleChange={handleChange} label="Work From Home" />
                    <Option handleChange={handleChange} label="Jobs for Women" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
        </div>

    )
}
