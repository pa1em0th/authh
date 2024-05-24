document.addEventListener('DOMContentLoaded', () => {
    const suppliersTableBody = document.getElementById('suppliersTableBody');
    suppliers.forEach(supplier => {
        const row = suppliersTableBody.insertRow();
        Object.values(supplier).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });

    const modelsTableBody = document.getElementById('modelsTableBody');
    models.forEach(model => {
        const row = modelsTableBody.insertRow();
        Object.values(model).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });

    const clientsTableBody = document.getElementById('clientsTableBody');
    clients.forEach(client => {
        const row = clientsTableBody.insertRow();
        Object.values(client).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });

    const markupsTableBody = document.getElementById('markupsTableBody');
    markups.forEach(markup => {
        const row = markupsTableBody.insertRow();
        Object.values(markup).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });

    const priceListTableBody = document.getElementById('priceListTableBody');
    priceList.forEach(price => {
        const row = priceListTableBody.insertRow();
        Object.values(price).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });
});