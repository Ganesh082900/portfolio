
import React from 'react'
import styled from 'styled-components'
import ExperienceCard from '../Cards/ExperienceCard'
import { experiences } from '../../data/constants'
import {
  WorkRounded,
  CodeRounded,
  SchoolRounded,
} from '@mui/icons-material'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 16px 80px;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  gap: 0;
`

const SectionLabel = styled.div`
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  &::before, &::after {
    content: '';
    height: 1px;
    width: 32px;
    background: ${({ theme }) => theme.primary};
    display: inline-block;
  }
`

const Title = styled.div`
  font-size: 46px;
  text-align: center;
  font-weight: 700;
  margin-top: 10px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 15px;
  text-align: center;
  max-width: 480px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 8px;
  line-height: 1.6;
`

const TimelineList = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 0;
`

const TimelineRow = styled.div`
  display: grid;
  grid-template-columns: 160px 60px 1fr;
  gap: 0;
  align-items: stretch;
  @media (max-width: 768px) {
    grid-template-columns: 60px 1fr;
  }
`

const DateCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding-top: 14px;
  padding-right: 16px;
  @media (max-width: 768px) {
    display: none;
  }
`

const DateText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-align: right;
`

const DurationText = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: right;
  margin-top: 2px;
`

const CenterCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary + '22'};
  border: 2px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  flex-shrink: 0;
  z-index: 1;
`

const Connector = styled.div`
  width: 2px;
  flex: 1;
  background: linear-gradient(180deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary + '33'});
  min-height: 24px;
`

const CardCol = styled.div`
  padding: 0 0 36px 16px;
`

const TYPE_ICONS = {
  'Full Time': <WorkRounded style={{ fontSize: 18 }} />,
  'Freelance': <CodeRounded style={{ fontSize: 18 }} />,
  'Internship': <SchoolRounded style={{ fontSize: 18 }} />,
}

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <SectionLabel>MY JOURNEY</SectionLabel>
        <Title>Experience</Title>
        <Desc>
          My professional experience as a software engineer and the impact I've made.
        </Desc>

        <TimelineList>
          {experiences.map((exp, i) => (
            <TimelineRow key={exp.id}>
              <DateCol>
                <DateText>{exp.date}</DateText>
                {exp.duration && <DurationText>{exp.duration}</DurationText>}
              </DateCol>
              <CenterCol>
                <IconCircle>
                  {TYPE_ICONS[exp.type] || <WorkRounded style={{ fontSize: 18 }} />}
                </IconCircle>
                {i < experiences.length - 1 && <Connector />}
              </CenterCol>
              <CardCol>
                <ExperienceCard experience={exp} />
              </CardCol>
            </TimelineRow>
          ))}
        </TimelineList>
      </Wrapper>
    </Container>
  )
}

export default Experience