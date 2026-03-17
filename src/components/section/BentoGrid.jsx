import { ClipboardCheck, Newspaper, UserRoundPlus, ShieldCheck } from 'lucide-react'

export default function BentoGrid() {
    return (
        <section className="py-12 bg-transparent">
            <section className="max-w-297.5 w-full mx-auto flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-6 px-6 lg:px-0 w-full">

                    <div className="col-span-1 md:col-span-3 rounded-3xl bg-white/5 border border-neutral/20 
                    p-8 flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)]">
                        <div>
                            <figure className='text-text mb-6'><ClipboardCheck size={48}/></figure>
                            <h2 className='text-2xl font-bold text-text mb-4'>Guide Assessments</h2>
                            <p className="text-base-content/65 leading-relaxed">Check in with yourself through simple tests.</p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-4 rounded-3xl bg-white/5 border border-neutral/20 
                    p-8 flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)]">
                        <div>
                            <figure className='text-text mb-6'><Newspaper size={48}/></figure>
                            <h2 className='text-2xl font-bold text-text mb-4'>Helpful Articles</h2>
                            <p className="text-base-content/65 leading-relaxed">
                                Discover professional advice, coping tips, and emotional support drawn from both psychology and the Bible.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-4 rounded-3xl bg-white/5 border border-neutral/20 
                    p-8 flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)]">
                        <div>
                            <figure className='text-text mb-6'><UserRoundPlus size={48}/></figure>
                            <h2 className='text-2xl font-bold text-text mb-4'>Referrals</h2>
                            <p className="text-base-content/65 leading-relaxed">Find trusted hotlines, clinics, and groups ready to support you.</p>
                        </div>
                    </div>
                    
                    <div className="col-span-1 md:col-span-3 rounded-3xl bg-white/5 border border-neutral/20 
                    p-8 flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)]">
                        <div>
                            <figure className='text-text mb-6'><ShieldCheck size={48}/></figure>
                            <h2 className='text-2xl font-bold text-text mb-4'>Your Privacy</h2>
                            <p className="text-base-content/65 leading-relaxed">Your responses stay private. Compass is designed for safe, anonymous use.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
        </section>
    ) 
}