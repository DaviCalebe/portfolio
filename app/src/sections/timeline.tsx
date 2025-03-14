import html from "../assets/html-5.svg";
import css from "../assets/css-3.svg";
import bootstrap from "../assets/bootstrap.svg";
import react from "../assets/react.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import tailwind from "../assets/tailwind.svg";
import node from "../assets/node-js.svg";
import python from "../assets/python.svg";
import java from "../assets/java.svg";

const Timeline = ({ t }: { t: (key:string) => string}) => {
    const icons = [
        { src: html, alt: "html" },
        { src: css, alt: "css" },
        { src: bootstrap, alt: "bootstrap" },
        { src: react, alt: "react" },
        { src: javascript, alt: "javascript" },
        { src: typescript, alt: "typescript" },
        { src: tailwind, alt: "tailwind" },
        { src: node, alt: "node-js" },
        { src: python, alt: "python" },
        { src: java, alt: "java" },
      ];

    return (
        <section className="px-8 py-10">
            <h1 className="text-5xl text-center text-tertiary uppercase py-8">{t("timeline.title")}</h1>

            <div className="mx-auto grid grid-cols-9">

                {/* ====================== STEP 1 ====================== */}

                <div className="appear-left col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md border border-tertiary p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">{t("timeline.step1.title")}</h1>
                        <p className="text-tertiary">{t("timeline.step1.description")}</p>
                    </div>
                </div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-19 h-19 rounded-full bg-tertiary flex justify-center items-center text-tertiary text-2xl font-bold z-10">
                        <div className="absolute bg-base w-17 h-17 rounded-full z-0"></div>
                        <span className="z-10">2022</span>
                    </div>
                </div>

                <div className="col-span-4 w-full h-full"></div>

                {/* ====================== STEP 2 ====================== */}

                <div className="col-span-4 w-full h-full"></div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-19 h-19 rounded-full bg-tertiary flex justify-center items-center text-tertiary text-2xl font-bold z-10">
                        <div className="absolute bg-base w-17 h-17 rounded-full z-0"></div>
                        <span className="z-10">2023</span>
                    </div>
                </div>

                <div className="appear-right col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md border border-tertiary p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">{t("timeline.step2.title")}</h1>
                        <p className="text-tertiary">{t("timeline.step2.description")}</p>
                    </div>
                </div>

                {/* ====================== STEP 3 ====================== */}
                
                <div className="appear-left col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md border border-tertiary p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">{t("timeline.step3.title")}</h1>
                        <p className="text-tertiary">{t("timeline.step3.description")}</p>
                    </div>
                </div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-19 h-19 rounded-full bg-tertiary flex justify-center items-center text-tertiary text-2xl font-bold z-10">
                        <div className="absolute bg-base w-17 h-17 rounded-full z-0"></div>
                        <span className="z-10">2024</span>
                    </div>
                </div>

                <div className="col-span-4 w-full h-full"></div>

                {/* ====================== STEP 4 ====================== */}

                <div className="col-span-4 w-full h-full"></div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-19 h-19 rounded-full bg-tertiary flex justify-center items-center text-tertiary text-2xl font-bold z-10">
                        <div className="absolute bg-base w-17 h-17 rounded-full z-0"></div>
                        <span className="z-10">2025</span>
                    </div>
                </div>

                <div className="appear-right col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md border border-tertiary p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">{t("timeline.step4.title")}</h1>
                        <p className="text-tertiary">{t("timeline.step4.description")}</p>
                    </div>
                </div>
            </div>

            <h1 className="text-5xl text-center text-tertiary uppercase py-8">SKILLS</h1>

            <div className="flex justify-self-center overflow-hidden w-full max-w-[70%]">
                <div className="slider flex gap-10 animate-scroll">
                    {[...icons, ...icons].map((icon, index) => (
                    <img key={index} {...icon} className="w-20 h-20" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline;