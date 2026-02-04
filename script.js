// Fonction pour copier l'IP dans le presse-papiers
function copyIP() {
    const ip = 'votre-ip-serveur:27015';
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP copiée dans le presse-papiers !');
    });
}

// Simulation de statut du serveur (remplacez par une vraie API si disponible)
document.addEventListener('DOMContentLoaded', function() {
    // Ici, vous pourriez faire un appel API pour obtenir le vrai statut
    // Par exemple : fetch('https://api.battlemetrics.com/servers/ark/123456789')
    setTimeout(() => {
        document.getElementById('status').textContent = 'En ligne';
        document.getElementById('players').textContent = '5/10'; // Exemple
    }, 1000);
});
