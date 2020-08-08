import React, { useState } from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'
import api from '../../services/api';


function TeacherList(){
    const [teachers, setTeachers] =useState([])
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

        const [isFilterVisible, setIsFilderVisible] =useState(false);

        function handleToggleFiltersVisible(){
            setIsFilderVisible(!isFilterVisible)
        }

        async function handleFiltersSubmit(){
            const response = await api.get('classes', {
                params:{
                    subject,
                    week_day,
                    time,
                }
            });
            setIsFilderVisible(false);
            setTeachers(response.data)
        }
    
        

    return <View style={styles.container}>
        <PageHeader title ="Proffys disponível"
         headerRight={(<BorderlessButton onPress={handleToggleFiltersVisible}>
             <Feather name="filter" size={20} color="#fff"/>
         </BorderlessButton>)}>

            {isFilterVisible &&(<View style ={styles.searchForm}>
                
                <Text  style={styles.label}>Matéria</Text>
                <TextInput style={styles.input}
                value={subject}
                onChangeText={ text =>setSubject(text)}
                placeholder="Qual a Materia"
                 placeholderTextColor="#c1bccc"   />
                 
                 <View style={styles.inputGroup}>
                    
                    <View style={styles.inputBlock}>
                        <Text  style={styles.label}>Dia da semana</Text>
                        <TextInput style={styles.input}
                         value={week_day}
                         onChangeText={ text =>setWeekDay(text)}
                        placeholder="Qual o dia?"
                        placeholderTextColor="#c1bccc"/>
                    </View>
                    <View style={styles.inputBlock}>
                        <Text  style={styles.label}>horario</Text>
                        <TextInput style={styles.input}
                         value={time}
                         onChangeText={ text =>setTime(text)}
                        placeholder="Qual horário" 
                          placeholderTextColor="#c1bccc" />
                    </View>
                
                </View>
                <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                   <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
            </View>)}
        </PageHeader>
       
       
        <ScrollView style ={styles.teacherList} contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:24
        }}>
        
        {teachers.map((teacher:Teacher)=><TeacherItem  key={teacher.id} teacher={teacher}/>)}
            
        
       
        </ScrollView>
       
    </View>
}

export default TeacherList;