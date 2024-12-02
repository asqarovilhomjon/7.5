// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { useSelector } from 'react-redux';
// import Mode from '../Mode/Mode';
// import logo from '../../assets/LOGO.png';
// import Navlinks from './Navlinks';
// import ru from '../../assets/RU.png';
// import { languages } from '../../static';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const ModeState = useSelector((state) => state.isDarkMode.isDarkMode);

//   return (
//     <>
//       <header className="relative">
//         <div className="container">
//           <nav className="flex justify-between items-center h-[90px]">
//             {/* Logo Section */}
//             <div className="flex items-center">
//               <NavLink to="/">
//                 <img src={logo} alt="Logo" className="max-w-[112px]" />
//               </NavLink>
//             </div>

//             {/* Navigation Links Section */}
//             <div className="absolute flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-[30px] items-center">
//               <Navlinks />
//             </div>

//             {/* Language Selector Section */}
//             <div className="relative flex items-center gap-5">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors"
//               >
//                 <img
//                   src={ru}
//                   alt="Language Flag"
//                   className="w-5 h-5 rounded-full"
//                 />
//                 <span
//                   className={`${
//                     ModeState ? 'text-black' : 'text-white-person'
//                   } font-aeonik`}
//                 >
//                   Ру
//                 </span>
//                 <MdKeyboardArrowDown
//                   className={`w-5 h-5 transition-transform ${
//                     isOpen ? 'rotate-180' : ''
//                   } ${ModeState ? 'text-black' : 'text-white-person'}`}
//                 />
//               </button>

//               <button className="px-[65px] py-[18px] rounded-lg bg-red-person text-white-person">
//                 Войти
//               </button>

//               {isOpen && (
//                 <div
//                   className={`absolute top-full ${
//                     ModeState ? 'bg-black text-white' : 'bg-white text-black'
//                   } mt-2 border border-gray-700 rounded-md py-1 min-w-[100px]`}
//                 >
//                   {languages.map((lang) => (
//                     <button
//                       key={lang}
//                       className="w-full px-4 py-2 text-left"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {lang}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </nav>
//         </div>
//       </header>

//       {/* Dark Mode Toggle */}
//       <div className="fixed bottom-16 right-[10%] z-[101]">
//         <Mode />
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Mode from '../Mode/Mode';
import logo from '../../assets/LOGO.png';
import Navlinks from './Navlinks';

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ru'); // Default language
  const ModeState = useSelector((state) => state.isDarkMode.isDarkMode);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    console.log(`Selected language: ${event.target.value}`); // You can replace this with actual language change logic
  };

  return (
    <>
      <header className="relative">
        <div className="container">
          <nav className="flex justify-between items-center h-[90px]">
            {/* Logo Section */}
            <div className="flex items-center">
              <NavLink to="/">
                <img src={logo} alt="Logo" className="max-w-[112px]" />
              </NavLink>
            </div>

            {/* Navigation Links Section */}
            <div className="absolute flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-[30px] items-center">
              <Navlinks />
            </div>

            {/* Language Selector Section */}
            <div className="relative flex items-center gap-5">
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className={`px-4 py-2 rounded-lg ${
                  ModeState ? 'bg-inherit text-black' : 'bg-inherit text-white'
                } border border-gray-700`}
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="eng">ENG</option>
              </select>

              <button className="px-[65px] py-[18px] rounded-lg bg-red-person text-white-person">
                Войти
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Dark Mode Toggle */}
      <div className="fixed bottom-16 right-[10%] z-[101]">
        <Mode />
      </div>
    </>
  );
};

export default Header;
