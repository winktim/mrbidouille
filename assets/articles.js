// hyvorId = 1 is for dev

const articles = {
  en: {
    '2020-04-01-introduction': {
      date: '2020-04-01',
      tags: ['en', 'opinions'],
      img: '/images/articles/2020-04-01-introduction/is200.jpg',
      title: 'Who are you and what am I doing here',
      summary:
        'This article has for goal to introduce who "Mr. Bidouille" is, and why you might want to bookmark this blog...',
      link: '/en/2020-04-01-introduction',
      hyvorId: 2,
    },
    '2020-05-01-is200-service-manual': {
      date: '2020-05-01',
      tags: ['en', 'is200', 'service'],
      img: '/images/articles/2020-05-01-is200-service-manual/manual.jpg',
      title: 'The Lexus IS200’s service manual',
      summary:
        'The service manual is an essential tool to service your car. But the problem is that it can be hard to find. But I finally got my hands on it....',
      link: '/en/2020-05-01-is200-service-manual',
      hyvorId: 3,
    },
    '2020-05-04-is200-timing-belt': {
      date: '2020-05-04',
      tags: ['en', 'is200', 'service', 'timing belt'],
      img: '/images/articles/2020-05-04-is200-timing-belt/timing.jpg',
      title: 'Changing the timing belt on the IS200',
      summary:
        'Complete guide on how to change the timing belt and the auxiliaries on the Lexus IS200 in your driveway on a budget...',
      link: '/en/2020-05-04-is200-timing-belt',
      hyvorId: 4,
    },
  },
  fr: {
    '2020-04-01-introduction': {
      date: '2020-04-01',
      tags: ['fr', 'opinions'],
      img: '/images/articles/2020-04-01-introduction/is200.jpg',
      title: "Qui êtes-vous et qu'est-ce que je fais ici",
      summary:
        'Cet article a pour but de présenter qui est "Mr. Bidouille", et pourquoi vous voudriez garder un oeil sur ce blog...',
      link: '/fr/2020-04-01-introduction',
      hyvorId: 2,
    },
    '2020-05-01-is200-manuel-de-service': {
      date: '2020-05-01',
      tags: ['fr', 'is200', 'service'],
      img: '/images/articles/2020-05-01-is200-service-manual/manual.jpg',
      title: 'Manuel de service de la Lexus IS200',
      summary:
        'Le manuel de service est indispensable pour entretenir la voiture. Seulement voilà, il est compliqué à trouver. J’ai cependant finalement réussi à mettre la main dessus...',
      link: '/fr/2020-05-01-is200-manuel-de-service',
      hyvorId: 3,
    },
    '2020-05-04-is200-courroie-de-distribution': {
      date: '2020-05-04',
      tags: ['fr', 'is200', 'service', 'distribution'],
      img: '/images/articles/2020-05-04-is200-timing-belt/timing.jpg',
      title: "Service de la courroie de distribution sur l'IS200",
      summary:
        'Guide complet pour changer la courroie de distribution et les auxiliaires sur la Lexus IS200 sur son parking à moindre coûts...',
      link: '/fr/2020-05-04-is200-courroie-de-distribution',
      hyvorId: 4,
    },
  },
  list: {
    /**
     * @type {{date: string, tags: string[], img: string, title: string, summary: string, link: string, hyvorId: number}[]}
     */
    en: [],
    /**
     * @type {{date: string, tags: string[], img: string, title: string, summary: string, link: string, hyvorId: number}[]}
     */
    fr: [],
  },
}

articles.list.en = Object.values(articles.en)
articles.list.fr = Object.values(articles.fr)

export default articles
