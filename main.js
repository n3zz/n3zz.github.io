command_mem  = [];


const cmdHandler = function commandHandler(cmd){
  switch (cmd.toLowerCase()) {
    case 'intro':
      console.log("Yo I am Bit. And if you are reading this then I- nah I am kidding. The name's Ary! :)");
      command = prompt('Test input: ');
    case 'about':
      console.log("I am an aspiring cyber security engineer who is also trying to gain his reigns back in programming! :D");
      command = prompt('Test input: ');
    case 'tpdc':
      console.log('The Pseudo Dopamine centre is a cool discord server you should totally join! Join here at https://tpdc.club');
      command = prompt('Test input: ');
    case 'projects':
      console.log('Not many projects this website is one of them. Also I made a network hacking simulator similar to the game Hacknet. But i am trying to remake it in TS and HTML (Probably will also TS this website as well). Probably will merge it with this website so it will be a whole interactive game. :)');
      command = prompt('Test input: ');
    default:
      console.log("Don't try to crash my website :(");
      command = prompt('Test input: ');
  }
}

