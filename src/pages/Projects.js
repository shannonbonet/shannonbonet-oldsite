import React from 'react';
import '../App.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <div className='cards'>
            <h1>work.</h1>
            <p> see my<mark> <a href="https://drive.google.com/file/d/1CYCPHDLgmsJnWQ0duznr4zWKxJ9jF9C1/view?usp=sharing">resume </a> </mark> .</p>
            <ProjectCard 
                title='We Care Solar'
                subhead='technical'
                git={true}
                gitUrl="https://github.com/calblueprint/wecaresolar"
                description='Building a low bandwidth offline accessible mobile application to aid midwives in rural areas accross 20+ countries for safe childbirth. 
                Developed with React Typescript and Redux, deployed with Firebase. 
                I built the frontend interactive suitcase feature with animation, toggle, and resource views with user friendly editing capability in Airtable.'/>
            <ProjectCard 
                title="we're not really strangers"
                subhead='technical'
                git={true}
                figma={true}
                gitUrl={"https://github.com/cindyxzhang/wnrs"}
                figmaUrl={"https://www.figma.com/file/HTQP6E7n6MMj3x0z49ssQa/we-re-not-really-strangers-wireframes?node-id=0%3A1"}
                description="We're Not Really Strangers is a card game that aims to create meaningful connections between players. My friends and I frequently played 
                over video during quarantine to stay in touch, so we decided to create an online version. Currently designing & implementing using Figma, React, & Airtable."
                />
            <ProjectCard 
                title='Activating Your Allyship Journey' 
                subhead='product'
                description='MINWO is a high growth software consulting startup connecting black minority business owners with entrepreneurial opportunities. 
                I designed and created an allyship resource guide from idea creation, prototyping, to initial user testing stage for 
                monthly diversity accountability workshops.'
                />
        </div>
    )
}

export default Projects;