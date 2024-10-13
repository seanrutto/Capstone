export default async function Logic(currency) {
    const apiKey = '650da8f619d09b125dc887b4';
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`);
        const data = await response.json();
        return data.conversion_rates; 
    } catch (error) {
        console.error("Error fetching data:", error);
        return {};
    }
}
