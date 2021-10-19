var submit_button = document.querySelector('.submit-button');

submit_button.addEventListener('click', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('number').value;
    var noOfSigners = document.querySelector('.Notarisations').value;
    var noOfNotarizations = document.querySelector('.Signers').value;
    fetch("https://api-notarize.herokuapp.com/customer/createPublicOrder", {
        method:'POST',
        body:JSON.stringify({
            name:name,
            emal:email,
            phoneNumber:phoneNumber,
            noOfSigners: noOfSigners,
            noOfNotarizations: noOfNotarizations
        }),
        headers: {
            "Content-Type":"application/json; charset=UTF-8"
        }
    }) 
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        var results = document.getElementById('results')
        results.innerHTML = `${data.status}`
        var box = document.querySelector('.box')
        var box_2 = document.querySelector('.box-2')
        if( results.innerHTML === 'true') {
            console.log('hi there')
            box.setAttribute("style", "display:none;")
            box_2.setAttribute("style", "display:flex;")
        }
        
    })
})
