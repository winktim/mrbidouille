<template>
  <article-shell
    :date="article.date"
    :tags="article.tags"
    :img="article.img"
    :title="article.title"
    :summary="article.summary"
    :link="article.link"
    :hyvorId="article.hyvorId"
  >
    <p>This is the content of the article</p>
  </article-shell>
</template>
<script>
import ArticleShell from '../../components/articleshell'
import Hiddenmail from '../../components/hiddenmail'
import ClickableImage from '../../components/clickable-image'
import articles from '../../assets/articles'

export default {
  components: { ArticleShell, Hiddenmail, ClickableImage },
  data() {
    return {
      article: articles.en['article-name-here'],
    }
  },
}
</script>
