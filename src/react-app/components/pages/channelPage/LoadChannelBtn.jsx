import React from 'react';
import {GetChannel, GetChannelVideo} from "../../../context-bridge-electron/contextBridge";

const LoadChannelBtn = ({setContent, type, nameBtn, playkey}) => {

	const getChannel = async () => {
		switch (type) {
			case 'channel': GetChannel().then(data => setContent(data))
				break
			case 'video': GetChannelVideo(playkey).then(data => {
				console.log(data.length)
				setContent(data)
			})
				break
		}
	}

	return (
		<button onClick={getChannel} className={'LoadChannelBtn'}>{nameBtn}</button>
	)
}

export default LoadChannelBtn;