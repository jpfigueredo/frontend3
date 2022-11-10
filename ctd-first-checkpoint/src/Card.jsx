//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import React from "react";

export function Card(props) {
  const cardStyle = {
    backgroundColor: props.values.hex,
    borderColor: props.values.hex,
  };

  return (
    <div>
      <div className="Card" style={cardStyle}>
        <div className="cardId">{props.values.id}</div>
        <div className="Title">{props.values.color}</div>
        <div className="Conteudo"> {props.values.hex} </div>
      </div>
    </div>
  );
}
