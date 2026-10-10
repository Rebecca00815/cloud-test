# Handoff: Morse-Generator (Mac-App)

Stand 10.10.2026 (abends)

## Worum es geht
Rebecca wollte Wörter in Morsecode und Audio (WAV zum Herunterladen) umwandeln, wie auf morsecodeapp.com. Daraus wurde eine Desktop-App für ihren Mac mini (Apple Silicon).

## Wo liegt was
- Repo: `Rebecca00815/cloud-test`
- Branch: `claude/dreamy-turing-h4ehzp` (nicht in `main` gemergt, kein Pull Request)
- `index.html`: die komplette App (Oberfläche und Logik, eine Datei)
- `main.js`: Electron-Fenster (720 × 760), lädt `index.html`
- `package.json`: Electron und electron-builder, `afterPack` signiert die App ad hoc
- `build/adhoc-sign.js`, `build/icon.svg`, `build/icon.png`: Notsignatur und Icon
- `fonts/`: Jost Light und Medium (OFL), Rückfall für Futura
- `.github/workflows/build-mac.yml`: baut `.dmg` und `.zip` (arm64 und x64) auf einem Mac-Runner, bei Push auf den Branch und manuell

## So kommt Rebecca an die App
1. github.com, Repo, Reiter Actions, neuesten Lauf öffnen
2. Unten bei Artifacts `Morse-Generator-mac` laden und entpacken
3. `Morse-Generator-1.0.0-arm64.dmg` öffnen, App in Programme ziehen
4. Alte App vorher beenden und in den Papierkorb ziehen, sonst bleibt die alte Fassung
5. Erster Start: Doppelklick, Meldung "Apple konnte nicht überprüfen …" mit Fertig schließen, dann Systemeinstellungen, Datenschutz & Sicherheit, ganz unten "Dennoch öffnen". Nur einmal nötig. Rechtsklick und Öffnen reicht seit macOS 15 nicht mehr.
   Bestätigt am 10.10.2026 (Build Nr. 10): Die Notsignatur wirkt, macOS meldet nicht mehr "beschädigt", `xattr` ist nicht mehr nötig.

## Entscheidungen
- Tempo in BPM statt Wörter pro Minute. 1 Beat = Viertelnote, 1 Morsepunkt = Sechzehntel (4 Punkte pro Beat). 120 BPM entspricht etwa 10 WPM. Bereich 40 bis 240, Standard 120. Von Rebecca nicht ausdrücklich bestätigt.
- Timing: Strich 3, Zeichenpause 3, Wortpause 7 Einheiten.
- Zeichen: A bis Z, 0 bis 9, Ä Ö Ü ß, gängige Satzzeichen. Unbekanntes wird übersprungen und angezeigt.
- WAV: 16 Bit, mono, 44,1 kHz, 5 ms Ein- und Ausblenden gegen Knacken.
- Die App ist nur notsigniert, nicht von Apple beglaubigt (kein Developer-Konto).

## Design: Stand
- Design "minimal", am 10.10.2026 mit dem echten Skill `design-minimal` abgeglichen (SKILL.md und `tokens.css`).
- Korrigiert: Tokens (`--mid` #6b6b6b, `--faint` #a3a3a3, `--rule` #e2e2e2 statt eigener Grautöne), Schriftfamilie "SB Futura" mit den lokalen Namen aus dem Skill (Futura Light BT), Jost nur als Rückfall, `font-synthesis:none`, Etiketten-Laufweite .28em, Grundschrift 16 px.
- Aufbau (zweite Runde, nach Rebeccas "nicht ganz übersichtlich"): zwei Spalten nach Skill. Links breit Text 01 (28 px, das einzige große Element) und Morsecode 02, rechts an einer Haarlinie Tempo 03, Tonhöhe 04, Audio 05. Kopf nur Etikett, Untertitel, Kopflinie. Unter 760 px einspaltig. Die erste Runde hatte das Tempo als riesige Zahl im Kopf, das war die falsche Hierarchie.
- Futura Light wurde auf dem Mac nicht gefunden (Text sah zu kräftig aus). Jetzt mit allen Namen aus Rebeccas Obsidian-Snippet `minimal.css`, darunter `FuturaBT-Light`. Auf dem Mac bestätigen lassen.
- Schwarzer Knopf entfernt (Farbfläche), beide Knöpfe als unterstrichene Etiketten. Fokus als Haarlinie statt Kasten. Hinweis kursiv in Grau, Leitwort aufrecht Medium.
- Morsecode bricht nur noch zwischen Zeichen um (vorher mitten im Zeichen am "-").
- Icon: weißer Grund, Punkt Strich Punkt eckig in #141414, Haarlinie #e2e2e2. Die Squircle-Außenform bleibt als macOS-Vorgabe (sonst setzt macOS 26 das Icon in einen grauen Rahmen).
- Fenster 960 × 720 (Mindestgröße 560 × 640).
- Vorher gab es Nord-Fassungen (Skill `nord`, inzwischen abgelöst) und eine Minimal-Fassung nach Beschreibung. Nur im Git-Verlauf.

## Offen
- Aussehen mit echter Futura Light BT auf dem Mac prüfen (im Test lief Jost).
- Ob der Punkt ein Sechzehntel sein soll oder etwas anderes.
- Entscheiden, ob der Branch in `main` soll (Pull Request nur auf Ansage).

## Getestet
- Logik per Node: Übersetzung, Timing auf den Sample genau, gültige WAV-Datei.
- Oberfläche im Browser: Klick, Download, Handybreite (390 px), Fensterbreite (720 px), kein Querscrollen.
- Nicht getestet: die App selbst auf dem Mac, Ton über Lautsprecher, Aussehen mit echter Futura.
