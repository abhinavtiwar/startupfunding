import React from "react";
import { Button} from '@mui/material';
const ContactUs = () => {
  return (
    
    <div className="container">
      <h1>Connect with Us</h1>
      <p>
        I would Love To respond to your queries and help you. Feel free to get
        touch with me.
      </p>
      <div className="contact-box">
        <div className="contact-left">
          <h3>Send Your Request</h3>
          <form>
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="abhinav tiwari" />
              </div>
              <div className="input-group">
                <label>Phone</label>
                <input type="text" placeholder="972983649" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="abhinav@gmail.com" />
              </div>
              <div className="input-group">
                <label>Subject</label>
                <input type="text" placeholder="product demo" />
              </div>
            </div>
            <label>Message</label>
            <textarea rows="5" placeholder="Your Message"></textarea>
            <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 5 }}
                  >
                    SEND
                  </Button>
            </form>
        </div>
        <div className="contact-right">
          <h3>Reach Us</h3>
           <table>
           <tr>
           <td>Email</td>
           <td>contactus@example.com</td>
           </tr>
           <tr>
           <td>Phone</td>
           <td>XXXXXXXXXX</td>
           </tr>
           <tr>
           <td>Address</td>
           <td>844334 lucknow mohaan road</td>
           </tr>
           </table>



        </div>
      </div>
    </div>
  );
};

export default ContactUs;
