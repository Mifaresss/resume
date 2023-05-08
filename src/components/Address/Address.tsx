import { Children, ReactNode } from 'react'
import s from './Address.module.css'

export function Address({ children }: { children: ReactNode }) {

	return (
		<address className={s.address}>
			{Children.map(children, (child, index) =>
				<>
					<p className={s.linkWrapper}>{child}</p>
					{index !== Children.count(children) - 1 && <hr />}
				</>	
			)}
		</address>
	)
}