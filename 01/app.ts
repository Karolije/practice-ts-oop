class User {
    private privateEmail: string;
    private passwordHash: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.passwordHash = ""
    }
    private async  hashPassword(password: string): Promise<string> {
        const encoder = new TextEncoder();
        const data = encoder.encode(password); // Konwertuj hasło na bajty
        const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Oblicz hash
        const hashArray = Array.from(new Uint8Array(hashBuffer)); // Konwertuj wynik na tablicę bajtów
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join(''); // Na format hex
        return hashHex;
    }
    public async setPassword(password: string): Promise<void> {
        this.passwordHash = await this.hashPassword(password);
    }
    get email(): string {
        return this.privateEmail;
    }

    set email(value: string) {
        this.privateEmail = value
    }
    public async check(email: string, password: string): Promise<boolean> {
        if (email !== this.privateEmail) {
            return false;
        }
    
        const hashedPassword = await this.hashPassword(password);
        return hashedPassword === this.passwordHash;
    }
}





