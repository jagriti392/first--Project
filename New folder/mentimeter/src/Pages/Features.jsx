import React from "react";
import'./features.css'

function Features(){

    return(
        <>
     <div className="container header-section flex">
      <div className="header-left">
        <h1>
        So much more than just fancy slides
        </h1>
       
        <p>Build full presentations and leave other tools behind.
Run a survey before, during, or after your meeting or lecture.
Get started immediately without doing all the groundwork by downloading a template.</p>
        <a href="#" class="primary-button get-started-btn">Get Started, its free</a>
    
      </div>
      <div className="header-right">
        <img src="https://images.ctfassets.net/rvt0uslu5yqp/4kcOhZHo55OtZxFAHK57Od/cddc434d1d5fe57c0051ecd42e40b1aa/Mentimeter_Web_Features_2020-03_ReducedSize.png?fm=webp&w=640&q=75" alt="hero image"></img>
      </div>
    </div>
    
    
       
    <div className="container header-section flex">
      <div className="header-left">
        <h1>
        More control at your fingertips
        </h1>
       
        <p>Turn your smartphone into a presentation remote.</p>
        <a href="#" class="primary-button get-started-btn">Learn more about Mentimote</a>
    
      </div>
      <div className="header-right">
        <img src="https://images.ctfassets.net/rvt0uslu5yqp/20adgnxQM8mw0vSlED75QQ/1067495fa9b9a83f701b3dc2f2f27551/mentimote__1_.png?fm=webp&w=640&q=75" alt="hero image"></img>
      </div>
    </div>  

    
    <div className="container header-section flex">
      <div className="header-left">
        <h1>
        Collect data, gain insights
        </h1>
       
        <p>Use your data to help you improve, adapt, and become a more confident presenter..</p>
        <a href="#" class="primary-button get-started-btn">Read more</a>
    
      </div>
      <div className="header-right">
        <img src="https://images.ctfassets.net/rvt0uslu5yqp/5VOFY94GiarAH9waPuM5ff/922de83322c3bfd850bed31f3b203575/data__1_.png?fm=webp&w=640&q=75" alt="hero image"></img>
      </div>
    </div>
    





        </>
    )
}
export default Features;