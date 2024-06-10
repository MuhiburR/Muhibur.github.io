// Sample car data (replace with data from your API or database)
const cars = [
	{
		make: "Toyota",
		model: "Corolla",
		year: 2022,
		price: 25000,
		imageUrl: "https://di-enrollment-api.s3.amazonaws.com/toyota/models/2022/corolla/colors/SUPER+WHITE.jpg"
	},
	{
		make: "Honda",
		model: "Civic",
		year: 2023,
		price: 28000,
		imageUrl: "https://mystrongad.com/BPH_BillPageHonda/Digital/Civic/2023/23-Honda-Civic-White.png" 
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
