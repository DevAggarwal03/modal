const modalOpenBtn = document.getElementById("open");

const container = document.getElementById("container")

const modalCloseBtn = document.getElementById("close");


function modalOpen(){
    const div1 = document.createElement("div") 
    const div2 = document.createElement("div") 
    const p = document.createElement("p") 
    const closeBtn = document.createElement("button") 
    
    div1.id = "modal"
    div2.id = "modalContainer"
    p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error harum placeat quos nam dolorem iste minus odit illo sequi mollitia, nihil libero, nostrum eum nemo beatae fuga. Cum repellendus cumque distinctio explicabo dicta voluptas doloremque voluptate atque perferendis dolorem!`
    
    closeBtn.id = "close";
    closeBtn.textContent = "X";

    closeBtn.addEventListener('click', () => {
        div1.remove();
    })
    
    div2.appendChild(p)
    div2.appendChild(closeBtn)
    div1.appendChild(div2);
    document.getElementById("temp").appendChild(div1);
    
}

