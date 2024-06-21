function showForm() {
    const calculationType = document.getElementById('calculationType').value;
    document.getElementById('emiForm').style.display = 'none';
    document.getElementById('fdForm').style.display = 'none';
    document.getElementById('sipForm').style.display = 'none';

    if (calculationType === 'emi') {
        document.getElementById('emiForm').style.display = 'block';
    } else if (calculationType === 'fd') {
        document.getElementById('fdForm').style.display = 'block';
    } else if (calculationType === 'sip') {
        document.getElementById('sipForm').style.display = 'block';
    }
}

function calculateEMI() {
    const P = parseFloat(document.getElementById('loanAmount').value);
    const r = parseFloat(document.getElementById('annualInterestRate').value) / 1200;
    const n = parseInt(document.getElementById('loanYears').value) * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    document.getElementById('emiResult').innerText = "EMI: ₹" + emi.toFixed(2) + " per month";

}

function calculateFD() {
    const P = parseFloat(document.getElementById('fdAmount').value);
    const r = parseFloat(document.getElementById('fdInterestRate').value) / 100;
    const n = parseInt(document.getElementById('fdYears').value);
    const A = P * Math.pow((1 + r), n);
    document.getElementById('fdResult').innerText = "Maturity Amount: ₹" + A.toFixed(2);

}

function calculateSIP() {
    let monthlyInvestment = parseFloat(document.getElementById('sipAmount').value);
    const annualRate = parseFloat(document.getElementById('sipInterestRate').value) / 100;
    const term = parseInt(document.getElementById('sipYears').value);
    const annualIncrease = parseFloat(document.getElementById('annualIncrease').value) / 100;

    let totalAmount = 0;
    for (let year = 0; year < term; year++) {
        const monthlyRate = annualRate / 12;
        const months = (term - year) * 12;
        let amount = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        totalAmount += amount;
        monthlyInvestment *= (1 + annualIncrease);
    }

    document.getElementById('sipResult').innerText = "Total Investment Value: ₹" + totalAmount.toFixed(2);

}