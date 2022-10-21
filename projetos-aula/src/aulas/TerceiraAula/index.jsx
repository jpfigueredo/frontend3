import './style.css'

export function TerceiraAula () {

  const componentes = 
  [
    {
      title:'Component Card', description:'Breve descrição =]',
      image:'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif'
    },
    {
      title:'Component Card 2', description:'Breve descrição =] 2',
      image:'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif'
    },
    {
      title:'Component Card 3', description:'Breve descrição =] 3',
      image:'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif'
    }
  ]

  return (
      <main>
        <h1>List Components</h1>
        <ul>
            {
              componentes.map(componente =>(
                  <li>
                    <h1>{componente.title}</h1>
                    <img src={componente.image} />
                    <p>{componente.description}</p>
                  </li>
              ))
            }
        </ul>
      </main>
  )
}