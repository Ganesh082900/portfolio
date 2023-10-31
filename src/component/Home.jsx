import React, { useContext } from 'react'
import { ScrollContext } from '../store/scroll-context'
import "../style/home.css";

export default function Home() {

    const scrollelm = useContext(ScrollContext)

    return (
        <React.Fragment>
            <section
                ref={scrollelm.homeRef}
                className='container-home'>
                <div className='name'>
                    <h1 className='info'>
                        <span>Hi , </span>
                        <span>My name is</span>
                        <span className="fullName"> Pendyala Ganesh</span>
                        <br></br>
                        <span> I'am </span>
                        <span> a </span>
                        <span> full   </span>
                        <span> - stack </span>
                        <span> web </span>
                        <span> developer.</span>
                    </h1>
                </div>
            </section>
        </React.Fragment >
    )
}
