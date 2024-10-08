const apiBaseUrl = 'https://api.myl.cl/cards/edition/';

// Datos de ejemplo (deberías reemplazarlos con una llamada API real si los datos provienen de un servidor)
const filtersData = {
    races: [
        { id: "0", slug: "noraza", name: "Sin Raza" },
        { id: "1", slug: "caballero", name: "Caballero" },
        { id: "2", slug: "bestia", name: "Bestia" },
        { id: "3", slug: "eterno", name: "Eterno" },
        { id: "4", slug: "guerrero", name: "Guerrero" },
        { id: "5", slug: "barbaro", name: "Bárbaro" },
        { id: "6", slug: "faerie", name: "Faerie" },
        { id: "7", slug: "samurai", name: "Samurái" },
        { id: "8", slug: "sombra", name: "Sombra" },
        { id: "9", slug: "ancestral", name: "Ancestral" },
        { id: "10", slug: "sacerdote", name: "Sacerdote" },
        { id: "11", slug: "dragon", name: "Dragón" },
        { id: "12", slug: "heroe", name: "Héroe" },
        { id: "13", slug: "oni", name: "Oni" },
        { id: "14", slug: "olimpico", name: "Olímpico" },
        { id: "15", slug: "titan", name: "Titán" },
        { id: "16", slug: "faraon", name: "Faraón" },
        { id: "17", slug: "desafiante", name: "Desafiante" },
        { id: "18", slug: "defensor", name: "Defensor" },
        { id: "19", slug: "licantropo", name: "Licántropo" },
        { id: "20", slug: "vampiro", name: "Vampiro" },
        { id: "21", slug: "cazador", name: "Cazador" },
        { id: "22", slug: "chaman", name: "Chamán" },
        { id: "23", slug: "dios", name: "Dios" },
        { id: "24", slug: "abominacion", name: "Abominación" },
        { id: "25", slug: "kami", name: "Kami" },
        { id: "26", slug: "xian", name: "Xian" },
        { id: "27", slug: "criaturas", name: "Criaturas" },
        { id: "28", slug: "campeon/shaolin", name: "Campeón / Shaolín" },
        { id: "29", slug: "campeon/ninja", name: "Campeón / Ninja" },
        { id: "30", slug: "campeon/samurai", name: "Campeón / Samurái" },
        { id: "31", slug: "campeon", name: "Campeón" },
        { id: "32", slug: "heroe/sacerdote", name: "Héroe/Sacerdote" },
        { id: "33", slug: "eterno/sombra", name: "Eterno/Sombra" },
        { id: "34", slug: "caballero/guerrero", name: "Caballero/Guerrero" },
        { id: "35", slug: "bestia/guerrero", name: "Bestia/Guerrero" },
        { id: "36", slug: "caballero/heroe", name: "Caballero/Héroe" },
        { id: "37", slug: "dragon/eterno", name: "Dragón/Eterno" },
        { id: "38", slug: "eterno/faerie", name: "Eterno/Faerie" },
        { id: "39", slug: "paladin", name: "Paladín" },
        { id: "40", slug: "asesino", name: "Asesino" },
        { id: "41", slug: "tenebris", name: "Tenebris" },
        { id: "42", slug: "eterno/sacerdote", name: "Eterno/Sacerdote" },
        { id: "43", slug: "caballero/guerrero/hero", name: "Caballero/Guerrero/Héroe" },
        { id: "44", slug: "bestia/dragon/sombra", name: "Bestia/Dragón/Sombra" },
        { id: "45", slug: "eterno/faerie/sacerdote", name: "Eterno/Faerie/Sacerdote" },
        { id: "46", slug: "bestia/faerie", name: "Bestia/Faerie" }
    ],
    rarities: [
        { id: "0", slug: "promo", name: "Promocional" },
        { id: "1", slug: "legendaria", name: "Legendaria" },
        { id: "2", slug: "ultra-real", name: "Ultra Real" },
        { id: "3", slug: "mega-real", name: "Mega Real" },
        { id: "4", slug: "real", name: "Real" },
        { id: "5", slug: "cortesano", name: "Cortesano" },
        { id: "6", slug: "vasallo", name: "Vasallo" },
        { id: "7", slug: "oro", name: "Oro" },
        { id: "8", slug: "milenaria", name: "Milenaria" },
        { id: "9", slug: "secreta", name: "Secreta" },
        { id: "10", slug: "ficha", name: "Ficha" },
        { id: "11", slug: "set_paralelo", name: "Set Paralelo" }
    ],
    types: [
        { id: "1", slug: "aliado", name: "Aliado" },
        { id: "2", slug: "talisman", name: "Talismán" },
        { id: "3", slug: "arma", name: "Arma" },
        { id: "4", slug: "totem", name: "Tótem" },
        { id: "5", slug: "oro", name: "Oro" },
        { id: "6", slug: "monumento", name: "Monumento" }
    ]
};

// Función para obtener las cartas de una edición específica
async function fetchEditionCards(edition) {
    try {
        const response = await fetch(`${apiBaseUrl}${edition}`);
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error(error);
        document.getElementById('results').innerHTML = `<p>Error al cargar cartas: ${error.message}</p>`;
    }
}

