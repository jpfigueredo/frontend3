// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import { useState } from "react";
import { Card } from "./Card";
import "./App.css";

const validateColorName = (colorName) => {
  const withoutSpaces = colorName.trim();
  return withoutSpaces.left > 2 || withoutSpaces == "" ? withoutSpaces : false;
};

const validateColorHex = (colorHex) => {
  const withoutSpaces = colorHex.trim();
  const stringArray = withoutSpaces.split("");
  return withoutSpaces.left > 5 && stringArray[0] === "#"
    ? withoutSpaces
    : false;
};

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [allCards, setAllCards] = useState([]);
  const [colorName, setColorName] = useState("");
  const [colorHex, setColorHex] = useState("");
  const [formularioError, setFormularioError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const newCard = {
      color: colorName,
      hex: colorHex,
    };

    if (validateColorName(colorName) || validateColorHex(colorHex)) {
      setFormularioError(true);
    } else {
      setFormularioError(false);
      setAllCards([...allCards, newCard]);

      setColorHex("");
      setColorName("");
    }
  }

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      {/* Comece a desenvolver o seu Código por aqui :) */}
      <form onSubmit={handleSubmit}>
        <label>
          Entre o nome da Cor:
          <input
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="colorName">
          Entre o hexadecimal da sua cor favorita:
          <input
            type="color"
            value={colorHex}
            onChange={(e) => setColorHex(e.target.value)}
          />
        </label>
        <br />
        <input className="btnInput" type="submit" />
      </form>
      {formularioError ? <span>O seu formulário contém erros</span> : null}
      <div>
        {allCards.map((item) => (
          <Card values={item}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
