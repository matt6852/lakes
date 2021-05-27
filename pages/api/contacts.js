// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import emailjs from "emailjs-com"
require("dotenv").config();


export default  (req, res) => {
  res.status(200).json({ name: 'John Doe' })
  if(req.method ==="POST"){
    
    //  emailjs
    // .send(
    //   "service_gej9vot",
    //   "template_3wk5pkg",
    //   formData,
    //   "user_nDJzQY1xmY9wOoUJQzobR"
    // )
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
    
  }
}
