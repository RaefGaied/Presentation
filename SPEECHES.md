# Speeches pour la Présentation FinBank (20 minutes - 34 slides)

## SLIDE 01 - Page de couverture
Bonjour Messieurs les membres du jury. Je m'appelle Raef GAIED, étudiant à l'École Polytechnique de Sousse. J'ai réalisé ce projet de fin d'études au sein de l'entreprise VERMEG, sous la direction de M. Haythem SAOUDI comme encadrant académique et de Mme Feriel JRIDI comme encadrante professionnelle. Je vous présente aujourd'hui mon projet intitulé "Conception et développement d'une plateforme bancaire intelligente intégrant un agent intelligent de support client".

---

## SLIDE 02 - Plan de la présentation
Pour structurer cette présentation, j'ai adopté le plan suivant en 8 parties : l'introduction générale, le contexte et la problématique, l'analyse des besoins, la solution FinBank proposée, l'architecture et la conception, les interfaces utilisateur, le CI/CD et le déploiement, et enfin la conclusion avec les perspectives. Nous terminerons par une démonstration live de la plateforme.

---

## SLIDE 03 - Section 01 : Présentation de l'organisme d'accueil
Commençons par la première partie : la présentation de l'organisme d'accueil.

---

## SLIDE 04 - Organisme d'accueil VERMEG
J'ai effectué mon stage chez VERMEG, une entreprise leader mondial dans le secteur des solutions bancaires et financières. Fondée par M. Badreddine Ouali, VERMEG compte plus de 500 institutions clientes dans plus de 40 pays, avec un capital humain de 1300 collaborateurs. L'entreprise se positionne sur trois piliers stratégiques : les solutions bancaires, les marchés de capitaux, et la transformation digitale. Mon encadrante professionnelle, Mme Feriel Jridi, m'a accompagné tout au long de ce projet.

---

## SLIDE 05 - Introduction (Cadre général)
Passons maintenant au contexte général. La banque aujourd'hui a considérablement évolué. Nous sommes passés d'un modèle traditionnel basé sur la présence physique à une transformation numérique complète. Les clients attendent désormais des services bancaires accessibles 24h/24, sécurisés et personnalisés. Cette évolution nécessite de repenser la manière dont les banques interagissent avec leurs clients.

---

## SLIDE 06 - Section 02 : Contexte & Problématique
Cela nous amène à la deuxième partie : le contexte et la problématique.

---

## SLIDE 07 - Étude de l'existant
Pour comprendre le marché, j'ai analysé les solutions existantes. Bankin' et Linxo se concentrent sur l'agrégation et le budget. Revolut est une néobanque internationale avec des fonctionnalités avancées mais un modèle cloud fermé. Erica de Bank of America propose un assistant virtuel mais sans ancrage documentaire. N26 et BoursoBank offrent une expérience moderne mais avec des flux d'approbation rigides. Les banques traditionnelles souffrent d'applications vieillissantes et de délais manuels.

**Le problème réel :** Les clients font face à des difficultés pour effectuer des opérations sensibles en toute sécurité et avec un accompagnement intelligent. Il manque une validation claire des opérations sensibles, la confiance et la sécurité ne sont pas optimales, les assistants sont limités dans leurs réponses, la traçabilité est incomplète, et l'expérience utilisateur reste fragmentée.

---

## SLIDE 08 - Critique comparative
Cette matrice comparative met en évidence les lacunes des solutions actuelles. Si toutes proposent la gestion multi-comptes et certaines les virements instantanés, aucune ne combine de manière cohérente la validation des opérations sensibles, la sécurité renforcée des cartes, un assistant intelligent contextuel, et une traçabilité complète. FinBank réconcilie fluidité expérientielle et sécurité des opérations en intégrant ces fonctionnalités dans une plateforme unifiée.

---

## SLIDE 09 - Section 03 : Solution Proposée FinBank
Passons maintenant à la troisième partie : la solution proposée FinBank.

---

## SLIDE 10 - Solution proposée
FinBank est une plateforme bancaire digitale complète qui s'adresse à la fois aux clients et aux gestionnaires. Elle se compose de deux interfaces principales : un portail client web et une console d'administration avec BPMN.

