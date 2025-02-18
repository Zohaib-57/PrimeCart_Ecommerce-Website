/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-[#5B4E3F] body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className='text-center text-3xl font-bold text-[#435F42]'>Testimonial</h1>
                    {/* para  */}
                    <h2 className='text-center text-2xl font-semibold mb-10'>
                        What our <span className='text-[#557752]'>customers</span> are saying
                    </h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-[#A0BDB4] bg-[#D9E2E0]"
                                    src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                                />
                                <p className="leading-relaxed">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error velit, voluptatum nostrum molestiae, ducimus quis, deleniti labore excepturi hic non. Nostrum, reprehenderit officia. Nam ullam nisi beatae repudiandae sunt!
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-[#557752] mt-6 mb-4" />
                                <h2 className="text-[#435F42] font-medium title-font tracking-wider text-sm uppercase">
                                    Sara Ajwad
                                </h2>
                                <p className="text-[#557752]">Senior Product Designer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-[#A0BDB4] bg-[#D9E2E0]"
                                    src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
                                />
                                <p className="leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore esse rem soluta! Laborum, ea! At, porro, praesentium sit quos dolore in dignissimos dolor quis atque officiis laboriosam aut, corrupti error quia. Cum, saepe facere? Saepe nobis blanditiis ratione unde! Cumque ipsum laborum quaerat nam sunt itaque recusandae nemo alias.

                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-[#557752] mt-6 mb-4" />
                                <h2 className="text-[#435F42] font-medium title-font tracking-wider text-sm uppercase">
                                    Pervaish
                                </h2>
                                <p className="text-[#557752]">UI Developer</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-[#A0BDB4] bg-[#D9E2E0]"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC9Urc9leSyq0YwKik2tvDceETbDLmXsOxQ&s"
                                />
                                <p className="leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, aperiam enim! Et placeat ipsam quia cupiditate voluptates molestiae quidem, distinctio sed ullam autem deserunt rerum ducimus numquam quod iusto asperiores, non veniam sequi maxime neque dolore consequatur odit. Enim dolores totam ut consequatur minima ex perferendis dignissimos ipsum praesentium corrupti.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-[#557752] mt-6 mb-4" />
                                <h2 className="text-[#435F42] font-medium title-font tracking-wider text-sm uppercase">
                                    Johnathan Devn
                                </h2>
                                <p className="text-[#557752]">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;