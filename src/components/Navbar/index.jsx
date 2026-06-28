import React, { useState, useEffect } from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { FaBars, FaLinkedinIn } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import profileIcon from "../../../public/image/profileLogo.jpg"

const NAV_SECTIONS = ['about', 'skills', 'experience', 'projects', 'education']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const theme = useTheme()

  useEffect(() => {
    const observers = []
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer', gap: '12px', textDecoration: 'none' }}>
            <img src={profileIcon} alt="profileLogo" style={{ borderRadius: '50%', width: '42px', height: '42px', objectFit: 'cover', flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
              <span style={{ fontWeight: 700, fontSize: '15px', color: theme.text_primary, whiteSpace: 'nowrap' }}>{Bio.name}</span>
              <span style={{ fontSize: '11px', color: theme.text_secondary, whiteSpace: 'nowrap' }}>Full Stack Developer</span>
            </div>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about" active={activeSection === 'about'}>About</NavLink>
          <NavLink href='#skills' active={activeSection === 'skills'}>Skills</NavLink>
          <NavLink href='#experience' active={activeSection === 'experience'}>Experience</NavLink>
          <NavLink href='#projects' active={activeSection === 'projects'}>Projects</NavLink>
          <NavLink href='#education' active={activeSection === 'education'}>Education</NavLink>
          <NavLink href="mailto:ganeshpendyala2000@gmail.com">Hire me</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.linkedin} target="_blank">
            <FaLinkedinIn style={{ fontSize: '16px' }} />
            LinkedIn Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(false)}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(false)}>Education</MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar