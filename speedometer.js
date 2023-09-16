const speedElement = document.querySelector("#speed")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

startBtn.addEventListener("click", () => {

    function handleSeccess(position) {
        speedElement.innerText = position.coords.speed ? position.coords.speed * 3.6 : 0

    }

    function handError(error) {
        console.log(error.msg)
    }
    
    const options = {enableHighAccuracy: true}
    navigator.geolocation.watchPosition(handleSeccess, handError, options)

    startBtn.classList.add("d-none")
    stopBtn.classList.remove("d-none")

})

stopBtn.addEventListener("click", () => {

    startBtn.classList.remove("d-none") 
    stopBtn.classList.add("d-none")
    
})