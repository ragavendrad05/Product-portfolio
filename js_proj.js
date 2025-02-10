const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('fuelCalcModal');
const overlay = document.getElementById('modalOverlay');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

// Fuel calculation logic
function calculateFuelCost() {
                // document.getElementById('butt').style.display="none";
                const distance = parseFloat(document.getElementById('distance').value);
                const efficiency = parseFloat(document.getElementById('efficiency').value);
                // const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    
                if (isNaN(distance) || isNaN(efficiency) ) {
                    alert("Please enter valid values for all fields.");
                    return;
                }
    
                // Calculate the required fuel and cost
                const fuelRequired = distance / efficiency;
                const cost = fuelRequired * 102;
    
                // Display the result
                document.getElementById('result').textContent = `Fuel Cost: Rs.${cost.toFixed(2)}`;
            }