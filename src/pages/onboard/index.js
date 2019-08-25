import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

import {BoardImage} from './styles';

function Onboard({navigation}) {
  function login() {
    navigation.navigate('Login');
  }

  return (
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

export default Onboard;
