// Create the Dog class here

export class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    renderDogInfo = function() {
        return `
            <h1 class="introduction">${this.name}, ${this.age}</h1>
            <h3 class="description">${this.bio}</h3>
        `
    }
    
    renderDogAvatar = function() {
        return `
            <span class="hero-dog"><img src="${this.avatar}"></span>
        `
    }
    
    renderAcceptDogBadge = function() {
        this.hasBeenSwiped = true
        this.hasBeenLiked = true
        return `
            <span><img src="images/badge-like.png"></span>
        `
    }
    
    renderRejectDogBadge = function() {
        this.hasBeenSwiped = true
        return `
            <span><img src="images/badge-nope.png"></span>
        `
    }
}

// export default Dog