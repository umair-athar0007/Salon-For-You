import React from "react";
import './saloon_style.css';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}

export function SaloonLanding() {



  return <div className="mybody">
    <div className="staticpic">
      <div className="mycontainer">
        <span className="logoname">With Patrick potter</span>
        <h2 className="hero_caption">Our HAir Style make your</h2>
        <h2 className="hero_caption">Look Elegance</h2>
        <h1 className="confident">Get More Confident</h1>
      </div>
    </div>


    <div class="intro">
      <h4>POPULAR PRODUCTS</h4>
      <h2>OUR PRODUCTS</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, sunt velit amet iste dolorem aut
        omnis ex! Beatae aspernatur aliquid ullam assumenda vitae eveniet incidunt.</p>
    </div>



    {/* cards hherrrrr */}

    <ul className="img-list">
      <li><img src="https://iili.io/LCqJkl.webp" /></li>
      <li><span className="img-placeholder">- placeholder -</span></li>
      <li><img src="https://iili.io/LCqAhP.jpg" /></li>
      <li><img src="https://iili.io/LCqRQ1.webp" /></li>
      <li><span className="img-placeholder">- placeholder -</span></li>
      <li><img src="https://iili.io/LCqa4a.webp" /></li>
      <li><img src="https://iili.io/LiQRJs.webp" /></li>
      <li><img src="https://iili.io/LiQG19.webp" /></li>
      <li><span className="img-placeholder">- placeholder -</span></li>
    </ul>

    <div className="location">
      <Link to={"/saloonlocator"}>
        Get Location
      </Link>
    </div>


  </div>
}