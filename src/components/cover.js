import React from "react";
import { Nav } from "./nav/nav-contacct";
import Example from "./HeaderReact";
import "./cover.css"
// import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import HeadShake from 'react-reveal/HeadShake';

// import ScrollAnimation from 'react-animate-on-scroll';
import { ComboBox } from "./combobox";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top






export function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: 'black', height: '130vh', }} />
            </Container>
        </React.Fragment>
    );
}





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid md={3} xs={3}>
                    <Item className="backgroundgrid">
                        <img data-aos="flip-left" src="profiletitle.webp" alt="" />
                        <div className="profileDIvv">

                            <ArrowDropDownIcon fontSize="20" color="inherit" />
                        </div>


                        

                    </Item>
                </Grid>
                <Grid md={3} xs={3}>
                    <Item className="backgroundgrid">
                        <img src="" alt="" />
                        <div className="profileDIvv">

                            <ArrowDropDownIcon fontSize="20" color="inherit" />
                        </div>

                    </Item>
                </Grid>
                <Grid md={3} xs={3}>
                    <Item className="backgroundgrid">
                        <img src="" alt="" />
                        <div className="profileDIvv">

                            <ArrowDropDownIcon fontSize="20" color="inherit" />
                        </div>
                    </Item>
                </Grid>
                <Grid md={3} xs={3}>
                    <Item className="backgroundgrid">
                        <img data-aos="flip-right" src="profile4.webp" alt="" />
                        <div className="profileDIvv">

                            <ArrowDropDownIcon fontSize="20" color="inherit" />
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}


export function RowAndColumnSpacing1() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className="bgg" md={4} xs={12}>
                    <Item className="backgrondscolor">
                        {/* <ScrollAnimation animateIn="fadeIn"> */}
                        <Flip left cascade>

                        <img data-aos="flip-up" src="james.png" alt="no image" />
                        </Flip>
                        {/* </ScrollAnimation> */}

                    </Item>
                </Grid>
                <Grid md={4} xs={12}>
                    <Item className="backgronds">
                        <h1 >
                            <Roll bottom>
                                JAMES EDISON
                            </Roll>
                        </h1>
                        <p>

                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p>
                        <div className="abc" > <HeadShake>
                            <a target={"_blank"} href="https://twitter.com/umairathar07?s=09">

                                <TwitterIcon className="liksimage" color="inherit" />

                            </a>
                            <a target={"_blank"} href="https://www.instagram.com/umair__athar/">
                                <InstagramIcon className="liksimage" color="inherit" />
                            </a>
                            <a target={"_blank"} href="https://www.facebook.com/umair0007.crude">
                                <FacebookRoundedIcon className="liksimage" color="inherit" />
                            </a>
                            <a target={"_blank"} href="https://api.whatsapp.com/send?phone= + '+923039971549' + '&text=' + Hy Sir , I wanna get know about rates">
                                <WhatsAppIcon className="liksimage" color="inherit" />
                            </a>
                        </HeadShake>


                        </div>
                        <div>
                            <button className="buttonLInks">MAKE SCHEDULE</button>
                        </div>
                    </Item>
                </Grid>
                <Grid md={4} xs={12}>
                    <Item className="backgronds" >
                        <h1>
                            <Zoom cascade bottom>

                                LIST OF SERVICES
                            </Zoom>
                        </h1>
                        <p>
                            <Slide right >
                                <div> Hair Cut</div>
                                <div>Beart Trim</div>
                                <div>Hair Shampoo</div>
                                <div>Clipper Cut</div>
                                <div>Hair Style</div>
                                <div>face Shave</div>
                                <div>Moustache Trim</div>
                            </Slide>
                        </p>
                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}


export function RowAndColumnSpacing2() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid md={12} xs={12}>
                    <Item className="email-feedback2">
                        <div className="subcontainer">

                            <div className="subscription">

                            </div>
                            <div className="opac2nd">

                            </div>
                            <div className="subdata">
                                <p>
                                    Get notified on each updates.
                                </p>
                                <div className="centeremail">

                                    <div className="inputdiv">
                                        <input placeholder="Enter your email adress" type="email" />
                                    </div>
                                    <div>

                                        <button>SUBSCRIBE</button>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique laudantium illo culpa ipsum
                                    obcaecati odio sunt modi nostrum, earum .
                                </p>

                            </div>

                        </div>


                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}


