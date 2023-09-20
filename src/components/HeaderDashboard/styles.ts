import styled from "styled-components";
import { NEUTRAL_COLORS, PRIMARY_COLORS } from "../../constants/styleConstants";

export const Container = styled.header`
display: flex;
width: 100%;

position: sticky;
top: 0;
background-color: ${NEUTRAL_COLORS.WHITE};
`;

export const NavLinkContainer = styled.div<{active:boolean}>`
display: flex;

align-items: center;
justify-content: center;


width: 150px;

a{
    ${({active}) => active && `
        color: ${NEUTRAL_COLORS.WHITE};
    `}
}
${({active}) => active && `
        background-color: ${PRIMARY_COLORS.NIGHT_BLUE};
    `}
`;

export const NavLink = styled.a`
    color: ${PRIMARY_COLORS.NIGHT_BLUE};
    text-decoration: none;

    padding: 16px 0;

    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;

`;