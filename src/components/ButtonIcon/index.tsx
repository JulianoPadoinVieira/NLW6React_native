import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles.ts';
import { theme } from '../../global/styles/theme';

// Podemos também usar interface tirando o sinal de =
// Para mudar o nome, no index de SignIn: <ButtonIcon title="Entrar com Discord." />
// interface Props {
//     title: string;
// }
type Props = RectButtonProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest } : props){
    return (
        <RectButton 
            style={styles.container} 
            {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
            { title }
            </Text>  

        </RectButton>
    )
}