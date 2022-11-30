export function InstagramPosts(props) {
  console.log(props.item);
  return (
    <div className="post">
      <header>
        {/* Utilização da Interpolação para exibirmos a Imagem do Autor do Post */}
        <img src={props.item.author.picture} />
        <div>
          {/* Utilização da Interpolação para exibirmos o Nome do Autor do Post */}
          <h1>{props.item.author.name}</h1>
          {/* Utilização da Interpolação para exibirmos a Localização do Post */}
          <h2>{props.item.location}</h2>
        </div>
      </header>
      <main>
        {/* Utilização da Interpolação para exibirmos a Imagem do Post */}
        <img src={props.item.media} />
        <section className="post-infos">
          {/* Utilização da Interpolação para exibirmos a Quantidade de Likes do Post */}
          <span className="likeds">Curtido por {props.item.likes} pessoas</span>
          {/* Utilização da Interpolação para exibirmos a Descrição do Post */}
          <p className="description">{props.item.description}</p>
        </section>
        <ul className="comments">
          {
            // Map realizado no Array de Comentários que existe dentro de cada Post, com ele iremos replicar a Interface abaixo quantas vezes for necessário até exibirmos todos os comentários
            props.item.comments.map(
              // Comment é o nome da Variavel Temporária que irá receber cada item do nosso Array de Comentários, iremos utiliza-la para obter o conteúdo do Comentário em questão e exibi-lo na interface logo abaixo :)
              (comment) => {
                return (
                  <li>
                    {/* Utilização da Interpolação para exibirmos o Nome do Autor do Comentário */}
                    <h1>{comment.author.name}</h1>
                    {/* Utilização da Interpolação para exibirmos o Comentário */}
                    <p>{comment.text}</p>
                  </li>
                );
              }
            )
          }
        </ul>
      </main>
    </div>
  );
}
