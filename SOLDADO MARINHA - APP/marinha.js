class Soldier {
    constructor(name, rank) {
        this.name = name;
        this.rank = rank;
        this.schedule = [];
        this.equipmentInventory = {};
        this.diaryEntries = [];
        this.messages = [];
    }

    addScheduleItem(activity, date, time) {
        this.schedule.push({ activity, date, time });
    }

    addEquipment(item, quantity) {
        if (this.equipmentInventory[item]) {
            this.equipmentInventory[item] += quantity;
        } else {
            this.equipmentInventory[item] = quantity;
        }
    }

    addDiaryEntry(entry) {
        this.diaryEntries.push({ date: new Date(), entry });
    }

    sendMessage(recipient, message) {
        this.messages.push({ recipient, message, timestamp: new Date() });
    }
}

// Exemplo de uso
const soldier1 = new Soldier("John Doe", "Sergeant");

soldier1.addScheduleItem("Treinamento de Combate", "2023-09-01", "10:00");
soldier1.addScheduleItem("Missão de Patrulha", "2023-09-05", "14:00");

soldier1.addEquipment("Uniforme de Camuflagem", 1);
soldier1.addEquipment("Kit de Primeiros Socorros", 2);

soldier1.addDiaryEntry("Hoje realizamos um treinamento de resgate marítimo bem-sucedido.");

soldier1.sendMessage("Comandante", "Relatório de status da missão enviado.");

console.log(soldier1.schedule);
console.log(soldier1.equipmentInventory);
console.log(soldier1.diaryEntries);
console.log(soldier1.messages);
