'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import { deleteAssessmentResult, deleteAllUserResults } from '@lib/assessment/queries'
import Modal from '@components/ui/Modal'
import ProgressIsEmpty from './ProgressIsEmpty'
import ProgressCard from './ProgressCard'

export default function ProgressHistory({ results = [], userId }) {
  const [deletingId, setDeletingId] = useState(null)
  const [showClearAllModal, setShowClearAllModal] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const handleDelete = async (id) => {
    setIsProcessing(true)
    try {
      await deleteAssessmentResult(id)
      router.refresh()
    } catch (error) {
      console.error('Delete error:', error)
    } finally {
      setIsProcessing(false)
      setDeletingId(null)
    }
  }

  const handleClearAll = async () => {
    if (!userId) return
    setIsProcessing(true)
    try {
      await deleteAllUserResults(userId)
      router.refresh()
    } catch (error) {
      console.error('Clear all error:', error)
    } finally {
      setIsProcessing(false)
      setShowClearAllModal(false)
    }
  }

  if (!results || !results.length) return <ProgressIsEmpty />

  return (
    <main className="w-full px-4">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <header className="mb-10">
          <h1 className="text-base-content text-2xl lg:text-4xl font-black uppercase">
            History
          </h1>
          <div className="h-1.5 w-20 bg-primary mt-2"></div>
        </header>
        
        <button 
          onClick={() => setShowClearAllModal(true)}
          className="btn btn-ghost btn-md font-medium bg-base-100 text-neutral/80 hover:bg-accent hover:text-primary transition border border-neutral/10"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear All History
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {results.map(result => (
          <ProgressCard 
            key={result.result_id} 
            result={result} 
            onDelete={(id) => setDeletingId(id)}
            isProcessing={isProcessing}
          />
        ))}
      </section>

      {/* Delete single */}
      <Modal
        isOpen={!!deletingId}
        onClose={() => !isProcessing && setDeletingId(null)}
        size="max-w-sm"
      >
        <div className="px-2">
          <p className="text-sm opacity-60 mb-6">This record will be permanently deleted.</p>
          <div className="flex gap-2">
            <button
              className="flex-1 btn btn-ghost btn-sm rounded-full"
              onClick={() => setDeletingId(null)}
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button
              className="flex-1 btn btn-sm rounded-full bg-primary text-white border-0 hover:bg-error/80"
              onClick={() => handleDelete(deletingId)}
              disabled={isProcessing}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {/* Delete all */}
      <Modal
        isOpen={showClearAllModal}
        onClose={() => !isProcessing && setShowClearAllModal(false)}
        size="max-w-sm"
      >
        <div className="px-2">
          <p className="text-sm opacity-60 mb-6">
            {results.length} {results.length === 1 ? 'record' : 'records'} will be permanently deleted.
          </p>
          <div className="flex gap-2">
            <button
              className="flex-1 btn btn-ghost btn-sm rounded-full"
              onClick={() => setShowClearAllModal(false)}
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button
              className="flex-1 btn btn-sm rounded-full bg-primary text-white border-0 hover:bg-error/80"
              onClick={handleClearAll}
              disabled={isProcessing}
            >
              Clear all
            </button>
          </div>
        </div>
      </Modal>
    </main>
  )
}