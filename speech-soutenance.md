# Discours de soutenance — FinBank

Texte oral pour les 34 diapositives. Les diapositives de section sont des transitions courtes. Le discours principal peut tenir en environ 10 à 12 minutes, hors démonstration. Les notes finales signalent les formulations à vérifier ou à nuancer avant la soutenance.

## 01 — Couverture

Bonjour Mesdames et Messieurs les membres du jury. Je vous présente FinBank, une plateforme bancaire digitale développée chez VERMEG.

## 02 — Plan de la présentation

Je vais d'abord expliquer le contexte et la problématique, puis présenter la solution et ses besoins. Je détaillerai ensuite la démarche de conception et l'architecture, avant de parcourir les interfaces, la chaîne d'intégration et les perspectives. Je terminerai par une démonstration des principaux parcours.

## 03 — Présentation de l'organisme d'accueil

Je commence par situer brièvement le cadre professionnel du projet.

## 04 — VERMEG

VERMEG développe des solutions logicielles pour les secteurs bancaire et financier. C'est dans ce contexte que s'inscrit mon projet FinBank.

## 05 — Introduction

De nos jours, les clients souhaitent gérer leurs opérations bancaires facilement et rapidement. Pourtant, les démarches traditionnelles peuvent nécessiter un déplacement en agence, de l'attente et plusieurs formalités. Face à ces contraintes, les services bancaires évoluent vers le numérique : les clients peuvent effectuer leurs opérations depuis leurs appareils et attendent une expérience simple, accessible et sécurisée. C'est dans cette évolution que s'inscrit FinBank, une plateforme qui réunit plusieurs services bancaires dans un même espace.

## 06 — Contexte et problématique

Malgré l'évolution numérique, certaines opérations bancaires restent difficiles ou contraignantes pour les clients : les démarches peuvent manquer de simplicité et le suivi des demandes n'est pas toujours évident. À cela s'ajoute la nécessité de contrôler les opérations sensibles sans compliquer inutilement le parcours. La problématique de FinBank est donc de rendre les services plus accessibles et plus clairs, tout en préservant la sécurité et le contrôle.

## 07 — Étude de l'existant

J'ai étudié plusieurs familles de solutions : les agrégateurs financiers, les néobanques, les assistants conversationnels et les banques en ligne traditionnelles. Chacune répond à des besoins réels, mais mon analyse a fait ressortir une opportunité de réunir dans un même prototype les opérations bancaires, la validation de virements sensibles, la gestion des cartes, l'assistance documentaire et la supervision.

## 08 — Critique comparative

Cette matrice résume les critères que j'ai comparés. Elle ne signifie pas qu'aucune solution du marché ne propose ces fonctions : elle montre plutôt le positionnement retenu pour FinBank et les éléments que j'ai voulu intégrer ensemble. La valeur recherchée est de garder un parcours simple pour une opération courante et d'ajouter un contrôle humain traçable lorsque le seuil défini est dépassé.

## 09 — Solution proposée

À partir de cette analyse, je passe à la solution retenue et à la manière dont ses différents composants se complètent.

## 10 — FinBank, plateforme bancaire digitale

FinBank rassemble plusieurs parcours dans une même plateforme : la consultation des comptes, les virements, la gestion des cartes, l'assistance documentaire, l'analytique financière et les investissements. Le tableau de bord synthétise les comptes et le portefeuille ; des pages dédiées permettent d'explorer les flux et de suivre ou simuler des placements. L'objectif est de proposer une expérience cohérente, tout en appliquant des contrôles adaptés aux opérations sensibles.

## 11 — Analyse des besoins

Pour éviter de concevoir seulement une interface, j'ai distingué les rôles et les responsabilités : ce que le client peut faire, ce que l'administrateur doit superviser et ce que le système doit contrôler automatiquement.

## 12 — Besoins fonctionnels

Après la vue générale de la solution, cette diapositive précise les comportements attendus, sous forme d'exigences vérifiables. Par exemple, un virement supérieur à 5 000 TND doit rester en attente et suivre un processus de validation ; les détails de carte ne sont révélés qu'après vérification du mot de passe. Ces exigences décrivent les règles du système. Le diagramme de cas d'utilisation, présenté plus loin, montrera plutôt quels acteurs interagissent avec les fonctions.

