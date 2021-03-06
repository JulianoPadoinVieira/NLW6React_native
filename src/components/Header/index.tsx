import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
//Para voltar para a tela anterior
import { useNavigation } from '@react-navigation/native';

// import { Background } from '../../components/Background';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';


type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action}: Props) { 
    const { secondary100, secondary40, heading } = theme.colors;

    //Para voltar para a tela anterior
    const navigation = useNavigation();

    //Para voltar para a tela anterior
    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary100, secondary40]}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={ heading }
                />
            </BorderlessButton>

            <Text style={styles.title}>
                { title }
            </Text>

            {
                 action 
                ? 
                <View>
                    { action }
                </View>
                :
                <View style={{ width: 24 }}/>
            }

        </LinearGradient>
    );    
}