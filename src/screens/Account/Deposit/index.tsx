import { BodyComposition } from "../../../components/BodyComposition"
import { HeaderDashboard } from "../../../components/HeaderDashboard"
import * as S from './styles';

export const Deposit = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
        }}>
            <HeaderDashboard />
            <BodyComposition>
                <S.Content>
                    <div>
                        <S.Title>Como depositar</S.Title>
                        <S.AccountColumn>
                            <S.LeftAccountColumn>
                                <S.LeftAccountRow>
                                    <div>
                                        S
                                    </div>
                                    <p>Insira os dados da sua Conta no seu banco</p>
                                </S.LeftAccountRow>
                                <S.LeftAccountRow>
                                    <div>
                                        S
                                    </div>
                                    <p>Transfira via TED.</p>
                                </S.LeftAccountRow>
                                <S.LeftAccountRow>
                                    <div>
                                        S
                                    </div>
                                    <p>Seu dinheiro estará disponível na plataforma em minutos, se transferido em dias úteis, das 9h às 16h</p>
                                </S.LeftAccountRow>
                                <S.LeftAccountRow>
                                    <div>
                                        S
                                    </div>
                                    <p>O valor mínimo do primeiro investimento é de R$ 100.</p>
                                </S.LeftAccountRow>
                                <S.LeftAccountRow>
                                    <div>
                                        S
                                    </div>
                                    <p>Insira os dados da sua Conta no seu banco</p>
                                </S.LeftAccountRow>
                            </S.LeftAccountColumn>
                            <S.RightAccountColumn>
                                <strong>Nova Futura</strong>
                                <p>Banco</p>
                                <strong>0001</strong>
                                <p>Agência</p>
                                <strong>161165 - 0</strong>
                                <p>Conta e dígito</p>
                                <b>Só é possível receber transferências de contas com a mesma titularidade</b>
                            </S.RightAccountColumn>
                        </S.AccountColumn>
                    </div>

                </S.Content>
                <button>
                    Precisa de ajuda?
                </button>
            </BodyComposition>

        </div>
    )
}