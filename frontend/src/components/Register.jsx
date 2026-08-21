
export default function Register() {
  return (
   
      <>
      <div className=" box-border size-145   p-4 bg-[#080B5C] min-w-[800px]">
        <div className="flex ">
          <div className="min-w-[300px] text-white box-border size-145 mt-[38px] p-8  max-h-[440px] max-w-[440px] flex flex-col items-center justify-center">
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo rerum alias culpa distinctio eos ab obcaecati laboriosam perferendis deserunt nobis ex, blanditiis omnis repellendus repellat officiis, natus libero dignissimos.</p> */}
            <h2 className="  font-bold font-sans text-4xl mb-6">SREE</h2>
            <p>Get access to your Orders, 
Wishlist and Recommendations</p>
          </div>
     <div className="box-border size-145 mt-[38px] p-8 bg-[#BDDBF4] max-h-[440px] max-w-[440px] flex flex-col items-center justify-center">

  <h2 className="text-black font-bold font-sans text-4xl mb-6">
    REGISTER
  </h2>

  {/* Email */}
  <div className="w-full mb-4">
    <label className="block text-black font-medium mb-1">
      Email / Number
    </label>

    <input
      type="text"
      placeholder="Enter email or number"
      className="w-full px-4 py-2 rounded-lg border border-black-300 outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Password */}
  <div className="w-full mb-2">
    <label className="block text-black font-medium mb-1">
      Password
    </label>

    <input
      type="password"
      placeholder="Enter password"
      className="w-full px-4 py-2 rounded-lg border border-black-300 outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div className="w-full mb-2">
    <label className="block text-black font-medium mb-1">
confirm password
    </label>

    <input
      type="password"
      placeholder="Re-enter password"
      className="w-full px-4 py-2 rounded-lg border border-black-300 outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Forgot Password */}
  <div className="w-full text-right mb-5">
    <button className="text-blue-600 text-sm hover:underline">
have an account?    </button>
  </div>

 
  <button
    type="button"
    className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition"
  >
    REGISTER
  </button>

</div>
        </div>
      </div>
    </>
   
  )
}
