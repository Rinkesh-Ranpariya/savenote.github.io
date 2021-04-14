

showNote();


let btn=document.getElementById('btn');
btn.addEventListener('click', function (e) {
    let txt=document.getElementById('txt');
    let titleTxt=document.getElementById('titleTxt');
    
    if(txt.value.length !== 0 && titleTxt.value.length !== 0){

        // for title
        let title=localStorage.getItem('title');
        if(title == null)
        {
            titleArray=[];
        }
        else
        {
            titleArray=JSON.parse(title);
        }
        titleArray.push(titleTxt.value);
        localStorage.setItem('title',JSON.stringify(titleArray));
        titleTxt.value='';

        // for text
        let note=localStorage.getItem('note');
        if(note == null)
        {
            noteArray=[];
        }
        else
        {
            noteArray=JSON.parse(note);
        }
        noteArray.push(txt.value);
        localStorage.setItem('note',JSON.stringify(noteArray));
        txt.value='';

        showNote();
    }
    else if(titleTxt.value.length === 0 && txt.value.length !== 0)
    {
        alert('add title');
    }
    else if(txt.value.length === 0 && titleTxt.value.length !== 0)
    {
        alert('add txt');
    }
    else{
        alert('add title and txt');
    }


});

function showNote() {

    // for title
    let title=localStorage.getItem('title');
    if(title == null)
    {
        titleArray=[];
    }
    else
    {
        titleArray=JSON.parse(title);
    }
    
    // for text
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
            <h5 class="card-title">Title : ${titleArray[index]}</h5>
            <p class="card-text">Note : ${element}</p>
            <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)" >Delete</button>
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

    // for title
    let title=localStorage.getItem('title');
    if(title == null)
    {
        titleArray=[];
    }
    else
    {
        titleArray=JSON.parse(title);
    }

    // for text
    let note=localStorage.getItem('note');
    if(note == null)
    {
        noteArray=[];
    }
    else
    {
        noteArray=JSON.parse(note);
    }
    
    titleArray.splice(index,1);
    localStorage.setItem("title",JSON.stringify(titleArray));

    noteArray.splice(index,1);
    localStorage.setItem("note",JSON.stringify(noteArray));

    showNote();
    
};

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
            // notes.innerHTML = `<b>Nothing to show!!! Use above "Add Your Note" section to add notes.</b>` ;
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
            // notes.innerHTML = `<b>Nothing to show!!! Use above "Add Your Note" section to add notes.</b>` ;
        }
    });

    
});