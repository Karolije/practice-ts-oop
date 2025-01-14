> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s3e04-ts-oop` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#04` TypeScript: Programowanie obiektowe

Napisz klasę abstrakcyjną `Plugin` oraz interfejs `Logger`, które są implementowane przez klasy `Writter` oraz `Messager`.

Klasa abstrakcyjna `Plugin` zawiera metody:
- install() - zapisuje referencje do utworzonego obiektu na lisćie aktywnych pluginów
- uninstall() - usuwa referencje
- showActivePlugins() - statyczna metoda zwracająca wszystkie pluginy z listy aktywnych

Interfejs `Logger` zawiera metody
- add() - dodaje komunikat
- print() - wyświetla wszystkie komunikaty i je resetuje

W przypadku klasy `Writter` komunikaty są wyświetlane przy pomocy `console.log()`.
W przypadku klasy `Messager` komunikaty są wyświetlane przy pomocy `alert()`.

Wykorzystaj `Plugin.showActivePlugins()`, aby wyświetlić wszystkie komunikaty.

 
&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-ts-typing-advanced)**

> :arrow_left: [*poprzednie zadanie*](./../03) | [*następne zadanie*](./../05) :arrow_right:
