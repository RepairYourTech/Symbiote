# Contribuir a Symbiote

<div align="center">
  <p style="font-size: 1.1em; margin-top: 15px;"><strong>Basat en <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">Roo Code</a></strong></p>
  <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">
    <img src="https://img.shields.io/badge/Fork%20de-Roo%20Code-6F42C1?style=for-the-badge&logo=github&logoColor=white" alt="Fork de Roo Code">
  </a>
</div>

Estem entusiasmats que estigueu interessats en contribuir a Symbiote. Ja sigui arreglant un error, afegint una funcionalitat o millorant la nostra documentació, cada contribució fa que Symbiote sigui més intel·ligent! Per mantenir la nostra comunitat vibrant i acollidora, tots els membres han de complir el nostre [Codi de Conducta](CODE_OF_CONDUCT.md).

## Participació a la Comunitat

Encoratgem a tots els col·laboradors a participar amb la comunitat Symbiote a través de GitHub:

- Utilitzeu GitHub Discussions per a preguntes i idees
- Participeu en discussions d'incidències per proporcionar comentaris
- Reviseu les sol·licituds d'extracció d'altres col·laboradors
- Compartiu les vostres experiències utilitzant Symbiote
- Connecteu amb altres desenvolupadors que treballen en projectes similars

## Informar d'errors o problemes

