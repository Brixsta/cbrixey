import React from 'react';

class Concepts extends React.Component {
    

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className={"conceptsWrapper"}>
                <div className={"conceptsCanvas"}>
                    <h1 className={"conceptsTitle"}>Concepts</h1> 
                    <div className={"conceptsBox"} onClick={()=>{this.props.changePage('AsyncJS')}}>
                        <div className={"conceptsBoxImg"}>
                        <img src="javascript.png" height="90%" width ="90%" alt='AsyncJS'></img>
                        </div>
                        <div className={"conceptsBoxTitle"}>Async Javascript</div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Concepts;