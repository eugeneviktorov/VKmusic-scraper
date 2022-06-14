var filter = ["lol-test"];

//scroll down at max

function scrollDown(callback){
let scroll = document.body.scrollHeight;
let lastScroll = scroll;
window.scrollTo(0,document.body.scrollHeight);
requestAnimationFrame(function(){
scroll = document.body.scrollHeight;
if(scroll != lastScroll)
scrollDown(callback);
else callback();
});
}


scrollDown(function(){
var list = document.querySelectorAll(".audio_row");
console.log(`Total songs: ${list.length}`);


function del(obj) {
console.log(`delete ${obj.title}`);
ajax.post("al_audio.php", {
act: "delete_audio",
oid: obj.ownerId,
aid: obj.id,
hash: obj.deleteHash,
restore: 1
});
}


list.forEach(function(el) {
let obj = AudioUtils.asObject(AudioUtils.getAudioFromEl(el));
for (let i in filter)
if (obj.title.includes(filter[i])) {
console.log(`keep ${obj.title}`);
return;
}
del(obj);
});
});