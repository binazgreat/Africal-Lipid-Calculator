document.getElementById('cholesterol-form').addEventListener('submit', function (event) {
    event.preventDefault();
    calculateCholesterol();
});

document.getElementById("submit").onclick = function () {
    document.getElementById("cholesterol-form").style.display = "none";
}

function calculateCholesterol() {
    var ldl = parseInt(document.getElementById('ldl').value);
    var hdl = parseInt(document.getElementById('hdl').value);
    var triglycerides = parseInt(document.getElementById('triglycerides').value);

    var totalCholesterol = ldl + hdl + (triglycerides / 5);
    var ldlCholesterol = totalCholesterol - hdl - (triglycerides / 5);
    var cholesterolRatio = totalCholesterol / hdl;

    displayResults(totalCholesterol, ldlCholesterol, cholesterolRatio);
    resetForm();
}

function displayResults(totalCholesterol, ldlCholesterol, cholesterolRatio) {
    document.getElementById('total-cholesterol').textContent = totalCholesterol + ' mg/dL';
    document.getElementById('ldl-cholesterol').textContent = ldlCholesterol + ' md/dL';
    document.getElementById('cholesterol-ratio').textContent = cholesterolRatio.toFixed(2) + ' mg/dL';

    document.getElementById('result').style.display = 'block';
}

function resetForm() {
    document.getElementById('cholesterol-form').reset();
}