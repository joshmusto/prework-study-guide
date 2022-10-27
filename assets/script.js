var topics=["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random()*topics.length)];

function listTopics(){
    for (var t=0; t<topics.length; t++){
        console.log(topics[t]);
    }
}

function selectTopic(){
    if (randomTopic==='HTML') {
        console.log("Let's study HTML!");
    } else if(randomTopic === 'CSS'){
        console.log("Let's study CSS!");
    } else if(randomTopic==='Git'){
        console.log("Let's study Git!");
    } else if(randomTopic==='JavaScript'){
        console.log("Let's study JavaScript!");
    } else{
        console.log('Please try again!');
    }
}

listTopics();
console.log("Which topic should we study first?");
selectTopic();