const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0
  window.addEventListener('keydown', function(event) {
    if (parseInt(event.which) === code[index]) {
      index++
      if (index === code.length) {
        window.alert('win!')
      }
    } else {
      window.alert('NO!')
      index = 0
    }
  })
}