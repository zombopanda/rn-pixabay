import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import { RootStackParamList } from './types/navigation';
import { PIXABAY_API_KEY } from '@env';
import pixabay from './lib/Pixabay';
import { Provider as ReduxProvider } from 'react-redux';
import store from './lib/store';

pixabay.setConfig({ apiKey: PIXABAY_API_KEY });
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <ReduxProvider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Search Images' }} />
        <Stack.Screen
          name="ViewImage"
          component={ViewImageScreen}
          options={{ title: 'View Image', headerBackTitle: 'Back' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </ReduxProvider>
);

export default App;
