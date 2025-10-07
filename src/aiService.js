import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
    baseURL: "https://api.groq.com/openai/v1",
    dangerouslyAllowBrowser: true
});

export const getWellnessTips = async (profile) => {
    const prompt = `
You are a wellness assistant. 
The user has the following profile:

Age: ${profile.age}
Gender: ${profile.gender}
Concern: ${profile.concern}
${profile.weight ? `Weight: ${profile.weight}` : ""}
${profile.height ? `Height: ${profile.height}` : ""}
${profile.lifestyle ? `Lifestyle: ${profile.lifestyle}` : ""}

Generate 5 wellness tips. 
Each tip should have:
1. A short title (3-5 words)
2. A brief description (1 sentence)

Return as JSON array like:
[
  { "title": "Tip title", "description": "Short description" }
]
`;


    const response = await openai.chat.completions.create({
        model: "openai/gpt-oss-20b",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
    });

    // parse JSON from AI response
    try {
        const content = response.choices[0].message.content;
        return JSON.parse(content);
    } catch (err) {
        console.error("Failed to parse AI response", err);
        return [];
    }
};


//function for more detialed steps

export const detailedWellnessTips = async (profile, tipTitle) => {
  const prompt = `
You are a friendly wellness assistant.

The user has this profile:
Age: ${profile.age}
Gender: ${profile.gender}
Concern: ${profile.concern}
${profile.weight ? `Weight: ${profile.weight}` : ""}
${profile.height ? `Height: ${profile.height}` : ""}
${profile.lifestyle ? `Lifestyle: ${profile.lifestyle}` : ""}

The selected wellness tip is: "${tipTitle}".

Please provide:
1. A detailed explanation of this tip (2–3 sentences)
2. Step-by-step practical guidance (4–5 actionable steps)
3. Keep tone empathetic, short, and easy to follow.

Return the answer as JSON in this format:
{
  "title": "Tip title",
  "details": "Longer explanation",
  "steps": [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Step 5"
  ]
}
`;

  try {
    const response = await openai.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;
    return JSON.parse(content);
  } catch (err) {
    console.error("Failed to fetch detailed tip", err);

    // fallback example if AI fails
    return {
      title: tipTitle,
      details:
        "This tip focuses on improving your wellbeing through small, consistent changes.",
      steps: [
        "Start with one simple action daily.",
        "Track your progress in a journal.",
        "Reflect on how it makes you feel.",
        "Gradually increase duration or intensity.",
        "Celebrate your small wins!",
      ],
    };
  }
};
