let objectdata = [];
// take data from user
function register() {
  let userdata = document.getElementById("data").value;
  if (userdata != "") {
    objectdata.push(userdata);
    alert("succesfull");
    setdata();
  } else {
    alert("enter text");
  }
  document.getElementById("data").value = "";
}
// set data in local storage
function setdata() {
  localStorage.setItem("data", JSON.stringify(objectdata));
  getdata();
}
// get data from local storage
function getdata() {
  let getdata = JSON.parse(localStorage.getItem("data"));
  distributedata(getdata);
}
// print data on ui
function distributedata(data) {
  let particulardata = data[data.length - 1];
  if (particulardata != "") {
    document.getElementById("card").style.display = "block";
    document.getElementById("card-body").innerHTML += `
    <div class="content" >
    <div class="d-flex mt-2 text justify-content-between">
    <div style="width: 70%;">
      <p class="form-control" id="data1">${particulardata}</p>
    </div>
    <div class="ms-3">
       <button type="button" class="btn btn-primary customize_button"><i class=" fa fa-pencil"></i></button>
       <button type="button" class="btn btn-danger" ><i class="fa fa-trash-o fa-1x"></i></button>
    </div>
   </div>
    
  </div>
    `;
    customize(data);
    dataerase();
  }
}
// customize data
function customize(data) {
  let cardbody = document.querySelectorAll(".content");
  let btns = document.querySelectorAll(".customize_button");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let inputvalue = document.getElementById("data");
      if (inputvalue.value != "") {
        btns.disabled = true;
      } else {
        inputvalue.value = data[i];
        cardbody[i].style.display = "none";
        console.log(i);
      }
      localStorage.removeItem("data", i);
    });
  }
}
// data delete process
function dataerase() {
  let cardbody = document.querySelectorAll(".content");
  let button = document.querySelectorAll(".btn-danger");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      cardbody[i].style.display = "none";
    });
  };
};
