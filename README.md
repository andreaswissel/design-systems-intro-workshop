# Design mit System - Skalierbare Designsysteme mit Storybook und Angular

Ihr Trainer: [Andreas Wissel](https://twitter.com/andreas_wissel), Freelance Consultant

## Aufbau

### Schritt 1: Geräte und Software

Bitte bringen Sie Ihre Entwicklergeräte mit und installieren Sie die folgende Software. [Schon erledigt? Klicken Sie hier für Schritt 2.](#step-2-demo-repository)

**HINWEIS:** Da sich Webtechnologien schnell entwickeln, kann es in der Zwischenzeit neue Versionen geben. Um sicherzustellen, dass alles wie vorgesehen funktioniert, empfehlen wir Ihnen dringend, sich an die unten angegebenen Versionen zu halten. Vielen Dank!

#### Geräte

- Laptop mit aktueller Windows/macOS/Linux-Version
  - Stellen Sie sicher, dass Sie ohne Proxys ins Internet gehen und Software ohne Gruppenrichtlinien etc. installieren können.
  - Verwenden Sie im Zweifelsfall Ihr privates Notebook.

#### Browser (Desktop)

- [Microsoft Edge](https://www.microsoft.com/en-us/edge), oder ein Chromium-Äquivalent @ Version 93 oder höher

#### Entwickler-Tools

- [Git](https://git-scm.com/)
  - Optional: Git UI-Tool wie TortoiseGit, Tower, SourceTree, GitKraken, ...
- [Node.js](https://nodejs.org/en/), Version 18.14.0
- Editor Ihrer Wahl
  - [WebStorm](https://www.jetbrains.com/webstorm/) aktuelle Version
  - [Visual Studio Code](https://code.visualstudio.com/), aktuelle Version

#### Designer-Werkzeuge

- Erstellen Sie ein kostenloses Konto bei [Figma](https://figma.com)

### Schritt 2: Demo Repository

Führen Sie bitte in Ihrem bevorzugten Terminal aus:

```
npm uninstall -g @angular/cli @storybook/cli
npm cache verify
npm install -g @angular/cli@18.14.0
```

Als nächstes navigieren Sie zu einem Ordner Ihrer Wahl und führen ihn aus:

```
git clone https://github.com/andreaswissel/design-systems-intro-workshop
cd design-systems-intro-workshop
```

Wenn Sie SSH bevorzugen, können Sie diese Checkout-URL verwenden: `git@github.com:andreaswissel/design-systems-intro-workshop.git`