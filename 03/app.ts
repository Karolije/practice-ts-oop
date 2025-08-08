class AppNotification {
    send(type?: string) {
        if (type) {
        console.log(`Sending ${type} notification`); 
    } else {
            console.log("sending notification");
        }
}

static notify(notifications: AppNotification[] ) {
    for (const notification of notifications) {
        notification.send()
    }
}
}

class EmailNotification extends AppNotification {
    send() {
       super.send(`email`)
    }
}

class SMSNotification extends AppNotification {
    send() {
       super.send(`SMS`)
    }
}

const email = new EmailNotification()
const sms = new SMSNotification()

email.send()
sms.send()
AppNotification.notify([email,sms])

