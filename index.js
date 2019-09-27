const mildPranks = ["PALMS DOWN - Tell a friend that you know a great trick. Put your hand palm-down on the table and balance a full glass of liquid) on the back of your hand. Bet your friend that they can’t balance a glass on both hands at once (help your friend to put them in place). As soon as you have the glasses balanced on the prospects hands, stand up and walk out. They will be trapped and will have to spill to escape.","SNAKE! - All you need is a rubber snake and some fishing line. Tie the fishing line around the snake and then attach the other end of the line to the inside of a cupboard or anything that opens and closes. Set it up so that when they open the door/cupboard the snake will jump out.","SPRAY - Stick some duct tape on the nozzle of a kitchen sink or bathroom tap - leave a little gap towards the front where someone will stand!","DUAL REMOTE - Spend the money to get a second matching or dual remote. Change channels while they are watching. The secret to this prank is to not overuse it. If you use it in small doses you can carry this one on for months not just on April Fools Day."," SMALL SHOES - Stuff some cotton wool into the toes of his favorite shoes. He will think his feet grew or his shoes shrank.","MESSAGE - Change your phone message on April Fools Day: record your voice saying 'Hello. (pause) Hello? (another pause) Is anyone there??' After another pause.","WEIGHT ISSUE - If you can get the exact same clothes as the target except get them a size smaller - Swap with the original!","FAKE CAKE - Take a round car-washing sponge, or a piece of craft foam, and decorate it with cake frosting, sprinkles, etc. Then try not to laugh when the victim struggles to cut themselves some cake.","EGGS - Try this prank on someone who drinks Guinness or any other beer that is difficult to see thru. All you have to do is crack open an egg (only the yellow part) and drop it in their drink when they aren't paying attention","OH DEAR - Fold the flat sheet on the bed double and tuck in securely on the sides, when the person get into bed they can't go further than half way!"]

const interPranks = ["Toilet Paper: Put itching powder on all the toilet rolls.","Hot Peppers: Get some really hot peppers, Cut them up, Smear pepper juice all over the door knobs. Watch victims rub their eyes and make it worse.","Fill a donut with ketchup or mayonnaise instead of jelly or cream. Go to a donut shop and order a few jelly or cream filled donuts. When you get home, gently squeeze out the filling and throw it away. Put a little ketchup or mayonnaise into a large ziplock bag, snip off one of the bottom corners of the bag, and refill the donut. Then, just wait until your victim picks up a donut and bites into it!","Make “orange juice” using the powdered cheese from mac and cheese. Take out the powdered cheese from a box of macaroni and cheese, and mix it with water. You can use a large juice pitcher, or just mix it in a large glass. Either leave the “juice” in the fridge for someone to find and drink on their own, or bring them a glass yourself.","When you’re in a bathroom stall take a milk chocolate candy bar with you and when someone is next to you, squish it in your hand and reach under the stall wall and say “You got any more toilet paper over there, This side’s completely out.","Put pop rocks in your friends cat litter and watch his cat shriek with every piss. Pee will go everywhere.","Salty Drink: For this funny prank take your friend’s drink, preferably a non fizzy drink, and load it with salt. For more fun challenge him to a chugging contest.","Zip Ties: Bring some zip ties along with you to school, work, etc. When your friend isn\’t looking, zip tie their bag to a table or chair. Preferably one that is attached to the ground or very heavy.","Peanut: Use your cell phone to film yourself sucking the chocolate from chocolate peanuts and spit every peanut in a bowl (if you don’t want your friend to really eat these nasty ass peanuts, just give him regular peanuts). Now give the bowl of peanuts to your friends, when they’ve eaten half the bowl, show them the video!","Toothbrush:  Dilute sour candies (warheads, etc) in a small amount of water. Then soak your roommates toothbrush in it overnight. When he wakes up and brushes his teeth he will have one hell of a surprise. You can also use cayenne pepper or extremely hot chili peppers."]

