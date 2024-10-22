import nodemailer from 'nodemailer';
const sendEmail = async function (toEmail, subject, message) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "viralborana2002@gmail.com",
            pass: "xhyjjosafsumskwr",
        },
    });

    const info = await transporter.sendMail({
        from: 'viralborana2002@gmail.com', // sender address
        to: toEmail, // list of receivers
        subject: subject, // Subject line
        text: message, // plain text body
        //html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

}

export default sendEmail