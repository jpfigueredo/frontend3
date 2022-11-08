import logo from ".././logo.svg";

export function Cards() {
  // const title = "Teste";
  const components = [
    { name: "Component Card", description: 'O "usuário"', image: "" },
    { name: "Component Card 2", description: "O usuário", image: "" },
    { name: "Component Card 3", description: 'O "usuário"', image: "" },
    { name: "Component Card 4", description: 'O "usuário"', image: "" },
    { name: "Component Card 5", description: 'O "usuário"', image: "" },
  ];

  return (
    <div>
      <h1>Lista de componentes encontrados em um sistema</h1>
      <ul>
        {components.map((component) => (
          <li>
            <img src={component.image} alt="" />
            <h1>{component.name}</h1>
            <p>{component.description}</p>
          </li>
        ))}
      </ul>
      <ul></ul>
    </div>
  );
}
