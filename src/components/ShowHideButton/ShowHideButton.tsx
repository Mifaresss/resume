import { useState } from 'react'
import s from './ShowHideButton.module.css'

export const ShowHideButton = ({ testFunc }: { testFunc: any }) => {

	const [isHidden, setIsHidden] = useState(false)

	return (
		<button style={isHidden ? { border: '1px solid var(--gamma-c)', borderRadius: '5px', padding: '3px 6px'} : {opacity: '0.9'}} className={s.projectShowHideButton} onClick={(e) => { testFunc(e, isHidden), setIsHidden(!isHidden)}}>
			{isHidden ? 'Hide' : 'Show all'}
		</button>
	)
}
