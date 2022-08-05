import React from 'react';
import { Link } from "react-router-dom";
import Popout from 'react-popout'




const AdminList = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>)

    const clickMe = (e) => {

        document.location.href('/list')

    }


    return (
        // <div className='hello'>
        //     <ul>{nameList}</ul>
        //     <button onClick={clickMe}>wtf</button>

        // </div>



        <button onClick={() => window.open('/list', '_blank', 'width=400 height=700')}>[url 링크]</button>


    )

}


export default AdminList;