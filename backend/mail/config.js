import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const client = new MailtrapClient({ endpoint: process.env.ENDPOINT, token: process.env.TOKEN });

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Matias",
};
const recipients = [
  {
    email: "matiasmarensi@gmail.com",
  },
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
