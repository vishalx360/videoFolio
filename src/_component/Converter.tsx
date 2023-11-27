"use client"
import React, { useState } from 'react'
import FileUpload from './FileUpload'
import { File } from 'buffer';
import { cn } from '@/lib/utils';
import ConfirmUpload from './ConfirmUpload';
import Preview from './Preview';

function Converter() {
    const [currentStep, setCurrentStep] = useState<"UPLOAD" | "CONFIRM" | "PREVIEW">("UPLOAD");
    const [file, setFile] = useState<Blob | null>(null);
    const [slides, setSlides] = useState<Record<string, any>[]>([]);

    const handelFileLoad = (file: Blob) => {
        setFile(file);
        setCurrentStep("CONFIRM");
    }

    async function handleFileUpload() {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                console.log('File uploaded successfully!');
                const textData = await response.json();
                console.log(textData);
                setSlides(textData?.data.slides);
                setCurrentStep('PREVIEW');
            } else {
                console.error('Error uploading file:', response.statusText);
                // Handle error as needed
            }
        }
    }

    const currentStepComponent = () => {
        switch (currentStep) {
            case "UPLOAD":
                return <FileUpload onFileUpload={handelFileLoad} />
            case "CONFIRM":
                return (<div>
                    {file ? <ConfirmUpload
                        setCurrentStep={setCurrentStep}
                        handleFileUpload={handleFileUpload}
                        file={file as File} />
                        :
                        <div>
                            Some Error Occured | Please upload a file first.
                        </div>
                    }
                </div>)
            case "PREVIEW":
                return (
                    slides.length === 0 ? (<div>
                        Some Error Occured | Please upload a file first.
                    </div>) :
                        <Preview slides={slides} />
                )
            default:
                return <div>Please Wait..</div>
        }
    }
    return (
        <div className=''>
            <div className='bg-gray-100 p-5 my-10'>
                {currentStepComponent()}
            </div>
            <StepIndicator currentStep={currentStep} />
        </div>
    )
}

export default Converter

const StepIndicator = ({ currentStep }: { currentStep: string }) => {
    const steps = ['UPLOAD', 'CONFIRM', 'PREVIEW',];
    return (
        <div className='text-center'>
            <div className='mt-5 flex items-center justify-center'>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className={cn('bg-gray-300 w-3 h-3 rounded-full', currentStep === step && 'bg-green-600')} />
                        {index < steps.length - 1 && <div className='bg-gray-300 w-10 h-0.5' />}
                    </React.Fragment>
                ))}
            </div>
            <h1 className='text-sm mt-4 text-gray-900'>
                {currentStep.toUpperCase()}
            </h1>
        </div>
    )
};