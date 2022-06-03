import React, {useState} from 'react';
import SearchInput from "../searchPage/SearchInput";
import ChannelContent from "./ChannelContent";
import LoadChannelBtn from "./LoadChannelBtn";
import {channelElements} from "../../../utils/TestSearchElem";


const ChannelPages = ({setPage}) => {

	const [contentValue, setContent] = useState(channelElements)

	return (
		<div>
			<div className={'ChannelPages'}>
				<LoadChannelBtn setContent={setContent}  type={'channel'} nameBtn={'Load channel List'}/>
				<SearchInput />
			</div>
			<div className={'ContentStyleChannel'}>
				<ChannelContent contentValue={contentValue} setPage={setPage}/>
			</div>
		</div>
	)
}

export default ChannelPages;