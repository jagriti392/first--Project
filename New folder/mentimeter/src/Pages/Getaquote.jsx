
import React from "react";
import './Getaquote.css';

function Getaquote() {
    return (
      <>

    <div className="pricing-container">
      <form className="pricing-form">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>

        <div className="form-group">
          <label htmlFor="presenters">Number of presenters</label>
          <input type="number" id="presenters" name="presenters" min="10" />
        </div>

        <div className="form-group">
          <label htmlFor="companySize">Company size</label>
          <select id="companySize" name="companySize">
            <option value="" disabled selected>
        -select-
            </option>
    
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="workEmail">Work email</label>
          <input type="email" id="workEmail" name="workEmail" />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number (optional)</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" />
        </div>

        <div className="form-group">
          <label htmlFor="howHeard">How did you hear about us? (optional)</label>
          <textarea id="howHeard" name="howHeard" rows="4"></textarea>
        </div>

        <button type="submit">Get a Quote</button>
      </form>

      <p className="terms-text">
        By sending this form, you accept our terms of use and policies.
      </p>

      <p className="help-center-text">
        Please visit our Help center for technical issues, payment questions, or general inquiries.
      </p>
    </div>




<div className="container header-section flex">
<div className="header-left">
  <h1>
  Collaborate seamlessly
  </h1>
 
  <p>Collaborate with colleagues on presentations, surveys, quizzes, and more.</p>

<h1>Share knowledge</h1>
<p>Create a knowledge hub to share best practices, create themes, and reuse templates.</p>
  
</div>
<div className="header-right">
  <img src="https://images.ctfassets.net/rvt0uslu5yqp/3llZz7DwKUdKOPtPAYUsr6/26ff4fd37949368c4806014a24494c4f/Mentimeter_Web_Features_2020-08.png" alt="hero image"></img>
</div>
</div>














</>

    );
}

export default Getaquote;
