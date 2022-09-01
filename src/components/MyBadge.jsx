// 02 - Crea un componente chiamato MyBadge che riceva sia una stringa di testo che un colore come prop.
// Questo componente dovrà renderizzare un componente Badge con quelle proprietà.

import { Badge } from "react-bootstrap";

const MyBadge = (props) => <Badge variant={props.color}>{props.text}</Badge>;

export default MyBadge;
