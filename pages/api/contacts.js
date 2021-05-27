// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import emailjs from "emailjs-com"


export default  (req, res) => {
  res.status(200).json({ name: 'John Doe' })
  if(req.method ==="POST"){
    console.log(req.body);
    console.log(emailjs);
  }
}
