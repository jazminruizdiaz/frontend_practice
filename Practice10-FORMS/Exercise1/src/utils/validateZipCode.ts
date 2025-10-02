export const validateZipCode = async (zip: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/zipcode?zip=${zip}`,
      {
        headers: { "X-Api-Key": "fOzemeUtpQ1FMLKHJduUxA==8sSJn8fOiQn6DBLR" },
      }
    );
    const data = await response.json();
    console.log(data);

    return Array.isArray(data) && data.length > 0;
  } catch (error) {
    console.error("ZIP Code validation error:", error);
    return false;
  }
};
