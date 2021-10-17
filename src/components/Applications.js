import React from 'react';

// Simulate a backend API returning a JSON for React to map
const myApps = [
    {
        "title": "Phonebook App",
        "link": "https://terrific-argument.surge.sh/",
        "img": "phonebook.jpg",
        "alt": "phonebook app"
    },
    {
        "title": "My Journal",
        "link": "https://my-journal-application.herokuapp.com/",
        "img": "myjournal.jpg",
        "alt": "myjournal"
    },
    {
        "title": "Todo List",
        "link": "https://mylistoftodos.herokuapp.com/",
        "img": "todolist.jpg",
        "alt": "todolist"
    },
    {
        "title": "90s Rap Quiz",
        "link": "https://tiny-point.surge.sh",
        "img": "tupac.jpg",
        "alt": "tupac"
    },
    {
        "title": "Dead Celeb Database",
        "link": "https://hidden-plateau-56299.herokuapp.com/",
        "img": "deadceleb.jpg",
        "alt": "deadceleb"
    },
    {
        "title": "Splatter",
        "link": "https://brave-disgust.surge.sh/",
        "img": "splatter.jpg",
        "alt": "splatter"
    },
    {
        "title": "Tic Tac Toe",
        "link": "https://guiltless-wheel.surge.sh/",
        "img": "tictactoe.jpg",
        "alt": "tictactoe"
    },
    {
        "title": "Cats on Click",
        "link": "https://lovely-baseball.surge.sh/",
        "img": "catsonclick.jpg",
        "alt": "catsonclick"
    }
]

const Applications = () => {
    return (
        <div className={"wrapper"}>
            <section className={"applicationsCanvas"}>
                <h1 className={"applicationsTitle"}>Applications</h1>
                {myApps.map((apps) => ( // map/loop through each object from data for cleaner frontend code
                    <div className={"applicationsBox"} onClick={() => window.open(`${apps.link}`, "_blank")}>
                        <div className={"applicationsBoxImg"}>
                            <img src={apps.img} height="90%" width="90%" alt={apps.alt}></img>
                        </div>
                        <div className={"applicationsBoxTitle"}>{apps.title}</div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Applications;