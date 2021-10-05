import React from 'react';

const Videos = () => {
    return (
        <div className="wrapper">
            <section className="videosCanvas">
            <h1 className={"videosTitle"}>Videos</h1>
                <div className={"videosBox"} onClick={()=> window.open("https://my-journal-application.herokuapp.com/", "_blank")}>
                        <div className={"videosBoxImg"}>
                        <img src="reversestrinplace.jpg" height="90%" width ="90%" alt="reversestr"></img>
                        </div>
                        <div className={"videosBoxTitle"}>Reverse Str in Place</div>
                </div>
                <div className={"videosBox"} onClick={()=> window.open("https://my-journal-application.herokuapp.com/", "_blank")}>
                        <div className={"videosBoxImg"}>
                        <img src="fizzbuzz.jpg" height="90%" width ="90%" alt="fizzbuzz"></img>
                        </div>
                        <div className={"videosBoxTitle"}>Fizzbuzz</div>
                </div>
            </section>
        </div>
    )
}

export default Videos;