import React, { useEffect } from 'react'
import './Skills.css'
import SkillBar from '../../components/skillBar/SkillBar'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div className='skill' id='skills'>
      <h1 data-aos='zoom-out' className='mb-3'>Skills</h1>
      <div className='container skillBar'>
        <SkillBar skillName="HTML" proficiency={80}/>
        <SkillBar skillName="CSS" proficiency={80}/>
        <SkillBar skillName="Bootstrap" proficiency={80}/>
        <SkillBar skillName="JavaScript" proficiency={60}/>
        <SkillBar skillName="PHP" proficiency={70}/>
        <SkillBar skillName="Wordpress" proficiency={80}/>
        <SkillBar skillName="Laravel" proficiency={65}/>
        <SkillBar skillName="MySql" proficiency={70}/>
        <SkillBar skillName="Python" proficiency={70}/>
        <SkillBar skillName="Django" proficiency={70}/>
        <SkillBar skillName="Sqlite" proficiency={70}/>
        <SkillBar skillName="PostgreSql" proficiency={60}/>
        <SkillBar skillName="React" proficiency={70}/>
        <SkillBar skillName="ExpressJs" proficiency={65}/>
        <SkillBar skillName="MongoDb" proficiency={65}/>
        <SkillBar skillName="NodeJs" proficiency={65}/>
      </div>
    </div>
  )
}
