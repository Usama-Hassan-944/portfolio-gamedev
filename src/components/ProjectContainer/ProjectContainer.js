import { useEffect, useMemo, useState } from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const imageSrc = useMemo(() => {
    if (!project.image) return null

    // Absolute or root-relative URL (e.g. '/project-images/Nexus_Arcade.png')
    if (project.image.startsWith('http') || project.image.startsWith('/')) {
      // Important for GitHub Pages: the app is hosted under a subpath (e.g. /portfolio),
      // so we must prefix root-relative assets with PUBLIC_URL.
      return project.image.startsWith('/')
        ? `${process.env.PUBLIC_URL}${project.image}`
        : project.image
    }

    // Fallback to images folder
    return `${process.env.PUBLIC_URL}/images/${project.image}`
  }, [project.image])

  const videoSrc = useMemo(() => {
    if (!project.video) return null
    return project.video.startsWith('http')
      ? project.video
      : `${process.env.PUBLIC_URL}/videos/${project.video}`
  }, [project.video])

  useEffect(() => {
    if (!isVideoOpen) return undefined
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsVideoOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isVideoOpen])

  return (
    <div className='project'>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`${project.name} screenshot`}
          className='project__image'
        />
      )}

      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className='project__links'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
            target='_blank'
            rel='noreferrer'
          >
            <LaunchIcon />
          </a>
        )}

        {videoSrc && (
          <button
            type='button'
            onClick={() => setIsVideoOpen(true)}
            aria-label='video demo'
            className='link link--icon project__video-btn'
          >
            <OndemandVideoIcon />
          </button>
        )}
      </div>

      {isVideoOpen && videoSrc && (
        <div
          className='project__video-overlay'
          role='dialog'
          aria-modal='true'
          aria-label={`${project.name} video demo`}
        >
          <button
            type='button'
            className='project__video-backdrop'
            aria-label='Close video'
            onClick={() => setIsVideoOpen(false)}
          />

          <div className='project__video-modal'>
            <video
              className='project__video'
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            >
              <source src={videoSrc} />
              {/* Required for eslint jsx-a11y/media-has-caption */}
              <track
                kind='captions'
                src={`${process.env.PUBLIC_URL}/captions/empty.vtt`}
                srcLang='en'
                label='captions'
                default
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectContainer
