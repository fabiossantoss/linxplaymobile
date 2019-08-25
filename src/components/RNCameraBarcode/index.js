import React, {Component} from 'react';
import {StyleSheet, Text, View, Vibration, ImageBackground} from 'react-native';
import {RNCamera} from 'react-native-camera';

import BarcodeMask from 'react-native-barcode-mask';

import {Icon} from './styles';

class RNCameraBarcode extends Component {
  render() {
    return (
      <ImageBackground
        blurRadius={3}
        source={require('../../assets/images/loja1.jpg')}
        style={styles.container}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          captureAudio={false}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          onGoogleVisionBarcodesDetected={this.barcodeRecognized}
          style={styles.preview}>
          <Icon
            source={{
              uri:
                'https://banner2.kisspng.com/20180421/ccw/kisspng-qr-code-computer-icons-seascapes-trito-s-match-3-qr-codes-5adac52a31b553.9804617715242867622036.jpg',
            }}
          />
          <BarcodeMask />
        </RNCamera>
      </ImageBackground>
    );
  }

  onBarCodeRead(e) {
    console.log('Barcode Found!', 'Type: ' + e.type + '\nData: ' + e.data);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    backgroundColor: '#000',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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

export default RNCameraBarcode;
