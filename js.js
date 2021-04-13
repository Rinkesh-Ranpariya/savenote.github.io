

showNote();


let btn=document.getElementById('btn');
btn.addEventListener('click', function (e) {
    let txt=document.getElementById('txt');

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

});

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
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
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
