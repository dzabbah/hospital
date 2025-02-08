import { Router } from "express";
import { PatientController } from "../controller/patient.controller.js";

const router = Router()
const patientController = new PatientController()

router

    .post("/create", (request, response) => {
        try {
            const { name, isIll } = request.body
            const patient = patientController.create(name, isIll )
            response.json(patient)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/all", (request, response) => {
        try {
            const patients = patientController.findAll()
            response.json(patients)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/:id", (request, response) => {
        try {
            const patient =patientController.findOne(request.params.id)
            response.json(patient)
        } catch (error) {
            response.json(error.message)
        }
    })

    .delete("/:id/delete", (request, response) => {
        try {
            const patient = patientController.delete(request.params.id)
            response.json(patient)
        } catch (error) {
            response.json(error.message)
        }
    })

    .put("/:id/update", (request, response) => {
        try {
            const {name, isIll  } = request.body
            const patient = patientController.update(request.params.id, name, isIll)
            response.json(patient)
        } catch (error) {
            response.json(error.message)
        }
    })


export default router 