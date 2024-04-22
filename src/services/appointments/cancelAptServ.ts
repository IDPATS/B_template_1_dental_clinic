import { EntitiesApt } from "../../config/dataSource";
import { AptStatusDto } from "../../dto/appoinments/AptStatusDto";

export const cancelAptServ = async(dataApt: AptStatusDto)=> {

    const dataAptStatus = await EntitiesApt.findOne({where:{id:dataApt.id}})
    
if (!dataAptStatus) {
            throw new Error("La cita no existe");
    }

    dataAptStatus.status = dataApt.status;

    const statusFinally = await EntitiesApt.save(dataAptStatus);
        return statusFinally;

}