function check() {
  var year = new Date()
  var currentYear = year.getFullYear()
  var yourYear = document.getElementById('birthYear')
  var yourAge = currentYear - yourYear.value
  var formSex = document.querySelector('input#masc')
  var generateContent = document.querySelector('div#newContent').innerHTML


  if (yourYear.value.length == 0 || Number(yourYear.value) > currentYear 
      || Number(yourYear.value) < 1903) {
    window.alert('[ERRO] Informações inválidas')
  } 
  else {
    var generateContent = document.createElement('img')
    if(formSex.checked == true) {
      if (yourAge >= 0 && yourAge <= 14) {
        //CRIANÇA
        generateContent.setAttribute('src', 'boy.jpg' )
        
      }
      else if (yourAge < 30) {
        document.write('Jovem')

      }
      else if (yourAge < 60) {
        document.write('Adulto')

      }
      else {
        document.write('Idoso')
        
      }
    
    
    
    // MULHER 
    
    } 
    else {
      if (yourAge >= 0 && yourAge <= 14) {
        document.write('criança')
      }
      else if (yourAge < 30) {
        document.write('Jovem')

      }
      else if (yourAge < 60) {
        document.write('Adulto')

      }
      else {
        document.write('Idoso')
        
      }
    
      }
      

  }
  



}