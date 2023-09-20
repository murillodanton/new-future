import { BodyComposition } from "../../../components/BodyComposition"
import { HeaderDashboard } from "../../../components/HeaderDashboard"
import { Select } from "../../../components/Select";
import { useState } from 'react';
import * as S from './styles';

const banksOptions = ["Santander", "Bradesco"]

export const Withdraw = () => {

    const [bank, setBank] = useState('');

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
                        <S.AccountColumn>
                            <S.LeftAccountColumn>
                                <S.Title>Disponível para Saque</S.Title>
                                <S.Title>R$5.000,00</S.Title>
                            </S.LeftAccountColumn>
                            <S.RightAccountColumn>
                                <Select placeholder="Selecione o banco" label="Banco" onChange={setBank} value={bank} options={banksOptions} />
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