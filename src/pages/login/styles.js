import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
export const Content = styled.View`
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
`;

export const Separator = styled.View`
  height: 5px;
  width: 20px;
  background-color: #cccccc;
`;

export const Title = styled.Text``;
export const Text = styled.Text``;
export const SubTitle = styled.Text`
  text-align: center;
`;

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

export const Icon = styled.Image`
  width: 32px;
  height: 32px;
`;
