import React from 'react';
import { Menu, Grid, Dropdown, Button } from 'antd';
import './Nav.css';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredJobData } from '../../Redux/FilteredJobs/action'


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  let history = useHistory()
  const dispatch = useDispatch()

	const handleJobSearch = (event) => {
		history.push('/jobsearchfirst')
    };
  
  var params = []
  const handleWfh = () => {
      params = [{key: "job_type", value: "Work From Home"}]
      dispatch( getFilteredJobData(params) ); //
      history.push('/jobsearch/?job_type=Work%From%Home')
    };

  const handleWfhSort = (e) => {
      let city = e.target.id
      console.log( city )
      params = [{key: "job_type", value: "Work From Home"},{key: "job_type", value: city} ]
        dispatch( getFilteredJobData(params) ); //
        history.push(`/jobsearch/?job_type=Work%From%Home&location=${city}`)
    };


  
    
    const wfh = (
      <Menu>
        <Menu.Item >
          <div id = "Bangaluru / Bangalore" onClick = {(e) => handleWfhSort(e)}>
              JOBS IN BANGLORE
          </div>
        </Menu.Item>
        <Menu.Item >
          <div id = "Delhi" onClick = {(e) => handleWfhSort(e)}>
            JOBS BY DELHI
          </div>
        </Menu.Item>
        <Menu.Item >
          <div id = "Bhopal" onClick = {(e) => handleWfhSort(e)}>
            JOBS BY BHOPAL
          </div>
        </Menu.Item>
        <Menu.Item >
          <div id = "Chennai" onClick = {(e) => handleWfhSort(e)}>
            JOBS BY CHENNAI
          </div>
        </Menu.Item>
        <Menu.Item >
          <div id = "Mumbai" onClick = {(e) => handleWfhSort(e)}>
            JOBS BY MUMBAI
          </div>
        </Menu.Item>
      </Menu>
    );
  
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );

    const resume = (
      <Menu >
        <Menu.Item>XPRESS RESUME</Menu.Item>
        <Menu.Item>RIGHT RESUME</Menu.Item>
        <Menu.Item>CAREER BOOSTER</Menu.Item>
        <Menu.Item>
          RESUME HIGHLIGHTER
        </Menu.Item>
        <Menu.Item>PYSCHOMETRIC TEST</Menu.Item>
      </Menu>
    );

    const career = (
      <Menu >
      <Menu.Item>
        COVID 19 CAREER ADVICE
      </Menu.Item>
      <Menu.Item>
        JOB SEARCH STRATERGY
      </Menu.Item>
      <Menu.Item>
        RESUME & COVER LETTER{" "}
      </Menu.Item>
      <Menu.Item>INTERVIEW TIPS</Menu.Item>
      <Menu.Item>EXPERT'S VIDEOS</Menu.Item>
      <Menu.Item>CAREER MANAGEMENT</Menu.Item>
      <Menu.Item>
        SALARY NEGOTIATIONS
      </Menu.Item>
      <Menu.Item>RESEARCH REPORTS</Menu.Item>
      <Menu.Item>COURSES</Menu.Item>
    </Menu>
    )

    const more = (
      <Menu>
        <Menu.Item> MORE RESOURCES </Menu.Item>
        <Menu.Item> MORE INFO </Menu.Item>
        <Menu.Item> MORE CONTACTS</Menu.Item>
      </Menu>
    )

  const { md } = useBreakpoint()
  return (

    <Menu mode={md ? "horizontal" : "inline"} className="leftOptions" >
        <Menu.Item>
          <Dropdown overlay="" placement="bottomLeft" arrow>
              <div onClick={handleJobSearch} className="hoverDiv">JOB SEARCH</div>
          </Dropdown>
        </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={wfh} placement="bottomCenter" arrow>
                  <div onClick={handleWfh} className="hoverDiv">WORK FROM HOME</div>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={career} placement="bottomRight" arrow>
                  <div className="hoverDiv">CAREER TIPS</div>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={resume} placement="topLeft" arrow>
                  <div className="hoverDiv">RESUME SERVICES</div>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={more} placement="topCenter" arrow>
                  <div className="hoverDiv">MORE</div>
            </Dropdown>
          </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;