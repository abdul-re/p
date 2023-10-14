const schedule = document.querySelector("#schedule")

function generate() {

    const title = document.querySelector('#title')
    const link = document.querySelector('#link')
    const league = document.querySelector('#league').value

    const leaguetop = document.querySelector('#leaguetop')
    const leaguebottom = document.querySelector('#leaguebottom')

    leaguetop.innerHTML = `<<================== ${league.toUpperCase()} =================>>`
    leaguebottom.innerHTML = `<<================== ${league.toUpperCase()} =================>>`

    schedule.innerHTML += title.value + " \n " + link.value + "<br/>" + ' \n \n'

    title.value = ""
    link.value = ""

}

function copy() {
    const display = document.querySelector("#display")

    navigator.clipboard.writeText(display.textContent)
}
