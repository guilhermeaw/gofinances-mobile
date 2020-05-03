import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';
import AppContainer from './hooks';

const App: React.FC = () => (
  <AppContainer>
    <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
    <Routes />
  </AppContainer>
);

export default App;
