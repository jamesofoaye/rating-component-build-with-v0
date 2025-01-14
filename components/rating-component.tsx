'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function RatingComponent() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedRating !== null) {
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-[327px] md:w-[412px] bg-[hsl(213,19%,18%)] p-8 rounded-[30px]">
        <div className="flex flex-col items-center text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/illustration-thank-you-TDCdWiA0YOKp95VzTDHUXxeSp8jm2m.svg"
            alt="Thank you illustration"
            width={144}
            height={96}
            className="mb-6"
          />
          <div className="bg-[hsl(213,19%,22%)] rounded-full px-4 py-1 mb-6">
            <p className="text-[hsl(25,97%,53%)] text-sm">
              You selected {selectedRating} out of 5
            </p>
          </div>
          <h2 className="text-white text-2xl font-bold mb-3">Thank you!</h2>
          <p className="text-[hsl(217,12%,63%)] text-[15px] leading-6">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="w-[327px] md:w-[412px] bg-[hsl(213,19%,18%)] p-8 rounded-[30px]">
      <div className="flex gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 text-xl ${index <= (selectedRating || 0) ? 'scale-110' : 'scale-100'
              }`}
          >
            {selectedRating ? (
              <span>
                {selectedRating === 1 && index === 1 ? '😟' :
                  selectedRating === 2 && index <= 2 ? '🙁' :
                    selectedRating === 3 && index <= 3 ? '😐' :
                      selectedRating === 4 && index <= 4 ? '🙂' :
                        selectedRating === 5 && index <= 5 ? '😊' : '⭐'}
              </span>
            ) : (
              <span>⭐</span>
            )}
          </div>
        ))}
      </div>
      <h2 className="text-white text-2xl font-bold mb-3">How did we do?</h2>
      <p className="text-[hsl(217,12%,63%)] text-[15px] leading-6 mb-6">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="grid grid-cols-5 gap-4 mb-8">
        {[1, 2, 3, 4, 5].map((rating) => (
          <Button
            key={rating}
            variant="ghost"
            onClick={() => setSelectedRating(rating)}
            className={`w-12 h-12 rounded-full p-0 text-[15px] 
              ${selectedRating === rating
                ? 'bg-[hsl(217,12%,63%)] text-white hover:bg-[hsl(217,12%,63%)]'
                : 'bg-[hsl(213,19%,22%)] text-[hsl(217,12%,63%)] hover:bg-[hsl(25,97%,53%)] hover:text-white'
              }`}
          >
            {rating}
          </Button>
        ))}
      </div>
      <Button
        onClick={handleSubmit}
        disabled={selectedRating === null}
        className="w-full bg-[hsl(25,97%,53%)] text-white hover:bg-white hover:text-[hsl(25,97%,53%)] rounded-full py-3 text-[15px] font-bold tracking-[0.1em]"
      >
        SUBMIT
      </Button>
    </Card>
  )
}

