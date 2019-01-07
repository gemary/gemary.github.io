var word = " Lesson,Sentence,Husband,Look,Happy,Charming,World,Laugh,Graceful,Knife,Spoon,Hoe,Night,Dark,Giant,Fun,Die,Near,Sorry,Dull,Wise, Burry , Soul,Car ,Sir,Lord,Madam,Thousand,Day,Week,Year,Hour,Wait,Nightmare,Pray,Except,Deep,Daughter,Bright,Pond,Enter,For,Shoulder,Writer,Radio,Bowl,Tomb,Tear,Miss,Sew,Foe,Shelter,Shout,Clear,See,Swim,Wade,Drown,Mountain,Hill,Valley,Tree,SchoolFee,Me,ToSteal,Boycott,Poultry,Cattle,Something,Eat,Bee,Lip,Tongue,Teeth,Exam,Licence,Lovely,Pretty,Lotto,Cook,Wash,WashClothes,Push,Marriage,Single,Foot,Far,Subtract,Divide,Month,Time,Job,Lady,Gentleman,Close,Win,Lose,Leaf,Sun ,Moon,FallDown,Welcome,Invite,Short,Hat,Shoe,Autumn,Summer,Jail,Winter,Duck,Pig,Rich,Poor,Crab,Church,Temple,Aunt,Ant,Uncle,Chair,Pool,Late,Soon,Hospital,Dew,Weary,Exam,Nervous,Mommy,Region,Interupted,Next,NextTo,Coins,Paper,PaperMoney,News,BrothersInLaw,FarmWork,NarrowMinded,OpenHanded,Mean,Still,Skill,Gold,Silver,Crystal,Munia,Kestrel,MigrantKite,Warbler	,Petrel,Stupid,Stir,many,How,Few,TooMuch,Right,Wrong,Chess,Flower,Skin,Morning,King,Queen,Hair,Wander,Red,Yellow,Blue,Green,Purple,Black,White,Brown,Yes,No,Fast,Slow,Sleep,Wake,Hard,Study,Sweet,Candy,Butterfly,River,Sea,Surf,Dirty,Bread,Butter,Doctor,Nurse,Teacher,Mad,EveryWhere,Asong,Sing,Firstly,Biscuit,Can,Please,Iron,Copper,Killer,Kill,Police,Lawyer,Emigrate,Mail,Follow,Shopping,Sale,Space,Hundred,Thousand,Smart,Equation,Television,Tape,Program,Hear,Watch,Electric,Lamp,Praise,Crowd,Hustle,Capital,City,Local,Country,Field,Garden,Moment,Fish,Chicken,Naive,poet,Tall,Short,Elders,Shy,Coarse,ComeOn,GoAway,Pounce,Poem,Strong,Sky,DogTiered,Sky,ShedTears,Fully,Halves,Stay,Leave,Tomorrow,Lotus,Jasmine,Feeling,Camera,Private,Madman,Photo,Animal,Big,Small,Little	,Hello ,Goodbye, Whisper,Sleep ,Lie ,See ,Girl ,Beautiful,Want, Eyes, Lip , Long,Short, Tall,Here,There,Which ,Where,Sentence,Lesson,Husband, Rainbow,Daddy,Please,Darling,Merry,Horn,Sing,Stand,Look,Five,Lie,Four,Hold,Play,Torn, Life,Lover ,";
var count = 0;
var t = "True",f = "Don't Have Or Exsit";
function check() {
   for(var i = 0 ; i < word.length;i++)
   {
        var values = document.getElementById("word").value;
        if(values != "" && values.length > 2 )
        {
            if(word.search(values) > -1 )
            {
                word = word.replace(values,"Null");
                document.getElementById("result").innerHTML = t;
                document.getElementById("result").style.color = "green";
                document.getElementById("word").value = "";
                count +=1;
                break;
            
            }
            else if(word[i] !=values )
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
    
   
}
function result() {
    document.getElementById("total").innerHTML = count;
}