Les modules métiers clés incluent : la gestion des comptes avec soldes et historique, les virements avec validation des seuils sensibles, la gestion des cartes avec système de dévoilement sécurisé, un assistant IA intelligent basé sur RAG pour répondre aux questions clients, et un système de sécurité avec gestion des rôles.

Les modules de gouvernance incluent : une piste d'audit pour la traçabilité, un cache Redis pour les performances, une intégration Docker CI/CD pour le déploiement, des règles de seuil configurables, et la conformité réglementaire.

---

## SLIDE 11 - Section 04 : Analyse des Besoins
Quatrième partie : l'analyse des besoins.

---

## SLIDE 12 - Acteurs et Cas d'utilisation
J'ai identifié les différents acteurs du système : l'administrateur qui configure la plateforme, le client qui effectue les opérations bancaires, et l'assistant IA qui accompagne l'utilisateur. Les cas d'utilisation principaux incluent la gestion des comptes, les virements sensibles avec validation, la gestion des cartes sécurisées, et l'interaction avec l'assistant intelligent.

---

## SLIDE 13 - Exigences fonctionnelles
Les exigences fonctionnelles sont regroupées en plusieurs catégories. Pour la gestion des comptes : consultation des soldes, historique des transactions. Pour les virements : création, validation selon les seuils, et approbation par les administrateurs. Pour les cartes : création, blocage, et dévoilement sécurisé des informations. Pour l'assistant IA : FAQ contextuelle, recherche documentaire, et réponses basées sur les réglementations internes.

---

## SLIDE 14 - Exigences non-fonctionnelles
Les exigences non-fonctionnelles concernent la performance avec des temps de réponse inférieurs à 2 secondes, la sécurité avec chiffrement des données et authentification forte, la scalabilité pour supporter un grand nombre d'utilisateurs simultanés, la disponibilité 24h/24, et la conformité aux réglementations bancaires tunisiennes.

---

## SLIDE 15 - Diagramme de cas d'utilisation global
Ce diagramme présente la vue globale des cas d'utilisation. On voit clairement les interactions entre les différents acteurs et les fonctionnalités principales de la plateforme. Les clients accèdent aux services bancaires de base tandis que les administrateurs gèrent la configuration et la validation des opérations sensibles.

---

## SLIDE 16 - Section 05 : Architecture & Conception
Cinquième partie : l'architecture et la conception.

---

## SLIDE 17 - Méthodologie de développement
J'ai adopté une méthodologie agile Scrum pour le développement de ce projet. Le travail a été organisé en sprints de deux semaines, avec des réunions quotidiennes pour synchroniser l'équipe, des revues de sprint pour présenter les fonctionnalités réalisées, et des rétrospectives pour améliorer continuellement le processus. Cette approche a permis une adaptation rapide aux changements et une livraison itérative de fonctionnalités.

---

## SLIDE 18 - Architecture globale du système
L'architecture de FinBank repose sur une architecture microservices avec Spring Boot. Le frontend est développé en React pour une expérience utilisateur réactive. La communication entre services se fait via REST API. Les données sont persistées dans PostgreSQL, avec Redis pour le cache. L'assistant IA utilise Ollama pour le traitement du langage naturel et RAG pour les réponses contextuelles.

---

## SLIDE 19 - Diagramme de classes global
Ce diagramme de classes montre la structure du système. On distingue les entités principales : User pour les utilisateurs, Account pour les comptes, Transaction pour les opérations, Card pour les cartes bancaires, et les classes liées à l'assistant IA comme Document et Query. Les relations entre ces classes reflètent les flux métiers de la plateforme.

---

## SLIDE 20 - Section 06 : Interfaces & Expérience
Sixième partie : les interfaces et l'expérience utilisateur.

---

## SLIDE 21 - Dashboard client
Le dashboard client offre une vue d'ensemble de la situation bancaire. L'utilisateur peut voir ses comptes avec les soldes, l'historique récent des transactions, et accéder rapidement aux fonctionnalités principales comme les virements et la gestion des cartes. L'interface est conçue pour être intuitive et responsive.

---

## SLIDE 22 - Interface de virement
Pour les virements, l'interface permet de saisir les bénéficiaires et les montants. Lorsque le montant dépasse le seuil de 5000 TND, le système déclenche automatiquement un processus de validation BPMN. L'utilisateur est informé que son virement nécessite une approbation administrative.

