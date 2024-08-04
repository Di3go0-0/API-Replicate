import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export const getImagesService = async (prompt, num_outputs, guidance_scale, num_inference_steps) => {
  try {
    const output = await replicate.run(
      "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
      {
        input: {
          prompt,
          num_outputs,
          guidance_scale,
          num_inference_steps,
        },
      }
    );
    console.log(output);
    return output;
  } catch (error) {
    console.error("Error generating images:", error);
    throw new Error(error.message);
  }
};
