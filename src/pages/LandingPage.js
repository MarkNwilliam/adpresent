import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../animations/animation_ad.json';
import Hero from '../components/Hero'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
function LandingPage() {

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div >


<Landing/>
<Hero />
<Footer />
    </div>
  );
}

export default LandingPage;