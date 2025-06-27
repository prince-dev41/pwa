export async function fetchEvents(apiUrl) {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Les données reçues ne sont pas un tableau.");
    }

    return data;
  } catch (error) {
    console.error("Erreur lors du chargement des événements :", error);
    return [];
  }
}
