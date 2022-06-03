import React, {useState} from 'react';

const SearchInput = ({searchOnYt}) => {
	const [currentTitle, setTitle] = useState('')

	const search = (ev) => {
		ev.preventDefault()
		searchOnYt(currentTitle)
	}

	return (
		<div className={'SearchInput'}>
			<form className={'FormInput'}>
				<i className={'fa fa-search'}/>
				<input className={'MyInput'} placeholder={'Search here'} onChange={event => setTitle(event.target.value)}/>
				<button className={'MyButton'} onClick={search}>
					Search
				</button>
			</form>
		</div>
	)
}

export default SearchInput;