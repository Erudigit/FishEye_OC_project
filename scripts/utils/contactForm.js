function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    const modalForm = document.querySelector('#modal-form > div');
    const input1 = document.createElement( 'input' );
    input1.classList.add('new-input');
    const input2 = document.createElement( 'input' );
    input2.classList.add('new-input');
    input2.setAttribute('type', 'email');
    input2.required=true;
    const input3 = document.createElement( 'input' );
    input3.classList.add('new-input');

    const labelLastName = document.createElement( 'label' );
    labelLastName.classList.add('new-label');
    labelLastName.textContent = "Last name";

    const labelEmail = document.createElement( 'label' );
    labelEmail.classList.add('new-label');
    labelEmail.textContent = "Email";
    
    const labelMessage = document.createElement( 'label' );
    labelMessage.classList.add('new-label');
    labelMessage.textContent = "Message";

    modalForm.append(labelLastName, input1, labelEmail, input2, labelMessage, input3);

    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        if (event.code === "Escape") {
            closeModal();
        };
    }, false);
}

function closeModal() {
    console.log("close-modal")
    const modal = document.getElementById("contact_modal");
    const labels = document.querySelectorAll('.new-label');
    const inputs = document.querySelectorAll('.new-input');

    for (let i = 0; i < labels.length; i++) {
        labels[i].remove();
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].remove();
    }

    modal.style.display = "none";

} 
