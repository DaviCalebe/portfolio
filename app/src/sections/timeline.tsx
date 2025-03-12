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
import { motion } from "framer-motion";

const Timeline = () => {
    return (
        <section className="px-8 py-10">
            <h1 className="text-5xl text-center text-tertiary uppercase py-8">A estrada até aqui...</h1>

            <div className="mx-auto grid grid-cols-9">

                {/* STEP 1 */}

                <div className="appear-left col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md border border-tertiary p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">Início</h1>
                        <p className="text-tertiary">Entrei na faculdade de ADS e tudo era novo, mas logo me encantei pela tecnologia. No Rec'N'Play, tive meu primeiro contato real com a área e percebi que era exatamente o caminho que queria seguir!</p>
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

                {/* STEP 2 */}

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
                        <h1 className="text-tertiary text-2xl font-semibold">Aprendizados</h1>
                        <p className="text-tertiary">Aprofundei meus estudos em programação, explorando back-end, front-end e low-code. Foi um ano de imersão, onde absorvi ao máximo todo conhecimento disponível!</p>
                    </div>
                </div>

                {/* STEP 3 */}
                
                <div className="appear-left col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md border border-tertiary p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">Resultados</h1>
                        <p className="text-tertiary">Comecei um curso de inglês na ABA e embarquei em projetos maiores! Fomos selecionados para o Demoday pelo Squad34 da Residência do Porto Digital, apresentando no Lab de Inovação e na Arena Embarque Digital, no Rec'N'Play.</p>
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

                {/* STEP 4 */}

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
                        <h1 className="text-tertiary text-2xl font-semibold">Mistério</h1>
                        <p className="text-tertiary">O que esse ano me reserva ainda é incerto, mas sei que boas coisas virão! Estou focado em evoluir, estudando e trabalhando para me tornar cada vez melhor naquilo que amo.
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="text-5xl text-center text-tertiary uppercase py-8">SKILLS</h1>

            <div className="flex flex-wrap justify-center items-center px-10 gap-10">
                <motion.img
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 3 },
                }}
                whileTap={{ scale: 0.9 }}
                src={html}
                alt="html"
                className="appear w-20 h-20 cursor-pointer"
                />
                <motion.img
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 3 },
                }}
                whileTap={{ scale: 0.9 }}
                src={css}
                alt="css"
                className="appear w-20 h-20 cursor-pointer"
                />
                <motion.img
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 3 },
                }}
                whileTap={{ scale: 0.9 }}
                src={bootstrap}
                alt="bootstrap"
                className="appear w-20 h-20 cursor-pointer"
                />
                <motion.img
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 3 },
                }}
                whileTap={{ scale: 0.9 }}
                src={react}
                alt="react"
                className="appear w-20 h-20 cursor-pointer"
                />
                <motion.img
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 3 },
                }}
                whileTap={{ scale: 0.9 }}
                src={javascript}
                alt="javascript"
                className="appear w-20 h-20 cursor-pointer"
                />
                <motion.img
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 3 },
                }}
                whileTap={{ scale: 0.9 }}
                src={typescript}
                alt="typescript"
                className="appear w-20 h-20 cursor-pointer"
                />
                <motion.img
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 3 },
                }}
                whileTap={{ scale: 0.9 }}
                src={tailwind}
                alt="tailwind"
                className="appear w-20 h-20 cursor-pointer"
                />
                <motion.img
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 3 },
                }}
                whileTap={{ scale: 0.9 }}
                src={node}
                alt="node-js"
                className="appear w-20 h-20 cursor-pointer"
                />
                <motion.img
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 3 },
                }}
                whileTap={{ scale: 0.9 }}
                src={python}
                alt="python"
                className="appear w-20 h-20 cursor-pointer"
                />
                <motion.img
                whileHover={{
                    scale: 1.3,
                    transition: { duration: 3 },
                }}
                whileTap={{ scale: 0.9 }}
                src={java}
                alt="java"
                className="appear w-20 h-20 cursor-pointer"
                />
            </div>
        </section>
    )
}

export default Timeline;