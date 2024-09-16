import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Initial } from '@screens/Initial';
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

type AuthRoutes = {
    signIn: undefined;
    initial: undefined;
    signup: undefined;
  }
  
  export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;
  
  const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();
  export function AuthRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name="signIn"
        component={SignIn}
      />

      <Screen 
        name="signup"
        component={SignUp}
      />

      <Screen 
        name="initial"
        component={Initial}
      />
    </Navigator>
  )
}