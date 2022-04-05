const crypt = new Map([ ['a', '._'], ['b', '_...'], ['c', '_._.'], ['d', '_..'], ['e', '.'], ['f', '.._.'], ['g', '__.'], ['h', '....'], ['i', '..'], ['j', '.___'], ['k', '_._'], ['l', '._..'], ['m', '__'], ['n', '_.'], ['o', '___'], ['p', '.__.'], ['q', '__._'], ['r', '._.'], ['s', '...'], ['t', '_'], ['u', '.._'], ['v', '..._'], ['w', '.__'], ['x', '_.._'], ['y', '_.__'], ['z', '__..'] ]);


// Word to morse code
function translatebutton(word){
    trans="  "
for(let i=0;i<word.length-1;i++){
    trans+=crypt.get(word[i])
    trans+=" "
}
trans+=crypt.get(word[word.length-1])
return trans

}

function incrypt(){ 
    ipw=document.getElementById("inputword").value
    document.getElementById("translateword").value=translatebutton(ipw)
}

// Morse code to word 
const reversed = new Map([ ['._', 'a'], ['_...', 'b'], ['_._.', 'c'], ['_..', 'd'], ['.', 'e'], ['.._.', 'f'], ['__.', 'g'], ['....', 'h'], ['..', 'i'], ['.___', 'j'], ['_._', 'k'], ['._..', 'l'], ['__', 'm'], ['_.', 'n'], ['___', 'o'], ['.__.', 'p'], ['__._', 'q'], ['._.', 'r'], ['...', 's'], ['_', 't'], ['.._', 'u'], ['..._', 'v'], ['.__', 'w'], ['_.._', 'x'], ['_.__', 'y'], ['__..', 'z'] ])

function translatecode(code){ 
    trans_C=" "
    splitcode=code.split(" ")
    trans_c="  "
for(let i=0;i<splitcode.length;i++){
    trans_C+=reversed.get(code[i])
    trans_C+=" "
}
return trans_C
}

function incryptcode(){ 
    ipc=document.getElementById("inputcode").value
    document.getElementById("translatecode").value=translatecode(ipc)
}

