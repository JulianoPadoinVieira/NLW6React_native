import React from 'react';
import { View, 
  Text, 
  TextInput,
  Image,
  Alert,
  ActiveIndicator
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { theme } from './../../global/styles/theme';

import { ButtonIcon }  from '../../components/ButtonIcon';
import { useAuth }  from '../../hooks/auth';
import { Background } from '../../components/Background';

export function SignIn(){
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    }catch (error) {
      Alert.alert(error);      
    }
  }

  return(
    <Background>
      <View style={styles.container}> 
        <Image 
          source={IllustrationImg} 
          style={styles.image}        
          resizeMode="stretch"
        />

        {/* View = Criar grupo para formatar, posicionar.  */}
        <View style={styles.content}>
          <Text style={styles.title}>
              Conecte-se{`\n`}
              e organize suas{`\n`}
              jogatinas      
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          {
            loading ? <ActiveIndicator color={theme.colors.primary}/>
            :
            <ButtonIcon 
              title="Entrar com Discord."
              onPress={handleSignIn}
            />
          }

        </View>             
      </View>
    </Background>  
  );

}