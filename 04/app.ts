abstract class AppPlugin {
    private static activePlugins: AppPlugin[] = []

    install() {
        if (!AppPlugin.activePlugins.includes(this)) {
            AppPlugin.activePlugins.push(this);
        }
    }

    uninstall() {
        AppPlugin.activePlugins = AppPlugin.activePlugins.filter(p => p !== this);
    }

    static showActivePlugins() {
        console.log(AppPlugin.activePlugins);
    }
}

interface Logger {
    add(message: string): void;
    print(): void;
  }

  class Writer extends AppPlugin implements Logger {
    messages: string[] = []

    add(message: string) {
this.messages.push(message)
    } 

    print() {
        console.log(this.messages)
        this.messages = []
    }
    }

  
    class Messager extends AppPlugin implements Logger {
        messages: string[] = []
    
        add(message: string) {
    this.messages.push(message)
        } 
    
        print() {
        alert(this.messages)
            this.messages = []
        }
        }
    
        const writer = new Writer();
        const messager = new Messager();
        
        writer.install();
        messager.install();
        
        writer.add("Tekst writter");
        messager.add("Tekst messager");
        
        AppPlugin.showActivePlugins(); 
        
        writer.print(); 
        messager.print(); 