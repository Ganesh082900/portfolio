
import React from 'react'
import styled from 'styled-components'
import { education } from '../../data/constants'
import EducationCard from '../Cards/EducationCard'
import { SchoolRounded } from '@mui/icons-material'

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

/* Card | Icon | Date  — timeline on the RIGHT */
const TimelineRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px 160px;
  gap: 0;
  align-items: stretch;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 60px;
  }
`

const CardCol = styled.div`
  padding: 0 16px 36px 0;
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

const DateCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 14px;
  padding-left: 16px;
  @media (max-width: 768px) {
    display: none;
  }
`

const DateText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <SectionLabel>MY LEARNING</SectionLabel>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth.
        </Desc>

        <TimelineList>
          {education.map((edu, i) => (
            <TimelineRow key={edu.id}>
              <CardCol>
                <EducationCard education={edu} />
              </CardCol>
              <CenterCol>
                <IconCircle>
                  <SchoolRounded style={{ fontSize: 18 }} />
                </IconCircle>
                {i < education.length - 1 && <Connector />}
              </CenterCol>
              <DateCol>
                <DateText>{edu.date}</DateText>
              </DateCol>
            </TimelineRow>
          ))}
        </TimelineList>
      </Wrapper>
    </Container>
  )
}

export default Education