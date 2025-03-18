import { motion } from "framer-motion";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";

export const SocialMedias = () => {
    return (
        <aside className="relative z-30">
            <motion.div
                className="absolute top-7 right-0 flex flex-col gap-5 p-5 md:top-25 lg:top-30"
                initial={{ right: "0rem" }}
                whileHover={{ right: "0.5rem" }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <img
                src={github}
                alt="github"
                className="relative z-50 w-8 hover:scale-150 hover:z-50 transition-transform cursor-pointer lg:w-10"
                onClick={() => window.open("https://github.com/DaviCalebe", "_blank")}
                />
                <img
                src={linkedin}
                alt="linkedin"
                className="relative z-50 w-8 hover:scale-150 hover:z-50 transition-transform cursor-pointer lg:w-10"
                onClick={() => window.open("https://www.linkedin.com/in/davicalebe/", "_blank")}
                />
                <img
                src={whatsapp}
                alt="whatsapp"
                className="relative z-50 w-8 hover:scale-150 hover:z-50 transition-transform cursor-pointer lg:w-10"
                onClick={() => window.open("https://wa.me/5581987357749", "_blank")}
                />
            </motion.div>
        </aside>
    );
};
