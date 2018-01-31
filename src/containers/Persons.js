import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

//add store-
//create reducer
//create dispatcher
//connect dispatchers
class Persons extends Component {

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.addPerson(newPerson);
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.ctr.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.deletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (newPerson) => dispatch({type: actionTypes.PERSONADDED, person: newPerson}),
        deletePerson: (id) => dispatch({type: actionTypes.PERSONDELETE, id: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);