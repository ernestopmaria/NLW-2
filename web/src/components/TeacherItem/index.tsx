import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api';

 export interface Teacher{
  
        id:number;
        avatar:string;
        bio: string;
        cost:number;
        name: string;
        subject: string;
        whatsapp:number

}
 export interface TeacherItemProps{
    teacher: Teacher
}

const TeacherItem:React.FC<TeacherItemProps>=({teacher}) =>{

    function creacteNewConnection(){
        api.post('connections',{
            user_id:teacher.id
        })
    }

    return(
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar}alt={teacher.avatar}/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        <p>
           {teacher.bio}
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>AOA {teacher.cost}</strong>
            </p>
            <a  onClick = {creacteNewConnection} href={`https://wa.me/+244${teacher.whatsapp}`}><img src={whatsappIcon} alt="Whatsapp"/>Entrar em contacto</a>
        </footer>
    </article>
    )
}

export default TeacherItem