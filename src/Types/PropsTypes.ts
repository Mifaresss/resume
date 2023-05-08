export interface MainPropsType {
   mainData: (SectionPropsType & { id: number })[]
}

export interface SectionPropsType {
   title: string
   description: string
   images?: { id: number; src: string }[]
   listItems?: { id: number; skill: string }[]
   sliderData?: {
      id: number
      imageSrc: string
      projectTitle: string
      projectDescription: string
      technologies: { id: number; technology: string }[]
      src: string
   }[]
}

export interface SectionImageBlockPropsType {
   images: SectionPropsType['images']
}

export interface SectionListPropsType {
   listItems: SectionPropsType['listItems']
}

export interface SectionProjectBlockPropsType {
   sliderData: SectionPropsType['sliderData']
}

export interface Test {
   id: number
   imageSrc: string
   projectTitle: string
   projectDescription: string
   technologies: { id: number; technology: string }[]
   src: string
}
