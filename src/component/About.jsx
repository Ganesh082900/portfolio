import React, { useContext } from 'react'
import { ScrollContext } from '../store/scroll-context'
import "../style/aboutMe.css"

export default function About() {

    const scrollelm = useContext(ScrollContext)
    return (
        <React.Fragment>
            <section
                ref={scrollelm.aboutRef}
                className='container-about'>
                <h1>ABOUT ME</h1>
                <section className='about-wrapper'>
                    <section className='about-image'>
                        <img src="https://th.bing.com/th/id/OIP.OFp84iJaYj5rsTazaf0aQgHaJQ?pid=ImgDet&rs=1" alt="Profile" />
                    </section>
                    <section className='about-para'>
                        <p>I am Pendyala Ganesh an enthusiastic, self-motivated and passionate front-end and backend web developer with a specialization in MERN stack. I am open to learn new technologies and skills</p>
                        <p> If you looking for a developer, I'd love to join your team. Please feel free to contact me.</p>
                        <button>RESUME</button>
                    </section>
                </section>
            </section>
        </React.Fragment>
    )
}
