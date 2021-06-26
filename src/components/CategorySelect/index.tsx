import React from 'react';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

import { styles } from './styles.ts';
import { Category } from '../Category';
import { categories } from '../../utils/categories';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void; 
    hasCheckBox?: boolean;
}

export function CategorySelect({ 
    categorySelected, 
    setCategory,
    hasCheckBox = false,
}: Props){

    return (
        <ScrollView 
            horizontal
            style={styles.container}
            //Não aparecer a barra de rolagem
            showHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40}}            
        >
        {
            categories.map(category => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={() => setCategory(category.id)}
                    hasCheckBox={hasCheckBox}
                />
            ))
        }        
        </ScrollView>
    )
}