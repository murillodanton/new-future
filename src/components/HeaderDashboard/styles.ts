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


width: 229px;
height: 80px;

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

    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;

`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 15px 48px;
`;

export const UserInfo = styled.div`
    display: flex;

    width: 317px;
    height: 80px;

    align-items: center;
    justify-content:space-between;

    padding: 16px 20px;

    background-color: ${PRIMARY_COLORS.NIGHT_BLUE};
    `;

export const UserMoney = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    color: ${NEUTRAL_COLORS.WHITE};

    span{
        font-size: 16px;
        font-weight: 600;
    }

    p{
        font-size: 16px;
        font-weight: 600;
    }
`;