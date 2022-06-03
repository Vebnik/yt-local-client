import React from 'react';
import {AddChannel, playMedia} from "../../../context-bridge-electron/contextBridge";

const SearchElement = ({config}) => {

	const startPlayMedia = (ev) => {
		const url = ev.target.getAttribute('playkey')
		playMedia(url).catch(err => alert(JSON.stringify(err)))
	}

	const addChannel = (ev) => {
		const chanelId = ev.target.getAttribute('chanelid')
		AddChannel(chanelId).catch(err => alert(JSON.stringify(err)))
	}

	return (
		<div className={'SearchElementBundle'}>
			<div className={'videoElementImg'}>
				<div className={'SearchElement'}>
					<i className={'fa fa-align-center Icon-btn'} style={{color: '#ffcf20'}}/><span>{config.title}</span>
					<i className={'fa fa-desktop Icon-btn'} style={{color: '#46ffc3'}}/><span>{config.views} Views</span>
					<i className={'fa fa-clock Icon-btn'} style={{color: '#574eed'}}/><span>{config.duration} Min</span>
					<i className={'fa fa-play-circle Icon-btn'} style={{color: '#db4545'}}/>
					<span className={'play-btn-element '} playkey={config.url} onClick={startPlayMedia}>Play</span>
				</div>
				<img src={config.thumbnail} alt={'videoImg'} className={'SearchVideoImg'}/>
			</div>
			<div className={'VideoDescription'} title={'Upload || Channel Name || Add to local'}>
				<i className={'fa fa-timeline Icon-btn'} style={{color: '#59b985'}}/><span>{config.uploadedAt}</span>
				<i className={'fa fa-person-walking Icon-btn'} style={{color: '#59B985FF'}}/><span>{config.author}</span>
				<i className={'fa fa-chart-bar Icon-btn'} style={{color: '#59B985FF'}}/><span chanelid={config.channelId} onClick={addChannel}>Add channel</span>
			</div>
		</div>
	)
}

export default SearchElement;