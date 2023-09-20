import styled from "styled-components";
import { NEUTRAL_COLORS, PRIMARY_COLORS } from "../../../constants/styleConstants";

export const Content = styled.div`
display: grid;

grid-template-columns: repeat(2,fit-content(100%));

place-content: center;
place-items: center;

`;


export const AccountColumn = styled.div`
    display: flex;

    gap: 32px;
`;

export const RightAccountColumn = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;

    background-color: ${NEUTRAL_COLORS.WHITE};

    border-radius: 8px;


    padding: 24px;

    strong {
        font-size: 20px;
        color: ${PRIMARY_COLORS.NIGHT_BLUE};
    }
    p{
        font-size: 12px;
        color: ${NEUTRAL_COLORS.GRAY};
    }
    b{
        font-size: 12px;
        color: ${PRIMARY_COLORS.NIGHT_BLUE};
        font-weight: 500;
    }

`;

export const LeftAccountColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: ${NEUTRAL_COLORS.WHITE};
`;

export const LeftAccountRow = styled.div`
    display: flex;

    gap: 16px;

    align-items: center;
    justify-content: start;

    div{
        display: flex;

        align-items: center;
        justify-content: center;

        background-color: ${PRIMARY_COLORS.ELETRIC_BLUE};

        padding: 10px 16px;

        border-radius: 99px;
    }

    p{
        font-size: 16px;
        color: ${NEUTRAL_COLORS.WHITE};
    }
`;