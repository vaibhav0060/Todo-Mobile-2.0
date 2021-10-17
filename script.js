let main = document.getElementById("main");
let add = document.getElementById("add");
let pop = document.getElementById("pop");
let body = document.getElementById("body");
let mainBody = document.getElementsByTagName("body")[0];
// let redirect = document.getElementById("redirect");
// let nolist = document.querySelectorAll("#nolist");

// function after click on add symbol
function addSymbol() {
    body.classList.add("bodyjs");
    pop.classList.remove("pop001");
    pop.classList.add("pop");

    let nolist =document.getElementById("nolist");

    nolist.classList.remove("nolist0");
    nolist.classList.add("nolist1");
}

add.addEventListener("click", () => {
  addSymbol();
});


//////// redirect on next page  ///////
function redirect(temp) {
let redirect = document.getElementById("redirect");
  body.classList.add("bodyjs1");
  redirect.classList.add("redirect1");
  redirect.classList.remove("redirect");

///change title // // ///
let title = document.getElementById("hm")
title.innerHTML = temp.innerHTML;

///// chanege cardd /////
let card111 = document.getElementById("cm");
card111.innerHTML = temp.parentNode.innerHTML

}


///////back to main page //////
function back_to_main() {
  let redirect = document.getElementById("redirect");
  body.classList.remove("bodyjs1");
  redirect.classList.remove("redirect1");
  redirect.classList.add("redirect");
}



//////close button ///////
function close_button() {
  body.classList.remove("bodyjs");
  pop.classList.add("pop001");
  pop.classList.remove("pop");
  pop_item.classList.add("pop001");
  pop_item.classList.remove("pop");
}
let btn = document.getElementById("btn");
let user = [];

btn.addEventListener("click", () => {
  afterClickOnAdd();
});

function   afterClickOnAdd() {
  
  body.classList.remove("bodyjs");
  pop.classList.add("pop001");
  pop.classList.remove("pop");

  let username = document.getElementById("text").value;
  let tempObject = { id: Date.now(), value: username };
  user.push(tempObject);
  document.getElementById("text").value = "";
  createCard();
  
}
let selectedNodeId;
let selectedCardId;
function createCard() {
  let card = document.createElement("div");
  card.setAttribute("class", "name");
  for (let index = 0; index < user.length; index++) {
    let element = user[index];
    // card.setAttribute("id", element.id);
    card.id = element.id ;
      card.innerHTML = `
        <p onclick = "redirect(this)"> ${element.value} </p>
        <hr>
        <p  class="" id="${card.id}">  </p>
    
         <button class="revert" data-card-id ="${card.id}"><i class="fas fa-plus-circle"></i> </button>
         <button class="revert_2" id="remove_item" onclick = "delete1(this)" > <i class="fas fa-trash-alt"></i> </button>
     `
  }
  main.appendChild(card);




// function addddd(){
let add_item = document.querySelectorAll(".revert");
console.log();
  add_item.forEach(e => {
      console.log(e);
      // console.log(e.target.dataset);
      e.addEventListener("click" , (e) => {
        // ///console.log(e.target.dataset///////////////// 
        let pop_item = document.getElementById("pop_item");
        body.classList.add("bodyjs");
        pop_item.classList.remove("pop001");
        pop_item.classList.add("pop");
        // selectedCardId = e.target.cardId;
        selectedNodeId = e.target.parentNode.parentNode.children[2];
        console.log(selectedNodeId);
        selectedCardId = e.target.parentNode.parentNode.id;
        // selectedCardId = this.parentNode;
        console.log(selectedCardId);
      })
    })
}
// }
///////remove card //////////
function delete1(para) {
  console.log(para);
  para.parentNode.remove();
let extra_plus = document.getElementById("reverthh");
extra_plus.classList.remove("reverthh");
extra_plus.classList.add("redirect");

}

////// text add in card ////////
function add_text(temp) {
  body.classList.remove("bodyjs");
  pop_item.classList.add("pop001")
  pop_item.classList.remove("pop")
  let text_item = document.getElementById("text_item").value;
// let text_write = document.getElementById("${element.id}");
let text_write = document.createElement("p");
// let ele = user.find(card => card.id == selectedCardId)
// console.log(ele);
if (selectedCardId == selectedNodeId.id) {
  // text_write.innerHTML = text_item ;
  // text_write.innerHTML = text_item ;
  text_write.innerHTML = ` ${text_item}  <button class = 'markdonee' onclick="markCompleted(this)">Mark Done</button>` ;
  selectedNodeId.appendChild(text_write)
}
document.getElementById("text_item").value = "";
};

function markCompleted(temp) {
  temp.classList.remove('markdonee');
  temp.classList.add("markdonee1");
  temp.parentNode.classList.add("del");
}
;






































// revert
// let add_item = document.getElementById("add_item");
// let add_item = document.querySelectorAll(".revert");
// add_item.addEventListener("onclick", () => {
//   let pop_item = document.getElementById("pop_item");
//   body.classList.add("bodyjs");
//   pop_item.classList.remove("pop001");
//   pop_item.classList.add("pop");
//   selectedCardId = this.parentNode.id;
//   console.log(selectedCardId);
// })
// add_item.forEach(e => {
//   console.log(e);
//   e.addEventListener("click" , (e) => {
//     console.log(e.target.dataset);
//     let pop_item = document.getElementById("pop_item");
//     body.classList.add("bodyjs");
//     pop_item.classList.remove("pop001");
//     pop_item.classList.add("pop");
//     selectedCardId = e.target.dataset.cardId
//     console.log(selectedCardId);
//   })
// });


// onclick = "add_item1()"
// function add_item1() {
//   let pop_item = document.getElementById("pop_item");
  
//     body.classList.add("bodyjs");
//     pop_item.classList.remove("pop001");
//     pop_item.classList.add("pop");
//     selectedCardId = this.parentNode;
//       console.log(selectedCardId);
//   }

// text_write  = text_item;
// document.getElementById(`${ele.id}`).appendChild(text_write);
// let mark_done = document.createElement("button");
// mark_done.innerHTML = "Mark Done";
// mark_done.classList.add(mark_done);
  // for (let index = 0; index < user.length; index++) {
  //   let element2 = user[index];
    // console.log(text_write , element2.id ,  temp.parentNode.id);
  //   let parent = document.getElementById(`${element2.id}`);
  //   console.log( temp.parentNode.parentNode);
  //  let tryw = main.children[0];
  //  console.log(tryw);
    // console.log(parent.lastChild);
    // if (element2.id == tryw.id) { 
    //   text_write.innerHTML = text_item ;
    //   document.getElementById(`${element2.id}`).appendChild(text_write);
      // parent.appendChild(text_write);
   
      

    
// }
// }

// function add_item1() {
//   let pop_item = document.getElementById("pop_item");
  
//     body.classList.add("bodyjs");
//     pop_item.classList.remove("pop001");
//     pop_item.classList.add("pop");
//     selectedCardId = this.parentNode.id;
//       console.log(selectedCardId);
//   }

// let  btn_add = document.getElementById("btn_add");
// btn_add.addEventListener("onclick",()=>{
//   add_text(this);
// })

// user.forEach(element => {
//   element.forEach(data => {
//     console.log(data);
//   });
// });

// let mark_done = createElement("button")









































































