import { userData } from "../../models/contact-us-model/form.js";

// controllers for fetching contact us form data
export const getContactusdata = async (req, res) => {
  try {
    const allUser = await userData.find({});
    res.json(allUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//  controllers for submitting contact us form data
export const addContacusdata = async (req, res) => {
  try {
    await userData.create(req.body);
    res.status(201).json({
      success: true,
      message: "Data sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while sending data",
      error: error.message,
    });
  }
};

// import nodemailer from "nodemailer";
// import { config } from "dotenv";
// config({
//   path: "./data/config.env",
// });

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.Gmail,
//     pass: process.env.appPassword,
//   },
// });

// // Set up Nodemailer transporter
// // const transporter = nodemailer.createTransport({
// //   service: "gmail", // You can use another email service provider if needed
// //   auth: {
// //     user: "tantiarjun1997@gmail.com", // Replace with your email address
// //     pass: "fres oaew svvp uqll", // Replace with your email password or app password
// //   },
// // });

// // Controller for fetching contact us form data (if needed)
// export const getContactusdata = async (req, res) => {
//   try {
//     res.json({
//       message: "Fetching data not applicable since we're sending emails now.",
//     });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

// // Controller for submitting contact us form data and sending it via email
// export const addContacusdata = async (req, res) => {
//   const { name, email, location, phone, message } = req.body;

//   const mailOptionsForThePerson = {
//     from: "arjun.tanti@beenait.com", // Sender's email address (could be the user's email or your own email)
//     to: `${email}`, // The email address where you want to send the form data
//     subject: `Thank You for Contacting Scottish Hindu Foundation!`,
//     html: `<b>Dear ${name},</b>

//            <p>Thank you for reaching out to Scottish Hindu Foundation! We have received your inquiry and appreciate you taking the time to contact us.</p>

//            <p>Our team is currently reviewing your message and will get back to you as soon as possible.</p>

//            <p>Thank you for your patience, and we look forward to assisting you.</p>

//            <p>Warm regards,<br>Scottish Hindu Foundation Team</p>
//           `, // html body
//   };

//   const mailOptionsForScottish = {
//     from: "arjun.tanti@beenait.com", // Sender's email address (could be the user's email or your own email)
//     to: `arjun.tanti@beenait.com`, // The email address where you want to send the form data
//     subject: `New Contact Inquiry from ${name}`,
//     html: `<b>Hello,</b>

//            <p>You have received a new contact inquiry from a user on the Scottish Hindu Foundation website. Here are the details of the user’s message:</p>

//            <ul>
//            <li>Name: ${name}</li>
//            <li>Email: ${email}</li>
//            <li>Location: ${location}</li>
//            <li>Phone: ${phone}</li>
//            <li>Message: ${message}</li>
//            </ul>

//            <p>Please review the message and follow up with the user as needed.</p>

//            <p>Thank you,<br>Scottish Hindu Foundation Website Team</p>

//           `, // html body
//   };

//   try {
//     await transporter.sendMail(mailOptionsForThePerson);
//     await transporter.sendMail(mailOptionsForScottish);
//     res.status(201).json({
//       success: true,
//       message: "Data sent successfully via Gmail",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "An error occurred while sending data via Gmail",
//       error: error.message,
//     });
//   }
// };

// // // async..await is not allowed in global scope, must use a wrapper
// // async function main() {
// //   // send mail with defined transport object
// //   const info = await transporter.sendMail({
// //     from: '"Maddison Foo Koch" <maddison53@ethereal.email>', // sender address
// //     to: "bar@example.com, baz@example.com", // list of receivers
// //     subject: "Hello ✔", // Subject line
// //     text: "Hello world?", // plain text body
// //     html: "<b>Hello world?</b>", // html body
// //   });

// //   console.log("Message sent: %s", info.messageId);
// //   // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// // }

// // main().catch(console.error);
