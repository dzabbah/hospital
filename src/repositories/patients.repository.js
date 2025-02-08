import {StorageRepository} from './storage.repository'

export class PatientRepository {
    patientList = []
    storageInstance 
    constructor() {
        this.storageInstance = new StorageRepository();
        this.storageInstance.createDatabase("hospitalDataBase")
        this.storageInstance.createCollection("Patient")
        this.patientList = this.storageInstance.read()
    }

    save(patient) {
        patient._id = this.patientList.length + 1
        this.patientList.push(patient)
        this.storageInstance.write(this.patientList)
        return this.findOne(patient._id)
    }

    findAll(){
        return this.storageInstance.read();
    }

    findOne(id) {
        return this.patientList.find(patient => patient._id == id)
    }

    delete(id) {
        const newPatientList = this.patientList.filter(patient => patient._id != id)
        const patientDeleted = this.findOne(id)
        this.patientList = newPatientList
        this.storageInstance.write(this.patientList)
        return patientDeleted
    }

    update(id, name, isIll) {
        this.doctorList.forEach(patient => {
            if(patient._id == id) {
                patient._name = name ? name : patient._name
                patient_isIll = isIll ? isIll : patient._isIll
            }
            this.storageInstance.write(this.isIllList);
        })
        return this.findOne(id)
    }
}