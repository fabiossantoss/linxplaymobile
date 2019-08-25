import React, {useState} from 'react';
import QrCode from '../../components/QrCode';
import RNCameraBarcode from '../../components/RNCameraBarcode';

import {StatusBar} from 'react-native';

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

function Login({navigation}) {
  const [readQrCode, setReadQrCode] = useState(false);

  const [rnCamera, setRNCamera] = useState(false);

  function setRead() {
    setRNCamera(false);
    navigation.navigate('QrCode');
  }

  function setRnCamera() {
    setReadQrCode(false);
    setRNCamera(true);
  }

  return (
    <Container>
      {readQrCode && <StatusBar barStyle="light-content" />}
      <Content>
        <Title>LinxPlay</Title>
        <SubTitle>
          Lorem ipsum is placeholder text commonly used in the graphic, print.
        </SubTitle>
      </Content>
      <QrCodeButton onPress={setRead}>
        <Icon />
        <Text>React Native QRCode Scanner</Text>
      </QrCodeButton>
      <Separator />
      <AccessButton onPress={setRNCamera}>
        <Icon />
        <Text>React Native Camera</Text>
      </AccessButton>
      {/* {readQrCode && <QrCode onSuccess={onSuccess} />}
      {rnCamera && <RNCameraBarcode visible={rnCamera} />} */}
    </Container>
  );
}

Login.navigationOptions = {
  header: null,
};

export default Login;
