const emojis = ['🍈','🍉','🍇','🍊','🥥','🍒','🍓','🥝','🍈','🍉','🍇','🍊','🥥','🍒','🍓','🥝']
    
let emoji = emojis.sort(()=>(Math.random()>.5)?2 : -1);
for(let i=0; i<emoji.length; i++){
  let Box = document.createElement('div')
  Box.className = 'item';
  Box .innerHTML = emoji[i];

  Box.onclick = function(){
    this.classList.add('boxOpen')
     setTimeout(function (){
      if(document.querySelectorAll('.boxOpen').length>1){
      if(document.querySelectorAll('.boxOpen')[0].innerHTML==
      document.querySelectorAll('.boxOpen')[1].innerHTML){
      document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
      document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
      document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
      document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
    
    if(document.querySelectorAll('.boxMatch').length==emojis.length){
      alert ('Congratulations')
  }
} else{
      document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
      document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')  
}
}
},500)

}
  document.querySelector('.game').appendChild(Box);
}