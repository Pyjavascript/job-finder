import React from 'react'

function Start() {
  return (
    <>
    <nav className='flex items-center justify-between px-5 py-2 h-[10vh]'>
        <div>
        <h1 className='font-bold text-3xl text-black'>Resource</h1>
        <p className='font-light text-[0.7rem] text-slate-400'>Find Your Dream Job</p>
        </div>
        <div className='text-3xl flex justify-center items-center'>
        <ion-icon className="menu" name="menu-outline"></ion-icon>
        </div>
      </nav>
    <div className="background-grid p-5 text-center flex flex-col items-center justify-center gap-6">
     <div className='flex flex-col gap-3'>
     <p className='text-black text-1xl'>Resource</p>
     <h1 className='font-semibold text-4xl'>Welcome to Our<br/><span className='text-[#fe52b3]'>Resource Center</span></h1>
     </div>
     <p className='font-light text-slate-700 max-w-96'>At Resource, we're committed to empowering your career journey. Our Resource Center connect you directly with Recruters.</p>
      <div className='flex flex-col gap-4 pt-10'>
        <div className='grad flex justify-center items-center text-2xl font-light gap-3 p-2 rounded-full cursor-pointer'>
          <p className='text-white'>Explore Jobs</p>
          <div className='bg-white flex justify-center items-center p-2 rounded-full'>
          <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          
        </div>
        <div className='bg-white text-2xl font-light p-2  py-3 rounded-full cursor-pointer'>
          <p className='text-[#ff6678]'>Hiring For Job</p>
        </div>
      </div>
     
    </div>
    
    </>
  )
}

export default Start