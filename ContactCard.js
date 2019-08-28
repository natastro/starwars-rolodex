import React from "react";
import ContactInfo from "./ContactInfo";

class ContactCard extends React.Component {
    render() {
        const people = this.props.people;
        return (
            <div className="">
                {
                    people.map((p) => {
                        console.log(p)
                        return(
                            <div key={p.url}>
                                <h1 className="char">{p.name}</h1>
                                <ContactInfo contactInfo={p} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


export default ContactCard;