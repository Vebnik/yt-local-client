import React, {useState} from 'react';
import SearchInput from "../searchPage/SearchInput";
import SearchContent from "../searchPage/SearchContent";
import LoadChannelBtn from "../channelPage/LoadChannelBtn";


const OpenChannelPage = ({playkey}) => {

	console.log('in OpenChannelPage', playkey)

	const [contentValue, setContent] = useState([])
	const searchOnChannel = (title) => { console.log(title) }

	return (
		<div>
			<div className={'ChannelPages'}>
				<LoadChannelBtn setContent={setContent} type={'video'} nameBtn={'Load channel video'} playkey={playkey}/>
				<SearchInput searchOnChannel={searchOnChannel}/>
			</div>
			<div className={'ContentStyleSearch'}>
				<SearchContent contentValue={contentValue}/>
			</div>
		</div>
	)
}

export default OpenChannelPage;