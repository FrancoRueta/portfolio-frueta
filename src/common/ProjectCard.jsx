import Guitarba from '../assets/guitarba.png'

function ProjectCard({srcImg, link, title, description}) {
  return (
    <a href={link} target='_blank'>
        <img className='hover' src={srcImg} alt="Guitarba" />
        <h3>{title}</h3>
        <p>{description}</p>
    </a>
  )
}

export default ProjectCard