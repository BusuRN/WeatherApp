const getCityImageUrl = async (city: string): Promise<string | null> => {
  try {
    const title = encodeURIComponent(city);

    // Step 1: Get the Wikipedia page for the city
    const summaryResponse = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`
    );

    if (!summaryResponse.ok) {
      console.warn(`No Wikipedia summary for ${city}`);
      return null;
    }

    const summaryData = await summaryResponse.json();

    // Step 2: Get the image URL from the response
    const imageUrl = summaryData?.originalimage?.source;

    return imageUrl || null;
  } catch (error) {
    console.error('Failed to fetch city image:', error);
    return null;
  }
};

export default getCityImageUrl;
