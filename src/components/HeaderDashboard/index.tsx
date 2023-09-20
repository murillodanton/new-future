import { useLocation } from "react-router-dom";
import * as S from './styles';

export const HeaderDashboard = () => {

    const pathnamePage = [
        {
            name: 'Meus Investimentos',
            path: '/myinvestments'
        },
        {
            name: 'Conta',
            path: '/account'
        },
        {
            name: 'Patrimônio',
            path: '/patrimony'
        },
        {
            name: 'Investir',
            path: '/invest'
        },
        {
            name: 'Plataformas',
            path: '/platforms'
        },
        {
            name: 'Homebroker',
            path: '/homebroker'
        },
    ]

    const { pathname } = useLocation();

    return (
        <S.Container>
            {pathnamePage.map((item, index) => {
                return (
                    <S.NavLinkContainer active={item.path === pathname} key={item.name}>
                        <S.NavLink key={index} >
                            {item.name}
                        </S.NavLink>
                    </S.NavLinkContainer>
                )
            })}
        </S.Container>
    )
}