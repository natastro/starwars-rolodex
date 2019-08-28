import React from "react";
import ContactCard from "./ContactCard";
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
        }

        this.getPeople = this.getPeople.bind(this);
    }

    getPeople() {
        return axios.get("https://swapi.co/api/people")
            .then((response) => {
                console.log(response.data.results);
                this.setState( { people: response.data.results } )
            })
    }

    componentDidMount() {
        this.getPeople()
    }

    render() {
        const {people} = this.state;
        return (
            <div className="App">
                <ContactCard people={people}/>
            </div>
        );
    }
}


export default App;
