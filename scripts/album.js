// ALBUM 01 
var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubismo Records',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'},
         { title: 'Blue Steel', duration: '3:15'}    
     ]
 };
// ALBUM 02
var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };
// AlBUM 03
var albumJet = {
     title: 'Juny Matumbo',
     artist: 'Real Steel',
     label: 'US Imports',
     year: '2015',
     albumArtUrl: 'assets/images/album_covers/21.png',
     songs: [
         { title: 'Sick of it All', duration: '3:33' },
         { title: 'Nephra Titty', duration: '3:01' },
         { title: 'Box O Balls', duration: '4:21'},
         { title: 'Ball Swag Boogie', duration: '3:24' },
         { title: 'Hand O Job', duration: '3:15'},
         { title: 'Clap Trap Keeper', duration: '2:45'}    
     ]
 }; 





 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
 
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'     
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
     return template;
 };

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(albums) {
     albumTitle.firstChild.nodeValue = album.name;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
         
     albumSongList.innerHTML = '';
     for (i = 0; 1 < albums.songs.length; i ++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
     }
 };
 
console.log(window.onload);
 window.onload = function(albumJet) {
     setCurrentAlbum();
     var albums = [albumPicasso, albumMarconi, albumJet];    
     var index = 1;
     albumImage.addEventListener("click", function(event) {
         console.log('click is working');
         setCurrentAlbum(albums[index]);
         index++;
         if (index == albums.length) {
             index = 0;
          }    
     });
};       

var setCurrentAlbum = function(album) {
     // #1
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };

 var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
 var songRows = document.getElementsByClassName('album-view-song-item');
 var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
     window.onload = function() {   
     setCurrentAlbum(albumJet);

     songListContainer.addEventListener('mouseover', function(event) {
         if (event.target.parentElement.className === 'album-view-song-item') {
              event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
              
         }
             
     });
        for (var i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {  
             this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
         });
     }
 }

         
