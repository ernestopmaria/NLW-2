import React, { useState } from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'


function TeacherList(){

        const [isFilterVisible, setIsFilderVisible] =useState(false);

        function handleToggleFiltersVisible(){
            setIsFilderVisible(!isFilterVisible)
        }

    return <View style={styles.container}>
        <PageHeader title ="Proffys disponível"
         headerRight={(<BorderlessButton onPress={handleToggleFiltersVisible}>
             <Feather name="filter" size={20} color="#fff"/>
         </BorderlessButton>)}>

            {isFilterVisible &&(<View style ={styles.searchForm}>
                
                <Text  style={styles.label}>Matéria</Text>
                <TextInput style={styles.input} 
                placeholder="Qual a Materia" placeholderTextColor="#c1bccc"   />
                 
                 <View style={styles.inputGroup}>
                    
                    <View style={styles.inputBlock}>
                        <Text  style={styles.label}>Dia da semana</Text>
                        <TextInput style={styles.input}
                        placeholder="Qual o dia?"    placeholderTextColor="#c1bccc"/>
                    </View>
                    <View style={styles.inputBlock}>
                        <Text  style={styles.label}>horario</Text>
                        <TextInput style={styles.input}
                        placeholder="Qual horário"   placeholderTextColor="#c1bccc" />
                    </View>
                
                </View>
                <RectButton style={styles.submitButton}>
                   <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
            </View>)}
        </PageHeader>
       
       
        <ScrollView style ={styles.teacherList} contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:24
        }}>
        <TeacherItem />
        <TeacherItem />
         <TeacherItem />
          <TeacherItem />
        </ScrollView>
       
    </View>
}

export default TeacherList;