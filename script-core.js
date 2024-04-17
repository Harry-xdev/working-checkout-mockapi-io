var globalData;
const dataListElement = document.getElementById('data-list');


const currentDateTime = new Date();

// Extract the individual components (year, month, day, hours, minutes, seconds)
const year = currentDateTime.getFullYear();
const month = currentDateTime.getMonth() + 1; // Months are zero-based, so we add 1
const day = currentDateTime.getDate();
const hours = currentDateTime.getHours();
let minutes = currentDateTime.getMinutes();

// Display the current date and time
console.log(`Current Date and Time: ${year}-${month}-${day} ${hours}:${minutes}`);

staffs_lst_2 = [
    ['btn_1', 'LÊ PHƯƠNG', '070032', 'TEST REQUEST', 'RD'],
    ['btn_2', 'TRƯƠNG TƯ XUÂN', '080262', 'TEST REQUEST', 'RD'],
    ['btn_3', 'TRƯƠNG THÀNH TAM', '080427', 'B/T', 'RD'],
    ['btn_4', 'LÊ THANH TUẤN', '101339', 'TEST REQUEST', 'RD'],
    ['btn_5', 'PHẠM THỊ PHƯƠNG', '172684', 'TEST REQUEST', 'RD'],
    ['btn_6', 'NGUYỄN HOÀNG VIỆT', '172759', 'TEST REQUEST', 'RD'],
    ['btn_7', 'NGUYỄN THỊ HỒNG YẾN', '172824', 'TEST REQUEST', 'RD'],
    ['btn_8', 'BÙI ĐÌNH HỒNG PHÚC', '193273', 'TEST REQUEST', 'RD'],
    ['btn_9', 'TRƯƠNG VĂN MINH', '203591', 'TEST REQUEST', 'RD'],
    ['btn_10', 'NGUYỄN QUANG QUÍ', '203638', 'TEST REQUEST', 'RD'],
    ['btn_11', 'NGUYỄN THỊ DIỄM MY', '213714', 'TEST REQUEST', 'RD'],
    ['btn_12', 'LÊ MINH THẮNG', '223906', 'TEST REQUEST', 'RD'],
    ['btn_13', 'LÊ QUỐC TRUNG', '224016', 'B/T', 'RD'],
    ['btn_14', 'NGUYỄN TUẤN ANH', '224057', 'TEST REQUEST', 'RD'],
    ['btn_15', 'TRẦN VĂN LƯU', '234102', 'TEST REQUEST', 'RD'],
    ['btn_16', 'LÊ HUỲNH ANH KHOA', '234168', 'B/T', 'RD'],
    ['btn_17', 'NGUYỄN MAI PHƯƠNG', '234170', 'TEST REQUEST', 'RD'],
    ['btn_18', 'PHẠM NG NGỌC TUYẾT', '234172', 'TEST REQUEST', 'RD']
]

var buttons = document.getElementsByClassName("btn");

function handleClick(buttonId) {
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
    if (minutes >= 10 & minutes < 46) {
        minutes = 30
        console.log(`Current Date and Time: ${year}-${month}-${day} ${hours}:${minutes}`);
    } else {
        console,log("Time needn't change")
    }
    // fetch('/button', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(payload),
    // }).then(response => {
    //     if (response.ok) {
    //         return response.text();
    //     } else {
    //         Error('Request failed.')
    //     }
    // });
    handleClick(buttonId);
};


fetch('https://6268162901dab900f1c9969b.mockapi.io/appi/v1/engQuest')
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        // console.log(data[0].logs);
        // console.log(typeof data[0].logs);

        let dataStr = data[0].logs
        dataStr = dataStr.replace(/'/g, '"');
        let dataArray = JSON.parse(dataStr)
        console.log(dataArray)
        globalData = dataArray
        // console.log(globalData)

        dataArray.forEach(item => {
            const liElement = document.createElement('li');
            liElement.textContent = item.date + ' | ' + '[' + item.start_time + ']' + '-' + '[' + item.leaving_time + ']' + ': ' + item.staff;
            dataListElement.appendChild(liElement);
        });
        // console.log(data)

    })
    .catch(error => {
        console.log('Error:', error);
    });

;