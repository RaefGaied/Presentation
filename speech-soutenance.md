# Discours de soutenance — FinBank

Texte oral à adapter à votre rythme. Compter environ 10 à 12 minutes pour les diapositives, puis 3 à 5 minutes pour la démonstration. Les diapositives de section servent de transition : les commenter brièvement.

## 01 — Couverture

Bonjour à toutes et à tous. Je m'appelle Raef GAIED et je vais vous présenter mon projet de fin d'études, réalisé dans le cadre de mon parcours à l'École Polytechnique de Sousse, avec VERMEG comme organisme d'accueil. Ce projet s'intitule FinBank : une plateforme bancaire digitale qui réunit des services bancaires, des processus de validation et un assistant documentaire basé sur l'intelligence artificielle. Je remercie mes encadrants, M. Haythem SAOUDI et Mme Feriel JRIDI, pour leur accompagnement.

## 02 — Plan de la présentation

Je commencerai par présenter le contexte et les limites des solutions existantes. J'expliquerai ensuite les besoins et la solution proposée, avant de détailler la conception, l'architecture et les technologies. Je terminerai par les interfaces, le bilan et les perspectives, puis je vous montrerai les principaux parcours de l'application.

## 03 — Organisme d'accueil

Je commence par situer le cadre professionnel dans lequel ce projet a été réalisé.

## 04 — VERMEG

VERMEG est l'organisme d'accueil de ce projet. L'entreprise est spécialisée dans les logiciels destinés aux secteurs bancaire et financier, notamment les solutions bancaires, les marchés de capitaux et la transformation digitale. Les chiffres affichés ici donnent un aperçu de son implantation internationale. Ce contexte est particulièrement pertinent pour un projet comme FinBank, où la sécurité, la traçabilité et les processus métier sont essentiels.

## 05 — Cadre général de FinBank

FinBank est une plateforme bancaire digitale conçue pour réunir, dans une même expérience, des services destinés au client et des outils de supervision destinés à l'administrateur. L'idée directrice est de ne pas traiter séparément les opérations bancaires, leurs règles de validation et l'accès à l'information. Les prochaines diapositives expliquent pourquoi cette intégration est utile.

## 06 — Contexte et problématique

Avant de décrire la solution, je vais présenter le constat de départ : les plateformes bancaires offrent des services utiles, mais les besoins de l'utilisateur et ceux de contrôle ne sont pas toujours réunis dans un même parcours.

## 07 — Étude de l'existant

J'ai comparé plusieurs catégories de solutions : les applications d'agrégation financière, les néobanques, les assistants conversationnels et les banques en ligne traditionnelles. Cette comparaison ne vise pas à dire qu'une solution est mauvaise ; chacune répond à des besoins précis. Elle met plutôt en évidence une opportunité : combiner gestion des comptes, virements soumis à validation, gestion sécurisée des cartes, recherche documentaire assistée par IA et audit.

## 08 — Critique comparative

Cette matrice résume les fonctionnalités examinées. Le constat retenu pour FinBank est qu'il existe un compromis entre la simplicité d'utilisation et le contrôle des opérations sensibles. La proposition consiste à rapprocher ces deux dimensions : offrir des parcours simples pour les opérations courantes, et ajouter une validation explicite et traçable lorsque le montant d'un virement dépasse le seuil défini.

## 09 — Solution FinBank

À partir de ce constat, je passe maintenant à la solution proposée et à ses principaux composants.

## 10 — Solution proposée

FinBank comprend un portail client et une console d'administration. Le portail couvre notamment la consultation des comptes, les virements et les cartes. Pour un virement supérieur à 5 000 dinars tunisiens, le système peut déclencher un circuit d'approbation avec Flowable. La plateforme prévoit également un assistant documentaire, un contrôle d'accès par rôles et une piste d'audit. Les valeurs de performance affichées sont des objectifs de conception ; je ne les présente pas comme des mesures garanties.

## 11 — Analyse des besoins

Pour construire cette solution de façon cohérente, j'ai d'abord distingué les besoins selon les utilisateurs et les responsabilités du système.

## 12 — Besoins fonctionnels

