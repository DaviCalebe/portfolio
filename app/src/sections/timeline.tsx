const Timeline = () => {
    return (
        <section className="">
            <h1 className="text-5xl text-center text-tertiary uppercase py-8">A estrada até aqui...</h1>

            <div className="mx-auto grid grid-cols-9">

                {/* STEP 1 */}

                <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full bg-tertiary rounded-md p-4">
                        <h1 className="text-base text-2xl font-semibold">teste</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eos delectus labore tempora ea vel! Laborum maiores, quaerat delectus eius a earum ea aperiam repellat, ipsa cupiditate voluptatem beatae quae?</p>
                    </div>
                </div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-16 h-16 rounded-full bg-tertiary flex justify-center items-center text-2xl font-bold">2022</div>
                </div>

                <div className="col-span-4 w-full h-full"></div>

                {/* STEP 2 */}

                <div className="col-span-4 w-full h-full"></div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-16 h-16 rounded-full bg-tertiary flex justify-center items-center text-2xl font-bold">2023 </div>
                </div>

                <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full bg-tertiary rounded-md p-4">
                        <h1 className="text-base text-2xl font-semibold">teste</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eos delectus labore tempora ea vel! Laborum maiores, quaerat delectus eius a earum ea aperiam repellat, ipsa cupiditate voluptatem beatae quae?</p>
                    </div>
                </div>

                {/* STEP 3 */}
                
                <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full bg-tertiary rounded-md p-4">
                        <h1 className="text-base text-2xl font-semibold">teste</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eos delectus labore tempora ea vel! Laborum maiores, quaerat delectus eius a earum ea aperiam repellat, ipsa cupiditate voluptatem beatae quae?</p>
                    </div>
                </div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-16 h-16 rounded-full bg-tertiary flex justify-center items-center text-2xl font-bold">2024</div>
                </div>

                <div className="col-span-4 w-full h-full"></div>

                {/* STEP 4 */}

                <div className="col-span-4 w-full h-full"></div>
                
                <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-tertiary"></div>
                    <div className="absolute w-16 h-16 rounded-full bg-tertiary flex justify-center items-center text-2xl font-bold">2025</div>
                </div>

                <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full bg-tertiary rounded-md p-4">
                        <h1 className="text-base text-2xl font-semibold">teste</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eos delectus labore tempora ea vel! Laborum maiores, quaerat delectus eius a earum ea aperiam repellat, ipsa cupiditate voluptatem beatae quae?</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Timeline;