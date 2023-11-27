import { File } from 'buffer';
import { NextRequest, NextResponse } from 'next/server'; // To handle the request and response
import pdf from "pdf-parse";
import { GetSlideData } from './palm';
import ExtractJSON from './JSONExtractor';


export async function POST(req: NextRequest) {
    const formData: FormData = await req.formData();
    const uploadedFiles = formData.getAll('file');

    if (uploadedFiles && uploadedFiles.length > 0) {
        const uploadedFile = uploadedFiles[0];
        console.log('Uploaded file:', uploadedFile);

        // Check if uploadedFile is of type File
        if (uploadedFile instanceof File) {
            const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());
            const resume = (await pdf(fileBuffer)).text;
            const slideData = await GetSlideData(resume);
            return NextResponse.json({ data: ExtractJSON(slideData) });
        } else {
            console.log('Uploaded file is not in the expected format.');
        }
    } else {
        console.log('No files found.');
        return NextResponse.json({ error: "No files found." });
    }

}

