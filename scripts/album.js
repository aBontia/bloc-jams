/* // ALBUM 01
        var albumPicasso = {
                name: 'The Colors',
                artist: 'Pablo Picasso',
                label: 'Cubism',
                year: '1881',
                albumArtUrl: 'assets/images/album_covers/01.png',
                songs: [
                        { name: 'Blue', length: '4:26' },
                        { name: 'Green', length: '3:14' },
                        { name: 'Red', length: '5:01' },
                        { name: 'Pink', length: '3:21' },
                        { name: 'Magenta', length: '2:15' }
                ]
        };
 // ALBUM 02
        var albumMarconi = {
                name: 'The Telephone',
                artist: 'Guglielmo Marconi',
                label: 'EM',
                year: '1909',
                albumArtUrl: 'assets/images/album_covers/20.png',
                songs: [
                        { name: 'Hello, Operator?', length: '1:01' },
                        { name: 'Ring, ring, ring', length: '5:01' },
                        { name: 'Fits in your pocket', length: '3:21' },
                        { name: 'Can you hear me now?', length: '3:14' },
                        { name: 'Wrong phone number', length: '2:15' }
                ]
        };
 // ALBUM 03
        var albumJet = {
                name: 'Juny Matumbo',
                artist: 'Real Steel',
                label: 'US Imports',
                year: '2015',
                albumArtUrl: 'assets/images/album_covers/21.png',
                songs: [
                        { name: 'Sick of it All', duration: '3:33' },
                        { name: 'Nephra Titty', duration: '3:01' },
                        { name: 'Box O Balls', duration: '4:21'},
                        { name: 'Ball Swag Boogie', duration: '3:24' },
                        { name: 'Hand O Job', duration: '3:15'},
                        { name: 'Clap Trap Keeper', duration: '2:45'}
                ]
        };
*/

        var getSongNumberCell = function(number) {
                return $('.song-item-number[data-song-number="' + number + '"]');
        };

        var createSongRow = function(songNumber, songName, songLength) {
                var template =
                  '<tr class="album-view-song-item">'
                + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber
                + '</td>'
                + '  <td class="song-item-title">' + songName + '</td>'
                + '  <td class="song-item-duration">' + songLength + '</td>'
                + '</tr>'
                ;
//console.log(template);
//return $(template);
                var $row = $(template);

                var clickHandler = function() {
                        var songNumber = parseInt($(this).attr('data-song-number'));

                        if (currentlyPlayingSongNumber !== null) {
// Revert to song number for currently playing song because user started playing new song.
                                var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
                                currentlyPlayingCell.html(currentlyPlayingSongNumber);
                        }
                        if (currentlyPlayingSongNumber !== songNumber) {
// Switch from Play -> Pause button to indicate new song is playing.
                                $(this).html(pauseButtonTemplate);
                                setSong(songNumber);
                                currentSoundFile.play();
                                updatePlayerBarSong();
                        } else if (currentlyPlayingSongNumber === songNumber) {
// Switch from Pause -> Play button to pause currently playing song.
                                /*$(this).html(playButtonTemplate);
                                $('.main-controls .play-pause').html(playerBarPlayButton);
                                currentlyPlayingSongNumber = null;
                                currentSongFromAlbum = null;*/
                                if (currentSoundFile.isPaused()) {
                                        $(this).html(pauseButtonTemplate);
                                        $('.main-controls .play-pause').html(playerBarPauseButton);
                                        currentSoundFile.play();
                                        } else {
                                                $(this).html(playButtonTemplate);
                                                $('.main-controls .play-pause').html(playerBarPlayButton);
                                                currentSoundFile.pause();
                                            }
                                        }
                };
                var onHover = function(event) {
                        var songNumberCell = $(this).find('.song-item-number');

                        if (songNumber !== currentlyPlayingSongNumber) {
                                songNumberCell.html(playButtonTemplate);
                        }
                };

                var offHover = function(event) {
                        var songNumberCell = $(this).find('.song-item-number');
                        var songNumber = parseInt(songNumberCell.attr('data-song-number'));

                        if (songNumber !== currentlyPlayingSongNumber) {
                                songNumberCell.html(songNumber);
                        }
                };
// #1
                $row.find('.song-item-number').click(clickHandler);
// #2
                $row.hover(onHover, offHover);
// #3
                return $row;
        };
        var setSong = function(songNumber) {
                if (currentSoundFile) {
                        currentSoundFile.stop();
                }

                currentlyPlayingSongNumber = parseInt(songNumber);
                currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
                currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
                        formats: [ 'mp3' ],
                        preload: true
                });
                setVolume(currentVolume);
        };

        var setVolume = function(volume) {
                if (currentSoundFile) {
                        currentSoundFile.setVolume(volume);
                }
        };

        var setCurrentAlbum = function(album) {
//----Excersize Ch32 Add this------------
                currentAlbum = album;

                var $albumTitle = $('.album-view-title');
                var $albumArtist = $('.album-view-artist');
                var $albumReleaseInfo = $('.album-view-release-info');
                var $albumImage = $('.album-cover-art');
                var $albumSongList = $('.album-view-song-list');

                $albumTitle.text(album.name);
                $albumArtist.text(album.artist);
                $albumReleaseInfo.text(album.year + ' ' + album.label);
                $albumImage.attr('src', album.albumArtUrl);

                $albumSongList.empty();

                for (i = 0; i < album.songs.length; i++) {
                        var $newRow= createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
                        $albumSongList.append($newRow);
                }
        };

        var updatePlayerBarSong = function() {
                $('.currently-playing .song-name').text(currentSongFromAlbum.name);
                $('.currently-playing .artist-name').text(currentAlbum.artist);
                $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.artist);

                $('.main-controls .play-pause').html(playerBarPauseButton);
        };

        var trackIndex = function(album, song) {
                return album.songs.indexOf(song);
        };

