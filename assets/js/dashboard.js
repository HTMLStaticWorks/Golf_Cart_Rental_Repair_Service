/**
 * Dashboard specific JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Example Chart using basic JS (No external library for simplicity)
    // In a real scenario, use Chart.js or similar
    console.log('Dashboard initialized');
    
    // Quick interactions for dashboard
    const statCards = document.querySelectorAll('.dashboard-stat');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('shadow');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('shadow');
        });
    });
});
