import React from 'react';
import './Projects.css';

const Projects = () => {
    const projectData = [
        {
            title: 'MERN-Chat-App',
            description: ' Personal/group chat real time messaging ',
            link: 'https://www.google.com/url?q=https://chat-app-jzgr.onrender.com/&sa=D&source=apps-viewer-frontend&ust=1716112154181665&usg=AOvVaw2ViEX80cEQCZosfcMi52z_&hl=en-GB'
        },
        {
            title: 'News Website',
            description: 'for fetching real-time news articles.',
            link: 'https://github.com/priyanshu2552/News-Website'
        },
        {
            title: 'Book Search App',
            description: 'Utilizes the Google Books API ',
            link: 'https://github.com/priyanshu2552/SearchBook-'
        },
        {
            title: 'Project 4',
            description: 'Description for project 4',
            link: 'https://link-to-project4.com'
        },
        {
            title: 'Project 5',
            description: 'Description for project 5',
            link: 'https://link-to-project5.com'
        },
        {
            title: 'Project 6',
            description: 'Description for project 6',
            link: 'https://link-to-project6.com'
        }
    ];

    return (
        <>
        <div id='projects' className="Projects">
            <div className="header3">
                <h1>My Projects</h1>
            </div>
            <div className="Cards">
                {projectData.map((project, index) => (
                    <div className="Card" key={index}>
                        <h2>0{index+1}</h2>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Visit</a>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Projects;
