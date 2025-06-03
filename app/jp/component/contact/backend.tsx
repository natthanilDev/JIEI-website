import axios from "axios";
import Swal from "sweetalert2";

export const backend = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());


  Swal.fire({
    title: "本当にいいですか？",
    text: "これは元に戻せません！",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Send Message"
  }).then(async (result) => {
    
    if (result.isConfirmed) {
      await axios.post('/api/contact', data)
      
      Swal.fire({
        title: "メッセージが正常に送信されました！",
        text: "メッセージが送信されました。管理者からの返信をお待ちください。",
        icon: "success"
      });

    }
    setTimeout(() => {
      window.location.reload()
    }, 2000)

  });




}






