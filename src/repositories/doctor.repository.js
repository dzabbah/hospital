import {StorageRepository} from './storage.repository'

export class DoctorRepository {
    doctorList = []
    storageInstance 
    constructor() {
        this.storageInstance = new StorageRepository();
        this.storageInstance.createDatabase("hospitalDataBase")
        this.storageInstance.createCollection("Doctor")
        this.DoctorList = this.storageInstance.read()
    }

    save(doctor) {
        doctor._id = this.doctorList.length + 1
        this.doctorList.push(doctor)
        this.storageInstance.write(this.doctorList)
        return this.findOne(doctor._id)
    }

    findAll(){
        return this.storageInstance.read();
    }

    findOne(id) {
        return this.doctorList.find(doctor => doctor._id == id)
    }

    delete(id) {
        const newDoctorList = this.doctorList.filter(doctor => doctor._id != id)
        const doctorDeleted = this.findOne(id)
        this.doctorList = newDoctorList
        this.storageInstance.write(this.DoctorList)
        return doctorDeleted
    }

    update(id, name, speciality) {
        this.doctorList.forEach(doctor => {
            if(doctor._id == id) {
                doctor._name = name ? name : doctor._name
                doctor._speciality = speciality ? speciality : doctor._speciality
            }
            this.storageInstance.write(this.doctorList);
        })
        return this.findOne(id)
    }
}