import ArrowRight from '../../assets/icons/arrow-right/ArrowRight';
import * as S from './style';

export const Header = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Logo src={require('../../assets/images/novalogo.png')}/>
        <S.RightContainer>
          <S.GoBack>Voltar para o site</S.GoBack>
          <ArrowRight />
        </S.RightContainer>
      </S.HeaderContainer>
    </S.Container>
  )
}