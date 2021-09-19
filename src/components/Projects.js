import React from 'react';

const Projects = () => {
    return (
        <div className={"wrapper"}>
            <section className={"projectsCanvas"}>
                <h1 className={"projectsTitle"}>Projects</h1>
                <div className={"projectsBox"} onClick={()=> window.open("https://my-journal-application.herokuapp.com/", "_blank")}>
                    <div className={"projectsBoxImg"}>
                    <img src="myjournal.jpg" height="90%" width ="90%" alt="myjournal"></img>
                    </div>
                    <div className={"projectsBoxTitle"}>My Journal</div>
                </div>
                <div className={"projectsBox"} onClick={()=> window.open("https://mylistoftodos.herokuapp.com/", "_blank")}>
                    <div className={"projectsBoxImg"}>
                        <img src="todolist.jpg" height="90%" width ="90%" alt="todolist"></img>
                    </div>
                    <div className={"projectsBoxTitle"}>Todo List</div>
                </div>
                <div className={"projectsBox"} onClick={()=> window.open("https://parched-town.surge.sh/", "_blank")}>
                    <div className={"projectsBoxImg"}>
                        <img src="tupac.jpg" height="90%" width ="90%" alt="tupac"></img>
                    </div>
                    <div className={"projectsBoxTitle"}>90s Rap Quiz</div>
                </div>
                <div className={"projectsBox"} onClick={()=> window.open("https://hidden-plateau-56299.herokuapp.com/", "_blank")}>
                    <div className={"projectsBoxImg"}>
                    <img src="deadceleb.jpg" height="90%" width ="90%" alt="deadceleb"></img>
                    </div>
                    <div className={"projectsBoxTitle"}>Dead Celeb Database</div>
                </div>
                <div className={"projectsBox"} onClick={()=> window.open("https://brave-disgust.surge.sh/", "_blank")}>
                    <div className={"projectsBoxImg"}>
                        <img src="splatter.jpg" height="90%" width ="90%" alt="splatter"></img>
                    </div>
                    <div className={"projectsBoxTitle"}>Splatter</div>
                </div>
                <div className={"projectsBox"} onClick={()=> window.open("https://guiltless-wheel.surge.sh/", "_blank")}>
                    <div className={"projectsBoxImg"}>
                    <img src="tictactoe.jpg" height="90%" width ="90%" alt="tictacetoe"></img>
                    </div>
                    <div className={"projectsBoxTitle"}>Tic Tac Toe</div>
                </div>
                <div className={"projectsBox"} onClick={()=> window.open("https://lovely-baseball.surge.sh/", "_blank")}>
                    <div className={"projectsBoxImg"}>
                    <img src="catsonclick.jpg" height="90%" width ="90%" alt="catsonclick"></img>
                    </div>
                    <div className={"projectsBoxTitle"}>Cats On Click</div>
                </div>
            </section>
        </div>
    )
}

export default Projects;