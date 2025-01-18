export default function Form({
  formData,
  isSent,
  isError,
  sendingState,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="mb-5">
        {/* Name form group  */}
        <div className="flex flex-col items-start mb-5">
          <label
            htmlFor="userName"
            className="text-sm cursor-pointer text-white font-medium mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Enter your name"
            value={formData.userName}
            onChange={handleChange}
            className="w-[400px] max-w-[100%] text-neutral-50 px-2 py-1 bg-transparent rounded border border-neutral-500 outline-none focus:border-white transition-all duration-300 ease-in-out"
            required
          />
        </div>

        {/* Email form group  */}
        <div className="flex flex-col items-start mb-5">
          <label
            htmlFor="userEmail"
            className="text-sm cursor-pointer text-white font-medium mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            placeholder="Enter your email"
            value={formData.userEmail}
            onChange={handleChange}
            className="w-[400px] max-w-[100%] text-neutral-50 px-2 py-1 bg-transparent rounded border border-neutral-500 outline-none focus:border-white transition-all duration-300 ease-in-out"
            required
          />
        </div>

        {/* Message form group  */}
        <div className="flex flex-col items-start mb-8">
          <label
            htmlFor="message"
            className="text-sm cursor-pointer text-white font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message...."
            value={formData.message}
            onChange={handleChange}
            className="w-[400px] max-w-[100%] text-neutral-50 px-2 py-1 bg-transparent rounded border border-neutral-500 outline-none focus:border-white transition-all duration-300 ease-in-out"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-[400px] max-w-[100%] text-white py-1.5 rounded border border-neutral-500 active:border-white transition-all duration-300 ease-in-out`}
          disabled={sendingState}
        >
          {sendingState ? 'Sending...' : 'Send'}
        </button>
      </form>

      {isSent && (
        <p className="absolute  text-green-500">Message sent successfully!</p>
      )}
      {isError && <p className="absolute  text-red-500">{isError}</p>}
    </div>
  );
}
