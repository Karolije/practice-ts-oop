> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s3e04-ts-oop` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#01` TypeScript: Programowanie obiektowe

Napisz klasę `User`, która przechowuje dane użytkownika w prywatnych polach tj.
- email
- password

Dane to mogą zostać nadpisane przy pomocy akcesora dostępu (setter).

W przypadku hasła, zapisujemy go jedynie w formie [skrótu](https://pl.wikipedia.org/wiki/Funkcja_skr%C3%B3tu) - aby przejęcie tych informacji, nie powodowało od razu przejęcia hasła.

Do rozwiązania możesz wykorzystać poniższą funkcję (zapisz jako metodę prywatną w obiekcie):

```
async function hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password); // Konwertuj hasło na bajty
    const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Oblicz hash
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Konwertuj wynik na tablicę bajtów
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join(''); // Na format hex
    return hashHex;
}

// Przykładowe użycie
hashPassword("mojeBezpieczneHaslo").then((hash: string) => {
    console.log("Hash:", hash);
});
```

Wykorzystaj publiczną metodę `check(email, password)` do sprawdzenia czy dane przechowywane w obiekcie są zgodne z danymi przekazanymi w argumencie. Pamiętaj, że podane hasło należy napierw zamienić na hash (skrót), a dopiero potem je porównywać. 





&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-ts-typing-advanced)*

> :arrow_left: ~~*poprzednie zadanie*~~ | [*następne zadanie*](./../02) :arrow_right:
