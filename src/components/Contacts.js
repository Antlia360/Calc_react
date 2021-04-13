import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    constructor(){
        super();
        this.state={
            contacts: [
                {
                    id:1,
                    name:'John Doe',
                    email:'doe@gmail.com',
                    phone:'555-555-5555'
                },
                {
                    id:2,
                    name:'Naruto Uzumaki',
                    email:'naruto@gmail.com',
                    phone:'934-234-4597',
                },
                {
                    id:3,
                    name:'Sakura',
                    email:'sakura@gmail.com',
                    phone:'666-666-6666',
                }
            ]
        };
    }
    render() {
        const {contacts}=this.state;

        return (
                <React.Fragment>
                    {contacts.map(contact => (
                    <Contact
                    key={contact.id}
                    contact={contact} />
                    ))}
                    
                </React.Fragment>
            );
 }
}

export default Contacts;
