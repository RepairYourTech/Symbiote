# Contribuer à Symbiote

<div align="center">
  <p style="font-size: 1.1em; margin-top: 15px;"><strong>Basé sur <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">Roo Code</a></strong></p>
  <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">
    <img src="https://img.shields.io/badge/Fork%20de-Roo%20Code-6F42C1?style=for-the-badge&logo=github&logoColor=white" alt="Fork de Roo Code">
  </a>
</div>

Nous sommes ravis que vous soyez intéressé à contribuer à Symbiote. Que vous corrigiez un bug, ajoutiez une fonctionnalité ou amélioriez notre documentation, chaque contribution rend Symbiote plus intelligent ! Pour maintenir notre communauté dynamique et accueillante, tous les membres doivent adhérer à notre [Code de Conduite](CODE_OF_CONDUCT.md).

## Engagement Communautaire

Nous encourageons tous les contributeurs à s'engager avec la communauté Symbiote via GitHub :

- Utilisez GitHub Discussions pour les questions et idées
- Participez aux discussions sur les issues pour fournir des retours
- Révisez les pull requests d'autres contributeurs
- Partagez vos expériences d'utilisation de Symbiote
- Connectez-vous avec d'autres développeurs travaillant sur des projets similaires

## Signaler des Bugs ou des Problèmes

