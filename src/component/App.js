import React,{useContext} from 'react';
import {
    useTheme, ThemeProvider
} from "../hook/ThemeContext"
import Theme from "./Theme"
import Navbar from './Navbar';
import Content from './Content';

export default function App() {
    return ( 
        <ThemeProvider>
            <Navbar/>
            <Content />
        </ThemeProvider>
    )
}