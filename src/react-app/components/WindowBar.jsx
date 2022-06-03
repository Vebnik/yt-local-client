import React from 'react';

const WindowBar = () => {
	return (
		<div className={'WindowBar'}>
			<div className={'WindowDrag'}/>
			<div className={'WindowBtn'}><i className={'fa fa-minus'}/></div>
			<div className={'WindowBtn'}><i className={'fa fa-close'}/></div>
		</div>
	)
}

export default WindowBar;