function submitHandle(event){
    const form = event.target;
    const numberOfCoins = form.numberOfCoins.valueAsNumber;
    const typeOfCoins = form.typeOfCoins.value;
    if (typeOfCoins === '') return;
    console.log(numberOfCoins, typeOfCoins);
    event.preventDefault();
    const containerofCoins = document.querySelector("#container")
    for (
        let i = 0; i < numberOfCoins; i++
    ){
        const newCoin = document.createElement("button");
        newCoin.className = typeOfCoins;
        newCoin.innerText = typeOfCoins;
        newCoin.addEventListener("click", function (event){
            containerofCoins.removeChild(event.target)
        })
        containerofCoins.appendChild(newCoin);
    }

}