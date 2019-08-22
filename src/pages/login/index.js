import React from 'react';

import {
  Container,
  Content,
  Title,
  SubTitle,
  QrCodeButton,
  Separator,
  AccessButton,
} from './styles';

function Login() {
  return (
    <Container>
      <Content>
        <Title>LinxPlay</Title>
        <SubTitle>LinxPlay</SubTitle>
      </Content>
      <QrCodeButton />
      <Separator />
      <AccessButton />
    </Container>
  );
}

export default Login;
