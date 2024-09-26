import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIconL from '../../assets/checkMark-light.svg'
import checkMarkIconD from '../../assets/checkMark-dark.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'

function Skills() {
  const {theme} = useTheme();

  const checkMarkIcon = theme === 'light' ? checkMarkIconL : checkMarkIconD;

  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList srcImg={checkMarkIcon} skill='HTML'/>
            <SkillList srcImg={checkMarkIcon} skill='CSS'/>
            <SkillList srcImg={checkMarkIcon} skill='JavaScript'/>
            <SkillList srcImg={checkMarkIcon} skill='TypeScript'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList srcImg={checkMarkIcon} skill='React'/>
            <SkillList srcImg={checkMarkIcon} skill='Tailwind CSS'/>
            <SkillList srcImg={checkMarkIcon} skill='Axios'/>
            <SkillList srcImg={checkMarkIcon} skill='Redux'/>
            <SkillList srcImg={checkMarkIcon} skill='Bootstrap'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList srcImg={checkMarkIcon} skill='Java'/>
            <SkillList srcImg={checkMarkIcon} skill='Spring'/>
            <SkillList srcImg={checkMarkIcon} skill='Java Server Faces'/>
            <SkillList srcImg={checkMarkIcon} skill='Hibernate'/>
            <SkillList srcImg={checkMarkIcon} skill='JUnit'/>
        </div>
    </section>
  )
}

export default Skills