import { getLanguajeService } from "../services/languaje.service.js";

export const getLanguajes = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string") {
    return res
      .status(400)
      .json({ message: "Invalid or missing 'prompt' in request body" });
  }

  try {
    const output = await getLanguajeService(prompt);
    const concatenatedData = output
      .filter(item => item.event === 'output')
      .map(item => item.data)
      .join('');
    
    res.status(200).json({ data: concatenatedData });
  } catch (error) {
    console.error("Error generating response:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
      console.log("Error generating response:", error);
  }
};
