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
    <p>
      The service manual is an essential tool to service your car. But the
      problem is that it can be hard to find. Especially for a 20 years old car.
    </p>
    <p>But I finally got my hands on it!</p>
    <p>
      I had to recreate the PDF files, because the pages were scattered in a
      number of files, mixed in with a few pages about the IS300 and the
      Sportcross version of the car. It wasn't an easy task, but the hours spent
      in the train were at least used for good.
    </p>
    <p>
      So if you want my complete and recreated version of the IS200's service
      manual, I invite you to send me an email at
      <hiddenmail></hiddenmail>. I'll answer with a download link as soon as
      possible
      <strong>(~260MB compressed, ~300MB decompressed, 2'078 elements)</strong>.
    </p>
    <p><br /></p>
    <p>
      I do not simply upload it to the blog because I don't think that would be
      very legal.
    </p>
    <p><br /></p>
    <p>
      This was a very short article, but fear not. Many interesting things are
      coming ! Including a rather complete guide (I hope) on how to do the
      timing belt on the IS200.
    </p>
    <p>
      You can now subscribe to the blog by email using the pink mail button at
      the bottom left of the screen. I will only use your email to send you a
      notification when I post a new article, no other bullshit.
    </p>
    <p><br /></p>
    <p>Bidouille</p>
  </article-shell>
</template>
<script>
import ArticleShell from '../../components/articleshell'
import Hiddenmail from '../../components/hiddenmail'
import articles from '../../assets/articles'

export default {
  components: { ArticleShell, Hiddenmail },
  data() {
    return {
      article: articles.en['2020-05-01-is200-service-manual'],
    }
  },
}
</script>
