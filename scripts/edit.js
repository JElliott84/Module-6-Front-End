addEventListener("DOMContentLoaded", async function(){
    document.querySelector("update_song_button").addEventListener("click", updateSong)
    const urlParams = new URLSearchParams(window.location.search)
    const songID = urlParams.get("id")
    const response = await this.fetch("http://localhost:3000/api/songs/" + songID)
    
    if (response.ok){
        let song = await response.json()
        document.querySelector("#songID").value = song._id
        document.querySelector("#title").value = song.title
        document.querySelector("#artist").value = song.artist
        document.querySelector("#album").value = song.album
        document.querySelector("#release").value = song.release_date.substring(0,10)
        document.querySelector("#genre").value = song.genre
        document.querySelector("#popularity").value = song.popularity
    }
async function updateSong(){
    const songID = document.querySelector("#songID").value
    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        album: document.querySelector("#album").value,
        release_date: document.querySelector("#release").value,
        genre: document.querySelector("#genre").value,
        popularity: document.querySelector("#popularity").value
    }
    const response = await this.fetch("http://localhost:3000/api/songs/" + songID, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
    })
    if (response.ok){
        alert("Song updated successfully!")
        window.location.href = "index.html"
    } else {
        alert("Failed to update song")
    }
}})
