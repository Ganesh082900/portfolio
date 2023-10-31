import React, { useContext } from 'react'
import { ScrollContext } from '../store/scroll-context'
import "../style/contact.css";

export default function Contact() {

    const scrollelm = useContext(ScrollContext)

    return <div className="last-slide" ref={scrollelm.contactRef}>
        <section class="last-slide-left">
            <h1> CONTACT ME </h1>
            <div class="crossBox"></div>
        </section>
        <section class="last-slide-right">
            <form action="" method="post">
                <input type="text" name="UserName" placeholder=" Name" required />
                <input type="text" name="UserSubject" placeholder=" Subject" required />
                <input type="email" name="UserEmail" placeholder=" Email" required />
                <textarea name="UserReview" id="" cols="10" rows="10" placeholder=" Message"></textarea>
                <input className='btn-submit' type="submit" value="SUMBIT" />
            </form>
        </section>
    </div>
}
