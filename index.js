
const nodemailer = require("nodemailer");
async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 465, 
    secure: true, 
    
    auth: {
      user: "pergap3@gmail.com",
      pass: "pcwakyyzwgalidfs", 

    },
  });
  

  let info = await transporter.sendMail({
    from: '"Pergap3" <pergap3@gmail.com>',
    to: "raisha67789@gmail.com",
    subject: "Testing, testing, 123",
    html: `
    <h1>Request</h1>
    <p>Someone Wants To Burrow</p>
    `,
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

main()
.catch(err => console.log(err));
