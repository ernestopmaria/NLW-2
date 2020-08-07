import React from 'react';
import {View, Image, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler'

import styles from './styles';
import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps{
    title:string
}

const PageHeader:React.FC<PageHeaderProps>=({title, children})=>{
    const {navigate} = useNavigation()

    function handlerGoback(){
        navigate('Landing')
    }

    return(
    <View  style={styles.container}>
    <View style={styles.topBar}>
        <BorderlessButton onPress={handlerGoback}>

            <Image source={backIcon} resizeMode="contain"/>
        </BorderlessButton>
        <Image source={logo} resizeMode="contain" />
    </View>
    <Text style={styles.title}>{title}</Text>
    {children}
    </View >
    )

}

export default PageHeader;