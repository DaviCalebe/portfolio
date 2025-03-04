import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";

export const SocialMedias = () => {
    return (
        <aside className="sticky top-0 z-[9999]">
            <div className="absolute top-30 z-[9999] right-0 flex flex-col p-5">
                <div className="bg-base p-5 rotate-45">
                    <img src={github} alt="github" className="relative z-50 w-10 -rotate-45 hover:scale-150" />
                </div>
                <div className="bg-base p-5 rotate-45">
                    <img src={linkedin} alt="linkedin" className="relative z-50 w-10 -rotate-45 hover:scale-150" />
                </div>
                <div className="bg-base p-5 rotate-45">
                    <img src={whatsapp} alt="whatsapp" className="relative z-50 w-10 -rotate-45 hover:scale-150" />
                </div>
            </div>
        </aside>
    )
}