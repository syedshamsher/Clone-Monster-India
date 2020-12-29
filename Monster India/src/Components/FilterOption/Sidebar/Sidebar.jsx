import React from 'react'
import { OptionHeader } from '../OptionHeader'
import { Option } from '../Option'
import styles from '../style.module.css';

export function Sidebar() {
    
    const [openFunctionOpt, setOpenFunctionOpt] = React.useState(false);
    const [openRoleOpt, setOpenRoleOpt] = React.useState(false);
    const [openExpOpt, setOpenExpOpt] = React.useState(false);
    const [openCityOpt, setOpenCityOpt] = React.useState(false);
    const [openSalaryOpt, setOpenSalaryOpt] = React.useState(false);
    const [openQualificationOpt, setOpenQualificationOpt] = React.useState(false);
    const [openIndustryOpt, setOpenIndustryOpt] = React.useState(false);
    const [openJobTypeOpt, setOpenJobTypeOpt] = React.useState(false);
    
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
                    <Option label="IT" />
                    <Option label="Manufacturing/Engineering" />
                    <Option label="IT- Technical Staff" />
                    <Option label="Advertising" />
                    <Option label="Team Leader/Technical Leader" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Role" open={openRoleOpt} handleClick={handleRoleOpt} />
                {openRoleOpt && (
                <div className={styles.options}>
                    <Option label="Software Engineer/Programmer" />
                    <Option label="Application Designer Specialist" />
                    <Option label="Application Engineer" />
                    <Option label="Software Developer" />
                    <Option label="Team Leader/Technical Leader" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Experience (in years)" open={openExpOpt} handleClick={handleExpOpt} />
                {openExpOpt && (
                <div className={styles.options}>
                    <Option label="0 - 1 Years" />
                    <Option label="1 - 2 Years" />
                    <Option label="2 - 5 Years" />
                    <Option label="5 - 7 Years" />
                    <Option label="7 - 10 Years" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="City" open={openCityOpt} handleClick={handleCityOpt} />
                {openCityOpt && (
                <div className={styles.options}>
                    <Option label="Bangaluru / Bangalore" />
                    <Option label="Hyderabad / Secunderabad" />
                    <Option label="Pune" />
                    <Option label="Chennai" />
                    <Option label="Mumbai" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Salary" open={openSalaryOpt} handleClick={handleSalaryOpt} />
                {openSalaryOpt && (
                <div className={styles.options}>
                    <Option label="Not Specified" />
                    <Option label="0 - 3Lakhs" />
                    <Option label="3Lakhs - 6Lakhs" />
                    <Option label="6Lakhs - 10Lakhs" />
                    <Option label="10Lakhs - 15Lakhs" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Qualification" open={openQualificationOpt} handleClick={handleQualificationOpt} />
                {openQualificationOpt && (
                <div className={styles.options}>
                    <Option label="BCA" />
                    <Option label="MCOM" />
                    <Option label="BCOM" />
                    <Option label="BTECH" />
                    <Option label="MTECH" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Industry" open={openIndustryOpt} handleClick={handleIndustryOpt} />
                {openIndustryOpt && (
                <div className={styles.options}>
                    <Option label="Software" />
                    <Option label="Banking" />
                    <Option label="Manufacturing" />
                    <Option label="Recruitment" />
                    <Option label="E-Commerce" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
            <div>
                <OptionHeader label="Job Type" open={openJobTypeOpt} handleClick={handleJobTypeOpt} />
                {openJobTypeOpt && (
                <div className={styles.options}>
                    <Option label="Permanent Job" />
                    <Option label="International" />
                    <Option label="Jobs of COVID-19 Layoff" />
                    <Option label="Work From Home" />
                    <Option label="Jobs for Women" />
                </div>
                )}
                <div className={styles.divider}></div>
            </div>
        </div>

    )
}
