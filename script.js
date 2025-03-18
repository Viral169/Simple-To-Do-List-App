let inputh = document.querySelector(".inputh");
let inputp = document.querySelector(".inputp");
let button = document.querySelector(".submit");
let add_data_box = document.querySelector(".box");
let alet_box = document.querySelector(".alert-box");

let to_do_list = (e) => {
  e.preventDefault();
  if (inputh.value === "") {
    alet_box.innerHTML = `<div class="alert alert-primary alert-dismissible fade show" role="alert">
             Please Enter Your <strong>Tittle</strong>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
      `;
  } else if (inputp.value === "") {
    alet_box.innerHTML = `<div class="alert alert-primary alert-dismissible fade show" role="alert">
      Please Enter Your <strong>Task</strong>
       <button
         type="button"
         class="btn-close"
         data-bs-dismiss="alert"
         aria-label="Close"
       ></button>
     </div>
  `;
  } else {
    let inputhead = inputh.value.trim();
    let inputpara = inputp.value.trim();
    let divele = document.createElement("div");
    divele.classList.add("list-box", "p-2");
    divele.innerHTML = `
     <h3 class="head">${inputhead}</h3>
            <p class="text">${inputpara}</p>
            <button class="btn btn-primary" onclick="editTask(this)">
            <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-primary me-1 del" onclick="deletetask(this)">
              <i class="fa-solid fa-trash "></i>
            </button>`;
    add_data_box.append(divele);
    inputh.value = "";
    inputp.value = "";
    saveData();
  }
};
function deletetask(ele) {
  ele.parentElement.remove();
}

function editTask(ele) {
  let taskElement = ele.parentElement;
  taskElement.remove();
  let head = taskElement.querySelector(".head").innerText;
  let text = taskElement.querySelector(".text").innerText;
  inputh.value = head;
  inputp.value = text;
}
button.addEventListener("click", to_do_list);
