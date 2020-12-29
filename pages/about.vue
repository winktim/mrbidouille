<template>
  <main>
    <section class="px-6 md:px-16 lg:px-32 xl:px-56 mt-4 mb-12 flex flex-col">
      <h2 class="text-center text-2xl">
        All there is to know about my blog<br class="md:hidden" />
        <span class="text-sm">(not much)</span>
      </h2>
      <div
        class="bg-cover bg-center w-full h-50 my-4 md:my-8 rounded-md"
        style="background-image: url(/images/engine-bay.jpg)"
      ></div>

      <div
        class="w-full flex justify-center items-center border-gray-800 border-solid border-2 rounded-md"
      >
        <i class="material-icons text-2xl p-2 pl-4">ondemand_video</i>
        <span class="p-2 pr-4 text-center">
          If you are looking for my youtube channel,
          <a
            class="nice-link"
            href="https://www.youtube.com/channel/UC2qxzQXsi8Yyl04uKxnKE6g"
            >click here !</a
          >
        </span>
      </div>

      <h3 class="text-xl font-bold mt-4">
        In English first
        <a class="nice-link" href="#fr">(français en dessous)</a>
      </h3>

      <p class="my-2">
        Hey. thanks for checking out my blog !<br />
        I'm from Switzerland and speak both French and English, that is why this
        site's interface is in English and most articles are available in both
        languages.
      </p>
      <p class="my-2">
        This blog is a way for me to record things that I do for fun, and share
        my "experience" (I'm such a noob, don't expect much when it comes to
        cars) (I'm quite good at IT though, hehe).<br />
        By the way, the verb "bidouiller" (from which the noun "bidouille"
        comes) is mainly translated to English as "to hack".<br />
        But it really means more than that in French. To me at least, it means
        to try to understand topics/machines you don't know by just giving it a
        go. It means to get your hands dirty and get things done, even if it
        isn't professionally done.
      </p>
      <p class="my-2">
        I'll stay mostly anonymous. If you want to know the information i cared
        to share about myself, check out my introduction post here (
        <nuxt-link class="nice-link" to="/en/2020-04-01-introduction"
          >en</nuxt-link
        >
        /
        <nuxt-link class="nice-link" to="/fr/2020-04-01-introduction"
          >fr</nuxt-link
        >).
      </p>

      <p class="my-2">
        If you want to get in touch for whatever reason, don't hesitate to drop
        a mail at <hiddenmail class="nice-link"></hiddenmail>.
      </p>

      <h4 class="mt-2 text-lg font-bold">Stickers !</h4>

      <p class="my-2">
        I have stickers, that you can obtain by meeting with me, or when buying
        the various things I will be selling in the short future.<br />
        I would be touched if you decided on using them :)
      </p>

      <h4 class="mt-2 text-lg font-bold">Some formalities</h4>

      <p class="my-2">
        For my own protection, I have to say that whatever information you find
        on this site is given without guaranty. I am not a professional, and as
        such, nothing I say/write should be taken as truth or advice.<br />
        Always stay safe when working on cars and with electronics, and when in
        doubt, ask a professional.<br />
        I do not condone reckless driving on public roads. Always follow traffic
        rules and try not to do something stupid. As a community, our image
        depends on it.
      </p>

      <p class="my-2">
        To have a better idea of how many people visit my blog, I records the
        fact that you visited it at a certain time, and I capture your user
        agent, which contains information your browser shares with the web, like
        your web browser version, language and device.<br />
        I do not keep any other data about you, and I use that data anonymously,
        solely for statistical reasons.<br />
        I respect the "Do Not Track" flag that you can enable in your browser.
        If the flag is enabled, from my point of view, it is as if you never
        visited the website.
      </p>

      <h3 id="fr" class="text-xl font-bold mt-4">Et maintenant en français</h3>

      <p class="my-2">
        Hey, merci de prendre le temps de visiter mon blog !<br />
        Je viens de Suisse et parle français et anglais. C'est pourquoi
        l'interface du site est en anglais et la plupart des articles sont
        disponibles dans les deux langues.
      </p>
      <p class="my-2">
        Ce blog me sert à retranscrire les choses que je fais pour m'amuser et à
        partager mon "expérience" (ne vous attendez pas à grand chose, je suis
        un noob en terme de voitures) (par contre je suis plutôt bon avec les
        ordinateurs, hehe).
      </p>
      <p class="my-2">
        Je compte rester majoritairement anonyme. Si vous voulez connaître les
        informations que j'ai décidé de partager sur moi, je vous invite à lire
        mon poste d'introduction ici (
        <nuxt-link class="nice-link" to="/en/2020-04-01-introduction"
          >en</nuxt-link
        >
        /
        <nuxt-link class="nice-link" to="/fr/2020-04-01-introduction"
          >fr</nuxt-link
        >).
      </p>

      <p class="my-2">
        Si vous souhaitez me contacter pour une raison ou une autre, n'hésitez
        pas à me mettre un mail à l'adresse suivante
        <hiddenmail class="nice-link"></hiddenmail>.
      </p>

      <h4 class="mt-2 text-lg font-bold">Stickers !</h4>

      <p class="my-2">
        J'ai des stickers, que vous pouvez obtenir en me rencontrant, ou en
        achetant les différentes choses que je vendrai dans le futur proche.<br />
        Je serais touché si vous décidiez de les utiliser :)
      </p>

      <h4 class="mt-2 text-lg font-bold">Quelques formalités</h4>

      <p class="my-2">
        Pour ma propre protection, je dois mentionner que les informations que
        vous trouverez sur ce site sont données sans garantie. Je ne suis pas un
        professionnel et, de ce fait, aucune information que je dis/écris ne
        doit être considérée comme vraie ou comme un conseil<br />
        Votre sécurité doit toujours être prioritaire lorsque vous travaillez
        sur un véhicule ou avec de l'électronique. En cas de doutes, demandez
        toujours l'aide d'un professionnel.<br />
        Je n'encourage pas la conduite dangereuse sur routes publiques. Suivez
        toujours les règles de la circulation et essayez de ne pas faire de
        conneries. En tant que communauté, notre image en dépend.
      </p>

      <p class="my-2">
        Pour avoir une meilleure idée de combien de personnes visitent mon blog,
        j'enregistre le fait que vous l'avez visité et quand, ainsi que votre
        agent utilisateur, qui contient des informations que votre navigateur
        partage avec le web, comme la version de votre navigateur, votre langue
        et votre périphérique.<br />
        Je ne garde aucune autre information à propos de vous, et j'utilise ces
        données anonymement, uniquement pour des raisons de statistiques.<br />
        Je respect l'option "Ne pas me pister" que vous pouvez activer dans
        votre navigateur. Si l'option est activée, de mon point de vue, c'est
        comme si vous n'aviez jamais visité le site web.
      </p>
    </section>
    <!-- Matomo Image Tracker-->
    <img
      :src="`https://analytics.naito.one/matomo.php?idsite=2&amp;rec=1&amp;action_name=About&amp;url=https://mrbidouille.ch/about&amp;rand=${random}`"
      style="width: 1px; height: 1px; border: 0"
      alt
    />
    <!-- End Matomo -->
  </main>
</template>
<script>
import Hiddenmail from '../components/hiddenmail'
import ministore from '../assets/ministore'
export default {
  head() {
    return {
      title: 'About - Mr. Bidouille',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "All about Mr. Bidouille's blog in English et en français",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'blog,about,bidouille',
        },
      ],
    }
  },
  components: {
    Hiddenmail,
  },
  computed: {
    random() {
      return ministore.MATOMO_SEED
    },
  },
}
</script>
