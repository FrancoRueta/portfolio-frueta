function ProjectCard({srcImg, link, title, description}) {
  return (
    <a className="minW350" href={link} target='_blank'>
        <img className='hover' src={srcImg} alt="Guitarba" />
        <h3>{title}</h3>
        <p className='descriptionWrap'>{description}</p>
    </a>
  )
}

export default ProjectCard