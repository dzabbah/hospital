import { Meeting } from "./meeting"


export class Patient {
    _id
    _name
    _isIll
    _meetingList = []
    constructor(id, name, isIll) {
        this._id = id
        this._d_name = name
        this._isIll = isIll
    }

    addMeeting(meeting) {
        const meetingNewInstance = new Meeting(meeting._id, meeting._date, meeting._status)
        delete meetingNewInstance._doctor
        delete meetingNewInstance._patient
        meetingNewInstance.addConsultation(meeting._consultation)
        
        this._meetingList.push(meetingNewInstance)
    }


}