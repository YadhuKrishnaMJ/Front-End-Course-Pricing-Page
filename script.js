function togglePlan() {
    var basicPlan = document.getElementById('basicPlan');
    var proPlan = document.getElementById('proPlan');
    var premiumPlan = document.getElementById('premiumPlan');

    if (basicPlan.style.display !== 'none') {
        basicPlan.style.display = 'none';
        proPlan.style.display = 'block';
    } else if (proPlan.style.display !== 'none') {
        proPlan.style.display = 'none';
        premiumPlan.style.display = 'block';
    } else {
        premiumPlan.style.display = 'none';
        basicPlan.style.display = 'block';
    }
}
