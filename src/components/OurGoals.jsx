import React from 'react'

const OurGoals = () => {

    const ourGoalsData = [
        {
            imgUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d2edc4e1e5f2eaec396728b7839544dc51c6032951724eab733e266a079bae1c?',
            description: 'We want to create a legacy, with customized services,effective and innovative technology and result-oriented outputs.'
        },
        {
            imgUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d2edc4e1e5f2eaec396728b7839544dc51c6032951724eab733e266a079bae1c?',
            description: 'We want to create a legacy, with customized services,effective and innovative technology and result-oriented outputs.'
        },
        {
            imgUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d2edc4e1e5f2eaec396728b7839544dc51c6032951724eab733e266a079bae1c?',
            description: 'We want to create a legacy, with customized services,effective and innovative technology and result-oriented outputs.'
        },
    ]
    return (
        <div className="flex flex-col px-24 py-10 max-md:px-5">
            <div className="flex gap-3 self-center max-md:self-start px-5 max-md:px-0 text-5xl text-justify text-red-800 uppercase whitespace-nowrap leading-[60px]">
                <div className='' style={{ borderLeft: "6px solid #A52323" }}>
                    <div className="pl-2 grow text-5xl text-[#363636] font-bold max-md:text-4xl">
                        <span className="text-neutral-700">OUR </span>
                        <span className="text-red-800">goals</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10 w-full max-md:max-w-full">
                <div className='grid grid-cols-3 justify-center gap-10 max-md:gap-5 max-md:grid-cols-1'>
                    {ourGoalsData.map((ourGoal, index) => (
                        <div key={index} className='flex flex-col justify-center items-center py-8 px-2 border-2 border-[#A52323] w-[22.5rem] h-[14rem] max-md:w-full max-md:h-full'>
                            <div className=''>
                                <img src={ourGoal.imgUri} alt='light image' className='h-24 w-24' />
                            </div>
                            <div className='text-md mt-5 text-center text-[#969698] '>
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