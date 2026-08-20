import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
import { about, highlights } from '../../portfolio'
import './About.css'

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
    <section className='about' id='about'>
      <div className='about__copy'>
        <p className='eyebrow'><span /> Available for game development opportunities</p>
        <div className='about__intro'>
          {name && (
            <h1>Building games that feel great <span>and scale.</span></h1>
          )}
          {role && <p className='about__role'>{name} — {role}</p>}
          <p className='about__desc'>{description}</p>
        </div>
        <div className='about__contact'>
          <a href='#projects' className='btn btn--primary'>Explore my work <ArrowForwardRoundedIcon /></a>
          {resume && <a href={`${process.env.PUBLIC_URL}${resume}`} target='_blank' rel='noopener noreferrer' className='btn btn--outline'>View résumé</a>}
          {social?.github && <a href={social.github} target='_blank' rel='noreferrer' aria-label='GitHub profile' className='social-link'><GitHubIcon /></a>}
          {social?.linkedin && <a href={social.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn profile' className='social-link'><LinkedInIcon /></a>}
        </div>
        <div className='about__highlights'>
          {highlights.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </div>
      <div className='about__visual'>
        <div className='about__image-frame'>
          {picture && <img src={imageSrc} alt={name} className='about__picture' />}
          <div className='about__badge'><span>●</span><strong>Unity</strong><small>Gameplay · Multiplayer · XR</small></div>
        </div>
        <span className='about__grid' aria-hidden='true' />
      </div>
    </section>
  )
}

export default About
