import { getImagesService } from '../services/img.service.js';

export const getImages = async (req, res) => {
  const { prompt, num_outputs = 1, guidance_scale = 7.5, num_inference_steps = 50 } = req.body;

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ message: "Invalid or missing 'prompt' in request body" });
  }

  try {
    const output = await getImagesService(prompt, num_outputs, guidance_scale, num_inference_steps);
    res.status(200).json({ output });
  } catch (error) {
    console.error("Error generating images:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
