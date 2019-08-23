import React from 'react';

import {View, Text, StyleSheet, Modal} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

function QrCode({onSuccess}) {
  return (
    <Modal animationType="slide" transparent={false}>
      <QRCodeScanner
        onRead={onSuccess}
        cameraStyle={styles.cameraStyle}
        showMarker={true}
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
    </Modal>
  );
}
const styles = StyleSheet.create({
  cameraStyle: {
    backgroundColor: '#000',
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default QrCode;
