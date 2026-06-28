import React, { useState } from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import {
  CodeRounded,
  DnsRounded,
  StorageRounded,
  BuildRounded,
  AppsRounded,
  AutoAwesome,
  Layers,
  CalendarToday,
  RocketLaunch,
  AdjustRounded,
  AddRounded,
} from '@mui/icons-material'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0 60px;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  padding: 0 16px;
`

const SectionLabel = styled.div`
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  margin-top: 20px;
`

export const Title = styled.div`
  font-size: 46px;
  text-align: center;
  font-weight: 700;
  margin-top: 8px;
  color: ${({ theme }) => theme.text_primary};
  span {
    background: linear-gradient(135deg, #854CE6, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const Desc = styled.div`
  font-size: 16px;
  text-align: center;
  max-width: 580px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 8px;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 12px;
  }
`

const TabContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 28px;
  flex-wrap: wrap;
  justify-content: center;
  background: ${({ theme }) => theme.card};
  border-radius: 40px;
  padding: 6px;
  border: 1px solid ${({ theme }) => theme.primary + '22'};
`

const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  background: ${({ active, theme }) => active ? theme.primary : 'transparent'};
  color: ${({ active, theme }) => active ? '#fff' : theme.text_secondary};
  &:hover {
    background: ${({ active, theme }) => active ? theme.primary : theme.primary + '22'};
    color: ${({ active, theme }) => active ? '#fff' : theme.primary};
  }
  @media (max-width: 500px) {
    padding: 6px 14px;
    font-size: 12px;
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ single }) => single ? '1fr' : '1fr 1fr'};
  gap: 24px;
  margin-top: 32px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SkillCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.primary + '18'};
  border-left: 3px solid ${({ color }) => color};
  box-shadow: 0 4px 24px rgba(23, 92, 230, 0.08);
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const CardTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`

const ViewAllBtn = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.primary + '44'};
  color: ${({ theme }) => theme.text_secondary};
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.card_light || theme.background + 'cc'};
  gap: 6px;
`

const SkillLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`

const SkillIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  flex-shrink: 0;
`

const SkillName = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const DotsContainer = styled.div`
  display: flex;
  gap: 2px;
  flex-shrink: 0;
`

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ filled, theme }) => filled ? theme.primary : theme.primary + '33'};
`

const MoreCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 4px;
  gap: 4px;
  cursor: pointer;
`

const MoreCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.primary + '66'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_secondary};
`

const MoreLabel = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
`

const StatsCard = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 28px 36px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 32px;
  border: 1px solid ${({ theme }) => theme.primary + '18'};
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    padding: 24px 20px;
  }
`

const StatsLeft = styled.div`
  flex: 1;
`

const StatsTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`

const StatsDesc = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 300px;
  line-height: 1.5;
`

const StatsRight = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 480px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const StatNumber = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`

const StatLabel = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  white-space: nowrap;
`

const TABS = ['All Skills', 'Frontend', 'Backend', 'Database', 'Tools & Others']

const getCategoryIcon = (title, color) => {
  const style = { color, fontSize: '22px' }
  switch (title) {
    case 'Frontend': return <CodeRounded style={style} />
    case 'Backend': return <DnsRounded style={style} />
    case 'Database': return <StorageRounded style={style} />
    case 'Tools & Others': return <BuildRounded style={style} />
    default: return <AppsRounded style={style} />
  }
}

const getTabIcon = (tab) => {
  const style = { fontSize: '16px' }
  switch (tab) {
    case 'All Skills': return <AppsRounded style={style} />
    case 'Frontend': return <CodeRounded style={style} />
    case 'Backend': return <DnsRounded style={style} />
    case 'Database': return <StorageRounded style={style} />
    case 'Tools & Others': return <BuildRounded style={style} />
    default: return null
  }
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All Skills')

  const filteredSkills = activeTab === 'All Skills'
    ? skills
    : skills.filter(s => s.title === activeTab)

  return (
    <Container id="skills">
      <Wrapper>
        <SectionLabel>WHAT I WORK WITH</SectionLabel>
        <Title>My <span>Skills</span></Title>
        <Desc>
          A comprehensive toolkit I use to build modern, scalable and high-performance web applications.
        </Desc>

        <TabContainer>
          {TABS.map(tab => (
            <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
              {getTabIcon(tab)}
              {tab}
            </Tab>
          ))}
        </TabContainer>

        <GridContainer single={filteredSkills.length === 1}>
          {filteredSkills.map((category) => {
            const visible = category.skills.slice(0, category.visibleCount)
            const remaining = category.skills.length - category.visibleCount
            const showMore = remaining > 0

            return (
              <SkillCard key={category.title} color={category.color}>
                <CardHeader>
                  <CardTitleGroup>
                    {getCategoryIcon(category.title, category.color)}
                    <CardTitle>{category.title}</CardTitle>
                  </CardTitleGroup>
                  <ViewAllBtn>View all</ViewAllBtn>
                </CardHeader>
                <SkillGrid>
                  {visible.map((skill) => (
                    <SkillItem key={skill.name}>
                      <SkillLeft>
                        <SkillIcon src={skill.image} alt={skill.name} />
                        <SkillName>{skill.name}</SkillName>
                      </SkillLeft>
                      <DotsContainer>
                        {Array.from({ length: 6 }).map((_, i) => (
                          <Dot key={i} filled={i < skill.level} />
                        ))}
                      </DotsContainer>
                    </SkillItem>
                  ))}
                  {showMore && (
                    <MoreCell>
                      <MoreCircle>
                        <AddRounded style={{ fontSize: '16px' }} />
                      </MoreCircle>
                      <MoreLabel>More</MoreLabel>
                    </MoreCell>
                  )}
                </SkillGrid>
              </SkillCard>
            )
          })}
        </GridContainer>

        <StatsCard>
          <StatsLeft>
            <StatsTitle>
              <AutoAwesome style={{ color: '#854CE6', fontSize: '22px' }} />
              Always Learning
            </StatsTitle>
            <StatsDesc>
              I'm constantly exploring new technologies and improving my skills to build better products.
            </StatsDesc>
          </StatsLeft>
          <StatsRight>
            <StatItem>
              <Layers style={{ color: '#13ADC7', fontSize: '28px' }} />
              <StatNumber>15+</StatNumber>
              <StatLabel>Technologies</StatLabel>
            </StatItem>
            <StatItem>
              <CalendarToday style={{ color: '#F7A400', fontSize: '28px' }} />
              <StatNumber>2+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem>
              <RocketLaunch style={{ color: '#854CE6', fontSize: '28px' }} />
              <StatNumber>20+</StatNumber>
              <StatLabel>Projects Built</StatLabel>
            </StatItem>
            <StatItem>
              <AdjustRounded style={{ color: '#1DB954', fontSize: '28px' }} />
              <StatNumber>100%</StatNumber>
              <StatLabel>Dedication</StatLabel>
            </StatItem>
          </StatsRight>
        </StatsCard>
      </Wrapper>
    </Container>
  )
}

export default Skills