---

## SLIDE 23 - Interface de validation admin
La console d'administration permet aux administrateurs de valider les virements sensibles. Ils peuvent voir les détails de la transaction, consulter les documents justificatifs si nécessaire, et approuver ou rejeter la demande. L'historique des validations est tracé pour la conformité.

---

## SLIDE 24 - Interface de gestion des cartes
L'interface de gestion des cartes permet de créer de nouvelles cartes, de bloquer temporairement une carte en cas de perte, et surtout de dévoiler les informations sensibles de manière sécurisée. Le système demande une authentification supplémentaire avant d'afficher le numéro complet de la carte.

---

## SLIDE 25 - Interface de l'assistant IA
L'assistant IA est accessible via une interface de chat contextuelle. L'utilisateur peut poser des questions sur ses opérations, les réglementations bancaires, ou demander de l'aide. L'assistant utilise RAG pour puiser dans la documentation interne et fournir des réponses précises et contextuelles.

---

## SLIDE 26 - Interface de sécurité et audit
L'interface de sécurité permet aux administrateurs de surveiller les événements de sécurité, de consulter la piste d'audit immuable, et de gérer les rôles et permissions. Chaque action critique est enregistrée avec un horodatage précis pour garantir la traçabilité.

---

## SLIDE 27 - Section 07 : CI/CD & Déploiement
Septième partie : le CI/CD et le déploiement.

---

## SLIDE 28 - Pipeline GitHub Actions
J'ai mis en place un pipeline CI/CD avec GitHub Actions. À chaque push sur la branche principale, le pipeline se déclenche automatiquement : il lance les tests unitaires, construit l'application avec Maven, génère l'image Docker, et déploie sur l'environnement de production. Cela garantit une qualité constante et un déploiement sans erreur.

---

## SLIDE 29 - Configuration Docker
L'application est conteneurisée avec Docker. Le fichier docker-compose orchestre les différents services : l'application Spring Boot, la base de données PostgreSQL, le cache Redis, et l'assistant IA Ollama. Cette approche facilite le déploiement et assure la cohérence entre les environnements de développement et de production.

---

## SLIDE 30 - Architecture de déploiement
L'architecture de déploiement utilise des conteneurs Docker déployés sur un serveur. Les services communiquent via un réseau interne. La base de données est persistée avec des volumes Docker pour garantir la conservation des données. Un reverse proxy gère le trafic HTTP et la terminaison SSL.

---

## SLIDE 31 - Section 08 : Conclusion & Perspectives
Huitième et dernière partie : la conclusion et les perspectives.

---

## SLIDE 32 - Bilan du projet
Ce projet m'a permis de développer une plateforme bancaire complète répondant aux besoins modernes des clients. Les objectifs initiaux ont été atteints : gestion multi-comptes, validation des opérations sensibles, assistant IA intelligent, et traçabilité complète. J'ai acquis des compétences solides en développement backend avec Spring Boot, en frontend avec React, en intégration de l'IA avec RAG, et en mise en place de pipelines CI/CD.

---

## SLIDE 33 - Perspectives d'évolution
Plusieurs perspectives d'évolution sont envisageables pour enrichir FinBank. On pourrait intégrer des services de paiement mobile, ajouter des fonctionnalités d'analyse financière avec graphiques et prédictions, étendre l'assistant IA avec des capacités de prédiction de fraude, et développer une application mobile native pour iOS et Android.

---

## SLIDE 34 - Remerciements
Je tiens à remercier mon encadrant académique M. Haythem SAOUDI pour ses conseils précieux tout au long de ce projet. Je remercie également ma encadrante professionnelle Mme Feriel JRIDI pour son accompagnement et sa disponibilité chez VERMEG. Enfin, je remercie l'École Polytechnique de Sousse et l'entreprise VERMEG pour m'avoir donné l'opportunité de réaliser ce projet enrichissant.

---

## SLIDE DE DÉMONSTRATION LIVE
Je vous propose maintenant de passer à une démonstration live de la plateforme FinBank pour vous montrer concrètement les fonctionnalités que je viens de présenter.
