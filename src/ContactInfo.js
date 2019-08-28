import React from 'react';

class ContactInfo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            expanded: false,
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open(){
        this.setState({ expanded: !this.state.expanded })
    }

    close(){
        this.setState({ expanded: !this.state.expanded})
    }
    render() {
        const info = this.props.contactInfo;
        if(!this.state.expanded){
            return <p className="btn btn-warning" onClick={this.open}>Show info</p>
        }

        return(
            <div className="user-details">
                <p className="btn btn-danger" onClick={this.close}>Hide info</p>
                <ul>
                    <li><h2>Gender: {info.gender}</h2></li>
                    <li><h2>Birth date: {info.birth_year}</h2></li>
                    <li><h2>Hair Color: {info.hair_color}</h2></li>
                </ul>
            </div>
        )
    }
}

export default ContactInfo;