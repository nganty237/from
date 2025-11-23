import { LockKeyhole, Mail, User,GraduationCap  } from 'lucide-react';
function Form(){
  return(
    <main className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-lg border border-gray-100">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Join our community</h1>
            <p className="text-md text-gray-500 mt-1">Start your coding journey today</p>
        </div>
        <form action="" className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className='relative'>
                    <label htmlFor="name">Name</label>
                    <User size={22} className='text-gray-700  absolute top-1/2  left-1.5' />
                    <input type="text" id="name" placeholder="First name" className="pl-8.5 w-full p-1.5 border border-gray-400 rounded-lg focus:outline-none" />
                </div>
                <div className='relative' >
                    <label htmlFor="surname">Surname</label>
                    <User size={22} className='text-gray-700  absolute top-1/2  left-1.5' />
                    <input type="text" id="surname" placeholder="Last name" className="pl-8.5 w-full p-1.5 border border-gray-400 rounded-lg focus:outline-none" />
                </div>
            </div>
            <div className="grid grid-cols-1 relative ">
                <label htmlFor="email">Email</label>
                <Mail size={22} className='text-gray-700 absolute top-1/2 transform left-1.5' />
                <input type="email" id="email" placeholder="you@example.com" className="pl-8.5 p-1.5 border border-gray-400 rounded-lg focus:outline-none" />
            </div>
            <div className="grid grid-cols-1 relative ">
                <label htmlFor="password">Password</label>
                <LockKeyhole size={22} className='text-gray-700  absolute top-1/2 left-1.5'/>
                <input type="password" id="password" placeholder="Enter password" className="pl-8.5 p-1.5 border border-gray-400 rounded-lg focus:outline-none"/>
            </div>
            <div className="grid grid-cols-1 relative">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <LockKeyhole size={22} className='text-gray-700  absolute top-1/2  left-1.5' />
                <input type="password" id="confirmPassword" placeholder="Confirm password" className="pl-8.5 p-1.5  border border-gray-400 rounded-lg focus:outline-none" />
            </div>
            <div className="grid grid-cols-1 relative">
                <label htmlFor="statut">Statut</label>
                <GraduationCap className='text-gray-700 absolute top-1/2 left-1.5' />
                <input type="text" id="statut" placeholder="Student, Professional" className="pl-8.5 p-1.5 border border-gray-400 rounded-lg focus:outline-none" />
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

