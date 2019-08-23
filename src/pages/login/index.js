import React, {useState} from 'react';
import Svg from 'react-native-svg';
// import QRCodeScanner from 'react-native-qrcode-scanner';
import QrCode from '../../components/QrCode';

import {
  Container,
  Content,
  Title,
  SubTitle,
  QrCodeButton,
  Separator,
  AccessButton,
  Icon,
  Text,
} from './styles';

function Login() {
  const [readQrCode, setReadQrCode] = useState(false);

  function onSuccess(e) {
    alert(e.data);
    setReadQrCode(false);
  }

  return (
    <Container>
      <Content>
        <Title>LinxPlay</Title>
        <SubTitle>
          Lorem ipsum is placeholder text commonly used in the graphic, print.
        </SubTitle>
      </Content>
      <QrCodeButton onPress={() => setReadQrCode(true)}>
        <Icon />
        <Text>escanear qrcode</Text>
      </QrCodeButton>
      <Separator />
      <AccessButton>
        <Icon />
        <Text>acessar sua conta</Text>
      </AccessButton>
      {readQrCode && <QrCode onSuccess={onSuccess} />}
    </Container>
  );
}

Login.navigationOptions = {
  header: null,
};

export default Login;
