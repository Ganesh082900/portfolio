import React from 'react'
import "../style/footer.css"
export default function Footer() {

    const year = new Date().getFullYear()

    return <section class="footer">
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
        <a href='./Home' className='arrow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
            </svg>
        </a>
        
        <div class="icons">
            <a href="https://instagram.com/" class="icon icon--instagram">
                <i class="ri-instagram-line"></i>
            </a>
            <a href="https://gmail.com/" class="icon icon--mail">
                <i class="ri-mail-line"></i>
            </a>
            <a href="https://linkedin.com/" class="icon icon--linkedin">
                <i class="ri-linkedin-line"></i>
            </a>
            <a href="https://github.com/" class="icon icon--github">
                <i class="ri-github-line"></i>
            </a>
        </div>

        <hr className="hr-line"></hr>
        <p>
            ©
            <span> {year} </span>
            template by
            <span
                className='footer-name'
            ><a href='./Home' > Pendyala Ganesh</a></span>
            {/* <br></br>
                Made with ⌣: */}
        </p>
    </section>
}
