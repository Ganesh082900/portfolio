import React from 'react'
import styled from 'styled-components'
import { GitHub, OpenInNewRounded, CalendarTodayRounded, StarRounded } from '@mui/icons-material'

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.primary + '22'};
  box-shadow: 0 4px 24px rgba(23, 92, 230, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.25s, transform 0.25s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 36px rgba(133, 76, 230, 0.22);
    transform: translateY(-4px);
  }
`

const FeaturedBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(20, 14, 35, 0.82);
  border: 1px solid #F7A40066;
  color: #F7A400;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  backdrop-filter: blur(4px);
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
  ${Card}:hover & {
    transform: scale(1.04);
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, ${({ theme }) => theme.card} 100%);
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 18px 18px;
  flex: 1;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const Tag = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + '18'};
  border: 1px solid ${({ theme }) => theme.primary + '33'};
  padding: 2px 9px;
  border-radius: 20px;
`

const Title = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

const Description = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.6;
  flex: 1;
`

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.primary + '18'};
  margin: 4px 0;
`

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

const DateLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
`

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const ActionLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const ProjectCards = ({ project, openModal, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project })}>
      <ImageWrapper>
        <Image src={project.image} alt={project.title} />
        <ImageOverlay />
        {project.featured && (
          <FeaturedBadge>
            <StarRounded style={{ fontSize: 11 }} />
            Featured
          </FeaturedBadge>
        )}
      </ImageWrapper>
      <Body>
        <Tags>
          {project.tags?.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
        </Tags>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Divider />
        <BottomRow onClick={e => e.stopPropagation()}>
          {project.date && (
            <DateLabel>
              <CalendarTodayRounded style={{ fontSize: 12 }} />
              {project.date}
            </DateLabel>
          )}
          <ActionGroup>
            {project.github && (
              <ActionLink href={project.github} target="_blank" rel="noopener noreferrer">
                <GitHub style={{ fontSize: 14 }} />
                GitHub
              </ActionLink>
            )}
            {project.webapp && (
              <ActionLink href={project.webapp} target="_blank" rel="noopener noreferrer">
                <OpenInNewRounded style={{ fontSize: 14 }} />
                Live Demo
              </ActionLink>
            )}
          </ActionGroup>
        </BottomRow>
      </Body>
    </Card>
  )
}

export default ProjectCards