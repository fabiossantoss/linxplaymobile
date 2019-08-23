import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

function QrCode({onSuccess}) {
  return (
    <View>
      <QRCodeScanner
        onRead={e => onSuccess(e)}
        cameraStyle={styles.cameraStyle}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <View style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </View>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cameraStyle: {
    backgroundColor: '#000',
    padding: 50,
    margin: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default QrCode;
