import { ReactNode } from 'react'
import s from './SectionTitle.module.css'

export function SectionTitle({children}: {children: ReactNode}) {

	return (
		<h2 className={s.sectionTitle}>
			{children}
		</h2>
	)
}