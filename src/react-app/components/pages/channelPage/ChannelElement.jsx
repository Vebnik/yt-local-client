import React from 'react';
import OpenChannelPage from "../OpenChannelPage/OpenChannelPage";

const ChannelElement = ({config, setPage}) => {

	const openChannelPage = (ev) => {
		const channelId = ev.target.getAttribute('playkey')
		setPage(<OpenChannelPage playkey={channelId}/>)
	}

	return (
		<div className={'ChannelBundleElement'}>
			<div className={'ChannelElement'}>
				<i className={'fa fa-align-center Icon-btn'} style={{color: '#ffcf20'}}/><span>{config.name}</span>
				<i className={'fa fa-desktop Icon-btn'} style={{color: '#46ffc3'}}/><span>{config.videoCount} Video</span>
				<i className={'fa fa-up-right-from-square Icon-btn'} style={{color: '#574eed'}}/><span>{config.lastUpdated}</span>
				<i className={'fa fa-play-circle Icon-btn'} style={{color: '#db4545'}}/>
				<span className={'channel-open-btn'} playkey={config.channelId} onClick={openChannelPage}>Open Channel</span>
			</div>
			<div className={'ChannelAvatar'}>
				<img className={'ChannelAvatar-img'} alt={''} src={config.avatarUrl}/>
			</div>
		</div>
	);
};

export default ChannelElement;