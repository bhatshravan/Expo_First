import React from 'react';

import Splash from './src/pages/splash';
import Home from './src/pages/home';
import Form from './src/pages/form';

import { IconRegistry, ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StoreProvider } from 'easy-peasy';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import store from './src/store/easy';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: `A`,
        headerBackTitle: null,
      }),
    },
    Splash: Splash,
    Form: Form
  },
  {
    initialRouteName: 'Form',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
        fontSize: 24,
      },
      gesturesEnabled: true,
    },
  }
);

const FinalNav = createAppContainer(AppNavigator);

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <StoreProvider store={store}>
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <FinalNav />
      </ApplicationProvider>
    </StoreProvider>
  </React.Fragment>
);

export default App;
