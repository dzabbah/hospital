import { meeting } from "./meeting"

export class consultation {
    _id
    _date
    _meeting = {}
    constructor(id, date, rapport) {
        this._id = id
        this._date = date
        this._rapport = rapport
    }

    addMeeting(meeting) {
        this._meeint = meeting
    }
}