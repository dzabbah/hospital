import { Router } from "express";
import { MeetingController } from "../controller/meeting.controller.js";

const router = Router()
const meetingController = new MeetingController()

router

    .post("/create", (request, response) => {
        try {
            const { date, status, patientId, doctorId, consultataionId } = request.body
            const meeting = meetingController.create(date, status, patientId, doctorId, consultataionId )
            response.json(meeting)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/all", (request, response) => {
        try {
            const meetings = meetingController.findAll()
            response.json(meetings)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/:id", (request, response) => {
        try {
            const meeting = meetingController.findOne(request.params.id)
            response.json(meeting)
        } catch (error) {
            response.json(error.message)
        }
    })

    .delete("/:id/delete", (request, response) => {
        try {
            const meeting = meetingController.delete(request.params.id)
            response.json(meeting)
        } catch (error) {
            response.json(error.message)
        }
    })

    .put("/:id/update", (request, response) => {
        try {
            const { date, status, patientId, doctorId, consultataionId  } = request.body
            const meeting = meetingController.update(request.params.id, date, status, patientId, doctorId, consultataionId )
            response.json(meeting)
        } catch (error) {
            response.json(error.message)
        }
    })


export default router 