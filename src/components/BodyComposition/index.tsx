import * as S from './styles';

type BodyCompositionProps = {
    children: React.ReactNode;
}

export const BodyComposition = ({ children }: BodyCompositionProps) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}