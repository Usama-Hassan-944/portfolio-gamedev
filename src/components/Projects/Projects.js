import { useRef } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const scrollerRef = useRef(null)

  if (!projects.length) return null

  const scrollByAmount = (amount) => {
    if (!scrollerRef.current) return
    scrollerRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id='projects' className='section projects'>
      <div className='projects__header'>
        <h2 className='section__title'>Projects</h2>
      </div>

      <div className='projects__scroller-wrap'>
        <button
          type='button'
          className='projects__arrow projects__arrow--left'
          aria-label='Scroll projects left'
          onClick={() => scrollByAmount(-360)}
        >
          ‹
        </button>

        <div className='projects__scroller' ref={scrollerRef}>
        <div className='projects__row'>
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </div>
        </div>

        <button
          type='button'
          className='projects__arrow projects__arrow--right'
          aria-label='Scroll projects right'
          onClick={() => scrollByAmount(360)}
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default Projects
