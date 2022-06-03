

export const newNavBarSlide = (state) => {

	console.log('in newNavBarSlide', state)

	if (state) {
		document.querySelectorAll('.VideoDescription').forEach(el => {el.style.display = 'grid'})
		document.querySelectorAll('.SearchElement').forEach(el => {el.style.width = '950px'})
	} else {
		document.querySelectorAll('.VideoDescription').forEach(el => {el.style.display = 'none'})
		document.querySelectorAll('.SearchElement').forEach(el => {el.style.width = '1075px'})
	}

}



