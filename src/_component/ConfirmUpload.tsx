"use client"
import { Button } from '@/components/ui/button';
import { File } from 'buffer';
import { useState } from 'react';
import { FaArrowRight, FaRegFilePdf } from 'react-icons/fa';

function ConfirmUpload({ file, setCurrentStep, handleFileUpload }: {
    file: File;
    setCurrentStep: React.Dispatch<React.SetStateAction<"UPLOAD" | "CONFIRM" | "PREVIEW">>;
    handleFileUpload: () => void
}) {
    const [loading, setLoading] = useState(false);

    async function handleProceed() {
        try {
            setLoading(true);
            await handleFileUpload();
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error uploading file:', error);
            // Handle error as needed
        }
    }
    return (
        <div>
            <div>
                <div className="flex items-center justify-center gap-5">
                    <FaRegFilePdf className="text-red-600 text-4xl" />
                    <ul>
                        <li>{file.name}</li>
                        <li className='text-sm'>{(file.size / 1000).toFixed(2)} KB</li>
                    </ul>
                </div>
                {!loading ? <div className="mt-5 flex items-center justify-center gap-5">
                    <Button onClick={() => {
                        setCurrentStep("UPLOAD");
                    }} size="sm" variant="outline">Cancel</Button>
                    <Button
                        size="sm" onClick={handleProceed} className='flex items-center gap-2 justify-center'>
                        <span>Proceed</span>
                        <FaArrowRight />
                    </Button>
                </div>
                    :
                    <div className="mt-5 flex items-center justify-center gap-5">
                        Uploading and processing your file, please wait...
                    </div>
                }
            </div>
        </div>
    )
}

export default ConfirmUpload