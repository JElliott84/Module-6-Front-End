addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#addBtn").addEventListener("click", addSong)
})

// add the sgon to the database
async function addSong(){
//create a song object based on the form that the user fills out to make life easier.
    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        album: document.querySelector("#album").value,
        release_date: document.querySelector("#release_date").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : []
    }

    const response = await fetch("http://localhost:3000/api/songs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
    })
    if (response.ok){
        const resukts = await response.json()
        alert("Song added successfully. ID is" + resukts.id)

        document.querySelector("Form").requestFullscreen()
    } else {
        document.querySelector("#error").innerHTML = "Cannot add song. Please try again."

    }
}
