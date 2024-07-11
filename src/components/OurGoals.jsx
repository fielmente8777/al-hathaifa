import React from 'react'

const OurGoals = () => {

    const ourGoalsData = [
        {
            imgUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8b43aba0ef6065dac092f37c0d48a83e92b647757139b6027a79f70d25412872?',
            description: `To bring positive change and contribute to Oman's economic empowerment by  offering Talent & Business Solutions.`
        },
        {
            imgUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c807b09c7442653d1c91c4cfe6407e9c160783880102d972b13354a3afd13c73?',
            description: 'We want our services to define new benchmarks for growth, honesty, and professionalism. Be devoted to keep our customers first.'
        },
        {
            imgUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/462857b78c563759ec73ad7753f9cb0b7acfb6d6187c00fab95bdac8a0a2a702?',
            description: 'We want to create a legacy, with customized services,effective and innovative technology and result-oriented outputs.'
        },
    ]
    return (
        <div className="flex flex-col items-center justify-center py-10 max-md:px-5">
            <div className="flex gap-3 max-w-[1224px] self-center max-md:self-start px-5 max-md:px-0 text-justify text-red-800 capitalize leading-[60px]">
                <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                    <div className="pl-2 grow text-[#363636] text-[40px]   max-md:text-4xl">
                        <h1><span className="text-neutral-700 font-medium">Our </span>
                            <span className="text-red-800 font-medium">goals</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center  mt-10 max-md:max-w-full">
                <div className='grid grid-cols-3 gap-5 max-w-[1224px] max-md:gap-5 max-md:grid-cols-1'>
                    {ourGoalsData.map((ourGoal, index) => (
                        <div key={index} className='flex flex-col justify-center items-center py-8 px-2 border-2 border-[#A52323] max-md:w-full max-md:h-full'>
                            <div className=''>
                                <img src={ourGoal.imgUri} alt='light image' className='h-24 w-24' />
                            </div>
                            <div className='text-md mt-5 text-center  text-black '>
                                <p>{ourGoal.description}</p>
                            </div>
                        </div>
                    ))
                    }
                    {/* <div className='flex flex-col justify-center items-center py-8 px-2 border-2 border-[#A52323]' style={{ width: "26rem", maxWidth: "300px" }} >
                    <div className='bg-red-700 p-4'>
                        <img srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/d2edc4e1e5f2eaec396728b7839544dc51c6032951724eab733e266a079bae1c?' alt='light image' className='h-14 w-14' />
                    </div>
                    <div className='text-md mt-5 text-center text-[#969698] '>
                        <p> We want to create a legacy, with customized services,
                            effective and innovative technology and result-oriented
                            outputs.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center py-8 px-2 border-2 border-[#A52323]' style={{ width: "26rem", maxWidth: "300px" }} >
                    <div className='bg-red-700 p-4'>
                        <img srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/d2edc4e1e5f2eaec396728b7839544dc51c6032951724eab733e266a079bae1c?' alt='light image' className='h-14 w-14' />
                    </div>
                    <div className='text-md mt-5 text-center text-[#969698] '>
                        <p> We want to create a legacy, with customized services,
                            effective and innovative technology and result-oriented
                            outputs.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center py-8 px-2 border-2 border-[#A52323]' style={{ width: "26rem", maxWidth: "300px" }} >
                    <div className='bg-red-700 p-4'>
                        <img srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/d2edc4e1e5f2eaec396728b7839544dc51c6032951724eab733e266a079bae1c?' alt='light image' className='h-14 w-14' />
                    </div>
                    <div className='text-md mt-5 text-center text-[#969698] '>
                        <p> We want to create a legacy, with customized services,
                            effective and innovative technology and result-oriented
                            outputs.</p>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default OurGoals