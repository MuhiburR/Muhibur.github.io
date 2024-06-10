// Sample car data (replace with data from your API or database)
const cars = [
	{
		make: "Honda",
		model: "Civic",
		year: 2023,
		price: 28000,
		imageUrl: "https://edgecast-img.yahoo.net/mysterio/api/EF123BA5415FBE0DBAB6DD88D377D0D41F5F0B12A159814233D781C2048D3E3D/autoblog/resizefill_w788_h525;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD20HOC021B021001.jpg"
	},
	// ... more cars
];

const carsContainer = document.getElementById("cars-container");

// Function to create car card HTML
function createCarCard(car) {
	const carCard = document.createElement("div");
	carCard.classList.add("car-card");

	const carImage = document.createElement("img");
	carImage.src = car.imageUrl;
	carImage.alt = `${car.make} ${car.model}`;
	carCard.appendChild(carImage);

	const carDetails = document.createElement("div");
	carDetails.classList.add("car-details");

	const carTitle = document.createElement("h3");
	carTitle.textContent = `${car.make} ${car.model} (${car.year})`;
	carDetails.appendChild(carTitle);

	const carPrice = document.createElement("p");
	carPrice.textContent = `$${car.price}`;
	carDetails.appendChild(carPrice);

	carCard.appendChild(carDetails);
	return carCard;
}

// Display cars on page load
cars.forEach(car => {
	const carCard = createCarCard(car);
	carsContainer.appendChild(carCard);
});

// Search functionality (example)
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const searchTerm = searchInput.value.toLowerCase();

	// Filter cars based on search term
	const filteredCars = cars.filter(car => {
		return (
			car.make.toLowerCase().includes(searchTerm) ||
			car.model.toLowerCase().includes(searchTerm)
		);
	});

	// Clear previous listings
	carsContainer.innerHTML = "";

	// Display filtered cars
	filteredCars.forEach(car => {
		const carCard = createCarCard(car);
		carsContainer.appendChild(carCard);
	});
});
