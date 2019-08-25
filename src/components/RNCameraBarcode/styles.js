import styled from 'styled-components/native';

const TochableTemplate = styled.TouchableOpacity`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 40px;
  margin: 5px;
  flex-direction: row;
`;

export const QrCodeButton = styled(TochableTemplate)`
  background-color: #d2d;
`;

export const AccessButton = styled(TochableTemplate)`
  background-color: #3b0;
`;

export const CustomMarker = styled.View`
  width: 200;
  height: 270;
  border-width: 1;
  border-color: #fff;
`;

export const Container = styled.View`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const BottomContainer = styled.View`
  height: 50;
  width: 200;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 32px;
  height: 32px;
  opacity: 0.32;
`;
