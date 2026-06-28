import React from 'react'
import styled from 'styled-components'
import { SchoolRounded, EmojiEventsRounded } from '@mui/icons-material'

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid ${({ theme }) => theme.primary + '22'};
  box-shadow: 0 4px 24px rgba(23, 92, 230, 0.10);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(133, 76, 230, 0.18);
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
`

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`

const TopLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`

const SchoolBadge = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ theme }) => theme.primary + '22'};
  border: 1.5px solid ${({ theme }) => theme.primary + '55'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  flex-shrink: 0;
`

const SchoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const SchoolName = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`

const DateBadge = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + '18'};
  border: 1px solid ${({ theme }) => theme.primary + '44'};
  border-radius: 20px;
  padding: 4px 12px;
  white-space: nowrap;
  flex-shrink: 0;
`

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.primary + '18'};
`

const Desc = styled.div`
  font-size: 13.5px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`

const GradeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const EducationCard = ({ education }) => {
  return (
    <Card>
      <TopRow>
        <TopLeft>
          <SchoolBadge>
            <SchoolRounded style={{ fontSize: 22 }} />
          </SchoolBadge>
          <SchoolInfo>
            <SchoolName>{education.school}</SchoolName>
            <Degree>{education.degree}</Degree>
          </SchoolInfo>
        </TopLeft>
        <DateBadge>{education.date}</DateBadge>
      </TopRow>

      {education.desc && (
        <>
          <Divider />
          <Desc>{education.desc}</Desc>
        </>
      )}

      {education.grade && (
        <GradeRow>
          <EmojiEventsRounded style={{ fontSize: 16, color: '#F7A400' }} />
          Grade: {education.grade}
        </GradeRow>
      )}
    </Card>
  )
}

export default EducationCard