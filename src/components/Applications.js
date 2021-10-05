import React from 'react';

const Applications = () => {
    return (
        <div className={"wrapper"}>
            <section className={"applicationsCanvas"}>
                <h1 className={"applicationsTitle"}>Applications</h1>
                <div className={"applicationsBox"} onClick={()=> window.open("https://my-journal-application.herokuapp.com/", "_blank")}>
                    <div className={"applicationsBoxImg"}>
                    <img src="myjournal.jpg" height="90%" width ="90%" alt="myjournal"></img>
                    </div>
                    <div className={"applicationsBoxTitle"}>My Journal</div>
                </div>
                <div className={"applicationsBox"} onClick={()=> window.open("https://mylistoftodos.herokuapp.com/", "_blank")}>
                    <div className={"applicationsBoxImg"}>
                        <img src="todolist.jpg" height="90%" width ="90%" alt="todolist"></img>
                    </div>
                    <div className={"applicationsBoxTitle"}>Todo List</div>
                </div>
                <div className={"applicationsBox"} onClick={()=> window.open("https://tiny-point.surge.sh", "_blank")}>
                    <div className={"applicationsBoxImg"}>
                        <img src="tupac.jpg" height="90%" width ="90%" alt="tupac"></img>
                    </div>
                    <div className={"applicationsBoxTitle"}>90s Rap Quiz</div>
                </div>
                <div className={"applicationsBox"} onClick={()=> window.open("https://hidden-plateau-56299.herokuapp.com/", "_blank")}>
                    <div className={"applicationsBoxImg"}>
                    <img src="deadceleb.jpg" height="90%" width ="90%" alt="deadceleb"></img>
                    </div>
                    <div className={"applicationsBoxTitle"}>Dead Celeb Database</div>
                </div>
                <div className={"applicationsBox"} onClick={()=> window.open("https://brave-disgust.surge.sh/", "_blank")}>
                    <div className={"applicationsBoxImg"}>
                        <img src="splatter.jpg" height="90%" width ="90%" alt="splatter"></img>
                    </div>
                    <div className={"applicationsBoxTitle"}>Splatter</div>
                </div>
                <div className={"applicationsBox"} onClick={()=> window.open("https://guiltless-wheel.surge.sh/", "_blank")}>
                    <div className={"applicationsBoxImg"}>
                    <img src="tictactoe.jpg" height="90%" width ="90%" alt="tictacetoe"></img>
                    </div>
                    <div className={"applicationsBoxTitle"}>Tic Tac Toe</div>
                </div>
                <div className={"applicationsBox"} onClick={()=> window.open("https://lovely-baseball.surge.sh/", "_blank")}>
                    <div className={"applicationsBoxImg"}>
                    <img src="catsonclick.jpg" height="90%" width ="90%" alt="catsonclick"></img>
                    </div>
                    <div className={"applicationsBoxTitle"}>Cats On Click</div>
                </div>
            </section>
        </div>
    )
}

export default Applications;