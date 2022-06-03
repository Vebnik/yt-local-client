import React, {useState} from 'react';
import NavBarButton from "./NavBarButton";
import SearchPages from "./pages/searchPage/SearchPages";
import ChannelPages from "./pages/channelPage/ChannelPages";


const NavBar = ({setPage, openClose ,setOpenClose}) => {


	const MyRoutes = (ev) => {
		const path = ev.target.innerText

		switch (path) {
			case 'Search': setPage(<SearchPages/>)
				break
			case 'Channel': setPage(<ChannelPages setPage={setPage}/>)
				break
			case 'Setting': setPage(<div>Setting</div>)
				break
		}
	}

	const openCloseNavBar = () => setOpenClose((prev) => !prev)
	const styleNavBar = () => {
		if(openClose) return {display: 'flex'}
		return {display: 'none'}
	}

	return (
		<div className={'NavBar'} >
			<div className={'navBarBtn'} style={styleNavBar()}>
				<NavBarButton MyRoutes={MyRoutes}> Search </NavBarButton>
				<NavBarButton MyRoutes={MyRoutes}> Channel </NavBarButton>
				{/*<NavBarButton MyRoutes={MyRoutes}> Setting </NavBarButton>*/}
			</div>
			<div className={'OpenMenu'} >
				<i className={'fa fa-align-justify my-fa'} onClick={openCloseNavBar}/>
			</div>
		</div>
	)
}

export default NavBar;