import { Patient } from "./patients"
import { Doctor } from "./doctors"
import { Consultation } from "./consultation"

export class Meeting {
    _id
    _date
    _status
    _consultation = {}
    _patient = {}
    _doctor = {}
    constructor(id, date, status) {
        this._id = id
        this._date = date
        this._status = status
    }

    addPatient (patient) {
        const patientNewInstance = new Patient(patient._id, patient._name, patient._isIll)
        delete patientNewInstance._meetingList
        this._patient = patientNewInstance
    }

    adddoctor (doctor) {
        const doctorNewInstance = new Doctor(doctor._id, doctor._name, doctor._speciality, doctor._email)
        delete doctorNewInstance._meetingList
        this._doctor = doctorNewInstance
    }

    addConsultation(consultation) {
        const consultationNewInstance = new Consultation (consultation._id, consultation._date, consultation._raport)
        delete consultationNewInstance._meetingList
        this._consultation = consultationNewInstance
    }
}