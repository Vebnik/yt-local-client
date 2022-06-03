import React from 'react';
import ChannelElement from "./ChannelElement";

const ChannelContent = ({contentValue, setPage}) => {

	const getTrueStyle = () => {
		return contentValue.length < 10 ? {alignContent: 'flex-start'} : {alignItems: 'center'}
	} // swap alignItems for centered ChannelElement

	return (
		<div className={'ChannelContent'} style={getTrueStyle()}>
			{contentValue.map((el, i) => <ChannelElement config={el} key={i} styleCustom={getTrueStyle} setPage={setPage}/>)}
		</div>
	)
}

export default ChannelContent;