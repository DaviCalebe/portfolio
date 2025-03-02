const Timeline = () => {
    return (
        <section className="">
            <h1 className="text-5xl text-center text-tertiary uppercase py-8">A estrada até aqui...</h1>

            <div className="mx-auto grid grid-cols-9">

                {/* STEP 1 */}

                <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md p-4">
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

                <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">teste</h1>
                        <p className="text-tertiary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eos delectus labore tempora ea vel! Laborum maiores, quaerat delectus eius a earum ea aperiam repellat, ipsa cupiditate voluptatem beatae quae?</p>
                    </div>
                </div>

                {/* STEP 3 */}
                
                <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md p-4">
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

                <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full rounded-md p-4">
                        <h1 className="text-tertiary text-2xl font-semibold">teste</h1>
                        <p className="text-tertiary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eos delectus labore tempora ea vel! Laborum maiores, quaerat delectus eius a earum ea aperiam repellat, ipsa cupiditate voluptatem beatae quae?</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Timeline;