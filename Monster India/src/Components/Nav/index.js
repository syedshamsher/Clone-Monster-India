import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import './Nav.css';
import monsterlogo from "../Images/download.png";
import { useHistory } from 'react-router-dom'


 function Nav()  {
	const [visible, setVisible] = React.useState(false)
	const history = useHistory()
	const showDrawer = () => {
		setVisible( true )
	};

	const onClose = () => {
		setVisible( false )
	};

	const goToLandingPage = () => {
		history.push('/')
	}

	const goToLogin = () => {
		history.push('/loginpage')
	}

		return (
			<div className="navWrapper"  >
				<div className="menuBar">
					<Button className="barsMenu" type="primary" onClick={showDrawer}>
						<span className="barsBtn"></span>
					</Button>
					<div className="logo" onClick={goToLandingPage}>
						<a href="">
							<img style={{marginLeft: "20px",marginTop: "-25px",  height: "36px",marginRight: '10px',cursor: "pointer"}}  src={monsterlogo} />
						</a>
					</div>
					<div className="menuCon">
						<div className="leftMenu">
							<LeftMenu />
						</div>
						<div className="rightMenu">
							<RightMenu />
						</div>
						<Drawer
							title="Basic Drawer"
							placement="left"
							closable={false}
							onClose={onClose}
							visible={visible}
						>
							<LeftMenu 
								style={{backgroundColor:"#6C54DA"}}
							/>
							<RightMenu />
						</Drawer>
						<Button onClick={goToLogin} className="Loginbtn">LOGIN</Button>
					</div>
				</div>
			</div>
		);
}

export default Nav;