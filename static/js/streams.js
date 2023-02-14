const APP_ID = '6d928d60189c4cb19dc28cae844bf1af'
const TOKEN = '007eJxTYHg/c+OjrL3PTtVHce2+ZMNy4MKRC9bhUY/9mDmiehN6g44pMJilWBpZpJgZGFpYJpskJxlapiQbWSQnplqYmCSlGSamna59nNwQyMiwmf8IAyMUgvgsDLmJmXkMDADvLSGp'
const CHANNEL = 'main'
let UID;

const client = AgoraRTC.createClient({mode:"rtc", codec:"vp8"})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
                    <div class="username-wrapper"><span class="user-name">My name</span></div>
                    <div class="video-player" id="user-${UID}"></div>
                  </div>`

    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0], localTracks[1]])
    }

joinAndDisplayLocalStream()