Trois acteurs principaux se dégagent. Le client consulte ses comptes, réalise des opérations et gère ses cartes. L'administrateur supervise les utilisateurs, les alertes et les demandes qui nécessitent une décision. Enfin, le système détecte le dépassement du seuil, déclenche le workflow approprié et conserve la trace des opérations. L'assistant RAG complète ces parcours en aidant à retrouver des informations issues de documents.

## 13 — Besoins non fonctionnels

Les fonctionnalités doivent respecter des exigences transversales : authentification et autorisations, intégrité des données, confidentialité, traçabilité, maintenabilité et tolérance aux erreurs. Les valeurs de disponibilité ou de latence indiquées sur cette diapositive sont des cibles de conception, pas des résultats de mesure de production. La protection des données de cartes et le traitement local du modèle sont aussi des points importants de la conception.

## 14 — Architecture et conception

Je passe maintenant de l'expression des besoins à la manière dont FinBank a été conçue et organisée.

## 15 — Méthodologie Scrum

J'ai retenu Scrum parce que son fonctionnement par itérations permet de découper le travail, de prioriser les fonctionnalités et d'évaluer régulièrement les livrables. La diapositive compare cette approche à XP, RUP et 2TUP. Concrètement, le cycle présenté part du backlog, passe par la planification et le développement, puis se poursuit avec la revue, la rétrospective et la livraison.

## 16 — Planification des sprints

Le planning répartit le projet en cinq sprints et deux releases. Les premiers sprints couvrent le socle sécurisé et les services bancaires. Les suivants ajoutent l'assistant IA et les workflows BPMN. Le dernier rassemble les tests, les corrections et la livraison. Cette progression apporte d'abord les fondations avant d'intégrer les fonctionnalités plus transversales.

## 17 — Cas d'utilisation et diagramme de classes

Cette diapositive propose deux niveaux de lecture. Le diagramme de cas d'utilisation montre les interactions entre les acteurs et FinBank ; le diagramme de classes présente la structure des objets métier et leurs relations. Je peux passer d'une vue à l'autre pour illustrer le lien entre ce que le système permet de faire et la manière dont ces éléments sont organisés.

## 18 — Technologies et environnement

Le projet s'appuie notamment sur React et TypeScript pour le portail, Spring Boot et Java pour l'API, PostgreSQL pour les données, Redis, Flowable et Docker Compose. Pour l'assistant local, j'utilise Ollama avec le modèle Qwen 2.5 7B. La recherche documentaire RAG utilise TF-IDF et la similarité cosinus pour retrouver les passages pertinents. Mon poste de développement est un Lenovo modèle 82K1, sous Windows 11 Famille Mono Langue, version 10.0.22631, avec un AMD Ryzen série 7000, un circuit AMD Radeon intégré, une carte NVIDIA, 16 Go de mémoire vive et un SSD de 1 To. Je n'ai pas utilisé Claude ni AWS pour ce projet.

## 19 — Architecture modulaire

Cette comparaison permet d'expliquer l'intérêt de séparer les responsabilités : les composants sont plus faciles à comprendre, à faire évoluer et à tester. Pour être précis sur l'implémentation, le backend de FinBank est un monolithe modulaire Spring Boot ; je ne le présente donc pas comme un ensemble de microservices indépendants. L'architecture conserve néanmoins une séparation entre les modules métier et les composants d'infrastructure.

## 20 — Architecture globale

Voici la vue d'ensemble. Le client utilise l'interface React, qui communique avec l'API Spring Boot. PostgreSQL stocke les données, Redis sert de cache et Flowable gère les processus BPMN. Le service Python contribue au traitement IA et documentaire. Docker Compose facilite le lancement coordonné des différents composants. Les mécanismes d'accès et de journalisation traversent cette architecture.

## 21 — CI/CD et déploiement

Après la conception, je vais montrer comment le projet est vérifié et préparé pour être livré.

## 22 — Pipeline CI/CD

Le pipeline GitHub Actions automatise plusieurs contrôles : compilation et tests du backend, vérification et compilation du frontend, puis construction et publication d'images Docker lorsque les conditions du workflow sont réunies. Une étape de déploiement distant peut être exécutée si les paramètres d'hébergement requis sont configurés. Le schéma illustre ce parcours ; je distingue bien cette automatisation des tests d'une garantie que le service tourne en permanence en production.

## 23 — Interfaces utilisateur

Je passe maintenant aux interfaces. Je vais présenter les principaux parcours depuis le point de vue du client, puis les outils de contrôle disponibles pour l'administrateur.

