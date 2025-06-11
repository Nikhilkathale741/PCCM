function calculateAge() {
    const dob = new Date(document.getElementById("id_date_of_birth").value);
    const today = new Date();
    if (!dob || isNaN(dob)) return;

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("id_age_years").value = years;
    document.getElementById("id_age_months").value = months;
    document.getElementById("id_age_days").value = days;
}

document.addEventListener("DOMContentLoaded", function () {
    const dobInput = document.getElementById("id_date_of_birth");
    if (dobInput) {
        dobInput.addEventListener("change", calculateAge);
    }
});