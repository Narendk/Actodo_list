import React from 'react'

const Card = () => {
    return (
        <section className='flex justify-between gap-7 my-5 flex-wrap'>
            <div className='bg-[#8272DA] px-10 py-5 border rounded-md text-center flex-grow'>
                <h1 className='font-medium text-2xl'>23</h1>
                <p>Tiruppur</p>
            </div>

            <div className='bg-[#FD6663] px-10 py-5 border rounded-md text-center flex-grow'>
                <h1 className='font-medium text-2xl'>December 10</h1>
                <p>06:30:05</p>
            </div>

            <div className='bg-[#FCA201] px-10 py-5 border rounded-md text-center flex-grow'>
                <h1 className='font-medium text-2xl'>Built Using</h1>
                <p>React</p>
            </div>
        </section>
    )
}

export default Card