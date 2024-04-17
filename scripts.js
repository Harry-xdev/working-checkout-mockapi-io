
const testLink = 'http://127.0.0.1:5000'
const productionLink = 'https://working-checkout-8e5c8145a6e5.herokuapp.com'

var buttons = document.getElementsByClassName("btn");
function handClick(buttonId) {
    let buttonText = this.textContent;
    const buttonDiv = document.getElementById(buttonId);
    // buttonDiv.style.backgroundColor = '#003039'
    buttonDiv.style.backgroundColor = 'gray';
    buttonDiv.disabled = true;
    // alert("Check-in(out) successful.");

};

function sendName(buttonId) {
    const button = document.getElementById(buttonId);
    console.log(buttonId);
    const content = button.innerHTML;
    const payload = {
        buttonId: buttonId,
        content: content,
    };
    fetch('/button', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    }).then(response => {
        if (response.ok) {
            return response.text();
        } else {
            Error('Request failed.')
        }
    });
    handClick(buttonId);
    updateList();
};

function handleDownloadbtn() {
    window.location.href = "https://working-checkout-8e5c8145a6e5.herokuapp.com/download-history";
    // alert("Excel downloaded.");
    btn = document.getElementById('download');
    btn.style.backgroundColor = 'grey';
    btn.disabled = true;
};

const dataListElement = document.getElementById('data-list');
fetch('https://working-checkout-8e5c8145a6e5.herokuapp.com/api/data')
    .then(response => response.json())
    .then(data => {
        // Populate the list with data
        data.forEach(item => {
            const liElement = document.createElement('li');
            liElement.textContent = item.date + ' | ' + '[' + item.start_time + ']' + '-' + '[' + item.leaving_time + ']' + ': ' + item.staff_name;
            dataListElement.appendChild(liElement);
        });
        console.log(data)
    })
    .catch(error => {
        console.log('Error:', error);
    });
    
function updateList() {
    fetch('https://working-checkout-8e5c8145a6e5.herokuapp.com/api/data')
        .then(response => response.json())
        .then(data => {
            // Populate the list with data
            const listContainer = document.getElementById('data-list');
            listContainer.innerHTML = '';
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.date + ' | ' + '[' + item.start_time + ']' + '-' + '[' + item.leaving_time + ']' + ': ' + item.staff_name;
                listContainer.appendChild(li);
            });

            console.log(data)
        })
        .catch(error => {
            console.log('Error:', error);
        });
}
