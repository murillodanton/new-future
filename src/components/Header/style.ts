import styled from 'styled-components';
import { NEUTRAL_COLORS, PRIMARY_COLORS } from '../../constants/styleConstants';

export const Container = styled.div`
  background-color: ${NEUTRAL_COLORS.WHITE};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${PRIMARY_COLORS.NIGHT_BLUE};
  height: 120px;
  padding: 0px 50px;
`;

export const Logo = styled.img`
  width: 137.24px;
  height: 50px;
  cursor: pointer;
`;

export const GoBack = styled.div`
  color: ${NEUTRAL_COLORS.GRAY};
  font-size: 20px;
  text-align: right;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;
