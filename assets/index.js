  const showMoreSongsButton = document.getElementById("showMoreSongs");
        const moreSongsList = document.getElementById("moreSongs");
    
        showMoreSongsButton.addEventListener("click", function() {
            if (moreSongsList.classList.contains("hide")) {
                moreSongsList.classList.remove("hide");
                showMoreSongsButton.textContent = "Click here to hide extra songs";
            } else {
                moreSongsList.classList.add("hide");
                showMoreSongsButton.textContent = "Click here to see more songs";
            }
        });

    const showMoreAlbumsButton = document.getElementById("showMoreAlbums");
    const moreAlbumsList = document.getElementById("moreAlbums");

    showMoreAlbumsButton.addEventListener("click", function() {
        if (moreAlbumsList.classList.contains("hide")) {
            moreAlbumsList.classList.remove("hide");
            showMoreAlbumsButton.textContent = "Click here to hide extra albums";
        } else {
            moreAlbumsList.classList.add("hide");
            showMoreAlbumsButton.textContent = "Click here to see more albums";
        }
    });

        const showMoreArtistsButton = document.getElementById("showMoreArtists");
    const moreArtistsList = document.getElementById("moreArtists");

    showMoreArtistsButton.addEventListener("click", function() {
        if (moreArtistsList.classList.contains("hide")) {
            moreArtistsList.classList.remove("hide");
            showMoreArtistsButton.textContent = "Click here to hide extra artists";
        } else {
            moreArtistsList.classList.add("hide");
            showMoreArtistsButton.textContent = "Click here to see more artists";
        }
    });
    const audioElements = document.querySelectorAll('audio');

audioElements.forEach(audio => {
  audio.addEventListener('play', () => {
    setTimeout(() => audio.pause(), 46000); // 46 seconds
  });
});

const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
document.addEventListener("DOMContentLoaded", function() {
    const albumHeaders = document.querySelectorAll('.album-header');
    albumHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const albumItem = this.parentElement;
            albumItem.classList.toggle('active');
        });
    });
});
function showFullImage(imageContainer) {
    const imageUrl = imageContainer.querySelector('img').src;
    const fullImageContainer = document.createElement('div');
    fullImageContainer.classList.add('full-image-container');
    fullImageContainer.innerHTML = `
        <div class="close-button" onclick="closeFullImage(this.parentElement)">X</div>
        <img src="${imageUrl}" alt="Full Image">
    `;
    document.body.appendChild(fullImageContainer);
}

function closeFullImage(fullImageContainer) {
    fullImageContainer.remove();
};
