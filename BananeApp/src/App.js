import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlashMessage from "react-native-flash-message";
import Login from "./pages/auth/Login";
import Sign from "./pages/auth/Sign";
import Messages from "./pages/Messages/Messages";
import colors from "./styles/colors";

const Stack = createNativeStackNavigator();

const App = () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, [])

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='LoginPage' component={Login}
          options={{
            headerStyle: { backgroundColor: 'darkorange' },
            headerShown: false
          }} />
        <Stack.Screen name='SignPage' component={Sign}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: 'darkorange' },
            headerTintStyle: { color: 'white' },
            headerTintColor: 'black',
          }} />
      </Stack.Navigator>
    )
  };
  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthStack />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="MessagesScreen"
            component={Messages}
            options={{
              title: 'Dertler', headerTintColor: colors.darkorange,
              headerRight: () =>
                <Icon
                  name="logout"
                  size={30}
                  color={colors.darkorange}
                  onPress={() => auth().signOut()} />,
            }} />
        </Stack.Navigator>
      )}

      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default App;