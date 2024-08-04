import Replicate from "replicate";
const replicate = new Replicate();

export const getLanguajeService = async (prompt) => {
  const input = {
    top_p: 0.9,
    prompt: `Work through this problem step by step:\n\nQ: ${prompt}`,
    min_tokens: 0,
    temperature: 0.6,
    prompt_template:
      "<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\nYou are a helpful assistant<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
    presence_penalty: 1.15,
  };

  try {
    const events = [];
    for await (const event of replicate.stream(
      "meta/meta-llama-3-70b-instruct",
      { input }
    )) {
      events.push(event);
    }
    console.log(events);
    return events;
  } catch (error) {
    console.error("Error generating response:", error);
    throw new Error(error.message);
  }
};
