import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

// const About = () => {
//   const { name, role, description, resume, social, picture } = about

//   let imageSrc = ''
//   if (picture) {
//     if (picture.startsWith('http')) {
//       imageSrc = picture
//     } else if (picture.startsWith('/')) {
//       imageSrc = `${process.env.PUBLIC_URL}${picture}`
//     } else {
//       imageSrc = `${process.env.PUBLIC_URL}/images/${picture}`
//     }
//   }

//   return (
//     <div className='about center'>
//       <div className='about__header'>
//         {picture && (
//           <img src={imageSrc} alt={name} className='about__picture' />
//         )}

//         <div className='about__intro'>
//           {name && (
//             <h1>
//               <span className='about__name'>{name}.</span>
//             </h1>
//           )}

//           {role && <h2 className='about__role'>{role}.</h2>}
//           <p className='about__desc'>{description}</p>
//         </div>
//       </div>

//       <div className='about__contact center'>
//         {resume && (
//           <a href={resume}>
//             <span type='button' className='btn btn--outline'>
//               Resume
//             </span>
//           </a>
//         )}

//         {social && (
//           <>
//             {social.github && (
//               <a
//                 href={social.github}
//                 aria-label='github'
//                 className='link link--icon'
//               >
//                 <GitHubIcon />
//               </a>
//             )}

//             {social.linkedin && (
//               <a
//                 href={social.linkedin}
//                 aria-label='linkedin'
//                 className='link link--icon'
//               >
//                 <LinkedInIcon />
//               </a>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

// export default About

const About = () => {
  const { name, role, description, resume, social, picture } = about

  // compute image src safely
  let imageSrc = ''
  if (picture) {
    if (picture.startsWith('http')) {
      imageSrc = picture
    } else if (picture.startsWith('/')) {
      imageSrc = `${process.env.PUBLIC_URL}${picture}`
    } else {
      imageSrc = `${process.env.PUBLIC_URL}/images/${picture}`
    }
  }

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <img src={imageSrc} alt={name} className='about__picture' />
        )}

        <div className='about__intro'>
          {name && (
            <h1>
              <span className='about__name'>{name}.</span>
            </h1>
          )}

          {role && <h2 className='about__role'>{role}.</h2>}
          <p className='about__desc'>{description}</p>
        </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a
            href={`${process.env.PUBLIC_URL}${resume}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