## 13 — Besoins non fonctionnels

Au-delà des fonctionnalités, le projet doit prendre en compte la sécurité, l'intégrité des données, la confidentialité, la traçabilité, la maintenabilité et la tolérance aux erreurs. Les seuils de latence et de disponibilité affichés ici sont des objectifs ou exigences de conception, et non des mesures de performance réalisées en production. Cette distinction est importante pour présenter les résultats avec rigueur.

## 14 — Architecture et conception

Je passe maintenant des besoins à leur traduction en architecture et en modèles de conception.

## 15 — Méthodologie Scrum

J'ai retenu Scrum pour avancer par sprints, livrer régulièrement et intégrer les retours. Le cycle animé résume les étapes : définir les besoins, planifier, développer et tester, faire une revue, améliorer, puis livrer. Les autres méthodes sont comparées ici en quelques mots ; l'essentiel est le cycle de travail que j'ai appliqué au projet.

## 16 — Planning agile

Le planning répartit les travaux en cinq sprints regroupés en deux releases. La première couvre les fondations sécurisées et les services bancaires ; la seconde ajoute l'assistant, les processus BPMN, les tests et la préparation de la livraison. Cette progression permet de construire d'abord les composants métier, puis de les compléter par les mécanismes d'orchestration et de vérification.

## 17 — Cas d'utilisation et diagramme de classes

Les deux diagrammes présentent le système sous des angles complémentaires. Le diagramme de cas d'utilisation décrit les interactions entre client, administrateur et plateforme. Le diagramme de classes représente les principaux objets métier et leurs relations. Ensemble, ils relient les besoins fonctionnels à leur représentation dans le système.

## 18 — Stack et environnement

Le site utilise React et TypeScript. Le backend est développé en Java avec Spring Boot. PostgreSQL stocke les données. Redis garde temporairement certaines données, comme les comptes, pour que le backend les retrouve plus vite. Flowable suit les demandes qui doivent être vérifiées, par exemple un virement important : il les fait passer par les étapes de validation jusqu’à la décision de l’administrateur. Kafka permet aux différentes parties du système de s’échanger des événements. Docker Compose lance les services. Le service Python aide le chatbot quand Java ne trouve pas de réponse utile. Il peut chercher des informations dans sa base avec TF-IDF, une méthode qui repère les mots importants de la question. Pour les opérations bancaires, Python envoie la demande au backend Java, qui la vérifie et la traite.

## 19 — Architecture monolithique modulaire

Le backend FinBank est un monolithe modulaire Spring Boot, et non un ensemble de microservices. Ce choix réduit la complexité de déploiement et permet de garder les opérations métier dans un même contexte transactionnel. Le frontend, les services d'infrastructure et le service Python sont lancés séparément du backend. Python intervient comme renfort du chatbot lorsque Java ne produit pas de réponse utile.

## 20 — Architecture globale

Ce schéma suit une demande du client, du début à la fin. Le client se connecte, puis pose sa question. L'assistant cherche des passages utiles dans les documents et prépare une réponse avec ses sources. Si la demande doit être vérifiée, Flowable fait suivre les étapes à l'administrateur, qui prend la décision. Enfin, le système garde une trace de l'action et envoie une notification. Le backend Java garde le contrôle des opérations bancaires.

## 21 — CI/CD et déploiement

Une fois l'architecture présentée, je montre comment le projet est vérifié et préparé pour être livré.

## 22 — Pipeline CI/CD

Quand le code est envoyé sur GitHub, GitHub Actions lance les vérifications : il compile le backend, lance les tests et vérifie le frontend. SonarCloud analyse ensuite la qualité du code. Le projet peut alors créer les images Docker et les publier. Si le serveur est configuré, il peut récupérer ces images et redémarrer l'application. Les contrôles de santé vérifient ensuite que les services répondent. Les captures montrent des exemples de ces étapes ; elles ne signifient pas que FinBank est une vraie plateforme bancaire en production.

