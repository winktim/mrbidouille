/**
 * Scroll an element to it's top
 * @param {HTMLElement} el
 */
export function scrollToTop(el) {
  el.scrollTop = 0
}

/**
 * Filter the given articles for the ones that are relevent to the search string
 * @param {{date: string, tags: string[], reactions: number, img: string, title: string, summary: string, link: string}[]} articles
 * @param {string} search
 * @returns {{date: string, tags: string[], reactions: number, img: string, title: string, summary: string, link: string}[]} filtered articles
 */
export function filterArticles(articles, search) {
  if (search === '') {
    return articles
  }

  const s = search.toLowerCase()
  const elements = s.split(' ')

  const exactMatches = []
  const otherMatches = []

  articles.forEach(article => {
    const lookIn = [
      article.title.toLowerCase(),
      article.summary.toLowerCase(),
      article.date,
      article.tags.join(' '),
    ].join(' ')

    // look for an exact match first
    if (lookIn.includes(s)) {
      return exactMatches.push(article)
    }

    // look for every element appearing at least once
    for (const e of elements) {
      if (!lookIn.includes(e)) {
        return false
      }
    }
    return otherMatches.push(article)
  })

  return exactMatches.concat(otherMatches)
}
