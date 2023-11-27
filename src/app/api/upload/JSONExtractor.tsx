export default function ExtractJSON(inputString: string) {
    try {
        const jsonMatch = inputString.match(/\{[\s\S]*\}/);

        if (jsonMatch) {
            const extractedJson = jsonMatch[0];
            return JSON.parse(extractedJson);
        } else {
            console.log('No JSON found in the input string.');
            return null;
        }
    } catch (error) {
        console.error('Error parsing JSON:', error);
        throw new Error('500: Server Error');

    }
}