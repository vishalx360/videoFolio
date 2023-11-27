"use client"
import React, { useState } from 'react'
import FileUpload from './FileUpload'
import { File } from 'buffer';
import { cn } from '@/lib/utils';

function Converter() {
    const [currentStep, setCurrentStep] = useState<"UPLOAD" | "PROCESSING" | "COMPLETE">("UPLOAD");
    const [file, setFile] = useState<File | null>(null);

    const handelFileUpload = (file: File) => {
        setFile(file);
        setCurrentStep("PROCESSING");
    }

    const currentStepComponent = () => {
        switch (currentStep) {
            case "UPLOAD":
                return <FileUpload onFileUpload={handelFileUpload} />
            case "PROCESSING":
                return (<div>
                    {file && <div>
                        <ul>
                            Converting Please Wait...
                            <li>filename: {file.name}</li>
                            <li>tyle: {file.type}</li>
                            <li>size: {(file.size / 1000).toFixed(2)} KB</li>
                        </ul>
                    </div>}
                </div>)
            case "COMPLETE":
                return (<div>
                    Download Slideshow
                </div>)
            default:
                return <div>Please Wait..</div>
        }
    }
    return (
        <div>
            <div className='bg-gray-100 p-5 my-10'>
                {currentStepComponent()}
            </div>
            <div className='text-center'>
                <div className='mt-5 flex items-center justify-center'>
                    <div className={cn('bg-gray-300 w-3 h-3 rounded-full', currentStep === 'UPLOAD' && 'bg-green-600')} />
                    <div className='bg-gray-300 w-10 h-0.5' />
                    <div className={cn('bg-gray-300 w-3 h-3 rounded-full', currentStep === 'PROCESSING' && 'bg-green-600')} />
                    <div className='bg-gray-300 w-10 h-0.5' />
                    <div className={cn('bg-gray-300 w-3 h-3 rounded-full', currentStep === 'COMPLETE' && 'bg-green-600')} />
                </div>
                <h1 className='text-sm mt-4 text-gray-900 '>
                    {currentStep.toUpperCase()}
                </h1>
            </div>
        </div>
    )
}

export default Converter