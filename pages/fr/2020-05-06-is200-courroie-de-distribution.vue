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
      Mon IS200 fêtera bientôt ses 20 ans et elle approche des 300'000 km. Il
      est grand temps de changer la courroie de distribution, d'autant plus que
      je ne suis pas 100&nbsp;% sûr qu'elle a été faite à 150'000 km (on dirait
      que oui, mais l'ancien propriétaire n'en savait rien).
    </p>
    <p>
      C'est mon tout premier «&nbsp;gros&nbsp;» boulot de mécanique. Jusqu'à
      maintenant, j'ai surtout fait des petits trucs de mécanique et beaucoup de
      carrosserie.
    </p>

    <h3>Outils</h3>
    <p>
      Sans plus tarder, voici absolument tout ce dont j'ai eu besoin pour
      réaliser le travail chez moi, devant la maison.
    </p>
    <p><br /></p>
    <ul>
      <li>
        Un cric (vous pourriez utiliser celui inclus avec la voiture, mais
        pensez à investir dans un cric. Vous allez gagner beaucoup de temps)
      </li>
      <li>
        Minimum 2 chandelles (chevalets, peu importe comment vous voulez les
        appeler)
      </li>
      <li>Un jeu de douilles métrique (10 mm à 22 mm)</li>
      <li>
        Un petit cliquet et un grand, qui vont avec vos douilles. Deux tailles
        aidera à atteindre certains endroits un peu complexe avec un grand
        cliquet
      </li>
      <li>Des extensions pour vos cliquets</li>
      <li>
        Une douille pour enlever les bougies d'allumage, de 16 mm sur cette
        voiture. Par exemple&nbsp;: Sealey S12SP10
      </li>
      <li>Un jeu de clés hexagonales (5 mm, 8 mm &amp; 10 mm)</li>
      <li>Des pinces à serrer et à couper</li>
      <li>
        Un stylo gras de couleur vive (communément appelé stylo indélébile)
      </li>
      <li>
        Une breaker bar (j'ai longuement cherché, il n'y a pas vraiment de
        traduction française)
      </li>
      <li>
        Une extension. Ça peut être un long tube de métal de récupération. Ça
        permettra d'augmenter la force de levier qu'on peut appliquer sur la
        breaker bar
      </li>
      <li>
        Une clé dynamométrique, allant de 17.5 Nm à 220 Nm (personnellement j'ai
        un adaptateur digital, mais je ne le recommanderais pas forcément. J'en
        parle dans l'article)
      </li>
      <li>Un marteau et des morceaux de bois (pour amortir l'impact)</li>
      <li>Des protections pour vos mains et vos yeux (recommandé)</li>
      <li>
        Un récipient d'au-moins 5L, pour récupérer le liquide de refroidissement
      </li>
      <li>Un bidon refermable d'au-moins 5L, pour stocker le liquide usagé</li>
      <li>
        Une bâche ou du carton, pour tapisser le sol sous la voiture et rendre
        votre vie plus confortable et propre
      </li>
      <li>Du papier ménage</li>
      <li>Des colliers de serrage (cable ties)</li>
    </ul>
    <p><br /></p>
    <p>
      Si c'est votre premier job sur la voiture, ça peut paraître comme
      beaucoup, mais ce sont tous des outils dont vous aurez besoin par la
      suite. Il faut juste accepter qu'il y a un coût initial. Ne vous ruinez
      pas avec des outils ultra haute gamme au début. Prenez le strict minimum,
      et augmentez votre arsenal au fur et à mesure du besoin.
    </p>
    <p>
      En additionnant ce que j'ai dépensé pour les outils ci-dessus combinés,
      j'arrive à environ <strong>CHF 250</strong>, pour référence. Il y a des
      outils que j'ai achetés, mais certains je possédais déjà, comme le
      récipient ou les pinces.
    </p>

    <h3>Produits</h3>
    <ul>
      <li>
        WD-40, l'huile magique qui décoince tout. Ça marche vraiment, ayez-en
        toujours avec vous
      </li>
      <li>
        Brake cleaner, nettoyant rapide, peu importe comment il s'appelle près
        de chez vous. Super pratique pour nettoyer des surfaces huileuses ou
        juste sales
      </li>
      <li>
        Antigel concentré, ou liquide de refroidissement prédilué. Il faudra
        ré-remplir le refroidissement. Prévoyez 5L, avec 33&nbsp;% ou 50&nbsp;%
        d'antigel, mais certaines fois, vous finirez par ne remplir qu'avec 4L.
        Cette fois-ci, en enlevant le radiateur et en laissant couler bien
        longtemps, j'ai pu remettre 4.4L. Je l'ai acheté concentré au dealer
        Toyota le plus proche de chez moi. Ça s'appelle «&nbsp;Toyota Pink Long
        Life Coolant&nbsp;»
      </li>
    </ul>

    <h3>Pièces</h3>
    <p>
      Pour les pièces, je choisis dans 99&nbsp;% des cas des pièces d'origine
      Toyota. Prenez des «&nbsp;no-name&nbsp;» à vos risques et périls. Je
      trouve tout sur Ebay. Des fois, avec pas mal de temps de recherche. Aucune
      exception ici&nbsp;:
    </p>
    <p><br /></p>
    <ul>
      <li>
        Courroie de distribution d'origine, marque «&nbsp;Gates&nbsp;». Numéro
        de pièce Toyota&nbsp;: 13568-79235
      </li>

      <li>
        Tensioner bearing, souvent inclus en kit avec la courroie. Numéro de
        pièce Toyota&nbsp;: 13540-70021
      </li>

      <li>
        Idler sub-assembly (pas obligé d'être remplacé, mais j'ai préféré, pour
        être tranquille) Numéro de pièce Toyota&nbsp;: 13503-70080
      </li>

      <li>
        Courroies auxiliaires (3), marque «&nbsp;Gates&nbsp;», trouvé en kit
        pour l'IS200. Même si vous pourriez réutiliser les anciennes, je
        conseillerais de les changer pendant qu'on y est. Surtout que l'une des
        anciennes sera sacrifiée afin de retirer un boulon. Les spécifications
        des trois courroies sont les suivantes&nbsp;: 4PK898, 4PK1070, 3PK890
      </li>
    </ul>
    <p><br /></p>
    <p>
      Prix&nbsp;: j'ai réussi à me fournir toutes les pièces, frais de port
      &amp; change Paypal inclut, pour environ <strong>CHF 20</strong
      ><strong>3</strong> en avril 2020.
    </p>

    <h3>Aperçu des étapes</h3>
    <p>
      Avant de changer la courroie, il y a quelques petits trucs à faire. Voici
      toutes les étapes à réaliser.
    </p>
    <ol>
      <li><a href="#1">Retirer le radiateur</a></li>
      <li><a href="#2">Retirer l'entrée d'air</a></li>
      <li><a href="#3">Retirer les bougies d'allumage</a></li>
      <li><a href="#4">Défaire les courroies auxiliaires</a></li>
      <li>
        <a href="#5">
          Retirer le boulon de poulie de vilebrequin (Crankshaft pulley bolt)</a
        >
      </li>
      <li><a href="#6">Marquer le temps</a></li>
      <li>
        <a href="#7">Retirer la poulie de vilebrequin (Crankshaft pulley)</a>
      </li>
      <li><a href="#8">Retirer la courroie principale</a></li>
      <li><a href="#9">Installer la nouvelle courroie</a></li>
      <li>
        <a href="#10">
          Installer le boulon de poulie de vilebrequin (Crankshaft pulley
          bolt)</a
        >
      </li>
      <li><a href="#11">Réinstaller le reste</a></li>
      <li><a href="#12">Test &amp; fin</a></li>
    </ol>

    <h3>Avant de commencer</h3>
    <p>
      Pour simplifier, puisqu'on travaille à l'avant de la voiture, lorsque je
      vais référer à l'emplacement de quelque chose, je vais donner le côté
      (gauche, droite) comme vu depuis devant la voiture et non comme dans le
      sens de marche. Le côté droit est donc le côté conducteur, ici en Suisse,
      avec ce système (alors qu'on conduit «&nbsp;à gauche&nbsp;»).
    </p>
    <p>
      Le liquide de refroidissement n'est pas trop dangereux pour vous, mais
      éviter d'en avoir sur la peau quand même. Mais surtout, évitez de le
      laisser traîner, parce que ça attire les animaux (je pense notamment aux
      chats), et c'est très nocif pour eux s'ils le boivent (ce qu'ils vont
      faire, ces curieux).
    </p>

    <h3 id="1">1. Retirer le radiateur</h3>
    <p>
      C'est franchement facile. Il faut d'abord vider le liquide de
      refroidissement. Commencez par lever l'avant de la voiture.
    </p>

    <h4>Cache sous-moteur</h4>
    <p>
      Il y a un cache qui recouvre tout l'avant de la voiture. Retirez-le. C'est
      le premier truc à retirer dès que vous travaillez à l'avant de la voiture,
      car il libère l'accès à tout le compartiment moteur depuis le dessous.
      Pour l'enlever, il y a une certaine quantité de boulons 10 mm à retirer.
      Prenez votre temps et trouvez-les tous.
    </p>

    <h4>Vidange du liquide de refroidissement</h4>
    <p>
      Sous la voiture, du côté droit, il y a un petit robinet. Placez un
      récipient en dessous, et ouvrez le robinet. Des fois c'est faisable à la
      main, des fois vous pouvez vous aider d'une pince.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/01-drain-valve.jpg"
      alt="Robinet de vidange"
    ></clickable-image>

    <p>
      Ne retirez pas immédiatement le robinet. Ouvrez-le juste assez pour que ça
      commence à couler. Après un petit moment, vous pouvez ouvrir le bouchon du
      radiateur pour accélérer la vidange, puis encore après un petit moment,
      vous pouvez entièrement retirer le robinet.
    </p>
    <p>
      Ça va prendre un moment pour les 4L - 5L de liquide de refroidissement de
      sortir.
    </p>

    <h4>Pare-chocs</h4>
    <p>
      En attendant, vous pouvez retirer votre pare-chocs avant.
      <strong>Ce n'est pas requis</strong>, mais ça donne beaucoup plus d'accès
      pour travailler sous le capot.
    </p>
    <p>
      Pour l'enlever, certains 10 mm ont déjà été retirés dessous pour enlever
      le cache. Il en reste sur les côtés, cachés derrière le cache des roues
      avant. Vous pouvez enlever la grille avec le pare-chocs, elle y est
      accrochée.
    </p>

    <h4>Radiateur</h4>
    <p>
      Une fois le pare-chocs retiré, toujours pendant que le liquide se vide,
      vous pouvez commencer à décrocher le radiateur. Il faut tout d'abord
      enlever une première partie de l'entrée d'air, retenue par 3 boulons de 10
      mm au-dessus du radiateur. Ensuite, cette partie peut juste se glisser
      vers l'avant de la voiture pour être retirée.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/02-intake.jpg"
      alt="Première pièce de l'entrée d'air"
    ></clickable-image>

    <p>
      Vous pouvez ensuite retirer les 2 attaches du radiateur et le conduit à
      droite qui mène au compartiment de l'ordinateur de bord. Puis, il faudra
      couper les 3 colliers de serrage qui maintiennent les deux connecteurs
      d'alimentation des ventilateurs.
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/03-ecu-tube.jpg"
        alt="Conduit menant à l'ordinateur de bord"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/04-radiator-left.jpg"
        alt="Attache gauche du radiateur"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/05-radiator-right.jpg"
        alt="Attache droite du radiateur"
      ></clickable-image>
    </div>

    <p>
      Une fois que le liquide entièrement vidé (si ça goûte encore très très
      peu, ça va), vous pouvez retirer le radiateur. Pour cela, il faut
      déconnecter le grand tuyau en haut à droite du radiateur, et celui en bas
      à gauche, ainsi que le connecteur à côté du tuyau d'en bas.
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/06-upper-coolant-line.jpg"
        alt="Tube du radiateur suppérieur"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/07-lower-coolant-line.jpg"
        alt="Tube du radiateur inférieur &amp; connecteur"
      ></clickable-image>
    </div>

    <p>
      Pour retirer ces tuyaux, il faut utiliser une grande pince pour pincer
      l'agrafe et la déplacer plus loin sur le tuyau. Après ça, le tuyau peut
      être gentiment déconnecté à la main. Lorsque vous replacez l'agrafe,
      essayez de la remettre exactement où elle était, car ces grandes agrafes
      là laissent de bonnes marques.
    </p>
    <p>
      Préparez un récipient sous le tuyau en bas à gauche, car une quantité
      inattendue de liquide va encore sortir de là (j'ai fait une pause après
      cette étape, et ça a continué à couler toute la nuit, à petit feu. Mais si
      vous mettez un récipient, tout ira bien).
    </p>
    <p>
      J'ai personnellement laissé le tuyau du bas, car il ne gêne pas. Par
      contre, j'ai complètement retiré le tuyau du haut.
    </p>
    <p>
      Après avoir retiré les tuyaux, déplacés gentiment le radiateur vers le
      haut, et allez le poser à un endroit sécurisé. J'ai bouché tous les trous
      avec du papier ménage. J'ai également bouché les trous du côté de la
      voiture.
    </p>

    <h3 id="2">2. Retirer l'entrée d'air</h3>
    <p>
      Afin d'enlever la pression dans les cylindres, il faut retirer les bougies
      d'allumage. Pour accéder à celles-ci, il faut enlever tout le système
      d'entrée d'air.
    </p>
    <p>
      Il y a 3 boulons de 10 mm autour de la boîte principale et un capteur à
      retirer.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/08-air-box.jpg"
      alt="Boîte à air principale"
    ></clickable-image>

    <p>
      J'ai mis un papier ménage dans le corps de papillon pour être sûr qu'il
      n'y ait pas de cheni (<a href="https://fr.wiktionary.org/wiki/cheni"
        >https://fr.wiktionary.org/wiki/cheni</a
      >) qui y entre.
    </p>

    <h3 id="3">3. Retirer les bougies d'allumage</h3>
    <p>
      Il y a un autre cache à retirer par-dessus les bougies d'allumage, avec 4
      x 10 mm.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/09-vvti-cover.jpg"
      alt="Cache des bobines d'allumage"
    ></clickable-image>

    <p>
      Si vous avez un compresseur à air, c'est une bonne manière de rapidement
      enlever tout le cheni qu'il pourrait y avoir sur le bloc moteur. C'est
      important de l'enlever, afin d'empêcher à tout prix que quoi que ce soit
      ne tombe dans le moteur lorsqu'on enlèvera les bougies. Si vous n'avez pas
      d'air comprimée, vous pouvez utiliser un chiffon, du nettoyant pour frein,
      etc.
    </p>
    <p>
      Ensuite, retirer les 6 bobines d'allumage. Un 10 mm et un connecteur les
      retient en place.
    </p>
    <p>
      Passez un autre coup d'air comprimé dans les trous, pour être sûr qu'il
      n'y ait rien dedans.
    </p>
    <p>
      Avec la douille appropriée (voir liste de matériel en début d'article),
      retirez les bougies d'allumages. Allez-y gentiment. Il faut faire beaucoup
      plus de tours qu'on s'y attend, mais il ne faut pas beaucoup de force.
    </p>
    <p>
      Placez les bobines et les bougies à l'abri. On les réinstallera après. Ou
      bien profitez-en pour les changer, si elles sont en mauvais état.
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/10-spark-coils.jpg"
        alt="Bobines d'allumage"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/11-spark-plugs.jpg"
        alt="Bougies d'allumage"
      ></clickable-image>
    </div>

    <h3 id="4">4. Défaire les courroies auxiliaires</h3>
    <p>On y est&nbsp;! Maintenant on touche aux courroies.</p>
    <p>
      Il y a encore un cache avec 3 x 10 mm au-dessus de l'alternateur. Vous
      pouvez déjà le retirer (je l'ai fait plus tard, mais maintenant est un bon
      moment).
    </p>
    <p>
      On va retirer les auxiliaires dans l'ordre de la plus proche à la plus
      éloignée du devant de la voiture.
    </p>
    <p>
      Tous les boulons qu'on va rencontrer maintenant sont soit 12 mm soit 14
      mm.
    </p>
    <p>
      Je vous conseille de presser gentiment sur chacune des courroies afin
      d'avoir une idée de la tension de chacune. Ça aidera plus tard quand on
      resserrera les nouvelles.
    </p>

    <h4>Auxiliaire 1</h4>
    <p>
      Commencez par desserrer légèrement l'écrou au centre de la poulie, puis la
      longue visse.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/12-undo-first-aux.jpg"
      alt="Ordre de desserrage pour l'auxiliaire 1"
    ></clickable-image>

    <p>
      En jouant sur leur serrage, vous arrivez à enlever la tension sur la
      courroie, et finalement la retirer.
    </p>

    <h4>Auxiliaire 2</h4>
    <p>
      Celle-ci va être un peu spéciale, car après l'avoir retirée, nous allons
      l'utiliser pour desserrer le fameux boulon de poulie de vilebrequin
      (Crankshaft pulley bolt). On va même l'utiliser encore une fois pour
      resserrer ce même boulon plus tard.
    </p>
    <p>
      Pour la desserrer, il y a 3 boulons à desserrer avec la même technique
      d'avant. Voyez les deux images. Notez que sur la deuxième photo, je
      n'avais pas encore retiré le cache au-dessus de l'alternateur.
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/14-undo-second-aux-2.jpg"
        alt="Ordre de desserrage pour l'auxiliaire 2, partie 1"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/13-undo-second-aux-1.jpg"
        alt="Ordre de desserrage pour l'auxiliaire 2, partie 2"
      ></clickable-image>
    </div>

    <p>
      Tout l'alternateur va légèrement se tourner vers la gauche (voir première
      photo), et la tension sera retirée.
    </p>

    <h3 id="5">
      5. Retirer le boulon de poulie de vilebrequin (Crankshaft pulley bolt)
    </h3>
    <p>
      Avec cette courroie, nous allons coincer tout le moteur afin de nous
      permettre de desserrer le boulon de poulie de vilebrequin (Crankshaft
      pulley bolt) (j'inclus toujours le nom en anglais, car je ne suis pas
      100&nbsp;% sur du nom en français).
    </p>
    <p>
      Il y a quelques méthodes pour le retirer. Ici je vous montre la méthode
      qui a marché pour moi et qui ne requiert par d'outils spéciaux. C'est
      inspiré de la méthode similaire présentée dans différentes vidéos YouTube,
      notamment celle-ci
      <a href="https://www.youtube.com/watch?v=h2clQi8clQw"
        >https://www.youtube.com/watch?v=h2clQi8clQw</a
      >.
    </p>
    <p>
      Je vous ferai un diagramme ci-dessous pour bien expliquer la position.
      Mais en gros, on va faire revenir la courroie sur elle-même, pour que
      quand on tourne le boulon de poulie vers la gauche pour le desserrer, la
      courroie se tend sur elle-même et immobilise le reste du moteur. Voici à
      quoi ça ressemble.
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/15-undo-tangle-1.jpg"
        alt="Première vue de l'emmêlement"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/16-undo-tangle-2.jpg"
        alt="Seconde vue de l'emmêlement"
      ></clickable-image>
    </div>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/17-undo-tangle-3.jpg"
        alt="Troisième vue de l'emmêlement"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/18-crank-pulley-bolt-undo-diagram.jpg"
        alt="Diagramme de l'emmêlement"
      ></clickable-image>
    </div>

    <p>
      Il faudrait éviter à tout prix de tourner la poulie de vilebrequin vers la
      gauche, au risque d'endommager le moteur. Veillez donc à mettre le plus de
      tension possible sur la courroie à la main.
    </p>
    <p>
      Faites attention à ce que la boucle soit bien en dessous de la poulie,
      sinon elle ne va pas se tendre. Pour tendre à la main, une fois à peu près
      en place, soulevez la courroie sur la poulie du haut, tirez tout le jeu
      vers vous, puis poussez ce jeu sous la poulie du fond.
    </p>
    <p>
      Lorsque vous pensez que vous ne pouvez plus tendre plus à la main, il est
      temps de tenter de retirer le boulon. Vous risquez de tourner le moteur à
      l'envers un tout petit peu afin de finaliser la tension.
    </p>
    <p>
      Maintenant que la tension est là, mettez votre breaker bar sur le boulon,
      ajoutez une extension, et poussez à fond. Soyez patients. Ça peut prendre
      long. Ce boulon est maintenu avec 220 Nm de force et n'a sûrement pas été
      retiré depuis 10 ans.
    </p>
    <p>
      Voici les outils que j'ai utilisés (dites bonjour à Johnny, le personnage
      incroyable sur ma bâche super vintage de récupération).
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/19-breaker-bar.jpg"
      alt="Outils utilisés pour retirer le boulon de mort"
    ></clickable-image>

    <p>
      Une fois desserré (enfin), laissez le boulon sur la poulie. On en aura
      encore besoin.
    </p>
    <p>
      Prenez encore cette opportunité pour desserrer les 4 écrous de la poulie
      de la pompe à eau. Sur ma voiture, je n'ai pas réussi à les enlever avant,
      même avec du WD-40. Mais avec la tension qu'on a mise sur cette courroie,
      c'est un jeu d'enfant. Desserrez-les, mais gardez-les en place pour le
      moment.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/20-water-pump-nuts.jpg"
      alt="Les 4 écrous à desserrer sur la pompe à eau"
    ></clickable-image>

    <p>
      Vous pouvez maintenant retirer la tension mise sur cette courroie, en
      tournant le moteur dans le bon sens. Pour ce faire, vu qu'on vient de
      retirer le boulon qui nous permettait de faire tourner le moteur, j'ai
      décidé de mettre ma breaker bar sur la petite poulie à gauche (voir photo)
      et de tourner gentiment vers la droite. J'ai dû maintenir la courroie à la
      main, car elle glissait un peu.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/21-remove-tension.jpg"
      alt="Retirer la tension"
    ></clickable-image>

    <p>
      Victoire. Cette courroie est cuite. Mais de toute façon on allait la
      changer, donc tant mieux. Ne la jeter pas encore, on va faire un truc
      similaire avec elle lors du resserrage du boulon plus tard.
    </p>

    <h4>Auxiliaire 3</h4>
    <p>
      Il est temps d'enlever la dernière courroie auxiliaire. Ça requière de
      desserrer 2 boulons, depuis sous la voiture. Voici le premier. J'ai dans
      un premier temps utilisé ma breaker bar pour le décoincer, puis utilisé
      une extension avec mon cliquet que j'ai actionné gentiment depuis dessous.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/22-undo-third-aux-1.jpg"
      alt="Premier boulon, vu du dessus"
    ></clickable-image>

    <p>Et voici le deuxième. Même principe (vu depuis dessous).</p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/23-undo-third-aux-2.jpg"
      alt="Second boulon, vu du dessous"
    ></clickable-image>

    <p>
      Une fois les deux desserrés, vous pouvez pousser la poulie vers le haut,
      ce qui enlève la tension.
    </p>
    <p>
      Finalement, on va retirer la poulie qui est sur la pompe à eau en
      finissant de desserrer les 4 écrous.
    </p>
    <p>
      Attention, il y a en fait 2 pièces, et elles risquent de tomber par terre
      si vous ne faites pas gaffe en essayant de les enlever.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/24-water-pump-pulley-removed.jpg"
      alt="Les deux pièces de la poulie de pompe à eau"
    ></clickable-image>

    <h3 id="6">6. Marquer le temps</h3>
    <p>
      Cette étape est très importante. On va retirer les caches de la courroie
      principale, puis on va marquer le temps à différents endroits afin
      d'éviter des dégâts au moteur lorsqu'on retire la courroie, et afin de
      vérifier le temps lors de l'installation de la nouvelle.
    </p>
    <p>Commencez par enlever le cache supérieur. Il a 4 boulons.</p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/25-first-timing-cover-1.jpg"
        alt="Les 4 boulons qui retirent le premier cache"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/26-first-timing-cover-2.jpg"
        alt="Le premier cache retiré"
      ></clickable-image>
    </div>

    <p>
      Il va maintenant falloir faire tourner le moteur (toujours vers la droite)
      jusqu'à ce que la marque de droite de la poulie de vilebrequin soit à 0
      sur son cache, et que la petite indentation de la poulie supérieure soit
      visible à gauche. Si vous êtes à 0 en bas, mais que l'indentation n'est
      pas au bon endroit en haut, il faut tout tourner de 360 degrés. Voir
      photos.
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/27-timing-marked-top.jpg"
        alt="Le temps marqué en haut"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/28-timing-marked-bottom.jpg"
        alt="Le temps aligné en bas"
      ></clickable-image>
    </div>

    <p>Pour tourner toute la courroie, il y a deux possibilités.</p>
    <p>
      Soit avec une 17 mm à 12 côtés, faire tourner depuis le grand boulon blanc
      visible sur la première photo. Cette méthode est tout de même
      déconseillée. Ce boulon a l'air de rapidement s'endommager. Allez-y donc
      doucement.
    </p>
    <p>
      Seconde solution, temporairement réinstaller le boulon de poulie de
      vilebrequin (oui, celui qui a été si complexe à enlever, je sais) et le
      tourner gentiment.
    </p>
    <p>
      Avec la seconde solution, mettez le moins de force possible pour ne pas
      resserrer le boulon. Lorsque vous avez le bon alignement, tourner encore
      ~5 °, puis donnez un ou deux coups secs à votre breaker bar vers la gauche
      pour déloger le boulon. Il devrait tourner vers la gauche de max 5 ° avant
      de se libérer à nouveau.
    </p>
    <p>
      Lorsque l'alignement est satisfaisant, marquez la dent de la poulie du
      haut qui est verticale avec un stylo gras de couleur vive (voir première
      photo, j'ai déjà ajouté la marque). Si votre courroie a déjà été changée
      dans le passé, vous verrez peut-être le reste de la marque précédente.
      C'est encore une confirmation supplémentaire que vous êtes au bon endroit.
    </p>
    <p>
      Vous pouvez même prendre des photos de l'alignement, juste comme référence
      supplémentaire pour plus tard.
    </p>

    <h3 id="7">7. Retirer la poulie de vilebrequin (Crankshaft pulley)</h3>
    <p>
      Il est maintenant temps d'enlever la poulie de vilebrequin. Quelle merde
      celle-là&nbsp;! J'ai finalement réussi à l'enlever et je vais vous
      expliquer comment.
    </p>
    <p>
      Mais tout d'abord, sachez qu'il existe des outils spéciaux pour enlever ce
      genre de poulies. Donc si vraiment après tous vos efforts vous n'arrivez
      pas à la retirer, considérez peut-être ces outils. Ça s'appelle un
      «&nbsp;bolt puller set&nbsp;».
    </p>
    <p>
      Leur problème pour moi est que (en Suisse), ils sont super cher à obtenir.
      Mais si vous êtes ailleurs dans le monde, c'est peut-être une bonne
      option.
    </p>
    <p>
      Voici le problème&nbsp;: la poulie est «&nbsp;juste posée&nbsp;» là.
      Cependant, elle y est vachement bien posée. Il n'y a rien d'autre à
      dévisser ou quoi, mais vous ne pouvez pas juste tirer dessus et
      «&nbsp;pouf&nbsp;», elle s'enlève.
    </p>
    <p>Voici la méthode qui a marché pour moi&nbsp;:</p>
    <p>
      Depuis sous la voiture, derrière la poulie à l'endroit le plus exposé,
      j'ai utilisé un marteau et un morceau de bois (afin d'amortir un peu
      l'impact et de ne pas abîmer la poulie) afin de créer un léger jeu
      vertical dans la poulie.
    </p>
    <p>Ne tentez jamais de tourner la poulie&nbsp;! Sa rotation est fixe.</p>
    <p>
      Je n'ai obtenu aucun jeu horizontal, et je pense que c'est normal. Avec ce
      très très léger jeu, j'ai ensuite vissé 2 visses dans les trous de la
      poulie (voir photo). Ces visses proviennent en fait du corps de papillon,
      donc elles peuvent être récupérées tout facilement (ce sont les deux
      longues visses qui maintiennent le corps de papillon en place, à sa
      gauche).
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/29-removing-crankshaft-pulley.jpg"
      alt="Points d'ancrage sur la poulie"
    ></clickable-image>

    <p>
      Ensuite, pendant bien cinq minutes non stop, mes deux mains ancrées
      chacune sur l'une des visses, j'ai tiré vers moi tout en faisant bouger de
      haut en bas la poulie. Après un moment, j'ai commencé à remarquer qu'elle
      se déplaçait vers moi. La quantité de jeu n'a pas augmenté, mais elle
      s'est progressivement rapprochée du bord.
    </p>
    <p>
      Attention, quand vous l'aurez enfin sortie. Elle est pas mal lourde&nbsp;!
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/30-crankshaft-pulley-removed.jpg"
      alt="La poulie enfin retirée"
    ></clickable-image>

    <p>
      Il est grand temps de la nettoyer de tout le WD-40 que je lui ai jeté à la
      figure. Après avoir écrit cet article, je remarque que le WD-40 n'a
      sûrement été d'aucune aide pour enlever le boulon ou la poulie. Donc je ne
      vous conseille pas d'en mettre. Mais si vous en avez mis, le Brake cleaner
      fait ça a merveille. Ensuite, j'utilise du papier ménage pour éponger
      l'huile et le produit.
    </p>

    <h3 id="8">8. Retirer la courroie principale</h3>

    <h4>Second cache</h4>
    <p>
      Il reste un second cache, qui peut maintenant être retiré. Il reste 4
      boulons de différentes profondeurs. Celui en haut à droite a déjà été
      retiré, car il passe au travers des deux caches.
    </p>
    <p>
      Derrière ce cache, vous trouverez une petite pièce de guidage en forme
      d'assiette. Retirez-la avec soins (déjà retirée sur la photo).
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/31-second-timing-cover-1.jpg"
        alt="Les 4 boulons qui retirent le second cache"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/32-second-timing-cover-2.jpg"
        alt="Le second cache retiré"
      ></clickable-image>
    </div>

    <h4>Marquer le temps, encore</h4>
    <p>
      J'ai observé qu'une marque était déjà présente sur la poulie en bas à
      droite, correspondant à la pièce métallique noire. C'est une bonne manière
      de réaligner cette poulie, mais le manuel ne mentionne pas que c'est un
      point important du temps. Je l'ai donc laissé, mais
      <strong>très important</strong>, j'ai ajouté ma propre marque sur la
      poulie du fond. Une marque entre les dents et sur le bloc moteur (voir
      photos).
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/33-old-timing-right-pulley.jpg"
        alt="Le marquage de temps déjà présent sur la poulie de droite"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/34-new-timing-bottom-pulley.jpg"
        alt="Mon nouveau marquage sur la poulie du fond"
      ></clickable-image>
    </div>

    <p>
      L'endroit où j'ai choisi de faire la marque n'était pas super accessible
      avec un stylo, mais ça va le faire. J'ai pris des photos, pour cet
      article, mais aussi pour avoir une seconde référence d'à quoi ressemblait
      mon temps.
    </p>

    <h4>Retirer les poulies de tension</h4>
    <p>
      Cette première poulie a un mécanisme qui est un peu intimidant, et surtout
      dans le manuel, car c'est très mal expliqué à mon humble avis.
    </p>
    <p>
      Une première manipulation permet d'enlever la tension. Une seconde
      manipulation bloque la poulie dans cet état de non-tension. Puis
      finalement une troisième manipulation retire la poulie. Commençons.
    </p>
    <p>
      Mettez une clé hexagonale de 10 mm dans le plus grand trou. En le tournant
      dans le sens horaire, vous desserrez la courroie. Oui c'est un peu contre
      intuitif, mais c'est bien le sens horaire pour desserrer. Ici j'ai utilisé
      une clé solide, et j'ai improvisé une extension avec une extension 1/2 in
      de mon cliquet.
    </p>
    <p>
      Pour maintenir la position de non-tension, il faut utiliser votre seconde
      main et une clé hexagonale de 5 mm. En fait, la clé ne se coince pas dans
      un trou hexagonal. C'est juste un trou rond de 5 mm.
    </p>
    <p>
      Lorsque vous tournez la clé de 10 mm, le trou devient accessible, et vous
      devez juste pousser gentiment la clé de 5 mm dedans. À ce moment, si vous
      relâchez la pression avec la clé de 10 mm, la poulie ne revient pas en
      état serré.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/35-rotating-first-tension-pulley.jpg"
      alt="La première poulie de tension tourne et j'insère la clé de 5 mm"
    ></clickable-image>

    <p>
      Vous pouvez également lâcher la clé de 5 mm, mais évidemment, il faut la
      laisser ou elle est jusqu'à la fin de l'opération.
    </p>
    <p>
      Ensuite, avec une clé de 8 mm, vous pouvez dévisser la poulie dans le
      troisième trou.
    </p>
    <p>
      J'ai initialement utilisé une clé solide avec une autre extension
      improvisée (par peur de briser mon cliquet, car ce boulon est quand même
      bien serré). J'ai ensuite utilisé mon cliquet avec un embout hexagonal de
      8 mm, qui était (par chance) dans ma caisse à outils.
    </p>
    <p>
      Ici retour à du classique, tournez dans le sens antihoraire pour
      desserrer.
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/36-removing-first-tension-pulley-1.jpg"
        alt="Desserrage initial avec une clée solide et une extension improvisée"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/37-removing-first-tension-pulley-2.jpg"
        alt="Fin du desserrage avec un cliquet"
      ></clickable-image>
    </div>

    <p>
      Maintenant que cette poulie est sortie, vous pouvez récupérer votre clé de
      5 mm si vous le souhaitez. Cette poulie sera de toute façon remplacée par
      une nouvelle.
    </p>
    <p>
      Maintenant la seconde poulie. Ici aucun système compliqué. Juste un boulon
      à desserrer. J'ai quand même utilisé ma breaker bar, car il est bien
      serré.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/38-removing-second-tension-pulley.jpg"
      alt="Desserrage de la secone poulie de tension"
    ></clickable-image>

    <h4>Retirer la courroie</h4>
    <p>
      Ça y est&nbsp;! On peut juste la sortir. Vous remarquerez qu'elle a plein
      de petites aides ici et là pour qu'elle ne bouge pas lorsqu'elle est en
      place.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/39-old-timing-belt.jpg"
      alt="Ancienne courroie de distribution"
    ></clickable-image>

    <p>
      Petit rappel. En aucun cas vous ne devez essayer de tourner les deux
      grandes poulies principales maintenant que la courroie est sortie. Sinon,
      le temps sera faux, et vous risquez d'endommager votre moteur.
    </p>

    <h3 id="9">9. Installer la nouvelle courroie</h3>
    <p>
      Cette étape requiert beaucoup de patience. J'espère qu'avec les conseils
      que je vais vous donner, ça se passera bien pour vous. J'ai pour ma part
      galéré un moment à trouver une bonne méthode pour installer la courroie.
    </p>
    <p>
      Pour commencer&nbsp;: soyez toujours délicat avec la courroie. Ne la
      tordez pas, ne mettez pas de liquide dessus, tout ça tout ça.
    </p>
    <p>
      C'est un bon moment pour passer un coup d'air comprimé sur toutes les
      surfaces afin de s'assurer que des poussières ne viennent pas s'insérer
      entre la courroie et les poulies. Le manuel dit de ne pas nettoyer les
      poulies avec du liquide de nettoyage. J'ai personnellement utilisé un peu
      de Brake cleaner, que j'ai laissé sécher un moment pour être sûr.
    </p>

    <h4>Première poulie de tension</h4>
    <p>
      Première chose à faire, c'est installer la nouvelle première poulie de
      tension.
    </p>
    <p>
      Ne retirez pas le petit pin qui se trouve dans votre nouvelle poulie. Il
      fait le même boulot que notre clé de 5 mm précédemment.
    </p>
    <p>
      Installez la poulie en faisant gaffe à ce que le petit pin qui ressort
      sois entre les deux visses qui sortent du bloc (voir photo).
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/40-install-first-tension-pulley.jpg"
      alt="Installation de la nouvelle première poulie de tension"
    ></clickable-image>

    <p>
      Alignez le boulon avec le trou, et vissez avec une clé de 8 mm. Prenez
      votre temps, et appliquez de la force en direction du bloc moteur, car ce
      boulon a du mal à commencer à prendre le pas de visse.
    </p>
    <p>
      Sérieusement, soyez patient. Visser ceci m'a pris super long, mais ce
      n'est pas difficile. Continuez juste à tourner.
    </p>

    <h4>Alignement de la courroie</h4>
    <p>
      Maintenant il est temps d'aligner la courroie. Comme dit avant, c'était
      une étape frustrante, mais j'espère qu'avec cette méthode, ça sera facile
      pour vous&nbsp;:
    </p>
    <p>
      Placez la courroie sur la poulie inférieure en premier. Faites attention
      aux petits guides de courroie qui sont un peu partout sur le bloc.
    </p>
    <p>
      Ensuite, alignez la courroie sur la petite poulie de droite. Le jeu entre
      les deux devrait être au minimum. C'est-à-dire qu'après avoir posé la
      courroie sur les dents de cette poulie, vous devez tirer la partie droite
      de la courroie vers le haut autant que vous le pouvez.
    </p>
    <p>
      Maintenant, mettez la courroie sur le côté droit de la première poulie de
      tension, à gauche de la poulie inférieur.
    </p>
    <p>
      Alignez la courroie sur la poulie supérieure, en commençant par le côté
      gauche. Vous ne devriez pas pouvoir vous tromper de dent en haut. Avec la
      bonne dent, il y a une petite quantité de jeu (qui sera éliminé lorsqu'on
      serrera la première poulie de tension). Avec une dent en trop, vous verrez
      tout de suite qu'il y a trop de jeu. Et vous ne pouvez pas mettre une dent
      en moins. Il n'y a pas assez de jeu pour.
    </p>
    <p>
      Maintenant que le côté gauche est validé, mettez gentiment le haut et le
      côté droit sur les dents.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/41-timing-best-order.jpg"
      alt="L'ordre de mise en place que j'ai utilisé"
    ></clickable-image>

    <h4>Seconde poulie de tension</h4>
    <p>
      Maintenant que la courroie est au bon endroit, vous remarquez qu'il y a
      plein de jeu à droite. Car il faut maintenant réinstaller la seconde
      poulie de tension (déjà en place sur la photo précédente).
    </p>
    <p>
      Le manuel disait de l'installer avant de placer la courroie, mais il était
      impossible pour moi d'aligner la courroie avec la bonne tension avec cette
      poulie installée. Voilà pourquoi je propose de l'installer maintenant, ce
      qui est très facile. Vous devrez peut-être l'entrer légèrement de travers,
      mais dès que vous commencerez à serrer, elle se placera droite.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/42-install-second-tension-pulley.jpg"
      alt="La seconde poulie de tension. Fun fact, c'est la 42ème image de l'article !"
    ></clickable-image>

    <p>
      Vous pouvez immédiatement serrer ce boulon au couple. Le manuel recommande
      37 Nm.
    </p>
    <p>
      Veillez aussi à la position de la courroie en profondeur. Elle devrait
      être presque tout au fond. Vous pouvez l'ajuster en poussant gentiment la
      courroie vers le fond par son bord.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/43-timing-belt-depth.jpg"
      alt="Profondeur de la courroie de distribution"
    ></clickable-image>

    <h4>Application de la tension</h4>
    <p>Nous voilà tout bon. On peut resserrer la première poulie de tension.</p>
    <p>
      Tout d'abord, appliquez le bon couple au boulon de 8 mm. Le manuel
      recommande 42.5 Nm.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/44-torque-down-first-tension-pulley.jpg"
      alt="Serrage au couple de la première poulie de tension"
    ></clickable-image>

    <p>
      Maintenant, vous pouvez retirer le petit pin de 5 mm. J'ai appliqué un peu
      de force dans le sens horaire sur le grand trou de 10 mm pour pouvoir
      retirer le pin (de la même manière qu'utilisée lors du desserrage de
      l'ancienne) puis appliqué la tension en relâchant ma force sur la clé de
      10 mm.
    </p>

    <h4>Test du temps</h4>
    <p>
      Félicitations, votre courroie est en place et serrée&nbsp;! Vérifiez
      encore une fois que les dents soivent bien en place et que le jeu n'est
      pas anormal.
    </p>
    <p>
      Il est maintenant temps de tester le temps. Pour ce faire, on va faire
      deux rotations complètes du moteur et vérifier le temps après chaque tour.
    </p>
    <p>
      Pour tourner le moteur, on pourrait à nouveau utiliser le 17 mm en haut,
      ou mieux encore, réinstaller temporairement le boulon de poulie de
      vilebrequin et le tourner gentiment, sans appliquer trop de force, pour
      pouvoir le retirer à nouveau lorsqu'on a fini.
    </p>
    <p>
      J'ai également réinstallé la petite plaque de guide en forme d'assiette.
      Attention, sur cette photo, je l'ai installée à l'envers&nbsp;! Ce n'est
      pas important pour le moment, mais comme on le verra bientôt, elle va dans
      l'autre sens.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/45-crankshaft-pulley-bolt.jpg"
      alt="Réinstallation du boulon de poulie de vilebrequin pour tourner le moteur"
    ></clickable-image>

    <p>
      Il est maintenant temps de tourner. Toujours dans le sens horaire&nbsp;!
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/46-testing-timing.jpg"
      alt="Test du temps avec 2 rotations complètes"
    ></clickable-image>

    <p>
      Si après les deux tours nos marques sont toujours alignées, alors la
      courroie est bel et bien installée correctement.
    </p>
    <p>
      Si le temps n'est plus aligné, il faut que vous retiriez la courroie,
      corrigiez la position des poulies (en tournant les poulies le moins
      possible pour éviter d'endommager le moteur) et recommenciez les étapes
      depuis «&nbsp;<a href="#9">9. Installer la nouvelle courroie</a>&nbsp;».
    </p>
    <p>
      Mais si vous avez été patient et attentionné, il ne devrait pas y avoir de
      problème de temps.
    </p>

    <h4>Réinstallation des caches</h4>
    <p>
      Retirez le boulon de poulie de vilebrequin en tapant gentiment votre
      breaker bar dans le sens inverse. L'alignement des marques n'est plus
      importante maintenant. Installez le guide en forme d'assiette avec le côté
      en relief vers l'extérieur (voir photo).
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/47-cup-like-spacer.jpg"
      alt="Guide en forme d'assiette"
    ></clickable-image>

    <p>
      Il est à nouveau temps de passer un coup d'air comprimé pour s'assurer que
      toute cette zone est propre et le reste jusqu'à ce qu'on la referme avec
      les caches.
    </p>
    <p>
      Vous pouvez ensuite remettre le second cache. Notez que sur cette photo,
      j'ai inséré un boulon en haut à droite, alors que le boulon qui s'y insert
      est un plus long qui passe au travers des deux caches.
    </p>
    <p>J'ai aussi oublié le boulon en bas à gauche.</p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/48-install-timing-covers-1.jpg"
        alt="Second cache réinstallé"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/49-install-timing-covers-2.jpg"
        alt="Premier cache réinstallé"
      ></clickable-image>
    </div>

    <p>Tout cela est réglé lorsque je mets le premier cache&nbsp;!</p>
    <p>
      Ce cache étant installé, il ne sera plus retiré pour les 10 prochaines
      années&nbsp;! C'est quand même fou, quand on y pense.
    </p>
    <p>
      Le manuel dit d'utiliser 6 Nm pour les boulons des caches. J'ai simplement
      serré à la main avec mon cliquet.
    </p>

    <h3 id="10">
      10. Installer le boulon de poulie de vilebrequin (Crankshaft pulley bolt)
    </h3>
    <p>
      Il est temps de réinstaller la poulie et le boulon. La poulie se glisse
      super facilement dedans. À se demander pourquoi elle était si difficile à
      retirer. Si elle ne vous semble pas au fond, tapez dessus avec un marteau
      et un grand morceau de bois pour répartir la force et ne pas l'abîmer.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/50-crankshaft-pulley-reinstalled.jpg"
      alt="La poulie de vilebrequin réinstallée"
    ></clickable-image>

    <p>
      Vous remarquerez que notre encoche n'est plus alignée avec le zéro. Pour
      ma part, je sais que ce décalage est exactement celui que j'ai laissé
      lorsque j'ai retiré le boulon de poulie de vilebrequin après avoir fait
      tourner le moteur 2 fois pour tester le temps. Donc tout ceci est normal.
    </p>
    <p>
      Si vous êtes maniaques et que vous avez réaligné précisément avant de
      retirer le boulon, alors l'encoche devrait également être parfaitement
      alignée.
    </p>
    <p>
      Maintenant le boulon. Seulement, il va falloir le resserrer à 220 Nm de
      force !
    </p>
    <p>
      On va donc à nouveau utiliser l'ancienne courroie auxiliaire. Voici
      comment nous allons la coincer cette fois.
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/51-redo-tangle-1.jpg"
        alt="Première vue de l'emmêlement"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/52-redo-tangle-2.jpg"
        alt="Seconde vue de l'emmêlement"
      ></clickable-image>
    </div>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/53-redo-tangle-3.jpg"
        alt="Troisième vue de l'emmêlement"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/54-crank-pulley-bolt-redo-diagram.jpg"
        alt="Diagramme de l'emmêlement"
      ></clickable-image>
    </div>

    <p>Serrez un minimum l'écrou central de la petite poulie.</p>
    <p>
      Cette fois, aucun risque d'endommager le moteur, car pour serrer, on doit
      le faire tourner dans le bon sens. Malheureusement, je n'ai pas assez de
      place pour utiliser mon adaptateur dynamométrique dans cette situation.
      J'ai donc tiré sur la barre autant que possible, tout en me souvenant
      combien j'avais dû tirer dessus pour desserrer le boulon. Si vous avez de
      quoi calculer, mettez 220 Nm.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/55-torque-down-crankshaft-pulley-bolt.jpg"
      alt="Serrage au couple du boulon de poulie de vilebrequin"
    ></clickable-image>

    <p>
      Une fois que c'est bon, on peut retirer cette courroie pour la dernière
      fois. Desserrez l'écrou de la petite poulie, puis tournez le moteur dans
      le mauvais sens le moins possible jusqu'à ce que la tension sur la
      courroie soit assez faible pour la retirer.
    </p>

    <h3 id="11">11. Réinstaller le reste</h3>

    <h4>Auxiliaire 1</h4>
    <p>
      Réinstallez les deux pièces de la poulie de la pompe à eau. J'ai essayé de
      serrer les 4 écrous en même temps que le boulon de poulie de vilebrequin,
      mais la poulie glissait tout de même (c'est pour ça que vous la voyez déjà
      en place sur les photos précédentes). Donc les installer maintenant n'est
      pas pire.
    </p>
    <p>
      Pour les serrer, maintenez la poulie à la main et mettez le plus de force
      possible dessus.
    </p>
    <p>
      Ensuite, placez la nouvelle courroie auxiliaire 1. Impossible de vous
      tromper, c'est la plus fine qu'il nous faut et c'est la seule qui rentrera
      là.
    </p>
    <p>
      Ensuite, serrez les 2 boulons (depuis dessous, comme avant) tout en
      maintenant à la main une pression vers le bas sur la poulie de gauche.
      Vérifiez que la tension soit à peu près similaire à la tension originale,
      que vous avez tâtée au début.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/56-redo-first-aux.jpg"
      alt="Première courroie auxiliaire réinstallée"
    ></clickable-image>

    <h4>Auxiliaire 2</h4>
    <p>
      Ici pareil, placez la nouvelle courroie. C'est la plus longue des deux
      restantes.
    </p>
    <p>
      Serrez les 3 boulons avec la tension voulue. Tirez l'alternateur vers le
      haut pour augmenter la tension.
    </p>

    <h4>Auxiliaire 3</h4>
    <p>
      Et finalement, la troisième courroie. Desserrez au maximum la poulie
      centrale, placez la courroie d'abord sur la poulie de vilebrequin en bas,
      puis glissez-là gentiment sur la poulie de droite. Ensuite, serrez le long
      boulon pour augmenter la tension. Finalement, serrez l'écrou central.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/57-redo-second-and-third-aux.jpg"
      alt="Seconde et troisième courroies auxiliaires réinstallées"
    ></clickable-image>

    <p>
      C'est tout bon&nbsp;! Vous remarquerez que j'ai été très léger dans mes
      détails cette fois-ci. Mais je pense sincèrement que c'est une partie
      simple du travail. Il suffit de prendre son temps pour placer les
      courroies, puis les serrer jusqu'à ce qu'elles soient à la même tension
      que précédemment.
    </p>

    <h4>Radiateur</h4>
    <p>
      Replacez le radiateur. Reconnectez tout ce qui a été défait précédemment.
      Rien de complexe ici. N'oubliez pas le connecteur en bas à côté du tuyau
      et vérifiez que le robinet de vidange est bien resserré. L'alimentation
      des radiateurs étant retenu par des colliers de serrage, il va falloir en
      mettre des nouveaux. Il en faut trois.
    </p>

    <div class="flex flex-wrap lg:flex-no-wrap">
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/58-cable-ties-1.jpg"
        alt="Les deux premiers colliers de serrages"
      ></clickable-image>
      <clickable-image
        src="/images/articles/2020-05-06-is200-timing-belt/59-cable-ties-2.jpg"
        alt="Le troisième collier de serrage"
      ></clickable-image>
    </div>

    <h4>Bougies d'allumage et bobines</h4>
    <p>
      Replacez les bougies après avoir vérifié que la zone soit propre. Utilisez
      de l'air comprimé si nécessaire pour re-nettoyer la zone avant de retirer
      votre papier ménage des trous.
    </p>
    <p>Les bougies doivent être serrées à 17.5 Nm.</p>
    <p>
      Placez les bobines par-dessus et reconnectez-les. Vous devriez utiliser 6
      Nm pour les boulons.
    </p>
    <p>Vous pouvez ensuite remettre le cache.</p>

    <h4>Entrée d'air</h4>
    <p>
      Réinstallez la boîte à air principale. N'oubliez pas le capteur de
      température d'air. Je vous conseille d'attendre avant de remettre la
      seconde partie de l'entrée d'air (celle qui vient par-dessus le
      radiateur). C'est plus facile de vérifier s'il y a des fuites de liquide
      de refroidissement si cette pièce n'est pas installée.
    </p>

    <h4>Pare-chocs</h4>
    <p>
      Si vous n'avez rien d'autre à faire sur la voiture, vous pouvez
      réinstaller le pare-chocs.
    </p>

    <h4>Cache sous moteur</h4>
    <p>
      Celui-ci, je vous conseille d'attendre la tout toute fin avant de le
      remettre. C'est plus facile de voir si on a des fuites, ou de rapidement
      vérifier un truc sous la voiture s'il n'est pas réinstallé.
    </p>

    <h4>Liquide de refroidissement</h4>
    <p>
      Il faut remplir le liquide de refroidissement. Il va entrer entre 4L et
      5L. Après un démarrage de la voiture, il est possible qu'il faille en
      remettre un peu plus, car le liquide aura circulé et comblé des zones
      vides.
    </p>

    <h3 id="12">12. Test &amp; fin</h3>
    <p>
      Et bien nous y voilà. Tout est prêt. Vous devriez lancer le moteur et
      vérifier que tout va bien. Écouter les bruits, etc. Puis ensuite aller
      faire un test sur route.
    </p>
    <p>
      Je vous souhaite bonne chance si vous entreprenez ce service. Je pense
      sincèrement que c'est une expérience enrichissante. J'étais moi-même
      horrifié à l'idée de changer ma courroie et pensait le faire faire par le
      garage.
    </p>
    <p>
      Cependant, c'est vraiment accessible, et ça va vous coûter beaucoup moins
      cher, pour au final vous en apprendre des tas sur la mécanique et vous
      rendre à l'aise pour travailler sur votre voiture.
    </p>
    <p>
      <br />
    </p>
    <p>
      Sur ce, c'est la fin de cet article. Si vous avez des questions, surtout
      n'hésitez pas à les poser dans les commentaires. J'y répondrai si je peux.
      Je ne suis cependant pas un expert, et donc comme d'habitude, prenez vos
      propres responsabilités et vérifiez mes dires par vous-même.
    </p>
    <p>
      Vous pouvez maintenant vous abonner au blog par email en utilisant le
      bouton email rose au fond à gauche du site. J'utiliserai votre email
      uniquement pour vous envoyer une notification lors d'un nouvel article,
      pas d'autres conneries.
    </p>

    <clickable-image
      src="/images/articles/2020-05-06-is200-timing-belt/timing.jpg"
      alt="Sticker de maintenance de courroie"
      description="Bien sûr je n'ai pas pu m'empêcher d'utiliser le sticker en japonais"
    ></clickable-image>

    <p>
      <br />
    </p>
    <p>Bidouille</p>
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
      article: articles.fr['2020-05-06-is200-courroie-de-distribution'],
    }
  },
}
</script>
