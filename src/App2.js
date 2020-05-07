import React, { Component } from 'react';
import Person from './person.component';


class App2 extends Component {

    constructor(){
        super();
        this.state = {
            count:0,
            person:{name:'dzg', age:22},
            showPerson:false
        };
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate!', nextProps);
    //     return nextProps.text !== this.props.text;
    //   }
    
    //      { showPerson ? <Person person={person}></Person> :null }
    // top inline object ,that means every time when  render refresh,there are a brand new 
    //  Person object  will past to Person as props;
    /**
     * In Javascript functions and arrays are also objects, so if we inline functions or if we inline
     * arrays we have to remember to be careful there as well.
     */
    render() {
        const {count,person, showPerson } = this.state;
        return (
            <div>
            { showPerson ? <Person person={{name:'dzg', age:22}}></Person> :null }
           
                Button Count:{count}
                <button onClick={()=> this.setState({count: count+1})}>Increase Count</button>

                Show Person:{showPerson}
                <button onClick={()=> this.setState({showPerson: true})}>Show Person</button>
            </div>
        )
    }
}

export default  App2;