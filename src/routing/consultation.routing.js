import { Router } from "express";
import { ConsultationController } from "../controller/consultation.controller.js";

const router = Router()
const consultationController = new ConsultationController()

router

    .post("/create", (request, response) => {
        try {
            const { date, rapport } = request.body
            const consultation = consultationController.create(date, rapport)
            response.json(consultation)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/all", (request, response) => {
        try {
            const consultations = consultationController.findAll()
            response.json(consultations)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/:id", (request, response) => {
        try {
            const consultation = consultationController.findOne(request.params.id)
            response.json(consultation)
        } catch (error) {
            response.json(error.message)
        }
    })

    .delete("/:id/delete", (request, response) => {
        try {
            const consultation = consultationController.delete(request.params.id)
            response.json(consultation)
        } catch (error) {
            response.json(error.message)
        }
    })

    .put("/:id/update", (request, response) => {
        try {
            const { date, rapport } = request.body
            const consultation = consultationController.update(request.params.id, date, rapport)
            response.json(consultation)
        } catch (error) {
            response.json(error.message)
        }
    })


export default router 