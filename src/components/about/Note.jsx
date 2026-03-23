import Link from 'next/link'

export default function Note() {
    return(
     <main className="max-w-4xl mx-auto min-h-[70vh] mb-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-15">         
            <div className="flex flex-col justify-evenly">
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-2 mb-5 text-base-content">
                        Important Notice
                    </h1>
                    <p className="text-justify text-subhead ml-2 mr-5 text-neutral/70">
                    <span className='text-primary font-black'>Compass</span> is designed for emotional support and self-reflection. It does not provide 
                    medical diagnosis, treatment, or professional mental health services, and is intended for adults (18+) only. If you are experiencing 
                    severe distress, please seek help from a licensed professional.
                    </p>
                </div>
                <Link 
                    href="/assistance" 
                    className="btn btn-primary w-60 btn-lg rounded-full font-medium text-center mt-6 mx-auto md:mx-0 py-3 
                    transition-all duration-200 ease-in-out transform hover:scale-[1.03] hover:bg-primary hover:text-white
                    dark:text-white dark:hover:bg-[#3fb18534] dark:hover:text-primary active:scale-95 active:opacity-90 
                    active:bg-[#daefe6] active:text-primary border-none"
                >
                    Find Professional Help
                </Link>
            </div>
             <div className="relative mt-30 sm:mt-20 md:mt-0 lg:mt-0  flex justify-center items-center">
                <img src='./about-us.png' alt="Compass" className="relative z-20 cursor-pointer w-80 sm:w-100 md:w-100 lg:w-87.5 xl:w-100 shadow-md rounded-2xl"/>
            </div>
        </section>
    </main>
    ) 
}