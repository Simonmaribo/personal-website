import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord, FaLinkedin, FaFacebookSquare, FaEnvelope } from 'react-icons/fa'

import SocialIcon from "./SocialIcon";

export default function Header(){
    return (
        <div className="flex flex-col-reverse gap-10 justify-between items-center md:flex-row">
            <div className="flex flex-col gap-4 mb-5">
                <p className="text-grey-800">
                    Hej, mit navn er Simon, jeg er 16 år gammel og har kodet i diverse sprog siden jeg var 12. Hvis du har en ide til et projekt, så ikke tøv med at kontakte mig.</p>
                <div className="flex flex-row gap-3">
                    <SocialIcon icon={<AiFillGithub size={25}/>} href="https://github.com/simonmaribo"/>
                    <SocialIcon icon={<FaDiscord size={25}/>} href="https://discord.com/users/261195644314714113"/>
                    <SocialIcon icon={<FaLinkedin size={25}/>} href="https://linkedin.com/in/simonmaribo/"/>
                    <SocialIcon icon={<FaFacebookSquare size={25}/>} href="https://www.facebook.com/simon.maribo.18"/>
                    <SocialIcon icon={<FaEnvelope size={25}/>} href="mailto:simonmaribo@outlook.dk"/>
                </div>
            </div>
            <img className="rounded-full flex-grow max-h-[224px] outline outline-offset-4 outline-3 outline-[#0050ff]" src="./mig.png" alt="Billede af Simon Maribo"/>
        </div>
    )
}