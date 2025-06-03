import nodemailer from 'nodemailer';
import '../../globals.css'
export async function POST(req) {
  const body = await req.json();
  const { name, email, message, address, phone } = body;
  const host_mail_center = process.env.HOST_MAIL_CENTER;
  const password_mail_center = process.env.PASSWORD_MAIL_CENTER;
  const user_mail_center = process.env.USER_MAIL_CENTER;

  const transporter = nodemailer.createTransport({
    host: host_mail_center,
    port: 587,
    secure: false, // ใช้ STARTTLS
    auth: {
      user: user_mail_center,
      pass: password_mail_center,
    },
  });

            
  await transporter.sendMail({
    from: `"${name}" "${email}"`,
    to: user_mail_center,
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
   <br />
   <h2>JIEI Website*</h2>
  `,
  });

  return new Response(JSON.stringify({ success: true }));
}
