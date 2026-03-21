# Git Overview

## Git vs. GitHub

Versionskontrolle ist in der Welt der Programmierung essentiell, mit **Git** als das meist genutzte VCS-Tool und **GitHub** als der populärste Hosting-Dienst. Auch wenn diese beiden Themen (VCS und Hosting) in den meisten Fällen Hand-in-Hand gehen und deshalb inzwischen sogar oft synonym verwendet werden, ist es wichtig zu verstehen dass diese beiden Konzepte getrennt voneinander existieren. Es gibt noch weitere Systeme zur Versionskontrolle (anstelle von Git) und noch viel mehr Hosting-Provider (anstelle von GitHub).

### Was ist Git?
[Git](https://git-scm.com) ist ein sogenanntes **Version Control System (VCS)**, wurde von *Linus Torwalds* für die Entwicklung des *Linux-Kernels* geschrieben und ist heute das meistgenutzte Programm um Änderungen nachvollziehbar zu machen. Normalerweise sind alte Versionen verloren sobald wir eine Datei speichern an der wir Änderungen vorgenommen haben, doch Git speichert jede Zeile die hinzugefügt, entfernt oder modifiziert wurde, wordurch es möglich ist genau nachzuverfolgen was mit den Dateien passiert ist.
Git wird zwar meist gemeinsam mit einem Hosting-Dienst verwendet, ist aber für sich allein genommen ein lokales Program. Alle Informationen zu den Änderungen sind in einem eigenen Ordner `.git` zu finden, der meist (je nach Einstellungen des Benutzers im Betriebssystem) versteckt ist.
- Installation: [Windows](https://git-scm.com/install/windows) | [Linux](https://git-scm.com/install/linux) | [MacOS](https://git-scm.com/install/mac)
- Dokumentation: [CheatSheet](https://git-scm.com/cheat-sheet) | [Komplett-Referenz](https://git-scm.com/docs)
- "Pro Git" Buch: [Deutsch](https://git-scm.com/book/de/v2) | [Englisch](https://git-scm.com/book/en/v2)

### GitHub
[GitHub](https://www.github.com) ist eben so ein **Hosting-Dienst** der in *Verbindung mit Git* verwendet wird und die Zusammenarbeit von mehreren Personen (sehr oft sogar öffentlich und mit fremden Personen) ermöglicht und erleichtert. Die Git-Informationen werden hochgeladen, sind optional öffentlich einsehbar, Änderungen können sehr leicht innerhalb eines Teams synchronisiert werden und (im Falle eines öffentlichen Repositories) sogar von Personen außerhalb des Teams vorgenommen werden (müssen dann aber erst noch akzeptiert werden nachdem sich jemand die Modifikationen angesehen hat).
Darüber hinaus gibt es sogar einen eigenen Bereich der für aufgetauchte Probleme oder gewünschte Features genutzt werden kann. So kann das Team hinter einem Programm über einen auftretenden Bug informiert werden oder man nimmt Einfluss auf die weitere Entwicklung durch Feature-Requests ohne dass man überhaupt Programmieren können muss.


## Mit einem Repository starten
### Ein Repository initialisieren
### Ein Repository clonen


## Änderungen vornehmen
### Staging
### Commits
### Fetch
### Pull
### Push


## Branches
### Erstellen
### Zu einem Branch wechseln
### Merging - Änderungen zusammenführen
### Rebase

