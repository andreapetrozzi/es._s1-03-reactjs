//03 - Crea un componente SingleBook e questa volta dovrà essere un componente creato a funzione. 
// Il componente riceve un oggetto corrispondente ad un singolo libro come prop, e visualizzerà la sua copertina e il titolo del libro.
// Usa le Card di react-bootstrap per renderizzare il libro (l’oggetto del libro può esser letto da un file .json  che hai ricevuto ieri).

// Cliccare sul SingleBook dovrà fare il toggle della proprietà selected. 
// Se la proprietà selected sarà true, il SingleBook dovrà ricevere dello stile che rifletta il cambio di stato, visivamente.

import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "3px solid red" : "none" }} >
        <Card.Img variant="top" src={this.props.book.img} />

        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
        </Card.Body>

      </Card>
    );
  }
}

export default SingleBook;



