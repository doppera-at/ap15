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
Dies funktioniert auch mit Repositories die anderen Nutzern gehören aber öffentlich in deren Profil einsehbar sind, doch Änderungen können nicht einfach so wieder hochgeladen werden - dazu später mehr.
- HTTPS: `git clone https://www.github.com/doppera-at/ap15.git` - hierfür wird ein [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) benötigt
- SSH: `git clone git@github.com:doppera-at/ap15.git` - hierfür wird ein [SSH-Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh) benötigt (meine bevorzugte Methode)
- [GitHub-CLI](https://cli.github.com/): `gh repo clone doppera-at/ap15.git` - bisher noch nicht damit gearbeitet, da es ein extra zu installierendes Tool von GitHub ist und ich lieber meinen Workflow universell nutzen können möchte.

### Bestimmte Dateien und Ordner ausschließen
Da man nicht immer alle Dateien synchronisieren möchte (wie zum Beispiel VSCode spezifische Projektdaten, Datenbanken Dateien mit sensiblen Daten) gibt es eine Möglichkeit um diese auszuschließen. Dazu muss man lediglich eine `.gitignore`-Datei im gleichen Verzeichnis wo sich auch der `.git`-Ordner befindet erstellen und dort die Dateien eintragen. Dabei kann man entweder den kompletten Namen angeben, mit `*.txt` alle `txt`-Dateien ignorieren oder auch ganze Ordner mit einem Schrägstrich am Ende `example_folder/` angeben, die dann nicht von Git getrackt werden.


## Infos zu aktuellem Stand oder Veränderungen erhalten
Einer der wichtigsten Befehle bei der Nutzung von Git ist `git status`. Hiermit wird einem angezeigt welche Änderungen gemacht worden sind die noch nicht festgelegt worden sind. Bevor man pusht oder die Arbeit für den heutigen Tag beenden möchte lohnt sich ein Blick auf den aktuellen Status des Repositories, auch wenn man die Änderungen noch nicht pushen möchte.


## Änderungen vornehmen
Ganz gleich wie man Dateien jetzt genau verändert (VSCode, Visual Studio, Neovim oder sogar Notepad), löscht oder erstellt, Git erkennt diese Änderungen automatisch. Wie viele Änderungen in einem einzelnen `Commit` zusammengefasst werden ist Geschmackssache und wird unterschiedlich gehandhabt, mit Quellen die sagen dass die Commits "so klein als möglich" sein sollten, während Andere wieder von "vollständig zusammenhängenden Ánderungen" sprechen. Grundsätzlich gilt es eine Balance zu finden: Nicht jede Zeile einzeln zu committen, aber auch nicht ein ganzes Feature fertig zu programmieren (dafür bieten sich `Branches` eigentlich an, dazu später mehr).
Ein Commit ist nicht auf eine einzelne Datei gebunden und kann auch mehrere Dateien betreffen - wenn man zum Beispiel auf einer Webseite ein neues Div einfügt und dafür natürlich auch ein CSS-styling bereitstellt, so bietet es sich an diese beiden Änderungen gemeinsam zu committen anstatt jede Datei für sich genommen committed. Hier gilt es Git so viel wie möglich in seinen Workflow zu integrieren um langsam ein Gefühl für das ganze System zu bekommen und auch (wenn möglich) bei Kollegen nachzufragen wie Diese es so handhaben. Auch gibt es manchmal unterschiede der Handhabung von Firma zu Firma, also sollte man sich ohnehin immer nach den Gepflogenheiten erkundigen.

### Staging
Nachdem Änderungen vorngenommen worden sind, werden sie mit `git status` als **unstaged** gezeigt - das bedeutet, dass diese Veränderungen noch nicht für ein **Commit** vorgesehen sind. Um diese in ein **Commit** aufzunhemen, muss man sie erst hinzufügen: `git add filename.ext`. Damit werden alle Änderungen dieser Datei "gestaged", also für ein Kommitment vorgesehen. Hat man unabsichtlich eine Datein in diesen Zustand versetzt und möchte das zurücknehmen, kann man das mit `git restore --staged filename.ext` machen: der Befehl `restore` ist für weit mehr gut als nur Änderungen zurückzunehmen, weshalb mit der Flag `--staged` erst klargestellt wird, dass sich dieses Zurücksetzen auf Änderungen bezieht die sich grade im **Staging** befinden.
Wenn man alle Dateien hinzufügen möchte, kann man das mit `git add .` machen - der Punkt steht hier für "alle".

### Commits
Hat man sich dafür Entschieden Änderungen auch wirklich durchzuführen, dann kann man sich zu ihnen kommitten, was alle Veränderungen mit einer Nachricht versieht und in die **Git-History** übernimmt. Dafür gibt es mehrere Wege, die folgende Aufzählung ist nur ein kleiner Aufzug und um alle Möglichkeiten auszuschöpfen kann man sich gerne mehr mit diesem Befehl auseinandersetzen:
- `git commit`: Öffnet den als Standard definierten Editor, in dem man seine Nachricht schreibt.
- `git commit -m "Beschreibung der gemachten Änderungen"`: Überspringt das Öffnen des Editors, indem man die **Commit-Nachricht** direkt mit angibt.
- `git commit -a -m "Beschreibung aller Änderungen"`: Anstatt Dateien zuerst in den **Staged**-Zustand zu versetzen, kann mittels `-a` auch angegeben werden dass man alle Änderungen committen möchte.
Commit-Nachrichten sollten kurz und prägnant über das, was in diesem **Commit** verändert wurde, informieren - wobei es auch hier wieder die verschiedensten Meinungen gibt wie detailliert Commit-Nachrichten sein sollen. Jedoch gibt es schon ein paar Regeln die sich im Laufe der Zeit herauskristallisiert haben und an die man sich halten sollte, um eine gemeinsame Struktur beizubehalten:
- Die erste Zeile beinhaltet eine kurze, stichwortartige Zusammenfassung was passiert ist, beginnend mit einem Verb: `add functionality to sort products by price`
- Eine leere Zeile trennt diesen kurzen Überblick
- Danach kann man tiefer ins Detail gehen wenn man das Gefühl hat, dass mehr Information hilfreich wäre - dafür können auch gerne Aufzählungen verwendet werden.
Meistens belasse ich meine Nachrichten bei einer Zeile, da ich meine Commits relativ klein halte - das ist jedoch subjektiv und man soll seinen eigenen Stil finden (der vielleicht noch durch Firma / Kollegen oder OpenSource-Projekte beeinflusst werden). Was jedoch wichtig ist ist die Unterscheidung zwischen der kurzen Übersicht und den detaillierteren Informationen, da in der **Git-History** meist nur die erste Zeile angezeigt wird und somit aussagekräftig sein soll.

### Fetch
### Pull
### Push


## Branches
### Erstellen
### Zu einem Branch wechseln
### Merging - Änderungen zusammenführen
### Rebase

