import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function AdPage() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="flex flex-col min-h-screen bg-#E6E6DD">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full h-16 p-4 bg-#292929 shadow-md flex justify-between items-center">
        <Link to="/" className="text-#E6E6DD font-bold text-xl ml-4">Home</Link>
        <Link to="/create" className="text-#E6E6DD font-bold text-xl mr-4">Create</Link>
      </header>

      {/* Content - Made this section scrollable */}
      <main className="flex-grow w-4/5 mx-auto mt-16 flex flex-col items-center overflow-y-auto pb-16">
        <h1 className="text-3xl mb-8 text-#292929">Create Advert Video</h1>


        {/* Form */}
        <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-#292929 text-sm font-bold mb-2" htmlFor="company">Company:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-#E6E6DD" id="company" type="text" placeholder="Enter company name" />
          </div>
          <div className="mb-4">
            <label className="block text-#292929 text-sm font-bold mb-2" htmlFor="product">Product:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-#E6E6DD" id="product" type="text" placeholder="Enter product name" />
          </div>
          <div className="mb-4">
            <label className="block text-#292929 text-sm font-bold mb-2" htmlFor="industry">Industry:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-#E6E6DD" id="industry" type="text" placeholder="Enter industry" />
          </div>
          <div className="w-full mb-4">
  <label htmlFor="themeColor" className="block mb-2 text-#292929 font-semibold">Theme Color:</label>
  <input
    type="color"
    id="themeColor"
    name="themeColor"
    value={color}
    onChange={e => setColor(e.target.value)}
    className="w-12 h-12 border-2 border-#292929 p-2 rounded cursor-pointer"
  />
  <input
    type="text"
    value={color}
    readOnly
    className="ml-4 border-2 border-#292929 p-2 rounded"
  />
</div>
          <div className="mb-4">
            <label className="block text-#292929 text-sm font-bold mb-2" htmlFor="context">Context:</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-#E6E6DD" id="context" placeholder="Describe the context" rows="5"></textarea>
          </div>

          <div className="flex items-center justify-between">
          <button
  
  className="px-8 py-3 bg-#292929 text-#E6E6DD font-semibold text-lg rounded-full hover:bg-#1d1d1d transition-colors duration-300 shadow-md my-4"
>
  Start Creating
</button>
          </div>
        </form>

    {/* Placeholder for the video */}
    <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded mt-8">
          <span className="text-#292929 font-semibold">Your video will appear here</span>
        </div>

        {/* Download button */}
        <button
  
  className="px-8 py-3 bg-#292929 text-#E6E6DD font-semibold text-lg rounded-full hover:bg-#1d1d1d transition-colors duration-300 shadow-md my-4"
>
  Download Video
</button>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AdPage;
