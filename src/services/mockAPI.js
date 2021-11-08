const podcastsMock = [
    {
        nome: 'ImaginaJuntas',
        id: 1,
        autor: [
            'Jeska Grecco', 'Carol Rocha', 'Gus Lanzetta'
        ],
        descricao: 'Imagina Juntas é um podcast sobre a vida dos millennials, saúde mental, relacionamentos e o famoso se virar pra pagar os boletos, além de vários formatos de trabalho conciliando o criativo ao adaptável.',
        playlist : 'https://open.spotify.com/embed/playlist/3AldtkaQ949zTKy8y8zCpA?utm_source=generator%22',
        produtora: 'Half Deaf',
        categorias: [
            'Social', 'Finanças'
        ],
        imgSrc: 'https://halfdeaf.com.br/img/podcasts/2929952/0f9dd58153ea36939656e391b41adaa4-original.jpg',
    },
    {
        nome: 'Diário de bordo',
        id: 2,
        autor: [
            'Jeska Grecco', 'Leandro Neko'
        ],
        descricao: 'Um podcast que fala sobre o cotidiano de maneira inusitada e constrói um verdadeiro diário de bordo para a vida moderna',
        playlist : 'https://open.spotify.com/embed/playlist/7DAA0FTy38WyrUcTNepxVa?utm_source=generator',
        produtora: 'Half Deaf',
        categorias: [
            'Social'
        ],
        imgSrc: 'https://i.scdn.co/image/ab6765630000ba8afef8815f0666c6c0a51ff34f',
    },
    {
        nome: 'Boletos Pagos',
        id: 3,
        autor: [
            'Nath Finanças'
        ],
        descricao: 'Há quem #precisemesmo gastar e quem #falhecomnath na hora de acertar as contas, mas a prioridade é manter os boletos em dia. Por isso, todas as terças, Nath e um convidado conversam sobre economia e educação financeira. Boletos Pagos com Nath Finanças é um original Spotify.',
        playlist : 'https://open.spotify.com/embed/playlist/6DKN6sCeTUB3CaJ50tcfI4?utm_source=generator%22',
        produtora: 'Spotify Studios',
        categorias: [
            'Social', 'Finanças'
        ],
        imgSrc: 'https://i.scdn.co/image/ab6765630000ba8a2cabc76f538cd75abac2fba7',
    },
    {
        nome: 'Os agilistas',
        id: 4,
        autor: [
            'Marcelo Szuster', 'Vinícius Paiva'
        ],
        descricao: 'O maior podcast de agilidade do Brasil! O mindset ágil é fundamental para a transformação digital, nossos programas vão esclarecer os grandes desafios deste processo e como superá-los. Episódio novo toda quinta!',
        playlist : 'https://open.spotify.com/embed/playlist/46iDFUH9VGCp3dhqmbC7L2?utm_source=generator%22',
        produtora: 'dti digital',
        categorias: [
            'Técnico'
        ],
        imgSrc: 'https://i.scdn.co/image/0de56bfd913792fc377cee9b66e38eb65e457dc0',
    },
    {
        nome: 'HubCast',
        id: 5,
        autor: [
            'Sara Iglesias'
        ],
        descricao: 'O canal "Hubcast, nosso encontro de impacto traz episódios sobre empreendedorismo, sustentabilidade, impacto social e ambiental. Também convida agentes do ecossistema para participar e abordar temas relevantes da área. A organização é do Impact Hub Brasil, que faz parte de uma organização global de espaços colaborativos, comunidades empreendedoras e programas que inspiram, conectam e escalam negócios e impacto.',
        playlist : 'https://open.spotify.com/embed/show/7dWIfgmkp8lDezYzDpTqqz?utm_source=generator',
        produtora: 'Impact Hub Brasil',
        categorias: [
            'Social', 'Autorais'
        ],
        imgSrc: 'https://i.scdn.co/image/ab67656300005f1f634837996a24ca65308d2eb8',
    },
    {
        nome: 'Entre Chaves',
        id: 6,
        autor: [
            'Vanessa Brunt'
        ],
        descricao: 'O Podcast Entre Chaves é mais um podcast que nasce dentro da dti digital, com o foco em desenvolvimento de software.',
        playlist : 'https://open.spotify.com/embed-podcast/show/1ub9YZKamdMKdKbLia4YrX?utm_source=generator%22',
        produtora: 'dti digital',
        categorias: [
            'Técnico'
        ],
        imgSrc: 'https://i.scdn.co/image/65bc3b7decfe90b3571e5647a67bb4b6e10447fc',
    },
    {
        nome: 'Financast',
        id: 7,
        autor: [
            'Rafael Morán'
        ],
        descricao: 'Podcast de educação financeira e investimentos. Hoje, em hiato criativo.',
        playlist : 'https://open.spotify.com/embed/playlist/4rFNiJrb0Sd2lfa02kFRSL?utm_source=generator%22',
        produtora: '@financastpod',
        categorias: [
            'Finanças'
        ],
        imgSrc: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/53/6f/02/536f02a6-4715-f11c-d286-fcceb6022631/mza_2421865236345298447.jpg/1200x1200bb.jpg',
    },
    {
        nome: 'Nerdcash',
        id: 8,
        autor: [
            'Alexandre Ottoni'
        ],
        descricao: 'O mundo vira piada no Jovem Nerd',
        playlist : 'https://open.spotify.com/embed/playlist/2itiUrKUkzROR21CY7hQ3G?utm_source=generator',
        produtora: 'Estúdio 42',
        categorias: [
            'Social'
        ],
        imgSrc: 'https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg',
    },
    {
        nome: 'Freela Podcast',
        id: 9,
        autor: [
            'Kelson Douglas'
        ],
        descricao: 'O Freela Podcast aborda assuntos da vida cotidiana de pessoas que atuam na área do entretenimento assim como discute e propõe ideias de melhorias para a classe do backstage, além de tratar de assuntos técnicos e que fazem parte do nosso dia a dia como profissionais de eventos.',
        playlist : 'https://open.spotify.com/embed/playlist/7btaFwVBZMzfFyCktGExDO?utm_source=generator%22',
        produtora: 'Freela Podcast',
        categorias: [
            'Técnico'
        ],
        imgSrc: 'https://i.scdn.co/image/dd09203b24d4656792d833323ca4835abce6bee8',
    },
    {
        nome: 'Padawans Podcast',
        id: 10,
        autor: [
            'Sara Iglesias'
        ],
        descricao: '',
        playlist : 'https://open.spotify.com/embed/playlist/0ljqOPpie1I3i7hKgYifaN?utm_source=generator%22',
        produtora: 'Sara Produções',
        categorias: [
            'Autorais', 
        ],
        imgSrc: 'https://bandodequadrados.com/img/imagem_noticia/paciencia-voce-deve-ter-meu-jovem-padawan-20201008142148.jpg',
    },
];

export const categoriesMock = ['Finanças', 'Social', 'Técnico', 'Autorais'];

export default podcastsMock;

