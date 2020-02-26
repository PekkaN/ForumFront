import React from "react";
import './Apps.css';
import Thread from './Thread'


const threads = [
    {
        name: 'joten tässä Sakulle rannesyöttö takaisin:'
    },
    {
        name: 'Saku oli aikoinaan valtakunnan lahjakkaimpia '
    },
    {
        name:'kiekkojunnuja (Kiekko-Espoo); valitsi mediabusineksen; '
    },
    {
        name: 'media voitti ,jääkiekko hävisi'
    },
    {
        name: ', mutta intohimo peliin tallella-CHAPEAU SAKU!!!'
    },
    {
        name:', mutta intohimo peliin tallella-CHAPEAU SAKU!!!'
    },
    {
        name: 'joten tässä Sakulle rannesyöttö takaisin:'
    },
    {
        name: 'Saku oli aikoinaan valtakunnan lahjakkaimpia '
    },
    {
        name:'kiekkojunnuja (Kiekko-Espoo); valitsi mediabusineksen; '
    },
    {
        name: 'media voitti ,jääkiekko hävisi'
    },
    {
        name: ', mutta intohimo peliin tallella-CHAPEAU SAKU!!!'
    },
    {
        name:', mutta intohimo peliin tallella-CHAPEAU SAKU!!!'
    }
]

const ThreadRows = () => threads.map(thread => <li><Thread name = {thread.name}/></li>)
const Header = (props) => <h2 className={props.className}>{props.text}</h2>

        const Sidebar = () => {
            return (
                <div className='SideBar'>
                    <Header className='SelectedThreadsHeader' text='Poiminnat'/>
                    <ul className='SelectedThreadsList'>
                        {ThreadRows()}
                    </ul>
                </div>
            )
        }

export default Sidebar;
