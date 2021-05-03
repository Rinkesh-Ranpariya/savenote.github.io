
showNote();
ccc();

let btn=document.getElementById('btn');
btn.addEventListener('click', function () {
    let titleTxt=document.getElementById('titleTxt');
    let txt=document.getElementById('txt');
    
    if(txt.value.length !== 0 && titleTxt.value.length !== 0){

        let note=localStorage.getItem('note');
        if(note == null)
        {
            noteArray=[];
        }
        else
        {
            noteArray=JSON.parse(note);
        }

        let obj1={
            'titleTxt':titleTxt.value,'txt':txt.value,'check':undefined
        }

        noteArray.push(obj1);
        localStorage.setItem('note',JSON.stringify(noteArray));
        txt.value='';
        titleTxt.value='';
    
        alearT('success','Your Note Added Successfully...');
        showNote();
        ccc();
    }
    else if(titleTxt.value.length === 0 && txt.value.length !== 0)
    {
        alearT('danger','Error!!!  Please Fill Your Title...');
    }
    else if(txt.value.length === 0 && titleTxt.value.length !== 0)
    {
        alearT('danger','Error!!!  Please Fill Your Note...');
    }
    else
    {
        alearT('danger','Error!!!  Please Fill Your Title and Note...');
    }

});

function alearT(type,message) {
    let alert=document.getElementById('alert');
    let m=':';
    let html=`
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>${type} ${m} </strong>${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
    `;

    alert.innerHTML=html;

    setTimeout(() => {
        alert.innerHTML='';
    }, 4000);
}

function showNote() {

    let note=localStorage.getItem('note');
    if(note == null)
    {
        noteArray=[];
    }
    else
    {
        noteArray=JSON.parse(note);
    }
    let html='';

    noteArray.forEach(function(element,index) {
      html = html + `

      <div class="noteTxt my-3 mx-4 card" style="width: 18rem;">
        <div class="card-body">
            <h6 class="card-title">Note ${index+1}</h6>
            <h5 class="card-title">Title : ${element.titleTxt}</h5>
            <p class="card-text">Note : ${element.txt}</p>
            <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)" >Delete</button>
            <div class="my-2">
                <label class="form-check-label" for="gridCheck1">
                    Make it important
                </label>&nbsp
                <input type="checkbox" name="checkbox" id="${index}" onclick="change(this.id)" class="checkBox" aria-label="Checkbox for following text input">
            </div>
        </div>
      </div>

      `;
      
    });

    let notes=document.getElementById('notes');
      if(noteArray.length != 0)
      {
        notes.innerHTML = html ;
      }
      else
      {
        notes.innerHTML = `<b>Nothing to show!!! Use above "Add Your Note" section to add notes.</b>` ;
      }
};

function deleteNote(index) {

    let note=localStorage.getItem('note');
    if(note == null)
    {
        noteArray=[];
    }
    else
    {
        noteArray=JSON.parse(note);
    }
    
    noteArray.splice(index,1);
    localStorage.setItem("note",JSON.stringify(noteArray));

    showNote();
    ccc();
    
};

function change(id) {

    let note=localStorage.getItem('note');
    if(note == null)
    {
        noteArray=[];
    }
    else
    {
        noteArray=JSON.parse(note);
    }
    
    let checkkk=document.getElementsByClassName('noteTxt')[id];
    
        let check1=checkkk.querySelector("input[name=checkbox]");
    
        if(check1.checked) {
            checkkk.style.backgroundColor="rgb(190, 245, 175)" ;
            
            noteArray[id].check='checked';
            localStorage.setItem("note",JSON.stringify(noteArray));

        }
        else{
            checkkk.style.backgroundColor= "white" ;
            
            noteArray[id].check='un-checked';
            localStorage.setItem("note",JSON.stringify(noteArray));
            
        }
}

function ccc() {
    let note=localStorage.getItem('note');
    if(note == null)
    {
        noteArray=[];
    }
    else
    {
        noteArray=JSON.parse(note);
    }
    
    noteArray.forEach(function(element,index) {
        
        if(element.check=='checked'){
            let checkk=document.getElementsByClassName('noteTxt')[index];
            checkk.style.backgroundColor="rgb(190, 245, 175)" ;
            checkk.querySelector("input[name=checkbox]").checked=true;
        }
        else
        {
            let checkk=document.getElementsByClassName('noteTxt')[index];
            checkk.style.backgroundColor= "white" ;
        }
        
    });

}

//search function
let searchtxt=document.getElementById('searchTxt');
searchtxt.addEventListener("input", function () {

    let search=searchtxt.value;
    let notetxt=document.getElementsByClassName('noteTxt');
    
    Array.from(notetxt).forEach(function(element) {
        let pera=element.getElementsByTagName("p")[0].innerText;
        if(pera.includes(search))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    });

    
});


let searchTitle=document.getElementById('searchTitle');
searchTitle.addEventListener("input", function () {

    let search2=searchTitle.value;
    let notetxt=document.getElementsByClassName('noteTxt');
    
    Array.from(notetxt).forEach(function(element) {
        let pera2=element.getElementsByTagName("h5")[0].innerText;
        if(pera2.includes(search2))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    });
    
});