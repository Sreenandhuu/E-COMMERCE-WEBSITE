export default function Forgotpass() {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-1">
      
      {/* Main Container */}
      <div className="w-full max-w-[900px] min-h-[550px] overflow-hidden rounded-2xl bg-[#080B5C] shadow-2xl">
        
        <div className="flex min-h-[550px]">

          {/* Left Section */}
          <div className="flex w-1/2 flex-col items-center justify-center px-10 py-12 text-center text-white">
            
            <h2 className="mb-5 text-4xl font-bold font-sans">
              SREE
            </h2>

            <p className="max-w-[280px] text-sm leading-6 text-white/80">
              Get access to your Orders, Wishlist and Recommendations
            </p>

          </div>


          {/* Right Section */}
          <div className="flex w-1/2 flex-col justify-center bg-[#BDDBF4] px-10 py-6">

  <h2 className="mb-4 text-center text-3xl font-bold text-black">
    Forgot Password
  </h2>

  {/* Email */}
  <div className="mb-3 w-full">
    <label className="mb-1 block text-sm font-medium text-black">
      Email / Number
    </label>

    <input
      type="text"
      placeholder="Enter email or number"
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none"
    />
  </div>

  {/* OTP */}
  <div className="mb-3 w-full">

    <div className="mb-2 text-center">
      <h3 className="text-lg font-bold text-gray-800">
        Enter OTP
      </h3>

      <p className="mt-1 text-xs text-gray-500">
        Enter the 4-digit OTP sent to your mobile number
      </p>
    </div>

    <div className="flex justify-center gap-2">
      {[1, 2, 3, 4].map((item) => (
        <input
          key={item}
          type="text"
          maxLength="1"
          inputMode="numeric"
          className="h-11 w-11 rounded-lg border-2 border-gray-300 bg-white text-center text-xl font-bold outline-none"
        />
      ))}
    </div>

    <div className="mt-1 text-center">
      <button className="text-xs font-semibold text-blue-600 hover:underline">
        Didn't receive the OTP? Resend
      </button>
    </div>

  </div>

  {/* New Password */}
  <div className="mb-3 w-full">
    <label className="mb-1 block text-sm font-medium text-black">
      New Password
    </label>

    <input
      type="password"
      placeholder="Enter password"
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none"
    />
  </div>

  {/* Confirm Password */}
  <div className="mb-3 w-full">
    <label className="mb-1 block text-sm font-medium text-black">
      Confirm Password
    </label>

    <input
      type="password"
      placeholder="Re-enter password"
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none"
    />
  </div>

  {/* Account */}
  <div className="mb-3 w-full text-right">
    <button className="text-xs text-blue-600 hover:underline">
      Have an account? Sign In
    </button>
  </div>

  <button
    type="button"
    className="w-full rounded-lg bg-blue-600 py-2.5 font-bold text-white transition hover:bg-blue-700"
  >
    RESET PASSWORD
  </button>

</div>

        </div>

      </div>

    </div>
  );
}