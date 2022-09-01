// 01 - Crea un componente chiamato WarningSign che RICEVA una stringa dalle prop.
// Questo testo dovrà essere visualizzato all’interno di un componente Alert di react-bootstrap di tipo danger.

// Risorsa utile
// https://en.reactjs.org/docs/forms.html

import { Alert } from "react-bootstrap";

const WarningSign = (props) => <Alert variant="danger">{props.text}</Alert>;

export default WarningSign;

