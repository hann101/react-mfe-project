import React from 'react';

//비구조 할당문법과 props를 사용하는 법
function Hello({ color, name, isSpecial }) {
    // return <div style={{ color }}> 안녕하세요 {name}</div>
    return (
        <div style={{ color }}>
            {isSpecial ? <b>*</b> : null}
            안녕하세요 {name}
        </div>
    )
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;