Les rapports de bugs aident à améliorer Symbiote pour tout le monde ! Avant de créer un nouveau problème, veuillez [rechercher parmi les existants](https://github.com/RepairYourTech/Symbiote/issues) pour éviter les doublons. Lorsque vous êtes prêt à signaler un bug, rendez-vous sur notre [page d'issues](https://github.com/RepairYourTech/Symbiote/issues/new/choose) où vous trouverez un modèle pour vous aider à remplir les informations pertinentes.

> **Important :** Si vous découvrez une vulnérabilité de sécurité, veuillez utiliser [l'outil de sécurité Github pour la signaler en privé](https://github.com/RepairYourTech/Symbiote/security/advisories/new).

## Décider Sur Quoi Travailler

Vous cherchez une bonne première contribution ? Consultez les issues étiquetées avec "good first issue" dans notre [page d'Issues de Symbiote](https://github.com/RepairYourTech/Symbiote/issues). Celles-ci sont spécifiquement sélectionnées pour les nouveaux contributeurs et les domaines où nous aimerions recevoir de l'aide !

Nous accueillons également les contributions à notre documentation ! Qu'il s'agisse de corriger des fautes de frappe, d'améliorer les guides existants ou de créer du nouveau contenu éducatif - nous aimerions construire un référentiel de ressources guidé par la communauté qui aide chacun à tirer le meilleur parti de Symbiote.

Si vous prévoyez de travailler sur une fonctionnalité plus importante, veuillez d'abord créer une [demande de fonctionnalité](https://github.com/RepairYourTech/Symbiote/discussions/categories/feature-requests) afin que nous puissions discuter si elle s'aligne avec la vision de Symbiote. Vous pouvez également consulter notre [Feuille de route du projet](#feuille-de-route-du-projet) ci-dessous pour voir si votre idée s'inscrit dans notre orientation stratégique.

## Feuille de route du projet

Symbiote dispose d'une feuille de route de développement qui guide nos priorités et notre orientation future. Comprendre notre feuille de route peut vous aider à :

- Aligner vos contributions avec les objectifs du projet
- Identifier les domaines où votre expertise serait la plus précieuse
- Comprendre le contexte derrière certaines décisions de conception
- Trouver de l'inspiration pour de nouvelles fonctionnalités qui soutiennent notre vision

Notre feuille de route actuelle se concentre sur ces piliers clés :

### Support des fournisseurs

Nous visons à prendre en charge autant de fournisseurs d'IA que possible :

- Support polyvalent pour "OpenAI Compatible"
- Support pour les principaux fournisseurs d'IA, notamment Anthropic, Google, xAI, Microsoft Azure AI, et plus
- Support amélioré pour les modèles locaux via Ollama et plateformes similaires

### Confidentialité et Sécurité

Nous priorisons la confidentialité et la sécurité des utilisateurs :

- Aucune télémétrie ni collecte de données
- Options de traitement local lorsque possible
- Gestion transparente des données utilisateur

### Support des systèmes

Nous voulons que Symbiote fonctionne bien sur l'ordinateur de chacun :

- Intégration de terminal multiplateforme
- Support solide et cohérent pour Mac, Windows et Linux

### Documentation

Nous voulons une documentation complète et accessible pour tous les utilisateurs et contributeurs :

- Guides utilisateur et tutoriels étendus
- Documentation API claire
- Meilleure orientation pour les contributeurs
- Ressources de documentation multilingues

### Stabilité

Nous voulons réduire considérablement le nombre de bugs et augmenter les tests automatisés :

- Couverture de tests complète
- Capacités de journalisation de débogage
- Processus simplifié de signalement des bugs

### Internationalisation

Nous voulons que Symbiote soit accessible aux utilisateurs du monde entier :

- Support pour plusieurs langues dans l'interface
- Documentation localisée
- Efforts de traduction pilotés par la communauté

Nous accueillons particulièrement les contributions qui font progresser nos objectifs de feuille de route. Si vous travaillez sur quelque chose qui s'aligne avec ces piliers, veuillez le mentionner dans la description de votre PR.

## Configuration de Développement

1. **Clonez** le dépôt :

```sh
git clone https://github.com/RepairYourTech/Symbiote.git
```

2. **Installez les dépendances** :

```sh
npm run install:all
```

3. **Démarrez la vue web (application Vite/React avec HMR)** :

```sh
npm run dev
```

4. **Débogage** :
   Appuyez sur `F5` (ou **Exécuter** → **Démarrer le débogage**) dans VSCode pour ouvrir une nouvelle session avec Symbiote chargé.

Les modifications apportées à la vue web apparaîtront immédiatement. Les modifications apportées à l'extension principale nécessiteront un redémarrage de l'hôte d'extension.

Vous pouvez également créer un fichier .vsix et l'installer directement dans VSCode :

```sh
npm run build
```

Un fichier `.vsix` apparaîtra dans le répertoire `bin/` qui peut être installé avec :

```sh
code --install-extension bin/symbiote-<version>.vsix
```

## Écrire et Soumettre du Code

Tout le monde peut contribuer avec du code à Symbiote, mais nous vous demandons de suivre ces directives pour vous assurer que vos contributions puissent être intégrées en douceur :

1. **Gardez les Pull Requests Ciblées**

    - Limitez les PRs à une seule fonctionnalité ou correction de bug
    - Divisez les changements plus importants en PRs plus petites et liées
    - Divisez les changements en commits logiques qui peuvent être examinés indépendamment

2. **Qualité du Code**

    - Toutes les PRs doivent passer les vérifications CI qui incluent à la fois le linting et le formatage
    - Résolvez toutes les alertes ou erreurs ESLint avant de soumettre
    - Répondez à tous les retours d'Ellipsis, notre outil automatisé de revue de code
    - Suivez les meilleures pratiques TypeScript et maintenez la sécurité des types

3. **Tests**

    - Ajoutez des tests pour les nouvelles fonctionnalités
    - Exécutez `npm test` pour vous assurer que tous les tests passent
    - Mettez à jour les tests existants si vos changements les affectent
    - Incluez à la fois des tests unitaires et d'intégration lorsque c'est approprié

4. **Directives pour les Commits**

    - Écrivez des messages de commit clairs et descriptifs
    - Référencez les issues pertinentes dans les commits en utilisant #numéro-issue

5. **Avant de Soumettre**

    - Rebasez votre branche sur la dernière main
    - Assurez-vous que votre branche se construit avec succès
    - Vérifiez à nouveau que tous les tests passent
    - Revoyez vos changements pour détecter tout code de débogage ou logs de console

6. **Description du Pull Request**
    - Décrivez clairement ce que font vos changements
    - Incluez des étapes pour tester les changements
    - Listez tous les changements incompatibles
    - Ajoutez des captures d'écran pour les changements d'interface utilisateur

## Accord de Contribution

En soumettant une pull request, vous acceptez que vos contributions soient sous licence selon la même licence que le projet ([Apache 2.0](../LICENSE)).

## Reconnaissance

Ce guide de contribution est adapté du [guide de contribution de Roo Code](https://github.com/RooVetGit/Roo-Code/blob/main/CONTRIBUTING.md), avec des modifications pour refléter les exigences et processus spécifiques de Symbiote.
