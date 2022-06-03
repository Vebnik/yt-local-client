import React, {useState} from 'react';
import SearchInput from "./SearchInput";
import SearchContent from "./SearchContent";
import { ytSearch } from "../../../context-bridge-electron/contextBridge";

const SearchPages = () => {
	const [contentValue, setContent] = useState([])

	const searchOnYt = (title) => {
		ytSearch(title).then(data => {
			setContent(data.items)
			console.log('react component: ChannelPages', data.results)
		})
	}

	return (
		<div>
			<div className={'SearchPages'}>
				<SearchInput searchOnYt={searchOnYt}/>
			</div>
			<div className={'ContentStyleSearch'}>
				<SearchContent contentValue={contentValue}/>
			</div>
		</div>
	)
}

export default SearchPages;