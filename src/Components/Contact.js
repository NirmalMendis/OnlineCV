import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import apiKeys from '../apikeys';
import { init } from 'emailjs-com';

//Validate Email Regex
const validEmailRegex = RegExp(
   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
//validate form on input change
const validateForm = errors => {
   let valid = true;
   Object.values(errors).forEach(val => val.length > 0 && (valid = false));
   return valid;
};


class Contact extends Component {

   constructor(props) {
      super(props);
      this.state = {
         from_sub: null,
         message: null,
         allValid: false,
         errors: {
            message: ''
         }
      };

      this.handleChange = this.handleChange.bind(this);
   }

   //check if all fields have been touched
   fieldsTouched = () => {
      let valid = true;
      if (this.state.message == null) {
         valid = false;
      }
      return valid;
   }

   //form submit handler
   onSubmit = (e) => {

      e.preventDefault()// Prevents default refresh by the browser

      if (validateForm(this.state.errors) && this.fieldsTouched()) {
        
         //initialize emailjs and send mail
         // init(apiKeys.USER_ID)
         // emailjs.send(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, {
         //    from_name: this.state.from_name,
         //    from_email: this.state.from_email,
         //    message: this.state.message,
         //    from_sub: this.state.from_sub,
         // })

         //    .then(result => {
         //       alert('Message Sent, I\'ll get back to you shortly', result.text);
         //    },
         //       error => {
         //          alert('An error occured, Please try again', error.text)
         //       })
         let mailtoString = "mailto:nirmal.gmw@gmail.com?subject=" + this.state.from_sub + "&body=" + this.state.message;
         window.open(mailtoString);
      } else {
         console.log(this.state.errors.message);
         console.log('Invalid Form');
      }

   }

   //handle form inputs
   handleChange(event) {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;

      switch (name) {
         case 'message':
            errors.message =
               value.length < 1
                  ? 'Please Enter a Messages!'
                  : '';
            break;
         default:
            break;
      }

      this.setState({ errors, [name]: value });
      if (validateForm(this.state.errors) && this.fieldsTouched()) {
         this.setState({allValid: true});
      }
   }
   render() {
      const { errors } = this.state;
      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form onSubmit={this.onSubmit} method="post" id="contactForm" name="contactForm" >
                     <fieldset>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" value={this.state.from_sub} id="contactSubject" name="from_sub" onChange={this.handleChange} />
                        </div>

                        <div>
                        {errors.message.length > 0 &&
                              <span style={{ color: "red" }} className="error" >{errors.message}</span>}
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" value={this.state.message} id="contactMessage" name="message" onChange={this.handleChange}></textarea>
                        </div>

                        <div>
                      <button type="submit" form="contactForm" value="Submit" disabled={!this.state.allValid} >Submit</button>
                  
                        </div>
                       
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {city} <br /> {state} {zip}<br />
                        <span>{phone}</span><br />
                        {email}
                     </p>
                  </div>

                  <div className="widget widget_tweets">
                     {/* <h4 className="widget-title">Latest Tweets</h4>
                     <ul id="twitter">
                        <li>
                           <span>
                              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">2 Days Ago</a></b>
                        </li>
                        <li>
                           <span>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">3 Days Ago</a></b>
                        </li>
                     </ul> */}
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
