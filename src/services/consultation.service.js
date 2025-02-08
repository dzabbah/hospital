import {ConsultationRepository} from "../repositories/consultation.repository.js"
import {DoctorRepository} from "../repositories/doctor.repository.js"
import {meetingRepository, MeetingRepository} from "../repositories/meeting.repository.js"
import {PatientRepository} from "../repositories/patients.repository.js"
import {consultation} from "../entities/consultation.js"
 
export class ConsultationService {

    ConsultationRepository = new ConsultationRepository()
    doctorRepository = new DoctorRepository()
    meetingRepository = new MeetingRepository()
    patientRepository = new PatientRepository()

    create(id, date, rapport) {
        const doctor = this.doctorRepository.findOne(doctor._Id)
        const patient = this.patientRepository.findOne(patient._Id)

        const consultation = new consultation(undefined, date, rapport)
        consultation.addDoctor(doctor)
        consultation.addPatient(patient)
        return this.ConsultationRepository.save(consultation)

        const meeting = new meeting(undefined, date, rapport)
        meeting.addDoctor(doctor)
        meeting.addPatient(patient)
        return this.ConsultationRepository.save(meeting)


        return this.ConsultationRepository.save(consultation)

        }
       

        findAll() {
            return this.ConsultationRepository.findAll()
        }
    
        findOne(id) {
            return this.ConsultationRepository.findOne(id)
        }
    
        delete(id) {
           return this.ConsultationRepository.delete(id)
        }
    
        update(id, date, rapport) {
           return this.ConsultationRepository.update(id, date, rapport);
    

    }

}

