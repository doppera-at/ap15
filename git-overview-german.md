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
- Dokumentation: [Quick-Start](https://docs.github.com/en/get-started/start-your-journey/hello-world) | [Komplett-Referenz](https://docs.github.com/en)

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

### Die Commit-History anzeigen
Um die vergangenen Änderungen einzusehen gibt es den Befehl `git log`. Mit diesem kann man sich die letzten gemachten Änderungen anzeigen lassen, mitsamt den Infos darüber *wann* eine Änderung von *wem* gemacht wurde und *was* sie beinhaltet - was allerdings in einer grafischen Oberfläche oftmals einfacher verständlich angezeigt wird (wobei auch hier gilt dass man flexibler bleibt wenn man sich mit der Anzeige im Terminal vertraut macht). Um die **History** besser visualisieren zu können gibt es noch zusätzliche Optionen mit denen man den Output dieses Befehls verändern kann:
- `git log`: Zeigt die letzten Commits in der History einfach nacheinander an (mit den Pfeiltasten kann man weiter zurück navigieren, `q` beendet diese Ansicht)
- `git log --graph`: Mit der `--graph`-Option werden vor allem verschiedene Branches besser visualisiert, ich verwende seit dem Lernen dieser Option nur mehr diese Ansicht, da sie echt hilft um Commits in verschiedenen Zweigen einfach zu erkennen.
- `git log --abbrev-commit`: Mit dieser Option werden die **Commit-Hashes** die zur eindeutigen Identifizierung dienen verkürzt (als Info: um ein Commit anzusehen braucht man nicht den gesamten Hash angeben, es reichen auch weniger Zeichen wenn ein Commit damit eindeutig identifiziert werden kann)
- `git log --oneline`: Diese Option reduziert die Menge an Informatioen auf eine einzige Zeile, sehr gut um einen Überblick zu erhalten - für mich auch der Standard inzwischen

### Aliase definieren
Diese Optionen können auch kombiniert werden, wodurch sich wirklich praktische Befehle ergeben - diese immer wieder einzugeben kann anstrengend sein, weshalb es sich anbietet dafür ein `alias` zu definieren. Dies kann mittels der Datei `.gitconfig` gemacht werden, die sich im **Home-Directory** befindet: Unter Linux in `/home/user/.gitconfig`, in Windows in `C:/Users/user/.gitconfig` bzw. `C:/Benutzer/user/.gitconfig`.
Die folgenden Aliase habe ich mir nicht selbst ausgedacht sondern aus einem StackOverflow-Post übernommen, der mir damals auch gezeigt hat wie man die Logs "grafisch" aufbereitet anzeigen lässt:
```
[alias]
    lg1 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(auto)%d%C(reset)' --all
    lg2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(auto)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)'
    lg = lg1
```
Ab jetzt kann man statt `git log` auch `git lg` schreiben und erhält die Formatierung die bei `lg1` definiert ist.

### Unterschiede zwischen Versionen anzeigen
Es ist natürlich möglich noch genauere Details zu den einzelnen **Commits** zu erhalten, indem man entweder mit `git show <hash>` die Änderungen dieses spezifischen Commits oder mit `git diff <hash>` die Differenz vom aktuellen Stand zu diesem Commit anzeigen lässt. In beiden Fällen reicht es aus nur ein paar Zeichen vom Hash einzugeben (die offizielle Empfehlung liegt bei 7, bei kleineren Repos - vor Allem den privaten - reichen aber auch weniger).
Hier werden hinzugefügte Zeilen ganz links mit einem `+` und in grün angezeigt, Zeilen die gelöscht worden sind mit `-` und in rot. Wichtig: Auch wenn man nur einen Buchstaben in einer Zeile verändert hat wird es angezeigt, als wäre die gesamte Zeile gelöscht und die gleiche Zeile (mit dem ausgetauschten Buchstaben) hinzugefügt worden. Direkte Veränderungen gibt es so in git nicht.
Gerade zu Beginn war das sehr verwirrend, da ein Einrücken von 3 Zeilen insgesamt 6 Zeilen in dem **Diff** anzeigt: 3x das *Löschen* dieser Zeilen und 3x das *Einfügen* der gleichen Zeilen, nur mit mehr Abstand links. Zuerst war ich verwirrt da ich ja eigentlich nichts gelöscht hatte und ich brauchte einige Zeit um mich daran zu gewöhnen, dass dies die Art und Weise ist wie Git Änderungen vermerkt.


## Änderungen vornehmen
Ganz gleich wie man Dateien jetzt genau verändert (VSCode, Visual Studio, Neovim oder sogar Notepad), löscht oder erstellt, Git erkennt diese Änderungen automatisch. Wie viele Änderungen in einem einzelnen `Commit` zusammengefasst werden ist Geschmackssache und wird unterschiedlich gehandhabt, mit Quellen die sagen dass die Commits "so klein als möglich" sein sollten, während Andere wieder von "vollständig zusammenhängenden Ánderungen" sprechen. Grundsätzlich gilt es eine Balance zu finden: Nicht jede Zeile einzeln zu committen, aber auch nicht ein ganzes Feature fertig zu programmieren (dafür bieten sich `Branches` eigentlich an, dazu später mehr).
Ein Commit ist nicht auf eine einzelne Datei gebunden und kann auch mehrere Dateien betreffen - wenn man zum Beispiel auf einer Webseite ein neues Div einfügt und dafür natürlich auch ein CSS-styling bereitstellt, so bietet es sich an diese beiden Änderungen gemeinsam zu committen anstatt jede Datei für sich genommen committed. Hier gilt es Git so viel wie möglich in seinen Workflow zu integrieren um langsam ein Gefühl für das ganze System zu bekommen und auch (wenn möglich) bei Kollegen nachzufragen wie Diese es so handhaben. Auch gibt es manchmal unterschiede der Handhabung von Firma zu Firma, also sollte man sich ohnehin immer nach den Gepflogenheiten erkundigen.

### Staging
Nachdem Änderungen vorgenommen worden sind, werden sie mit `git status` als **unstaged** gezeigt - das bedeutet, dass diese Veränderungen noch nicht für ein **Commit** vorgesehen sind. Um diese in ein **Commit** aufzunhemen, muss man sie erst hinzufügen: `git add filename.ext`. Damit werden alle Änderungen dieser Datei "gestaged", also für ein Kommitment vorgesehen. Hat man unabsichtlich eine Datein in diesen Zustand versetzt und möchte das zurücknehmen, kann man das mit `git restore --staged filename.ext` machen: der Befehl `restore` ist für weit mehr gut als nur Änderungen zurückzunehmen, weshalb mit der Flag `--staged` erst klargestellt wird, dass sich dieses Zurücksetzen auf Änderungen bezieht die sich grade im **Staging** befinden.
Wenn man alle getrackten Dateien stagen möchte, kann man das mit `git add .` machen - der Punkt steht hier für "Alles in diesem Ordner und darunter" und kann mitunter nicht **alle** Dateien betreffen wenn man sich in einem Unterordner befindet.

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

## Änderungen mithilfe von GitHub synchronisieren
Die Themen **Staging** und **Commit** sind Git-spezifisch und können komplett Lokal vorgenommen werden. In diesem Punkt werden die lokalen Änderungen auf ein Repository in der Cloud synchronisiert bzw. die Änderungen der Cloud ins lokale Dateisystem geholt.

### Pull
Um Änderungen von anderen Personen (oder die eigenen Änderungen wenn man zwischen zwei Systemen wechselt wie z.B. einem Laptop und einem Stand-PC) auf das lokale System zu laden, verwendet man `git pull`. Hiermit *zieht* man alle Updates aus dem Internet auf das lokale Dateisystem. Gerade wenn man alleine arbeitet gibt es nur selten ein Problem und nach diesem Befehl spiegeln die lokalen Dateien den aktuellsten Stand wider. Wenn man jedoch mit mehreren Personen an dem gleichen Projekt arbeitet können **Konflikte** auftreten, die man erst lösen muss bevor der **Pull** erfolgreich sein kann - dazu gleich mehr.

### Push
Mit einem **Push** schiebt man die lokalen Veränderungen in ein Repository das sich im Internet befindet. Alle Commits werden damit mit dem Repository auf z.B. GitHub synchronisiert und sich danach für alle Beteiligten verfügbar. Auch hier gilt, dass es meist keine Probleme gibt wenn man alleine an einem Repository arbeitet, speziell in der Zusammenarbeit mit mehreren Personen aber **Konflikte** auftreten können. Diese gilt es dann erst zu lösen bevor ein Push erfolgreich sein kann.

### Merge-Konflikte
Wenn bei einem **Push** oder einem **Pull** ein Konflikt auftritt (heißt Änderungen online **und** lokal betreffen die gleichen Codeteile bzw. Zeilen), dann muss dieses erst bereinigt werden. Bei der Nachricht die bei so einem Konflikt auftritt wird angezeigt um welche Dateien es sich handelt.
Wenn man diese Dateien dann öffnet findet man spezielle Bereiche (mit `>>>>>` und `<<<<<` gekennzeichnet, die einkommende bzw. ausgehende Änderungen anzeigen) und man muss sich entscheiden, welche der Bereiche man behalten will und welche man verwirft. So kann einerseits gesagt werden "bitte übernehme die Änderungen die von außen kommen und überschreibe meine lokale Variante" oder "Behalte das, was ich lokal verändert habe und verwerfe die Veränderungen die von außen kommen würden". Man kann diese Entscheidung für mehrere Bereiche individuell treffen, also Teile von außen übernehmen und Teile lokal behalten - wichtig ist nur, dass man diese Entscheidung für alle Bereiche trifft, wodurch sich dieser Konflikt dann gelöst hat. Danach kann der `Push` bzw. `Pull` Befehl nochmal ausgeführt und weiter gearbeitet werden.
Merge-Konflikte sind nicht einfach und sorgen gerade zu Anfangs für Kopfschmerzen. Im Schlimmsten Fall kann man auch das lokale Repository löschen und das Online-Repository neu klonen - ich empfehle jedoch sich mit der Handhabung von Konflikten direkt auseinanderzusetzen. Solche Konflikte sind unvermeidbar wenn man in einem Team zusammenarbeitet und es empfiehlt sich das Lösen solcher Konflikte zu üben wann immer man die Möglichkeit dazu hat.
Ein Merge wird dabei mit einem eigenen Commit synchronisiert, wodurch auch später immer noch nachvollziehbar ist welche Änderungen übernommen worden sind und welche man verworfen hat.

### Rebase
Ein `Rebase` ist ähnlich zu einem `Merge`, bringt aber einen deutlichen Unterschied mit sich: Während bei einem Merge die Geschichte des Repositories erhalten bleibt und der Merge selbst einen neuen Eintrag erstellt, werden bei einem `Rebase` die Änderungen so übernommen als wäre der Branch erst frisch erstellt worden. Bei beiden Methoden werden die Änderungen des des anderen Branches übernommen, lediglich wie die *History* danach aussieht ist anders - anstatt dass die Änderungen *nebenbeinander* verlaufen ergibt sich nach dem **Rebase** ein linearer Verlauf an Commits.
Da *Commits* dabei umgeschrieben werden gilt als wichtige Regel: Niemals einen *Branch* rebasen an dem auch andere Personen arbeiten, da das Umschreiben der Commits (und die resultierende Abweichung von allen Anderen) für Andere richtige Probleme verursachen kann. Bei lokalen, privaten Branches ist es meist problemlos möglich und wird dadurch auch von vielen Leuten als die bevorzugte Methode angesehen um die *Commit-History* sauber zu halten.
Ich persönlich habe mit `Rebase` selber noch wenig Erfahrung und trete diesem Befehl mit Respekt gegenüber, speziell wenn es sich um ein gemeinsames Repo handelt, und habe mich bisher immer mit einem `Merge` beholfen.


## Branches
Das Konzept von **Zweigen** ist ein tief in Git verankertes Thema: Direkt beim initialisieren eines Repositories wird bereits ein **Branch** erstellt der meistens `main` oder `master` heißt (wobei der Standard früher "master" war, sich inzwischen jedoch auf "main" gewechselt hat). Dieser Hauptzweig beinhaltet meist eine stabile, getestete Version der Software, während die Entwicklung dann auf anderen Zweigen stattfindet. Oft gibt es einen `dev`-branch der für die Entwicklung von der nächsten Version verwendet wird, während von diesem noch weitere Zweige weggehen, auf der dann einzelne Features entwickelt werden. Grundsätzlich bietet es sich an einen neuen Branch zu erstellen wenn man an einer neuen Version arbeitet (wie zum Beispiel ein Branch, der für die Entstehung dieses Dokuments zuständig ist - Disclaimer: Ich vergesse leider sehr gern bei privaten Repos darauf neue Branches anzulegen ^^"). Der Vorteil dabei ist, speziell bei Projekten die von fremden Personen genutzt wird wie bei OpenSource-Software, dass Änderungen die noch nicht fertiggestellt sind (wie auch hier in diesem Dokument der Fall) sich nicht sofort, aber eben nur teilweise, öffentlich im Repo befinden, sondern erst auf den Hauptzweig gelangen, wenn die Entwicklung fertiggestellt ist.

### Erstellen
Um einen neuen Branch zu erstellen gibt es mehrere Methoden (wobei diese Beiden nicht die Einzigen sind): `git branch <name>` und `git checkout -b <name>`, wobei der erste Befehl nur einen Branch erstellt, der Zweite zusätzlich die lokalen Dateien an diesen Branch auch direkt anpasst.

### Checkout
Bei mehreren Branches kann man auch zwischen ihnen hin und herwechseln, was mit `git checkout <branch-name>` möglich ist. Hierbei spiegeln die lokalen Dateien den aktuellen Zustand dieses Zweiges wieder.
Hat man also 2 Branches die an 2 unterschiedlichen Dateien Veränderungen vornehmen, so kann man hin- und her wechseln: Bei einem Branch ist `Datei1` anders aber `Datei2` unverändert, bei dem anderen Branch ist es umgekehrt.

### Beispiel
```
MAIN ==> o --- o --- o --- o --- o --- o ==>
                      \
        Feature ==>    o --- o --- o --- o ==>
```
Hier wurde beim dritten Commit (dem dritten `o`) ein Branch names "Feature" erstellt. In diesem Branch befindet sich der Zustand von Main, der bei den ersten 3 Commits vorhanden war, wie als wenn eine Kopie des "Main-Branch" erstellt wird. Demnach kann man an diesem Branch vom Stand aus weiterarbeiten, der bei der Erstellung des Branch geherrscht hat, weiterarbeiten. In diesem Beispiel wurden 3 Commits auf diesen Branch gemacht, während andere Commits auf dem Main-Branch gemacht worden sind - diese zwei Versionen weichen nun voneinander ab: "Main" hat 3 Veränderungen die nicht im "Feature" vorhanden sind und umgekehrt.
Würde man mit einem `checkout` von **Main** zu **Feature** wechseln, so sind die 3 Änderungen die auf dem *Main-Branch* gemacht worden sind, nicht mehr sichtbar - so als hätte es nie eine Veränderung gegeben. Dafür sind die Änderungen die im *Feature-Branch* gemacht worden sind da. Wechselt man nun wieder zurück auf *Main*, wo sind die Änderungen die im *Feature-Branch* gemacht worden sind verschwunden, dafür hat man die Veränderungen die in *Main* vorhanden sind wieder auf dem Dateisystem. Die lokalen Dateien spiegeln tatsächlich den Zustand wieder der aktuell auf diesem *Branch* herrscht, so als hätte man 2 Versionen auf dem PC (nur dass man hier nur einen Ordner hat und man mittels einem Befehl zwischen diesen Versionen wechseln kann)

```
MAIN ==> o --- o --- o --- o --- o -- o -- o ==>
                      \                   /
        Feature ==>    o --- o --- o --- o ==>
```
Nach den 3 Veränderungen in "Feature" ist die Entwicklung abgeschlossen und die Änderungen wurden mit dem "Main-Branch" zusammengeführt - ab jetzt sind die 3 Änderungen die in "Main" vorgenommen und auch die 3 Änderungen die in "Feature" gemacht worden sind in "Main" kombiniert verfügbar. Dieser Merge ist auch in den Logs deutlich zu sehen und man kann genau nachvollziehen was passiert ist.

