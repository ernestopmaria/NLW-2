import React from 'react';

import {View, Image, Text} from 'react-native';
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem(){
    return (
    <View style ={styles.container}>
        <View style ={styles.profile}>
            <Image style={styles.avatar}
            source={{uri:'https://avatars3.githubusercontent.com/u/58423237?s=460&u=f39d1d5e73424473bc991b93bb36566ecb015b76&v=4'}}
            />
            <View style={styles.profileInfo}>
                <Text style={styles.name}>Ernesto Maria</Text>
                <Text style={styles.subject}>Quimica</Text>
            </View>
        </View>
        <Text style={styles.bio}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Fuga aliquam soluta natus deleniti accusamus laborum magni 
             officia dolorem voluptate nobis veritatis quis esse quaerat, 
             id, unde in, expedita porro tenetur?</Text>

        <View style={styles.footer}>
            <Text style={styles.price}>
                Preço/hora {' '}
                <Text style={styles.priceValue}>AOA 5000</Text>
            </Text>

            <View style ={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                   {/* <Image source={heartOutlineIcon}/>*/}
                   <Image source={unfavoriteIcon}/>
                </RectButton>

                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon}/>
                    <Text style ={styles.contactButtonText}> Entrar em contacto</Text>
                </RectButton>
            </View>
        </View>
    </View>
    )
}

export default TeacherItem;

