import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'



function TeacherItem(){


    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/58423237?s=400&u=f39d1d5e73424473bc991b93bb36566ecb015b76&v=4" alt="Ernesto Maria"/>
            <div>
                <strong>Ernesto Maria</strong>
                <span>Quimica</span>
            </div>
        </header>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in obcaecati,
             eaque aut accusantium <br/> <br/> illo, impedit, similique excepturi ea sapiente numquam 
             ab! Quos odio in doloremque voluptate, minima ipsa suscipit!
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>AOA 5.000</strong>
            </p>
            <button type="button"><img src={whatsappIcon} alt="Whatsapp"/>Entrar em contacto</button>
        </footer>
    </article>
    )
}

export default TeacherItem