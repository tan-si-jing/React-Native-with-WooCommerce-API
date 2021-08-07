import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider as PaperProvider } from 'react-native-paper';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './src/screens/auth/landing'
import Login from './src/screens/auth/login'
import Forgot from "./src/screens/auth/forgotPw"
import Main from "./src/routes/main"
import axios from 'axios';
import wc from './src/services/woocommerce'
import AuthContext from './src/context/AuthContext';

const loadFonts = () => Font.loadAsync({
    'os-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'os-bold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  const Stack = createStackNavigator();

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOG_IN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'LOG_OUT':
          return {
            ...prevState,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      userToken: null
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        if (userToken != null) {
          axios.get("https://dev4.kqwest.com/sijing/",
            {rest_route:"/jwt-login/auth/validate", JWT:userToken})
          .then(res => {
            if (!res.data.success) {
            //refresh jwt then login
            axios.post("https://dev4.kqwest.com/sijing/",
              {rest_route:"/jwt-login/auth/refresh", JWT:userToken})
            .then(resp => {
              const jwt = resp.data.data.jwt
              AsyncStorage.setItem('userToken', jwt)})
            .catch(e => console.log(e))}})
          .catch(e => console.log(e))
        }
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (values) => {
        let userToken;
        userToken = null;
        axios.post('https://dev4.kqwest.com/sijing/', {}, {
          params: {
            rest_route:'/jwt-login/auth', email: values.email, password: values.password
          }})
        .then(async(res) => {
          userToken = res.data.data.jwt
          dispatch({ type: 'LOG_IN', token: userToken });
          try {
            await AsyncStorage.setItem('userToken', res.data.data.jwt)
            wc.get('/customers',{email:values.email}).then(async({ data }) => {
              console.log(data[0].id)
              try {
                await AsyncStorage.multiSet([["email",values.email],["password",values.password],["userID",data[0].id]])
              } catch (e) { console.log(e) }
            }).catch(e => {
              console.log(e);
              //Alert.alert("Error logging in.", "Please try again.")
            });
          } catch (e) { console.log(e); }
        })
        .catch(e => {
          Alert.alert("Error!", "Please check your credentials and try again.")
        })
      },
      signOut: async() => {
        try {
          const jwt = await AsyncStorage.getItem('userToken')
          axios.post('https://dev4.kqwest.com/sijing/',
            {rest_route:'/jwt-login/auth/revoke', JWT:jwt}).catch(e => console.log(e))
          await AsyncStorage.clear();
        } catch(e) {
          console.log(e);
        }
        dispatch({ type: 'LOG_OUT' });
      }
    }),
    []
  );

  if (fontsLoaded && state.isLoading == false) {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <AuthContext.Provider value={authContext}>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                {state.userToken == null ? (
                  <>
                  <Stack.Screen name="Landing" component={Landing}
                    options={{animationTypeForReplace: state.isLogout ? 'pop' : 'push'}} />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="ForgotPassword" component={Forgot} />
                  </>
                ) : (
                  <Stack.Screen name="Main" component={Main} />
                )}
              </Stack.Navigator>
            </NavigationContainer>
          </AuthContext.Provider>
        </PaperProvider>
      </SafeAreaProvider>
    );
  } else {
      return (
        <AppLoading 
          startAsync={loadFonts} 
          onFinish={() => setFontsLoaded(true)}
          onError={console.warn}
        />
      );
  }
}



