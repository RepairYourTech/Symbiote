# Contribuire a Symbiote

<div align="center">
  <p style="font-size: 1.1em; margin-top: 15px;"><strong>Basato su <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">Roo Code</a></strong></p>
  <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">
    <img src="https://img.shields.io/badge/Fork%20di-Roo%20Code-6F42C1?style=for-the-badge&logo=github&logoColor=white" alt="Fork di Roo Code">
  </a>
</div>

Siamo entusiasti che tu sia interessato a contribuire a Symbiote. Che tu stia correggendo un bug, aggiungendo una funzionalità o migliorando la nostra documentazione, ogni contributo rende Symbiote più intelligente! Per mantenere la nostra comunità vivace e accogliente, tutti i membri devono aderire al nostro [Codice di Condotta](CODE_OF_CONDUCT.md).

## Partecipazione alla Comunità

Incoraggiamo tutti i contributori a partecipare alla comunità di Symbiote tramite GitHub:

- Utilizza GitHub Discussions per domande e idee
- Partecipa alle discussioni sulle issue per fornire feedback
- Revisiona le pull request di altri contributori
- Condividi le tue esperienze usando Symbiote
- Connettiti con altri sviluppatori che lavorano su progetti simili

## Segnalare Bug o Problemi

Le segnalazioni di bug aiutano a migliorare Symbiote per tutti! Prima di creare un nuovo problema, per favore [cerca tra quelli esistenti](https://github.com/RepairYourTech/Symbiote/issues) per evitare duplicati. Quando sei pronto a segnalare un bug, vai alla nostra [pagina dei problemi](https://github.com/RepairYourTech/Symbiote/issues/new/choose) dove troverai un modello per aiutarti a compilare le informazioni rilevanti.

> **Importante:** Se scopri una vulnerabilità di sicurezza, utilizza lo [strumento di sicurezza Github per segnalarla privatamente](https://github.com/RepairYourTech/Symbiote/security/advisories/new).

## Decidere Su Cosa Lavorare

Cerchi un buon primo contributo? Controlla i problemi etichettati con "good first issue" nella nostra [pagina delle Issues di Symbiote](https://github.com/RepairYourTech/Symbiote/issues). Questi sono specificamente selezionati per nuovi contributori e aree in cui ci piacerebbe avere un po' di aiuto!

Accogliamo anche contributi alla nostra documentazione! Che si tratti di correggere errori di battitura, migliorare guide esistenti o creare nuovi contenuti educativi - ci piacerebbe costruire un repository di risorse guidato dalla comunità che aiuti tutti a ottenere il massimo da Symbiote.

Se stai pianificando di lavorare su una funzionalità più grande, per favore crea prima una [richiesta di funzionalità](https://github.com/RepairYourTech/Symbiote/discussions/categories/feature-requests) così possiamo discutere se si allinea con la visione di Symbiote. Puoi anche consultare la nostra [Roadmap del Progetto](#roadmap-del-progetto) qui sotto per vedere se la tua idea si adatta alla nostra direzione strategica.

## Roadmap del Progetto

Symbiote ha una roadmap di sviluppo che guida le nostre priorità e la direzione futura. Comprendere la nostra roadmap può aiutarti a:

- Allineare i tuoi contributi con gli obiettivi del progetto
- Identificare aree in cui la tua esperienza sarebbe più preziosa
- Comprendere il contesto dietro certe decisioni di design
- Trovare ispirazione per nuove funzionalità che supportino la nostra visione

La nostra roadmap attuale si concentra su questi pilastri chiave:

### Supporto Provider

Miriamo a supportare quanti più provider di IA possibile:

- Supporto versatile per "OpenAI Compatible"
- Supporto per i principali provider di IA, tra cui Anthropic, Google, xAI, Microsoft Azure AI e altri
- Supporto migliorato per modelli locali tramite Ollama e piattaforme simili

### Privacy e Sicurezza

Prioritizziamo la privacy e la sicurezza degli utenti:

- Nessuna telemetria o raccolta dati
- Opzioni di elaborazione locale quando possibile
- Gestione trasparente dei dati degli utenti

### Supporto Sistemi

Vogliamo che Symbiote funzioni bene sul computer di tutti:

- Integrazione del terminale multipiattaforma
- Supporto forte e coerente per Mac, Windows e Linux

### Documentazione

Vogliamo una documentazione completa e accessibile per tutti gli utenti e contributori:

- Guide utente e tutorial ampliati
- Documentazione API chiara
- Migliore orientamento per i contributori
- Risorse di documentazione multilingue

### Stabilità

Vogliamo ridurre significativamente il numero di bug e aumentare i test automatizzati:

- Copertura completa dei test
- Capacità di registrazione debug
- Processo semplificato per la segnalazione di bug

### Internazionalizzazione

Vogliamo che Symbiote sia accessibile agli utenti di tutto il mondo:

- Supporto per più lingue nell'interfaccia
- Documentazione localizzata
- Sforzi di traduzione guidati dalla comunità

Accogliamo particolarmente i contributi che fanno progredire gli obiettivi della nostra roadmap. Se stai lavorando su qualcosa che si allinea con questi pilastri, per favore menzionalo nella descrizione della tua PR.

## Configurazione per lo Sviluppo

1. **Clona** il repository:

```sh
git clone https://github.com/RepairYourTech/Symbiote.git
```

2. **Installa le dipendenze**:

```sh
npm run install:all
```

3. **Avvia la webview (app Vite/React con HMR)**:

```sh
npm run dev
```

4. **Debug**:
   Premi `F5` (o **Run** → **Start Debugging**) in VSCode per aprire una nuova sessione con Symbiote caricato.

Le modifiche alla webview appariranno immediatamente. Le modifiche all'estensione principale richiederanno un riavvio dell'host dell'estensione.

In alternativa puoi creare un file .vsix e installarlo direttamente in VSCode:

```sh
npm run build
```

Un file `.vsix` apparirà nella directory `bin/` che può essere installato con:

```sh
code --install-extension bin/symbiote-<version>.vsix
```

## Scrivere e Inviare Codice

Chiunque può contribuire con codice a Symbiote, ma ti chiediamo di seguire queste linee guida per assicurare che i tuoi contributi possano essere integrati senza problemi:

1. **Mantieni le Pull Request Focalizzate**

    - Limita le PR a una singola funzionalità o correzione di bug
    - Suddividi i cambiamenti più grandi in PR più piccole e correlate
    - Suddividi i cambiamenti in commit logici che possono essere revisionati indipendentemente

2. **Qualità del Codice**

    - Tutte le PR devono passare i controlli CI che includono sia linting che formattazione
    - Risolvi qualsiasi avviso o errore di ESLint prima di inviare
    - Rispondi a tutti i feedback da Ellipsis, il nostro strumento automatico di revisione del codice
    - Segui le migliori pratiche di TypeScript e mantieni la sicurezza dei tipi

3. **Testing**

    - Aggiungi test per le nuove funzionalità
    - Esegui `npm test` per assicurarti che tutti i test passino
    - Aggiorna i test esistenti se le tue modifiche li influenzano
    - Includi sia test unitari che test di integrazione dove appropriato

4. **Linee Guida per i Commit**

    - Scrivi messaggi di commit chiari e descrittivi
    - Fai riferimento ai problemi rilevanti nei commit usando #numero-problema

5. **Prima di Inviare**

    - Fai il rebase del tuo branch sull'ultimo main
    - Assicurati che il tuo branch si costruisca con successo
    - Ricontrolla che tutti i test stiano passando
    - Rivedi le tue modifiche per qualsiasi codice di debug o log della console

6. **Descrizione della Pull Request**
    - Descrivi chiaramente cosa fanno le tue modifiche
    - Includi passaggi per testare le modifiche
    - Elenca eventuali breaking changes
    - Aggiungi screenshot per modifiche UI

## Accordo di Contribuzione

Inviando una pull request, accetti che i tuoi contributi saranno concessi in licenza con la stessa licenza del progetto ([Apache 2.0](../LICENSE)).

## Riconoscimenti

Questa guida alla contribuzione è adattata dalla [guida alla contribuzione di Roo Code](https://github.com/RooVetGit/Roo-Code/blob/main/CONTRIBUTING.md), con modifiche per riflettere i requisiti e i processi specifici di Symbiote.
