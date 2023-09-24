import styled from "styled-components";
import { PRIMARY_COLORS } from "../../constants/styleConstants";

export const Container = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    background-color: ${PRIMARY_COLORS.ELETRIC_BLUE};

    padding: 16px 9px;

    p{
        font-size: 16px;
        color: #FFFFFF;
        font-weight: 500;
    }

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border-radius: 29px
`;