export function RowAndColumnSpacing4() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid className="allpics" container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                <Grid className="main" md={3} sm={3} xs={12}>
                <Slide bottom cascade>
                    <Item className="eventsPic">
                        <div className="bgpicc">

                        </div>
                        <div className="overlayevents">
                            <SearchIcon id="mysvg" className="liksimage " color="inherit" />
                    

                        </div>
                    </Item>
                </Slide>
                </Grid>
                <Grid className="main" md={3} sm={3} xs={12}>
                <Slide top cascade>
                    <Item className="eventsPic">
                        <div className="bgpicc">

                        </div>


                        <div className="overlayevents">
                            <SearchIcon id="mysvg" className="liksimage " color="inherit" />

                        </div>

                    </Item>
                    </Slide>
                </Grid>
                <Grid className="main" md={3} sm={3} xs={12}>
                <Slide bottom cascade>
                    <Item className="eventsPic">
                        <div className="bgpicc">  </div>
                        <div className="overlayevents">
                            <SearchIcon id="mysvg" className="liksimage " color="inherit" />

                        </div>

                    </Item>
                    </Slide>
                </Grid>
                <Grid className="main" md={3} sm={3} xs={12}>
                <Slide top cascade>
                    <Item className="eventsPic">
                        <div className="bgpicc">  </div>

                        <div className="overlayevents">
                            <SearchIcon id="mysvg" className="liksimage " color="inherit" />

                        </div>

                    </Item>
                    </Slide>
                </Grid>
                <Grid className="main" md={3} sm={3} xs={12}>
                <Slide left cascade>
                    <Item className="eventsPic">
                        <div className="bgpicc">  </div>

                        <div className="overlayevents">
                            <SearchIcon id="mysvg" className="liksimage " color="inherit" />

                        </div>

                    </Item>
                    </Slide>
                </Grid>
                <Grid className="main" md={3} sm={3} xs={12}>
                <Slide left cascade>
                    <Item className="eventsPic">
                        <div className="bgpicc">  </div>

                        <div className="overlayevents">
                            <SearchIcon id="mysvg" className="liksimage " color="inherit" />

                        </div>

                    </Item>
                    </Slide>
                </Grid>
                <Grid className="main" md={3} sm={3} xs={12}>
                <Slide right cascade>
                    <Item className="eventsPic">
                        <div className="bgpicc">  </div>

                        <div className="overlayevents">
                            <SearchIcon id="mysvg" className="liksimage " color="inherit" />

                        </div>

                    </Item>
                    </Slide>
                </Grid>
                <Grid className="main" md={3} sm={3} xs={12}>
                <Slide right cascade>
                    <Item className="eventsPic">
                        <div className="bgpicc">  </div>

                        <div className="overlayevents">
                            <SearchIcon id="mysvg" className="liksimage " color="inherit" />

                        </div>

                    </Item>
                    </Slide>
                </Grid>

            </Grid>
        </Box>
    );
}


export function RowAndColumnSpacing5() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid className="planssout" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className="aa" md={4} sm={4} xs={12}>
                <Slide left cascade>
                    <Item className="plansdiv">
                        <div className="bg-planes">

                        </div>
                        <div className="planes-content">
                            
                            
                                <div className="servic">
                                 <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />    Hair Cut 

                                </div>
                          
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Beared Trim

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Hair Style

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Face Shave

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Clipper Cut

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Moustache Trim

                            </div>


                        </div>
                        <div className="buttonplans">
                            <div>$78</div>
                            <div> <button>
                                Get Started
                            </button></div>
                        </div>
                    </Item>
                    </Slide>
                </Grid>
                <Grid className="aa" md={4} sm={4} xs={12}>
                <Slide bottom cascade>
   
                    <Item className="plansdiv">
                        <div className="bg-planes">

                        </div>
                        <div className="planes-content">
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Hair Cut

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Beared Trim

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Hair Style

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Face Shave

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Clipper Cut

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Moustache Trim

                            </div>

                        </div>
                        <div className="buttonplans">
                            <div>$88</div>
                            <div> <button>
                                Get Started
                            </button></div>
                        </div>
                    </Item>
                    </Slide>
                </Grid>
                <Grid className="aa" md={4} sm={4} xs={12}>
                <Slide right cascade>

                    <Item className="plansdiv">
                        <div className="bg-planes">

                        </div>
                        <div className="planes-content">
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Hair Cut

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Beared Trim

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Hair Style

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Face Shave

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Clipper Cut

                            </div>
                            <div className="servic">
                                <ChevronRightSharpIcon fontSize="10" className="cross " color="inherit" />   Moustache Trim

                            </div>

                        </div>
                        <div className="buttonplans">
                            <div>$98</div>
                            <div> <button>
                                Get Started
                            </button></div>
                        </div>
                    </Item>
                    </Slide>
                </Grid>

            </Grid>
        </Box >
    );
}


