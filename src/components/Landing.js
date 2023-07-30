import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../animations/animation_ad.json';
import { TypeAnimation } from 'react-type-animation';

function Landing() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={{ backgroundColor: '#E6E6DD', padding: '20px' }} className="flex flex-col items-center justify-center h-screen text-center">
      <div style={{ marginBottom: '30px' }}>
        <TypeAnimation
          sequence={[
            'Introducing AdPresent...',
            1500,
            'Transforming textual content into videos...',
            1500,
            'Using the power of AI...',
            1500
          ]}
          wrapper="h1"
          speed={50}
          style={{ color: '#292929', fontSize: '2em', fontWeight: 'bold' }}
          repeat={Infinity}
        />
      </div>
      <p style={{ color: '#292929', fontSize: '1.2em', fontWeight: 'bold', marginBottom: '15px' }}>
        AdPresent elevates your brand's storytelling. Ditch complex video editing tools. With us, high-quality presentation videos are just a few clicks away.
      </p>
      <Link
        to="/create"
        style={{ backgroundColor: '#292929', color: '#E6E6DD', borderColor: '#292929', padding: '10px 20px' }}
        className="rounded-md font-bold text-lg hover:bg-opacity-90 transition mb-6"
      >
        Start Creating
      </Link>
      <div style={{ width: '300px', height: '300px', marginTop: '20px' }}>
        <Lottie options={lottieOptions} />
      </div>
      <p style={{ color: '#292929', fontSize: '1em', fontWeight: 'bold', marginTop: '15px' }}>
        Step into the future of presentations. Unleash the power of AI with AdPresent.
      </p>
    </div>
  );
}

export default Landing;

