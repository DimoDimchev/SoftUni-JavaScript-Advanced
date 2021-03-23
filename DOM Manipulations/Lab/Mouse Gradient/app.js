function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');
    let resultDiv = document.getElementById('result');

    gradientBox.addEventListener('mousemove', calculatePercentage);
    gradientBox.addEventListener('mouseout', mouseOut);

    function calculatePercentage(e) {
        let percentage = Math.floor((e.offsetX / gradientBox.clientWidth) * 100);
        resultDiv.innerHTML = `${percentage}%`;
    }

    function mouseOut() {
        resultDiv.innerHTML = '';
    }
}