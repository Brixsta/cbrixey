import React from 'react';

const Home = () => {
    return (
    <div className={"wrapper"}>
        <section className={"homeCanvas"}>
            <h1 className={'homeTitle'}>Charles Brixey</h1>
            <p className={'selfDescription'}>
            <span>Professional Overview:</span>
             Full stack engineer with experience in Javascript, Git, CSS/HTML, NodeJS, ExpressJS, React, Postgres, and Jquery.
             Check out the Applications tab to see applications I've built.
            </p>
            <div className={"selfPortrait"}>
                <img height="100%" width="100%" src="portrait.jpg" alt="portrait"></img>
            </div>
        </section>
    </div>
    );
}

export default Home;