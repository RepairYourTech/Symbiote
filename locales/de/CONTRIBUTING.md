# Beitrag zu Symbiote

<div align="center">
  <p style="font-size: 1.1em; margin-top: 15px;"><strong>Basierend auf <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">Roo Code</a></strong></p>
  <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">
    <img src="https://img.shields.io/badge/Fork%20von-Roo%20Code-6F42C1?style=for-the-badge&logo=github&logoColor=white" alt="Fork von Roo Code">
  </a>
</div>

Wir freuen uns, dass du Interesse hast, zu Symbiote beizutragen. Ob du einen Fehler behebst, eine Funktion hinzufügst oder unsere Dokumentation verbesserst, jeder Beitrag macht Symbiote intelligenter! Um unsere Community lebendig und einladend zu halten, müssen sich alle Mitglieder an unseren [Verhaltenskodex](CODE_OF_CONDUCT.md) halten.

## Community-Engagement

Wir ermutigen alle Mitwirkenden, sich über GitHub mit der Symbiote-Community zu engagieren:

- Nutze GitHub Discussions für Fragen und Ideen
- Beteilige dich an Issue-Diskussionen, um Feedback zu geben
- Überprüfe Pull Requests von anderen Mitwirkenden
- Teile deine Erfahrungen mit der Nutzung von Symbiote
- Vernetze dich mit anderen Entwicklern, die an ähnlichen Projekten arbeiten

## Fehler oder Probleme melden

