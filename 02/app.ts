const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

function getRandomChar(): string {
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}

function generateChunk(): string {
  let chunk = '';
  for (let i = 0; i < 4; i++) {
    chunk += getRandomChar();
  }
  return chunk;
}

class UUID {
  static count: number = 0;
  static generate(): string {
    const parts: string[] = [];
    for (let i = 0; i < 4; i++) {
      parts.push(generateChunk());
    }
    const id = parts.join('-')
this.count++
return id
  }

  static validate(uuid: string): boolean {
    const regex = /^[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}$/;
    return regex.test(uuid);
  }

}

abstract class Product {
  public uuid: string;
  constructor() {
    this.uuid = UUID.generate();
  }
}

class Book extends Product {
  public title: string;
  public author: string;

  constructor(title: string, author: string) {
    super();
    this.title = title
    this.author = author;
  }
}

const book1 = new Book('title2', 'author2');
const book2 = new Book('title2', 'author2');

console.log(book1.uuid);
console.log(book2.uuid);
console.log(UUID.count);