//-----NEXT/PREVIOUS SONG---------------
        var nextSong = function() {
                var getLastSongNumber = function(index) {
                        return index == 0 ? currentAlbum.songs.length : index;
                };

                var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
                currentSongIndex++;

                if (currentSongIndex >= currentAlbum.songs.length) {
                        currentSongIndex = 0;
                }

                setSong(currentSongIndex + 1);
                currentSoundFile.play();
                currentSongFromAlbum = currentAlbum.songs[currentSongIndex];

                $('.currently-playing .song-name').text(currentSongFromAlbum.name);
                $('.currently-playing .artist-name').text(currentAlbum.artist);
                $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.name);
                $('.main-controls .play-pause').html(playerBarPauseButton);

                var lastSongNumber = getLastSongNumber(currentSongIndex);
                var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
                var $lastSongNumberCell = getSongNumberCell(lastSongNumber);

                $nextSongNumberCell.html(pauseButtonTemplate);
                $lastSongNumberCell.html(lastSongNumber);
        };

        var previousSong = function() {
                var getLastSongNumber = function(index) {
                        return index == (currentAlbum.songs.length - 1) ? 1 : index + 2;
                };

                var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
                currentSongIndex--;

                if (currentSongIndex < 0) {
                        currentSongIndex = currentAlbum.songs.length - 1;
                }

                setSong(currentSongIndex + 1);
                currentSoundFile.play();
                currentSongFromAlbum = currentAlbum.songs[currentSongIndex];

                $('.currently-playing .song-name').text(currentSongFromAlbum.name);
                $('.currently-playing .artist-name').text(currentAlbum.artist);
                $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.name);
                $('.main-controls .play-pause').html(playerBarPauseButton);

                var lastSongNumber = getLastSongNumber(currentSongIndex);
                var $previousSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
                var $lastSongNumberCell = getSongNumberCell(lastSongNumber);

                $previousSongNumberCell.html(pauseButtonTemplate);
                $lastSongNumberCell.html(lastSongNumber);
        };
//------------Ch33-Assn----

        var togglePlayFromPlayerbar = function() {
                var $currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
                if (currentSoundFile.isPaused()) {
                        $currentlyPlayingCell.html(pauseButtonTemplate);
                        $(this).html(playerBarPauseButton);
                        currentSoundFile.play();
                } else if (currentSoundFile) {
                        $currentlyPlayingCell.html(playButtonTemplate);
                        $(this).html(playerBarPlayButton);
                        currentSoundFile.pause();
                }
        };




                var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
                var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
//----Excersize Ch32 Adds this------------
                var playerBarPlayButton = '<span class="ion-play"></span>';
                var playerBarPauseButton = '<span class="ion-pause"></span>';
//----Excersize Ch32 Addsthis------------
                var currentAlbum = null;
                var currentlyPlayingSongNumber = null;
                var currentSongFromAlbum = null;
                var currentSoundFile = null;
                var currentVolume = 80;


                var $previousButton = $('.main-controls .previous');
                var $nextButton = $('.main-controls .next');
                var $playPauseButton = $('.main-controls .play-pause');


                $(document).ready(function() {
                        setCurrentAlbum(albumPicasso);
                        $previousButton.click(previousSong);
                        $nextButton.click(nextSong);
                        $playPauseButton.click(togglePlayFromPlayerbar);

                });

