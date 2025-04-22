# Wkład w Symbiote

<div align="center">
  <p style="font-size: 1.1em; margin-top: 15px;"><strong>Bazuje na <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">Roo Code</a></strong></p>
  <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">
    <img src="https://img.shields.io/badge/Fork%20z-Roo%20Code-6F42C1?style=for-the-badge&logo=github&logoColor=white" alt="Fork z Roo Code">
  </a>
</div>

Cieszymy się, że jesteś zainteresowany wniesieniem wkładu do Symbiote. Czy naprawiasz błąd, dodajesz funkcję, czy ulepszasz naszą dokumentację, każdy wkład sprawia, że Symbiote staje się mądrzejszy! Aby utrzymać naszą społeczność żywą i przyjazną, wszyscy członkowie muszą przestrzegać naszego [Kodeksu Postępowania](CODE_OF_CONDUCT.md).

## Zaangażowanie społeczności

Zachęcamy wszystkich współtwórców do zaangażowania się w społeczność Symbiote poprzez GitHub:

- Używaj GitHub Discussions do zadawania pytań i dzielenia się pomysłami
- Uczestnictwo w dyskusjach na temat zgłoszeń, aby dostarczyć informacje zwrotne
- Przeglądanie pull requestów innych współtwórców
- Dzielenie się swoimi doświadczeniami z korzystania z Symbiote
- Łączenie się z innymi programistami pracującymi nad podobnymi projektami

## Zgłaszanie błędów lub problemów

