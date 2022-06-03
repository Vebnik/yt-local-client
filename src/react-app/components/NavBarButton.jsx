import React from 'react';

const NavBarButton = ({children, MyRoutes}) => {
	return (
		<button className={'NavBarButton'} onClick={MyRoutes}>
			<i className={'fa fa-angle-double-right'}/>
			{children}
		</button>
	)
}

export default NavBarButton;