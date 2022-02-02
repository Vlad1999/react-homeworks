const root = document.getElementById("root")
let countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]

function ElectionFrom(vote){
    const container = document.createElement("form")

    container.innerHTML = `<label for="candidate">Candidate Name</label><br>
                            <input type="text" id="candidate" required>
                            <button type="submit">Vote</button>`

    container.addEventListener("submit", e => {
        e.preventDefault()
        const candidate = container.querySelector("#candidate").value
        vote(candidate)
    })

    return container
}

function Row(candidate) {
    const container = document.createElement("tr")
    container.innerHTML = ` <td>${candidate.Name}</td>
                            <td>${candidate.Age}</td>
                            <td>${candidate.Country}</td>
                            <td>${candidate.Votes}</td>`
    return container
}

function Table(candidates) {
    const container = document.createElement("table")
    container.innerHTML = `<thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Country</th>
                                    <th>Votes</th>
                                </tr>
                           </thead>`

    candidates.map(candidate => {
        return Row(candidate)
    }).forEach(el => {
        container.appendChild(el)
    })
    return container
}

function App() {
    let Candidates = [ 
        {Name: "Oliver", Age: 77, Country: "Armenia", Votes: 1},
        {Name: "Henry", Age: 68, Country: "Armenia", Votes: 1},
        {Name: "Alex", Age: 68, Country: "Armenia", Votes: 1},
        {Name: "James", Age: 47, Country: "Armenia", Votes: 1}
    ]
    const container = document.createElement("div")
    function render(){
        container.innerHTML = "";
        container.appendChild(ElectionFrom(name => {
            let found = false;
            for (let i = 0; i < Candidates.length; i++){
                if(Candidates[i].Name === name){
                    Candidates[i].Votes++
                    found = true
                } 
            }
            if (!found) {
                Candidates.push({
                    Name: name,
                    Age: getRandomInt(40, 80),
                    Country: countries[getRandomInt(0, 252)],
                    Votes: 1
                })
            }
            render()
        }))
        Candidates.sort((a, b) => {return  b.Votes - a.Votes})
        container.appendChild(Table(Candidates))
    }
    render()
    return container
}
root.appendChild(App())

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}