const form=document.querySelector('form');
const tbody=document.querySelector('tbody');
form.addEventListener('submit',(event) =>{
    event.preventDefault();
    const name=form.elements.name.value;
    const email=form.elements.email.value;
    const password=form.elements.password.value;
    const dob=form.elements.dob.value;
    const termsAccepted=form.elements.terms.checked;
    const row=document.createElement('tr');
    row.innerHTML=`
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${termsAccepted}</td>
    `;
    tbody.appendChild(row);
    localStorage.setItem('entries' , tbody.innerHTML);
    form.reset();})
    
    if (localStorage.getItem('entries')) {
      tbody.innerHTML = localStorage.getItem('entries');
    }