## 23 — Interfaces

Je passe aux interfaces pour illustrer les parcours tels qu'ils sont proposés aux utilisateurs.

## 24 — Dashboard et comptes

Le tableau de bord rassemble les informations principales du client, notamment ses comptes et un résumé de son portefeuille d'investissements. FinBank propose aussi une page d'analytique pour visualiser l'évolution du solde et répartir les opérations par catégorie, ainsi qu'une page dédiée au suivi et à la simulation de placements. Ce sont des fonctions complémentaires : les projections sont indicatives et les produits affichés restent ceux du prototype. La partie d'administration apporte, elle, une vue dédiée à la supervision et aux événements de sécurité.

## 25 — Virements bancaires

Le parcours commence par la saisie d'un virement. En dessous du seuil, la demande suit le traitement courant du prototype. Au-dessus de 5 000 TND, elle passe par un processus de validation : l'opération reste en attente de décision et peut être examinée par un administrateur. Cette démonstration porte sur les règles et l'orchestration de FinBank, pas sur un règlement interbancaire réel.

## 26 — Cartes et dévoilement sécurisé

Le client peut consulter ses cartes et demander l'émission, la modification ou la clôture d'une carte. Quand une demande nécessite une intervention, elle est suivie par le support et examinée par un administrateur. Je montre aussi le contrôle qui protège l'accès aux détails sensibles ; les données de carte sont simulées. La page d'aide et de support complète ce parcours, mais je ne lui consacre pas une diapositive séparée.

## 27 — Workflows BPMN

Je prends le virement sensible comme exemple : le BPMN organise les étapes de validation et l'administrateur prend la décision d'approuver ou de rejeter. Le support suit les demandes de cartes et les changements sensibles sous forme de tickets. Le projet prévoit aussi des processus pour les signalements de fraude et les modifications de données ; je les garde en complément pour ne pas surcharger la présentation. L'idée importante est de tracer les demandes et de garder une décision humaine lorsque la situation l'exige.

## 28 — Assistant IA et RAG

L'assistant aide le client à trouver une réponse dans les documents d'aide et les règles disponibles. Si sa demande nécessite une action ou une vérification humaine, elle peut être orientée vers le support et suivie comme un ticket. La recherche documentaire contextualise la réponse ; l'assistant ne prend pas de décision bancaire et ne remplace pas les validations du backend. Je garde le détail des méthodes de recherche pour les questions techniques.

## 29 — Conclusion et perspectives

Je termine par le bilan du projet et les évolutions qui pourraient être envisagées.

## 30 — Conclusion

Pour conclure, FinBank réunit dans un même prototype des parcours bancaires digitaux, des validations orchestrées par BPMN, la gestion des demandes de cartes et une assistance documentaire. Mon travail a porté sur la conception et l'intégration de ces composants, ainsi que sur la réalisation des parcours présentés. L'idée centrale est de concilier simplicité d'utilisation et contrôle des opérations sensibles. FinBank reste toutefois un prototype académique : il ne réalise pas de véritables transactions bancaires et ne constitue pas un service prêt pour la production.

## 31 — Perspectives

Les perspectives présentées — authentification forte, détection de fraude par apprentissage automatique, application mobile, Open Banking, montée en charge et observabilité — sont des évolutions possibles, pas des fonctions déjà livrées. Elles nécessiteraient notamment des validations de sécurité, des intégrations externes et une étude des exigences réglementaires et opérationnelles.

## 32 — Remerciements

Je vous remercie pour votre attention. Je remercie également VERMEG, Mme Feriel JRIDI et M. Haythem SAOUDI pour leur accompagnement. Je vais maintenant illustrer les principaux parcours par une démonstration, puis je répondrai à vos questions.

## 33 — Démonstration

Je vais compléter la présentation par une démonstration guidée, en utilisant exclusivement des comptes et des données de test.

## 34 — Démonstration live

