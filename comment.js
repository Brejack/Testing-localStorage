let comments = JSON.parse(localStorage.getItem('saveComment')) || [];

let commentSection = document.getElementById('commentSection');


function clearandshow(){
    commentSection.innerHTML ='';
    comments.forEach(showComments);
    document.getElementById('textareaComment').value = '';
}


function showComments(elemento, i){
    commentSection.innerHTML += `<div class="col-8 border border-dark my-3 bg-light">
    <div class="text-right border-bottom row justify-content-end">
        <p class="col-2">Usuario</p>
        <div class="btn-group dropright col-2">
            <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu">
                <div class="mx-3 border mb-1 border btn btn-light w-75" onclick="" >Edit</div>
                <div class="mx-3 border mb-1 border btn btn-light w-75" onclick="deletComment(${i})" >Delet</div>
                <div class="mx-3 border mb-1 border btn btn-light w-75" onclick="" >Share</div>
            </div>
        </div>
    </div>
    <p>${elemento.texto}</p>
    <div class=" row justify-content-end ">
        <div><i class="far fa-arrow-alt-circle-up"></i></div>
        <div onclick="likeDislike(${})"><i class="far fa-thumbs-up ml-2"></i></div>
        <div> <i class="far fa-thumbs-down mr-2"></i></div>
    </div>
</div>`
}

function buttonComment(){
  let newComment = {
      texto: document.getElementById('textareaComment').value
  };
   
  comments.push(newComment);
  clearandshow()
  localStorage.setItem('saveComment', JSON.stringify(comments));
}


function deletComment(elemetn){
    comments.splice(elemetn, 1);
    localStorage.setItem('saveComment', JSON.stringify(comments));
    clearandshow()
  
}
function likeDislike(elemet){
    
}

clearandshow();