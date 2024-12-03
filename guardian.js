const key = '4635eaa0-db69-4879-a0b8-c26cbadd9380';

async function fetchData() {
    try {
        const response = await fetch(`https://content.guardianapis.com/search?&show-section=true&page-size=100&api-key=${key}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const sectionIds = [...new Set(data.response.results.map(item => item.sectionId))]; // Unika sectionIds
        return sectionIds; // Returnera kategorier
    } catch (error) {
        console.error(`Det uppstod ett fel: ${error}`);
        return []; // Returnera tom array vid fel
    }
}

// Användning av fetchData i en annan funktion
async function useCategories() {
    const categories = await fetchData(); // Vänta på resultatet
    console.log('Categories:', categories);
    // Använd kategorierna här
}

// async function createButtons() {
//     try{
//     const data = await fetchData();
//     const categories = await useCategories();

//     for
// }
// }


// create array with sections, no duplicates


// create buttons to filter categories from array, only the categories from


// show articels by category

