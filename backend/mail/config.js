import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailTrapClient = new MailtrapClient({ endpoint: process.env.ENDPOINT, token: process.env.TOKEN });

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Matias",
};
export const recipients = [
  {
    email: "matiasmarensi@gmail.com",
  },
];
