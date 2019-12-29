// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import Splash from './src/pages/splash2';
import Home from './src/pages/home';
import { IconRegistry,ApplicationProvider, Layout, Text, Button,TopNavigation,TopNavigationAction,Icon } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
    <Button category='h1'>HOME</Button>
  </Layout>
);

const App = () => (
  <React.Fragment>
  <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <Splash />
    <Home />
  </ApplicationProvider>
  </React.Fragment>
);

export default App;
