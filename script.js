 function updateDateTime() {
            const now = new Date(); 
            const currentDateTime = now.toLocaleString(); 
            document.getElementById('datetime').textContent = currentDateTime; 
        }
        updateDateTime();
        setInterval(updateDateTime, 1000); 