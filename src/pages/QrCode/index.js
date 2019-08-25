import React from 'react';

import {StyleSheet, ImageBackground, Text, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import {Container, BottomContainer, AccessButton, Icon} from './styles';

function QrCode({BottomContent = null}) {
  BottomContent = true;

  function _renderEdge(edgePosition) {
    const defaultStyle = {
      width: 40,
      height: 40,
      borderColor: '#fff',
    };
    const edgeBorderStyle = {
      topRight: {
        borderRightWidth: 2,
        borderTopWidth: 2,
      },
      topLeft: {
        borderLeftWidth: 2,
        borderTopWidth: 2,
      },
      bottomRight: {
        borderRightWidth: 2,
        borderBottomWidth: 2,
      },
      bottomLeft: {
        borderLeftWidth: 2,
        borderBottomWidth: 2,
      },
    };
    return (
      <View
        style={[
          defaultStyle,
          styles[edgePosition + 'Edge'],
          edgeBorderStyle[edgePosition],
        ]}
      />
    );
  }
  function bottomContent() {
    return (
      <BottomContainer>
        <AccessButton>
          <Text>acessar sua conta</Text>
        </AccessButton>
      </BottomContainer>
    );
  }

  function onSuccess(e) {
    alert(e.data);
  }

  return (
    <Container>
      <ImageBackground
        blurRadius={3}
        source={require('../../assets/images/loja1.jpg')}
        style={styles.imageBackground}>
        <View
          style={{
            height: 270,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <QRCodeScanner
            onRead={onSuccess}
            cameraStyle={styles.cameraStyle}
            containerStyle={styles.containerStyle}
          />
          {_renderEdge('topLeft')}
          {_renderEdge('topRight')}
          {_renderEdge('bottomLeft')}
          {_renderEdge('bottomRight')}
          <Icon
            source={{
              uri:
                'https://banner2.kisspng.com/20180421/ccw/kisspng-qr-code-computer-icons-seascapes-trito-s-match-3-qr-codes-5adac52a31b553.9804617715242867622036.jpg',
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            marginBottom: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}>qr code da campanha</Text>
        </View>
        {BottomContent && bottomContent()}
      </ImageBackground>
    </Container>
  );
}
const styles = StyleSheet.create({
  containerStyle: {
    overflow: 'hidden',
    position: 'absolute',
    height: 270,
    width: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  cameraStyle: {
    height: 270,
    width: 200,
    backgroundColor: '#000',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  topLeftEdge: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  topRightEdge: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  bottomLeftEdge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  bottomRightEdge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default QrCode;
