import Modal from '@/components/modal'
import React, { useState } from 'react'

export default function MapHelper({formState}) {
  const [step, setStep] = useState<number>(0)

  return (
    <>
      <div className=" flex flex-col justify-center w-[400px] gap-4 items-center">
                <div className=" font-semibold text-2xl">Pin your roof</div>
                <div className=" text-gray-400 text-center font-medium">
                  Drag the map to the center of your house,
                  <br /> then click next
                </div>
                <Modal
                  handleNextClick={() => setStep(step + 1)}
                  handleGoBackClick={() => setStep(0)}
                />
              </div>

            {step === 1 && (
              <div className=" flex flex-col justify-center gap-4 items-center">
                <div className=" font-semibold text-2xl">Click a corner</div>
                <div className=" text-gray-400">
                  Keep clicking to outline your roof on the map
                </div>
                <button

                  onClick={() => setStep(step + 1)}
                  className=" bg-black px-6 py-2 text-white disabled:opacity-50 rounded-full"
                >
                  Next {"->"}
                </button>
              </div>
            )}
            {step === 2 && (
              <div className=" flex flex-col justify-center gap-4 items-center">
                <div className=" font-semibold text-2xl">Roof Marked</div>
                <div className=" text-gray-400">
                  Keep clicking to outline your roof on the map
                </div>
                <button

                  onClick={() => setStep(step + 1)}
                  className=" bg-black px-6 py-2 text-white disabled:opacity-50 rounded-full"
                >
                  Done {"->"}
                </button>
              </div>
)}
              </>
  )
}
