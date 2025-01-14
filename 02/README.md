> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s3e04-ts-oop` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#02` TypeScript: Programowanie obiektowe

Zaprojektuj klasę `UUID`, która będzie posiadać:
- statycznę metodę `generate()`, która zwraca unikalny identyfikator w formie `xxxx-xxxx-xxxx-xxxx`, gdzie `x` to dowolny znak
- statyczną metodę `validate(uuid)`, która zweryfikuje czy podany w argumencie ciag znaków jest poprawnym identyfikatorem wygenerowanym przez UUID
- statyczne pole `count`, które zlicza liczbę wygenerowanych identyfikatorów

Następnie napisz klasę abstrakcyjną `Product`, która generuje dla każdego obiektu nowe pole `uuid` z zawartością wygenerowaną przez klasę `UUID`.

Następnie utwórz klasę `Book`, która dziedziczy po `Product` i posiada niezbędne dane tj.
- author
- title

Sprawdź jaka wartość będzie przechowywana w `UUID.count` przy takiej implementacji:
```
const book1 = new Book('title2', 'author2');
const book2 = new Book('title2', 'author2');

console.log(book1.uuid);
console.log(book2.uuid);
console.log(UUID.count);
```



&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-ts-typing-advanced)*

> :arrow_left: [*poprzednie zadanie*](./../01) | [*następne zadanie*](./../03) :arrow_right:

