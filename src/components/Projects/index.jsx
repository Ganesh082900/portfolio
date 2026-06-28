import React, { useState } from 'react'
import {
  Container, Wrapper, SectionLabel, Title, Desc,
  TabContainer, Tab, CardContainer,
  FeaturedHeader, FeaturedTitle, ViewAllBtn,
  CTACard, CTALeft, CTAIconBox, CTAText, CTATitle, CTADesc, CTAButton,
  ModalOverlay, ModalCard, ModalScrollBody, ModalFooter, ModalHeader, ModalBrand, ModalAvatar,
  ModalHeaderInfo, ModalTitle, ModalSubtitle, ModalClose,
  ModalForm, ModalFields, ModalField, ModalInput, ModalTextarea,
  ModalSubmit, ModalNote, ModalSide, ModalSection, ModalSectionTitle,
  ContactList, ContactItem, ContactItemLabel, ContactLabel, ContactSub,
  ContactIcon, BenefitList, BenefitItem, BenefitFooterItem, BenefitIcon, BenefitText,
  BenefitTitle, BenefitDesc,
} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects, Bio } from '../../data/constants'
import {
  AppsRounded, LanguageRounded, ArticleRounded,
  CodeRounded, MoreHorizRounded, ArrowForwardRounded,
  LightbulbRounded, GraphicEqRounded, CloseRounded,
  LinkedIn, GitHub,
} from '@mui/icons-material'

const TABS = [
  { label: 'All', value: 'all', icon: <AppsRounded style={{ fontSize: 15 }} /> },
  { label: 'Web Apps', value: 'web app', icon: <LanguageRounded style={{ fontSize: 15 }} /> },
  { label: 'Blogs', value: 'blog', icon: <ArticleRounded style={{ fontSize: 15 }} /> },
  { label: 'Open Source', value: 'open source', icon: <CodeRounded style={{ fontSize: 15 }} /> },
  { label: 'Others', value: 'other', icon: <MoreHorizRounded style={{ fontSize: 15 }} /> },
]

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all')

  const featured = projects.filter(p => p.featured)
  const filtered = toggle === 'all'
    ? projects
    : projects.filter(p => p.category === toggle)

  return (
    <Container id="projects">
      <Wrapper>
        <SectionLabel>MY WORK</SectionLabel>
        <Title>Projects <span>&amp; Blogs</span></Title>
        <Desc>
          Here are some of the projects I've worked on. Each one taught me something new and helped me grow as a developer.
        </Desc>

        <TabContainer>
          {TABS.map(tab => (
            <Tab key={tab.value} active={toggle === tab.value} onClick={() => setToggle(tab.value)}>
              {tab.icon}
              {tab.label}
            </Tab>
          ))}
        </TabContainer>

        {toggle === 'all' && featured.length > 0 && (
          <>
            <FeaturedHeader>
              <FeaturedTitle>
                <GraphicEqRounded style={{ color: '#854CE6', fontSize: 20 }} />
                Featured Projects
              </FeaturedTitle>
              <ViewAllBtn href={Bio.github} target="_blank" rel="noopener noreferrer">
                View All Projects <ArrowForwardRounded style={{ fontSize: 14 }} />
              </ViewAllBtn>
            </FeaturedHeader>
            <CardContainer>
              {featured.map((project, i) => (
                <ProjectCard key={i} project={project} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
            </CardContainer>
          </>
        )}

        {toggle !== 'all' && (
          <CardContainer style={{ marginTop: 32 }}>
            {filtered.map((project, i) => (
              <ProjectCard key={i} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          </CardContainer>
        )}

        <CTACard>
          <CTALeft>
            <CTAIconBox>
              <LightbulbRounded style={{ color: '#fff', fontSize: 28 }} />
            </CTAIconBox>
            <CTAText>
              <CTATitle>Have an idea in mind?</CTATitle>
              <CTADesc>I'm always open to discussing new projects and opportunities.</CTADesc>
            </CTAText>
          </CTALeft>
          <CTAButton type="button" onClick={() => setOpenModal({ state: true, project: null, contactModal: true })}>
            Let's Connect <ArrowForwardRounded style={{ fontSize: 16 }} />
          </CTAButton>
        </CTACard>
      </Wrapper>

      {openModal.state && openModal.contactModal && (
        <ModalOverlay onClick={() => setOpenModal({ state: false, project: null, contactModal: false })}>
          <ModalCard onClick={(e) => e.stopPropagation()}>

            <ModalScrollBody>
              <ModalHeader>
                <ModalBrand>
                  <ModalAvatar>GP</ModalAvatar>
                  <ModalHeaderInfo>
                    <ModalTitle>I'd love to hear from you!</ModalTitle>
                    <ModalSubtitle>
                      Have a project in mind or just want to say hi? Fill out the form and I'll get back to you as soon as possible.
                    </ModalSubtitle>
                  </ModalHeaderInfo>
                </ModalBrand>
                <ModalClose type="button" onClick={() => setOpenModal({ state: false, project: null, contactModal: false })}>&#x00D7;</ModalClose>
              </ModalHeader>

              <ModalForm onSubmit={(e) => e.preventDefault()}>
                <ModalFields>
                  <ModalField>
                    <ModalInput type="text" placeholder="Your Name" name="name" />
                  </ModalField>
                  <ModalField>
                    <ModalInput type="email" placeholder="Your Email" name="email" />
                  </ModalField>
                </ModalFields>
                <ModalField>
                  <ModalInput type="text" placeholder="Subject" name="subject" />
                </ModalField>
                <ModalField>
                  <ModalTextarea placeholder="Tell me about your project or idea..." name="message" />
                </ModalField>
                <ModalSubmit type="submit">Send Message</ModalSubmit>
                <ModalNote>Your information is safe with me. I'll never share your details.</ModalNote>
              </ModalForm>

              <ModalSide>
                <ModalSection>
                  <ModalSectionTitle>Let's connect on</ModalSectionTitle>
                  <ContactList>
                    <ContactItem href="https://www.linkedin.com/in/ganesh-pendyala-7ba5781b8/" target="_blank" rel="noreferrer noopener">
                      <ContactItemLabel>
                        <ContactLabel>LinkedIn</ContactLabel>
                        <ContactSub>linkedin.com/in/pendyala-ganesh</ContactSub>
                      </ContactItemLabel>
                      <ContactIcon><LinkedIn style={{ fontSize: 20 }} /></ContactIcon>
                    </ContactItem>
                    <ContactItem href="https://github.com/Ganesh082900" target="_blank" rel="noreferrer noopener">
                      <ContactItemLabel>
                        <ContactLabel>GitHub</ContactLabel>
                        <ContactSub>github.com/Ganesh082900</ContactSub>
                      </ContactItemLabel>
                      <ContactIcon><GitHub style={{ fontSize: 20 }} /></ContactIcon>
                    </ContactItem>
                    <ContactItem href="mailto:ganeshpendyala2000@gmail.com">
                      <ContactItemLabel>
                        <ContactLabel>Email</ContactLabel>
                        <ContactSub>ganeshpendyala2000@gmail.com</ContactSub>
                      </ContactItemLabel>
                      <ContactIcon><CloseRounded style={{ fontSize: 20 }} /></ContactIcon>
                    </ContactItem>
                    <ContactItem href="https://drive.google.com/file/d/1whBN2iYbDyV8amigUZEzgZKORg-bfe-S/view?usp=sharing" target="_blank" rel="noreferrer noopener">
                      <ContactItemLabel>
                        <ContactLabel>Resume</ContactLabel>
                        <ContactSub>View / Download Resume</ContactSub>
                      </ContactItemLabel>
                      <ContactIcon><ArticleRounded style={{ fontSize: 20 }} /></ContactIcon>
                    </ContactItem>
                  </ContactList>
                </ModalSection>
              </ModalSide>
            </ModalScrollBody>

            <ModalFooter>
              <BenefitFooterItem>
                <BenefitIcon><LightbulbRounded style={{ fontSize: 18 }} /></BenefitIcon>
                <BenefitText>
                  <BenefitTitle>Let's build something amazing</BenefitTitle>
                  <BenefitDesc>Open to exciting opportunities and collaborative projects.</BenefitDesc>
                </BenefitText>
              </BenefitFooterItem>
              <BenefitFooterItem>
                <BenefitIcon><CodeRounded style={{ fontSize: 18 }} /></BenefitIcon>
                <BenefitText>
                  <BenefitTitle>Freelance &amp; Consulting</BenefitTitle>
                  <BenefitDesc>Available for freelance projects and technical consulting.</BenefitDesc>
                </BenefitText>
              </BenefitFooterItem>
              <BenefitFooterItem>
                <BenefitIcon><ArticleRounded style={{ fontSize: 18 }} /></BenefitIcon>
                <BenefitText>
                  <BenefitTitle>Just want to say hi?</BenefitTitle>
                  <BenefitDesc>I'm always happy to connect with amazing people.</BenefitDesc>
                </BenefitText>
              </BenefitFooterItem>
            </ModalFooter>

          </ModalCard>
        </ModalOverlay>
      )}
      
    </Container>
  )
}

export default Projects