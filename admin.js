document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("carsTable");
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

    function populateTable() {
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }
        cars.forEach(car => {
            const row = table.insertRow();
            const photoCell = row.insertCell();
            photoCell.innerHTML = `<img id="carImage${row.rowIndex}" src="${car.photo}" alt="${car.brand}">`;
            photoCell.innerHTML += `<button class="changeImageButton" data-rowindex="${row.rowIndex}">Изменить изображение</button>`;
            row.insertCell().innerHTML = `<input type="text" value="${car.brand}" readonly>`;
            row.insertCell().innerHTML = `<input type="text" value="${car.manufacturer}" readonly>`;
            row.insertCell().innerHTML = `<input type="text" value="${car.price}" readonly>`;
            const editCell = row.insertCell();
            const editButton = document.createElement("button");
            editButton.textContent = "Редактировать";
            editButton.addEventListener("click", function() {
                const brandInput = row.cells[1].children[0];
                const manufacturerInput = row.cells[2].children[0];
                const priceInput = row.cells[3].children[0];
                brandInput.readOnly = !brandInput.readOnly;
                manufacturerInput.readOnly = !manufacturerInput.readOnly;
                priceInput.readOnly = !priceInput.readOnly;
                editButton.textContent = brandInput.readOnly ? "Редактировать" : "Сохранить";
                if (!brandInput.readOnly) {
                    // Добавляем обработчики для сохранения изменений
                    editButton.removeEventListener("click", arguments.callee);
                    editButton.addEventListener("click", function() {
                        saveChangesForRow(row);
                    });
                }
            });
            editCell.appendChild(editButton);
        });

        // Обработчик для кнопки "Изменить изображение"
        document.querySelectorAll('.changeImageButton').forEach(button => {
            button.addEventListener('click', function() {
                const rowIndex = this.getAttribute('data-rowindex');
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.accept = "image/*";
                fileInput.addEventListener("change", function(event) {
                    const file = event.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            const img = document.getElementById(`carImage${rowIndex}`);
                            img.src = e.target.result;
                            cars[rowIndex].photo = img.src; // Обновляем данные в массиве cars
                        };
                        reader.readAsDataURL(file);
                    }
                });
                fileInput.click();
            });
        });
    }

    function saveChangesForRow(row) {
        const brandInput = row.cells[1].children[0];
        const manufacturerInput = row.cells[2].children[0];
        const priceInput = row.cells[3].children[0];
        brandInput.readOnly = true;
        manufacturerInput.readOnly = true;
        priceInput.readOnly = true;
        const editButton = row.cells[4].children[0];
        editButton.textContent = "Редактировать";
        editButton.removeEventListener("click", arguments.callee);
        editButton.addEventListener("click", function() {
            brandInput.readOnly = !brandInput.readOnly;
            manufacturerInput.readOnly = !manufacturerInput.readOnly;
            priceInput.readOnly = !priceInput.readOnly;
            editButton.textContent = brandInput.readOnly ? "Редактировать" : "Сохранить";
        });
    }

    function saveChanges() {
        const rows = table.rows;
        cars = [];
        for (let i = 1; i < rows.length; i++) {
            const cells = rows[i].cells;
            cars.push({
                photo: cells[0].children[0].src,
                brand: cells[1].children[0].value,
                manufacturer: cells[2].children[0].value,
                price: cells[3].children[0].value
            });
        }
        localStorage.setItem("cars", JSON.stringify(cars));
        alert("Изменения сохранены");
    }

    function resetTable() {
        populateTable();
        localStorage.setItem("cars", JSON.stringify(cars));
        alert("Таблица сброшена к исходному виду");
    }

    const resetButton = document.createElement("button");
    resetButton.textContent = "Сбросить";
    resetButton.onclick = resetTable;
    document.body.appendChild(resetButton);

    populateTable();

    window.addEventListener('beforeunload', function (e) {
        saveChanges();
    });
});