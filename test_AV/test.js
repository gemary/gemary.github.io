var word = "Hello ,Goodbye, Whisper,Sleep ,Lie ,See ,Girl ,Beautiful,Want, Eyes, Lip , Long,Short, Tall,Here,There,Which ,Where,Sentence,Lesson,Husband, Rainbow,Daddy,Please,Darling,Merry,Horn,Sing,Stand,Look,Five,Lie,Four,Hold,Play,Torn, Life,Lover ,";
var count = 0;
var t = "True",f = "false";
function check() {
   for(var i = 0 ; i < word.length;i++)
   {
        var values = document.getElementById("word").value;
        if(values != ""  && values.length > 2 )
        {
            if(word.search(values) > -1)
            {
                document.getElementById("result").innerHTML = t;
                document.getElementById("result").style.color = "green";
                count +=1;
                document.getElementById("word").value = "";
                break;
            
            }
            else if(word[i] !=values)
            {
                document.getElementById("result").innerHTML = f;
                document.getElementById("result").style.color = "red";
                count -=1;  
                document.getElementById("word").value = "";
                break;
            }
            
        }
        else
        {

        }
    }  
    
    document.getElementById("total").innerHTML = count;
}