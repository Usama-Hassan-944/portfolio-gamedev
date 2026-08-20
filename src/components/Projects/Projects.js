import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <div className='section-heading'>
        <div><p className='section-kicker'>Selected work</p><h2 className='section__title'>Games & experiences</h2></div>
        <p>Shipped and production work across mixed reality, multiplayer, mobile, PC, and WebGL.</p>
      </div>
      <div className='projects__grid'>
          {projects.map((project, index) => (
            <ProjectContainer key={uniqid()} project={project} index={index} />
          ))}
      </div>
    </section>
  )
}

export default Projects
