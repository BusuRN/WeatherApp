const getCityImageUrl = async (cityName: string): Promise<string | null> => {
    try {
      const formattedCity = cityName.trim().replace(/\s+/g, '_'); // Replace spaces with underscores
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${formattedCity}`);

      if (!response.ok) {
        console.warn('Wikipedia request failed:', response.status);
        return null;
      }

      const data = await response.json();

      if (data?.thumbnail?.source) {
        return data.thumbnail.source;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching city image:', error);
      return null;
    }
  };

  export default getCityImageUrl;
