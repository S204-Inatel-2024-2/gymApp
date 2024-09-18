import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Initial } from '@screens/Initial';
import { MyProfileThree } from '@screens/MyProfileThree';
import { MyProfiletwo } from '@screens/MyProfileTwo';
import { PersonalityTrainer } from '@screens/PersonalityTrainer';
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

type AuthRoutes = {
    signIn: undefined;
    initial: undefined;
    signup: undefined;
    myprofiletwo: undefined;
    personalityTrainer: undefined
    myprofilethree: undefined
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
      <Screen 
        name="personalityTrainer"
        component={PersonalityTrainer}
      />
      <Screen 
        name="myprofiletwo"
        component={MyProfiletwo}
      />
      <Screen 
        name="myprofilethree"
        component={MyProfileThree}
      />
    </Navigator>
  )
}