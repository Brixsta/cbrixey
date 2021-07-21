import React, {useState} from 'react';
import Async from './Async';

const Concepts = (props) => {
    const [current, setState] = useState({async:false, concepts:true})

    const asyncClick = () => {
  
        setState({async:true, concepts:false})
      }


    return (
            <div className={"conceptsWrapper"}>
                {current.concepts === true && <div className={"conceptsCanvas"}>
                    <h1 className={"conceptsTitle"}>Concepts {props.goBack}</h1> 
                    <div className={"conceptsBox"} onClick={asyncClick}>
                        <div className={"conceptsBoxImg"}>
                        <img src="javascript.png" height="90%" width ="90%" alt="async"></img>
                        </div>
                        <div className={"conceptsBoxTitle"}>Async Javascript</div>
                    </div>
                </div>}
                {current.async === true && <Async />}
            </div>
    )
}

export default Concepts;