Fehlerberichte helfen, Symbiote für alle besser zu machen! Bevor du ein neues Issue erstellst, bitte [suche in bestehenden Issues](https://github.com/RepairYourTech/Symbiote/issues), um Duplikate zu vermeiden. Wenn du bereit bist, einen Fehler zu melden, gehe zu unserer [Issues-Seite](https://github.com/RepairYourTech/Symbiote/issues/new/choose), wo du eine Vorlage findest, die dir beim Ausfüllen der relevanten Informationen hilft.

> **Wichtig:** Wenn du eine Sicherheitslücke entdeckst, nutze bitte das [Github-Sicherheitstool, um sie privat zu melden](https://github.com/RepairYourTech/Symbiote/security/advisories/new).

## Entscheiden, woran Sie arbeiten möchten

Suchst du nach einem guten ersten Beitrag? Schau dir Issues mit dem Label "good first issue" in unserer [Symbiote Issues-Seite](https://github.com/RepairYourTech/Symbiote/issues) an. Diese sind speziell für neue Mitwirkende und Bereiche ausgewählt, in denen wir Hilfe gebrauchen könnten!

Wir begrüßen auch Beiträge zu unserer Dokumentation! Ob du Tippfehler korrigierst, bestehende Anleitungen verbesserst oder neue Bildungsinhalte erstellst - wir würden gerne ein Community-geführtes Repository von Ressourcen aufbauen, das jedem hilft, das Beste aus Symbiote herauszuholen.

Wenn du an einer größeren Funktion arbeiten möchtest, erstelle bitte zuerst eine [Funktionsanfrage](https://github.com/RepairYourTech/Symbiote/discussions/categories/feature-requests), damit wir diskutieren können, ob sie mit der Vision von Symbiote übereinstimmt. Du kannst auch unseren [Projekt-Fahrplan](#projekt-fahrplan) unten überprüfen, um zu sehen, ob deine Idee mit unserer strategischen Ausrichtung übereinstimmt.

## Projekt-Fahrplan

Symbiote hat einen Entwicklungsfahrplan, der unsere Prioritäten und zukünftige Richtung leitet. Das Verständnis unseres Fahrplans kann dir helfen:

- Deine Beiträge mit den Projektzielen abzustimmen
- Bereiche zu identifizieren, in denen deine Expertise am wertvollsten wäre
- Den Kontext hinter bestimmten Designentscheidungen zu verstehen
- Inspiration für neue Funktionen zu finden, die unsere Vision unterstützen

Unser aktueller Fahrplan konzentriert sich auf diese Schlüsselsäulen:

### Provider-Unterstützung

Wir möchten so viele KI-Provider wie möglich unterstützen:

- Vielseitige "OpenAI Compatible" Unterstützung
- Unterstützung für wichtige KI-Provider, darunter Anthropic, Google, xAI, Microsoft Azure AI und mehr
- Verbesserte Unterstützung für lokale Modelle über Ollama und ähnliche Plattformen

### Datenschutz und Sicherheit

Wir priorisieren den Datenschutz und die Sicherheit der Benutzer:

- Keine Telemetrie oder Datenerfassung
- Lokale Verarbeitungsoptionen, wo möglich
- Transparente Handhabung von Benutzerdaten

### System-Unterstützung

Wir wollen, dass Symbiote auf jedem Computer gut läuft:

- Plattformübergreifende Terminal-Integration
- Starke und konsistente Unterstützung für Mac, Windows und Linux

### Dokumentation

Wir wollen umfassende, zugängliche Dokumentation für alle Benutzer und Mitwirkenden:

- Erweiterte Benutzerhandbücher und Tutorials
- Klare API-Dokumentation
- Bessere Anleitung für Mitwirkende
- Mehrsprachige Dokumentationsressourcen

### Stabilität

Wir wollen die Anzahl der Fehler deutlich reduzieren und die automatisierte Testabdeckung erhöhen:

- Umfassende Testabdeckung
- Debug-Logging-Fähigkeiten
- Vereinfachter Prozess zur Fehlermeldung

### Internationalisierung

Wir wollen, dass Symbiote für Benutzer weltweit zugänglich ist:

- Unterstützung für mehrere Sprachen in der Benutzeroberfläche
- Lokalisierte Dokumentation
- Von der Community getriebene Übersetzungsbemühungen

Wir begrüßen besonders Beiträge, die unsere Fahrplanziele voranbringen. Wenn du an etwas arbeitest, das mit diesen Säulen übereinstimmt, erwähne es bitte in deiner PR-Beschreibung.

## Entwicklungs-Setup

1. **Klone** das Repository:

```sh
git clone https://github.com/RepairYourTech/Symbiote.git
```

2. **Installiere Abhängigkeiten**:

```sh
npm run install:all
```

3. **Starte die Webansicht (Vite/React-App mit HMR)**:

```sh
npm run dev
```

4. **Debugging**:
   Drücke `F5` (oder **Ausführen** → **Debugging starten**) in VSCode, um eine neue Sitzung mit geladenem Symbiote zu öffnen.

Änderungen an der Webansicht erscheinen sofort. Änderungen an der Kern-Erweiterung erfordern einen Neustart des Erweiterungs-Hosts.

Alternativ kannst du eine .vsix-Datei erstellen und direkt in VSCode installieren:

```sh
npm run build
```

Eine `.vsix`-Datei erscheint im `bin/`-Verzeichnis, die mit folgendem Befehl installiert werden kann:

```sh
code --install-extension bin/symbiote-<version>.vsix
```

## Code schreiben und einreichen

Jeder kann Code zu Symbiote beitragen, aber wir bitten dich, diese Richtlinien zu befolgen, um sicherzustellen, dass deine Beiträge reibungslos integriert werden können:

1. **Halten Sie Pull Requests fokussiert**

    - Beschränke PRs auf eine einzelne Funktion oder Fehlerbehebung
    - Teile größere Änderungen in kleinere, zusammenhängende PRs auf
    - Unterteile Änderungen in logische Commits, die unabhängig überprüft werden können

2. **Codequalität**

    - Alle PRs müssen CI-Prüfungen bestehen, die sowohl Linting als auch Formatierung umfassen
    - Behebe alle ESLint-Warnungen oder -Fehler vor dem Einreichen
    - Reagiere auf alle Rückmeldungen von Ellipsis, unserem automatisierten Code-Review-Tool
    - Folge TypeScript-Best-Practices und halte die Typsicherheit aufrecht

3. **Testen**

    - Füge Tests für neue Funktionen hinzu
    - Führe `npm test` aus, um sicherzustellen, dass alle Tests bestanden werden
    - Aktualisiere bestehende Tests, wenn deine Änderungen diese beeinflussen
    - Schließe sowohl Unit-Tests als auch Integrationstests ein, wo angemessen

4. **Commit-Richtlinien**

    - Schreibe klare, beschreibende Commit-Nachrichten
    - Verweise auf relevante Issues in Commits mit #issue-nummer

5. **Vor dem Einreichen**

    - Rebase deinen Branch auf den neuesten main-Branch
    - Stelle sicher, dass dein Branch erfolgreich baut
    - Überprüfe erneut, dass alle Tests bestanden werden
    - Prüfe deine Änderungen auf Debug-Code oder Konsolenausgaben

6. **Pull Request Beschreibung**
    - Beschreibe klar, was deine Änderungen bewirken
    - Füge Schritte zum Testen der Änderungen hinzu
    - Liste alle Breaking Changes auf
    - Füge Screenshots für UI-Änderungen hinzu

## Beitragsvereinbarung

Durch das Einreichen eines Pull Requests stimmst du zu, dass deine Beiträge unter derselben Lizenz wie das Projekt ([Apache 2.0](../LICENSE)) lizenziert werden.

## Anerkennung

Diese Beitragsrichtlinie ist vom [Beitragsleitfaden von Roo Code](https://github.com/RooVetGit/Roo-Code/blob/main/CONTRIBUTING.md) adaptiert, mit Änderungen, um die spezifischen Anforderungen und Prozesse von Symbiote widerzuspiegeln.
