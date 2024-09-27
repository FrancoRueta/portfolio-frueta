import styles from './HeroStyles.module.css'
import heroImage from '../../assets/hero.png'
import themeSun from '../../assets/sun.svg'
import themeMoon from '../../assets/moon.svg'
import langIcon from '../../assets/lang.png'
import twitterIconL from '../../assets/twitter-light.svg'
import githubIconL from '../../assets/github-light.svg'
import linkedinIconL from '../../assets/linkedin-light.svg'
import twitterIconD from '../../assets/twitter-dark.svg'
import githubIconD from '../../assets/github-dark.svg'
import linkedinIconD from '../../assets/linkedin-dark.svg'
import cv from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
import { useLang } from '../../common/LangContext'

function Hero() {
  const {theme, toggleTheme} = useTheme();
  const {lang, toggleLang} = useLang();

  const themeIcon = theme === 'light' ? themeSun : themeMoon;
  const twitterIcon = theme === 'light' ? twitterIconL : twitterIconD;
  const githubIcon = theme === 'light' ? githubIconL : githubIconD;
  const linkedinIcon = theme === 'light' ? linkedinIconL : linkedinIconD;

  const description = lang === 'english' ? 'With a passion for developing modern React web apps for commercial businesses.' : 'Testing.'

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImage} className={styles.heroImg} alt="Hero"
        />
        <div className={styles.heroIconContainer}>
          <img src={themeIcon} className={styles.colorMode} alt="Color mode icon" onClick={toggleTheme} />
          <img src={langIcon} className={styles.colorMode} alt="Language icon" onClick={toggleLang} />
        </div>
      </div>
      <div className={styles.info}>
        <h1>Franco <br/> Rueta</h1>
        <h2>Fullstack developer</h2>
        <span>
        <a href="https://twitter.com" target='_blank'>
            <img src={twitterIcon} alt="Twitter icon"/>
          </a>
          <a href="https://github.com/FrancoRueta" target='_blank'>
            <img src={githubIcon} alt="Github icon"/>
          </a>
          <a href="https://www.linkedin.com/in/rueta-franco/" target='_blank'>
            <img src={linkedinIcon}
             alt="LinkedIn icon"/>
          </a>
        </span>
        <p className={styles.description}>{description}</p>
        <a href={cv} download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero