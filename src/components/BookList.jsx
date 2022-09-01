// 04 - Crea un componente BookList. 
// Questo componente riceverà dalle prop una lista di libri da visualizzare 
// utilizzando il componente SingleBook.

import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";


class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search</Form.Label>

              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* // 05 - Crea una funzione filterBookList. Scrivendo una stringa di
        ricerca dentro un campo input, il componente BookList dovrà renderizzare
        solo i libri contenente la stringa cercata come titolo del libro 
        
        (Suggerimento: salva la stringa di ricerca dentro allo stato del
        componente BookList e filtra i libri di conseguenza). */}
        <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )

            // 06 - Converti il tuo componente SingleBook in una classe,
            // e crea il suo stato contenente una proprietà booleana selected.
            .map((b) => (
              <Col xs={3} key={b.asin}>
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}


export default BookList;












// 07
// Cliccare sul SingleBook dovrà fare il toggle della proprietà selected. 
// Se la proprietà selected sarà true, il SingleBook dovrà ricevere dello stile 
// che rifletta il cambio di stato, visivamente.





