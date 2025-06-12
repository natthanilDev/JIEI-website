import axios from "axios";
import Swal from "sweetalert2";

export const backend = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());


  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Send Message"
  }).then(async (result) => {
    
    if (result.isConfirmed) {
      await axios.post('/api/contact', data)
      .then((res)=>{
        console.log(res)
      })
      Swal.fire({
        title: "Send Message Successfully!",
        text: "Message sent. Please wait for the admin to respond.",
        icon: "success"
      });

    }
    // setTimeout(() => {
    //   window.location.reload()
    // }, 2000)

  });




}






