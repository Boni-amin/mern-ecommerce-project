const nodemailer=require('nodemailer');

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

    //  Here mail transport Create/ with SMTP configaration
     let  transport= nodemailer.createTransport({
            host:"mail.teamrabbil.com",
            port:25,
            secure:false,
            auth:{user:"info@teamrabbil.com",pass:"~sR4[bhaC[Qs"},
            tls:{rejectUnauthorized:false}
        });

    //  Here mail Option Create
    let mailOption={
         from:'MERN Ecommerce Solution <info@teamrabbil.com>',
         to:EmailTo,
         subject:EmailSubject,
         text:EmailText
    };

    return await transport.sendMail(mailOption);
};

module.exports=EmailSend;