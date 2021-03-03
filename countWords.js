
const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Javascript if you do not love something which can give life to your appication what else can you love.';
function countWords(paragraph){
paragraph = paragraph.replace(/(^\s*)|(\s*$)/gi, "");
paragraph = paragraph.replace(/[ ]{2,}/gi, " ");
paragraph = paragraph.replace(/\n /, "\n");
return paragraph.split(' ').length;
}
//document.write(countWords());
console.log(countWords(paragraph, 'love', 'you'));

