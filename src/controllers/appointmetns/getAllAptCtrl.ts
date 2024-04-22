import { Request, Response } from "express"
import { getAllAptServ } from "../../services/appointments/getAllAptServ"

export const getAllAptCtrl = async (req: Request, res: Response) => {
    try {
        const dataId = Number(req.body.id)
        const getAptsUser =await getAllAptServ(dataId)

        res.status(200).json(getAptsUser)
    } catch (error:any) {
                res.status(500).json({ message: error.message }); 
    }
}