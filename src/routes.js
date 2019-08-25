import {createAppContainer, createStackNavigator} from 'react-navigation';

//importação de paginas
import Onboard from './pages/onboard';
import Login from './pages/login';
import QrCode from './pages/QrCode';
// import Ranking from './ranking';
// import Timeline from './timeline';
// import Feed from './feed';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Onboard,
      Login,
      QrCode: {
        screen: QrCode,
        navigationOptions: {
          title: 'Escanear qr code',
          headerStyle: {
            backgroundColor: '#6E4B87',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
          },
          headerLft: {
            color: '#fff',
          },
        },
      },
    },
    {
      headerLayoutPreset: 'center',
    },
  ),
);

export default Routes;
