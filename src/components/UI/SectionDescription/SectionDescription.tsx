import { ReactNode } from 'react'
import s from './SectionDescription.module.css'

export function SectionDescription({children}: {children: ReactNode}) {

	return (
		<p className={s.sectionDescription}>
			{children}
		</p>
	)
}