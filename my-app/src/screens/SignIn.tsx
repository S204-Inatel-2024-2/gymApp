import { Center, Heading, Image, Text, VStack } from '@gluestack-ui/themed';
import BackgroundImg from '@assets/Backgroud.png';
import Logo from '@assets/Logo.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleCreateAccont() {
    navigation.navigate("initial");
  }

  return (
    <VStack flex={1}>
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
          <Image w="$2/3" h="$64" source={Logo} alt="Logo" />
          <Text color="$white" fontSize="$xl">
            Treine seu corpo
          </Text>
        </Center>
        <Center gap="$6">
          <Heading color="$white">Bem Vindo ao GYM++</Heading>
          <Heading color="$orange500" paddingBottom={20}>
            Seu treino na palma da mão!
          </Heading>
          {/* <Input 
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry /> */}
          <Button title="Iniciar" onPress={handleCreateAccont} />
          <Button variant="outline" title="Já tenho conta" />
          <Center flex={1} justifyContent="flex-end" marginTop="$4">
            {/* Outros conteúdos aqui */}
          </Center>
        </Center>
      </VStack>
    </VStack>
  );
}
