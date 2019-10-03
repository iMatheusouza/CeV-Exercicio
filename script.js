document.getElementById('validateButton').addEventListener('click', check);

function check() {
  var year = new Date()
  var currentYear = year.getFullYear()
  var yourYear = document.getElementById('birthYear')
  var yourAge = currentYear - yourYear.value
  var formSex = document.querySelector('input#masc')


  if (yourYear.value.length == 0 || Number(yourYear.value) > currentYear 
      || Number(yourYear.value) < 1903) {
    window.alert('[ERRO] Informações inválidas')
  } 
  else {
    if(formSex.checked == true) {
      if (yourAge >= 0 && yourAge <= 14) {
        //CRIANÇA
        var generateText = document.getElementById('newText')
        generateText.innerText = `Identificamos um homem de ${yourAge} anos` 

        var generateImage = document.createElement('img')
        generateImage.setAttribute('src', 'boy.jpg' )
        generateImage.style.borderRadius = '50%'
        document.getElementById('newContent').appendChild(generateImage)
        
      }
      else if (yourAge < 30) {
        var generateText = document.getElementById('newText')
        generateText.innerText = `Identificamos um homem de ${yourAge} anos` 
        
        var generateImage = document.createElement('img')
        generateImage.setAttribute('src', 'young-man.jpg' )
        generateImage.style.borderRadius = '50%'
        document.getElementById('newContent').appendChild(generateImage)

      }
      else if (yourAge < 60) {
        var generateText = document.getElementById('newText')
        generateText.innerText = `Identificamos um homem de ${yourAge} anos` 

        var generateImage = document.createElement('img')
        generateImage.setAttribute('src', 'adult-man.jpg' )
        generateImage.style.borderRadius = '50%'
        document.getElementById('newContent').appendChild(generateImage)
      }
      else {
        var generateText = document.getElementById('newText')
        generateText.innerText = `Identificamos um homem de ${yourAge} anos` 

        var generateImage = document.createElement('img')
        generateImage.setAttribute('src', 'old-man.jpg' )
        generateImage.style.borderRadius = '50%'
        document.getElementById('newContent').appendChild(generateImage) 
      }

    // MULHER
    } 
      else {
        if (yourAge >= 0 && yourAge <= 14) {
          var generateText = document.getElementById('newText')
          generateText.innerText = `Identificamos uma mulher de ${yourAge} anos` 
  
          var generateImage = document.createElement('img')
          generateImage.setAttribute('src', 'girl.jpg' )
          generateImage.style.borderRadius = '50%'
          document.getElementById('newContent').appendChild(generateImage) 
        }

        else if (yourAge < 30) {
          var generateText = document.getElementById('newText')
          generateText.innerText = `Identificamos uma mulher de ${yourAge} anos` 
  
          var generateImage = document.createElement('img')
          generateImage.setAttribute('src', 'young-woman.jpg' )
          generateImage.style.borderRadius = '50%'
          document.getElementById('newContent').appendChild(generateImage) 
        }

        else if (yourAge < 60) {
          var generateText = document.getElementById('newText')
          generateText.innerText = `Identificamos uma mulher de ${yourAge} anos` 
  
          var generateImage = document.createElement('img')
          generateImage.setAttribute('src', 'adult-woman.jpg' )
          generateImage.style.borderRadius = '50%'
          document.getElementById('newContent').appendChild(generateImage) 
        }

        else {
          var generateText = document.getElementById('newText')
          generateText.innerText = `Identificamos uma mulher de ${yourAge} anos` 
  
          var generateImage = document.createElement('img')
          generateImage.setAttribute('src', 'old-woman.jpg' )
          generateImage.style.borderRadius = '50%'
          document.getElementById('newContent').appendChild(generateImage) 
        }
      
      }
      

  }

/*removeEventListener vai remover a função de gerar elementos
do botão, fazendo assim não ser possível gerar várias imagens
e quebrar o site*/

  document.getElementById('validateButton').removeEventListener('click', check)

}

function refresh () {
  window.location.reload()
}