// Función para mostrar las cartas
function displayCards(cards, editionId) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = cards.length === 0 
        ? '<p>No se encontraron cartas.</p>' 
        : cards.map(card => {
            const imageUrl = `https://api.myl.cl/static/cards/${editionId}/${card.edid}.png`;
            return `
                <div class="card" data-name="${card.name}" data-ability="${card.ability}" data-rarity="${card.rarity}" data-race="${card.race}" data-type="${card.type}" data-cost="${card.cost}" data-damage="${card.damage}">
                    <img src="${imageUrl}" alt="${card.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/150';">
                </div>
            `;
        }).join('');
}

// Función para cargar cartas
async function loadCards(edition) {
    document.getElementById('results').innerHTML = '<p>Cargando cartas...</p>';
    const data = await fetchEditionCards(edition);
    if (data) displayCards(data.cards, data.edition.id);
}

// Función para filtrar cartas
function filterCards() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const rarityFilter = document.getElementById('filter-rarity').value;
    const raceFilter = document.getElementById('filter-race').value;
    const typeFilter = document.getElementById('filter-type').value;
    const costFilter = document.getElementById('filter-cost').value;
    const damageFilter = document.getElementById('filter-damage').value;

    const cards = document.querySelectorAll('#results .card');
    cards.forEach(card => {
        const isNameMatch = card.dataset.name.toLowerCase().includes(searchInput) || card.dataset.ability.toLowerCase().includes(searchInput);
        const isRarityMatch = !rarityFilter || rarityFilter === card.dataset.rarity;
        const isRaceMatch = !raceFilter || raceFilter === card.dataset.race;
        const isTypeMatch = !typeFilter || typeFilter === card.dataset.type;
        const isCostMatch = !costFilter || costFilter === card.dataset.cost;
        const isDamageMatch = !damageFilter || damageFilter === card.dataset.damage;
        
        card.style.display = isNameMatch && isRarityMatch && isRaceMatch && isTypeMatch && isCostMatch && isDamageMatch ? 'block' : 'none';
    });
}

// Función para llenar las opciones de los filtros
function populateFilterOptions() {
    const raritySelect = document.getElementById('filter-rarity');
    filtersData.rarities.forEach(({ id, name }) => {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = name;
        raritySelect.appendChild(option);
    });

    const raceSelect = document.getElementById('filter-race');
    filtersData.races.forEach(({ id, name }) => {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = name;
        raceSelect.appendChild(option);
    });

    const typeSelect = document.getElementById('filter-type');
    filtersData.types.forEach(({ id, name }) => {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = name;
        typeSelect.appendChild(option);
    });
}

// Función para limpiar filtros
function clearFilters() {
    document.getElementById('search-input').value = '';
    document.getElementById('filter-rarity').value = '';
    document.getElementById('filter-race').value = '';
    document.getElementById('filter-type').value = '';
    document.getElementById('filter-cost').value = '';
    document.getElementById('filter-damage').value = '';
    filterCards();
}

// Configuración inicial y eventos
window.onload = () => {
    populateFilterOptions();
    loadCards('zodiaco');

    document.getElementById('search-input').addEventListener('input', filterCards);
    document.querySelectorAll('#filter-sidebar select, #filter-sidebar input').forEach(input => {
        input.addEventListener('input', filterCards);
    });

    document.getElementById('change-edition').addEventListener('change', (event) => {
        const selectedEdition = event.target.value;
        if (selectedEdition) loadCards(selectedEdition);
    });

    document.getElementById('filter-button').addEventListener('click', () => {
        document.getElementById('filter-sidebar').classList.toggle('show');
    });

    document.querySelector('#filter-sidebar .close-btn').addEventListener('click', () => {
        document.getElementById('filter-sidebar').classList.remove('show');
    });

    document.getElementById('clear-filters').addEventListener('click', clearFilters);
};

// Asegúrate de que el script se ejecute después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results');

    // Función para redirigir a los detalles de la carta
    function goToCardDetails(cardId, editionId) {
        window.location.href = `card-details.html?id=${cardId}&edition=${editionId}`;
    }

    // Función que renderiza las cartas
    function renderCards(cards, editionId) {
        resultsContainer.innerHTML = '';

        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');

            // Agregamos un evento al hacer clic en la carta
            cardElement.addEventListener('click', () => {
                goToCardDetails(card.id, editionId);
            });

            cardElement.innerHTML = `
                <img src="https://api.myl.cl/static/cards/${editionId}/${card.edid}.png" alt="${card.name}">
                <h2>${card.name}</h2>
            `;

            resultsContainer.appendChild(cardElement);
        });
    }

    // Aquí deberías tener el código para obtener las cartas y luego llamas a renderCards
    // por ejemplo, después de obtener la lista de cartas desde tu API
    fetch(`${apiBaseUrl}${selectedEdition}`)
        .then(response => response.json())
        .then(data => {
            const cards = data.cards; // Suponiendo que el JSON tiene una propiedad 'cards'
            renderCards(cards, selectedEdition);
        })
        .catch(error => console.error('Error al cargar las cartas:', error));
});
