
import {StorageRepository} from "./storage.repository";

export class ConsultationRepository {
    consultationList = []
                storageInstance
                constructor() {
                    this.storageInstance = new StorageRepository();
                    this.storageInstance.createDatabase("hospitalDatabase")
                    this.storageInstance.createCollection("Consultation")
                    this.consultationList = this.storageInstance.read()
                }

                save(consultation) {
                    consultation._id = this.consultationList.length + 1
                    this.consultationList.push(consultation)
                    this.storageInstance.write(this.consultationList)
                    return this.findOne(consultation._id)
                }

                findAll() {
                    return this.storageInstance.read();
                }

                findOne(id) {
                    return this.consultationList.find(consultation => consultation._id == id)
                }

                delete(id) {
                    const newConsultationList = this.consultationList.filter(consultation => consultation._id != id)
                    const consultationDeleted = this.findOne(id)
                    this.consultationList = newConsultationList
                    this.storageInstance.write(this.consultationList)
                    return consultationDeleted
                }

                update(id, date, rapport) {
                    this.consultationList.forEach(consultation => {
                        if(consultation._id == id) {
                            consultation._date == date ? date: consultation._date
                            consultation._rapport == rapport ? rapport: consultation._rapport
                            consultation._update_at == new Date()
                        }
                        this.storageInstance.write(this.consultationList);
                    })
                    return this.findOne(id)
                }
}