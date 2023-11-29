
import React from "react";
import "./pricing.css";

function Pricing() {
    return (
        <div className="pricing-container">
            <div className="pricing-plan free-plan">
                <h2>Free</h2>
                <p>$0.00 USD</p>
                <p>Includes:</p>
                <ul>
                    <li>50 participants per month</li>
                    <li>Word clouds, polls, quizzes, slides, and much more</li>
                </ul>
                <button className="get-started-btn">Get started</button>
            </div>

            <div className="pricing-plan basic-plan">
                <h2>Basic</h2>
                <p>$11.99 USD</p>
                <p>Per presenter/month</p>
                <p>Billed yearly, excl. tax.</p>
                <p>Includes:</p>
                <ul>
                    <li>Unlimited participants per month</li>
                    <li>Edit presentations with your team members</li>
                    <li>Export results to Excel</li>
                </ul>
                <button className="buy-btn">Buy Basic</button>
            </div>

            <div className="pricing-plan pro-plan">
                <h2>Pro</h2>
                <p>$24.99 USD</p>
                <p>Per presenter/month</p>
                <p>Billed yearly, excl. tax.</p>
                <p>Includes:</p>
                <ul>
                    <li>Add your own company logo and branding</li>
                    <li>Create team templates</li>
                    <li>Edit presentations with your colleagues or specific team members</li>
                </ul>
                <button className="buy-btn">Buy Pro</button>
            </div>

            <div className="pricing-plan enterprise-plan">
                <h2>Enterprise</h2>
                <p>Custom</p>
                <p>Includes:</p>
                <ul>
                    <li>Company-wide branding</li>
                    <li>Single Sign-On (SSO)</li>
                    <li>SCIM</li>
                    <li>Success manager</li>
                </ul>
                <button className="learn-more-btn">Learn more</button>
            </div>
        </div>
    );
}

export default Pricing;
               
                    
            
                

