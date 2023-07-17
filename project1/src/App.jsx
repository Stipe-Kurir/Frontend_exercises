
import './index.css'
import { useState } from 'react'

function App() {

  const [email,setEmail]=useState("")
  const [window,setWindow]=useState(false)
  const [error,setError]=useState(null)
  

  const isValidEmail=()=> {
    const check= /\S+@\S+\.\S+/.test(email);
    if (!check) {
      setError('Valid email required');
   }
     else {
      changeWindow()
      setError(null);
    }

  }

  const handleDissmis=()=>{
    setEmail("")
    changeWindow()
  }

  const changeWindow=()=>{
    setWindow(!window)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }


  
  console.log("EMAIL",email)
  console.log("window",window)
  console.log("error",error)


    return (
     <div className="w-screen h-screen flex items-center flex-row justify-center">

      {window ? 

      <div className='w-screen h-screen justify-around sm:w-[400px] sm:h-[400px] bg-white sm:rounded-[20px] flex flex-col items-center sm:justify-start'>
          <div className='w-[100%] h-[100%] flex flex-col items-center pt-[80px] sm:pt-[20px] '>
              <div className='w-[80%]    pb-[20px]'><img className='h-[50px]' src="./success.svg"/></div>
              <div className='w-[80%]  pb-[10px] text-[40px]  font-bold'>Thanks for subscribing!</div>
              <div  className='w-[80%]   sm:p-[0] text-[14px] pt-[30px] '>A confirmation email has been sent to <b>{email}</b> .Please open it and click the button inside to confirm your subscription.</div>
          </div>
       
        <button className='w-[80%] mb-[100px] sm:mb-[20px] border-none pt-[12px] pb-[12px] text-[16px] bg-purple-950 rounded-[5px] text-white font-bold  hover:bg-[#FF6666] hover:transition-[0.2s] hover:shadow hover:shadow-[#FF6666]/40' onClick={handleDissmis}>Dismiss message</button>
      </div>

      :

      <div className="w-[100%] h-[100%] lg:w-[800px] lg:h-[70%] bg-white lg:rounded-[30px] flex flex-col-reverse lg:flex-row overflow-hidden">


      <div className='ml-[20px] mr-[20px] lg:mr-[0px] lg:ml-[0px] lg:w-[60%] h-full flex flex-col items-center pt-[30px] lg:pt-[100px]'>

        <div className='w-[100%] lg:w-[400px] flex flex-col justify-center '>

        <div className='w-[full] items-center lg:pl-[20px] text-[30px] sm:text-[50px] font-bold pb-[20px]'>Stay updated!</div>

        <div className='w-[full] lg:pl-[20px] text-[14px] sm:text-[16px] pb-[14px]'>Join 60,000+ product managers receiving monthly updates on:</div>

        <div className='w-[full] lg:pl-[20px] text-[14px] sm:text-[16px]   flex flex-col gap-2 pb-[14px]'>
          <div className='flex flex-row gap-3  items-center'>
            <img className='h-[15px] sm:h-[20px] ' src="./success.svg"/>
            <div>Product discovery and building what matters</div>
          </div>
          <div className='flex flex-row gap-3 items-center'>
            <img className='h-[15px] sm:h-[20px] ' src="./success.svg"/>
            <div>Measuring to ensure updates are success</div>
          </div>
          <div className='flex flex-row gap-3  items-center'>
            <img className='h-[15px] sm:h-[20px] ' src="./success.svg"/>
            <div>And much more!</div>
          </div>
         
        </div>

          <div className=' lg:pl-[20px] text-[16px] flex flex-col pb-[10px]'>

            <div className='w-full flex flex-row justify-between '>
              <label htmlFor="email" className='text-[12px] font-bold'>Email address</label>
              {error && <label htmlFor="email" className='text-[12px] text-[#FF6666] font-bold'>{error}</label> }
            
            </div>

            {
              error ?  <input className='lg:pl-[10px] pt-[12px] pb-[12px] text-[14px] sm:text-[16px] outline-none border border-solid bg-[#FF6666] bg-opacity-5 placeholder-[#FF6666] border-[#FF6666] rounded-[5px] mb-[14px] mt-1' type="email" id="email" value={email} onChange={handleEmail} placeholder='email@company.com' />
              :
              <input className='pl-[10px] pt-[12px] pb-[12px] text-[14px] sm:text-[16px]  lg:m-0 outline-none border border-solid border-gray-300 rounded-[5px] mb-[14px] mt-1' type="email" id="email" value={email} onChange={handleEmail} placeholder='email@company.com' />
            }
            
            <button className='w-[full] text-[14px] sm:text-[16px] pt-[12px] pb-[12px] lg:mt-[10px] font-bold lg:m-0 bg-purple-950 rounded-[5px] text-white hover:bg-[#FF6666] hover:transition-[0.2s] hover:shadow hover:shadow-[#FF6666]/40' onClick={isValidEmail}>Subscribe to montly newsletter</button>

          </div>

      </div>

      </div>


      <div className=' w-full h-[full] flex items-center justify-center flex-col lg:p-[20px]'>
          <img className='lg:hidden object-cover w-full' src="./sign-up-mobile.svg"/>
          <img className='hidden  lg:object-cover lg:flex lg:h-full rounded-[20px]' src="./slika.svg" /> 
      </div>




    </div>
        	
      }

     </div>
    )
  
}

export default App
