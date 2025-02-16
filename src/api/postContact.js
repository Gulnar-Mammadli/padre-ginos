const apiUrl = import.meta.env.VITE_API_URL;

export const postContact = async (name, email, message) => {
  try {
    const response = await fetch(`${apiUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    return await response.json();
  } catch (error) {
    throw new Error("Error with adding contact", error);
  }
};
