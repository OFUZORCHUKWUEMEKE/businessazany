import React from 'react'

const Header = () => {
  return (
    <>
      <div className='h-[12vh] bg-white py-2 transition '>
        <div className='flex flex-col items-center justify-center h-[100vh] m-auto w-[85%] text-white text-center space-y-4'>
          <h1 className="md:text-5xl text-3xl font-semibold">Lorem Ipsum dolor sit amet. Ut <br className='md:flex hidden' /> eigend pariatur</h1>
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident veniam voluptate <br className='md:flex hidden'/> quas est et cumque? Lorem ipsum dolor sit, amet consectetur adpraesentium.</p>
          <button className="secondary-button">Create Account</button>
        </div>
      </div>
    </>
  )
}

export default Header