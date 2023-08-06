import React, { useState } from 'react';

import{useTheme,useThemeUpdate, useThemeUpdateColor} from '../hook/ThemeContext';

export default function Theme() {
    const [image, setImage] = useState('moon.png')
    const dark = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = useThemeUpdateColor()

function switchMode(){
    if (!dark){
        setImage('sun.png')
        toggleTheme()
    }else{
        setImage('moon.png')
        toggleTheme()
    }
}
    return (
        <>
            <img src = {require('../img/' + image)} className='darkmode'
                width = '80px' height = '80px' onClick = {switchMode}/>
        </>
    )
}