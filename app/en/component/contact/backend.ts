
import axios from "axios"


export const backend = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries())
    try {
        await axios.get('/api/contact')
        .then((response)=>{
            console.log(response.data)
            console.log(data)
        })
        

    } catch (error) {
        console.log(error)
    }
}