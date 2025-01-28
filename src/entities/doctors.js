import { meeting } from "./meeting"

export class Doctor {
    _id
    _name
    _speciality
    _email
    _meetingList = []
    constructor(id, name, speciality, email) {
        this._id = id
        this._name = name
        this._speciality = speciality
        this._email = email
    }

    addMeeting(meeting) {
        const meetingNewInstance = new Meeting(meeting._id, meeting._date, meeting._status)
        delete meetingNewInstance._doctor
        delete meetingNewInstance._patient
        meetingNewInstance.addConsultation(meeting._consultation)
        
        this._meetingList.push(meetingNewInstance)
    }

}