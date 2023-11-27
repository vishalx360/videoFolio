"use client"
import { buttonVariants } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { File } from 'buffer';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFile } from "react-icons/fa";

const FileUpload = ({ onFileUpload }: { onFileUpload: (file: Blob) => void }) => {
    const { toast } = useToast()
    const [isHovered, setIsHovered] = useState(false);
    const onDrop = useCallback((acceptedFiles: any) => {
        const file = acceptedFiles[0];
        if (file && file.type === 'application/pdf') {
            onFileUpload(file);
        } else {
            toast({
                title: "Please upload a valid PDF file.",
                description: "Upload a 1 page PDF file.",
                variant: "destructive"
            })

        }
    }, [onFileUpload]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "application/pdf": [".pdf"]
        },
        onDragOver: () => setIsHovered(true),
        onDragLeave: () => setIsHovered(false),
        maxFiles: 1,
    });

    return (
        <div
            {...getRootProps()}
            className={cn("border-2 border-dashed border-gray-400 py-6 px-4 rounded-md text-center cursor-pointer", isHovered ? "border-gray-600 bg-gray-200" : "bg-gray-100 border-gray-400")}
        >
            <input {...getInputProps()} />
            <p className="text-gray-600">
                {isHovered ? "Drop the file here" : " Drag & drop your resume PDF file here, or click 'Choose a file' button"}
            </p>
            <div className={cn(buttonVariants(), "inline-flex gap-3 items-center justify-center mt-5")}>
                <FaFile className="text-xl" />
                <span>
                    Choose a file
                </span>

            </div>
        </div>
    );
};

export default FileUpload;
