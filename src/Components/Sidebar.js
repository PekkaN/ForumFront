import React from "react";
import '../Apps.css';




const Header = (props) => <h2 className={props.className}>{props.text}</h2>

        const Sidebar = () => {
            return (
                <div className='SideBar'>
                    <Header className='SelectedThreadsHeader' text='Poiminnat'/>
                    <ul className='SelectedThreadsList'>
                        {"judut"}
                    </ul>
                </div>
            )
        }

export default Sidebar;
