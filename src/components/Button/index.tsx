import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

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

export function Button({ title, ...rest } : props){
    return (
        <RectButton 
            style={styles.container} 
            {...rest}>            

            <Text style={styles.title}>
            { title }
            </Text>  

        </RectButton>
    )
}