const meanPranks = ["Cement Doors Shut: Get some quick drying cement. Find all the entrance doors that open outward. Cement the bottom of the doors shut.","Boys / Girls (optional). Go into a Gay bar. Put your X’s number on the Bioys / Girls bathroom wall.","Shampoo and Conditioner:  Put hair removal cream in shampoo or conditioner. For better results mix in shampoo with the hair removal cream so the bad smell doesn’t ruin the prank.","Poo Poo: If someone upsets you, get a bit of dog crap, (the fresher the better) and stick it under their car door handle, so it can’t be seen, when they go to open the door they get a handful of sh*t.","Get an ice tray and make a few ice cubes with bugs in it. Ask your friend if he wants a drink and put those ice cubes in the drink.","The Garbage Can Prank This is one of the great pranks to pull on your neighbors. Take a garbage can and fill it with water. Much better if it is filled with muddy water. Now, place the can leaning on the door of your targeted house. Knock and run to hide yourself. Now, watch the fun as your neighbor opens the door and gets his house flooded with dirty water. A piece of advice, don't get caught while doing it.","Take some laxatives and put in the coffee machine of your office. Wait and watch the frenzy it creates.","If they use Google Chrome, install the extension “nCage It”. It changes EVERY image (including google logo, thumbnails, etc.) into randomly generated pics/gifs of Nicolas Cage. The best part? There is an option to hide the extension from the task bar. They would actually have to go into their internet options and find it under the “extensions” tab just to turn it off. ","Freeze mashed potatoes. Scoop frozen mashed onto cones. Serve the kids vanilla ice cream cones for dessert.","Got some cement laying around? Chuck it in their washing machine."]

const coworkerPranks = ["It happens on accident all the time, but now you can make it happen on purpose. Find a door that you can push or pull open. If the door already has a label indicating that you should either push or pull then just slap an official sticker over it saying the opposite. Best enjoyed in a place that gets busy.","Everyone loves sweetly filled donuts, but not everything is as it seems. Take a jar of mayo and a baster. Remove the filling from inside the donuts and then use the baster to insert a new and not so sweet filling. Watch as your victim is instantly deceived by such a sweet offering.","Doesn't get any more simple than adding salt to someone's beverage. Patience is key, as soon as they leave their beverage vulnerable then add a packet of salt. You can continue to add packets of salt until they notice and don't forget to count how many packets it takes.","If you're bored and have access to their keyboard then switch a few keys and see how long until they notice. Continue to switch keys until they notice the change. ","It's a simple classic, just take one of their possessions (preferably something they don't see right away) and place in a mold with jello. Then just put that newly molded possession back where you found it and wait for a classic reaction."]


// Button Variables
const mildBtn = document.getElementById('mild')
const mediumBtn = document.getElementById('medium')
const hotBtn = document.getElementById('hot')
const btnResponse = document.querySelector('.btn-response')
// Form Variables
const customizeBtn = document.querySelector('.custom-btn')
const customizeDiv = document.querySelector('.form')
const generateBtn = document.querySelector('.generate-btn')
const friendBox = document.querySelector('.friends')
const coworkerBox =  document.querySelector('.coworker')
const familyBox = document.querySelector('.family')
const strangerBox = document.querySelector('.stranger')


// Button Logic

mildBtn.addEventListener('click', (e) =>{
    if (document.querySelector('.prankContent')){
        document.querySelector('.prankContent').remove()
    }

    let ranNum = Math.floor(Math.random() * 9)

    let newDiv = document.createElement('div')
    newDiv.classList.add('prankContent')
    newDiv.innerHTML = mildPranks[ranNum]
    btnResponse.appendChild(newDiv)

 

})

mediumBtn.addEventListener('click', (e) =>{
    if (document.querySelector('.prankContent')){
        document.querySelector('.prankContent').remove()
    }
    let ranNum = Math.floor(Math.random() * 9)
    
    let newDiv = document.createElement('div')
    newDiv.classList.add('prankContent')
    newDiv.innerHTML = interPranks[ranNum]
    btnResponse.appendChild(newDiv)
 

})

hotBtn.addEventListener('click', (e) =>{
    if (document.querySelector('.prankContent')){
        document.querySelector('.prankContent').remove()
    }
    let ranNum = Math.floor(Math.random() * 9)
    
    let newDiv = document.createElement('div')
    newDiv.classList.add('prankContent')
    newDiv.innerHTML = meanPranks[ranNum]
    btnResponse.appendChild(newDiv)

 

})


// Form Logic

customizeBtn.addEventListener('click', (e) => {

    console.log(customizeDiv)

    if (customizeDiv.style.display === 'flex'){
        customizeDiv.style.display = 'none'
    }else{
        customizeDiv.style.display = 'flex'
    }
})

generateBtn.addEventListener('click', (e) =>{
    
})