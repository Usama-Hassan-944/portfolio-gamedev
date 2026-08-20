import { skillGroups } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skillGroups.length) return null

  return (
    <section className='section skills' id='skills'>
      <div className='section-heading'>
        <div><p className='section-kicker'>Technical toolkit</p><h2 className='section__title'>What I build with</h2></div>
        <p>A production-focused toolkit spanning gameplay, networking, XR, backend services, and live operations.</p>
      </div>
      <div className='skills__grid'>
        {skillGroups.map((group) => (
          <article className='skill-card' key={group.title}>
            <div className='skill-card__header'>
              <span>{group.number}</span>
              <h3>{group.title}</h3>
            </div>
            <p>{group.description}</p>
            <ul className='skill-card__list'>
              {group.skills.map((skill) => (
                <li key={skill}><span aria-hidden='true'>+</span>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
