// app/api/gemini/api.ts
export async function generateCodeGemini(prompt: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>, apiKey?: string) {
    setLoading(true);
    try {
        const response = await fetch("/api/gemini", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({ prompt, apiKey }),
        });

        if (response.ok) {
            const responseData = await response.text(); // Parse response as text

            // Extract code from the response data
            const codeRegex = /```(\w+)\n([\s\S]*)```/; // Regex to extract code
            const matches = responseData.match(codeRegex);
            console.log("Response Data:", responseData.toString());
            if (matches && matches.length === 3) {
                const language = matches[1];
                const code = matches[2];
                console.log("Code Language:", language);
                console.log("Generated Code by Gemini:", code);
                return {language, code}; // Return the generated code
            } else {
                console.error("Failed to extract code language and code from response");
            }
        } else {
            console.error("Code generation failed");
        }
    } catch (error) {
        console.error("Error generating code:", error);
    } finally {
        setLoading(false);
    }
}

export async function generateExplainationGemini(code: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>, apiKey: string) {
    setLoading(true);
    try {
        // Construct the prompt with the code snippet and the task description
        const prompt = `The following code needs an explanation:

${code}

Please provide an explanation for this code in a very easy and formatted manner in Markdown Language. 
Most important Show code snippets from code and wrap in triple backticks and explain the code in simple terms
Include relevant headings, bullet points, and blank lines for better readability.`;

        const response = await fetch("/api/gemini/explaincode", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({ prompt }),
        });

        if (response.ok) {
            // Parse the response as JSON
            const responseData = await response.text();
            
            console.log("Generated Explanation by Gemini:", responseData);
            
            return responseData; // Return the generated explanation
        } else {
            console.error("Explanation generation failed");
        }
    } catch (error) {
        console.error("Error generating explanation:", error);
    } finally {
        setLoading(false);
    }
}

export async function generateReviewGemini(code: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>, apiKey: string) {
    setLoading(true);
    try {
        // Construct the prompt with the code snippet and the task description
        const prompt = `The following code needs a review:\n\n\`\`\`\n${code}\n\`\`\`\n\nPlease provide a review for this code in a formatted manner. Include any necessary improvements, suggestions, and explanations to make the code better.`;

        const response = await fetch("/api/gemini/reviewcode", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({ prompt }),
        });

        if (response.ok) {
            // Parse the response as text
            const review = await response.text();
            console.log("Generated Review by Gemini:", review);
            return review; // Return the generated review
        } else {
            console.error("Review generation failed");
        }
    } catch (error) {
        console.error("Error generating review:", error);
    } finally {
        setLoading(false);
    }
}

