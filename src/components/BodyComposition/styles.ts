import styled from "styled-components";
import { PRIMARY_COLORS } from "../../constants/styleConstants";

export const Container = styled.div`
display: flex;

align-items: center;
justify-content: flex-start;

flex-direction: column;

padding-top: 32px;

width: 100%;
flex-grow: 1;

background-color: ${PRIMARY_COLORS.NIGHT_BLUE};
`;