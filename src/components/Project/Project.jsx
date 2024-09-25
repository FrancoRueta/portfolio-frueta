import styles from './ProjectStyles.module.css'
import guitarba from '../../assets/guitarba.png'
import vet from '../../assets/vet.png'
import expenses from '../../assets/expenses.png'
import ProjectCard from '../../common/ProjectCard'

function Project() {

    // eslint-disable-next-line no-unused-vars
    const projectList = [
        /* guitarba */
        {
            srcImg: guitarba,
            title: 'GuitarBA',
            description: 'Web cart for a guitar store',
            link: 'https://guitarba.netlify.app/'
        },
        {
            srcImg: expenses,
            title: 'Budget Controller', 
            description: 'Web application to manage expenses',
            link: 'https://controlador-de-gasto.netlify.app/'
        },
        {
            srcImg: vet,
            title: 'Vet App',
            description: 'Web application to manage a veterinary clinic',
            link: 'https://mascotasituz.netlify.app/'
        }
    ];

  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            {
                projectList.map((project, index) => (
                    <ProjectCard key={index} srcImg={project.srcImg} title={project.title} description={project.description} link={project.link}/>
                ))
            }
        </div>
    </section>
  )
}

export default Project