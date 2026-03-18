'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2, ShieldAlert } from 'lucide-react'
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

      {/* Single */}
      <Modal
        isOpen={!!deletingId}
        onClose={() => !isProcessing && setDeletingId(null)}
        title="Delete Record?"
      >
        <div className="p-4 text-center">
          <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4 text-error">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <p className="text-sm opacity-70 leading-relaxed mb-6">
            This action cannot be undone. This specific assessment record will be permanently removed from your history.
          </p>
          <div className="flex gap-3">
            <button 
              className="flex-1 btn btn-ghost rounded-full"
              onClick={() => setDeletingId(null)}
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button 
              className="flex-1 btn btn-error rounded-full"
              onClick={() => handleDelete(deletingId)}
              disabled={isProcessing}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {/* Delte All */}
      <Modal
        isOpen={showClearAllModal}
        onClose={() => !isProcessing && setShowClearAllModal(false)}
        title="Clear All History?"
      >
        <div className="p-4 text-center">
          <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4 text-error">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <p className="font-bold text-lg mb-2">Are you absolutely sure?</p>
          <p className="text-sm opacity-70 leading-relaxed mb-8">
            You are about to delete <strong>{results.length}</strong> records. This will completely reset your progress tracking and this data cannot be recovered.
          </p>
          <div className="flex flex-col gap-3">
            <button 
              className={`btn btn-error rounded-full w-full ${isProcessing ? 'loading' : ''}`}
              onClick={handleClearAll}
              disabled={isProcessing}
            >
              Yes, Clear Everything
            </button>
            <button 
              className="btn btn-ghost rounded-full w-full"
              onClick={() => setShowClearAllModal(false)}
              disabled={isProcessing}
            >
              Nevermind, Keep It
            </button>
          </div>
        </div>
      </Modal>
    </main>
  )
}