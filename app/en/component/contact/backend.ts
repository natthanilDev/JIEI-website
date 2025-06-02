



export const backend = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries())
    try {

        console.log(data)

    } catch (error) {
        console.log(error)
    }
}