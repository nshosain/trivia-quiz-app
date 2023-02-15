import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-1">
        <a href="https://github.com/nshosain" target="_blank" rel="noreferrer">
          <AiOutlineGithub style={{ color: "#6b21a8", fontSize: "30px" }} />
        </a>
      </div>
      <div className="p-1">
        <a
          href="https://www.linkedin.com/in/nshosain/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin style={{ color: "#6b21a8", fontSize: "30px" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
