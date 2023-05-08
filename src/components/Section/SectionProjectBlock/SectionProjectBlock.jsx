import { useRef, useState } from 'react'
import { Project } from './Project/Project'
import s from './SectionProjectBlock.module.css'

export const SectionProjectBlock = ({ sliderData }) => {
   const projectsContainer = useRef(null)
   let currentPos = 0

   function moveSlider(button) {
      const slider = projectsContainer.current
      if (slider == null) return
      const gap = slider.offsetWidth * 0.02
      const sliderItemWidth = slider.children[0].offsetWidth + gap

      if (button === 'right') {
         currentPos -= sliderItemWidth

         if (Math.abs(currentPos / sliderItemWidth) + 3 == slider.children.length + 1) currentPos = 0

         slider.style.transform = `translate(${currentPos}px)`
      } else {
         currentPos += sliderItemWidth

         if (currentPos == sliderItemWidth) currentPos = -((slider.children.length - 3) * sliderItemWidth)

         slider.style.transform = `translate(${currentPos}px)`
      }
   }

   const [isMouseDown, setIsMouseDown] = useState(false)
   const [distance, setDistance] = useState({ before: 0, after: 0 })
   // let before = 0
   // let after = 0

   // function onMouseDownHandler(e) {
   // 	setIsMouseDown(true)
   // 	setDistance({ ...distance, before: e.clientX})
   // 	// before = e.clientX
   // }
   // function onMouseMoveHandler(e) {
   // 	if (isMouseDown) {
   // 		console.log(e.clientX - distance.before)
   // 		projectsContainer.current.style.transform = `translate(${e.clientX - distance.before}px)`
   // 	}
   // }
   // function onMouseUpHandler(e) {
   // 	setIsMouseDown(false)
   // }
   // function onTouchStartHandler(e) {
   // 	setDistance({ ...distance, before: e.touches[0].clientX })
   // }
   // function onTouchMoveHandler(e) {
   // 	projectsContainer.current.style.transform = `translate(${e.touches[0].clientX - distance.before}px)`
   // 	console.log(e.touches[0].clientX)
   // }

   // console.log(sliderData[].technologies)

   // function toggleDescriptionHeight(e: Event, isShow: boolean) {
   // 	const parent = e.target.parentElement
   // 	if (parent.offsetHeight == 53) {
   // 		parent.style.maxHeight = 'none'
   // 	} else {
   // 		parent.style.maxHeight = '53px'
   // 	}
   // }
   // const [test, setTest] = useState(true)
   // function testFunc() {
   // 	setTest(!test)
   // }

   // const test = 63

   return sliderData ? (
      <div className={s.mainWrapper}>
         <div className={s.projectsWrapper}>
            <div
               className={s.projects}
               ref={projectsContainer}
               // onMouseDown={onMouseDownHandler}
               // onMouseMove={onMouseMoveHandler}
               // onMouseUp={onMouseUpHandler}
               // onTouchStart={onTouchStartHandler}
               // onTouchMove={onTouchMoveHandler}
            >
               {sliderData.map(({ id, imageSrc, projectTitle, projectDescription, technologies, src }) => (
                  // <div className={s.project} key={id}>
                  // 	<div onMouseEnter={() => mouseEnterHandler(id)} onMouseLeave={() => mouseLeaveHandler(id)} className={s.wrapperImage}>
                  // 		<Image className={s.projectImage} src={imageSrc} width={333} height={188} alt='' />
                  // 		<Link className={s.projectLink} href={src} target='_blank'>{projectTitle}</Link>
                  // 	</div>
                  // 	{/* <div className={s.descriptionWrapper}> */}
                  // 	<h3 className={s.projectTitle}>{projectTitle}</h3>
                  // 	{isSmallScreen ? <p className={s.projectDescription}>{projectDescription}</p> : <ShowHideFullText text={projectDescription} />}
                  // 	{/* </p> */}
                  // 	<ol className={s.projectTechnologies}>
                  // 		{technologies.map(item =>
                  // 			<li key={item.id}>
                  // 				{item.technology}
                  // 			</li>
                  // 		)}
                  // 	</ol>
                  // 	{/* </div> */}
                  // </div>

                  <Project
                     key={id}
                     id={id}
                     imageSrc={imageSrc}
                     projectTitle={projectTitle}
                     projectDescription={projectDescription}
                     technologies={technologies}
                     src={src}
                  />
               ))}
            </div>
         </div>
         <button onClick={() => moveSlider('left')} className={[s.arrow, s.arrowLeft].join(' ')}></button>
         <button onClick={() => moveSlider('right')} className={[s.arrow, s.arrowRight].join(' ')}></button>
      </div>
   ) : (
      <></>
   )
}
