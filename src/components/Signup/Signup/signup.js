import React from "react";
import './signup_style.css';
import { useEffect } from "react";


export  function Signup() {

  


        function getnext1(){
            alert('clciked');
            document.getElementById("firstone").classList.add("hide");
            document.getElementById("second").classList.remove("hide");
            document.getElementById("progressbar").firstChild.nextSibling.classList.add("active");
        }

        function getnext2(){
            alert('clciked');
            document.getElementById("second").classList.add("hide");
            document.getElementById("third").classList.remove("hide");
            document.getElementById("progressbar").firstChild.nextSibling.nextSibling.classList.add("active");
        }
        
    return <>

        {/* multistep form */}
        <form id="msform">
            {/* progressbar */}
            <ul id="progressbar">
                <li className="active">Account Setup</li>
                <li>Social Profiles</li>
                <li>Personal Details</li>
            </ul>
            {/* fieldsets */}

            <div id="firstone">
            <fieldset>
                <h2 className="fs-title">Create your account</h2>
                <h3 className="fs-subtitle">This is step 1</h3>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="pass" placeholder="Password" />
                <input type="password" name="cpass" placeholder="Confirm Password" />
                <input type="button" name="next" className="next action-button" defaultValue="Next" onClick={getnext1} />
            </fieldset>
            </div>
            <div className="hide" id="second">
            <fieldset className="secondone" >
                <h2 className="fs-title">Social Profiles</h2>
                <h3 className="fs-subtitle">Your presence on the social network</h3>
                <input type="text" name="twitter" placeholder="Twitter" />
                <input type="text" name="facebook" placeholder="Facebook" />
                <input type="text" name="gplus" placeholder="Google Plus" />
                <input type="button" name="previous" className="previous action-button" defaultValue="Previous" />
                <input type="button" name="next" className="next action-button" defaultValue="Next" onClick={getnext2}/>
            </fieldset>
            </div>
            <div className="hide" id="third">
            <fieldset className="thirdone">
                <h2 className="fs-title">Personal Details</h2>
                <h3 className="fs-subtitle">We will never sell it</h3>
                <input type="text" name="fname" placeholder="First Name" />
                <input type="text" name="lname" placeholder="Last Name" />
                <input type="text" name="phone" placeholder="Phone" />
                <textarea name="address" placeholder="Address" defaultValue={""} />
                <input type="button" name="previous" className="previous action-button" defaultValue="Previous" />
                <input type="submit" name="submit" className="submit action-button" defaultValue="Submit"/>
            </fieldset>
            </div>
        </form>
    </>
}