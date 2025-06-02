
import axios from "axios"


export const backend = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries())
    try {
        await axios.post('/api/contact' ,data)
        .then((response)=>{
            console.log(response.data)
        })
      
     

    } catch (error) {
        console.log(error)
    }
}

