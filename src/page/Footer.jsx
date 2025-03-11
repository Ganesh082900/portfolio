import React from 'react'
import { Bio } from '../data/Bio';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

const footerContainer = "bg-gray-950 text-cyan-600";
const footerWrapper = `flex flex-col justify-center items-center gap-5 p-4`;
const socialMediaWrapper = `flex justify-center items-center gap-1`;
const socialMediaIcon = `ml-4 md:mx-5 hover:text-cyan-400 text-2xl`;
const copyright = ` mb-5 text-light text-amber-500 flex flex-col md:flex-row md:gap-3 justify-center items-center opacity-70 whitespace-nowrap `;

function Footer() {
  return (
    <footer className={footerContainer}>
      <div className={footerWrapper}>
        <div className={socialMediaWrapper}>
          <a className={socialMediaIcon} href={Bio.github} target='_blank'><FaGithub /></a>
          <a className={socialMediaIcon} href={Bio.linkedin} target='_blank'><FaLinkedin /></a>
          <a className={socialMediaIcon} href={Bio.x} target='_blank'><FaTwitter /></a>
        </div>
        <div className={copyright}>
          Copyright © 2024 Ganesh Pendyala. All rights Reserves
        </div>
      </div>
    </footer >
  )
}

export default Footer

