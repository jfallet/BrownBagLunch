var data = {
    villes: [
        {
            name: "Paris",
            ville_img: "img/villes/BBL.jpg",
            lat: 48.856614,
            lng: 2.352222,

            baggers: [
                {
                    name: "Camille Roux",
                    bio: "Passionné d'entrepreneuriat et de Lean Startup • Coach en Business Model • Directeur associé de Human Coders, centre de formation pour développeur",
                    picture: "http://www.gravatar.com/avatar/29668d9eaaf486727a446f7d03c59f07.jpg?s=250",
                    websites: [
                        {title: "Conseil en Business Model", href: "http://www.camilleroux.com/formation-lean-startup-accompagnement-conseil-business/"},
                        {title: "Human Coders", href: "http://humancoders.com"},
                    ],
                    twitter: "CamilleRoux",
                    contact: "contact@camilleroux.com",
                    mail: "contact@camilleroux.com",
                    location: "Paris",
                    sessions: [
                        {
                            title: "Lean Startup",
                            summary: "Découvrez cette approche pramagtique permettant de lancer des sociétés/produits/services en un temps record"
                        }
                    ],
                    tags: ["Entrepreneuriat", "Lean Startup", "Business Model Canvas"]
                },
                {
                    name: "Serge Stinckwich",
                    bio: "Enseignant-chercheur, développeur",
                    picture: "http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/2/000/011/381/16fa99c.jpg",
                    websites: [
                        {title: "Site web", href: "http://www.doesnotunderstand.org/"}
                    ],
                    twitter: "SergeStinckwich",
                    contact: "Serge.Stinckwich@gmail.com",
                    mail: "Serge.Stinckwich@gmail.com",
                    location: "Paris",
                    sessions: [
                        {
                            title: "Introduction à Pharo",
                            summary: "Découverte de Pharo, une implémentation ouverte de Smalltalk, le langage de programmation orienté objet, dynamiquement typé et réflexif. Introduction à la syntaxe et coding dojo en Pharo."
                        }
                    ],
                    tags: ["Smalltalk", "Programmation orientée objet", "TDD", "Test"]
                },
                {
                    name: "Ameur Yannick",
                    bio: "Coach, Formateur Agile, Facilitateur",
                    picture: "http://m.c.lnkd.licdn.com/media/p/1/005/012/1d8/0d5df68.jpg",
                    websites: [
                        {title: "Site web", href: "http://www.agilenco.fr/"},
                        {title: "Blog Agile N Co", href: "http://yannick.ameur.free.fr/"},
                        {title: "LinkedIn", href: "http://fr.linkedin.com/in/yannickameur/"}
                    ],
                    twitter: "yannickAmeur",
                    contact: "yannick.ameur@gmail.com",
                    mail: "yannick.ameur@gmail.com",
                    location: "Paris",
                    sessions: [
                        {
                            title: "Rétrospective",
                            summary: "Je vous propose d'animer et faciliter votre rétrospective sur un format d'une heure."
                        },
                        {
                            title: "Serious Games",
                            summary: "Disccuter d'un thème de votre choix sur l'agilité méthodologie ou technique. Attention brainstorming collectif animer par l'utilisation d'un sérious Game."
                        },
                        {
                            title: "Coaching Personnel",
                            summary: "Envis d'être coaché ? Vous vous posez des questions sur vos projets professionnels et personnel, offrez vous une scéance de Coaching format 45mn."
                        }
                    ],
                    tags: ["Agile", "Scrum", "Scrumban","Coach","formation","formateur","lean","kanban","TDD", "Test"]
                },
                {
                    name: "François Sarradin",
                    bio: "Consultant Java et &#955; développeur",
                    picture: "http://m.c.lnkd.licdn.com/media/p/7/000/240/3bd/3dea7b4.jpg",
                    websites: [
                        {title: "Blog personnel", href: "http://kerflyn.wordpress.com/"},
                        {title: "Blog Xebia", href: "http://blog.xebia.fr/author/fsarradin"}
                    ],
                    twitter: "fsarradin",
                    contact: "<a href='http://kerflyn.wordpress.com/2013/02/06/bbl/'>Brown Bag Lunch (BBL)</a>",
                    mail: "fsarradin@gmail.com",
                    location: "Paris, Ouest parisien (+ Nantes), remote",
                    sessions: [
                        {
                            title: "A Web Framework in Scala from Scratch in One Hour",
                            summary: "(live coding - en/fr) Discover Scala through the development of an efficient small tested Web framework."
                        },
                        {
                            title: "Kata : un type Option en Java",
                            summary: "(live coding) Tests unitaires et refactoring pour un type Option en Java"
                        },
                        {
                            title: "Une alternative à AOP ?",
                            summary: "(poney / live coding / présentation) Découvrez quelle alternative la programmation fonctionnelle propose face à AOP (session jouée à Devoxx FR 2013 sous le titre \"FlatMap Zat Shit\")"
                        }
                    ],
                    tags: ["Java", "Scala", "Programmation fonctionnelle"]
                },
                {
                    name: "Nathaniel Richand",
                    bio: "Coach agile indépendant - Entrepreneur",
                    picture: "img/baggers/photo_nathaniel.jpg",
                    websites: [
                        {title: "AgileXPerience", href: "http://www.agilexperience.fr"},
                        {title: "Blog Xebia", href: "http://blog.xebia.fr/author/nrichand"},
                    ],
                    twitter: "nrichand",
                    contact: "nrichand@brownbaglunch.fr",
                    mail: "nrichand@brownbaglunch.fr",
                    location: "Paris",
                    sessions: [
                        {
                            title: "Parlons d'agilité",
                            summary: "Vous êtes en train de vous intéresser à l'agilité et vous souhaitez échanger sur le sujet? Je vous propose un mix de retour d'expérience et de discussion pour que vous puissiez bien comprendre les enjeux, l'intérêt mais également les prérequis."
                        },
                        {
                            title: "Agilité, un pas plus loin",
                            summary: "Vous avez mis en place Scrum ou Kanban (ou un mix maison) sur votre projet et vous commencer à stagner. Discutons ensemble des opportunités pour aller plus loin et franchir un nouveau cap pour sortir des produits d'exception!"
                        },
                        {
                            title: "Dojo tests unitaires et TDD",
                            summary: "Je vous propose un Dojo pour mettre en pratique des tests unitaires en Java. Je compte sur vous pour m'aider à rajouter des tests sur une application existante et qui en a bien besoin! Buzzword à découvrir : test unitaire, fest assert, mockito, TDD, pair programming, pair hero, clean test, ..."
                        },
                        {
                            title: "Plus de fun et de diversité dans vos rétrospectives",
                            summary: "Discussion sur comment bien animer une rétrospective et présentation de nombreux formats."
                        },
                        {
                            title: "Introduction au Lean Startup",
                            summary: "Présentation des concepts et de quelques outils phares du Lean Startup."
                        }
                    ],
                    tags: ["Agile"]
                },
                {
                    name: "Benjamin Moitié",
                    bio: "Coach Agile et Kanban chez Xebia",
                    picture: "https://en.gravatar.com/userimage/49452226/05626824309fa84863021ac5224a86b3.jpg",
                    websites: [
                        {title: "Blog Xebia", href: "http://blog.xebia.fr/author/bmoitie"}
                    ],
                    twitter: "benjaminmoitie",
                    contact: "benjamin.moitie@gmail.com",
                    mail: "benjamin.moitie@gmail.com",
                    location: "Paris",
                    sessions: [
                        {
                            title: "Agile, qu'est ce que c'est?",
                            summary: "Présentation de l'agilité pour répondre à toutes vos interrogations"
                        },
                        {
                            title: "Kanban et le management visuel",
                            summary: "Comment mettre en place du management visuel et Pourquoi? Une présentation des règles de base et des principes avec beaucoup d’images"
                        },
                        {
                            title: "Penser un produit en mode Agile",
                            summary: "Du Lean Start Up, en passant par la création du backlog produit, un panorama de la création d'un produit en mode agile"
                        }
                    ],
                    tags: ["Agile", "Lean Startup", "Kanban"]
                },
                {
                    name: "Matthieu Segret",
                    bio: "Co-fondateur de Human Coders. Passionné par Ruby, Ruby on Rails, l'entrepreneuriat...",
                    picture: "http://www.gravatar.com/avatar/1416faf6feeeff88c0d22164d6c9fb5c.jpg?s=250",
                    websites: [
                        {title: "Blog", href: "http://matthieusegret.com"},
                        {title: "Human Coders", href: "http://humancoders.com"},
                        {title: "Human Coders Formations", href: "http://formation.humancoders.com"}
                    ],
                    twitter: "MatthieuSegret",
                    contact: "matthieu@humancoders.com",
                    mail: "matthieu@humancoders.com",
                    location: "Paris et environs",
                    sessions: [
                        {
                            title: "Ruby",
                            summary: "Introduction au langage de programmation Ruby"
                        },
                        {
                            title: "Ruby on Rails",
                            summary: "Présentation de Ruby on Rails, le framework web le plus connu du monde Ruby"
                        },
                        {
                            title: "Comment recruter un bon développeur ?",
                            summary: "Comment bien définir son besoin ? Quels moyens pour recruter son prochain développeur ? Comment bien rédiger une offre d'emploi ? Où la publier ? Comment donner envie aux développeurs de travailler dans sa société ? Comment améliorer sa marque employeur ?"
                        }
                    ],
                    tags: ["Ruby", "Ruby on Rails", "Entrepreneuriat", "Recrutement", "Formation"]
                },
                {
                    name: "Mathilde Lemée",
                    bio: "Ingénieur R&amp;D - Terracotta",
                    picture: "img/baggers/photo_mathilde.jpeg",
                    websites: [
                        {title: "Blog personnel", href: "http://www.java-freelance.fr/"}
                    ],
                    twitter: "mathildelemee",
                    contact: "prenom.nom@yahoo.fr",
                    mail: "mathilde.lemee@yahoo.fr",
                    location: "Paris, La Défense, Banlieue",
                    sessions: [
                        {
                            title: "Cache & BigData",
                            summary: "Différents sujets : Terracotta, ehcache, clustering, scalabilité, concepts avancés sur le cache ..."
                        },
                        {
                            title: "Les tests",
                            summary: "Différents sujets : Selenium, FluentLenium, Mise en place de Selenium, Byteman ..."
                        },
                        {
                            title: "Le mobile",
                            summary: "Premier pas avec Corona SDK, REX sur 6 mois de dev et de marketing d'applis mobile (http://www.aetys.fr)"
                        }
                    ],
                    tags: ["Cache", "Big Data", "Test", "Mobile", "Java"]
                },
                {
                    name: "David Gageot",
                    bio: "Professional Geek - Freelance",
                    picture: "http://gravatar.com/avatar/f0887bf6175ba40dca795eb37883a8cf?s=256",
                    websites: [
                        {title: "Blog personnel", href: "http://blog.javabien.net/"}
                    ],
                    twitter: "dgageot",
                    contact: "david@gageot.net",
                    mail: "david@gageot.net",
                    location: "Paris, La Défense, (France/Etranger selon mes déplacements)",
                    sessions: [
                        {
                            title: "Du Legacy au Cloud en moins d’une heure",
                            summary: "Live coding sur les techniques de refactoring par les tests et démontrant comment déployer rapidement sur le Cloud."
                        },
                        {
                            title: "Kitten FaceMash – Marre des frameworks, oui aux bons outils",
                            summary: "Live coding sur le développement d'un site web en TDD, sans framework mais une combinaison de bonnes bibliothèques."
                        },
                        {
                            title: "Mockito – Ecrire des tests simples et peu sensibles au refactoring",
                            summary: "Slides démontrant l’utilisation de la bibliothèque Mockito. L’accent est mis sur la forte tolérance au refactoring par rapport aux mocks codés à la main."
                        },
                        {
                            title: "Introduction à Git",
                            summary: "Slides présentant les avantages de Git. En particulier la grande liberté laissée aux équipes, la tolérance au refactoring, l’utilisation dans l'analyse de régressions."
                        },
                        {
                            title: "Let’s make these tests run faster",
                            summary: "Slides présentant des techniques pour accélérer les tests unitaires/fonctionnels. Le but étant de passer tout un build en quelques minutes afin d’avoir le feedback le plus court possible."
                        },
                        {
                            title: "Outils de test avancés",
                            summary: "Slides présentant des outils pour écrire des tests plus simples, plus clairs, plus rapides. (JUnit4 Rules, Infinitest, FestAssert...)"
                        }
                    ],
                    tags: ["Code", "Test", "Git", "Outils", "Refactoring"]
                },
                {
                    name: "Tugdual Grall",
                    bio: "Technical Evangelist at Couchbase",
                    picture: "https://secure.gravatar.com/avatar/aab9ac774f61c5d9bf143b5a1bfe901b.png",
                    websites: [
                        {title: "Blog personnel", href: "http://tugdualgrall.blogspot.com"}
                    ],
                    twitter: "tgrall",
                    contact: "tugdual@gmail.com",
                    mail: "tugdual@gmail.com",
                    location: "Nantes, Paris, Rennes et toute l'Europe",
                    sessions: [
                        {
                            title: "Introduction au NoSQL avec Couchbase",
                            summary: "Après une introduction rapide sur le NoSQL, et l'explication de problèmes résolus par ces bases de données, je me ferais un plaisir de vous presenter la solution Couchbase 2.0. Couchbase Server 2.0. Couchbase est une base de données NoSQL orientée Document développée en Open Source. Cette présentation s'appuie principalement sur des démonstrations, du live coding et se fait dans un mode questions/réponses"
                        },
                        {
                            title: "BigData, NoSQL... ou Hadoop et Couchbase",
                            summary: "Pourquoi et comment faut-il integrer votre (future?) infrastructure BigData basée sur Hadoop avec une base NoSQL de type Couchbase?"
                        }
                    ],
                    tags: ["NoSQL", "CouchBase", "MapPeduce", "Java", "JavaScript", "NodeJS"]
                },
                {
                    name: "Romain Maton",
                    bio: "Consultant Java/Web/Agile - Freelance",
                    picture: "https://lh4.googleusercontent.com/-VcEH4WuA6XE/ThmqIx4nf_I/AAAAAAAAAso/Az2a4TtTgmA/s800/avatar_rmat0n.jpg",
                    websites: [
                        {title: "Blog personnel", href: "http://www.web-tambouille.fr/"}
                    ],
                    twitter: "rmat0n",
                    contact: "prenom.nom@gmail.com ou prenom@tamlab.fr",
                    mail: "romain.maton@gmail.com",
                    location: "La Défense et alentours uniquement",
                    sessions: [
                        {
                            title: "Tout ce que vous devez savoir sur Node.js",
                            summary: "Découvrez les bases de Node.js, son écosystème, ses atouts, ses faiblesses et tout ce que vous devez savoir du démarrage votre premier projet jusqu'à sa mise en ligne !"
                        },
                        {
                            title: "Optimiser votre site Web sur mobile",
                            summary: "Nous regarderons l'évolution de ce marché mobile, les normes existantes, les bonnes pratiques de développement mobile ainsi que les outils et frameworks qui vous permettront de sublimer votre site web pour smartphone."
                        },
                        {
                            title: "24 plugins chrono",
                            summary: "Pas de Jack Bauer dans cette session mais un développeur qui passe en revue 24 plugins pour <span style=\"text-decoration: line-through;\">sauver le monde</span> booster votre IDE !"
                        }
                    ],
                    tags: ["JavaScript", "NodeJS", "Outils"]
                },
                {
                    name: "Bernard Notarianni",
                    bio: "Créateur de logiciels et coach agile",
                    picture: "img/baggers/photo_bernard.jpg",
                    websites: [
                        {title: "LinkedIn", href: "http://fr.linkedin.com/in/notarianni/"}
                    ],
                    twitter: "notarianni",
                    contact: "prenom.nom@gmail.com",
                    mail: "bernard.notarianni@gmail.com",
                    location: "Paris, banlieue nord (St Denis..) ou ouest (La Défense...)",
                    sessions: [
                        {
                            title: "Agile...",
                            summary: "Comment passer à l'agile. Comment convaincre ses managers et/ou ses collègues. Créer un backlog, devenir product manager. Améliorer son projet agile existant. Créer une communauté de praticiens dans sa boite. Etc."
                        },
                        {
                            title: "Startup...",
                            summary: "Retour d'expérience en tant que jeune co-créateur de startup qui s'est lancé depuis début 2012. Lean Startup, l'agile et le reste in real life."
                        },
                        {
                            title: "Erlang...",
                            summary: "C'est quoi Erlang? Ca marche comment? Pourquoi je dois faire de l'Erlang?"
                        },
                        {
                            title: "Ember JS...",
                            summary: "Retour d'expérience, live coding, dojo..."
                        }
                    ],
                    tags: ["Agile", "Startup", "Erlang", "JavaScript"]
                },
                {
                    name: "Romain Linsolas",
                    bio: "Développeur Java & architecte technique à SGCIB",
                    picture: "http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/8/000/1ce/3fe/25d1ddc.jpg",
                    websites: [
                        {title: "Blog personnel", href: "http://linsolas.github.com/"}
                    ],
                    twitter: "romaintaz",
                    contact: "linsolas [at] gmail.com",
                    mail: "linsolas@gmail.com",
                    location: "La Défense et alentours",
                    sessions: [
                        {
                            title: "Industrialiser ses tests JavaScripts pour un développeur Java",
                            summary: "Où il est question de montrer que l'industrialisation du code JavaScript est aujourd'hui aussi aisée qu'en Java : frameworks de tests, interfaçage avec Maven, intégration dans Jenkins, utilisation de Sonar pour l'analyse de la qualité."
                        },
                        {
                            title: "Du JavaScript propre ? Challenge Accepted! - Avec Julien Jakubowski",
                            summary: "Ecrire du code JavaScript propre, c'est aujourd'hui possible. L'écosystème autour de ce langage a atteint une maturité suffisante pour se lancer dans le développement de larges applications basées sur ce langage. Cette présentation est un tour d'horizon de cet écosystème, pour que vous n'ayez plus peur de coder en JavaScript !"
                        }
                    ],
                    tags: ["JavaScript", "Usine logicielle"]
                },
                {
                    name: "Henri Tremblay",
                    bio: "Amateur d'algorithmie et de performance. Souvent en Java",
                    picture: "http://gravatar.com/avatar/02b547234fa2cf147e85aa1b460f2f03?s=256",
                    websites: [
                        { title: "EasyMock", href: "http://easymock.org/" },
                        { title: "Objenesis", href: "http://objenesis.org/" },
                        { title: "Blog Octo", href: "http://blog.octo.com" }
                    ],
                    twitter: "henri_tremblay",
                    contact: "htremblay [at] octo.com",
                    mail: "htremblay@octo.com",
                    location: "Paris et alentours",
                    sessions: [
                        {
                            title: "Vivre en parallèle",
                            summary: "Un petit état des lieux des utilisations possibles de la parallélisation et des technologies disponibles pour se faire."
                        },
                        {
                            title: "Lambda et génériques: Le cocktail explosif",
                            summary: "Tout ce qu'il faut savoir pour bien comprendre les génériques et surtout, comment s'en sortir avec les lambdas. Parce que les lambdas, c'est plein de génériques"
                        },
                        {
                            title: "Performance perpétuelle",
                            summary: "Mise en place de tests de performance automatisés. Pourquoi et comment"
                        },
                        {
                            title: "Discussion informelle",
                            summary: "Sur l'optimisation, EasyMock, les tests en général, les méandres de Java, le déploiement continu ou tout autre sujet qui vous passe par la tête"
                        }
                    ],
                    tags: ["Java", "Performance", "Calcul parallèle", "Optimisation", "Test"]
                },
                {
                    name: "David Pilato",
                    bio: "Technical Advocate",
                    picture: "http://www.gravatar.com/avatar/20049a614b7f6838dc87b4bc39c42079.png",
                    websites: [
                        {title: "Blog personnel", href: "http://dev.david.pilato.fr/"}
                    ],
                    twitter: "dadoonet",
                    contact: "david [at] pilato.fr",
                    mail: "david@pilato.fr",
                    location: "Régions francophones",
                    sessions: [
                        {
                            title: "Elasticsearch",
                            summary: "Vous utilisez encore des requêtes SQL pour faire des recherches ? Vos utilisateurs vous reprochent de ne pas pouvoir chercher sur toutes les rubriques ? Votre temps de réponse moyen est supérieur à la demi-seconde avec seulement quelques millions de documents ? Il vous faut 3 jours pour produire des statistiques sur vos données ? Vous rêvez d’offrir une recherche 'à la google' sur les données de votre SI ?<br/><br/>Ne cherchez plus ! Cette conférence est faite pour vous.<br/><br/>David présentera au cours de du BBL pourquoi et comment il est passé de la recherche SQL à Elasticsearch en détaillant les apports de ce moteur par rapport à une solution pure Lucene :<ul><li>Pourquoi Elasticsearch ?</li><li>L'indexation</li><li>La recherche</li><li>La collecte de données (rivers)</li><li>Les facettes et le principe de navigation par facettes</li><li>La scalabilité horizontale</li><li>L'analyse et le mapping</li><li>La percolation</li><li>La communauté</li></ul>"
                        }
                    ],
                    tags: ["ElasticSearch"]
                },
                {
                    name: "Jean-Louis Rigau",
                    bio: "Développeur Java, Cloud Addict",
                    picture: "http://m.c.lnkd.licdn.com/media/p/4/000/15f/25a/14e30e7.jpg",
                    websites: [
                        {title: "Blog Xebia", href: "http://blog.xebia.fr/author/jlrigau"},
                        {title: "LinkedIn", href: "http://fr.linkedin.com/in/jlrigau/"}
                    ],
                    twitter: "jlrigau",
                    contact: "jeanlouis.rigau@gmail.com",
                    mail: "jeanlouis.rigau@gmail.com",
                    location: "La Défense et alentours",
                    sessions: [
                        {
                            title: "Continuous Deployment avec CloudBees",
                            summary: "Déployer une application dans le Cloud depuis un simple « git push », à travers la mise en oeuvre du modèle de Continuous Deployment sur les environnements DEV@Cloud et RUN@Cloud de CloudBees."
                        },
                        {
                            title: "Blue/Green Deployment avec AWS Elastic Beanstalk",
                            summary: "Déployer simplement une application sur Amazon à l'aide d'Elastic BeanStalk, et mise en œuvre du principe de Blue-Green Deployment grâce à la fonctionnalité d’URL swapping."
                        }
                    ],
                    tags: ["Cloud", "Usine logicielle"]
                },
                {
                    name: "Frédéric Menou",
                    bio: "Développeur chez CapitaineTrain",
                    picture: "https://secure.gravatar.com/avatar/252ef00042fda3ab4cf67a36b956fa33?s=210",
                    websites: [
                        { title: "Capitaine Train", href: "http://www.capitainetrain.com/" },
                        { title: "about.me", href: "http://about.me/ptitfred" }
                    ],
                    twitter: "ptit_fred",
                    contact: "frederic.menou@gmail.com",
                    mail: "frederic.menou@gmail.com",
                    location: "Paris, proche banlieue et La Défense",
                    sessions: [
                        {
                            title: "Code review avec Git",
                            summary: "Vous utilisez Github et les PullRequests vous donnent envie ? Mais ça peut devenir compliqué quand il s'agit d'appliquer les commentaires dans le code.<br/> Je vous propose d'exploiter git à ce sujet. L'agilité ça passe aussi par la maîtrise de ses outils."
                        },
                        {
                            title: "Be a git Jedi Master",
                            summary: "Vous connaissez add -p et rebase -i ? Pas mal, mais il y a plus fort encore !<br/> Je vous propose de plonger dans les arcanes de git, les options cachées dans les manpages et tout ce que vous pourriez en faire au quotidien. Pas de magie noire, mais attention, vous ne serez plus tout à fait le même développeur !"
                        },
                        {
                            title: "Livraison Continue chez CapitaineTrain",
                            summary: "Retour d'expérience sur les mises en production chez CapitaineTrain.<br/> On parlera d'intégration continue, de code review, de release management et de mises en production transparentes.<br /> Livrer tous les jours c'est possible et c'est même assez banal !"
                        }
                    ],
                    tags: ["Git", "Usine logicielle"]
                },
                {
                    name: "Yannick Grenzinger",
                    bio: "Software Craftsman, Design Thinker, Lean Startup Advisor & Continuous Lifelong learner",
                    picture: "https://fr.gravatar.com/userimage/45029487/b60c363784b0fd99398c74086b10d8b7.png?size=200",
                    websites: [
                        { title: "ux-fr", href: "http://ux-fr.com/" },
                        { title: "About me", href: "http://about.me/yannick.grenzinger" },
                        { title: "Blog Xebia", href: "http://blog.xebia.fr/author/ygrenzinger/" },
                        { title: "Blog Objet Direct", href: "http://blog.objetdirect.com/author/ygrenzinger" }
                        
                    ],
                    twitter: "ygrenzinger",
                    contact: "yannick.grenzinger@gmail.com",
                    mail: "yannick.grenzinger@gmail.com",
                    location: "Paris et La Défense",
                    sessions: [
                        {
                            title: "La psychologie des objets de tous les jours",
                            summary: "Connaître les principes d'ergonomie issues des sciences cognitives vous permet d'améliorer l'utilisabilité de vos interfaces mais aussi de vos API et de votre code."
                        },
                        {
                            title: "Créons des produits ayant une véritable valeur!",
                            summary: "L'objectif est de présenter trois principes essentiels à la création de produits exceptionnels: le Design, la Co-création et la Mesure. En suivant ces principes, vous gagnerez une équipe motivée et efficace, un produit rentable pour la société tout en étant utile et agréable pour l'utilisateur. Vous y découvrirez aussi un méta-principe qui est à la source de toute réussite :)"
                        },
                        {
                            title: "Angular, le spectacular framework web moderne",
                            summary: "Retour d'expérience sur le framework Angular avec Testacular ainsi qu'une pointe de Yeoman et de Foundation."
                        },
                        {
                            title: "MEAN, la stack ultra-productive",
                            summary: "MongoDB, NodeJS, Express et Angular sont quatre frameworks connus pour leur efficacité en terme de développement. Or ces quatre frameworks se combinent parfaitement pour créer une stack ultra-productive permettant de valider rapidement votre prototype par exemple dans une approche Lean Startup. Tout ça avec un seul langage Javascript et un seul format de données JSON."
                        },
                        {
                            title: "Valider le problème avant de penser solution, comment faire ?",
                            summary: "Introduction à Lean Startup afin de sortir de votre immeuble et aller voir vos futur clients / utilisateurs. Je vous présenterais aussi Lean Canvas, outil que j'ai pu mettre en pratique de nombreuses fois à des conférences, au Lean Startup Workshop ou sur ma propre startup"
                        }
                        
                    ],
                    tags: ["Design", "User Experience", "Ergonomie", "Lean Startup", "AngularJS", "JavaScript", "MongoDB", "NodeJS"]
                },
                {
                    name: "Mathieu Gandin",
                    bio: "Développeur passionné, Technical Leader, Coach Agile",
                    picture: "http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/1/000/1a1/3d1/258cb42.jpg",
                    websites: [
                        { title: "Playground Change", href: "http://playgroundchange.wordpress.com/" },
                        { title: "Blog Octo", href: "http://blog.octo.com/author/mga/" }
                    ],
                    twitter: "octomga",
                    contact: "mga@octo.com",
                    mail: "mga@octo.com",
                    location: "Paris et La Défense",
                    sessions: [
                        {
                            title: "Travailler efficacement sur du code legacy",
                            summary: "C'est quoi le code legacy ? Comment commencer de le refactorer ? Quelles pratiques d'équipes peut-on mettre en place avec les développeurs pour nettoyer le code legacy ? Je vous propose d'apporter des réponses à ses sujets au cours de cette présentation illustrée avec du live-coding"
                        },
                        {
                            title: "De la User Story aux tests fonctionnels avec Cucumber",
                            summary: "Vous avez des User Story, je vous propose d'écrire ses tests fonctionnels. Petite présentation et live coding avec Cucumber."
                        },
                        {
                            title: "Le cadrage fonctionnel d'un projet agile",
                            summary: "Comment cadrer le démarrage d'un projet agile ? Sur quoi se concentrer ? Quels ateliers sont importants à jouer pour un cadrage ? Je vous présenterais mon retour d'expériences sur le sujet et partageons ensuite sur ces pratiques"
                        },
                        {
                            title: "Bonus : Groupe de lecture",
                            summary: "Si tu veux mettre en place un groupe de lecture pendant un brownbaglunch sur 'Clean Code' de Bob Martin et 'Quality Software Management' de Gerald Weinberg, je peux t'aider ..."
                        }
                    ],
                    tags: ["Code", "Refactoring", "BDD"]
                },
                {
                    name: "Sylvain Abélard",
                    bio: "Problem Solver chez Faveod",
                    picture: "img/baggers/photo_sylvain.jpg",
                    websites: [
                        { title: "Faveod", href: "http://www.faveod.com" },
                        { title: "Site perso", href: "http://maitre-du-monde.fr" }
                    ],
                    twitter: "abelar_s",
                    contact: "sylvain.abelard@gmail.com",
                    mail: "sylvain.abelard@gmail.com",
                    location: "Paris + ce qui est accessible en transports",
                    sessions: [
                        {
                            title: "Ruby",
                            summary: "Présentation de Ruby, de débutant à expert"
                        },
                        {
                            title: "Ruby on Rails",
                            summary: "Présentation de Rails, de débutant à expert"
                        },
                        {
                            title: "Known Unknowns - ce qui risque de changer dans votre projet",
                            summary: "Tous les projets changent. De toutes les règles que l'on vous jure gravées dans le marbre, certaines vont changer : tôt ou tard, radicalement ou subtilement, induisant un effort minime ou majeur. Avec la pratique, on peut avoir une intuition pour mieux chiffrer et mieux trouver les points de friction et de changement probable. Parlons de cas concrets, les vôtres ou les miens, pour améliorer cette perception."
                        },
                        {
                            title: "on demand",
                            summary: "Tout ce qui est relié à mon expertise : web, MVC, architecture logicielle, retours d'expérience..."
                        }
                    ],
                    tags: ["Ruby", "Ruby on Rails", "Architecture Logicielle"]
                },
                {
                    name: "Vincent Heuschling",
                    bio: "Fondateur d'Affini-Tech et expert BigData, NOSQL & Analytics",
                    picture: "img/baggers/photo_vhe.jpg",
                    websites: [
                        { title: "Affini-Tech", href: "http://www.affini-tech.com" },
                        { title: "Site perso", href: "http://www.vhe74.com" }
                    ],
                    twitter: "vhe74",
                    contact: "vhe@affini-tech.com",
                    mail: "vhe@affini-tech.com",
                    location: "Paris + Banlieue ouest",
                    sessions: [
                        {
                            title: "Hadoop et son écosystème",
                            summary: "Comprendre le fonctionnement d'Hadoop et de son écosystème, exemple simple de job Map/Reduce à l'appui"
                        },
                        {
                            title: "Hadoop Pig",
                            summary: "Utiliser Pig pour construire des traitements sur Hadoop. Une alternative à Map/Reduce Java beaucoup plus simple et productive."
                        },
                        {
                            title: "Développement Hadoop avec Scalding",
                            summary: "Utiliser la bibliothèque Cascading avec Scala pour construire des jobs Map/Reduce avec toutes les capacités propres à Scala."
                        },
                        {
                            title: "Bases de données NOSQL",
                            summary: "Comprendre les différences entre Redis, Cassandra, HBase et MongoDB. Quelle base pour quel usage ?"
                        }
                    ],
                    tags: ["Hadoop", "NoSQL"]
                },
                {
                    name: "Katia Aresti",
                    bio: "Développeuse - Freelance",
                    picture: "http://www.gravatar.com/avatar/04e3a46efd2e243319b1bf9f7ef316f7.png",
                    websites: [
                        {title: "Duchess France", href: "http://www.duchess-france.org/"}
                    ],
                    twitter: "karesti",
                    contact: "katia.aresti@gmail.com",
                    mail: "katia.aresti@gmail.com",
                    location: "Paris, La Défense",
                    sessions: [
                        {
                            title: "MongoDB from scratch",
                            summary: "Live coding MongoDB (avec Java). Création d'une application from scratch"
                        },
                        {
                            title: "From SQL to MongoDB",
                            summary: "Présentation formelle de MongoDB pour les développeurs. Présentation de la base de données, cas d'utilisation réels, et ensemble de bonnes pratiques"
                        },
                        {
                            title: "Gym TDD",
                            summary: "Kata TDD pour aprendre la technique de base."
                        },
                        {
                            title: "J'irai coder chez vous",
                            summary: "(Experimental) Je viens coder chez vous pendant une matinée sur une story lambda, en TDD !!"
                        }

                    ],
                    tags: ["MongoDB", "Refactoring", "Code", "Test"]
                },
                {
                    name: "Eric Lefevre-Ardant",
                    bio: "Consultant Java - Freelance",
                    picture: "img/baggers/photo_eric.jpg",
                    websites: [
                        {title: "Blog personnel", href: "http://ericlefevre.net/"}
                    ],
                    twitter: "elefevre",
                    contact: "contact@ericlefevre.net",
                    mail: "contact@ericlefevre.net",
                    location: "Paris",
                    sessions: [
                        {
                            title: "Boucles Etranges : Etranges Boucles",
                            summary: "Une promenade décousue dans les limites du code source Java, à la manière de Douglas Hofstadter. Nous parlons de code, d'apparences trompeuses, d'art et de la vie."
                        }
                    ],
                    tags: ["Java", "Code"]
                },
                {
                    name: "Guillaume Tardif",
                    bio: "Consultant Java",
                    picture: "img/baggers/photo_guillaume.jpg",
                    websites: [
                        {title: "Site", href: "http://melodiousthunkcode.fr/"}
                    ],
                    twitter: "gtardif",
                    contact: "guillaume.tardif@gmail.com",
                    mail: "guillaume.tardif@gmail.com",
                    location: "Paris",
                    sessions: [
                        {
                            title: "Boucles Etranges : Etranges Boucles",
                            summary: "Une promenade décousue dans les limites du code source Java, à la manière de Douglas Hofstadter. Nous parlons de code, d'apparences trompeuses, d'art et de la vie."
                        }
                    ],
                    tags: ["MongoDB", "Search", "Big Data", "Java", "Code"]
                },
                {
                    name: "Cyrille Martraire",
                    bio: "Développeur avec passion depuis 1999, Paris. Fondateur de la communauté Software Craftsmanship Paris, et Directeur Technique de la société Arolla",
                    picture: "http://gravatar.com/avatar/51dec3feb906404b8564a3c31d1050f3.png",
                    websites: [
                        { title: "Arolla", href: "http://www.arolla.fr" },
                        { title: "Blog perso", href: "http://cyrille.martraire.com"}
                    ],
                    twitter: "cyriux",
                    contact: "cyrillemartraire [at] gmail.com",
                    mail: "cyrillemartraire@gmail.com",
                    location: "Paris, La Défense et à proximité",
                    sessions: [
                        {
                            title: "DDD Games",
                            summary: "Découvrez quelques points essentiels de Domain-Driven Design par la pratique sous forme de petits jeux sur papier."
                        },
                        {
                            title: "Legacy Code : faire évoluer ou ré-écrire ?",
                            summary: "Comment livrer des fonctionnalités ambitieuses malgré le code existant sans aucun test ? Visite guidée au travers de retours d'expérience."
                        },
                        {
                            title: "Domain-Driven Design dans un contexte legacy",
                            summary: "Un tour d'horizon d'aspects importants de DDD sous la forme d'un retour d'expérience dans le domaine de la finance"
                        },
                        {
                            title: "Votre sujet sur-mesure",
                            summary: "Atelier sur papier, en code autour d'un kata original, présentation ou retour d'expérience sur l'un des thèmes qui me passionnent: TDD, BDD, DDD, Legacy Code, Style FP"
                        }
                    ],
                    tags: ["DDD", "BDD", "TDD", "Legacy Code", "FP-Style", "Clean Code", "Test"]
                },
                {
                    name: "Dimitri BAELI",
                    bio: "Chien de berger agile, développeur de plus de 30 ans, joyeux testeur et sérieusement ops chez LesFurets.com. Organisateur AgileTour/CodeursEnSeine à Rouen, Lean Kanban France à Paris",
                    picture: "http://gravatar.com/avatar/7f73df517fdea1028d28f39980edf441.png",
                    websites: [
                        { title: "LesFurets.com", href: "http://www.lesfurets.com" },
                        { title: "Lean Kanban France", href: "http://www.leankanban.fr"},
                        { title: "Codeurs En Seine", href: "http://www.codeursenseine.com"}
                    ],
                    twitter: "dbaeli",
                    contact: "dbaeli [at] gmail.com",
                    mail: "dbaeli@gmail.com",
                    location: "Paris, Défense, (Rouen)",
                    sessions: [
                        {
                            title: "Kanban pour les nuls",
                            summary: "Découvrez Kanban et quelques principes fondamentaux du développement en flux tiré."
                        },
                        {
                            title: "Miss i18n, Mr APT loves you !",
                            summary: "Découvrez le processing d'annotation et une façon moderne de localiser une application java via @Message"
                        },
                        {
                            title: "Mercenaire Devops replay !",
                            summary: "Un condensé de la présentation Devops Mercenaries faite à Devoxx, déploiement continu avec tests gatling, thucydides, ... work in progress"
                        }
                    ],
                    tags: ["Kanban", "Agile", "Java", "DevOps"]
                },
                {
                    name: "Guillaume LOURS",
                    bio: "Freelance, Tech lead Java & Coaching Agile. Organisateur/Membre de @NormandyAgile, @LeanKanbanFr, @DevoxxFr Track Lead",
                    picture: "http://www.gravatar.com/avatar/cb17294de56e44d18f1ab0dc966101a7.png",
                    websites: [
                        { title: "AgileIT", href: "http://www.agileit.fr" },
                        { title: "Lean Kanban France", href: "http://www.leankanban.fr"},
                        { title: "Codeurs En Seine", href: "http://www.codeursenseine.com"}
                    ],
                    twitter: "glours",
                    contact: "g [dot] lours [at] gmail.com",
                    mail: "g.lours@gmail.com",
                    location: "Paris, Défense, Rouen",
                    sessions: [
                        {
                            title: "Kanban pour les nuls",
                            summary: "Découvrez Kanban et quelques principes fondamentaux du développement en flux tiré."
                        },
                        {
                            title: "Personal Kanban, retrouvez votre efficacité",
                            summary: "Découvrez une technique de gestion de travail personnel basée sur du management visuel et la limite du travail en cours"
                        }
                    ],
                    tags: ["Kanban", "Agile", "Java", "Personal Kanban"]
                },
                {
                    name: "Antonio Goncalves",
                    bio: "Java EE et que Java EE - Freelance - Co-créateur de @ParisJUG @DevoxxFR",
                    picture: "http://agoncal.files.wordpress.com/2013/05/antonio2013square2562.jpg",
                    websites: [
                        {title: "Blog personnel", href: "http://antoniogoncalves.org/"},
                        {title: "Les bouquins que j'ai écrit", href: "http://antoniogoncalves.org/category/books/"}
                    ],
                    twitter: "agoncal",
                    contact: "prenom.nom@gmail.com",
                    mail: "antonio.goncalves@gmail.com",
                    location: "Paris intramuros... mais je veux bien faire un effort",
                    sessions: [
                        {
                            title: "Nouveautés Java EE",
                            summary: "Slides, code et discussion autour des nouveautés Java EE 7 et Java EE 6."
                        },
                        {
                            title: "Migrer vos vielles applications",
                            summary: "Vous faites du J2EE 1.4 ou du Spring et vous voulez migrer tout ou partie de vos applications, discutons-en."
                        },
                        {
                            title: "CDI",
                            summary: "Découvrez comment faire de l'injection, de l'interception, de la décoration ou de l'évenementiel avec Java EE"
                        },
                        {
                            title: "Arquillian",
                            summary: "Vous connaissez les tests unitaires et les Mocks, découvrez Arquillian pour les tests d'intégration in-container."
                        },
                        {
                            title: "Une application Java EE 6 en moins d’une heure",
                            summary: "Live coding d'une application web avec JBoss Forge, Aquillian, DeltaSpike et déployée dans JBoss, GlassFish et TomEE."
                        }
                    ],
                    tags: ["JavaEE", "J2EE", "CDI", "Arquillian"]
                },
                {
                    name: "Thierry Leriche-Dessirier",
                    bio: "Consultant freelance, intervenant sur des projets Web JEE Agile, de l'architecture et/ou du développement",
                    picture: "http://icauda.com/img/thierry3.jpg",
                    websites: [
                        {title: "Mon site", href: "http://icauda.com"}
                    ],
                    twitter: "thierryleriche",
                    contact: "thierryler@gmail.com",
                    mail: "thierryler@gmail.com",
                    location: "Paris",
                    sessions: [
                        {
                            title: "Présentation de Guava et Lombok",
                            summary: "Guava est une bibliothèque open source créée et maintenue par les équipes de Google. Inspirée des outils internes du géant, Guava propose de nombreux mécanismes (programmation fonctionnelle) pour manipuler les collections, créer des caches customisés, faciliter la gestion de la concurrence et les IOs.<br/>De son coté, Lombok est également un projet Open Source. Lombok et Lombok-pg simplifient sensiblement l'écriture de code classique (builders, delegates, etc.) et des nombreuses méthodes purement techniques et indispensables (getters, setters, hashCode, equals, etc.) qui polluent nos objets.<br/>Durant cette présentation, après un rapide constat de la verbosité de nos beans, nous feront un tour d'horizon de Lombok et Guava. Nous verrons comment ils nous aident à écrire du code concis et de qualité."
                        }
                    ],
                    tags: ["Java", "Guava", "Lombok"]
                },
                {
                    name: "Matthieu Garde",
                    bio: "Entrepreneur et pratiquant Lean Startup - Fondateur de Lean Startup France",
                    picture: "http://m.c.lnkd.licdn.com/media/p/1/000/2cb/114/006d029.jpg",
                    websites: [
                        {title: "Blog personnel", href: "http://matthieugarde.com"},
                        {title: "Lean Startup France", href: "http://leanstartupfrance.com"},
                        {title: "Lean Startup Workshop", href: "http://leanstartupfrance.com/workshop"}
                    ],
                    twitter: "matthieugarde",
                    contact: "matthieu.garde@gmail.com",
                    mail: "matthieu.garde@gmail.com",
                    location: "Paris, Banlieue, Compiègne",
                    sessions: [
                        {
                            title: "Lean Startup pour développeurs",
                            summary: "Apprenez à sortir vos projets des cartons et à amener des utilisateurs sur votre site web avec un minimum de temps et d'argent"
                        },
                        {
                            title: "Inventer et tester de nouveaux business models",
                            summary: "Une société innovante se réinvente en permanence en cherchant de nouvelles cibles et en inventant de nouveaux produits. Toutes ces innovations peuvent se tester, rapidement !"
                        },
                        {
                            title: "Comment faire de bonnes interviews clients ?",
                            summary: "Lorsqu'on construit quelque chose d'innovant, il est important de valider l'existance du problème avant de penser à la solution. Il faut donc aller voir les clients, parler avec eux et poser les bonnes questions. Pas si facile !"
                        },
                        {
                            title: "Atelier Lean Canvas",
                            summary: "Documentez votre idée, votre business model et vos hypothèses sur une seule page A4"
                        },
                        {
                            title: "Atelier Validation Board",
                            summary: "Apprenez à utiliser l'outil de référence pour aller interviewer des clients"
                        }
                    ],
                    tags: ["Lean Startup", "Entrepreneur", "Customer Development", "Validation Board", "Lean Canvas", "Running Lean"]
                },
                {
                    name: "Nicolas Martignole",
                    bio: "Développeur indépendant et passionné. Auteur du Touilleur Express, co-organisateur et fondateur de Devoxx France, fondateur de l'eXpress-Board",
                    picture: "https://fr.gravatar.com/userimage/4295265/c50510bb451992bde6f3add1a10525dd.jpg?size=256",
                    websites: [
                        {title: "Le Touilleur Express", href: "http://www.touilleur-express.fr"},
                        {title: "eXpress-Board", href: "http://www.express-board.fr"},
                        {title: "Devoxx France", href: "http://www.devoxx.fr/"}
                    ],
                    twitter: "nmartignole",
                    contact: "nicolas@touilleur-express.fr",
                    mail: "nicolas@touilleur-express.fr",
                    location: "Paris intra-muros, Est Parisien et la Défense",
                    sessions: [
                        {
                            title: "Les clefs pour réussir ses présentations techniques",
                            summary: "Nous sommes tous amenés à effectuer des présentations techniques. Que ce soit lors d'une conférence comme Devoxx France, ou en comité. Apprenez quelques techniques de présentations, comment préparer son sujet pour le CFP, ce qu'il faut faire et les pièges à éviter."
                        },
                        {
                            title: "Redis, une base NoSQL simple et puissante",
                            summary: "Découvrez Redis, son modèle de programmation, sa simplicité et des cas d'usages, basé sur mon expérience à Zaptravel."
                        },
                        {
                            title: "Scala, ce qu'il faut retenir",
                            summary: "Découvrez le langage Scala, cousin de Java. Basé sur mon expérience opérationnelle, je vous partagerai mon retour d'expérience. Comment se former, recruter et développer en Scala."
                        },
                        {
                            title: "Play2 et Scala",
                            summary: "Découverte du framework web Play2, basé sur mon travail chez Zaptravel depuis mai 2012."
                        },
                        {
                            title: "HTTP et architectures orientées Webs",
                            summary: "HTTP, HATEOAS, REST... (re)découvrez les bases du protocole HTTP et comment en tirer partie dans votre architecture logicielle."
                        },
                        {
                            title: "Zaptravel, une aventure dans le monde des startups",
                            summary: "Témoignage et retour d'expériences sur mon aventure en tant que responsable technique et développeur chez Zaptravel. Play2, Amazon, Redis, gérer des développeurs, Scala, les galères et les belles histoires d'un gars qui passe par la case Startup"
                        }
                    ],
                    tags: ["Présentation", "Startup", "Web", "Scala", "Programmation fonctionnelle", "Lean Canvas", "Running Lean"]
                },
                {
                    name: "Olivier BAZOUD",
                    bio: "Full-stack web developer, co-auteur de <a href='http://www.manning.com/templier' target='_blank'>'Spring Batch in Action'</a> (Manning)",
                    picture: "https://fr.gravatar.com/avatar/bc568a17c0916050278cee36c351187c?size=180",
                    websites: [
                        {title: "Le blog d'Olivier", href: "http://blog.bazoud.com"}
                    ],
                    twitter: "obazoud",
                    contact: "olivier.bazoud@gmail.com",
                    mail: "olivier.bazoud@gmail.com",
                    location: "Paris, Ouest parisien",
                    sessions: [
                        {
                            title: "Spring Batch",
                            summary: "Découvrez Spring Batch, sa simplicité, les concepts de bases jusqu’aux notions les plus avancées. Tout tout tout, vous saurez tout sur Spring Batch!"
                        },
                        {
                            title: "Monitoring: regarder votre application à la loupe et sous toutes les coutures!",
                            summary: "Nous verrons comment alimenter Graphite, un excellent outil de métrologie, dans une architecture java (ou autres): collectd, jmxtrans, metrics, statsd,.. afin de prendre des mesures au niveau du système, de l'applicatif, des batchs et du métier (KPI). Nous aborderons ensuite la corrélation tous ces métriques de façon très visuelle et comment réveiller vos sysadmins en cas d'urgence ;)"
                        }
                    ],
                    tags: ["Présentation", "Java", "Spring", "Batch", "Integration", "Graphite", "Monitoring", "Métrique", "KPI", "collectd", "jmxtrans", "statsd", "devops", "ops", "sysadmin"]
                },
                {
                    name: "Stéphane LANDELLE",
                    bio: "Dev Scala/Java, Directeur Technique d'eBiz, lead dev sur Gatling",
                    picture: "img/baggers/photo_slandelle.jpg",
                    websites: [
                        {title: "Gatling", href: "http://gatling-tool.org"},
                        {title: "eBiz", href: "http://ebusinessinformation.fr"}
                    ],
                    twitter: "slandelle",
                    contact: "slandelle@excilys.com",
                    mail: "slandelle@excilys.com",
                    location: "Paris et proche couronne",
                    sessions: [
                        {
                            title: "Gatling",
                            summary: "Découvrez Gatling, un outil qui vous permettra de monter des tests de charge à la fois performants, clairs et maintenables."
                        }
                    ],
                    tags: ["Présentation", "Gatling", "Test", "Stress", "Load", "Scala"]
                },
                {
                    name: "Raphaël Luta",
                    bio: "Consultant technique indépendant, web et (big) data. Performance geek.",
                    picture: "http://m.c.lnkd.licdn.com/mpr/mpr/shrink_200_200/p/1/000/06e/358/0cab12d.jpg",
                    websites: [
                        {title: "LinkedIn", href: "http://fr.linkedin.com/in/raphaelluta/"},
                        {title: "Aptiwan", href: "http://www.aptiwan.com"}
                    ],
                    twitter: "raphaelluta",
                    contact: "raphael.luta [at] aptiwan.com",
                    mail: "raphael.luta@aptiwan.com",
                    location: "Paris et proche couronne",
                    sessions: [
                        {
                            title: "Performance applicative: impact du réseau",
                            summary: "Pour des développeurs ou architectes, introduction au fonctionnement des réseaux et leur impact sur l'architecture et la performance des applications"
                        },
                        {
                            title: "Amélioration des performances d'un site web",
                            summary: "Présentation des principales contraintes limitant la performance actuelle du web, les outils de mesure et les bonnes pratiques générales à mettre en oeuvre"
                        },
                        {
                            title: "HTTP Next Generation",
                            summary: "Présentation des nouveaux protocoles du Web: SPDY, HTTP/2.0, SSE... et leurs impacts sur les sites et applications existantes pour utiliser au mieux leurs capacités"
                        },
                        {
                            title: "Mon mobile, le web et moi",
                            summary: "Les caractéristiques spécifiques du web mobile et des recommandations pour obtenir la meilleure expérience client"
                        },
                        {
                            title: "Discussions informelles",
                            summary: "Autour des problèmes web: architecture infrastructure et applicative, performance, mesure et analyse des données"
                        }
                    ],
                    tags: ["Web", "Performance", "Tuning", "Apache", "Mobile"]
                },
                {
                    name: "Loïc Knuchel",
                    bio: "Développeur freelance passionné et organisateur des @HumanTalksParis. Je m'intéresse à l'accès, la compréhension et l'exploitation des données, au web moderne et à l'expérience utilisateur",
                    picture: "https://gravatar.com/avatar/f755e6e8914df5cbaa74d30dd7de1ae2.png?size=256",
                    websites: [
                        { title: "Blog perso", href: "http://loic.knuchel.org/blog/"}
                    ],
                    twitter: "loicknuchel",
                    contact: "loicknuchel [at] gmail.com",
                    mail: "loicknuchel@gmail.com",
                    location: "Paris et à proximité",
                    sessions: [
                        {
                            title: "Des recommandations au service du business",
                            summary: "Découvrez en quoi les systèmes de recommandations peuvent être utile pour votre business. Dans cette présentation, non technique, je fais un tour rapide de ce que sont les systèmes de recommandations et de ce que l'on peut en attendre."
                        },
                        {
                            title: "Refactoring, de l'impératif au fonctionnel",
                            summary: "Dans cette présentation je ferai un refactoring de code scala écrit en mode impératif ('Java style') pour le transformer en code fonctionnel. Cela permettra de passer en revue les principales fonctionnalités des langages fonctionnels et de scala en particulier"
                        },
                        {
                            title: "Sujet sur commande",
                            summary: "Sujets autour de Java, Scala, MongoDB, Neo4j, les applications web, les systèmes de recommandation, le machine learning..."
                        }
                    ],
                    tags: ["Java", "Scala", "Web", "NoSQL", "Recommender systems", "Machine learning"]
                }
            ]
        },
        {
            name: "Toulouse",
            ville_img: "img/villes/BBL_Toulouse.jpg",
            lat: 43.604652,
            lng: 1.444209,

            baggers: [
                {
                    name: "Arnaud Tournier",
                    bio: "Archi/Dev Full stack, CEO Lte Consulting",
                    picture: "http://www.gravatar.com/avatar/3d45b77cce96b722c721267b65f2fbb5.png",
                    websites: [
                        {title: "LTE Consulting", href: "http://www.lteconsulting.fr"},
                        {title: "GWT France blog", href: "http://gwt-france.blogspot.fr/"},
                        {title: "LTE Consulting @ Developpez.com", href: "http://lteconsulting.developpez.com/"}
                    ],
                    twitter: "ltearno",
                    contact: "arnaud.tournier [at] lteconsulting [dot] fr",
                    mail: "arnaud.tournier@lteconsulting.fr",
                    location: "Toulouse et agglomération",
                    sessions: [
                        {
                            title: "GWT en général et en particulier",
                            summary: "Envie d'utiliser cet outil ? Besoin de formation ? Problèmes d'architecture, de performance ?"
                        },
                        {
                            title: "Faciliter le développement d'applications Web Hors-ligne avec GWT",
                            summary: "APIs HTML5 pour l'offline, et problématiques associées. Le tout avec l'aide de GWT"
                        },
                        {
                            title: "Retour d'expérience avec Google App Engine",
                            summary: "Envie de profiter de retours d'expérience sur App Engine pour des projets industriels ?"
                        },
                        {
                            title: "Architecture, performance, maintenabilité et satisfaction client",
                            summary: "Principes généraux sur tous ces points. Au delà du buzz agile, quelle est l'attitude à adopter pour travailler AVEC vos clients au jour le jour tout en conservant une vision à long terme pour le produit développé ?"
                        },
                        {
                            title: "Différences x86 / x64",
                            summary: "Petit tour des différences, notamment en ce qui concerne les piles d'appel et le mécanismes de gestion des exceptions. Exemple avec une bibliothèque maison de détournement d'appels..."
                        }
                    ],
                    tags: ["GWT", "AppEngine", "Architecture", "Java", "Performances", "Client"]
                },
                {
                    name: "Nicolas Deverge",
                    bio: "Facilitateur agile et développeur - ekito",
                    picture: "https://twimg0-a.akamaihd.net/profile_images/2050038189/picto.jpg",
                    websites: [
                        {title: "Blog ekito", href: "http://www.ekito.fr/people?author_name=ndeverge"}
                    ],
                    twitter: "ndeverge",
                    contact: "ndeverge [at] gmail [dot] com",
                    mail: "ndeverge@gmail.com",
                    location: "Toulouse et agglomération",
                    sessions: [
                        {
                            title: "Introduction à l'agilité",
                            summary: "Le pourquoi et le comment de l'agilité en quelques slides et petits ateliers."
                        },
                        {
                            title: "Introduction au LeanStartup",
                            summary: "Ou comment éviter de partir dans de gros dev la tête dans le guidon pour réaliser un nouveau produit dont personne n'a besoin."
                        },
                        {
                            title: "Et pourquoi pas un coding dojo ?",
                            summary: "Organisation d'un coding dojo chez vous en Scala ou Java."
                        }
                    ],
                    tags: ["Agile", "Code", "Dojo"]
                },
                  {
                    name: "Laurent Meurisse",
                    bio: "Coach Agile & Dévelopement produit pour l'entreprise & startup",
                    picture: "https://pbs.twimg.com/profile_images/2776155908/7a1460aa6728eda8e4a2ca56f425ac99.jpeg",
                    websites: [
                        {title: "Blog Perso", href: "http://laurentmeurisse.wordpress.com/"},
                        {title: "Blog ekito", href: "http://www.ekito.fr/people/?lang=fr/"}
                    ],
                    twitter: "laurentmeurisse",
                    contact: "lmeurisse@ekito.fr",
                    mail: "lmeurisse@ekito.fr",
                    location: "Toulouse, Paris, Lille",
                    sessions: [
                        {
                            title: "Startup : Lean Canvas de votre idée produit",
                            summary: "Définir le bon produit avec le Lean Canvas"
                        },
                        {
                            title: "Startup: créer son MVP",
                            summary: "Créer un premier produit minimal pour mesurer la viabilité du Lean Canvas"
                        },
                        {
                            title: "Entreprise: Vision Produit avec Impact Mapping",
                            summary: "Au lieu de définir une backlog de fonctionnalités, définissez plutot vos objectifs, et déployez des impacts."
                        },
                         {
                            title: "Entreprise: Spécification par l'exemple",
                            summary: "Pour mieux travailler collaborativement, en spécifiant et testant les objectifs produits de manière agile"
                        }
                      
                    ],
                    tags: ["Agile", "Lean Startup", "Impact Mapping"]
                },
                {
                    name: "Sylvain Wallez",
                    bio: "Architecte et développeur Java/Web/Scala freelance, startuper invétéré",
                    picture: "http://bluxte.net/archives/sylvain_wallez.png",
                    websites: [
                        {title: "Blog", href: "http://bluxte.net"}
                    ],
                    twitter: "bluxte",
                    contact: "sylvain@bluxte.net",
                    mail: "sylvain@bluxte.net",
                    location: "Toulouse et environs, ailleurs selon les déplacements",
                    sessions: [
                        {
                            title: "War stories",
                            summary: "Anecdotes vécues sur des systèmes en production, ou \"Heeeelp ! Ca se met à vibrer de partout quand on monte en régime !!!\""
                        },
                        {
                            title: "Hazelcast, le développement distribué facile",
                            summary: "Coordonner les activités dans un cluster peut sembler complexe. Hazelcast apporte des réponses simples à ces problèmes, pour une scalabilité horizontale sans peine."
                        },
                        {
                            title: "L'open source, la fondation Apache, comment ça marche ?",
                            summary: "Nous utilisons tous des produits open source. Introduction à la dynamique sociale des organisations open source, et de Apache en particulier dont je suis membre depuis 10 ans."
                        },
                        {
                            title: "Introduction à MongoDB",
                            summary: "MongoDB est parfois appelé \"le MySQL du noSQL\". Introduction aux principes de base : cas d'application, modélisation des données, capacités de montée en charge."
                        },
                        {
                            title: "Open Hardware : késako ?",
                            summary: "Arduino, imprimantes 3D, hacker spaces : le hardware fait sa révolution. Introduction à cette mouvance qui prend de l'ampleur"
                        }
                    ],
                    tags: ["NoSQL", "MongoDB", "Hardware"]
                },
                {
                    name: "Antoine Vernois",
                    bio: "Agile Software Craftsman, freelance. Fondateur de la communaute Software Craftsmanship Toulouse.",
                    picture: "https://blog.crafting-labs.fr/dotclear/images/antoine-vernois.jpg",
                    websites: [
                        {title: "Blog", href: "https://blog.crafting-labs.fr"}
                    ],
                    twitter: "avernois",
                    contact: "antoine [at] crafting-labs.fr",
                    mail: "antoine@crafting-labs.fr",
                    location: "Toulouse et environs",
                    sessions: [
                        {
                            title: "Clean Code",
                            summary: "À quoi ça sert de faire du code propre ? Et puis c'est quoi d'abord ? Comment je m'y mets ? Live code inside."
                        },
                        {
                            title: "Test unitaire, Test After, Test First et TDD",
                            summary: "Une courte introduction aux tests unitaires et aux stratégies pour les écrire. Live code inside."
                        },
                        {
                            title: "Refactoring legacy code",
                            summary: "Quelques techniques pour refactorer du code legacy avec du couplage et des dépendances fortes. Session basée sur le kata TripService. Live code inside."
                        },
                        {
                            title: "Coding Dojo",
                            summary: "Une session où c'est vous qui pratiquez. Moi, je ne fais que poser des questions :). Comme c'est vous qui allez bosser, c'est vous qui choisissez le langage :) (max 10 personnes)."
                        }
                    ],
                    tags: ["Agile", "Code", "Legacy", "TDD", "Test", "Clean Code", "Craftsmanship"]
                },
                {
                    name: "Fabrice Bournisien",
                    bio: "Responsable qualité web, spécialiste de l'automatisation de tests fonctionnels.",
                    picture: "https://si0.twimg.com/profile_images/1979322615/avatar.png",
                    websites: [
                        {title: "Blog", href: "http://web-quality.over-blog.com/"},
                        {title: "Mon CV", href: "http://www.fabricebournisien.eu"}
                    ],
                    twitter: "fabrice31",
                    contact: "fabrice.bournisien [at] gmail.com",
                    mail: "fabrice.bournisien@gmail.com",
                    location: "Toulouse et environs",
                    sessions: [
                        {
                            title: "Mise en place de tests de non régression",
                            summary: "Comment mettre en place des tests fonctionnels sur vos sites web ? Du choix des technologies à un exemple concret."
                        },
                        {
                            title: "Agilité et qualité",
                            summary: "Organisation technique et humaine pour faciliter la qualité en mode agile."
                        }
                    ],
                    tags: ["Test", "Test fonctionnel", "Scrum", "Agile", "Jenkins", "Cucumber", "Watir", "Webdriver", "Web"]
                },
                {
                    name: "Baptiste Mathus",
                    bio: "Développeur passionné, Committer OSS Mojo@Codehaus, Leader @ToulouseJUG",
                    picture: "img/baggers/bm-cul-de-poule.jpg",
                    websites: [
                        {title: "GitHub", href: "https://github.com/batmat"},
                        {title: "Blog", href: "http://batmat.net/"},
                        {title: "CV", href: "http://fr.linkedin.com/in/bmathus"}
                    ],
                    twitter: "bmathus",
                    contact: "bmathus [at] gmail.com",
                    mail: "bmathus@gmail.com",
                    location: "Toulouse et dans le coin",
                    sessions: [
                        {
                            title: "Maven - comment bien l'utiliser ?",
                            summary: "Maven est un outil de build puissant qui a révolutionné le monde du build Java. Il pose quelques principes fondateurs volontairement difficiles à contourner. Connaître ces quelques règles et principes permet de mieux l'utiliser sans subir le retour de flamme imminent lorsqu'on l'utilise hors des clous :-)."
                        },
                        {
                            title: "Git, pourquoi c'est cool ?",
                            summary: "C'est quoi ce truc dont tout le monde parle ? Pourquoi on me dit que c'est mieux que Svn ? En quoi c'est mieux ? C'est quoi les défauts ou les trucs dont il faut se méfier ?"
                        },
                        {
                            title: "Gerrit : la revue de code pour Git.",
                            summary: "Pourquoi on reverrait le code des autres ? C'est chiant à mettre en place ? et à utiliser ? Quel retour d'expérience ?"
                        }
                    ],
                    tags: ["Jenkins", "Maven", "Gerrit", "Git", "Java"]
                },
                {
                    name: "Vincent Ferries",
                    bio: "Développeur Java mais pas que - genigraph",
                    picture: "img/baggers/photo_VincentFerries.png",
                    websites: [
                        {title: "Blog genigraph", href: "http://blog.genigraph.fr/author/vferries/"}
                    ],
                    twitter: "VincentFERRIES",
                    contact: "vincent.ferries [at] gmail [dot] com",
                    mail: "vincent.ferries@gmail.com",
                    location: "Toulouse et agglomération",
                    sessions: [
                        {
                            title: "Introduction au développement Android",
                            summary: "Les fondamentaux du développement Android, comment ça marche dedans, les grands principes."
                        },
                        {
                            title: "Qu'est-ce qui change dans Java EE 6 et 7",
                            summary: "Empêtrés dans des applications J2EE Struts depuis des années, redonnez vous espoir avec un live coding qui présente les grands aspects de Java EE 6 et 7 : CDI, REST, les websockets et j'en passe."
                        },
                        {
                            title: "Coding Dojo",
                            summary: "Coding Dojo pour voir ou revoir le TDD ensemble ou adapté à la découverte d'un langage : Java, python, ruby..."
                        }
                    ],
                    tags: ["Java EE", "Android", "Dojo"]
                },
                {
                    name: "Michaël Bitard",
                    bio: "Agile Developer",
                    picture: "https://en.gravatar.com/userimage/31032000/ea9b56ad98a9475b4d8e0f107b3dc51e.png?size=200",
                    websites: [
                        {title: "Vcard", href: "http://michael.bitard.eu"}
                    ],
                    twitter: "BitardMichael",
                    contact: "bitard.michael [at] gmail [dot] com",
                    mail: "bitard.michael@gmail.com",
                    location: "Toulouse et agglomération",
                    sessions: [
                        {
                            title: "Coding Dojo Java",
                            summary: "Je souhaite que l'on échange sur nos pratiques de développement et de tests lors d'un randori.<br />Nous définirons ensemble l'objectif du coding dojo, en fonction de vos attentes."
                        },
                        {
                            title: "Et si on codait son poste de travail?",
                            summary: "Vous ne vous êtes jamais dit que vous perdiez du temps à configurer votre poste de travail?<br /> Je peux vous faire découvrir comment automatiser l'installation de vos postes de dev (Linux). Au début du BBL je ferai une présentation des outils existants, par la suite nous essaierons ensemble d'aller aussi loin que possible dans l'automatisation de votre poste."
                        }
                    ],
                    tags: ["Java", "Scrum", "XP", "TDD", "Chroot", "Ansible", "IntelliJ"]
                },
                {
                    name: "Sébastien Bordes",
                    bio: "Java Developer",
                    picture: "http://www.gravatar.com/avatar/70fedbe679de9066499f208e35b3bf1f.png?size=200",
                    websites: [
                        {title: "Blog", href: "http://blog.jrebirth.org"},
                        {title: "JRebirth", href: "http://www.jrebirth.org"}
                    ],
                    twitter: "s8bordes",
                    contact: "seb [at] jrebirth [dot] org",
                    mail: "seb@jrebirth.org",
                    location: "Toulouse et agglomération",
                    sessions: [
                        {
                            title: "JavaFX en long, en large et en travers",
                            summary: "Démonstration des fonctionnalités de JavaFX 2.2.40."
                        },
                        {
                            title: "Codons une application JavaFX avec Eclipse",
                            summary: "Démonstration par l'exemple de l'API de JavaFX."
                        },
                        {
                            title: "JRebirth, pourquoi utiliser un cadriciel applicatif",
                            summary: "Tous les bienfaits de choisir JRebirth Application Framework pour votre application."
                        }
                    ],
                    tags: ["JavaFX", "JRebirth", "Usine Logicielle", "Eclipse"]
                }
                
            ]
        },
        {
            name: "Rennes",
            ville_img: "img/villes/BBL_BZH.jpg",
            lat: 48.0686257,
            lng: -1.7253652,

            baggers: [
                {
                    name: "Nicolas De Loof",
                    bio: "Committer Maven et Jenkins, Support Engineer et évangéliste chez CloudBees",
                    picture: "img/baggers/photo_NicolasDeLoof.jpg",
                    websites: [
                        {title: "new Blog(perso);", href: "http://blog.loof.fr"},
                        {title: "CloudBees", href: "http://www.cloudbees.com"}
                    ],
                    twitter: "ndeloof",
                    contact: "nicolas.deloof@gmail.com",
                    mail: "nicolas.deloof@gmail.com",
                    location: "Rennes et alentours, possibilités sur Paris",
                    sessions: [
                        {
                            title: "Cloud Patterns",
                            summary: "Comprendre les avantages et contraintes du cloud et les patterns d'architecture associés."
                        },
                        {
                            title: "Intégration continue avec Jenkins",
                            summary: "Présentation du concept d'intégration continue, mise en oeuvre avec Jenkins et utilisations avancées."
                        },
                        {
                            title: "Games of Codes",
                            summary: "Atelier pratique : développer avec la plateforme CloudBees"
                        }
                    ],
                    tags: ["Cloud", "Usine logicielle"]
                },
                {
                    name: "Christophe Bégot",
                    bio: "Facilitateur Agile",
                    picture: "http://timwi.com/img/team/cbegot.png",
                    websites: [
                        {title: "Timwi", href: "http://timwi.com/"}
                    ],
                    contact: "cbegot@gmail.com",
                    mail: "cbegot@gmail.com",
                    location: "Rennes et alentours, possibilités sur toute la Bretagne",
                    sessions: [
                        {
                            title: "Méthodes et pratiques Agiles",
                            summary: "Présentations et échanges pour une première approche ou un appronfondissement."
                        },
                        {
                            title: "Rétrospective",
                            summary: "Dérouler une rétrospective Agile avec votre équipe."
                        },
                        {
                            title: "Coaching individuel",
                            summary: "Présentation de la démarche et sessions de coaching."
                        }
                    ],
                    tags: ["Agile", "Coaching"]
                }
            ]
        },
        {
            name: "Nantes",
            ville_img: "img/villes/BBL_Nantes.jpg",
            lat: 47.219102,
            lng: -1.551132,

            baggers: [
                {
                    name: "Cécilia Bossard",
                    bio: "Développeuse Java/J2EE, agiliste convaincue et joueuse invétérée. Membre d'Agile Nantes et de l'équipe organisatrice de l'Agile Tour nantais.",
                    picture: "http://timwi.com/img/team/cecilia.jpg",
                    websites: [
                        {title: "Timwi", href: "http://timwi.com/"}
                    ],
                    twitter: "ceciliaBossard",
                    contact: "cecilia.bossard@gmail.com",
                    mail: "cecilia.bossard@gmail.com",
                    location: "Nantes et environs. Possible à Rennes",
                    sessions: [
                        {
                            title: "Introduction aux méthodes agiles",
                            summary: "L'agilité, vous en entendez beaucoup parler, mais concrètement, qu'est ce que c'est ?"
                        },
                        {
                            title: "Jouons !",
                            summary: "Possibilité de réaliser plusieurs jeux agiles afin de découvrir l'agilité ou d'approfondir certains concepts."
                        }
                    ],
                    tags: ["Agile", "Serious Game"]
                },
                {
                    name: "Cécile Especel",
                    bio: "Développeuse puis chef de projet c'est suite à une conférence à l'Agile Tour Nantes 2010 que je m'intéresse puis me passionne pour l'agilité. ScrumMaster chez A2F j'intervient chez différents clients pour guider des équipes et des responsables métier vers plus d'agilité au quotidien. En dehors de mes activités professionnelles j'intègre en 2011 l'équipe d'Agile Nantes et participe à l'organisation des Agile Tour.",
                    picture: "http://www.cecile-especel.com/var/users/7831/avatar/8108/avatar_cp.jpg",
                    websites: [
                        {title: "A2F", href: "http://www.a2f-services.fr/"},
                        {title: "Mon CV DoYouBuzz", href: "http://www.cecile-especel.com/"}
                    ],
                    twitter: "Cecile_Especel",
                    contact: "cespecel@gmail.com",
                    mail: "cespecel@gmail.com",
                    location: "Nantes et environs.",
                    sessions: [
                        {
                            title: "Introduction aux méthodes agiles",
                            summary: "L'agilité, vous en entendez beaucoup parler, mais concrètement, qu'est ce que c'est ?"
                        },
                        {
                            title: "Jeux Agiles",
                            summary: "Animation de différents jeux agiles pour s'initier ou approfondir : Lego4Scrum, Marshmallow Challenge, ensemble de jeux courts tels que La Vache et Les Spécifications, Origami Agile etc."
                        }
                    ],
                    tags: ["Agile", "Serious Game"]
                },
                {
                    name: "Clément Delafargue",
                    bio: "Consultant, développeur, entrepreneur, λ geek",
                    picture: "http://clement.delafargue.name/profile_square.jpg",
                    websites: [
                        {title: "Clément Delafargue", href: "http://clement.delafargue.name"},
                        {title: "Tech blog", href: "http://blog.clement.delafargue.name"},
                        {title: "LinkedIn", href: "http://fr.linkedin.com/in/cdelafargue"}
                    ],
                    twitter: "clementd",
                    contact: "clement+bbl@delafargue.name",
                    mail: "clement+bbl@delafargue.name",
                    location: "Nantes et environs.",
                    sessions: [
                        {
                            title: "FP Jedi tricks",
                            summary: "Apprentissage de la programmation fonctionnelle. Live coding autour de notions fonctionnelles."
                        },
                        {
                            title: "Ma première REST API",
                            summary: "Live coding d'une petite API REST en scala"
                        },
                        {
                            title: "How I learned to stop worrying and love static typing",
                            summary: "Pourquoi et comment un bon système de type est votre meilleur ami pour écrire du code sans vous prendre la tête."
                        }
                    ],
                    tags: ["Scala", "Haskell", "Functional programming"]
                },
                {
                    name: "Geoffroy Couprie",
                    bio: "Consultant freelance en développement web et sécurité, développeur mobile, hacker",
                    picture: "http://1.gravatar.com/avatar/ed9901b9b80743c05aedf58b4f4926dd?s=256",
                    websites: [
                        {title: "Geoffroy Couprie", href: "http://geoffroycouprie.com"},
                        {title: "Unhandled Expression", href: "http://unhandledexpression.com/"},
                        {title: "Pilot SSH", href: "http://pilotssh.com/"}
                    ],
                    twitter: "gcouprie",
                    contact: "contact@geoffroycouprie.com",
                    mail: "contact@geoffroycouprie.com",
                    location: "Nantes et environs.",
                    sessions: [
                        {
                            title: "Le stockage des mots de passe",
                            summary: "Comment stocker des mots de passe de manière sécurisée? Quel impact sur l'application et les utilisateurs?"
                        },
                        {
                            title: "Introduction à la cryptographie",
                            summary: "La cryptographie n'est pas qu'une science mathématique. C'est un outil pratique pour des problèmes de confiance, de confidentialité, etc.<br />Je vous présenterai les idées menant à la conception d'un protocole sécurisé, et comment je choisis un algorithme pour y répondre."
                        },
                        {
                            title: "Optimisation SSL",
                            summary: "SSL est probablement déployé sur vos serveurs, mais avez-vous pensé à renforcer sa configuration? A l'accélérer?<br />Je vous fournirai une série d'astuces et d'outils pour mieux sécuriser un serveur TLS et en obtenir une performance intéressante."
                        },
                        {
                            title: "Quick tips of Web Security",
                            summary: "Les navigateurs récents ont intégré des fonctionnalités utiles pour la sécurité des applications web, qui sont souvent faciles à mettre en place.<br />Présentation de quelques failles classiques, et comment les corriger facilement."
                        }
                    ],
                    tags: ["Sécurité", "Cryptographie", "SSL", "Performance"]
                },
                {
                    name: "Cédric Champeau",
                    bio: "Committer sur le langage Groovy, accessoirement geek",
                    picture: "https://dl.dropboxusercontent.com/u/20288797/minimoi2.jpg",
                    websites: [
                        {title: "Blog", href: "http://jroller.com/melix"}
                    ],
                    twitter: "CedricChampeau",
                    contact: "cedric.champeau@gmail.com",
                    mail: "cedric.champeau@gmail.com",
                    location: "Nantes et environs. Possibilités sur Paris.",
                    sessions: [
                        {
                            title: "Les androïdes rêvent-ils de Gradle ?",
                            summary: "Gradle est un système de build nouvelle génération pour la JVM combinant les avantages du scripting Ant et des conventions Maven grâce à un DSL (Domain Specific Language) élégant et extensible. Découverte de l'outil."
                        },
                        {
                            title: "Spock, le testing nouvelle génération",
                            summary: "Spock est un framework de test inspiré du BDD (Behavior Driven Development) pour la JVM. Dôté d'une syntaxe élégante et lisible, il remplace avec brio vos vieillissants JUnit et TestNG..."
                        }
                    ],
                    tags: ["Groovy", "Gradle", "Grails", "JVM", "Spock", "Test"]
                },
                {
                    name: "Xavier Seignard",
                    bio: "Dev JS front et back, bidouilleur",
                    picture: "http://drangies.fr/assets/images/me.jpg",
                    websites: [
                        {title: "Linkedin", href: "http://www.linkedin.com/in/xavierseignard"},
                        {title: "Github", href: "https://github.com/xseignard"},
                        {title: "Website", href: "http://drangies.fr/"}
                    ],
                    twitter: "xavier_seignard",
                    contact: "xavier.seignard@gmail.com",
                    mail: "xavier.seignard@gmail.com",
                    location: "Nantes",
                    sessions: [
                        {
                            title: "Build, intégration continue et qualité pour le javascript",
                            summary: "Un tour d'horizon des outils de build pour le javascript et leur mise en place: grunt, bower, istanbul, etc., et même des Makefile!"
                        },
                        {
                            title: "Créer un objet connecté",
                            summary: "Un feu tricolore qui vous donne un feedback sur votre build? Un objet connecté à l'api twitter? Challenge accepted!"
                        }
                    ],
                    tags: ["NodeJS", "Javascript", "Grunt", "Bower", "Arduino", "Raspberry Pi"]
                },
                {
                    name: "Ronan Guilloux",
                    lat: 47.219102,
                    lng: -1.551132,
                    bio: "Développeur, directeur technique en agence web, hacker souriant & enthousiaste",
                    picture: "http://projects.ez.no/var/plain_site/storage/images/ezmailhide/team/leaders/ronan_guilloux/89962-3-eng-GB/ronan_guilloux_large.jpg",
                    websites: [
                        {title: "Linkedin", href: "http://fr.linkedin.com/in/ronanguilloux"},
                        {title: "Github", href: "https://github.com/ronanguilloux"},
                        {title: "Blog", href: "http://arnolog.net/"}
                    ],
                    twitter: "arno_u_loginlux",
                    contact: "ronan.guilloux@gmail.com",
                    mail: "ronan.guilloux@gmail.com",
                    location: "Nantes",
                    sessions: [
                        {
                            title: "Construire un environnement de développement en agence web",
                            summary: "Présentation de quelques outils éprouvés pour améliorer l'organisation et la productivité en agence web : LAMP, GIT, Bitbucket, Redmine, Vagrant"
                        },
                        {
                            title: "Dans mon équipe, on est à l'aise avec GNU/Linux!",
                            summary: "Découvrir l'environnement GNU/Linux du point de vue du développeur web : travailler sous GNU/Linux, administrer son serveur web, comprendre les bases de la sécurité d'un serveur web, profiter des outils open source. Comment passer à GNU/Linux sans peine quand on travaille avec Windows ou Mac OSX."
                        },
                        {
                            title: "Git, notre nouvel outil pour versionner et partager le code (et pas que ça)",
                            summary: "Découvrir GIT pour versionner et partager le code source au sein d'une équipe. Les grands principes de bases, les commandes les plus utiles, l'utilisation au jour le jour. Présentation de quelques plateformes collaboratives : Github, Bitbucket, etc."
                        },
                        {
                            title: "VIM, mon éditeur de texte, mon couteau suisse, et mon environnement de développement",
                            summary: "Présentation de VIM, du point de vue du développeur LAMP : Les bases, la configuration simple, les plug-ins les plus utiles, l'interaction avec GIT"
                        },
                        {
                            title: "Quelques bons outils pour la qualité du code PHP",
                            summary: "phpunit, phploc, phpmd, phpcpd, pdepend, php-cs-fixer. Rendre la qualité factuelle, insérer des tests unitaires et maîtriser la non-régression, estimer et améliorer l'état d'un 'vieux' projet, se donner des objectifs et des guides pour progresser, mesurer la qualité du code et la démontrer (ou pas)."
                        },
                        {
                            title: "En équipe, organiser et partager sa veille technologique",
                            summary: "La veille techno n'est ni une activité passive ni une activité solitaire. Comment inciter une équipe à développer sa veille techno, comment la partager, comment la valoriser dans la communication de l'entreprise. Des méthodes, des outils, et du fun."
                        },
                        {
                            title: "Organiser la production et le travail d'une équipe avec Redmine",
                            summary: "Installer et configurer Redmine ; gérer les projets, les spécifications, le chiffrage, les demandes de debug et d'évolution, et intégrer le client à l'équipe projet"
                        },
                        {
                            title: "Composer et Packagist",
                            summary: "Découvrir et utiliser le package management pour PHP : Comment utiliser le versioning et la mise à jour de vos librairies tierces, comment publier vos propres packages."
                        },
                        {
                            title: "MongoDB pour le web",
                            summary: "Changer ses habitudes et expérimenter le NOSQL avec MongoDB. Dé-normaliser ses données, importer, exporter, administrer MongoDB. Découvrir les outils en ligne de commande et les interfaces graphiques. Exemples pratiques avec PHP ou NodeJS."
                        },
                        {
                            title: "Silex, micro-framewok PHP",
                            summary: "Découvrir Silex, un micro-framework utilisant des composants de Symfony2. Idéal pour créer une API ou un petit intranet. De manière optionnelle et modulaire, Silex utilise un moteur de template (Twig) et un ORM (Doctrine2)."
                        },
                        {
                            title: "vos premières aventures avec Raspberry Pi",
                            summary: "Un atelier pratique, avec plusieurs démos, pour découvrir de manière ludique le Raspberry Pi."
                        }
                    ],
                    tags: ["PHP", "NodeJS", "Silex", "MongoDB", "Raspberry Pi", "Vim", "GNU/Linux", "Git", "Vagrant", "MongoDB", "Gestion de projet", "Redmine", "Trello", "Qualité", "Méthodes", "Fun"]
                }
            ]
        },
        {
            name: "Lille",
            ville_img: "img/villes/BBL_Lille.jpg",
            lat: 50.637222,
            lng: 3.063333,
            baggers: [
                {
                    name: "Julien Jakubowski",
                    bio: "Développeur passionné, technical leader. Co-animateur du Ch'ti JUG et de l'Agile Tour Lille.",
                    picture: "http://s3.amazonaws.com/askbob/users/photos/70/preview/carree.jpg",
                    websites: [
                        { title: "Ch'ti JUG", href: "http://chtijug.org/" },
                        { title: "Blog Octo", href: "http://blog.octo.com/" }
                    ],
                    twitter: "jak78",
                    contact: "jja@octo.com",
                    mail: "jja@octo.com",
                    location: "Métropole lilloise, région parisienne",
                    sessions: [
                        {
                            title: "Du JavaScript propre ? Challenge accepted !",
                            summary: "Mes recettes pour écrire, sans stress, des applications JavaScript complexes. Présentation ou mise en pratique sous forme de coding dojo."
                        },
                        {
                            title: "Spring Batch : par quel bout le prendre ?",
                            summary: "En Java, quand je fais du batch : je suis à poil ? Et bien non, il y a Spring Batch. Je vous propose de vous le présenter. Et pourquoi pas coder notre premier batch ensemble."
                        },
                        {
                            title: "Les tests automatisés, ça n'est pas possible chez moi...",
                            summary: "...vraiment ? Et si on regardait ?"
                        },
                        {
                            title: "Coding dojo sur mesure",
                            summary: "Organiser un coding dojo chez vous, sur mesure. Langages Java, JavaScript, Ruby. Mise en pratique clean code, TDD, ATDD..."
                        },
                        {
                            title: "Speed consulting sur la productivité des développements",
                            summary: "Comment être plus productif ? Avoir moins de bugs ? Que faire concrètement sur mon projet pour cela ? Même le temps d'un déj, on peut trouver quelques pistes."
                        }
                    ],
                    tags: ["JavaScript", "Spring", "Test", "Dojo"]
                },
                {
                    name: "Mathieu Bolla",
                    bio: "Développeur efficient, passionné surtout par ce qui n'est pas informatique, pour tirer le meilleur parti du monde réel dans notre tout petit monde virtuel. En somme, un électronicien, photographe, forgeron, menuisier, qui fait du Java, parfois. Fondateur de GoAndCloud.it, parce que coder c'est bien, mais c'est mieux quand c'est les autres.",
                    picture: "https://www.gravatar.com/avatar/4677084da23fd41e2d21561ec111a512?s=256",
                    websites: [
                        { title: "GoAndCloud.it", href: "http://www.goandcloud.it"},
                        { title: "Mon blog (photo)", href: "http://www.mathieu-bolla.com"},
                        { title: "Le reste (mais que moi)", href: "http://about.me/mathieubolla"}
                    ],
                    twitter: "mathieubolla",
                    contact: "@mathieubolla",
                    location: "Douai, mais aussi autour de Lille, voir Paris pour les plus sympas",
                    sessions: [
                        {
                            title: "AWS Java SDK: Prise en main",
                            summary: "Amazon Web Services sonne familier pour vous, mais vous n'y avez jamais mis les pieds? Ou bien la spécification de son modèle de signature vous a donné des boutons à la 10ème tentative? Ou bien encore, vous avez laissé fuiter vos credentials dans les méandres d'EC2 étant jeune? Venez vite découvrir l'AWS Java SDK, ou comment aborder Amazon Web Services sans quitter le confort de son Maven et de son IDE favori, sur un exemple d'application 'Internet scale'"
                        },
                        {
                            title: "Thermoduino, le thermomètre Java FX / Arduino / Raspberry Pi qui ne fait pas le café",
                            summary: "Vous n'étiez pas aux conférences JavaFX / Raspberry Pi / Domotique de Devoxx France 2012? Moi, si. Petit résumé autour d'un cas pratique: Afficher la température (et la météo, et le reste) avec JavaFX sur un Raspberry Pi, et, tiens, un Arduino aussi, tant qu'on y est..."
                        }
                    ],
                    tags: ["Java", "AWS", "Amazon", "Scalabilité", "Domotique", "Embarqué"]
                }
            ]
        },
        {
            name: "Lyon",
            ville_img: "img/villes/BBL_Lyon.jpg",
            lat: 45.764043,
            lng: 4.835659,
            baggers: [
                {
                    name: "Hugo Lassiège",
                    bio: "Geek et entrepreneur. Un bon cocktail pour parler technologie et production de valeur.",
                    picture: "http://res.cloudinary.com/hopwork/image/upload/t_bigprofile/go08sv2fmb7zxdotfqyq.png",
                    websites: [
                        { title: "Blog perso", href: "http://hakanai.free.fr/" },
                        { title: "Localizeyourapps (fondateur)", href: "http://www.localizeyourapps.com/" },
                        { title: "Hopwork (co-fondateur)", href: "http://www.hopwork.com/" },
                        { title: "Lateral-Thoughts (co-fondateur)", href: "http://www.lateral-thoughts.com/" },
                        { title: "Blog sur developpez.com", href: "http://hugo.developpez.com" }
                    ],
                    twitter: "hugolassiege",
                    contact: "hlassiege+bbl@gmail.com",
                    mail: "hlassiege+bbl@gmail.com",
                    location: "Lyon",
                    sessions: [
                        {
                            title: "Le web en Java, c'est possible ?",
                            summary: "Java commence à trainer derrière lui quelques casserolles et une réputation mérité d'écosystème complexe. Pourtant sa force c'est bien le web mais avec plus de 100 frameworks web comment choisir ? Ce sera l'occasion de faire un tour d'horizon des frameworks, des approches et de comprendre pragmatiquement ce qui vous convient le mieux."
                        },
                        {
                            title: "Développer à l'âge adulte.",
                            summary: "On aborde les années 2010 et il reste encore beaucoup à faire pour que les pratiques de développement arrivent à maturité dans les entreprises. Etes-vous adulte ? Et si non quelles sont les étapes à franchir ? Quels sont les anniversaires à célébrer ? Ce sera l'occasion d'aborder non seulement les pratiques de test mais aussi la qualimétrie, le déploiement, les frontières entre développeurs et opérationnels, tout cet écosystème qui permet de délivrer de la valeur."
                        },
                        {
                            title: "Big Data, pourquoi, comment ?",
                            summary: "Au delà des buzz word, qu'entends-on par Nosql, bigdata, cloud, machine learning etc... ? Vous vous sentez dépassés ou curieux ? Vous n'êtes pas sûr d'en avoir besoin mais vous avez un doute ? Faisons déjà le point sur la réalité que recouvre ces technologies, essayons de comprendre sur vos données si vous avez de la richesse non exploitée qui pourrait en profiter."
                        },
                        {
                            title: "Organisez vos documents avec Mongo",
                            summary: "Derrière le terme Nosql se cache une multitude de base de données avec des objectifs bien distincts. Mongodb est l'une d'entre elles. Orienté document, cette base propose un modèle de requêtage riche, des bonnes performances, une très bonne scalabilité et d'autres fonctionnalités avancées (recherche full text, géocalisation, mapreduce). Mongo peut-il répondre à vos cas d'usage ? Pouvez-vous vivre sans transactions et sans contraintes relationnelles. Comment conçoit-on un schéma de données orienté document ? Comment manipule-t'on ces données ? Comment tirer parti de ces spécificités ?"
                        },
                        {
                            title: "Elastic Search, parce qu'on a toujours besoin de rechercher quelque chose",
                            summary: "Rechercher des données est sans doute ce qui se fait le plus couramment dans toutes les applications. Mais le faites-vous bien ? Etes vous capable de guider votre utilisateur pour qu'il trouve ses résultats ? Lui suggérez-vous d'autres pistes ? Ou tout simplement, pensez-vous que WHERE mon champ like '%s%' commence à être vraiment trop limité pour vos besoins ?"
                        },
                        {
                            title: "Architecture distribuées",
                            summary: "Le temps des applications monolithiques multi fonctions s'éloigne. Désormais on recherche à composer par services, on recherche la haute disponibilité, la résistance aux erreurs, le déploiement ciblé. Comment peut-on y arriver sans construire un monstre inmaintenable ? Comment faire simple tout en répondant à des problématiques complexes ? On pourra discuter d'architecture orientée message, de bonnes pratiques de déploiement, de monitoring, d'interropérabilité. Il faudra choisir car le sujet est vaste ;)"
                        }
                    ],
                    tags: ["Web", "Java", "Big Data", "MongoDB", "ElasticSearch"]
                },
                {
                    name: "Cédric Exbrayat",
                    bio: "Développe des trucs cools en Java et Javascript par passion et pour vivre. Leader du Lyon Java User Group, de la conférence Mix-it, et co-fondateur de la société Ninja Squad.",
                    picture: "http://www.gravatar.com/avatar/0f0edb7904c4eea5f1b60fba0bf88537?s=250",
                    websites: [
                        { title: "Blog", href: "http://hypedrivendev.wordpress.com/" },
                        { title: "Ninja Squad (co-fondateur)", href: "http://ninja-squad.fr/" },
                        { title: "Mix-it", href: "http://mix-it.fr" }
                    ],
                    twitter: "cedric_exbrayat",
                    contact: "contact+bbl@ninja-squad.com",
                    mail: "contact+bbl@ninja-squad.com",
                    location: "Lyon",
                    sessions: [
                        {
                            title: "Java 8 - découvrir les lambdas",
                            summary: "Les lambdas sont la fonctionnalité majeure de Java 8! Si vous voulez découvrir la programmation fonctionnelle, les nouvelles fonctions utilisables sur les collections et l'impact sur votre code de demain, ce talk est fait pour vous!"
                        },
                        {
                            title: "AngularJS - le framework javascript de demain",
                            summary: "Une plongée en douceur dans ce framework développé par Google et qui pourrait devenir le standard de demain."
                        },
                        {
                            title: "Git - l'incontournable",
                            summary: "Introduction à Git et comment en tirer partie dans votre entreprise."
                        },
                        {
                            title: "Play! Framework - fast web development",
                            summary: "Play! Framework fait aujourd’hui figure d’incontournable, utilisé aussi bien par des startups, des grands groupes et des géants du Web. Venez découvrir les concepts et la philosophie derrière ce fantastique outil, depuis les bases de la 1.2 jusqu’aux révolutions de la 2.1!"
                        },
                        {
                            title: "Apache Camel - un framework d'intégration ultralight",
                            summary: "Parce que l'on a toujours besoin de communiquer entre plusieurs applications, découvrez la puissance et la simplicité de Camel."
                        }
                    ],
                    tags: ["Java", "Lambda", "AngularJS", "JavaScript", "Play framework", "Git"]
                },
                {
                    name: "Alfred Almendra",
                    bio: "Facilitateur et accompagnateur agile et lean",
                    picture: "https://fr.gravatar.com/userimage/31482138/9a46acc84c01ac2a04e72849850fb7d3.jpg?size=250",
                    websites: [
                        { title: "Blog perso", href: "http://atelierlogiciel.wordpress.com" }
                    ],
                    twitter: "AlfredAlmendra",
                    contact: "alfred.almendra@gmail.com",
                    mail: "alfred.almendra@gmail.com",
                    location: "Lyon",
                    sessions: [
                        {
                            title: "Découvrir l'agilité",
                            summary: "Les jeux de sensibilisation permettent de se familiariser avec les valeurs et les principes agiles."
                        },
                        {
                            title: "Créer de la valeur et innover",
                            summary: "Les ateliers UX et autres jeux sérieux sont un moyen efficace de créer de la valeur et d'innover. Ils permettent notamment d'obtenir un feedback rapide avant même de coder."
                        },
                        {
                            title: "Techniques de programmation",
                            summary: "Coder proprement c'est tester d'abord et remanier souvent. Il s'agit d'une introduction aux pratiques techniques de test, de programmation, de refactoring, et de conception émergente. Format : coding dojo en Java."
                        },
                        {
                            title: "Gestion de projet en mode agile",
                            summary: "Etre agile c'est avant tout un état d'esprit. Mais pour pratiquer concrètement l'agilité, il est intéressant de mettre en place quelques rituels, et de faire appel aux \"jeux qui font le travail\"."
                        },
                        {
                            title: "Management, leadership : bienvenue au 21è siècle !",
                            summary: "Les individus ne sont pas des ressources ! Une nouvelle posture et de nouvelles pratiques permettent de soutenir la créativité et l'efficacité des équipes et des organisations agiles."
                        },
                        {
                            title: "SLA : viser l'engagement de service",
                            summary: "L'industrialisation passe par l'automatisation, mais cela ne suffit pas. Quelques pratiques simples pour challenger votre organisation."
                        },
                        {
                            title: "Entreprendre en mode agile",
                            summary: "Présentation des techniques popularisées par le Lean Startup pour construire un modèle économique de façon empirique."
                        }
                    ],
                    tags: ["Agile", "UX", "Expérience Utilisateur", "Extreme Programming", "Scrum", "Kanban", "Serious Games", "Jeux agiles", "Lean Startup", "Visual Management", "Management 3.0"]
                },
                {
                    name: "Sébastien Cogneau",
                    bio: "Développeur",
                    picture: "https://secure.gravatar.com/avatar/a36365a1874360981942f089d839d473?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
                    twitter: "SCogneau",
                    contact: "sebastien.cogneau@gmail.com",
                    mail: "sebastien.cogneau@gmail.com",
                    location: "Lyon",
                    sessions: [
                        {
                            title: "Boite à outil du développeur agile",
                            summary: "L'agilité prône un certain nombre de pratiques comme le pair programming, la revue de code et l'intégration continue. Je vous propose un tour d'horizon d'outils permettant de faciliter ces pratiques."
                        },
                        {
                            title: "Introduction à Gradle",
                            summary: "Maven a amené énormément de bonnes idées pour créer son build, Gradle capitalise sur ces pratiques pour offrir une alternative à Maven. Dans cette session pas de Maven Bashing mais une introduction à l'utilisation de Gradle au quotidien."
                        }

                    ],
                    tags: ["Jenkins", "Sonar", "Gerrit", "Git", "Bash", "RPM", "Gradle"]
                },
                {
                    name: "Emilien Pecoul",
                    bio: "Développeur indépendant, évangéliste agile, développement Microsoft",
                    picture: "http://www.gravatar.com/avatar/bc755dea1b42a84ba7b3d833097e4439.png?size=250",
                    websites: [
                        { title: "Blog perso", href: "http://ouarzy.blog4ever.com/" }
                    ],
                    twitter: "Ouarzy",
                    contact: "ouarzy@free.fr",
                    mail: "ouarzy@free.fr",
                    location: "Lyon",
                    sessions: [
                        {
                            title: "TDD by example",
                            summary: "Introduction concrète au Test Driven Development, selon le livre de Kent Beck, adapté aux technos Microsoft (Méthodes, Utilisation de MSTests ou Nunit)"
                        },
                        {
                            title: "Introduction au BDD",
                            summary: "Le Behavior Driven Development est le prolongement coté Spécification du TDD. Cette session vous montrera l'intérêt et la mise en oeuvre de cette méthode (Utilisation de SpecFlow)"
                        },
                        {
                            title: "Objectif DDD",
                            summary: "Si vous avez une méthode de développement robuste et une architecture que vous jugez correct, confrontez vous aux concepts du Domain Driven Design pour allez encore plus loin"
                        },
                        {
                            title: "Clean Code",
                            summary: "Avez vous déja pris le temps de décortiquer les pratiques du livre de l'Oncle Bob: Clean Code? Le temps d'un repas, regardons comment améliorer la qualité du code produit"
                        }
                    ],
                    tags: ["Agile", "TDD", "Test", "BDD", ".NET", "Microsoft", "Clean Code"]
                }
            ]
        },
        {
            name: "Vannes",
            ville_img: "img/villes/BBL_BZH.jpg",
            lat: 47.658236,
            lng: -2.760847,

            baggers: [
                {
                    name: "Christophe Keromen",
                    bio: "Facilitateur et accompagnateur agile et lean, co-organisateur Agile Tour Vannes",
                    picture: "http://www.gravatar.com/avatar/2898ad2474ba25b87a9326585d3a234e.png",
                    websites: [
                        {
                            title: "Blog",
                            href: "http://ckti.wordpress.com/"
                        },
                        {
                            title: "LinkedIn",
                            href: "http://fr.linkedin.com/in/christophekeromen/"
                        }
                    ],
                    twitter: "ckeromen",
                    contact: "ckeromen@ckti.com",
                    mail: "ckeromen@ckti.com",
                    location: "Vannes et Morbihan, Ouest, Paris et au-delà…",
                    sessions: [
                        {
                            title: "Agilité à la carte",
                            summary: "Vous vous posez des questions sur un sujet lié à l'agilité ? Contactez-moi, on en parle ensemble pendant 1h"
                        },
                        {
                            title: "Présentation de l'agilité",
                            summary: "Que représente l'agilité en 2013 ? Quelles tendances ? Quels écueils pour quelles réussites ?."
                        },
                        {
                            title: "Agilité hors de l'IT",
                            summary: "Présentation de l'agilité pour les non-informaticiens. Pourquoi s'y intéresser ? Quels bénéfices en attendre ? Comment s'y prendre ?"
                        },
                        {
                            title: "Des jeux pour apprendre, innover et s'améliorer",
                            summary: "Serious Games, Innovation Games, Agile Games. Comment ça se passe ? Ça sert à quoi ? Quand les utiliser ?"
                        },
                        {
                            title: "Manager agile",
                            summary: "Quelles relations avec l'équipe ? Pourquoi changer ? Quelles pratiques ? Quel positionnement ?"
                        },
                        {
                            title: "Kanban",
                            summary: "Au-delà de la représentation visuelle. Quels concepts ? Comment le mettre en oeuvre ?Comment le coupler à Scrum?"
                        },
                        {
                            title: "Product Owner",
                            summary: "Quelles sont les reponsabilités du responsable produit agile ? Comment estimer, planifier ?"
                        }

                    ],
                    tags: ["Agile", "Lean", "Kanban", "Games", "Management", "Scrum"]
                }
            ]
        },
        {
            name: "Brest",
            ville_img: "img/villes/BBL_Brest.jpg",
            lat: 48.390394,
            lng: -4.486076,

            baggers: [
                {
                    name: "Horacio Gonzalez",
                    bio: "Spaniard lost in Brittany, unconformist coder, Java craftsman, dreamer and all-around geek. Co-Founder of the FinistJUG and GDG Finistère",
                    picture: "img/baggers/photo_horacio.jpg",
                    websites: [
                        {
                            title: "Blog",
                            href: "http://lostinbrittany.org/blog/"
                        },
                        {
                            title: "LinkedIn",
                            href: "http://fr.linkedin.com/in/horaciogonzalez/"
                        }
                    ],
                    twitter: "lostinbrittany",
                    contact: "horacio.gonzalez@gmail.com",
                    mail: "horacio.gonzalez@gmail.com",
                    location: "La pointe de la Bretagne",
                    sessions: [
                        {
                            title: "AngularJS",
                            summary: "Le framework JavaScript dont tout le monde parle, dans cette présentation je vous montre pourquoi."
                        },
                        {
                            title: "Pourquoi je ne code plus en Java",
                            summary: "Depuis que je me suis mis sériousement à Groovy, je ne code plus une ligne de Java. Dans cette présentation je vous montre comment Groovy peur changer la vie du développeur Java"
                        },
                        {
                            title: "Les Web Components aujourd'hui",
                            summary: "Les Web Components débarquent. Un nouveau standard en cours d’élaboration au W3C, qui va permettre d’avoir une approche par composants au développement web. Dans cette présentation nous parlerons de ce standard en construction, de concepts comme ShadowDOM, Mutation Observers, custom elements, Model-Driven-View, Object.observe()… Nous parlerons aussi des implémentations actuelles, du projet Polymer de Google, des X-Tags de Mozilla et de comment avec AngularJS on peut déjà avoir un bon aperçu de ce que nous attend."
                        },
                        {
                            title: "La forge du développeur JavaScript moderne",
                            summary: "En 2013 JavaScript est un langage prêt pour le défi et les exigences des entreprises, avec un écosystème évolué dans lequel il y a tous les composants nécessaires dans une forge logicielle d'entreprise : des frameworks complets gérant les couches de présentation, des outils de test, de la gestion de dépendances, des outils de build et même des serveurs d'applications. Dans cette présentation j'introduis l'écosystème JavaScript actuel, en me centrant sur une panoplie d'outils qui permettent d'organiser les développements : Yeoman, Bower, Karma, Uglify..."
                        },
                        {
                            title: "Dart, le nouveau langage de Google pour le web",
                            summary: "Dans la dernière Devoxx, Google a annoncé la sortie de la version 1.0 de leur nouveau langage pour le web, Dart. Derrière cette v1 il y a deux ans de développement dans lesquels des développeurs de tout le monde ont pu collaborer pour essayer de créer un langage structuré, facile d'apprentissage pour tout développeur quel que soit son background et surtout adapté au web d'aujourd'hui. Prenant les meilleures idées de Java, JavaScript et C#, Dart se veut ce que JavaScript aurait pu être s'il avait été développé aujourd'hui."
                        },

                    ],
                    tags: ["Web", "Java", "Groovy", "JavaScript", "AngularJS", "Dart"]
                }
            ]
        },
        {
            name: "Grenoble",
            ville_img: "img/villes/BBL_Grenoble.jpg",
            lat: 45.183,
            lng: 5.717,
            baggers: [
                {
                    name: "Xavier NOPRE",
                    bio: "Développeur et agiliste - Indépendant",
                    picture: "img/baggers/photo_xavier.jpg",
                    websites: [
                        { title: "Blog", href: "http://xnopre.blogspot.fr/" }
                    ],
                    twitter: "xnopre",
                    contact: "xnopre [at] gmail.com",
                    mail: "xnopre@gmail.com",
                    location: "Grenoble, Hautes-Alpes, Aix, Marseille",
                    sessions: [
                        {
                            title: "Agilité & Scrum :",
                            summary: "Introduction aux valeurs et principes de base de l'agilité, et aux fondamentaux de Scrum.<br/>- Présentation ou discussions.<br/>- Découverte ou approfondissements"
                        },
                        {
                            title: "Ingénierie agile :",
                            summary: "Outils et méthodes pour les équipes de développement qui veulent réussir dans l'agilité<br/>- Présentation & discussions"
                        },
                        {
                            title: "Tests unitaires et TDD : la théorie :",
                            summary: "Pourquoi ? Comment ? Par où commencer ? Les pièges ? Les astuces ? etc ...<br/>- Présentation & démo"
                        },
                        {
                            title: "Tests unitaires et TDD : la pratique :",
                            summary: "Animation d'un coding-dojo 'randori' pour mettre en pratique les rudiments du TDD sur des défis simples<br/>- Atelier"
                        },
                        {
                            title: "Play Framework :",
                            summary: "Développer une application WEB en Java&nbsp;: simplicité, efficacité, et productivité&nbsp;: c'est possible ? Oui avec Play Framework&nbsp;!<br/>- Présentation et démo"
                        },
                        {
                            title: "Divers agilité ou développement Java-WEB",
                            summary: "Tous autres sujets tournant autour de l'agilité, ou du développement WEB en Java : contactez-moi et nous verrons sur quoi nous pourrons échanger !"
                        }
                    ],
                    tags: ["Java", "Web", "JavaScript", "Play", "Agile", "Scrum", "Ingénierie agile", "Test", "Tests unitaires", "TDD", "Usine logicielle", "Industrialisation" ]
                },
                {
                    name: "Laurent TARDIF",
                    bio: "CI addict, agiliste - PersistentSAS",
                    picture: "img/baggers/photo_LaurentTardif.jpg",
                    websites: [
                        { title: "Blog", href: "http://ouelcum.wordpress.com/" }
                    ],
                    twitter: "ouelcum",
                    contact: "laurent.tardif [at] persistentsas.com",
                    mail: "laurent.tardif@persistentsas.com",
                    location: "Grenoble",
                    sessions: [
                        {
                            title: "Agilité, Scrum & Kanban:",
                            summary: "Introduction aux valeurs et principes de base de l'agilité, et aux fondamentaux de Scrum.<br/>- Présentation ou discussions.<br/>- Découverte ou approfondissements"
                        },
                        {
                            title: "Integration Continue :",
                            summary: "Outils et méthodes pour les équipes de développement qui veulent réussir dans l'agilité<br/>- Présentation & discussions"
                        },
                        {
                            title: "Tests automatiques et specification executable : la pratique :",
                            summary: "Quelles strategies de tests sont possibles, et que sont les specifications executables"
                        }
                    ],
                    tags: ["Java", "Jenkins", "BDD", "Agile", "Scrum", "Kanban", "Ingénierie agile", "Test", "Tests unitaires", "Usine logicielle", "Industrialisation" ]
                }
            ]
        },
        {
            name: "Montpellier",
            ville_img: "img/villes/BBL_Montpellier.jpg",
            lat: 43.610769,
            lng: 3.876716,
            baggers: [
                {
                    name: "Camille Roux",
                    ref_ville: "Paris"
                }
            ]
        }, {
            name: "Clermont-Ferrand",
            ville_img: "img/villes/BBL_Clermont.jpg",
            lat: 45.78333,
            lng: 3.08333,
            baggers: [
                {
                    name: "Julien Muetton",
                    bio: "Developeur web passionné, freelance",
                    picture: "http://clermontech.org/images/speaker-images/themouette.jpeg",
                    websites: [
                        {title: "Github", href: "https://github.com/themouette"},
                        {title: "Clermont'ech", href: "http://clermontech.org"},
                        {title: "Site perso", href: "http://muetton.me"}
                    ],
                    twitter: "themouette",
                    contact: "julien@muetton.me",
                    mail: "julien@muetton.me",
                    location: "Clermont Ferrand et environs",
                    sessions: [
                        {
                            title: "GIT",
                            summary: "Une présentation de l'outil et des concepts associés."
                        },
                        {
                            title: "Javascript 101",
                            summary: "Introduction rapide au javascript. Tout ce qu'il faut pour démarrer dans les meilleurs conditions."
                        },
                        {
                            title: "HTTP and REST",
                            summary: "Comment développer des api RESTful."
                        },
                        {
                            title: "PHPUnit.",
                            summary: "Présentation de PHPUnit, les bonnes pratiques du test unitaire en PHP."
                        },
                        {
                            title: "CasperJS",
                            summary: "CapserJS, ou comment tester efficacement vos interfaces web."
                        }
                    ],
                    tags: ["Javascript", "PHP", "HTTP", "REST", "tests", "GIT"]
                },
                {
                    name: "William Durand",
                    bio: "Software developer, Open Source evangelist.",
                    picture: "http://fr.gravatar.com/userimage/8198086/417f6125a7549374926e4935f9272ad6.jpg?size=500",
                    websites: [
                        {title: "Blog", href: "http://williamdurand.fr"},
                        {title: "GitHub", href: "https://github.com/willdurand"},
                        {title: "Clermont'ech", href: "http://clermontech.org"}
                    ],
                    twitter: "couac",
                    contact: "william.durand1+bbl@gmail.com",
                    mail: "william.durand1+bbl@gmail.com",
                    location: "Clermont-Fd Area",
                    sessions: [
                        {
                            title: "REST APIs With Symfony2: The Right Way",
                            summary: "Comment construire une API REST avec le framework PHP Symfony2."
                        },
                        {
                            title: "Git & GitHub",
                            summary: "Présentation de Git et GitHub."
                        },
                        {
                            title: "Open Source For Dummies",
                            summary: "Qu'est-ce que l'Open Source ? Comment fait-on pour y participer ? Mais surtout, pourquoi c'est bien pour votre entreprise ?"
                        },
                        {
                            title: "Oriented Object Programming",
                            summary: "Présentation de divers concepts de programmation orientée objet permettant d'améliorer son code, avec quelques aspects philosophiques tout de même."
                        }
                    ],
                    tags: [ "PHP", "Symfony2", "HTTP", "REST", "Testing", "Git", "Puppet" ]
                }
            ]
        },  {
            name: "Bordeaux",
            ville_img: "img/villes/BBL_Bordeaux.jpg",
            lat: 44.837789,
            lng: -0.579180,
            baggers: [
                {
                    name: "Jean-Pierre Lerbscher",
                    bio: "Foundateur JavaPerf Consulting, expert performance & JEE",
                    picture: "http://www.jperf.com/images/jpl.jpg",
                    websites: [
                        {title: "Blog", href: "https://jperf.wordpress.com"},
                        {title: "Site", href: "http://www.jperf.com"}
                    ],
                    twitter: "jlerbsc",
                    contact: "jean-pierre.lerbscher@jperf.com",
                    mail: "jean-pierre.lerbscher@jperf.com",
                    location: "Bordeaux",
                    sessions: [
                        {
                            title: "Performance",
                            summary: "Comment auditer la performance d'une application"
                        },
                        {
                            title: "Audit de performance",
                            summary: "Démarrer un audit de performance (comment s'organiser, quels outils?, quelle méthodologie?)"
                        }
                    ],
                    tags: ["performance", "JEE", "java"]
                }
            ]
        }
    ]
};
