var typeData = new Typed(".role", {
    strings: [
    "Engineer",
      "Web Developer",
      "Coder",
      "C++ Programer",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyczttZhLwJTnNZxd1kQWGT3UDYxzKSTRK9ixqcXcN5wcJTvAgnSxhYBKUzhT9JVWpIMg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {alert('Success!', response)
          form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })