import React from 'react';

class Person2 extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate!', nextProps);
        return nextProps.person !== this.props.person;
      }

    render(){
        const{person} = this.props;
        console.log('rendering');
        return(
            <div>
                <p>{person.name}</p>
                <p>{person.age}</p>
            </div>
        );
    }
    
};

const Person = ({person})=>{
    console.log('rendering');
    return (
        <div>
             <p>{person.name}</p>
                <p>{person.age}</p>
        </div>
    )
}

export default React.memo(Person);