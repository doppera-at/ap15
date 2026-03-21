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
- Documentation: [Quick-Start](https://docs.github.com/en/get-started/start-your-journey/hello-world) | [Komplett-Referenz](https://docs.github.com/en)

### Git-Integration in IDEs
So ziemlich jede moderne Entwicklungsumgebung bietet die Möglichkeit um direkt innerhalb des Programms mit Git zu arbeiten, manchmal muss dafür eine *Extension* oder ein *Plugin* installiert werden. Jedes Programm hat jedoch eine eigene Art wie die grafische Oberfläche aussieht und wie man demnach mit Git arbeitet, sodass ich mich hier auf die *Command-Line* fokussiere. Mit den *Git-Befehlen* umgehen zu können ist demnach universell einsetzbar und überall gleich, weshalb ich stark empfehle den Umgang mit ihnen zu lernen, wobei eine grafische Oberfläche vor Allem bei der Visualisierung von Branches sehr helfen kann.
Durch den Fokus auf das Arbeiten im *Terminal* setze ich grundlegende Kenntnisse in der Navigation voraus: Man sollte sich in Ordner hinein und aus ihnen hinaus bewegen können.


## Repositories
Ganz gleich ob lokal mittels **Git** oder online auf **GitHub**, ein Repository bezeichnet einen Ordner dessen Inhalt mit **Git** kontrolliert wird und in dem sich auch der `.git`-Ordner befindet. Alle Änderungen werden separat gespeichert, während die Dateien selbst immer den neuesten Stand widerspiegeln.

### Ein lokales Repository initialisieren
Nachdem man einen Ordner erstellt hat in dem man arbeiten möchte und sich im *Terminal* in diesen befindet, kann man den Befehlen `git init` verwendet um den `.git`-Ordner erstellen und mit den von **Git** benötigten Grundinfos zu befüllen. Ab diesem Zeitpunkt ist dieser Ordner mit **Git** verwendbar.

### Ein Repository clonen
Alternativ kann man auch auf der Seite des Hosting-Providers ein leeres Repository erstellen und dieses dann klonen, wodurch das online verfügbare Repository in einen Ordner auf dem lokalen Dateisystem geladen wird. Dabei werden nicht nur die bereits bestehenden Dateien geladen, sondern auch die gesammte Vergangenheit mit allen Änderungen die vorgenommen worden sind.
Dies funktioniert auch mit Repositories die anderen Nutzern gehören aber öffentlich in deren Profil einsehbar sind.
- HTTPS: `git clone https://www.github.com/doppera-at/ap15.git` - hierfür wird ein [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) benötigt
- SSH: `git clone git@github.com:doppera-at/ap15.git` - hierfür wird ein [SSH-Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh) benötigt (meine bevorzugte Methode)
- [GitHub-CLI](https://cli.github.com/): `gh repo clone doppera-at/ap15.git` - bisher noch nicht damit gearbeitet, da es ein extra zu installierendes Tool von GitHub ist und ich lieber meinen Workflow universell nutzen können möchte.

### Bestimmte Dateien und Ordner ausschließen


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

