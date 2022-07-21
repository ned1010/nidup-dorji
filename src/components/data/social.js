import React from "react";
import { FaInstagram} from "react-icons/fa";
import { BsGithub, BsTwitter, BsYoutube} from "react-icons/bs";

export default function Social(){
    return (
        <div className="social">
            <div className="social-item">
                <a rel="noopener noreferrer" href="https://github.com/nidup1010" target="_blank" className="social-link"><BsGithub/></a>
                <a rel="noopener noreferrer" href="https://www.instagram.com/neddy_98/" target="_blank" className="social-link"><FaInstagram/></a>
                <a rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank" className="social-link"><BsTwitter/></a>
                <a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCMslECTvJJNIGH7H6q01xMw" target="_blank" className="social-link"><BsYoutube/></a>
            </div>
        </div>
    )
};