import { MainPropsType } from './Types/PropsTypes'

export const mainData: MainPropsType['mainData'] = [
   {
      id: 1,
      title: 'About me',
      description: `I am ${
         new Date().getFullYear() - 2002
      } years old and have completed vocational education in "Computer Engineering", but in reality, I am a frontend developer. I started studying web development intensively about a year ago, and during this time, I have become rooted in my choice, and I really enjoy frontend development. Additionally, I am a perfectionist by nature, and as a result, I love writing proper, clean, and beautiful code. I strive to follow general programming principles such as SOLID, KISS, and DRY.`,
   },
   {
      id: 2,
      title: 'Technical skills',
      description:
         'Here are the main technologies I am proficient in (without various additional ones such as Sass, Git, etc.):',
      images: [
         { id: 1, src: '/images/html.svg' },
         { id: 2, src: '/images/css.svg' },
         { id: 3, src: '/images/javascript.svg' },
         { id: 4, src: '/images/react.svg' },
         { id: 5, src: '/images/nextjs.svg' },
         { id: 6, src: '/images/ts.svg' },
      ],
   },
   {
      id: 3,
      title: 'English level',
      description: `My level of English is pre-intermediate.`,
   },
   {
      id: 4,
      title: 'Work experience',
      description:
         'I worked for 2 years at SEO company, during which time I made significant progress in the field and was promoted to the position of Senior SEO specialist (Note: within a small company).',
   },
   {
      id: 5,
      title: 'Soft skills',
      description: 'I can highlight the following soft skills:',
      listItems: [
         { id: 1, skill: 'Honesty' },
         { id: 2, skill: 'Teamwork' },
         { id: 3, skill: 'Communication' },
         { id: 4, skill: 'Empathy' },
         { id: 5, skill: 'Responsibility' },
         { id: 6, skill: 'Time management' },
      ],
   },
   {
      id: 6,
      title: 'My projects',
      description: 'This text is not displayed',
      sliderData: [
         {
            id: 1,
            imageSrc: '/images/todo-list.jpg',
            projectTitle: 'Todo List',
            projectDescription: 'This is my version of a React-based Todo list.',
            technologies: [
               { id: 1, technology: 'React' },
               { id: 2, technology: 'JavaScript' },
            ],
            src: 'https://mifaresss.github.io/todo-list-react/',
         },
         {
            id: 2,
            imageSrc: '/images/friends-app.jpg',
            projectTitle: 'Friends App',
            projectDescription:
               'This is a simple social app that allows find, filter and sort users by various parameters.',
            technologies: [
               { id: 1, technology: 'JavaScript' },
               { id: 2, technology: 'CSS' },
            ],
            src: 'https://mifaresss.github.io/friends-app/',
         },
         {
            id: 3,
            imageSrc: '/images/memory-game.jpg',
            projectTitle: 'Memory Game',
            projectDescription: 'Above is a memory game with a theme switching feature.',
            technologies: [
               { id: 1, technology: 'JavaScript' },
               { id: 2, technology: 'CSS' },
            ],
            src: 'https://mifaresss.github.io/memory-pair-game/',
         },
         {
            id: 4,
            imageSrc: '/images/form.jpg',
            projectTitle: 'Translate doc (form)',
            projectDescription:
               'This is an HTML form application where I paid special attention to a11y (accessibility).',
            technologies: [
               { id: 1, technology: 'HTML' },
               { id: 2, technology: 'CSS' },
            ],
            src: 'https://mifaresss.github.io/form-practise/',
         },
      ],
   },
]

// export function toggleGifAnimation(id: number) {
//    const index = id - 1
//    mainData[5].sliderData[index].imageSrc.includes('.gif')
//       ? (mainData[5].sliderData[index].imageSrc = mainData[5].sliderData[index].imageSrc.replace('.gif', '.jpg'))
//       : (mainData[5].sliderData[index].imageSrc = mainData[5].sliderData[index].imageSrc.replace('.jpg', '.gif'))
// }
// function changeDataImagesToJPG() {
//    if (mainData[5].sliderData[0].imageSrc.includes('.gif')) {
//       mainData[5].sliderData?.forEach(item => {
//          item.imageSrc = item.imageSrc.replace('.gif', '.jpg')
//       })
//    } else {
//       mainData[5].sliderData?.forEach(item => {
//          item.imageSrc = item.imageSrc.replace('.jpg', '.gif')
//       })
//    }
// }
// changeDataImagesToJPG()
