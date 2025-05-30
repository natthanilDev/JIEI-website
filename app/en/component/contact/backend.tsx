import axios from "axios";

export async function backend(contact: FormData) {
    
    const data = Object.fromEntries(contact.entries())

    await axios.get('/api/contact')
    .then((res)=>{
        console.log(res.data.message)
    })
}