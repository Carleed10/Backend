const nodemailer = require('nodemailer')


const sendMail = async(FullName, Email)=>{
    const contactTemplate = `<div>
    <div>
      <h2 style="color: #00a859;">Welcome to Stackplus Technology</h2>
    </div>
    <ul>
      <li>Name: ${FullName}</li>
      <li>Email: ${Email}</li>
    </ul>
    <div>
      <p>
        Dear ${FullName},
      </p>
      <p>
        Welcome to our community! We are thrilled to have you on board.
      </p>
      <p>
        With your new account, you can explore all the features our website has to offer.
      </p>
      <p>
        If you have any questions or need assistance, feel free to contact us.
      </p>
    </div>
    <p style="color: #00a859;"><i>Stackplus Technology</i></p>
  </div>
`;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : process.env.GOOGLE_EMAIL,
        pass : process.env.GOOGLE_KEY
    }
    
})

const mailOptions = {
    from : process.env.GOOGLE_EMAIL,
    to : Email,
        subject : "Welcome to Hello World Community",
        html : contactTemplate,
        text : "Hello World Community"
    };

    try {
        transporter.sendMail(mailOptions)
        console.log("Email sent Successfully");

    } catch (error) {
        // res.status(500).send({message : "Internal Server Error"})    
        console.log(err);
    }
}

module.exports = sendMail