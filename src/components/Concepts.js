import React, {useState} from 'react';
import Async from './Async';

const Concepts = () => {

    const [current, setState] = useState({asnyc:false, concepts:true});

    function asyncClick () {
        setState({async:true, concepts:false})
    }

    return (
        <div className={"conceptsWrapper"}>
            {current.async === true && <Async />}
            {current.concepts === true && <div className={"conceptsCanvas"}>
                <h1 className={"conceptsTitle"}>Concepts</h1> 
                <div className={"conceptsBox"} onClick={asyncClick}>
                    <div className={"conceptsBoxImg"}>
                    <img src="javascript.png" height="90%" width ="90%" alt="tictacetoe"></img>
                    </div>
                    <div className={"conceptsBoxTitle"}>Async Javascript</div>
                </div>
            </div>}
            
        </div>
    )
}

export default Concepts;