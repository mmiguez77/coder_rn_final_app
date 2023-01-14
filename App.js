import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import { store } from './src/store/store';
import { createTable, initDatabase } from './src/db/sqlQuerys';

const App = () => {

  useEffect(() => {
    async function init() {
      await initDatabase()
    }
    init()
    SplashScreen.hide()
  }, [] )


  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <DrawerNavigator/>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
