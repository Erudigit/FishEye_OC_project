function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    const modalForm = document.querySelector('#modal-form > div');
    const input1 = document.createElement( 'input' );
    const input2 = document.createElement( 'input' );
    const input3 = document.createElement( 'input' );

    const labelLastName = document.createElement( 'label' );
    labelLastName.textContent = "Last name";

    const labelEmail = document.createElement( 'label' );
    labelEmail.textContent = "Email";
    
    const labelMessage = document.createElement( 'label' );
    labelMessage.textContent = "Message";

    modalForm.append(labelLastName, input1, labelEmail, input2, labelMessage, input3);
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
} 
