import { useEffect, useRef, useState } from 'react'
import s from './ShowHideFullText.module.css'

export const ShowHideFullText = ({ text }: { text: string }) => {

	const [maxTextLength, setMaxTextLength] = useState(55)

	useEffect(() => {

		function changeMaxTextLength() {
			if (window.innerWidth <= 1014) {
				setMaxTextLength(47)
			} else {
				setMaxTextLength(55)
			}
		}
		changeMaxTextLength()
		window.addEventListener('resize', changeMaxTextLength)

		function hideText(e: any) {
			if (e.target.className !== s.projectShowHideButton && e.target.className !== s.descriptionBlock) {
				setTest(true)
			}
		}
		document.addEventListener('click', hideText)

		return () => {
			window.removeEventListener('resize', changeMaxTextLength)
			document.removeEventListener('click', hideText)
		}
	}, [])


	const [test, setTest] = useState(true)

	function testFunc(): void {
		setTest(!test)
	}
	function showText(text1: string, toggle: boolean) {
		if (text1.length < maxTextLength) {
			return text1 + ' Technologies:'
		} else if (text1.length >= maxTextLength && toggle === false) {
			return text1 + ' Technologies:'
		} else {
			return text.slice(0, 71).concat('...')
		}
	}
	const showHideButtonStyle = {
		border: '1px solid rgb(var(--gamma-c))',
		borderRadius: '5px',
		padding: '2px 5px',

		bottom: '-22px'
	}

	// const [newText, setNewText] = useState(text)
	// const [test2,setTest2] = useState(true)
	// function toggleClass(e) {
	// 	const gridElement = e.target.parentElement.children[2]

	// 	if (!gridElement.classList.contains(s.open)) {
	// 		setTest2(false)
	// 		setNewText(text.slice())
	// 		gridElement.classList.add(s.open)
	// 	} else {
	// 		setTest2(!test2)
	// 		setNewText(text.slice())
	// 		gridElement.classList.remove(s.open)
	// 	}
	// }
	// function showTextNew(text2, toggle2) {
	// 	if (text2.length < maxTextLength) {
	// 		return text2 + ' Technologies:'
	// 	} else if (text2.length >= maxTextLength && toggle2 === false) {
	// 		return text2 + ' Technologies:'
	// 	} else {
	// 		return text.slice(0, 63).concat('...')
	// 	}
	// }

	return (
		<>
			<div className={s.descriptionBlock} style={text.length < maxTextLength ? {} : {gridTemplateRows: '0fr'}}>
				<p>{showText(text, test)}</p>
			{text.length > maxTextLength ?
				<button style={!test ? showHideButtonStyle : { bottom: maxTextLength < 55 ? '-13px' : '0' }} className={s.projectShowHideButton} onClick={testFunc}>
					{test ? 'Show all' : 'Hide'}
				</button>
				:
				<></>
			}
			</div>
		</>
	)
}
