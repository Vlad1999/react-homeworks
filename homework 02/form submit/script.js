const d = document.getElementById("day");
const m = document.getElementById("month");
const y = document.getElementById("year");
let myForm = document.getElementById('infoForm');

const formDiv = document.getElementById("personalInfoForm");
const infoDiv = document.getElementById("personalInfoShow");

for(let i = 1; i <= 31; i++){
    const day = document.createElement("option");
    day.textContent = i;
    d.appendChild(day);
}
for(let i = 1; i <= 12; i++){
    const month = document.createElement("option");
    month.textContent = i;
    m.appendChild(month);
}
for(let i = 2022; i >= 1900; i--){
    const year = document.createElement("option");
    year.textContent = i;
    y.appendChild(year);
}

let formData = new FormData(myForm);
let data = {};

myForm.addEventListener('submit', e => {
    e.preventDefault();

    formData = new FormData(myForm);
    for(var pair of formData.entries()) {
        data[pair[0]] = pair[1];
    };

    formDiv.removeChild(myForm);

    let div = `<div class="info">
                    <img src="${URL.createObjectURL(data.image_uploads)}"><br />
                    <div class="allInfo">
                        <span><b>Name: </b>${data.name}</span><br />
                        <span><b>Email: </b>${data.email}</span><br />
                        <span><b>Phone Number: </b>${data.phone}</span><br />
                        <span><b>Gender: </b>${data.gender}</span><br />
                        <span><b>Birthday: </b>${data.day + '.' + data.month + '.' + data.year}</span><br />
                        <span><b>Address: </b>${data.address}</span><br />
                        <span><b>City: </b>${data.city}</span><br />
                        <span><b>State / Province: </b>${data.state}</span><br />
                        <span><b>Country: </b>${data.country}</span><br />
                    </div>
                </div>`;
                
    infoDiv.innerHTML = div;
});

myForm.reset();