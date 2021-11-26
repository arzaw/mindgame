document.addEventListener('DOMContentLoaded',()=>{
    
    const cardArray=[
        {
            name:'fries',
            img:'assets/fries.png'
        },
        {
            name:'cheeseburger',
            img:'assets/cheeseburger.png'
        },
        {
            name:'hotdog',
            img:'assets/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'assets/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'assets/milkshake.png'
        },{
            name:'pizza',
            img:'assets/pizza.png'
        },
        {
            name:'fries',
            img:'assets/fries.png'
        },
        {
            name:'cheeseburger',
            img:'assets/cheeseburger.png'
        },
        {
            name:'hotdog',
            img:'assets/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'assets/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'assets/milkshake.png'
        },{
            name:'pizza',
            img:'assets/pizza.png'
        }
    ]

    cardArray.sort(()=>0.5-Math.random())
    const grid=document.querySelector('.grid')
    let cardsChosen=[]
    let cardsChosenId=[]
    let cardsWon=[]
    const resultDisplay = document.querySelector('#result')


    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            let card=document.createElement('img')
            card.setAttribute('src','assets/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }

    function checkForMatch(){
        let cards=document.querySelectorAll('img')
        const optionOneId=cardsChosenId[0]
        const optionTwoId=cardsChosenId[1]
        if(cardsChosen[0]===cardsChosen[1]){
            alert('you found a match')
            cards[optionOneId].setAttribute('src', 'assets/white.png')
            cards[optionTwoId].setAttribute('src','assets/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/blank.png')
            cards[optionTwoId].setAttribute('src','assets/blank.png')
            alert('try again')
        }
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.textContent=cardsWon.length
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent="Congratulations! You have got them all"
        }

    }

    function flipcard(){
        let cardId=this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length===2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})