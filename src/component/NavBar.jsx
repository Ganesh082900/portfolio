import React, { useContext, useState } from 'react'
import "../style/navBar.css";
import { ScrollContext } from '../store/scroll-context';



export default function NavBar() {

    const [slide, setSlide] = useState("")

    const scrollelm = useContext(ScrollContext)
    // create the onClick method 
    const scrollHome = (page) => {
        // const part = page;
        setTimeout(() => {
            // let p = part
            // console.log(p)
            scrollelm.homeRef.current.scrollIntoView({ behaviour: 'smooth' })
        }, 0)

    }
    const scrollAbout = () => {
        setTimeout(() => {
            scrollelm.aboutRef.current.scrollIntoView({ behaviour: 'smooth' })
        }, 0)

    }
    const scrollSkills = () => {
        setTimeout(() => {
            scrollelm.skillsRef.current.scrollIntoView({ behaviour: 'smooth' })
        }, 0)

    }
    const scrollProjects = () => {
        setTimeout(() => {
            scrollelm.projectsRef.current.scrollIntoView({ behaviour: 'smooth' })
        }, 0)

    }
    const scrollContact = () => {
        setTimeout(() => {
            scrollelm.contactRef.current.scrollIntoView({ behaviour: 'smooth' })
        }, 0)

    }

    return (
        <React.Fragment>
            <nav className='navBar'>
                <ul className='nav-lists'>
                    {/* Home */}
                    <li className='list'
                        onClick={() => {
                            setSlide("aboutRef")
                            scrollHome()
                        }}
                    >HOME</li>
                    {/* ABOUT */}
                    <li className='list'
                        onClick={() => {
                            setSlide("aboutRef")
                            scrollAbout()
                        }}
                    >ABOUT</li>
                    {/* SKILLS */}
                    <li className='list'
                        onClick={() => {
                            setSlide("aboutRef")
                            scrollSkills()
                        }}>SKILLS</li>
                    {/* PROJECTS */}
                    <li className='list'
                        onClick={() => {
                            setSlide("aboutRef")
                            scrollProjects()
                        }}
                    >PROJECTS</li>
                    {/* CONTACT */}
                    <li className='list'
                        onClick={() => {
                            setSlide("aboutRef")
                            scrollContact()
                        }}
                    >CONTACT</li>

                </ul>
            </nav>

        </React.Fragment >
    )
}
