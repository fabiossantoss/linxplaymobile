import {createAppContainer, createStackNavigator} from 'react-navigation';

//importação de paginas
import Onboard from './pages/onboard';
import Login from './pages/login';
// import Home from './home';
// import Ranking from './ranking';
// import Timeline from './timeline';
// import Feed from './feed';

const Routes = createAppContainer(
  createStackNavigator({
    Onboard,
    Login,
  }),
);

export default Routes;
