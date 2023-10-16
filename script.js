// Função para garantir que um valor esteja no intervalo de 0 a 10
function clampValue(value) {
    return Math.min(10, Math.max(0, value));
}

// Função para atualizar o valor exibido e armazenado no elemento
function updateValue(property, valueElement) {
    return function() {
        let currentValue = parseInt(valueElement.innerText, 10);
        if (property === "add" && currentValue < 10) {
            currentValue++;
        } else if (property === "remove" && currentValue > 0) {
            currentValue--;
        }
        currentValue = clampValue(currentValue);
        valueElement.innerText = currentValue;
    };
}

// Adicionar Event Listeners para os botões
document.getElementById("addArms").addEventListener("click", updateValue("add", document.getElementById("armsValue")));
document.getElementById("removeArms").addEventListener("click", updateValue("remove", document.getElementById("armsValue")));

document.getElementById("addArmor").addEventListener("click", updateValue("add", document.getElementById("armorValue")));
document.getElementById("removeArmor").addEventListener("click", updateValue("remove", document.getElementById("armorValue")));

document.getElementById("addCores").addEventListener("click", updateValue("add", document.getElementById("coresValue")));
document.getElementById("removeCores").addEventListener("click", updateValue("remove", document.getElementById("coresValue")));

document.getElementById("addLegs").addEventListener("click", updateValue("add", document.getElementById("legsValue")));
document.getElementById("removeLegs").addEventListener("click", updateValue("remove", document.getElementById("legsValue")));

