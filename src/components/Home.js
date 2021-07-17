import React from 'react';

const Home = () => {
    return (
    <div className={"homeWrapper"}>
        <section className={"homeCanvas"}>
            <h1 className={'homeTitle'}>Charles Brixey</h1>
            <p className={'selfDescription'}>
            <span>Professional Experience</span>
             I've worked with Javascript, Git, CSS/HTML, NodeJS, ExpressJS React, Postgres, and Jquery.
             Check out the Projects tab to see me utilize these technologies.
            </p>
            <div className={"selfPortrait"}>
                <img height="100%" width="100%" src="portrait.jpg" alt="portrait"></img>
            </div>
        </section>
    </div>
    );
}

export default Home;