Je commence par l'authentification et le tableau de bord client. Si le temps le permet, je montre brièvement l'analytique des opérations et la page d'investissements, en précisant que les projections sont indicatives. Je présente ensuite un virement courant, puis un virement supérieur à 5 000 TND afin d'illustrer son passage en attente et son traitement dans la console administrateur. Je montre également la demande de carte, le dévoilement sécurisé de données fictives et l'assistant documentaire. Si un service nécessaire à la démonstration n'est pas disponible, je le signalerai et j'utiliserai une capture préparée plutôt que de présenter le scénario comme une exécution réussie.

## Repères à vérifier avant la soutenance

- **Diapositives 03, 09, 14, 23, 29 et 33 :** ce sont des transitions ; une phrase suffit, ou tu peux les passer si le temps manque. La diapositive 21 sur la CI/CD peut aussi être résumée en une phrase.
- **Si le temps est limité :** concentre-toi sur 01–02, 04–08, 10–12, 15–20, 22, 24–28, 30–32 et 34. Tu peux passer directement les transitions 03, 09, 14, 23, 29 et 33. Ne supprime pas leurs fichiers : saute-les dans la présentation pour ne pas casser la navigation numérotée.
- **Aide et support :** pas besoin d'une slide supplémentaire. Cite la page d'aide en une phrase avec la slide 28, et le ticket suivi par l'administrateur avec les slides 26–27.
- **BPMN :** garde la slide 27 comme exemple principal avec le virement. Ne rajoute pas deux slides séparées pour fraude et modification des données : garde leurs diagrammes en annexes/backup et ne les mentionne à l'oral que si tu peux expliquer et démontrer leur parcours.
- **Préparation technique Flowable et agent Python :** une fiche séparée détaille les trois processus BPMN, les classes Java qui les relient au moteur et les fichiers du service Python : `guide-technique-flowable-agent.txt`.
- **Étude de l'existant :** présenter les résultats comme le périmètre de votre comparaison, pas comme une affirmation absolue sur toutes les solutions du marché.
- **Audit :** préférer « journalisation » ou « piste d'audit » à « immuable », sauf preuve technique d'une immutabilité garantie.
- **Virements :** parler de virement interne au prototype et de validation par seuil ; ne pas laisser entendre qu'il est connecté à un réseau bancaire interbancaire réel.
- **Diapositive 13 :** 99,9 % et moins de 200 ms sont des objectifs affichés, pas des mesures validées.
- **Diapositives 18 et 28 :** distinguer la recherche TF-IDF présente dans le projet de l'intégration RAG principale du backend Java, qui utilise des embeddings locaux et une recherche vectorielle. Ne pas laisser entendre que l'assistant décide ou exécute des opérations bancaires.
- **Diapositive 19 :** parler de monolithe modulaire pour le backend, pas de microservices.
- **Diapositive 22 :** le dépôt sépare CI et SonarCloud ; le déploiement distant n'est exécuté que si les secrets et l'hôte sont configurés. Ne pas annoncer une mise en production ou un pipeline vert sans vérifier une exécution récente.
- **Tests :** le rapport final documente un état antérieur de validation. Le dernier lancement local de `mvnw test` dans l'environnement examiné a échoué au démarrage de Flowable avec le repli H2 quand Docker n'était pas disponible. Ne pas annoncer les anciens chiffres comme un résultat actuel sans relancer et vérifier la suite dans l'environnement de soutenance.
- **Cartes :** présenter l'émission comme une demande accompagnée d'un justificatif d'identité et soumise à une décision administrative. Les demandes de modification et de clôture passent également par le traitement prévu ; ne pas les décrire comme une création immédiate.
- **Démonstration :** préparer des données fictives et une capture/vidéo de secours ; ne jamais utiliser de vraies coordonnées bancaires, de vrais CVV ni de données personnelles.

## Petit glossaire des termes techniques

Ces définitions servent de repères pour préparer les réponses du jury ; elles ne sont pas à lire pendant le discours.

