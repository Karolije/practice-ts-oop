> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s3e04-ts-oop` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03` TypeScript: Programowanie obiektowe

Napisz klasę `Notification` z metodą `send()`, która wypisuje `Sending notification`.

Następnie utwórz klasy, które dziedziczą po klasie `Notification`:
- `EmailNotification` - nadpisuje metodę `send` i wypisuje `Sending email notification`
- `SMSNotification` - nadpisuje metodę `send`, wypisując `Sending SMS notification`

Zastanów sie czy istnieje możliwość wykorzystania metody z rodzica, aby rozwiązać problem dostosowania odpowiedniego komunikatu do klasy.

Dodatkowo napisz metodę statyczną dla `Notification` o nazwie `notify`, która w argumencie przyjmuje tablicę obiektów klasy `Notification` (pamiętaj, że klasa czy interfejs to również typ) i uruchamia dla każdego z obiektów metodę `send`.

Przedstaw przykład, który prezentuje wykorzystanie każdej z metod.


&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-ts-typing-advanced)*

> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:
