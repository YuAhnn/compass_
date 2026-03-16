import { Loader2 } from 'lucide-react'

export default function AssessmentResultLoading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-100 text-center">
            <Loader2 className="text-primary mb-6 w-16 h-16 animate-spin"/>
            <h2 className="text-primary text-2xl font-bold italic animate-pulse">Analyzing your responses...</h2>
            <p className="max-w-xs mx-auto opacity-60 animate-pulse">
                We're calculating your insights based on your unique perspective.
            </p>
        </div>
    )
}