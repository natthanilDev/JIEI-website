import axios from "axios";

export async function backend(datao: FormData) {
    const data = Object.fromEntries(datao.entries());

    try {
        const response = await axios.post('/api/contact', data);
        return response.data; 
    } catch (err) {
        console.error("Error in backend:", err);
        throw err;
    }
}