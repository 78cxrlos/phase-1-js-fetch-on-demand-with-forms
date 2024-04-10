const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      event.preventDefault();
      const input = document.querySelector("input#searchByID");
  
      console.log(input.value);
  
      fetch("http://localhost:3000/movies")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // LOG: (3) [{…}, {…}, {…}]
        });
        
        title.innerText = data.title;
        summary.innerText = data.summary;
    });
    };

document.addEventListener('DOMContentLoaded', init);

const inputForm = document.querySelector("form");

inputForm.addEventListener("submit", (event) => {});
  
  document.addEventListener("DOMContentLoaded", init);

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
  });

  event.target.children[1].value;

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");
  
    console.log(input.value);
  });



  