Raporty o błędach pomagają ulepszyć Symbiote dla wszystkich! Przed utworzeniem nowego zgłoszenia, proszę [przeszukaj istniejące](https://github.com/RepairYourTech/Symbiote/issues), aby uniknąć duplikatów. Kiedy jesteś gotowy, aby zgłosić błąd, przejdź do naszej [strony zgłoszeń](https://github.com/RepairYourTech/Symbiote/issues/new/choose), gdzie znajdziesz szablon, który pomoże Ci wypełnić odpowiednie informacje.

> **Ważne:** Jeśli odkryjesz lukę w zabezpieczeniach, proszę użyj [narzędzia bezpieczeństwa Github, aby zgłosić ją prywatnie](https://github.com/RepairYourTech/Symbiote/security/advisories/new).

## Decydowanie nad czym pracować

Szukasz dobrego pierwszego wkładu? Sprawdź problemy oznaczone jako "good first issue" na naszej [stronie zgłoszeń Symbiote](https://github.com/RepairYourTech/Symbiote/issues). Te zostały specjalnie wybrane dla nowych współtwórców i obszarów, gdzie chętnie przyjmiemy pomoc!

Cieszymy się również z wkładu do naszej dokumentacji! Czy to poprawianie literówek, ulepszanie istniejących przewodników, czy tworzenie nowych treści edukacyjnych - chcielibyśmy zbudować repozytorium zasobów napędzane przez społeczność, które pomaga każdemu czerpać maksimum z Symbiote.

Jeśli planujesz pracować nad większą funkcją, proszę najpierw utwórz [prośbę o funkcję](https://github.com/RepairYourTech/Symbiote/discussions/categories/feature-requests), abyśmy mogli przedyskutować, czy jest ona zgodna z wizją Symbiote. Możesz również sprawdzić naszą [Mapę Drogową Projektu](#mapa-drogowa-projektu) poniżej, aby zobaczyć, czy Twój pomysł pasuje do naszego strategicznego kierunku.

## Mapa Drogowa Projektu

Symbiote posiada mapę drogową rozwoju, która kieruje naszymi priorytetami i przyszłym kierunkiem. Zrozumienie naszej mapy drogowej może pomóc Ci:

- Dostosować swoje wkłady do celów projektu
- Zidentyfikować obszary, w których Twoja wiedza byłaby najbardziej wartościowa
- Zrozumieć kontekst stojący za pewnymi decyzjami projektowymi
- Znaleźć inspirację dla nowych funkcji, które wspierają naszą wizję

Nasza obecna mapa drogowa koncentruje się na tych kluczowych filarach:

### Wsparcie dla Dostawców

Dążymy do wspierania jak największej liczby dostawców AI:

- Wszechstronne wsparcie dla "OpenAI Compatible"
- Wsparcie dla głównych dostawców AI, w tym Anthropic, Google, xAI, Microsoft Azure AI i więcej
- Ulepszone wsparcie dla modeli lokalnych poprzez Ollama i podobne platformy

### Prywatność i Bezpieczeństwo

Priorytetowo traktujemy prywatność i bezpieczeństwo użytkownika:

- Brak telemetrii i zbierania danych
- Opcje lokalnego przetwarzania, gdy to możliwe
- Przejrzyste zarządzanie danymi użytkownika

### Wsparcie dla Systemów

Chcemy, aby Symbiote działał dobrze na komputerze każdego:

- Integracja terminala międzyplatformowego
- Silne i spójne wsparcie dla Mac, Windows i Linux

### Dokumentacja

Chcemy kompleksowej, dostępnej dokumentacji dla wszystkich użytkowników i współtwórców:

- Rozszerzone przewodniki użytkownika i tutoriale
- Jasna dokumentacja API
- Lepsze wskazówki dla współtwórców
- Wielojęzyczne zasoby dokumentacji

### Stabilność

Chcemy znacznie zmniejszyć liczbę błędów i zwiększyć zautomatyzowane testowanie:

- Kompleksowe pokrycie testami
- Możliwości rejestrowania debugowania
- Uproszczony proces zgłaszania błędów

### Internacjonalizacja

Chcemy, aby Symbiote był dostępny dla użytkowników na całym świecie:

- Wsparcie dla wielu języków w interfejsie
- Zlokalizowana dokumentacja
- Wysiłki tłumaczeniowe kierowane przez społeczność

Szczególnie witamy wkłady, które przyspieszają realizację celów naszej mapy drogowej. Jeśli pracujesz nad czymś, co jest zgodne z tymi filarami, proszę wspomnij o tym w opisie swojego PR.

## Konfiguracja rozwojowa

1. **Sklonuj** repozytorium:

```sh
git clone https://github.com/RepairYourTech/Symbiote.git
```

2. **Zainstaluj zależności**:

```sh
npm run install:all
```

3. **Uruchom webview (aplikację Vite/React z HMR)**:

```sh
npm run dev
```

4. **Debugowanie**:
   Naciśnij `F5` (lub **Uruchom** → **Rozpocznij debugowanie**) w VSCode, aby otworzyć nową sesję z załadowanym Symbiote.

Zmiany w webview pojawią się natychmiast. Zmiany w podstawowym rozszerzeniu będą wymagać ponownego uruchomienia hosta rozszerzenia.

Alternatywnie możesz zbudować plik .vsix i zainstalować go bezpośrednio w VSCode:

```sh
npm run build
```

Plik `.vsix` pojawi się w katalogu `bin/` i można go zainstalować za pomocą:

```sh
code --install-extension bin/symbiote-<version>.vsix
```

## Pisanie i przesyłanie kodu

Każdy może wnieść wkład w kod Symbiote, ale prosimy o przestrzeganie tych wytycznych, aby zapewnić płynną integrację Twoich wkładów:

1. **Utrzymuj Pull Requesty skupione**

    - Ogranicz PR do jednej funkcji lub naprawy błędu
    - Podziel większe zmiany na mniejsze, powiązane PR
    - Podziel zmiany na logiczne commity, które można przeglądać niezależnie

2. **Jakość kodu**

    - Wszystkie PR muszą przejść kontrole CI, które obejmują zarówno linting, jak i formatowanie
    - Rozwiąż wszelkie ostrzeżenia lub błędy ESLint przed przesłaniem
    - Odpowiedz na wszystkie informacje zwrotne od Ellipsis, naszego zautomatyzowanego narzędzia do przeglądu kodu
    - Przestrzegaj najlepszych praktyk TypeScript i zachowaj bezpieczeństwo typów

3. **Testowanie**

    - Dodaj testy dla nowych funkcji
    - Uruchom `npm test`, aby upewnić się, że wszystkie testy przechodzą
    - Zaktualizuj istniejące testy, jeśli Twoje zmiany na nie wpływają
    - Uwzględnij zarówno testy jednostkowe, jak i integracyjne, gdy jest to właściwe

4. **Wytyczne dotyczące commitów**

    - Pisz jasne, opisowe komunikaty commitów
    - Odwołuj się do odpowiednich problemów w commitach, używając #numer-problemu

5. **Przed przesłaniem**

    - Rebase swojej gałęzi na najnowszego maina
    - Upewnij się, że Twoja gałąź buduje się pomyślnie
    - Sprawdź ponownie, czy wszystkie testy przechodzą
    - Przejrzyj swoje zmiany pod kątem wszelkiego kodu debugującego lub logów konsoli

6. **Opis Pull Requesta**
    - Jasno opisz, co robią Twoje zmiany
    - Dołącz kroki do przetestowania zmian
    - Wymień wszelkie istotne zmiany
    - Dodaj zrzuty ekranu dla zmian UI

## Umowa o współpracy

Przesyłając pull request, zgadzasz się, że Twoje wkłady będą licencjonowane na tej samej licencji co projekt ([Apache 2.0](../LICENSE)).

## Podziękowania

Ten przewodnik współpracy jest adaptacją [przewodnika współpracy Roo Code](https://github.com/RooVetGit/Roo-Code/blob/main/CONTRIBUTING.md), ze zmianami odzwierciedlającymi specyficzne wymagania i procesy Symbiote.
