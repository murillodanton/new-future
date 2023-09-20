import styled from "styled-components";
import { PRIMARY_COLORS } from "../../constants/styleConstants";

export const Container = styled.div`
display: flex;
flex-direction: column;

width: 180px;

div{
    display: flex;
    position: relative;
    flex-direction: column;

}
p{
    font-size: 16px;
    color: ${PRIMARY_COLORS.NIGHT_BLUE} !important;
    }
`;

export const Options = styled.ul`
    display: flex;
    position: absolute;
    top: 32px;
    left: 0px;

    padding: 0;

    flex-direction: column;

    gap: 8px;

    align-items: flex-start;
    justify-content: flex-start;

    li{
        list-style: none;

        button{
            border: none;
        }
    }
    `;
