import nodemailer from 'nodemailer';
import '../../globals.css'
export async function POST(req) {
  const body = await req.json();
  const { name, email, message, address, phone } = body;

  const transporter = nodemailer.createTransport({
    host: 'mail.jieithai.com',
    port: 587,
    secure: false, // ใช้ STARTTLS
    auth: {
      user: 'info@jieithai.com',
      pass: '#X7k98@0kc*',
    },
  });

            
  await transporter.sendMail({
    from: `"${name}" "${email}"`,
    to: 'info@jieithai.com',
    replyTo: email, 
    subject: `Message from ${name}`,
    text: message,
    html: `
     <br />
    <h2>Contact Form Submission</h2>
     <br />
    <p><strong>Customer Name : </strong> ${name}</p>
   
    <p><strong>Email : </strong> ${email}</p>
   
    <p><strong>Phone : </strong> ${phone}</p>

     <p><strong>Address : </strong> ${address}</p>

    <p><strong>Message : </strong>${message.replace(/\n/g, '<br/>')}</p>
  
  `,
  });

  return new Response(JSON.stringify({ success: true }));
}
