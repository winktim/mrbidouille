const articles = {
  en: {
    '2020-04-01-introduction': {
      date: '2020-04-01',
      tags: ['en', 'opinions'],
      reactions: 0,
      img: '/images/articles/2020-04-01-introduction/is200.jpg',
      title: 'Who are you and what am I doing here ?',
      summary:
        'This article has for goal to introduce who "Mr. Bidouille" is, and why you might want to bookmark this blog...',
      link: '/en/2020-04-01-introduction',
    },
  },
  fr: {
    '2020-04-01-introduction': {
      date: '2020-04-01',
      tags: ['fr', 'opinions'],
      reactions: 0,
      img: '/images/articles/2020-04-01-introduction/is200.jpg',
      title: "Qui êtes-vous et qu'est-ce que je fais ici ?",
      summary:
        'Cet article a pour but de présenter qui est "Mr. Bidouille", et pourquoi vous voudriez garder un oeil sur ce blog...',
      link: '/fr/2020-04-01-introduction',
    },
  },
  list: {
    /**
     * @type {{date: string, tags: string[], reactions: number, img: string, title: string, summary: string, link: string}[]}
     */
    en: [],
    /**
     * @type {{date: string, tags: string[], reactions: number, img: string, title: string, summary: string, link: string}[]}
     */
    fr: [],
  },
}

articles.list.en = Object.values(articles.en)
articles.list.fr = Object.values(articles.fr)

export default articles
