let randomNumber = Math.floor(Math.random() * 8);
    
    
let Quote = '';
let imageChoice = '';
if (randomNumber === 0) {
    Quote = '"Plans are nothing; planning is everything."'


  imageChoice = 'img1.jpg'
} else if (randomNumber === 1) {
    Quote = '"Leadership is the art of getting someone else to do something you want done because he wants to do it."-Dwight D. Eisenhower';
  imageChoice = 'img7.png'
} else if (randomNumber === 2) {
    Quote = '"In preparing for battle I have always found that plans are useless, but planning is indispensable." -Dwight D. Eisenhower';
  imageChoice = 'istockphoto-1162198273-612x612.jpg'
} else if (randomNumber === 3) {
    Quote = '"A people that values its privileges above its principles soon loses both."-Dwight D. Eisenhower';
  imageChoice = 'img4.png';
} else if (randomNumber === 4) {
    Quote = '"The supreme quality for leadership is unquestionably integrity."-Dwight D. Eisenhower';
  imageChoice = 'img6.jpg';
} else if (randomNumber === 5) {
    Quote = '"We will bankrupt ourselves in the vain search for absolute security."-Dwight D. Eisenhower';
  imageChoice = 'img5.jpg';
} else if (randomNumber === 6) {
    Quote = '"The world moves, and ideas that were once good are not always good."-Dwight D. Eisenhower';
  imageChoice = 'img2.png';
} else if (randomNumber === 7) {
    Quote = '"History does not long entrust the care of freedom to the weak or the timid."-Dwight D. Eisenhower';
  imageChoice = 'img1.jpg';
}

document.getElementById('text').innerHTML = Quote;


