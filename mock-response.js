function getMockResponse(input) {
  input = input.toLowerCase();
  if (input.includes("hello")) return "Hi! How can I assist you today?";
  if (input.includes("name")) return "I'm Adeel's AI assistant.";
  if (input.includes("price")) return "My services are budget-friendly and powerful!";
  return "That's an interesting question. Let me think about it!";
}
