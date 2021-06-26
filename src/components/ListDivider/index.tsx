import React from 'react';

import {
    View
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';


type Props = {
  isCentered?: boolean;
}

export function ListDivider({ isCentered }: Props){
  return (
    <View 
      style={[
        styles.container,
        isCentered ? {
          marginVertical: 12,
        } : {
          marginTop: 2,
          marginBottom: 31,
        }
      ]}
    />
  );
}

// export function ListDivider(){
//     return (
//         <View 
//             style={styles.container}
//         />
//     );
// }

