import React from 'react';

const Videos = () => {
    return (
        <div className="wrapper">
            <section className="videosCanvas">
            <h1 className={"videosTitle"}>Videos</h1>
                <div className={"videosBox"} onClick={()=> window.open("https://www.youtube.com/watch?v=pTnEBfzP4rc&t=5s&ab_channel=N3RDyB0iz", "_blank")}>
                        <div className={"videosBoxImg"}>
                        <img src="reversestrinplace.jpg" height="90%" width ="90%" alt="reversestr"></img>
                        </div>
                        <div className={"videosBoxTitle"}>Reverse Str in Place</div>
                </div>
                <div className={"videosBox"} onClick={()=> window.open("https://www.youtube.com/watch?v=PrAonne9v1s&t=40s&ab_channel=N3RDyB0iz", "_blank")}>
                        <div className={"videosBoxImg"}>
                        <img src="fizzbuzz.jpg" height="90%" width ="90%" alt="fizzbuzz"></img>
                        </div>
                        <div className={"videosBoxTitle"}>Fizzbuzz</div>
                </div>
                <div className={"videosBox"} onClick={()=> window.open("https://www.youtube.com/watch?v=Slb2oUtzPZo&t=21s&ab_channel=N3RDyB0iz", "_blank")}>
                        <div className={"videosBoxImg"}>
                        <img src="fizzbuzz.jpg" height="90%" width ="90%" alt="RemoveDupesWithSet"></img>
                        </div>
                        <div className={"videosBoxTitle"}>Remove Dupes w/Set</div>
                </div>
                <div className={"videosBox"} onClick={()=> window.open("https://www.youtube.com/watch?v=pOdCNrg6ngE&ab_channel=N3RDyB0iz", "_blank")}>
                        <div className={"videosBoxImg"}>
                        <img src="fizzbuzz.jpg" height="90%" width ="90%" alt="Selection Sort"></img>
                        </div>
                        <div className={"videosBoxTitle"}>Selection Sort</div>
                </div>
            </section>
        </div>
    )
}

export default Videos;