export function RowAndColumnSpacing6() {
    return (
        <Box className="plansWidth" sx={{ width: '98%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid md={12} xs={12}>
                    <Item className="email-feedback2">
                        <div className="subcontainer">

                            <div className="sale">

                            </div>
                            <div className="opac2nd">

                            </div>
                            <div className="Appoitmentdata">
                                <h1>MAKE AN APPOITMENT</h1>
                                <div className="flexbuttons">
                                    <div>
                                        <input type="text" placeholder="First Name" />
                                    </div>
                                    <div>

                                        <input type="text" placeholder="Last Name" />

                                    </div>
                                    <div>
                                        <input type="number" placeholder="Phone" />

                                    </div>
                                    <div>
                                        <ComboBox />
                                    </div>
                                    <div>
                                        <button>Make An Appoitment</button>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}


export function Footer() {
    return (
        <footer className="text-white-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white-600 hover:text-white-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-white-600 hover:text-white-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-white-600 hover:text-white-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-white-600 hover:text-white-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white-600 hover:text-white-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-white-600 hover:text-white-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-white-600 hover:text-white-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-white-600 hover:text-white-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white-600 hover:text-white-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-white-600 hover:text-white-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-white-600 hover:text-white-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-white-600 hover:text-white-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
                            SUBSCRIBE
                        </h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label
                                    htmlFor="footer-field"
                                    className="leading-7 text-sm text-white-600"
                                >
                                    Placeholder
                                </label>
                                <input
                                    type="text"
                                    id="footer-field"
                                    name="footer-field"
                                    className="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                Button
                            </button>
                        </div>
                        <p className="text-white-500 text-sm mt-2 md:text-left text-center">
                            Bitters chicharrones fanny pack
                            <br className="lg:block hidden" />
                            waistcoat green juice
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white-900">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="ml-3 text-xl">SALON FOR YOU</span>
                    </a>
                    <p className="text-sm text-white-500 sm:ml-6 sm:mt-0 mt-4">
                        © 2020 Salon For You —
                        <a
                            href="https://twitter.com/knyttneve"
                            rel="noopener noreferrer"
                            className="text-white-600 ml-1"
                            target="_blank"
                        >
                            @knyttneve
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-white-500">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-white-500">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-white-500">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a className="ml-3 text-white-500">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={0}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>

    );
}

export function Testmonial() {
    return (         <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Read trusted reviews from our customers
      </h2>
     
    </div>
    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
      <div>
                       
        <img
          alt="Woman"
          src="umairpic.png"
        //   src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />
        <blockquote className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
          <p className="text-lg font-bold text-gray-700">Sophie Lennon</p>
          <p className="mt-1 text-xs font-medium text-gray-500">
            Digital Marketing at Studio
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
          </p>
          <div className="mt-8 flex justify-center gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </blockquote>
      </div>
      <div>
        <img
          alt="Woman"
          src="person2.png"
        //   src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />
        <blockquote className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
          <p className="text-lg font-bold text-gray-700">Sophie Lennon</p>
          <p className="mt-1 text-xs font-medium text-gray-500">
            Digital Marketing at Studio
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
          </p>
          <div className="mt-8 flex justify-center gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </blockquote>
      </div>
      <div>
        <img
          alt="Woman"
          src="person3.png"
        //   src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />
        <blockquote className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
          <p className="text-lg font-bold text-gray-700">Sophie Lennon</p>
          <p className="mt-1 text-xs font-medium text-gray-500">
            Digital Marketing at Studio
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
          </p>
          <div className="mt-8 flex justify-center gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </blockquote>
      </div> 
    </div>
  </div>
</section>

       

    );
}
export function Cover() {
    return <>

        <div className="myheaders">
            <div className="innerheader">

                <Nav></Nav>
                <Example></Example>

            </div>

            {/* ////////////////////////////// */}

            <div data-aos="fade-right" className="coverPage ">

                <div className="bg-pic" >
                    <div className="overlay"></div>
                    <div className="containertext">
                        <Fade right>
                            <div className="cover-txt">
                                <h3>WELCOME TO SALON FOR YOU</h3>
                                <p>
                                    WE WILL MAKE<span className="outlines-empty"> YOUR STYLES </span> OF YOURS DREAMS
                                </p>
                            </div>
                        </Fade>
                        <Fade bottom>

                            <div className="m1-auto text">
                                <p>

                                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                </p>
                                <button className="btnnn">LEARN MORE ABOUT US </button>
                            </div>
                        </Fade>
                    </div>
                </div>



            </div>
        </div>
        {/* ///////////////////////////////////////////// */}

        <div data-aos="fade-up" className="flex-boxes">
            <div className="chids-flex">
                <Flip left cascade>

                    <div className="imagee "></div>
                </Flip>
                <div className="boxes-content">
                    <LightSpeed left>

                        <h3>HAIR STYLES</h3>
                    </LightSpeed>
                    <Fade top cascade>

                        <p > A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                    </Fade>
                </div>
            </div>
            <div className="chids-flex">
                <Flip cascade left>
                    <div className="imagee "></div>
                </Flip>
                <div className="boxes-content">
                    <Zoom cascade bottom>
                        <h3>BEARD TRIM</h3>
                    </Zoom>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                </div>
            </div>
            <div className="chids-flex">
                <Flip cascade left>
                    <div className="imagee fade-up-left"></div>
                </Flip>
                <div className="boxes-content">
                    <Zoom cascade bottom>
                        <h3>HOT SHAVE</h3>
                    </Zoom>
                    <Fade right cascade>

                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                    </Fade>
                </div>
            </div>
            <div className="chids-flex">
                <Flip cascade left>
                    <div className="imagee "></div>
                </Flip>
                <div className="boxes-content">
                    <LightSpeed cascade right>
                        <h3>HAIR SHAMPOO</h3>
                    </LightSpeed>
                    <Fade bottom cascade>

                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                    </Fade>                </div>
            </div>
        </div>

        {/* ///////////////////////////////////////// */}


        <div className="twrpart">

            <div className="innn">

                <div data-aos="fade-right" className="toweric ">
                </div>
                <div className="towerContent fade-down">
                    <div className="aaa">
                        <Fade left cascade>
                            <h1>A SMOOTH BARBER EXPERIENCE IN YOUR TOWN</h1>
                        </Fade>
                        <Slide right cascade>

                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </Slide>
                    </div>
                    <div className="ccc">
                        <div>
                            <img className="swing-in-left-bck" src="/cc.png" alt="" />
                        </div>
                        <div className="cco">
                            <h2>20 YEAR OF EXPERIENCED</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ///////////////////////////////////////// */}

        <div className="DIvbackground">


            <div className="headingCenter">
                <Zoom right cascade>
                    <h3>TEAM</h3>
                </Zoom>
                <Slide left cascade>
                    <h1 className="tracking-in-contract">OUR EXPERT <span> TEAM </span></h1>
                </Slide>
            </div>

            <div className="profile">

                <RowAndColumnSpacing />
            </div>
          
            <div className="titleprofile">
                <RowAndColumnSpacing1 />

            </div>
            <div className="emailfeedback">
                <RowAndColumnSpacing2 />

            </div>
            <div className="headingCenter">
            <Zoom right cascade>

                <h3>GALLERY</h3>
            </Zoom>
                <h1 className="tracking-in-contract"> PHOTOS OF OUR    <span> EVENTS </span></h1>
            </div>

            <div className="events">
                <RowAndColumnSpacing4 />

            </div>



        </div>

        {/* ///////////////////////////////////////// */}


        <div className=" bgmy">
        <Zoom right cascade>

            <h3>PRICING</h3>
        </Zoom>
            <h1 className="tracking-in-contract"> PRICE &    <span> PLANS </span></h1>
        </div>

        {/* ///////////////////////////////////////// */}


        <div className="plans">
            <RowAndColumnSpacing5 />
        </div>

        {/* ///////////////////////////////////////// */}

        <div className="testimonial">
            <div className="testibg">

                <h3>TESTIMONIAL</h3>
                <h1> PEOPLE SAY  <br />  <span> ABOUT OUR BARBER </span></h1>
            </div>
            <div className="testmonial">
                <Testmonial></Testmonial>
            </div>
        </div>

        {/* ///////////////////////////////////////// */}

        <div>
            <RowAndColumnSpacing6></RowAndColumnSpacing6>
        </div>

        {/* ///////////////////////////////////////// */}

        <div className="footer">
            <Footer></Footer>
        </div>


        {/* ///////////////////////////////////////// */}

    </>
}

