import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import store from './store';
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';

const Navigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: 'Authenticator',
      headerBackTitle: null
    }
  },
  Scan: {
    screen: ScanPage,
    navigationOptions: {
      title: 'Scan Barcode'
    }
  }
}, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#007fff'
    }
  }
});
const AppContainer = createAppContainer(Navigator);

const Main = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default Main;
