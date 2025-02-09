import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
    <div className="container flex px-3 py-8 ">
      <div className="w-full mx-auto flex flex-wrap">
        <div className="flex w-full lg:w-1/2 ">
          <div className="px-3 md:px-0">
            <h3 className="font-bold text-gray-900">Contact Us</h3>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
            </p>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right mt-6 md:mt-0">
          <div className="px-3 md:px-0">
            <h3 className="text-left font-bold text-gray-900">Social</h3>
  
            <div className="w-full flex items-center py-4 mt-0">
              <a href="#" className="mx-2">
                
                <FaXTwitter className="w-6 h-6 text-black"/>
              </a>
              <a href="#" className="mx-2">
                <FaFacebook className="w-6 h-6 text-blue-600"/>
              </a>
              <a href="#" className="mx-2">
                
                <FaInstagram className="w-6 h-6 text-red-600"/>
              </a>
              <a href="#" className="mx-2">
              <FaSquarePinterest className="w-6 h-6 text-black-600"/>

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
    )
  }
  
  export default Footer