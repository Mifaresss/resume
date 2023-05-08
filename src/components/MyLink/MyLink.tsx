import Link from 'next/link'
import s from './MyLink.module.css'

export const MyLink = ({ href, color, children }: { href: string, color: string, children: string }) =>

	<Link className={s.myLink} href={href} style={{color: `rgb(var(--${color}-c))`}}>
		{children}
	</Link>