> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s3e04-ts-oop` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` TypeScript: Programowanie obiektowe

Twoim zadaniem jest stworzenie systemu umiejętności dla postaci w grze komputerowej, który wykorzystuje dziedziczenie, polimorfizm, hermetyzację oraz abstrakcję.

Klasa (abstrakcyjna) `Character` zawiera:
- pole prywatne `name`
- pole prywatne `health`
- getter i setter dla `health` – zdrowie nie może być mniejsze niż 0 ani większe niż 100. W przypadku, gdy zdrowie jest równe 0 lub mniejsze to należy w konsoli wyświetlić odpowiedni komunikat "[name] umiera".
- abstrakcyjną metodę `useSkill(target: Character)` - w klasie docelowej należy wyświetlić kominikat, kto kogo atakuje, jaką umiejętnością i ile życia zostało przeciwnikowi.
- statyczną metodę `performAction(actor: Character, target: Character)`, która wykorzystuje metodę `useSkill` klasy przekazanej jako argument

Klasy potomne:
- **Warrior**, umiejętność: "Slam" – zadaje obrażenia w wysokości 15 punktów zdrowia
- **Mage**, umiejętność: "Fireball" – zadaje obrażenia w wysokości 10 punktów zdrowia i spala dodatkowe 10% punktów zdrowia podczas następnego ataku
- **Healer**, umiejętność: "Heal" – leczy wybraną postać o 10 - 20% (losowo) punktów jego zdrowia.


Przeprowadź symulację aż do momentu kiedy ktoś nie zginie: 2 Wojowników atakuje Maga (jeden po drugim), Mag kontratakuje jednego z nich, a Uzdrowiciel leczy Maga. 


&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-ts-typing-advanced)*

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:
