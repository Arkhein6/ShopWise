import axios from "axios";

type User = {
    id?: number,
    Username: string,
    Email: string,
    Password: string,
    role?: string,
    avatar?: string
}

const createUser = async (details : User): Promise<void> => {
    try {
        const response = await axios.post("https://api.escuelajs.co/api/v1/users/",{
            name: details.Username,
            email: details.Email,
            password: details.Password,
            avatar:""
        })
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
   
    
}

export default createUser