
const Donate = () => {
  return ( 
    <div className="relative h-svh w-full">
      <img className="w-full h-full object-cover saturate-100 blur-sm mix-blend-difference brightness-50" src="/Images/donate-bg.jpg" alt="Image" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-center">
        <div>
          <p className="text-bold">Join Us In The Journey!!</p>
          <h1 className="text-6xl font-bold mt-4">A Tale Of Hindus<br/>
          In Scotland</h1>
          <p className="text-base font-thin mt-4">Welcome To The Official Website Of The Scottish Hindu Foundation <br />We Are Thrilled To Have You Here.</p>

          <div className="flex mt-8 justify-center">
            <button className="bg-shfOrange hover:bg-shfPurple text-white py-2 px-10 mr-4 rounded-full">Donate</button>
            <button className="bg-transparent hover:bg-red-600 text-white py-2 px-4 border-2 border-white rounded-full">Report an Issue</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Donate