Els informes d'errors ajuden a millorar Symbiote per a tothom! Abans de crear un nou informe, si us plau [cerqueu entre els existents](https://github.com/RepairYourTech/Symbiote/issues) per evitar duplicats. Quan estigueu a punt per informar d'un error, dirigiu-vos a la nostra [pàgina d'incidències](https://github.com/RepairYourTech/Symbiote/issues/new/choose) on trobareu una plantilla per ajudar-vos a completar la informació rellevant.

> **Important:** Si descobriu una vulnerabilitat de seguretat, utilitzeu l'[eina de seguretat de Github per informar-ne privadament](https://github.com/RepairYourTech/Symbiote/security/advisories/new).

## Decidir en què treballar

Buscant una bona primera contribució? Consulteu les incidències marcades com a "good first issue" a la nostra [pàgina d'incidències de Symbiote](https://github.com/RepairYourTech/Symbiote/issues). Aquestes estan específicament seleccionades per a nous col·laboradors i àrees on ens encantaria rebre ajuda!

També donem la benvinguda a contribucions a la nostra documentació! Ja sigui corregint errors tipogràfics, millorant guies existents o creant nou contingut educatiu - ens encantaria construir un repositori de recursos impulsat per la comunitat que ajudi a tothom a aprofitar al màxim Symbiote.

Si esteu planejant treballar en una funcionalitat més gran, si us plau creeu primer una [sol·licitud de funcionalitat](https://github.com/RepairYourTech/Symbiote/discussions/categories/feature-requests) perquè puguem discutir si s'alinea amb la visió de Symbiote. També podeu consultar el nostre [Full de Ruta del Projecte](#full-de-ruta-del-projecte) a continuació per veure si la vostra idea s'ajusta a la nostra direcció estratègica.

## Full de Ruta del Projecte

Symbiote té un full de ruta de desenvolupament que guia les nostres prioritats i direcció futura. Entendre el nostre full de ruta us pot ajudar a:

- Alinear les vostres contribucions amb els objectius del projecte
- Identificar àrees on la vostra experiència seria més valuosa
- Entendre el context darrere de certes decisions de disseny
- Trobar inspiració per a noves funcionalitats que donin suport a la nostra visió

El nostre full de ruta actual se centra en aquests pilars clau:

### Suport de Proveïdors

Aspirem a donar suport a tants proveïdors d'IA com sigui possible:

- Suport versàtil per a "OpenAI Compatible"
- Suport per als principals proveïdors d'IA, incloent Anthropic, Google, xAI, Microsoft Azure AI i més
- Suport millorat per a models locals a través d'Ollama i plataformes similars

### Privacitat i Seguretat

Prioritzem la privacitat i seguretat de l'usuari:

- Sense telemetria ni recol·lecció de dades
- Opcions de processament local quan sigui possible
- Gestió transparent de les dades dels usuaris

### Suport de Sistemes

Volem que Symbiote funcioni bé a l'ordinador de tothom:

- Integració de terminal multiplataforma
- Suport sòlid i consistent per a Mac, Windows i Linux

### Documentació

Volem documentació completa i accessible per a tots els usuaris i col·laboradors:

- Guies d'usuari i tutorials ampliats
- Documentació clara de l'API
- Millor orientació per als col·laboradors
- Recursos de documentació multilingües

### Estabilitat

Volem reduir significativament el nombre d'errors i augmentar les proves automatitzades:

- Cobertura de proves completa
- Capacitats de registre de depuració
- Procés simplificat d'informes d'errors

### Internacionalització

Volem que Symbiote sigui accessible per als usuaris de tot el món:

- Suport per a múltiples idiomes a la interfície
- Documentació localitzada
- Esforços de traducció liderats per la comunitat

Donem especialment la benvinguda a contribucions que avancin els nostres objectius del full de ruta. Si esteu treballant en alguna cosa que s'alinea amb aquests pilars, si us plau mencioneu-ho a la descripció del vostre PR.

## Configuració de desenvolupament

1. **Cloneu** el repositori:

```sh
git clone https://github.com/RepairYourTech/Symbiote.git
```

2. **Instal·leu les dependències**:

```sh
npm run install:all
```

3. **Inicieu la vista web (aplicació Vite/React amb HMR)**:

```sh
npm run dev
```

4. **Depuració**:
   Premeu `F5` (o **Execució** → **Inicia la depuració**) a VSCode per obrir una nova sessió amb Symbiote carregat.

Els canvis a la vista web apareixeran immediatament. Els canvis a l'extensió principal requeriran reiniciar l'amfitrió de l'extensió.

Alternativament, podeu crear un .vsix i instal·lar-lo directament a VSCode:

```sh
npm run build
```

Apareixerà un fitxer `.vsix` al directori `bin/` que es pot instal·lar amb:

```sh
code --install-extension bin/symbiote-<version>.vsix
```

## Escriure i enviar codi

Qualsevol persona pot contribuir amb codi a Symbiote, però us demanem que seguiu aquestes directrius per assegurar que les vostres contribucions puguin ser integrades sense problemes:

1. **Mantingueu les Pull Requests enfocades**

    - Limiteu les PR a una sola funcionalitat o correcció d'error
    - Dividiu els canvis més grans en PR més petites i relacionades
    - Dividiu els canvis en commits lògics que puguin ser revisats independentment

2. **Qualitat del codi**

    - Totes les PR han de passar les comprovacions de CI que inclouen tant anàlisi com formatació
    - Solucioneu qualsevol advertència o error d'ESLint abans d'enviar
    - Responeu a tots els comentaris d'Ellipsis, la nostra eina automatitzada de revisió de codi
    - Seguiu les millors pràctiques de TypeScript i mantingueu la seguretat de tipus

3. **Proves**

    - Afegiu proves per a noves funcionalitats
    - Executeu `npm test` per assegurar que totes les proves passin
    - Actualitzeu les proves existents si els vostres canvis les afecten
    - Incloeu tant proves unitàries com proves d'integració quan sigui apropiat

4. **Directrius de commits**

    - Escriviu missatges de commit clars i descriptius
    - Feu referència a incidències rellevants als commits utilitzant #número-incidència

5. **Abans d'enviar**

    - Rebaseu la vostra branca sobre l'última main
    - Assegureu-vos que la vostra branca es construeix amb èxit
    - Comproveu doblement que totes les proves passen
    - Reviseu els vostres canvis per qualsevol codi de depuració o registres de consola

6. **Descripció de la Pull Request**
    - Descriviu clarament què fan els vostres canvis
    - Incloeu passos per provar els canvis
    - Enumereu qualsevol canvi important
    - Afegiu captures de pantalla per a canvis d'interfície d'usuari

## Acord de contribució

En enviar una pull request, accepteu que les vostres contribucions estaran sota la mateixa llicència que el projecte ([Apache 2.0](../LICENSE)).

## Agraïments

Aquesta guia de contribució és una adaptació de la [guia de contribució de Roo Code](https://github.com/RooVetGit/Roo-Code/blob/main/CONTRIBUTING.md), amb modificacions per reflectir els requisits i processos específics de Symbiote.
