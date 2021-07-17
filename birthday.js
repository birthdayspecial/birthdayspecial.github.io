var button=document.getElementById('btn1');
var button1=document.getElementById('bt1');
var button2=document.getElementById('bt2');
var button3=document.getElementById('bt3');
var content=document.getElementById('you');
var contents=document.getElementById('from');

 
button.addEventListener('click',wish);

function wish()
{

   window.open("about.html");
}


button1.addEventListener('click',action1);
button2.addEventListener('click',action2);
button3.addEventListener('click',action3);

function action3()
{
 var answer=window.prompt("Can You Guess What is your surprise let See ");
 if(answer==null)
 {
    alert(" Hey You Cannot go like this !!!!");
 }

 if(answer=="")
 {
    alert("You must Provide suggestions !")
 }

 if(answer!=="cake")
 {
   var myWindow = window.open("", "MsgWindow", "width=30,height=500");
   var msg="OOPS!!! HAPPY BIRTHDAY!!! I Had a Cake For your Virtual Celebration Enjoy--->Ps:Type Cake on Text Box To get your Cake--->OK Tata Bye-Bye"
   myWindow.document.write("A Message For You ----> "+msg.fontcolor("red"));
}
 

 if(answer==="Cake"||answer=="cake")
 {
   window.open("https://i.pinimg.com/originals/64/01/9a/64019a5154c0788da2e1aefd2f4aa895.gif");
  
    
 }

 
}


function action2()
{ 
   content.style.visibility="visible";
   var refresh="Refresh It to Main Menu";
   var word="Blessing you with health, happiness, peace, love, and prosperity in this new phase of your life. Good Luck.!!!";
   document.write(contents.innerHTML.fontcolor("darkgoldenrod"));
    document.write("<br><br>");
   document.write(word.fontcolor("darkgoldenrod"));
   document.write("<br><br>");
   document.write(refresh.fontcolor("red"));
   document.body.style.backgroundColor = "black";
   
}

function action1()
{
   
   var refresh="Refresh It to Main Menu";
   var word1="1. You are more fun than anyone or anything I know, including bubble wrap.";
   var word2="2. You are the most perfect."
   var word3="3. You are one of the strongest people I know.";
   var word4="4. When it comes to cooking, no one’s meals are quite as delicious as yours."
   var word5="5. I hope you are proud of yourself, because I am!."
   var word6="6. You are one of the bravest people I know."
   var word7="7. You are so trustworthy; I always believe what you say(sometimes I am not hehhe)."
   var word8="8. Everything seems brighter when you are around."
   var word9="9. I know that you will always have my back, because that is the kind of person you are."
   var word10="10.You are the reason I am smiling today and Atlast You’re a gift to me.";


   content.style.visibility="visible";
   document.write(content.innerHTML.fontcolor("darkgoldenrod"));
   document.write("<br>");
   document.writeln(word1.fontcolor("darkgoldenrod"));
   document.write("<br>");
   document.writeln(word2.fontcolor("darkgoldenrod"))
   document.write("<br>");
   document.writeln(word3.fontcolor("darkgoldenrod"))
   document.write("<br>");
   document.writeln(word4.fontcolor("darkgoldenrod"))
   document.write("<br>");
   document.writeln(word5.fontcolor("darkgoldenrod"))
   document.write("<br>");
   document.writeln(word6.fontcolor("darkgoldenrod"))
   document.write("<br>");
   document.writeln(word7.fontcolor("darkgoldenrod"))
   document.write("<br>");
   document.writeln(word8.fontcolor("darkgoldenrod"))
   document.write("<br>");
   document.writeln(word9.fontcolor("darkgoldenrod"));
   document.write("<br>");
   document.writeln(word10.fontcolor("darkgoldenrod"));
   document.write("<br><br>");
   document.write(refresh.fontcolor("red"));
   document.body.style.backgroundColor = "black";

}


