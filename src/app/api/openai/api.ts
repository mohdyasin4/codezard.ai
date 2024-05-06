export async function generateCodeOpenAI(prompt: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  setLoading(true);
  try {
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (response.ok) {
      const responseData = await response.json();

      // Extract code language and code from the response data
      const content = responseData.content;
      const codeRegex = /```(\w+)\n([\s\S]*)```/;
      const matches = content.match(codeRegex);

      if (matches && matches.length === 3) {
        const language = matches[1];
        const code = matches[2];
        console.log("Code Language:", language);
        console.log("Generated Code by OpenAI:", code);
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

export async function generateExplainationOpenAI(code: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  setLoading(true);
  try {
    // Construct the prompt with the code snippet and the task description
    const prompt = `The following code needs an explanation:

${code}

Please provide an explanation for this code in a very easy and formatted manner in Markdown Language. 
Most important Show code snippets from code and wrap in triple backticks and explain the code in simple terms
Include relevant headings, bullet points, and blank lines for better readability.`;

    const response = await fetch("/api/openai/explaincode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (response.ok) {
      const responseData = await response.json();
      const explanation = responseData.explanation;
      console.log("Generated Explanation by OpenAI:", explanation);
      return explanation; // Return the generated explanation
    } else {
      console.error("Explanation generation failed");
    }
  } catch (error) {
    console.error("Error generating explanation:", error);
  } finally {
    setLoading(false);
  }
}

export async function generateReviewOpenAI(code: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  setLoading(true);
  try {
    // Construct the prompt with the code snippet
    const prompt = `Please review the following code:

\`\`\`
${code}
\`\`\`

Provide a detailed review including potential improvements, strengths, weaknesses, and any other relevant observations. show code in triple backticks for better formatting. `;

    const response = await fetch("/api/openai/reviewcode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (response.ok) {
      const responseData = await response.json();
      const review = responseData.review;
      console.log("Generated Review by OpenAI:", review);

      // Format the review output with headings, subheadings, paragraphs, and highlighted text
      const formattedReview = formatReview(review);
      
      return formattedReview; // Return the formatted review
    } else {
      console.error("Review generation failed");
    }
  } catch (error) {
    console.error("Error generating review:", error);
  } finally {
    setLoading(false);
  }
}
function formatReview(review: string): string {
  // Split the review into sections based on the line breaks
  const sections = review.split('\n');
  
  // Format each section
  const formattedSections = sections.map(section => {
    // Check if the section starts with specific keywords to identify headings, subheadings, etc.
    if (section.startsWith('Strengths:')) {
      return `<br/><h2 class="font-Inter font-bold text-xl">\n${section}\n</h2></br>`;
    } else if (section.startsWith('Weaknesses:')) {
      return `<br/>\n<h2 class="font-Inter font-bold text-xl" style="color: red;">${section}</h2>\n<br/>`;
    } else if (section.startsWith('Improvements:')) {
      return `<br/>\n<h2 class="font-Inter font-bold text-xl">${section}</h2>\n<br/>`;
    } else if (section.startsWith('```')) {
      // Extract content between triple backticks
      const startIndex = section.indexOf('```');
      const endIndex = section.lastIndexOf('```');
      if (startIndex !== -1 && endIndex !== -1 && startIndex !== endIndex) {
        const codeSnippet = section.substring(startIndex + 3, endIndex).trim(); // Extract content between triple backticks
        return `<br/>\n<pre class="bg-gray-800 text-white p-4 rounded-lg"><code>${codeSnippet}</code></pre>\n<br/>`;
      } else {
        return section; // Return unchanged if opening and closing triple backticks are not properly matched
      }
    } else {
      // For regular paragraphs, wrap in <p> tags
      return `<p>${section}</p>`;
    }
  });

  // Join the formatted sections and return
  return formattedSections.join('\n');
}

