import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../animations/animation_hero.json';

function Hero() {
 
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

      return (
        <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor: '#E6E6DD' }}>
          <section className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl" style={{ color: '#292929' }}>
                Introducing <span style={{ fontWeight: 'lighter' }}>AdPresent</span>
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12" style={{ color: '#292929' }}>
                Elevate your brand's storytelling with the power of AI. Convert text into high-quality presentation videos in a snap.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link to="/create" className="px-8 py-3 text-lg font-bold rounded" style={{ backgroundColor: '#292929', color: '#E6E6DD' }}>
                  Start Creating
                </Link>
                <Link to="/about" className="px-8 py-3 text-lg font-semibold border rounded" style={{ borderColor: '#292929', color: '#292929' }}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-96 sm:h-104 lg:h-120 xl:h-136 2xl:h-152">
              <Lottie options={lottieOptions} width="100%" height="100%" />
            </div>
          </section>
        </div>
      );
    }
    
    export default Hero;