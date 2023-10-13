function addToDisplay(value) {
    document.getElementById('Group1').value += value;
}
function clearDisplay() {
    document.getElementById('Group1').value = '';
}
function deleteLastCharacter() {
    const display = document.getElementById('Group1');
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}
function calculate() {
    try {
        document.getElementById('Group1').value = eval(document.getElementById('Group1').value);
    } catch (e) {
        document.getElementById('Group1').value = 'Error';
    }
}