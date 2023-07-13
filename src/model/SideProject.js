
import React from 'react';
class SideProject {
    constructor() {
        this.SideProjects = [
             {
                'techniques': ['html5', 'css'],
                'projectName': 'myProjectTree',
                'projectIcon': 'sideProjectTree.png',
                'description': 'Creating a website like linktree for containing the websites I create ',
                'url': 'https://billrushproject.github.io/sideProjectTree/sideProject.html'
            }, {
                'techniques': ['html5', 'css', 'javascript'],
                'projectName': 'Timer for exercise',
                'projectIcon': 'Time.png',
                'description': 'The website offers functions which offer the Circuit Training Timer and countdown timer',
                'url': 'https://billrushproject.github.io/sideProjectTree/timer.html'
            }, {
                'techniques': ['html5', 'css', 'javascript', 'jquery'],
                'projectName': '27thcadsSeika',
                'projectIcon': 'seika.png',
                'description': 'A system for information giving to the members of student societies ',
                'url': 'https://seika27cads.github.io/27thcadsSeika/index.html'
            }, {
                'techniques': ['html5', 'css', 'javascript', 'firebase'],
                'projectName': 'BookingSystem_ONight_Dgame',
                'projectIcon': 'onight.png',
                'description': 'A management system for handling detective game.',
                'url': 'https://billrushproject.github.io/ONightCamera/index.html'
            }, {
                'techniques': ['html5', 'css', 'javascript'],
                'projectName': 'What time is it?',
                'projectIcon': 'WTII.png',
                'description': 'A Web digital clock',
                'url': 'https://billrushproject.github.io/WhatTimeIsIt/'
            }, {
                'techniques': ['html5', 'css', 'javascript'],
                'projectName': 'AllGame',
                'projectIcon': 'AllGame.png',
                'description': 'A website offers detail of party games',
                'url': 'https://billrushproject.github.io/game/'
            }, {
                'techniques': ['html5', 'css', "react.js"],
                'projectName': 'Portfolio',
                'projectIcon': 'Portfolio.png',
                'description': 'This website!',
                'url': ''
            }, , {
                'techniques': ['html5', 'css', "react.js"],
                'projectName': 'TodoList',
                'projectIcon': 'TodoList.jpg',
                'description': 'A todolist for encouraging me to meet targets. ',
                'url': 'https://kenlamcoding.github.io/todolist/'
            },
        ]
    }
    printSideProject=()=>{
        return(
            <>{
                this.SideProjects.map((sideproject,index)=>{
                    return(
                        <div key={'projects'+index} className='card'>
                            <h5 className='cardTitle'>{sideproject.projectName}</h5>
                            <a href = {
                                sideproject.url
                            }
                            target = '_blank'
                            rel = "noopener noreferrer" >
                               <img src = {
                                   require('../img/projectIcon/'+sideproject.projectIcon)
                               }
                                width = '250px'
                                className = 'cardImg'
                                alt = {
                                    sideproject.projectName
                                }
                               
                                />
                            </a>
                            <div className = 'acResult' >
                                    <div >
                                        {sideproject.description}
                                    </div>
                                    <div className = '.flexRowContainer-jc-l' >
                                        {
                                        sideproject.techniques.map((technique,index)=>{
                                            return(
                                                <div className='techName'>{technique}</div>
                                            )
                                        })
                                    }
                                    </div>

                            </div>
                            
                            <div>
                                <div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    );
                })
                }
            
            </>
        )
    }
}
export default SideProject;