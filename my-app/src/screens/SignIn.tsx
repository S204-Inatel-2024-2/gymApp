import { Center, Heading, Image, Text, VStack, ScrollView} from '@gluestack-ui/themed'

import BackgroundImg from '@assets/Backgroud.png'
import Logo from '@assets/Logo.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { AuthNavigatorRoutesProps } from "@routes/auth.routes"
import { useNavigation } from '@react-navigation/native'
export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  
  function handleNewAccont(){
    navigation.navigate("signUp")
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
    <VStack flex={1} >
      <Image
        w="$full"
        h="$full"
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Treino em uma academia"
        position="absolute"
      />
      <VStack flex={1} px="$1" pb="$16">
      <Center my="$24">
        <Image w="$1/2" source={Logo} alt="Logo" />

        <Text color="$white" fontSize="$xl">
          Treine seu corpo
        </Text>
      </Center>
      <Center gap="$6">
          <Heading color="$white">Acesse sua conta</Heading>

          <Input 
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Entrar" />
          <Center flex={1} justifyContent="flex-end" marginTop="$4">

          <Text color="$white" fontSize="$md" mb="$3" fontFamily="$body">
            Ainda não tem acesso?
          </Text>
        </Center>
          <Button title="Criar conta" variant="outline" onPress={handleNewAccont} />
        </Center>
        </VStack>
    </VStack>
    </ScrollView>
  )
}