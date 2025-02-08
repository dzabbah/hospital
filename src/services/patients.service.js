import {ConsultationRepository} from "../repositories/consultation.repository.js"
import {DoctorRepository} from "../repositories/doctor.repository.js"
import {meetingRepository, MeetingRepository} from "../repositories/meeting.repository.js"
import {PatientRepository} from "../repositories/patients.repository.js"
import {consultation} from "../entities/consultation.js"
 
export class MeetingService {

    ConsultationRepository = new ConsultationRepository()
    doctorRepository = new DoctorRepository()
    meetingRepository = new MeetingRepository()
    patientRepository = new PatientRepository()

    create(id, date,status, patientid, doctorid, consultationId) {
        const doctor = this.doctorRepository.findOne(doctor._Id)
        const patient = this.patientRepository.findOne(patient._Id)

        const consultation = new consultation(undefined, date, rapport)
        consultation.addDoctor(doctor)
        consultation.addPatient(patient)
        return this.ConsultationRepository.save(consultation)

        const meeting = new meeting(undefined, date, status, patientid, doctorid, consultationId)
        meeting.addDoctor(doctor)
        meeting.addPatient(patient)
        return this.MeetingRepository.save(meeting)


        return this.PatientRepository.save(consultation)

        }
       

        findAll() {
            return this.PatientRepository.findAll()
        }
    
        findOne(id) {
            return this.PatientRepository.findOne(id)
        }
    
        delete(id) {
           return this.PatientRepository.delete(id)
        }
    
        update(id, name, isIll) {
           return this.PatientRepository.update(id, name, isIll);
    

    }

}

