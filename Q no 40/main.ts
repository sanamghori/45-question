
/*Question no 40
Album: Write a function called make_album() that builds a Object describing a music
album. The function should take in an artist name and an album title, and it should
return a Object containing these two pieces of information. Use the function to make
three dictionaries representing different albums. Print each return value to show
that Objects are storing the album information correctly. Add an optional paramete
to make_album() that allows you to store the number of tracks on an album. If the
calling line includes a value for the number of tracks, add that value to the
album’s Object. Make at least one new function call that includes the number
of tracks on an album.*/

function make_album(artist_name:string,album_title:string,tracks?:number): {artist:string; tital:string;tracks?:number}{
const album={
    artist:artist_name,
    tital:album_title,
    tracks:tracks
};
return album;
}
const album1 =make_album("asim azhar","noor");
console.log("title:"+album1.tital +", artist:"+ album1.artist);
const album2 =make_album("atif aslam","jalpari",4);
console.log("tital:"+ album2.tital  +",artist:" +  album2.artist   + "  tracks",4
);
const album3=make_album("Ali zafar","jhoom");
console.log("title:" + album3.tital   + "  artist: " +  album3.artist);
