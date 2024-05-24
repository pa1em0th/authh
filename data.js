const suppliers = [
    { code: 1, name: 'AutoParts Inc.', phone: '123-456-7890', email: 'sales@autoparts.com', website: 'www.autoparts.com' },
    { code: 2, name: 'CarMasters LLC', phone: '987-654-3210', email: 'info@carmasters.com', website: null }
];

const models = [
    { code: 101, name: 'SportX 500', color: 'Red', upholstery: 'Leather', enginePower: '100/139 kW', doors: 2, transmission: 'Automatic', purchasePrice: 25000.00 },
    { code: 102, name: 'CityCruiser 300', color: 'Blue', upholstery: 'Fabric', enginePower: '80/110 kW', doors: 4, transmission: 'Manual', purchasePrice: 18000.00 }
];

const clients = [
    { fullName: 'Иван Иванов', contractNumber: 1001, purchaseDate: '2023-01-15', phone: '987-654-3210', address: 'ул. Ленина, 10', modelCode: 101 },
    { fullName: 'Петр Петров', contractNumber: 1002, purchaseDate: '2023-02-20', phone: '111-222-3333', address: 'пр. Мира, 20', modelCode: 102 }
];

const markups = [
    { type: 'Розница', value: 10.00 },
    { type: 'ОПТ', value: 5.00 },
    { type: 'Скидка', value: -3.00 }
];

const priceList = [
    { modelCode: 101, year: 2023, price: 30000.00 },
    { modelCode: 102, year: 2023, price: 22000.00 }
];