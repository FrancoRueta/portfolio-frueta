import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkMark-light.svg'
import SkillList from '../../common/SkillList'

function Skills() {
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
    </section>
  )
}

export default Skills