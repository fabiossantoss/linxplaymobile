import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

import {BoardImage} from './styles';
import Svg from 'react-native-svg';

function Onboard({navigation}) {
  function login() {
    navigation.navigate('Login');
  }

  return (
    <View>
    <Onboarding
      nextLabel="Próximo"
      skipLabel="Pular"
      onSkip={login}
      onDone={login}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <BoardImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/1.jpeg',
              }}
              ratio={0.834}
            />
          ),
          title: 'Onboarding',
          subtitle: ' Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: (
            <BoardImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/1.jpeg',
              }}
              ratio={0.834}
            />
          ),
          title: 'Onboarding',
          subtitle: ' Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: (
            <BoardImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/1.jpeg',
              }}
              ratio={0.834}
            />
          ),
          title: 'Onboarding',
          subtitle: ' Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
}

Onboard.navigationOptions = {
  header: null,
};

export default Onboard;
