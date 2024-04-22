const bcryptjs = require("bcryptjs")

import { CredentialDto } from "../../dto/credentials/CredentialDto";

export const createCredServ = async (credData:CredentialDto) => { 
    
    const newCredentials = {
        username: credData.username,
        password:await bcryptjs.hash(credData.password,8)
    }

    return newCredentials 
}
