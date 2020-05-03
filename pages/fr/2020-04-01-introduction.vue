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
      Ou bien est-ce l'inverse&nbsp;? Je ne sais plus. Mais le développement de
      ce blog est enfin fini et je peux commencer à écrire des choses. Donc pour
      commencer, quelques informations à propos de moi, comme ça on se sentira
      plus à l'aise pour les autres articles.
    </p>
    <p><br /></p>
    <p>
      Je n'ai toujours pas décidé comment j'allais adresser l'audience.
      «&nbsp;Toi&nbsp;», ou «&nbsp;vous&nbsp;»&nbsp;? En tout cas, si vous lisez
      les articles en anglais, il n'y aura pas ce problème. Pas de
      «&nbsp;toi&nbsp;» en anglais&nbsp;! Je pense que «&nbsp;vous&nbsp;» me
      viendra plus naturellement en français.
    </p>
    <p><br /></p>
    <p>
      Car oui, si vous ne l'avez pas encore remarqué ce blog est plus ou moins
      bilingue. C'est-à-dire que l'interface est en anglais, car c'est une
      langue que je considère internationale, et les articles sont dans les deux
      langues que je connais, c'est-à-dire le français et l'anglais.
    </p>
    <p>
      Et quand je dis «&nbsp;connais&nbsp;», ne vous méprenez pas&nbsp;! Je ne
      prétends pas savoir écrire l'une ou l'autre de ces langues&nbsp;! Je ferai
      probablement pleins de fautes plus ou moins marrantes.
    </p>
    <p>
      Car oui, je suis suisse. C'est ça mon excuse&nbsp;? Un peu quand
      même&nbsp;! On parle français comme c'est qu'on veut bien, ou bien
      <i
        >(là vous vous demandez ce que j'ai écrit dans
        <nuxt-link to="/en/2020-04-01-introduction">
          la version anglaise</nuxt-link
        >
        de cet article)</i
      >.
    </p>
    <p><br /></p>
    <p>
      Ah oui, à propos de moi, du coup. Je suis un suisse de 20 ans passionné
      par la technologie. Plus récemment, c'est-à-dire depuis que j'ai eu mon
      permis il y a bientôt 2 ans (et oui frère, directement à mes 18 ans, toi
      même tu sais). Je sais que je viens de mettre fin à une phrase alors que
      je n'avais pas fini de m'exprimer, mais c'est pour faire une giga
      parenthèse.
    </p>
    <p><br /></p>
    <p>
      Je m'exprime (et m'exprimerai) toujours de manière très légère, limite
      second degré, avec des références démodées et stupides, ou des parodies de
      façons de parler. C'est juste comme ça que j'aime parler. Il faudra vous y
      faire. Peut-être même que vous apprécierez me lire (je l'espère) (j'en
      doute). Il paraît aussi que je fais plein de petites phrases au lieu de
      lier mes mots ensemble. En relisant ce paragraphe je crois que c'est assez
      véridique. Mais ça veut dire que je vais droit à l'essentiel (lol).
    </p>
    <p><br /></p>
    <p>
      Ok donc maintenant que ma manière d'écrire a été décrite, je peux
      continuer mes écrits. Depuis bientôt 2 ans, je m'intéresse aux voitures.
      La moitié du déclic a été la série japonaise Initial D et l'autre moitié
      le fait d'avoir mon permis et une petite voiture «&nbsp;rien qu'à
      moi&nbsp;» (pas à moi en fait).
    </p>
    <p>
      Cette petite voiture, justement, était une Audi A3 de 1997. Je ne saurais
      pas dire grand-chose de ses caractéristiques si ce n'est qu'elle était
      ultra rabaissée, car lorsque je la conduisais, je ne connaissais
      absolument rien en mécanique (oui, depuis, je me suis renseigné dessus, et
      on va dire que c'est une bonne première voiture).
    </p>
    <clickable-image
      src="/images/articles/2020-04-01-introduction/audi.jpg"
      alt="Photo de l'Audi A3"
      description="L'une des rares photo de l'Audi A3. RIP (oui elle est partie à la casse)"
    ></clickable-image>
    <p>
      Je me suis tout d'abord intéressé à la conduite automobile. Puis,
      (ironiquement, comme Takumi dans Initial D) j'ai remarqué que connaître ce
      qu'il se passait sous le capot était une bonne idée pour aller de l'avant
      dans ce domaine.
    </p>
    <p>
      J'ai bien vite remarqué que l'Audi était une traction (duuh), et du coup,
      j'ai bien sûr voulu une propulsion. Les drifts ça avait l'air quand même
      cool. Après avoir (un peu) saigné l'Audi, qui en fait appartenait à mes
      parents (haha), j'ai décidé d'acheter ma propre voiture.
    </p>
    <p><br /></p>
    <p>
      J'ai mis quelques mois et j'ai décidé d'acquérir une Lexus IS200 de 2000.
    </p>
    <p>
      Cette voiture est incroyable. On en trouve d'occasion en Suisse en très
      bon état pour entre 1'000 et 5'000 francs suisses, et elle avait tous mes
      critères&nbsp;:
    </p>
    <ul>
      <li>Propulsion</li>
      <li>Japonaise</li>
      <li>Années 90 (design de 1998)</li>
      <li>Au moins 4 places (elle en a 5)</li>
    </ul>

    <p>
      C'est une voiture incroyable, et vous la découvrirez avec moi sur ce blog.
      Car oui, même si j'essaie de la connaître par cœur, il y a encore beaucoup
      à apprendre.
    </p>
    <clickable-image
      src="/images/articles/2020-04-01-introduction/is200.jpg"
      alt="Photo de la Lexus IS200"
      description="La Lexus aux abords de son habitat naturel: le Touge Suisse"
    ></clickable-image>
    <p>
      Je l'ai maintenant depuis quelques mois. J'ai déjà vu pas mal de
      situations avec. Elle a surtout besoin d'une bonne grosse maintenance,
      maintenant. Et j'ai décidé de faire toute la maintenance moi-même, malgré
      mes connaissances limitées. Cela va me forcer à apprendre. Donc j'espère
      que vous me pardonnerez quand je ferai n'importe quoi, et quand je
      n'utiliserai pas le bon jargon technique. Pour tout dire, je connais plus
      de jargon de voiture en anglais qu'en français, car la plupart des
      ressources que j'utilise pour m'instruire sont en anglais.
    </p>
    <p><br /></p>
    <p>
      Donc voilà. Ce blog contiendra mes avantages à faire le service de ma
      voiture, changer des pièces (bien sûr j'ai planifié des mods. J'en
      parlerai dans un futur post), comment je me les procure ici en Suisse,
      etc.
    </p>
    <p>
      Mais aussi, je vais parler de différents projets en rapport avec les jeux
      de simulation de voiture, et autres mods et addons de voiture que je
      compte développer.
    </p>
    <p>
      Je vais aussi vendre des trucs. Alors attention&nbsp;! Pour l'instant pas
      des conneries, je vais juste développer des kits ou autres trucs super
      utiles comme ça pour ma voiture et peut-être d'autres dans le futur. Vous
      en saurez plus dans les mois à venir. Je suis en phase de tests finaux
      pour mon premier kit, qui j'espère sera utile à plein de gens. Teaser, je
      me suis penché sur le problème de la lenteur du papillon électronique de
      l'IS200. Je n'en dirai pas plus pour le moment&nbsp;!
    </p>
    <p><br /></p>
    <p>
      C'est aussi ma première expérience de blogging. J'espère que ça sera
      intéressant.
    </p>
    <p>
      N'hésitez pas à utiliser les commentaires ci-dessous pour me faire des
      retours. Vous pouvez même commenter sans créer de compte&nbsp;!
    </p>
    <p>Sinon, mon adresse email est en fond de page pour un contact privé.</p>
    <p>
      Je créerai aussi une
      <a href="https://www.youtube.com/channel/UC2qxzQXsi8Yyl04uKxnKE6g"
        >chaîne Youtube</a
      >
      sous peu (update: c'est fait), mais elle contiendra principalement des
      clips pour mes articles. Je ne compte pas faire régulièrement des
      «&nbsp;vidéos&nbsp;» à proprement parler.
    </p>
    <p><br /></p>
    <p>
      Sur ces mots, je vais conclure ce premier post. À tout bientôt pour
      plus&nbsp;!
    </p>
    <p><br /></p>
    <p>
      - Bidouille
      <span class="text-sm text-gray-300"
        >(c'est pas un ordre, c'est mon pseudo. Mais quand même, vas-y,
        bidouille&nbsp;!)</span
      >
    </p>
  </article-shell>
</template>
<script>
import ArticleShell from '../../components/articleshell'
import ClickableImage from '../../components/clickable-image'
import articles from '../../assets/articles'

export default {
  components: { ArticleShell, ClickableImage },
  data() {
    return {
      article: articles.fr['2020-04-01-introduction'],
    }
  },
}
</script>
