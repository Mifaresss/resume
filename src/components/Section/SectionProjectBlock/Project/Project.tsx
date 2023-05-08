import { ShowHideFullText } from '@/src/components/ShowHideFullText/ShowHideFullText'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import s from './Project.module.css'

export function Project({ id, imageSrc, projectTitle, projectDescription, technologies, src, }: any) {

	const [isSmallScreen, setIsSmallScreen] = useState(false)

	const [img, setImg] = useState(imageSrc)


	useEffect(() => {
		function handleResize() {
			setIsSmallScreen(window.innerWidth <= 881)
		}
		window.addEventListener('resize', handleResize)
		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	function mouseEnterHandler(id: number) {
		setImg(imageSrc.replace('.jpg', '.gif'))
	}
	function mouseLeaveHandler(id: number) {
		setImg(imageSrc.replace('.gif', '.jpg'))
	}

	return (
		<div className={s.project}>
			<div onMouseEnter={() => mouseEnterHandler(id)} onMouseLeave={() => mouseLeaveHandler(id)} className={s.wrapperImage}>
				{/* <Image className={s.projectImage} src={img} width={333} height={188} alt='' /> */}
				<img className={s.projectImage} src={img} width='333' height='188' alt='' />
				<Link className={s.projectLink} href={src} target='_blank'>
					{isSmallScreen ? 'See more' : projectTitle}
				</Link>
			</div>
			<h3 className={s.projectTitle}>{projectTitle}</h3>
			{isSmallScreen ? <p className={s.projectDescription}>{projectDescription + ' Main technologies:'}</p> : <ShowHideFullText text={projectDescription} />}
			<ol className={s.projectTechnologies}>
				{technologies.map((item: any) =>
					<li key={item.id}>
						{item.technology}
					</li>
				)}
			</ol>
		</div>
	)
}