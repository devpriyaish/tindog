// Remember to import the data and Dog class!
import {dogs} from './data.js'
import {Dog} from './Dog.js'

const dogInfo = document.querySelector('.dog-info')
const badge = document.querySelector('.badge')
const spaceUtility = document.querySelector('.space-utility')
const crossBtn = document.querySelector('.cross-btn')
const heartBtn = document.querySelector('.heart-btn')
let dog = new Dog(dogs[0])

function renderDogBadge() {
        dogs.shift()
        if (dogs.length) {
            setTimeout(function(){
                dog = new Dog(dogs[0])
                dogInfo.innerHTML = dog.renderDogInfo()
                spaceUtility.innerHTML = dog.renderDogAvatar()
                badge.innerHTML = ''
                crossBtn.disabled = false;
                heartBtn.disabled = false;
            }, 1000)
        }
        else {
            setTimeout(function() {
                crossBtn.disabled = false;
                heartBtn.disabled = false;
                document.querySelector('main').innerHTML = `
                    <h1> Sorry, <h1>
                    <h2> No more Dogs for now </h2>
                    <h3> Do come tomorrow for New Dogs <h3>
                `
            }, 1500)   
        }
    }

crossBtn.addEventListener('click', function() {
    badge.innerHTML = dog.renderRejectDogBadge()
    crossBtn.disabled = true;
    renderDogBadge()
    
})

heartBtn.addEventListener('click', function() {
    badge.innerHTML = dog.renderAcceptDogBadge()
    heartBtn.disabled = true;
    renderDogBadge()
})

dogInfo.innerHTML = dog.renderDogInfo()
spaceUtility.innerHTML = dog.renderDogAvatar()

// console.log(window.screen.height)
// console.log(window.screen.width)