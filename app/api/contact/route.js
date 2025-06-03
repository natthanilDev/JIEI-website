import nodemailer from 'nodemailer';
export async function POST(req) {
  const body = await req.json();
  const { name, email, message, address, phone } = body;



  const transporter = nodemailer.createTransport({
    host: process.env.HOST_MAIL_CENTER,
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER_MAIL_CENTER,
      pass: process.env.PASSWORD_MAIL_CENTER,
    },
  });


  await transporter.sendMail({
    from: `"${name}" "${email}"`,
    to: process.env.USER_MAIL_CENTER,
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

    <h2>* Message from jiei(thailand).co.,ltd website *</h2>
  
  `,
  });

  return new Response(JSON.stringify({ success: true }));
}
