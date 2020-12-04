import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import apiKeys from '../apikeys';
import{ init } from 'emailjs-com';

class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
         from_name: '',
         from_email: '',
         from_sub: '',
         message: ''
      };

      this.handleChange = this.handleChange.bind(this);
   }

   onSubmit = (e) => {
      init(apiKeys.USER_ID)
      e.preventDefault()// Prevents default refresh by the browser
      emailjs.send(apiKeys.SERVICE_ID,apiKeys.TEMPLATE_ID,{
         from_name: this.state.from_name,
         from_email: this.state.from_email,
         message: this.state.message,
         from_sub: this.state.from_sub,
         })
         
         .then(result => {
            alert('Message Sent, I\'ll get back to you shortly', result.text);
         },
            error => {
               alert('An error occured, Please try again', error.text)
            })
   }

   handleChange(event) {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({ [nam]: val });
   }
   render() {

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

                  <form onSubmit={this.onSubmit} method="post" id="contactForm" name="contactForm">
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" defaultValue="" value={this.state.from_name} size="35" id="contactName" name="from_name" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" defaultValue="" value={this.state.from_email} size="35" id="contactEmail" name="from_email" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" value={this.state.from_sub} id="contactSubject" name="from_sub" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" value={this.state.message}  id="contactMessage" name="message" onChange={this.handleChange}></textarea>
                        </div>

                        <div>
                           <input type="submit" value="Submit" className="submit" />
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
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
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>

                  <div className="widget widget_tweets">
                     <h4 className="widget-title">Latest Tweets</h4>
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
                     </ul>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
