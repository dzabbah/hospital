import {consultation} from "./entities/consultation.js";
import {doctors} from "./entities/doctors.js";
import {meeting} from "./entities/meeting.js";
import {patients} from "./entities/patients.js";



import express from "express";
import consultationRouter from "./routing/consultation.routing.js"
import meetingRouter from "./routing/meeting.routing.js"
import doctorRouter  from "./routing/doctor.routing.js"
import patientRouter from "./routing/patients.routing"


const application = express()
const port = 3885

application.use(express.json())
application.use(express.urlencoded({extended:true}))

application.use("/doctor", doctorRouter)
application.use("/patient", patientRouter)
application.use("/consultation", consultationRouter)
application.use("/meeting", meetingRouter)

application.listen(port, (error) => {
    if (error) return console.log(`error: ${error}`)
    console.log(`task manager starting on ${port}`)
})

