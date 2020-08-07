import React from 'react';
import {View, Image} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler'

import styles from '../../pages/Landing/styles';
import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/icons/logo.png';


function PageHeader(){

    function handlerGoback(){

    }

    return(
    <View  style={styles.container}>
    <View style={styles.toBar}>
        <BorderlessButton onPress={handlerGoback}>

            <Image source={backIcon} resizeMode="contain"/>
        </BorderlessButton>
        <Image source={logo} resizeMode="contain" />
    </View>
    </View >
    )

}

export default PageHeader;