- **API :** un moyen pour deux parties d'un logiciel d'échanger des informations.
- **Backend :** la partie qui applique les règles et traite les demandes.
- **BPMN :** une façon de dessiner les étapes d'un processus, par exemple les vérifications d'un virement.
- **Docker Compose :** un outil qui démarre plusieurs services du projet ensemble.
- **Embedding :** une représentation numérique qui aide à comparer le sens d'une question et celui d'un document.
- **Flowable :** l'outil qui suit les étapes d'un processus BPMN, comme la validation d'un virement important.
- **Kafka :** un outil qui transmet des événements entre les différentes parties du système.
- **PostgreSQL :** le système qui stocke les données de l'application.
- **RAG documentaire :** une méthode où l'assistant cherche d'abord des passages dans des documents, puis s'en sert pour rédiger sa réponse.
- **Redis :** une mémoire rapide qui garde certaines données pendant un temps limité pour les retrouver plus vite.
- **TF-IDF :** une méthode qui repère les mots importants d'une question et aide à trouver les textes qui en parlent.
- **React et TypeScript :** les outils utilisés pour construire l'interface web.
- **Spring Boot :** un outil Java utilisé pour construire le backend et ses API.
- **Service Python :** un service qui aide le chatbot à comprendre certaines demandes et à chercher des réponses ; Java garde le contrôle des opérations bancaires.

## Réponse possible au jury — conception et intégration du BPMN

**Réponse développée :**

« J’ai modélisé le processus avec un outil BPMN, puis exporté le modèle sous forme de fichier `.bpmn`. Ce fichier est un XML structuré : il décrit les étapes, les décisions, les transitions et les tâches humaines ou automatiques. Il ne s’agit donc pas seulement d’une image du diagramme.

Dans FinBank, les fichiers BPMN sont placés dans les ressources du backend. Flowable est configuré pour les charger au démarrage et les enregistrer comme définitions de processus. Quand le backend détecte une opération sensible — par exemple un virement qui dépasse le seuil configuré — le code Java démarre le processus par sa clé et lui transmet les variables nécessaires, comme l’identifiant du client, le montant et l’identifiant de la transaction. Flowable suit ensuite l’instance et rend la tâche de validation disponible à l’administration. La décision est transmise au moteur pour poursuivre le workflow et conserver son historique.

En résumé, le diagramme décrit le processus, le fichier `.bpmn` le représente sous une forme exploitable, Flowable l’exécute et le backend Java le déclenche et lui fournit le contexte métier. »

**Réponse courte si le jury veut une explication simple :**

« Je dessine le processus en BPMN, puis je l’exporte en fichier `.bpmn`, qui est un XML exécutable et pas seulement une capture. Le backend Spring Boot charge ce fichier avec Flowable. Lorsqu’une opération sensible est détectée, le code Java démarre le processus et transmet ses données ; Flowable suit alors les étapes et expose la validation à l’administrateur. »

**Si le jury demande un exemple concret :**

« Pour un virement dépassant le seuil configuré, le service métier démarre `transferValidationProcess` avec les informations de la transaction. Le workflow mène à une tâche de validation destinée au groupe administrateur. Flowable conserve l’état et l’historique du processus ; le règlement présenté reste celui du prototype, pas un transfert interbancaire réel. »

**Repères techniques pour répondre aux questions :**

- Le diagramme principal du virement se trouve dans `back/banking-api/src/main/resources/processes/transfer-validation-camunda.bpmn`.
- La configuration Flowable charge les fichiers `.bpmn` du dossier `classpath:/processes/`.
- `TransactionValidationService` décide quand déclencher le processus et appelle `FlowableService` avec la clé `transferValidationProcess` et les variables métier.
- `FlowableService` démarre l’instance par sa clé ; les tâches d’administration sont recherchées dans le groupe `admin`.
- Les diagrammes de fraude et de modification des données existent également dans le dossier des processus. Ne dis pas qu’ils sont tous déclenchés par les mêmes parcours : explique leur intégration uniquement si tu peux montrer et justifier leur déclenchement réel.
- Si on te demande la différence entre « fait à partir du diagramme » et « intégré » : le diagramme est la modélisation ; le fichier BPMN est son artefact exploitable ; l’intégration est le chargement par Flowable, le déclenchement depuis Java, le passage des variables et le traitement des tâches et décisions.
