import { MainPropsType } from './Types/PropsTypes'

export const mainData: MainPropsType['mainData'] = [
   {
      id: 1,
      title: 'About me',
      description: `I am ${
         new Date().getFullYear() - 2002
      } years old. Frontend developer with a degree in Computer Engineering. During my 12-month web development intensive course, frontend development became my key focus and main area of interest. Additionally, being a lifelong perfectionist, I aim to write clean, reliable,  efficient code even in a time pressured environment. I strive to follow general programming principles such as SOLID, KISS, and DRY.`,
   },
   {
      id: 2,
      title: 'Technical skills',
      description:
         'Here are the main technologies I am proficient in (without various additional ones such as Sass, Git, etc.):',
      images: [
         { id: 1, src: '/images/technologies/html.svg' },
         { id: 2, src: '/images/technologies/css.svg' },
         { id: 3, src: '/images/technologies/javascript.svg' },
         { id: 4, src: '/images/technologies/react.svg' },
         { id: 5, src: '/images/technologies/nextjs.svg' },
         { id: 6, src: '/images/technologies/ts.svg' },
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
         { id: 5, skill: 'Reliability' },
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
            imageSrc: '/images/projects/todo-list.jpg',
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
            imageSrc: '/images/projects/friends-app.jpg',
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
            imageSrc: '/images/projects/memory-game.jpg',
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
            imageSrc: '/images/projects/form.jpg',
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