## 24 — Dashboard et comptes

Cette vue illustre le portail client et la supervision sécurité. L'objectif est de rendre les informations principales accessibles rapidement, tout en gardant une vue dédiée aux événements et à leur traçabilité. Pendant la démonstration, je pourrai montrer le parcours réellement disponible dans l'application.

## 25 — Virements bancaires

Voici le parcours d'un virement important. Le client saisit sa demande ; lorsque le seuil configuré est dépassé, le traitement n'est plus simplement celui d'une opération courante : il passe par un circuit d'approbation Flowable. Cette séparation rend la décision plus visible et permet de conserver le suivi du processus.

## 26 — Cartes et dévoilement sécurisé

Cette interface concerne la gestion des cartes : création, blocage et affichage contrôlé des informations sensibles. Le point essentiel est de ne pas afficher ces données sans nécessité et de pouvoir tracer les actions associées. Je montrerai également comment cette partie s'intègre à la supervision.

## 27 — Workflows administrateur

La console administrateur rassemble les demandes à traiter et le suivi du processus BPMN. L'administrateur peut examiner un virement sensible et prendre une décision, par exemple l'approuver ou le rejeter. Le diagramme Flowable aide à comprendre les étapes du workflow et les responsabilités associées.

## 28 — Assistant IA et RAG

L'assistant vise à répondre aux questions en s'appuyant sur les documents et règles disponibles, plutôt que de produire une réponse sans contexte documentaire. Le principe RAG consiste à rechercher les passages pertinents, puis à les fournir au modèle pour formuler une réponse avec des références. Dans mon projet, le modèle utilisé est Qwen 2.5 7B exécuté localement avec Ollama.

## 29 — Conclusion et perspectives

Je termine la présentation par le bilan du travail et les pistes d'amélioration possibles.

## 30 — Conclusion

FinBank met en commun des services bancaires digitaux, des validations BPMN et un assistant documentaire. Le travail a permis de concevoir les parcours, de structurer les composants et de réaliser les interfaces et fonctionnalités présentées. Le principal apport est de relier l'expérience client aux besoins de contrôle et de traçabilité. Le projet reste une plateforme académique de démonstration, et non un service bancaire de production.

## 31 — Perspectives

Plusieurs évolutions seraient possibles : renforcer l'authentification, étudier la détection de fraude, développer une application mobile, étendre les API d'Open Banking ou améliorer l'observabilité. Ces éléments sont des perspectives et ne font pas partie des fonctionnalités que je prétends déjà avoir livrées. Ils constitueraient des étapes pour faire évoluer la plateforme après validation de ses fondations.

## 32 — Remerciements

Je vous remercie pour votre attention et remercie à nouveau mes encadrants ainsi que VERMEG pour leur accompagnement. Avant de répondre à vos questions, je vous propose de voir une démonstration des principaux parcours de FinBank.

## 33 — Démonstration

Je passe maintenant à la démonstration en direct. Je vais suivre un scénario représentatif, en partant de l'interface client jusqu'aux fonctions d'administration et à l'assistant.

## 34 — Démonstration live

Je commence par m'authentifier et présenter le tableau de bord. Je réalise ensuite un virement sous le seuil, puis un virement supérieur à 5 000 dinars afin d'illustrer le déclenchement du workflow. Je passe dans la console administrateur pour examiner et traiter la demande, puis je montre la gestion sécurisée d'une carte et les traces d'audit. Enfin, je pose une question à l'assistant et montre comment il s'appuie sur les informations documentaires. Voilà pour la démonstration ; je suis maintenant prêt à répondre à vos questions.

## Repères pour la soutenance

- Garder les diapositives 03, 06, 09, 11, 14, 21, 23, 29 et 33 comme de courtes transitions.
- Sur la diapositive 13, présenter les chiffres comme des **exigences ou objectifs**, et non comme des mesures réalisées.
- Sur la diapositive 19, parler d'**architecture modulaire** ; le backend est un monolithe modulaire, pas une architecture de microservices.
- Sur la diapositive 22, expliquer que l'étape de déploiement distant dépend de la configuration des secrets et de l'hôte ; ne pas promettre une disponibilité 24/7.
- La démonstration doit utiliser des données de test, jamais de vraies coordonnées bancaires ou des données personnelles.
