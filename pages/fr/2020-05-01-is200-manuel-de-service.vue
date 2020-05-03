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
      Le manuel de service est indispensable pour entretenir la voiture.
      Seulement voilà, il est compliqué à trouver. Surtout pour une voiture de
      20 ans.
    </p>
    <p>
      J'ai cependant finalement réussi à mettre la main dessus&nbsp;!
    </p>
    <p>
      J'ai dû recomposer les fichiers PDF, car les pages étaient étalées dans
      pleins de fichiers différents, et mélangées avec différents manuels pour
      l'IS300 et la version Sportcross de la voiture. C'était assez galère, mais
      mes heures dans le train ont au moins été utilisées à bon escient.
    </p>
    <p><br /></p>
    <p>
      Donc si vous souhaitez ma version complète et recomposée du manuel de
      service pour l'IS200, je vous propose de m'envoyer un mail à
      <hiddenmail></hiddenmail>. Je vous répondrai avec un lien de
      téléchargement au plus vite
      <strong>(~260Mo compressé, ~300Mo décompressé, 2'078 éléments)</strong>.
    </p>
    <p><br /></p>
    <p>
      Je ne le rends pas directement disponible sur le blog, car je crois bien
      que ce n'est pas très légal.
    </p>
    <p><br /></p>
    <p>
      C'était un article très court, mais pleins de trucs intéressants arrivent
      bientôt&nbsp;! Notamment un guide très complet (je l'espère) sur le
      changement de la courroie de distribution de l'IS200.
    </p>
    <p>
      Vous pouvez maintenant vous abonner au blog par email en utilisant le
      bouton email rose au fond à gauche du site. J'utiliserai votre email
      uniquement pour vous envoyer une notification lors d'un nouvel article,
      pas d'autres conneries.
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
      article: articles.fr['2020-05-01-is200-manuel-de-service'],
    }
  },
}
</script>
