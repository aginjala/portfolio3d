import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center text-black-500">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center
         neo-brutalism-blue py-4 px-8 text-black-500 mx-5">
             Hi, I'm <span className="font-semibold">Ashok Reddy</span>&nbsp;&nbsp;
            <br />
            &nbsp;A full-stack developer<span className="emoji">👨🏻‍💻</span>
         </h1>
    ),
    2: (
        <h1><InfoBox text="With a robust portfolio spanning across various industries, 
        I've garnered extensive experience as a full-stack software developer within top-tier organizations."
        link='/about' btnText="Additional Insights" /></h1>
    ),
    3: (
        <h1><InfoBox text="Throughout my career, I've led multiple projects to success, 
        achieving favorable outcomes each time."
        link='/projects' btnText="My Portfolio" /></h1>
    ),
    4: (
        <h1><InfoBox text="Need a developer or assistance with your project? Feel free to get in touch – I'm accessible and ready to assist."
        link='/contact' btnText="Let's Connect" /></h1>
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo