
import {StorageRepository} from "./storage.repository";

export class meetingRepository {
    meetingList = []
                storageInstance
                constructor() {
                    this.storageInstance = new StorageRepository();
                    this.storageInstance.createDatabase("hospitalDatabase")
                    this.storageInstance.createCollection("meeting")
                    this.meetingList = this.storageInstance.read()
                }

                save(meeting) {
                    meeting._id = this.meetingList.length + 1
                    this.meetingList.push(meeting)
                    this.storageInstance.write(this.meetingList)
                    return this.findOne(meeting._id)
                }

                findAll() {
                    return this.storageInstance.read();
                }

                findOne(id) {
                    return this.meetingList.find(meeting => meeting._id == id)
                }

                delete(id) {
                    const newMeetingList = this.meetingList.filter(meeting => meeting._id != id)
                    const meetingDeleted = this.findOne(id)
                    this.meetingList = newMeetingList
                    this.storageInstance.write(this.meetingList)
                    return meetingDeleted
                }

                update(id, date, status) {
                    this.meetingList.forEach(meeting => {
                        if(meeting._id == id) {
                            meeting._date == date ? date: meeting._date
                            meeting._status == status ? status: meeting._status
                            meeting._update_at == new Date()
                        }
                        this.storageInstance.write(this.meetingList);
                    })
                    return this.findOne(id)
                }
}