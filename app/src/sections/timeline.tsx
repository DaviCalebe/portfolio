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

const Timeline = () => {
    return (
        <section className="px-8 py-10">
            <h1 className="text-5xl text-center text-tertiary uppercase py-8">A estrada até aqui...</h1>

            <div className="mx-auto grid grid-cols-9">

                {/* STEP 1 */}

                <div className="appear-left col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md border border-tertiary p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">teste</h1>
                        <p className="text-tertiary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eos delectus labore tempora ea vel! Laborum maiores, quaerat delectus eius a earum ea aperiam repellat, ipsa cupiditate voluptatem beatae quae?</p>
                    </div>
                </div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-16 h-16 rounded-full bg-tertiary flex justify-center items-center text-tertiary text-2xl font-bold z-10">
                        <div className="absolute bg-base w-14 h-14 rounded-full z-0"></div>
                        <span className="z-10">2022</span>
                    </div>
                </div>

                <div className="col-span-4 w-full h-full"></div>

                {/* STEP 2 */}

                <div className="col-span-4 w-full h-full"></div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-16 h-16 rounded-full bg-tertiary flex justify-center items-center text-tertiary text-2xl font-bold z-10">
                        <div className="absolute bg-base w-14 h-14 rounded-full z-0"></div>
                        <span className="z-10">2023</span>
                    </div>
                </div>

                <div className="appear-right col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md border border-tertiary p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">teste</h1>
                        <p className="text-tertiary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eos delectus labore tempora ea vel! Laborum maiores, quaerat delectus eius a earum ea aperiam repellat, ipsa cupiditate voluptatem beatae quae?</p>
                    </div>
                </div>

                {/* STEP 3 */}
                
                <div className="appear-left col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md border border-tertiary p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">teste</h1>
                        <p className="text-tertiary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eos delectus labore tempora ea vel! Laborum maiores, quaerat delectus eius a earum ea aperiam repellat, ipsa cupiditate voluptatem beatae quae?</p>
                    </div>
                </div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-16 h-16 rounded-full bg-tertiary flex justify-center items-center text-tertiary text-2xl font-bold z-10">
                        <div className="absolute bg-base w-14 h-14 rounded-full z-0"></div>
                        <span className="z-10">2024</span>
                    </div>
                </div>

                <div className="col-span-4 w-full h-full"></div>

                {/* STEP 4 */}

                <div className="col-span-4 w-full h-full"></div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-16 h-16 rounded-full bg-tertiary flex justify-center items-center text-tertiary text-2xl font-bold z-10">
                        <div className="absolute bg-base w-14 h-14 rounded-full z-0"></div>
                        <span className="z-10">2025</span>
                    </div>
                </div>

                <div className="appear-right col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md border border-tertiary p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">teste</h1>
                        <p className="text-tertiary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eos delectus labore tempora ea vel! Laborum maiores, quaerat delectus eius a earum ea aperiam repellat, ipsa cupiditate voluptatem beatae quae?</p>
                    </div>
                </div>
            </div>

            <h1 className="text-5xl text-center text-tertiary uppercase py-8">SKILLS</h1>

            <div className="flex flex-wrap justify-center items-center px-10 gap-10">
                <img src={html} alt="html" className="appear w-20 h-20 hover:scale-130 transition-transform duration-300"/>
                <img src={css} alt="css" className="appear w-20 h-20 hover:scale-130 transition-transform duration-300"/>
                <img src={bootstrap} alt="bootstrap" className="appear w-20 h-20 hover:scale-130 transition-transform duration-300"/>
                <img src={react} alt="react" className="appear w-20 h-20 hover:scale-130 transition-transform duration-300"/>
                <img src={javascript} alt="javascript" className="appear w-20 h-20 hover:scale-130 transition-transform duration-300"/>
                <img src={typescript} alt="typescript" className="appear w-20 h-20 hover:scale-130 transition-transform duration-300"/>
                <img src={tailwind} alt="tailwind" className="appear w-20 h-20 hover:scale-130 transition-transform duration-300"/>
                <img src={node} alt="node-js" className="appear w-20 h-20 hover:scale-130 transition-transform duration-300"/>
                <img src={python} alt="python" className="appear w-20 h-20 hover:scale-130 transition-transform duration-300"/>
                <img src={java} alt="java" className="appear w-20 h-20 hover:scale-130 transition-transform duration-300"/>
            </div>
        </section>
    )
}

export default Timeline;