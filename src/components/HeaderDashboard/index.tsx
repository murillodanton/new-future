import { useLocation } from "react-router-dom";
import * as S from './styles';
import { Logo } from "../../assets/icons/logo/Logo";

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
            <S.LogoContainer>
                <Logo size={50} />
            </S.LogoContainer>
            {pathnamePage.map((item, index) => {
                return (
                    <S.NavLinkContainer active={item.path === pathname} key={item.name}>
                        <S.NavLink key={index} >
                            {item.name}
                        </S.NavLink>
                    </S.NavLinkContainer>
                )
            })}
            <S.UserInfo>
                <S.UserMoney>
                    <p>Patrimonio</p>
                    <p>
                        R$ 5000,00
                    </p>
                </S.UserMoney>
                <div>

                </div>
            </S.UserInfo>
        </S.Container>
    )
}