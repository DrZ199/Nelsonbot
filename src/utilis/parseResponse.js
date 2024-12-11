export function parseHuggingFaceResponse(response) {
  if (!response || typeof response !== 'string') {
    throw new Error('Invalid response format');
  }

  // Remove any special characters or formatting that might come from the model
  const cleanedResponse = response
    .trim()
    .replace(/\n{3,}/g, '\n\n') // Replace multiple newlines with double newlines
    .replace(/\s{2,}/g, ' '); // Replace multiple spaces with single space

  return cleanedResponse;
}