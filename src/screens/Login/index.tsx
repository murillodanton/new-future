import { Header } from '../../components/Header';
import * as S from './style';
//@ts-ignore
import background from '../../assets/images/background.png';
import Eye from '../../assets/icons/eye/Eye';
import { useState } from 'react';
import DownPointer from '../../assets/icons/down-pointer/DownPointer';
import LeftPointer from '../../assets/icons/left-pointer/LeftPointer';
import Key from '../../assets/icons/key/Key';

export const Login = () => {
  const [eye, setEye] = useState(false);
  const [validate, setValidate] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [rotate1, setRotate1] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const [rotate3, setRotate3] = useState(false);
  const [rotate4, setRotate4] = useState(false);
  const [rotate5, setRotate5] = useState(false);
  const [rotate6, setRotate6] = useState(false);
  const [values, setValues] = useState(['', '', '', '', '', '']);

  const handleInputChange = (index: number, event: any) => {
    const newValue = event.target.value;
    const newValues = [...values];

    newValues[index] = newValue;
    setValues(newValues);

    if (newValue.length === 1 && index < values.length - 1) {
      const nextInput = document.querySelector(`input[name="number-${index + 1}"]`);
      //@ts-ignore
      nextInput?.focus();
    }
  };

  return (
    <>
      <S.Container>
        <Header />
        <S.BodyContainer style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
            {
              !validate ? 
              <S.FormLoginContainer>
                <S.TitleText>Olá, acesse sua conta <S.TitleTextBold>NOVA FUTURA</S.TitleTextBold></S.TitleText>
                  <S.SubTitleText>Faça login para acessar sua conta</S.SubTitleText>
                  <S.Input placeholder='Digite seu E-mail ou Código' type='text' />
                  <S.Input placeholder='Digite sua senha' type={!eye ? 'password' : 'text'} />
                  <S.EyeContainer onClick={() => setEye(!eye)}>
                    <Eye open={eye}/>
                  </S.EyeContainer>
                  <S.SubmitButton onClick={() => setValidate(true)}>
                    <S.SubmitText>Entrar</S.SubmitText>
                  </S.SubmitButton>
                <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>
              </S.FormLoginContainer>
              :
              <S.FormLoginContainer>
                <S.ValidateTitleContainer onClick={() => setValidate(false)}>
                  <LeftPointer/>
                  <S.TitleText style={{ marginLeft: "15px" }}>Olá, acesse sua conta <S.TitleTextBold>NOVA FUTURA</S.TitleTextBold></S.TitleText>
                </S.ValidateTitleContainer>
                <S.ValidateTitleContainer>
                  <S.SubTitleText style={{ marginRight: "15px" }}>Insira seu token de acesso</S.SubTitleText>
                  <Key />
                </S.ValidateTitleContainer>
                <S.NumbersContainer>
                  {values.map((value, index) => (
                    <S.Number
                      key={index}
                      type="text"
                      name={`number-${index}`}
                      maxLength={1}
                      placeholder="_"
                      value={value}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  ))}
                </S.NumbersContainer>
                <S.SubmitButton>
                    <S.SubmitText>Entrar</S.SubmitText>
                  </S.SubmitButton>
                <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>
              </S.FormLoginContainer>
            }
          <S.HaveNoAccountText>Ainda não tem uma conta Nova Futura?</S.HaveNoAccountText>
          <S.NewAccountButton>
            <S.NewAccountText>Abra sua conta</S.NewAccountText>
          </S.NewAccountButton>
          <S.QrImg src={require('../../assets/images/qrcode.png')}/>
        </S.BodyContainer>
      </S.Container>
      <S.ContainerBottom>
        <S.DoubtTextContainer>
          <S.DoubtText>Ficou com alguma dúvida?</S.DoubtText>
        </S.DoubtTextContainer>
        <S.DoubtLine expanded={rotate}>
          <S.InsideDoubtContainer>
            <S.DoubtLineText>Como alterar senhas?</S.DoubtLineText>
            <S.IconContainer rotate={rotate} onClick={() => setRotate(!rotate)}>
              <DownPointer />
            </S.IconContainer>
          </S.InsideDoubtContainer>
          {
            rotate && 
             <S.InsideAnswerContainer>
              <S.AnswerText>Para alterar a sua senha de acesso ao site, siga o passo a passo:</S.AnswerText>
              <S.AnswerText>Acesse sua área logada com sua senha atual, clicando em login;</S.AnswerText>
              <S.AnswerText>Clique na seta ao lado do seu nome;</S.AnswerText>
              <S.AnswerText>Clique em alterar senha;</S.AnswerText>
              <S.AnswerText>Digite sua nova senha, repita ela novamente e digite sua senha atual para confirmar a alteração;</S.AnswerText>
              <S.AnswerText>Clique em alterar;</S.AnswerText>
            </S.InsideAnswerContainer>
          }
        </S.DoubtLine>
        <S.DoubtLine expanded={rotate1}>
          <S.InsideDoubtContainer>
            <S.DoubtLineText>Como recuperar minha senha?</S.DoubtLineText>
            <S.IconContainer rotate={rotate1} onClick={() => setRotate1(!rotate1)}>
              <DownPointer />
            </S.IconContainer>
          </S.InsideDoubtContainer>
          {
            rotate1 && 
            <S.InsideAnswerContainer>
              <S.AnswerText>Se você esqueceu sua senha, clique em login, em seguida clique “ ESQUECEU SUA</S.AnswerText>
              <S.AnswerText>SENHA ” informe seu e-mail cadastrado na Nova Futura e clique no botão enviar. Se</S.AnswerText>
              <S.AnswerText>preferir clique aqui.</S.AnswerText>
            </S.InsideAnswerContainer>
          }
        </S.DoubtLine>
        <S.DoubtLine expanded={rotate2}>
          <S.InsideDoubtContainer>
            <S.DoubtLineText>Orientações gerais de acesso?</S.DoubtLineText>
            <S.IconContainer rotate={rotate2} onClick={() => setRotate2(!rotate2)}>
              <DownPointer />
            </S.IconContainer>
          </S.InsideDoubtContainer>
          {
            rotate2 && 
            <S.InsideAnswerContainer>
              <S.AnswerText>Se você esqueceu sua senha, clique em login, em seguida clique “ ESQUECEU SUA</S.AnswerText>
              <S.AnswerText>SENHA ” informe seu e-mail cadastrado na Nova Futura e clique no botão enviar. Se</S.AnswerText>
              <S.AnswerText>preferir clique aqui.</S.AnswerText>
            </S.InsideAnswerContainer>
          }
        </S.DoubtLine>
        <S.DoubtLine expanded={rotate3}>
          <S.DoubtLineText>Como enviar recursos para aplicar na Nova Futura?</S.DoubtLineText>
          <S.IconContainer rotate={rotate3} onClick={() => setRotate3(!rotate3)}>
            <DownPointer />
          </S.IconContainer>
        </S.DoubtLine>
        <S.DoubtLine expanded={rotate4}>
          <S.DoubtLineText>Como resgater meu saldo na Nova Futura?</S.DoubtLineText>
          <S.IconContainer rotate={rotate4} onClick={() => setRotate4(!rotate4)}>
            <DownPointer />
          </S.IconContainer>
        </S.DoubtLine>
        <S.DoubtLine expanded={rotate5}>
          <S.DoubtLineText>Como entrar em contato com a Nova Futura?</S.DoubtLineText>
          <S.IconContainer rotate={rotate5} onClick={() => setRotate5(!rotate5)}>
            <DownPointer />
          </S.IconContainer>
        </S.DoubtLine>
        <S.DoubtLine expanded={rotate6}>
          <S.DoubtLineText>Quando custa para investir na Nova Futura?</S.DoubtLineText>
          <S.IconContainer rotate={rotate6} onClick={() => setRotate6(!rotate6)}>
            <DownPointer />
          </S.IconContainer>
        </S.DoubtLine>
      </S.ContainerBottom>
    </>
  )
}