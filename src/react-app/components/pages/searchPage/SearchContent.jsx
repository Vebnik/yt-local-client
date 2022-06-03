import React from 'react';
import SearchElement from "./SearchElement";


const SearchContent = ({contentValue}) => {

	return (
		<div className={'SearchContent'}>
			{contentValue.map((el, i) => <SearchElement config={el} key={i}/>)}
		</div>
	)
}

export default SearchContent;