 
 let initialMarkdown = "# Here\'s an h1 heading\n\ ## Here\'s an h2 . . .\n Here\'s the website I used to launch this App: [Surge](https://surge.sh/)\n <br>Enclose code in \`   \`` to write inline <div>code</div>`\n\
 \n\
 Enclose code in at least three backticks \(`) or tildes \(~) to create a code block. Here's some code that will allow you to check whether or not a given word or sentence is a palindrome:\n\
```\n\
function palindrome(str) {\n\
// trim regexp\n\
let newRegex = str.replace(/[^A-Za-z0-9]/g, \"\").toLowerCase()\n\
// test for palindrome\n\
let counter = 0\n\
  for (let i = 0; i < newRegex.length; i++) {\n\
    if (newRegex[i] == newRegex[newRegex.length - (1 + i)]) {\n\
         counter++\n\
    }\n\
  }\n\
if (counter == newRegex.length) {\n\
  return true\n\
  }\n\
return false\n\
}\n\
console.log(palindrome(\"A man, a plan, a canal. Panama\"));\n\
``` \nYou can use also use markdown to create a list:\n 1. First Item\n 1. Second Item\n 4. Third Item\n\
\n\
Or a **bold** and *italic* Block quote:\n > \"***Hello I\'m Alex***\"\n\
\n\
<br> And lastly, here\'s  a picture I took of Flagstaff, AZ in the fall:\n\
<br>\
![Flagstaff, AZ in the fall](image-fall2.png)"

export default initialMarkdown