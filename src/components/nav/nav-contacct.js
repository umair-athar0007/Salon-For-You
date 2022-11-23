import React from "react";
import './nav.css'
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fade from 'react-reveal/Fade';
import Shake from 'react-reveal/Shake';


export function Nav() {



    return (

        <nav className="navv">
            <div className="flex-header">

                <div className="abc">
                    <div className="contactm">
                    <a href="tel:+923306146540">
                        <CallIcon color="success"  />
                        <span className="myhide">
                            +92-330-6146540
                        </span>
                        </a>
                    </div>
                    <div className="contactm">
                        <a href="mailto:umairathar0007@gmail.com">
                      <SendIcon color="warning" /><span className="myhide">  umairathar0007@gmail.com </span>     
   
                           
                        </a>
                    </div>
                </div>
                <div className="abc" >
                    <a target={"_blank"} href="https://twitter.com/umairathar07?s=09">
                    <Shake> 

                        <TwitterIcon className="liksimages" color="info" />
                    </Shake>
                    </a>
                    <a target={"_blank"} href="https://www.instagram.com/umair__athar/">
                    <Shake>  <InstagramIcon className="liksimages" color="warning" />    </Shake>
                    </a>
                    <a target={"_blank"} href="https://www.facebook.com/umair0007.crude">
                    <Shake>  <FacebookRoundedIcon className="liksimages" color="primary" />    </Shake>
                    </a>
                    <a target={"_blank"} href="https://api.whatsapp.com/send?phone= + '+923039971549' + '&text=' + Hy Sir , I wanna get know about rates">
                    <Shake>   <WhatsAppIcon className="liksimages" color="success" />    </Shake>
                    </a>


                </div>
            </div>
        </nav>
    );


}