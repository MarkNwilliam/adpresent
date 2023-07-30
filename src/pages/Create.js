import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Lottie from 'react-lottie';
import animationAdCard from '../animations/animation_adcard.json';
import animationPresentation from '../animations/animation_presentation.json';


function Create() {

    const adCardOptions = {
        loop: true,
        autoplay: true,
        animationData: animationAdCard,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
      
      const presentationOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPresentation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

      
  return (
    <div className="flex flex-col min-h-screen bg-#E6E6DD">
      
      {/* Header */}
      <header className="sticky top-0 z-10 w-full h-16 p-4 bg-#292929 shadow-md flex items-center">
        <Link to="/" className="text-#E6E6DD font-bold text-xl ml-4">Home</Link>
      </header>

      {/* Content */}
      <main className="flex-grow w-4/5 mx-auto mt-16 flex justify-between">

        {/* Create Advert Video Card */}
        <div className="flex flex-col items-center justify-center p-8 h-96 w-1/2 border border-#292929 rounded-lg shadow-md bg-white mr-8">
        <div className="mb-4">
  <Lottie options={adCardOptions} height={150} width={150} />
</div>
          <h2 className="text-2xl font-bold mb-4 text-#292929">Create Advert Video</h2>
          <p className="text-#E6E6DD mb-6">Transform your text into an engaging advert video using AI.</p>
          <Link to="/ad" className="px-6 py-3 text-#E6E6DD bg-#292929 rounded-md font-semibold text-lg hover:opacity-80">Start</Link>
        </div>

        {/* Create Presentation Card */}
        <div className="flex flex-col items-center justify-center p-8 h-96 w-1/2 border border-#292929 rounded-lg shadow-md bg-white ml-8">
        <div className="mb-4">
  <Lottie options={presentationOptions} height={150} width={150} />
</div>
          <h2 className="text-2xl font-bold mb-4 text-#292929">Create Presentation</h2>
          
          <p className="text-#E6E6DD mb-6">Craft a presentation video from your text effortlessly.</p>
          <Link to="/presentation" className="px-6 py-3 text-#E6E6DD bg-#292929 rounded-md font-semibold text-lg hover:opacity-80">Start</Link>
        </div>

      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}

export default Create;




