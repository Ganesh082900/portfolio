import React, { useContext } from 'react'
import { ScrollContext } from '../store/scroll-context'
import "../style/project.css";
export default function Projects() {
    const scrollelm = useContext(ScrollContext)
    return <section className='project-box' ref={scrollelm.projectsRef}>
        Projects
        <hr></hr>
    </section>
}
