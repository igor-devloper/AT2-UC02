const form = document.getElementById('form')
const username = document.getElementById('username')
const useremail = document.getElementById('useremail')
const usertelefone = document.getElementById('usertelefone')
const horario = document.getElementById('horario')
const und = document.getElementById('und')


form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value.trim()
  const useremailValue = useremail.value.trim()
  const usertelefoneValue = usertelefone.value.trim()
  const horarioValue = horario.value.trim()
  const undValue = und.value.trim()

  if(usernameValue === '') {
    errorValidation(username, 'Preencha este campo')
  } else{
    successValidation(username)
  }

  if(useremailValue === '') {
    errorValidation(useremail, 'Preencha o compo de email')
  } else{
    successValidation(useremail)
  }

  if(usertelefoneValue === '') {
    errorValidation(usertelefone, 'Preencha o compo de telefone')
  } else  {
    successValidation(usertelefone)
  }

  if(horarioValue === '') {
    errorValidation(horario, 'Preencha o campo Horario')
  } else {
    successValidation(horario)
  }
  if(undValue === '') {
    errorValidation(und, 'Confirme sua Unidade')
  } else {
    successValidation(und)
  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  small.innerText = message
  formControl.className = 'form-control error'
}

function successValidation(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success'
}


let count = 1 ;

document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage()
}, 5000)

function nextImage(){
  count++;
  if(count>4){
    count = 1
  }

  document.getElementById("radio"+count).checked = true;
}