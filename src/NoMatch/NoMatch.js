import React from 'react';

class NoMatch extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>Path doesn't exist in our application</div>
        );
    }
}

export default NoMatch;