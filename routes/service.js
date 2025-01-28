const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeImage(base64Image, mimeType) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
  const prompt = `Analyze the provided image of a food product and list all identifiable ingredients present. 
  Consider visual cues such as textures, colors, shapes, and any visible text or labels. 
  If the image includes packaging with readable text, extract and include any mentioned ingredients. 
  Provide the list in a clear, bullet-point format. Identify the product and list all its contents after searching from internet for the product contents`;

  const imagePart = {
    inlineData: {
      data: base64Image,
      mimeType: mimeType
    }
  };

  const result = await model.generateContent([prompt, imagePart]);
  return result.response.text();
}

module.exports = { analyzeImage };