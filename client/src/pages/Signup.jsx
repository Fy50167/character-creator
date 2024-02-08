export default function Signup() {
    return (
        <div className='page-content fill-page'>
            <form
                onSubmit={handleFormSubmit}
                className='w-full max-w-sm signup'
            >
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'>
                        <label
                            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                            htmlFor='username'
                        >
                            Username
                        </label>
                    </div>
                    <div className='md:w-2/3'>
                        <input
                            onChange={handleChange}
                            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                            id='username'
                            name='username'
                            type='text'
                            defaultValue={formState.username}
                            placeholder='jane_doe'
                        />
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'>
                        <label
                            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                            htmlFor='email-address'
                        >
                            Email Adress
                        </label>
                    </div>
                    <div className='md:w-2/3'>
                        <input
                            onChange={handleChange}
                            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                            id='email-address'
                            name='email'
                            type='text'
                            defaultValue={formState.email}
                            placeholder='email@gmail.com'
                        />
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'>
                        <label
                            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                            htmlFor='password'
                        >
                            Password
                        </label>
                    </div>
                    <div className='md:w-2/3'>
                        <input
                            onChange={handleChange}
                            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                            id='password'
                            name='password'
                            type='password'
                            defaultValue={formState.password}
                            placeholder='*********'
                        />
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='md:w-1/3'></div>
                </div>
                <div className='md:flex md:items-center'>
                    <div className='md:w-1/3'></div>
                    <div className='md:w-2/3'>
                        <button
                            className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                            type='submit'
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
