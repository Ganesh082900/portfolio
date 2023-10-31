import React, { useContext } from 'react'
import { ScrollContext } from '../store/scroll-context'
import "../style/skills.css";
export default function Skills() {
    const scrollelm = useContext(ScrollContext)
    return <section className='skills-main' ref={scrollelm.skillsRef}>

        <div className='skills' >
            <h1>Top Skills</h1>
            <h3>Tech Stack</h3>
            <div className='skills-box1'>
                <div className='slide'>
                    <img src="https://th.bing.com/th/id/OIP.I5XOh9o_kbTNsXnsIc53aAHaHa?pid=ImgDet&rs=1" alt="JAVASCRIPT" />

                </div>
                <div className='slide'>
                    <img src="https://th.bing.com/th/id/R.0410da774cafa9ef65885616c61a34a3?rik=2NBG8AelI0bhWw&riu=http%3a%2f%2fwww.tutorialscampus.com%2fimg%2fhtml5.png&ehk=qGeRrsBNwLrULmeXbVFMEqKLBWD2MSZUYRxQEDqS2Nc%3d&risl=&pid=ImgRaw&r=0" alt="HTML-5" />
                </div>
                <div className='slide'>
                    <img src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202020css3htmllogosocialsocialmedia-115668_115633.png" alt="CSS-3" />
                </div>
                <div className='slide'>
                    <img src="https://www.digitalkure.com/wp-content/uploads/2019/01/bootstrap-1.png" alt="BOOTSTRAP" />
                </div>
                <div className='slide'>
                    <img src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1" alt="REDUX" />
                </div>

                <div className='slide'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="REACT" />
                </div>
                <div className='slide'>
                    <img src="https://th.bing.com/th/id/R.0f35356f815ec28ab0b32e5dcc9323e3?rik=4swqHTlMtTL2dA&riu=http%3a%2f%2fwww.developersfeed.com%2fwp-content%2fuploads%2f2016%2f10%2fmongodbicon-1.png&ehk=vGpLwByHI912o1pucCcQdFzdBNcTh2Wiv%2b6y9hhJsAw%3d&risl=&pid=ImgRaw&r=0" alt="MANGO_DB" />
                </div>
                <div className='slide'>
                    <img src="https://iconape.com/wp-content/png_logo_vector/node-js-2.png" alt="NODE_JS" />
                </div>
                <div className='slide'>
                    <img src="https://www.suriainternational.com/wp-content/uploads/2021/04/expressjs-logo.png" alt="EXPRESS_JS" />
                </div>

            </div>
            <h3>Tools</h3>
            <div className='skills-box2'>
                <div className='slide'>
                    <img src="https://th.bing.com/th/id/OIP.Q3_B1228PX6vDuzt6BbWCwHaHa?pid=ImgDet&rs=1" alt="VS_CODE" />
                </div>
                <div className='slide'>
                    <img src="https://www.clipartmax.com/png/middle/218-2181371_logo-git-git-icon.png" alt="GIT" />
                </div>
                <div className='slide'>
                    <img src="https://pngimg.com/uploads/github/github_PNG40.png" alt="GIT_HUB" />
                </div>

                <div className='slide'>
                    <img src="https://th.bing.com/th/id/OIP.zt9sC86iS-83W2LfmHIZMwHaHa?pid=ImgDet&rs=1" alt="NPM" />
                </div>
                <div className='slide'>
                    <img src="https://th.bing.com/th/id/OIP.4G9lX4qdnPq4Iuu7vk9usQAAAA?pid=ImgDet&w=289&h=289&rs=1" alt="POSTMAN" />
                </div>

            </div>
        </div>
    </section>
}
