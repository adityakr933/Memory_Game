document.addEventListener(`DOMContentLoaded`,()=>{
    const cardArray=[
        {
            name:'fries',
            img:'images/fries.jpeg'
        },
        {
            name:'cheeseburger',
            img:'Images/cheeseburger.jpeg'
        },
        {
            name:'ice-cream',
            img:'Images/ice-cream.jpeg'
        },
        {
            name:'pizza',
            img:'Images/pizza.jpeg'
        },
        {
            name:'milkshake',
            img:'Images/milkshake.jpeg'
        },
        {
            name:'hotdog',
            img:'Images/hotdog.jpeg'
        },
        {
            name:'fries',
            img:'Images/fries.jpeg'
        },
        {
            name:'cheeseburger',
            img:'Images/cheeseburger.jpeg'
        },
        {
            name:'ice-cream',
            img:'Images/ice-cream.jpeg'
        },
        {
            name:'pizza',
            img:'Images/pizza.jpeg'
        },
        {
            name:'milkshake',
            img:'Images/milkshake.jpeg'
        },
        {
            name:'hotdog',
            img:'Images/hotdog.jpeg'
        },
    ] 

    cardArray.sort(()=>0.5-Math.random()) 

    const grid=document.querySelector('.grid')
    const resultDisplay=document.querySelector('#result')
    let cardsChosen=[]
    let cardsChosenId=[] 
    let cardsWon=[]

    //create your board 

    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            const card=document.createElement('img') 
            card.setAttribute ('src','Images/blank.jpeg') 
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    } 

    //check for matches  

      function checkForMatch(){
        const cards=document.querySelectorAll('img')
        const optionOneId=cardsChosenId[0] 
        const optionTwoId=cardsChosenId[1] 

        if(optionOneId==optionTwoId){
            cards[optionOneId].setAttribute('src','Images/blank.jpeg') 
            cards[optionTwoId].setAttribute('src','Images/blank.jpeg') 
            alert('You have clicked the same image!')
        } 
        else if(cardsChosen[0]===cardsChosen[1]){ 
            alert('you found a match!')

           cards[optionOneId].setAttribute('src','Images/white.jpeg') 
           cards[optionTwoId].setAttribute('src','Images/white.jpeg') 
           
           cards[optionOneId].removeEventListener('click',flipCard)
           cards[optionTwoId].removeEventListener('click',flipCard) 
           cardsWon.push(cardsChosen)
        }else{ 
            cards[optionOneId].setAttribute('src','Images/blank.jpeg') 
            cards[optionTwoId].setAttribute('src','Images/blank.jpeg') 
            alert('Sorry,try again!!!')

        } 
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.textContent=cardsWon.length 

        if(cardsWon.length===cardArray.length/2){ 
            resultDisplay.textContent='Congratulations! you found them all!!'

        }
    
    } 

    //flip ur cards 

    function flipCard(){
        let cardId=this.getAttribute('data-id')

        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId) 
        this.setAttribute('src',cardArray[cardId].img) 
        if(cardsChosen.length===2){
            setTimeout(checkForMatch,500)
        }
    } 

    createBoard()
})