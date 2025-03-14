import { motion } from "framer-motion";
import { useEffect } from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";

export const SocialMedias = () => {
    useEffect(() => {
        document.body.classList.add("overflow-x-hidden");
        return () => document.body.classList.remove("overflow-x-hidden");
    }, []);

    return (
        <aside className="sticky top-0 z-30">
            <motion.div
                className="absolute top-30 right-0 flex flex-col gap-2 p-5"
                initial={{ right: "-1.5rem" }}
                whileHover={{ right: "0.5rem" }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{ clipPath: "inset(0 0 0 -2rem)" }}
            >
                <div className="bg-base p-4 rotate-45">
                    <img
                    src={github}
                    alt="github"
                    className="relative z-50 w-10 -rotate-45 hover:scale-150 hover:z-50 transition-transform cursor-pointer"
                    onClick={() => window.open("https://github.com/DaviCalebe", "_blank")}
                    />
                </div>
                <div className="bg-base p-4 rotate-45">
                    <img
                    src={linkedin}
                    alt="linkedin"
                    className="relative z-50 w-10 -rotate-45 hover:scale-150 hover:z-50 transition-transform cursor-pointer"
                    onClick={() => window.open("https://www.linkedin.com/in/davicalebe/", "_blank")}
                    />
                </div>
                <div className="bg-base p-4 rotate-45">
                    <img
                    src={whatsapp}
                    alt="whatsapp"
                    className="relative z-50 w-10 -rotate-45 hover:scale-150 hover:z-50 transition-transform cursor-pointer"
                    onClick={() => window.open("https://wa.me/5581987357749", "_blank")}
                    />
                </div>
            </motion.div>
        </aside>
    );
};
