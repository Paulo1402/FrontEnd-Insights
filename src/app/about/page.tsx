export const metadata = {
  title: 'Sobre | Front-end Insights',
  description:
    'A Front-End Insights é uma newsletter semanal dedicada a fornecer conhecimentos valiosos sobre o mundo do desenvolvimento front-end.',
  openGraph: {
    title: 'Sobre | Front-end Insights',
    description:
      'A Front-End Insights é uma newsletter semanal dedicada a fornecer conhecimentos valiosos sobre o mundo do desenvolvimento front-end.'
  }
}

export default function About() {
  const h1 = 'mt-10 mb-6 text-2xl font-bold'
  const h2 = 'mt-8 mb-4 text-xl font-bold'
  const p = 'mt-4 mb-2'

  return (
    <main>
      <h1 className={h1}>Sobre a Newsletter &quot;Front-End Insights&quot;</h1>

      <h2 className={h2}>O que é a Front-End Insights?</h2>
      <p className={p}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        quos atque officiis sunt animi magnam corporis eius sint. Optio illo
        voluptates voluptas distinctio a iusto at porro recusandae praesentium
        assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aperiam cumque distinctio aspernatur laudantium ut repellat, hic quaerat
        illum et explicabo rem dolor doloribus autem, veniam officia, facere est
        recusandae. Laudantium?
      </p>

      <h2 className={h2}>Por que assinar a Front-End Insights?</h2>
      <ol className="list-decimal pl-4 [&>li]:mt-2">
        <li>
          <strong>Conhecimento atualizado:</strong> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Id atque debitis eligendi ipsum vel ipsa
          quibusdam quisquam dolorem aut amet. Quo accusamus iure rem, libero
          beatae ducimus eius laudantium temporibus?
        </li>
        <li>
          <strong>Dicas e truques exclusivos:</strong> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Esse ex alias rem unde veritatis
          totam labore ullam non, voluptatum eaque, quos itaque blanditiis eos!
          Voluptatibus sit ducimus quam commodi dolorem.
        </li>
        <li>
          <strong>Recursos selecionados:</strong> Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Error, ducimus dolore. Quia blanditiis
          debitis nihil. Excepturi architecto illum optio natus commodi
          molestiae temporibus eius aliquam voluptatum? Maxime fugiat vitae
          sequi?
        </li>
      </ol>

      <h2 className={h2}>Quem está por trás da Front-End Insights?</h2>
      <p className={p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sed
        odio doloribus eius culpa minus ducimus magnam dicta. Voluptates nemo
        facere debitis sit quidem animi sapiente maxime inventore et est?
      </p>

      <p className={p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        aspernatur expedita quae nesciunt ab beatae ullam voluptatibus eos nemo
        soluta, voluptatem quasi, officiis amet maiores tenetur assumenda?
        Dolores, molestiae similique.
      </p>
    </main>
  )
}
