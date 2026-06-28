import React from 'react'
import styled from 'styled-components'
import {
  WorkOutlineRounded,
  PeopleAltRounded,
  CheckCircleOutlineRounded,
  StarBorderRounded,
  RocketLaunchRounded,
  BusinessCenterRounded,
  CodeRounded,
  SchoolRounded,
} from '@mui/icons-material'

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const CompanyBadge = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ color }) => color + '22'};
  border: 1.5px solid ${({ color }) => color + '55'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  color: ${({ color }) => color};
  flex-shrink: 0;
`

const CompanyImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: contain;
  background: #fff;
  padding: 4px;
  flex-shrink: 0;
`

const RoleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const Role = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`

const CompanyName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ color }) => color};
`

const TypeBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 2px;
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

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
`

const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13.5px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  &::before {
    content: '•';
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    line-height: 1.2;
    flex-shrink: 0;
  }
`

const TechLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
`

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const TechChip = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ theme }) => theme.primary + '14'};
  border: 1px solid ${({ theme }) => theme.primary + '33'};
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`

const TechIcon = styled.img`
  width: 14px;
  height: 14px;
  object-fit: contain;
`

const ExtraChip = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ theme }) => theme.primary + '14'};
  border: 1px solid ${({ theme }) => theme.primary + '33'};
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StatBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.primary + '0e'};
`

const StatIcon = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
`

const StatText = styled.div``

const StatValue = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
`

const StatLabel = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
`

const SKILL_ICONS = {
  'React': 'https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg',
  'TypeScript': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
  'Node.js': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  'Express.js': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
  'MongoDB': 'https://upload.wikimedia.org/wikipedia/en/5/5a/MongoDB_Fores-Green.svg',
  'MySQL': 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg',
  'Tailwind CSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  'Next.js': 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
  'REST APIs': 'https://www.svgrepo.com/show/502741/api.svg',
  'JavaScript': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
  'MUI': 'https://avatars.githubusercontent.com/u/33663932?v=4',
  'HTML': 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
  'CSS': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
  'Bootstrap': 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
}

const STAT_ICONS = {
  rocket: <RocketLaunchRounded style={{ fontSize: 16 }} />,
  people: <PeopleAltRounded style={{ fontSize: 16 }} />,
  check: <CheckCircleOutlineRounded style={{ fontSize: 16 }} />,
  star: <StarBorderRounded style={{ fontSize: 16 }} />,
}

const TYPE_ICONS = {
  'Full Time': <BusinessCenterRounded style={{ fontSize: 13 }} />,
  'Freelance': <CodeRounded style={{ fontSize: 13 }} />,
  'Internship': <SchoolRounded style={{ fontSize: 13 }} />,
}

const VISIBLE_CHIPS = 5

const ExperienceCard = ({ experience }) => {
  const visibleSkills = experience.skills?.slice(0, VISIBLE_CHIPS) || []
  const extraCount = (experience.skills?.length || 0) - VISIBLE_CHIPS

  return (
    <Card>
      <TopRow>
        <TopLeft>
          {experience.img
            ? <CompanyImg src={experience.img} alt={experience.company} />
            : <CompanyBadge color={experience.companyColor || '#854CE6'}>{experience.companyLetter || experience.company?.[0]}</CompanyBadge>
          }
          <RoleInfo>
            <Role>{experience.role}</Role>
            <CompanyName color={experience.companyColor || '#854CE6'}>{experience.company}</CompanyName>
            {experience.type && (
              <TypeBadge>
                {TYPE_ICONS[experience.type]}
                {experience.type}
              </TypeBadge>
            )}
          </RoleInfo>
        </TopLeft>
        <DateBadge>{experience.date}</DateBadge>
      </TopRow>

      {experience.points?.length > 0 && (
        <>
          <Divider />
          <BulletList>
            {experience.points.map((pt, i) => (
              <BulletItem key={i}>{pt}</BulletItem>
            ))}
          </BulletList>
        </>
      )}

      {experience.skills?.length > 0 && (
        <div>
          <TechLabel>TECH STACK</TechLabel>
          <TechRow>
            {visibleSkills.map((skill) => (
              <TechChip key={skill}>
                {SKILL_ICONS[skill] && <TechIcon src={SKILL_ICONS[skill]} alt={skill} />}
                {skill}
              </TechChip>
            ))}
            {extraCount > 0 && <ExtraChip>+{extraCount}</ExtraChip>}
          </TechRow>
        </div>
      )}

      {experience.stats?.length > 0 && (
        <>
          <Divider />
          <StatsRow>
            {experience.stats.map((stat) => (
              <StatBox key={stat.label}>
                <StatIcon>{STAT_ICONS[stat.icon]}</StatIcon>
                <StatText>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatText>
              </StatBox>
            ))}
          </StatsRow>
        </>
      )}
    </Card>
  )
}

export default ExperienceCard