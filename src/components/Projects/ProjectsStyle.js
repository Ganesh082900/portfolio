import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 60px 16px 80px;
`;

export const FeaturedHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 16px;
`;

export const FeaturedTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

export const ViewAllBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.primary + '44'};
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

export const CTACard = styled.div`
  width: 100%;
  margin-top: 40px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary + '18'} 0%, ${({ theme }) => theme.primary + '08'} 100%);
  border: 1px solid ${({ theme }) => theme.primary + '33'};
  border-radius: 20px;
  padding: 28px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 20px;
  }
`;

export const CTALeft = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const CTAIconBox = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, #854CE6, #13ADC7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const CTAText = styled.div``;

export const CTATitle = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

export const CTADesc = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 2px;
`;

export const CTAButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 30px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  border: none;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.primary + 'cc'};
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.82);
`;

export const ModalCard = styled.div`
  width: min(1120px, 100%);
  max-height: calc(100vh - 64px);
  overflow: hidden;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary + '33'};
  border-radius: 28px;
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(24px);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 100000;
`;

export const ModalScrollBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 36px 36px 28px;
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 28px;
  align-content: start;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 24px 20px 20px;
  }
`;

export const ModalFooter = styled.div`
  flex-shrink: 0;
  border-top: 1px solid ${({ theme }) => theme.primary + '1a'};
  padding: 20px 36px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    padding: 16px 20px;
  }
`;

export const ModalHeader = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 8px;
`;

export const ModalBrand = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  flex: 1;
  min-width: 0;
`;

export const ModalAvatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #854CE6, #13ADC7);
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 18px 30px rgba(133, 76, 230, 0.2);
`;

export const ModalHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

export const ModalTitle = styled.div`
  font-size: 38px;
  font-weight: 800;
  line-height: 1.05;
  color: ${({ theme }) => theme.text_primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export const ModalSubtitle = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 15px;
  line-height: 1.8;
  max-width: 520px;
`;

export const ModalClose = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.primary + '2b'};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.primary + '12'};
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  grid-column: 1 / 2;
  min-width: 0;
`;

export const ModalFields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ModalField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalInput = styled.input`
  width: 100%;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.text_secondary + '55'};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  padding: 16px 18px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const ModalTextarea = styled.textarea`
  width: 100%;
  min-height: 160px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.text_secondary + '55'};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  padding: 16px 18px;
  font-size: 14px;
  outline: none;
  resize: vertical;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const ModalSubmit = styled.button`
  width: fit-content;
  padding: 14px 28px;
  border-radius: 24px;
  border: none;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.primary + 'dd'};
  }
`;

export const ModalNote = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  line-height: 1.7;
`;

export const ModalSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-column: 2 / 3;
  min-width: 0;
  @media (max-width: 960px) {
    grid-column: 1 / -1;
  }
`;

export const BenefitFooterItem = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px 16px;
  border-radius: 18px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.primary + '12'};
`;

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ModalSectionTitle = styled.div`
  font-size: 14px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

export const ContactList = styled.div`
  display: grid;
  gap: 12px;
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  border-radius: 18px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.primary + '14'};
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.card};
  }
`;

export const ContactItemLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContactLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

export const ContactSub = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
`;

export const ContactIcon = styled.div`
  min-width: 38px;
  min-height: 38px;
  border-radius: 14px;
  background: ${({ theme }) => theme.primary + '18'};
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.primary};
`;

export const BenefitList = styled.div`
  display: grid;
  gap: 12px;
`;

export const BenefitItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px 16px;
  border-radius: 18px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.primary + '12'};
`;

export const BenefitIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: ${({ theme }) => theme.primary + '12'};
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.primary};
`;

export const BenefitText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BenefitTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

export const BenefitDesc = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 0;
`;

export const SectionLabel = styled.div`
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

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
`;

export const Desc = styled.div`
  font-size: 16px;
  text-align: center;
  max-width: 560px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 8px;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 28px;
  flex-wrap: wrap;
  justify-content: center;
  background: ${({ theme }) => theme.card};
  border-radius: 40px;
  padding: 6px;
  border: 1px solid ${({ theme }) => theme.primary + '22'};
`;

export const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 22px;
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
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 36px;
  width: 100%;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;
