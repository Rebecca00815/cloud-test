# Kritzel Block

Notizen mit dem Apple Pencil, im Nord-Look. Eine einzelne Web-App (`index.html`), die du auf dem iPad wie eine App installierst. Kein Mac, kein Developer-Account.

## Aufs iPad bringen

1. Das Repo über **GitHub Pages** veröffentlichen: Repo-Einstellungen, Pages, Branch wählen, Ordner `/ (root)`.
2. Die Adresse in **Safari** auf dem iPad öffnen.
3. Teilen-Symbol, **Zum Home-Bildschirm**. Danach läuft die App im Vollbild und auch offline.

## Was sie kann

- **Stifte:** Fineliner, Kuli (druckempfindlich), Marker (halbtransparent, liegt unter der Tinte), Radierer (löscht ganze Striche).
- **Fünf Stiftbreiten** je Stift, **zehn Farben**: Nachtgrau, Schiefergrau, Frost-Töne, Navy, Kronen-Rot, Neongelb, Hellgrau.
- **Papier:** Punkte (Standard), Liniert, Kariert, Blanko. Das Papier bleibt immer hell.
- **Pencil malt, Finger scrollt.** Schalter „Finger: malt" für den Notfall.
- Zurück / Vor, endlos lange Seiten, mehrere Notizen, automatisches Speichern auf dem Gerät (IndexedDB).
- **PNG-Export** über das iPad-Teilen-Menü.

## Handschrift in Text umwandeln

Die Handschrift bleibt immer erhalten. Der Text kommt **zusätzlich als Objekt auf die Seite**, kein extra Feld.

1. Werkzeug **Auswahl → Text** wählen, mit dem Pencil einen Rahmen um die Handschrift ziehen. Das Bild geht an die Claude-API, der erkannte Text erscheint direkt unter dem Rahmen. Dafür ist ein eigener Anthropic-API-Schlüssel nötig. Er wird einmal abgefragt und nur im Browser des iPads gespeichert. Ändern oder löschen unter Notizen, **API-Schlüssel**.
2. Mit demselben Werkzeug: Text **ziehen** verschiebt ihn, **antippen** öffnet ihn zum Bearbeiten (dort funktioniert auch Scribble), eine **leere Stelle antippen** legt einen neuen Text an.
3. Der Radierer löscht auch Text, Zurück/Vor gilt für Text genauso. Text steht auch in PNG und PDF.

## Grenzen (ehrlich)

- Eine Web-App hat etwas mehr Stiftverzögerung als eine native App und kennt weder Doppeltippen noch Squeeze des Pencil.
- Die Anzeige skaliert die Seitenbreite auf die verfügbare Fläche. Öffnest du das Textfeld, wird die Seite kleiner, nicht abgeschnitten.
- Daten liegen nur auf dem Gerät. Safari kann sie löschen, wenn die App lange nicht benutzt wird. Wichtiges also als PNG sichern.
