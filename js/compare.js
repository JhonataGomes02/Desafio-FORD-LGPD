let carsToCompare = [];

class Car {
    constructor(model, price, heightBody, heightVehicle, heightGround, capacity, motor, power, volume, wheel, image) {
        this.model = model;
        this.price = `R$ ${price.toFixed(2).replace('.', ',')}`;
        this.heightBody = heightBody;
        this.heightVehicle = heightVehicle;
        this.heightGround = heightGround;
        this.capacity = capacity;
        this.motor = motor;
        this.power = power;
        this.volume = volume;
        this.wheel = wheel;
        this.image = image;
    }
}

function GetCarArrPosition(car) {
    return carsToCompare.findIndex(c => c.model === car.model);
}

function SetCarToCompare(checkbox, car) {
    if (checkbox.checked) {
        if (carsToCompare.length < 2) {
            carsToCompare.push(car);
        } else {
            alert("Você pode selecionar apenas dois veículos para comparar.");
            checkbox.checked = false;
        }
    } else {
        const index = GetCarArrPosition(car);
        if (index > -1) {
            carsToCompare.splice(index, 1);
        }
    }
}

function UpdateCompareTable() {
    const [car1, car2] = carsToCompare;

    const carDataMap = {
        '0': car1,
        '1': car2
    };

    for (const key in carDataMap) {
        const car = carDataMap[key];
        document.getElementById(`compare_image_${key}`).innerHTML = `<img src="${car.image}" width="150" />`;
        document.getElementById(`compare_modelo_${key}`).innerText = car.model;
        document.getElementById(`compare_alturacacamba_${key}`).innerText = car.heightBody;
        document.getElementById(`compare_alturaveiculo_${key}`).innerText = car.heightVehicle;
        document.getElementById(`compare_alturasolo_${key}`).innerText = car.heightGround;
        document.getElementById(`compare_capacidadecarga_${key}`).innerText = car.capacity;
        document.getElementById(`compare_motor_${key}`).innerText = car.motor;
        document.getElementById(`compare_potencia_${key}`).innerText = car.power;
        document.getElementById(`compare_volumecacamba_${key}`).innerText = car.volume;
        document.getElementById(`compare_roda_${key}`).innerText = car.wheel;
        document.getElementById(`compare_preco_${key}`).innerText = car.price;
    }
}

function ShowCompare() {
    if (carsToCompare.length === 2) {
        UpdateCompareTable();
        document.getElementById('compare').style.display = 'block';
    } else {
        alert("É necessário escolher exatamente dois veículos para comparar.");
    }
}

function HideCompare() {
    document.getElementById('compare').style.display = 'none';
}