import Link from 'next/link'

export default function AboutSection() {
    return(
     <div className="w-full px-4">
        <div className="max-w-300 mt-60 mb-60 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-15">         
            <div className="flex flex-col justify-evenly">
                <p className='bg-primary dark:bg-[#3fb18534] text-white dark:text-primary w-37.5 h-11.25 font-bold text-lg text-center pt-2 rounded-full'>
                    About Us
                </p>
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black py-2 mb-5 text-base-content">
                        Compass
                    </h1>
                    <p className="text-justify text-subhead ml-2 mr-5 text-neutral/70">
                    <span className='text-primary font-black'>Compass</span> is developed to promote emotional awareness. 
                    It provides guided assessments, helpful resources, and supportive feedback to help individuals reflect on their well-being. 
                    While compass encourages self-awareness, it is not intended to replace professional mental health care.
                    </p>
                </div>
                <Link 
                    href="/about" 
                    className="btn btn-primary w-60 btn-lg rounded-full font-medium text-center mt-6 mx-auto md:mx-0 py-3 
                    transition-all duration-200 ease-in-out transform hover:scale-[1.03] hover:bg-primary hover:text-white
                    dark:text-white dark:hover:bg-[#3fb18534] dark:hover:text-primary active:scale-95 active:opacity-90 
                    active:bg-[#daefe6] active:text-primary border-none"
                >
                    Learn More
                </Link>
            </div>
             <div className="relative mt-30 sm:mt-20 md:mt-0 lg:mt-0  flex justify-center items-center">
                <img src='./compass-about.png' alt="Compass" className="relative z-20 cursor-pointer w-100 sm:w-100 md:w-100 lg:w-100 xl:w-100 
                transition-transform duration-300 hover:scale-105"/>
            </div>
        </div>
    </div>
    ) 
}