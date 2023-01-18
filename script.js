// Slide Tab
let lists = document.querySelectorAll('.sliderTab');
lists.forEach(item => {
    item.addEventListener('click', function(event){
       if(event.target.classList.contains('nav-item')){
         let lastActive = item.querySelector('li.active');
         let newActive = event.target;
         let bgActive = item.querySelector('.bg-active');

         lastActive.classList.remove('active');
         newActive.classList.add('active');
         bgActive.style.left = newActive.offsetLeft + 'px';

         lastActiveContent = item.querySelector('.tab.active');
         newActiveContent = document.getElementById(newActive.dataset.target);
         lastActiveContent.classList.remove('active');
         newActiveContent.classList.add('active');
       }
    })
})

// Show hide password
function changerHide(){
    let password = document.querySelector('.txt-account--input');
    password.type = password.type == 'text' ? 'password' : 'text';
}
// 
function changerShow(){
    let password = document.getElementById('txt-account--input');
    password.type = password.type == 'text' ? 'password' : 'text';
}
// 
let accountOne = document.querySelector('.account_one');
let accounBaneer = document.querySelector('.account_baneer')
let i = 1
accountOne.addEventListener('click', function(){
    // console.log(accounBaneer.clientWidth); 
    
    if(accounBaneer.clientWidth < i){
        document.querySelector('.account_baneer').style.display = 'block' 
    } else{
        document.querySelector('.account_baneer').style.display = 'none' 

    }
})

let bntAccount = document.querySelector('.list-account');
let listSaving = document.getElementById('list_saving');
let btnIcon = document.querySelector('.icon_left');
bntAccount.addEventListener('click', function(){
    listSaving.style.right = '0';
})
btnIcon.addEventListener('click', function(){
    listSaving.style.right = '-120%'
})
// 
let showIforAcc = document.getElementById('show_iforAcc');
let informationStk = document.querySelector('.informationStk');
let infoIcons = document.querySelector('.icon_right');
showIforAcc.onclick = function(){
    informationStk.style.left = '0'
}
infoIcons.onclick = function(){
    informationStk.style.left = '-120%'
    
}

// 
let showTb = document.getElementById('get_account');
showTb.onclick = function(){
    alert('Tính năng đang được cập nhật')
}
