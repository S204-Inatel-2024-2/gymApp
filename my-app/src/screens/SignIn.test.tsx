import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { SignIn } from './SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

describe('SignIn Component', () => {
  it('renders correctly', () => {
    render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    // Verifica se o título está presente
    expect(screen.getByText('Bem Vindo ao GYM++')).toBeTruthy();
    expect(screen.getByText('Seu treino na palma da mão!')).toBeTruthy();

    // Verifica se o botão "Iniciar" está presente
    expect(screen.getByText('Iniciar')).toBeTruthy();
    
    // Verifica se o botão "Já tenho conta" está presente
    expect(screen.getByText('Já tenho conta')).toBeTruthy();
  });
});
