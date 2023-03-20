class DogProfile {
    constructor(data) {
        Object.assign(this, data)
    }

    getProfileHtml() {
        const {name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this
        let stampHtml = ''
        if (hasBeenLiked) {
            stampHtml = `<img class="stamp" src="/images/badge-like.png" alt="">`
        } else if (hasBeenSwiped && !hasBeenLiked) {
            stampHtml = `<img class="stamp" src="/images/badge-nope.png" alt="">`
        }

        return `
            <div class="dog-pic" style="background-image: url(${avatar})">
                ${stampHtml}
                <div class="dog-info">
                    <h2>${name}, ${age}</h2>
                    <p>${bio}</p>
                </div>
            </div>`
    }
}

export {DogProfile}