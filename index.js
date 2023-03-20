import { dogsArray } from "./data.js"
import { DogProfile } from "./DogProfile.js"

const likedProfiles = []
let isLoading = false

const likeBtn = document.getElementById('likeBtn')
const nopeBtn = document.getElementById('nopeBtn')

nopeBtn.addEventListener('click', rejectProfile)
likeBtn.addEventListener('click', likeProfile)

function rejectProfile() {
    if (!isLoading) {
        isLoading = true
        currentProfile.hasBeenSwiped = true
        render()
        setTimeout(() => {
            currentProfile = getNewProfile()
            render()
            isLoading = false
        }, 2000)
    }
}

function likeProfile() {
    if (!isLoading) {
        isLoading = true
        currentProfile.hasBeenLiked = true
        currentProfile.hasBeenSwiped = true
        render()
        setTimeout(() => {
            likedProfiles.push(currentProfile)
            currentProfile = getNewProfile()
            render()
            isLoading = false
        }, 2000)
    }
}

function getNewProfile() {
    const nextProfileData = dogsArray.shift()
    return nextProfileData ? new DogProfile(nextProfileData) : undefined
}

function noProfilesHtml() {
    return `
        <div class="no-profiles">
            <p>No more profiles. Check back later!</p>
        </div>`
}

let currentProfile = getNewProfile()

function render() {
    document.getElementById('profileSection').innerHTML = currentProfile ? currentProfile.getProfileHtml() : noProfilesHtml()
}

render()