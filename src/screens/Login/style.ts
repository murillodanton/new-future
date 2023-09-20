import styled, { keyframes } from 'styled-components';
import { NEUTRAL_COLORS, PRIMARY_COLORS } from '../../constants/styleConstants';

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const UnSpin = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const Grow = keyframes`
  from {
    height: 75px;
  }
  to {
    height: fit-content;
  }
`;

const Short = keyframes`
  from {
    height: fit-content;
  }
  to {
    height: 75px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const BodyContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export const FormLoginContainer = styled.div`
  width: 27%;
  height: 50%;
  background-color: ${NEUTRAL_COLORS.WHITE};
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(94px);
  position: relative;
  left: 15%;
  top: 3%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

export const TitleText = styled.text`
  color: ${PRIMARY_COLORS.NIGHT_BLUE};
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const TitleTextBold = styled.text`
  color: ${PRIMARY_COLORS.NIGHT_BLUE};
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const SubTitleText = styled.text`
  color: ${PRIMARY_COLORS.NIGHT_BLUE};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; 
`;

export const Input = styled.input`
  width: 100%;
  height: 200px;
  border-left: none !important;
  border-right: none !important;
  border-top: none !important; 
  border-bottom-color: ${PRIMARY_COLORS.NIGHT_BLUE};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; 
`;

export const EyeContainer = styled.div`
  position: relative;
  bottom: 16%;
  right: -47%;
  cursor: pointer;
`;

export const SubmitButton = styled.div`
  width: 80%;
  height: 104px;
  background-color: ${PRIMARY_COLORS.NIGHT_BLUE};
  display: flex;
  width: 264px;
  height: 48px;
  border-radius: 4px;
  padding: 12px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  margin-top: -40px;
  cursor: pointer;
`;

export const SubmitText = styled.text`
  color: ${NEUTRAL_COLORS.WHITE};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; 
`;

export const ForgotPassword = styled.text`
  color: ${PRIMARY_COLORS.ELETRIC_BLUE};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  cursor: pointer;
`;

export const HaveNoAccountText = styled.text`
  color: ${NEUTRAL_COLORS.WHITE};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  position: relative;
  left: 21%;
  top: 6%;
`;

export const NewAccountButton = styled.div`
  width: 80%;
  height: 104px;
  background-color: ${PRIMARY_COLORS.ELETRIC_BLUE};
  display: flex;
  width: 264px;
  height: 48px;
  border-radius: 4px;
  padding: 12px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  cursor: pointer;
  position: relative;
  left: 21%;
  top: 9%;
`;

export const NewAccountText = styled.text`
  color: ${NEUTRAL_COLORS.WHITE};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const QrImg = styled.img`
  width: 200px;
  height: 150px;
  position: relative;
  left: 66%;
  bottom: 30%;
`;

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin-top: 150px;
  display: flex;
  align-items: center;
`;

export const DoubtTextContainer = styled.div`
  width: 60%;
`;

export const DoubtText = styled.text`
  color: ${PRIMARY_COLORS.NIGHT_BLUE};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 15px;
`;

export const DoubtLine = styled.div<{expanded: boolean}>`
  width: 60%;
  height: ${props => props.expanded ? 'fit-content' : '75px'};
  animation-duration: 250ms;
  animation-name: ${props => props.expanded ? Grow : Short};;
  padding-top: ${props => props.expanded ? '18px' : '0px'};
  flex-shrink: 0;
  border-radius: 4px;
  background: ${NEUTRAL_COLORS.WHITE};
  box-shadow: 0px 8px 39px 0px rgba(41, 57, 83, 0.08);
  display: flex;
  flex-direction: ${props => props.expanded ? 'column' : 'row'};;
  align-items: ${props => props.expanded ? 'flex-start' : 'center'};
  justify-content: space-between;
  cursor: pointer;
  margin-top: 15px;
`;

export const DoubtLineText = styled.text`
  color: ${PRIMARY_COLORS.NIGHT_BLUE};
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0px 15px;
`;

export const IconContainer = styled.div<{rotate: boolean}>`
  animation-duration: 500ms;
  animation-name: ${props => props.rotate ? Spin : UnSpin};
`;

export const ValidateTitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NumbersContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 10px;
`;

export const Number = styled.input`
  border-radius: 10px;
  border: ${PRIMARY_COLORS.NIGHT_BLUE};
  background: ${NEUTRAL_COLORS.WHITE};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 30px;
  height: 50px;
  display: flex;
  padding: var(--Contador, 1.5px) var(--Contador, 14px) var(--Contador, 2.5px) var(--Contador, 14px);
  justify-content: center;
  align-items: center;
  gap: var(--Contador, 0px);
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
  color: ${PRIMARY_COLORS.NIGHT_BLUE};
`;

export const AnswerText = styled.text`
  color: ${PRIMARY_COLORS.NIGHT_BLUE};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
`;

export const InsideDoubtContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InsideAnswerContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  height: fit-content;
  gap: 10px;
  padding-bottom: 15px;
`;