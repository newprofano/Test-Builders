import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#003663"></StatusBar>
      <Main />
    </SafeAreaView>
  );
};

export default App;
