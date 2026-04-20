let links=[
    {
        path: "index.html",
        text: "Home",
        isActive: true
    },
     {
        path: "index.html#about",
        text: "About",
        isActive: false
    },
    {
        path: "index.html#class",
        text: "Class",
        isActive: false
    },
    {
        path: "index.html#team",
        text: "Team",
        isActive: false
    },
    {
        path: "index.html#contact",
        text: "Contact",
        isActive: false
    }
];
function CreateMenuLinks(link){
    let html=`<a href="${link.path}" class="nav-item nav-link ${link.isActive ? 'active' : ''}">${link.text}</a>`;
    return html;
}
let meni="";
for(let link of links){
    meni+=CreateMenuLinks(link);
}
let navMeni =document.querySelectorAll('.meni');
navMeni.forEach(el => {
    el.innerHTML=meni;
})

//About
const images = [
    "assets/img/1.jpg", 
    "assets/img/yogaClass.jpg", 
    "assets/img/groupYoga.jpg",
    "assets/img/groupExercise.jpg",
    "assets/img/groupClass.jpg"
];

let currentIndex = 0;
const welcomeImgElement = document.getElementById("slideShow");

function changeImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }
    
    welcomeImgElement.style.opacity = 0;
    
    setTimeout(() => {
        welcomeImgElement.src = images[currentIndex];
        welcomeImgElement.style.opacity = 1;
    }, 500);
}
setInterval(changeImage, 3000);

//FILTERS
const filterBtn = document.querySelectorAll('.filter-btn');
const classCard=document.querySelectorAll('.class-card');
filterBtn.forEach(button =>{
    button.addEventListener('click', function(){
        let filter=button.getAttribute('data-filter');
    
    filterBtn.forEach(btn => btn.classList.remove('btn-dark'));
    filterBtn.forEach(btn=>btn.classList.add('btn-outline-dark'));
    button.classList.remove("btn-outline-dark");
    button.classList.add("btn-dark");

    classCard.forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
        });
    });
});

const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

readMoreBtn.addEventListener("click", function() {
    if (moreText.classList.contains("hide")) {
        moreText.classList.remove("hide");
        this.innerHTML = "Read less";
    } else {
        moreText.classList.add("hide");
        this.innerHTML = "Read more";
    }
});

//TEAM
const teamMembers = [
    {name:"Mia Grey", img:"assets/img/mia.jpg", age:"24"},
    {name:"Hana Smith", img:"assets/img/hana.jpg", age:"32"},
    {name:"David White", img:"assets/img/david.jpg", age:"39"},
    {name:"Rina Mec", img:"assets/img/rina2.jpg", age:"25"},
    {name:"Evangelina Roga", img:"assets/img/evangelina2.jpg", age:"37"},
];

let teamSlide = document.getElementById('teamSlide');
let i = 0;
let count = 3; 

teamMembers.forEach(member => {
    let div = document.createElement('div');
    div.classList.add("team-member", "col-lg-3");
    div.innerHTML = `
        <img src="${member.img}" alt="${member.name}"/>
        <div class="team-name">${member.name}, ${member.age}</div>
    `;
    teamSlide.appendChild(div);
});

function updateCount() {
    if (window.innerWidth < 768) {
        count = 1; 
    } else if (window.innerWidth < 1200) {
        count = 2;
    } else {
        count = 3; 
    }
    i = 0; 
    updateSlidePosition();
}

function updateSlidePosition() {
    const memberElement = document.querySelector('.team-member');
    if (memberElement) {
        const slideWidth = memberElement.offsetWidth + 20; 
        teamSlide.style.transform = `translateX(-${i * slideWidth}px)`;
    }
}
document.getElementById("btnNext").addEventListener("click", () => {
    if (i < teamMembers.length - count) {
        i++;
        updateSlidePosition();
    }
});
document.getElementById("btnPrevious").addEventListener("click", () => {
    if (i > 0) {
        i--;
        updateSlidePosition();
    }
});
window.addEventListener('resize', updateCount);
updateCount(); 
window.onload=function(){
    let years=this.document.getElementById('tbAge');
    let currentYear= new Date().getFullYear();
    let firstOption=this.document.createElement('option');
    firstOption.textContent="Select year";
    firstOption.value="0";
    years.appendChild(firstOption);
    for(let i=1960; i<currentYear; i++){
        let option=document.createElement('option');
        option.textContent=i;
        option.value=i;
        years.appendChild(option);
    }
//CONTACT

    let objFirstName, objLastName, objEmail, ddlAge, gender, objNote, btn;
    objFirstName = document.getElementById("tbFirstName");
    objLastName=document.getElementById("tbLastName");
    objEmail=document.getElementById("tbEmail");
    ddlAge=document.getElementById("tbAge")
    gender=document.getElementsByName("btnGender")[0];
    objNote=document.getElementById("tbNote");
    btn=document.getElementById("btnSubmit");

    let reFirstLastName, reEmail;
    reFirstLastName=/^[A-ZŠĐČĆŽ][a-zšđčćž]{2,15}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,15})*$/;
    reEmail=/^[a-z0-9._%+-]{2,20}@[a-z0-9.-]+\.[a-z]{2,6}$/;

    
    btn.addEventListener('click', function(e){
        e.preventDefault();
        formValidation(reFirstLastName,objFirstName,"Name is not valid!");
        formValidation(reFirstLastName,objLastName,"Surname is not valid!");
        formValidation(reEmail,objEmail,"Email is not valid!");

        if(ddlAge.value=='0'){
        ddlAge.nextElementSibling.classList.remove('hide');
        ddlAge.nextElementSibling.innerHTML="You must choose age!";
        ddlAge.nextElementSibling.classList.add('custome-color');
        }else{
            ddlAge.nextElementSibling.classList.add('hide');
            ddlAge.nextElementSibling.innerHTML="";
            ddlAge.nextElementSibling.classList.remove('custome-color');
        }
        let genderSelected = document.querySelector('input[name="btnGender"]:checked');
        let errorGender=gender.parentElement.querySelector('.error');
        if(genderSelected===null){
            errorGender.classList.remove('hide');
            errorGender.innerHTML="You must choose gender!";
            errorGender.classList.add('custome-color');
        }
        else{
            errorGender.classList.add('hide');
            errorGender.innerHTML="";
            errorGender.classList.remove('custome-color');
        }
        if(objNote.value.trim()=== ""){
            objNote.nextElementSibling.classList.remove('hide');
            objNote.nextElementSibling.innerHTML="You must enter a message";
            objNote.nextElementSibling.classList.add('custome-color');
        }
        else{
            objNote.nextElementSibling.classList.add('hide');
            objNote.nextElementSibling.innerHTML="";
            objNote.nextElementSibling.classList.remove('custome-color');
        }
    });
    

}
function formValidation(re,obj,message){
    let error = obj.parentElement.querySelector('.error');
    
    if(!re.test(obj.value)){
        error.classList.remove('hide');
        error.innerHTML=message;
        error.classList.add('custome-color');
    }
    else{
        error.classList.add('hide');
        error.innerHTML="";
        error.classList.remove('custome-color');
    }
}