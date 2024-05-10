// creating function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// creatin three function and creating three variables with different values 
var album1 = make_album("Talha", "karachi Chal", 3.5);
var album2 = make_album("Wqaqr", "Pakistan Zindabad", 2);
var album3 = make_album("Zain", "TU jaanai Naaa", 8.5);
// printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
