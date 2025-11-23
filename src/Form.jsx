
function Form(){
  return(
    <main className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-lg border border-gray-100">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Join our community</h1>
            <p className="text-md text-gray-500 mt-1">Start your coding journey today</p>
        </div>
        <form action="" className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div >
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="First name" className=" w-full p-1.5 border border-gray-400 rounded-lg focus:outline-none" />
                </div>
                <div >
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname" placeholder="Last name" className=" w-full p-1.5 border border-gray-400 rounded-lg focus:outline-none" />
                </div>
            </div>
            <div className="grid grid-cols-1 ">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="you@example.com" className="p-1.5 border border-gray-400 rounded-lg focus:outline-none" />
            </div>
            <div className="grid grid-cols-1 ">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter password" className="p-1.5 border border-gray-400 rounded-lg focus:outline-none"/>
            </div>
            <div className="grid grid-cols-1 ">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm password" className="p-1.5 border border-gray-400 rounded-lg focus:outline-none" />
            </div>
            <div className="grid grid-cols-1 ">
                <label htmlFor="statut">Statut</label>
                <input type="text" id="statut" placeholder="Student, Professional" className="p-1.5 border border-gray-400 rounded-lg focus:outline-none" />
            </div>
            <div className="flex space-x-1">
                <input type="checkbox" id="action"  />
                <label htmlFor="action">I accept terms condition</label>
            </div>
            <button className="text-center w-full cursor-pointer bg-black rounded-lg text-white py-1.5">Sign In</button>
        </form>
    </main>
  )
}
export default Form;