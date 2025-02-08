import { Router } from "express";
import { DoctorController } from "../controller/doctor.controller.js";

const router = Router()
const doctorController = new DoctorController()

router

    .post("/create", (request, response) => {
        try {
            const { name, speciality, email } = request.body
            const doctor = doctorController.create(name, speciality, email )
            response.json(doctor)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/all", (request, response) => {
        try {
            const doctors = doctorController.findAll()
            response.json(doctors)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/:id", (request, response) => {
        try {
            const doctor = doctorController.findOne(request.params.id)
            response.json(doctor)
        } catch (error) {
            response.json(error.message)
        }
    })

    .delete("/:id/delete", (request, response) => {
        try {
            const doctor = doctorController.delete(request.params.id)
            response.json(doctor)
        } catch (error) {
            response.json(error.message)
        }
    })

    .put("/:id/update", (request, response) => {
        try {
            const { name, speciality, email  } = request.body
            const doctor = doctorController.update(request.params.id, name, speciality, email)
            response.json(doctor)
        } catch (error) {
            response.json(error.message)
        }
    })


export default router 