document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("carsTable");
    const cars = JSON.parse(localStorage.getItem("cars")) || [];

    cars.forEach(car => {
        const row = table.insertRow();
        row.insertCell().innerHTML = `<img src="${car.photo}" alt="${car.brand}">`;
        row.insertCell().innerHTML = car.brand;
        row.insertCell().innerHTML = car.manufacturer;
        row.insertCell().innerHTML = car.price;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const carSelect = document.getElementById("carSelect");
    const carDetails = document.getElementById("carDetails");
    const carPhoto = document.getElementById("carPhoto");
    const carBrand = document.getElementById("carBrand");
    const carManufacturer = document.getElementById("carManufacturer");
    const carPrice = document.getElementById("carPrice");

    let cars = JSON.parse(localStorage.getItem("cars")) || [
        { photo: "car1.png", brand: "Toyota", manufacturer: "Japan", price: "20000" },
        { photo: "car2.jpg", brand: "Ford", manufacturer: "USA", price: "25000" },
        { photo: "car3.jpg", brand: "Honda", manufacturer: "Japan", price: "22000" },
        { photo: "car4.jpg", brand: "Chevrolet", manufacturer: "USA", price: "23000" },
        { photo: "car5.jpg", brand: "BMW", manufacturer: "Germany", price: "35000" },
        { photo: "car6.jpg", brand: "Mercedes", manufacturer: "Germany", price: "40000" },
        { photo: "car7.jpg", brand: "Audi", manufacturer: "Germany", price: "38000" },
        { photo: "car8.jpg", brand: "Volkswagen", manufacturer: "Germany", price: "28000" },
        { photo: "car9.jpg", brand: "Nissan", manufacturer: "Japan", price: "26000" },
        { photo: "car10.jpg", brand: "Kia", manufacturer: "South Korea", price: "24000" }
    ];

    function populateCarSelect() {
        cars.forEach(car => {
            const option = document.createElement("option");
            option.value = car.brand;
            option.textContent = car.brand;
            carSelect.appendChild(option);
        });
    }

    function showCarDetails(brand) {
        const selectedCar = cars.find(car => car.brand === brand);
        if (selectedCar) {
            carPhoto.src = selectedCar.photo;
            carBrand.textContent = `Марка: ${selectedCar.brand}`;
            carManufacturer.textContent = `Производитель: ${selectedCar.manufacturer}`;
            carPrice.textContent = `Цена: ${selectedCar.price}`;
            carDetails.style.display = "block";
        }
    }

    carSelect.addEventListener("change", function() {
        const selectedBrand = this.value;
        showCarDetails(selectedBrand);
    });

    populateCarSelect();
    showCarDetails(carSelect.value); // Показать детали первого автомобиля по умолчанию
});