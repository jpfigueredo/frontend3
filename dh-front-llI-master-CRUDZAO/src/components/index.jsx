export function QuintaAulaItem(props) {
  return (
    <li key={props.item.id}>
      <img src={props.item.image} />
      <h1>{props.item.title}</h1>
      <p>{props.item.text}</p>
    </li>
  );
}
