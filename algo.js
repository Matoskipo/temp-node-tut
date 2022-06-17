iiiii::var mostWordsFound = function(sentences) {
    let maximumCount = sentences[0].split(" ").length
    for(let i = 1; i < sentences.length; i++)
        {
            let tempCount = sentences[i].split(" ").length;
            if(tempCount > maximumCount)
                {
                    maximumCount = tempCount;
                }
        }
    return maximumCount;
};
console.log(mostWordsFound(["alice and bob love leetcode", 
"i think so too", "this is great thanks very much"]))
