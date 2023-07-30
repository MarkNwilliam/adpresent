import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChromePicker } from 'react-color';
import Footer from '../components/Footer';

function Presentation() {
    const [themeColor, setThemeColor] = useState('#292929');
    const [industry, setIndustry] = useState('');
    const [context, setContext] = useState('');

    return (
        <div className="min-h-screen bg-#E6E6DD flex flex-col">
            <header className="w-full p-4 bg-#292929">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-#E6E6DD font-bold text-xl">Home</Link>
                    <Link to="/create" className="text-#E6E6DD font-bold text-xl">Back to Create</Link>
                </div>
            </header>

            <div className="container mx-auto mt-10">
                <form>
                    <div className="mb-6">
                        <label className="block mb-2 text-#292929">Industry</label>
                        <input 
                            type="text" 
                            value={industry} 
                            onChange={(e) => setIndustry(e.target.value)}
                            className="p-3 rounded w-full border border-#292929" 
                        />
                    </div>

                    {/* Theme Color */}
                    <label className="block text-#292929 text-lg font-medium mb-2">Theme Color</label>
                    <div className="flex items-center mb-4">
                        <ChromePicker
                            color={themeColor}
                            onChangeComplete={(color) => setThemeColor(color.hex)}
                        />
                        <div className="flex items-center ml-4 space-x-3">
                            <div style={{ background: themeColor, width: '24px', height: '24px', borderRadius: '50%' }}></div>
                            <input
                                type="text"
                                value={themeColor}
                                readOnly
                                className="border border-#292929 p-3 rounded-md"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-#292929">Context</label>
                        <textarea 
                            rows="5" 
                            value={context}
                            onChange={(e) => setContext(e.target.value)}
                            className="p-3 rounded w-full border border-#292929"
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full bg-#292929 text-#E6E6DD rounded-lg p-3 mt-6 font-semibold hover:opacity-90">Create Presentation</button>
                </form>
        <div className="mt-10 p-6 border border-#292929 rounded-lg">
          <p className="mb-4 font-bold text-#292929">Your Presentation Video:</p>
          {/* Replace this with the actual video component when ready */}
          <div className="bg-gray-200 h-56 rounded-lg mb-4"></div>
          <button className="w-full bg-#292929 text-#E6E6DD rounded-lg p-3 font-semibold hover:opacity-90">Download Video</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Presentation;
