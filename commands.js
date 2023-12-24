// export const help = [
    //     'Normal portfolio commands',
    //     'whois      -  Who are you? And what are you doing in my website >:(',
    //     'intro      -  Who am i?',
    //     'about      -  What do I do?',
    //     'tpdc       -  what is tpdc?',
    //     'projects   -  My projects that i have done so far',
    //     'socials    -  My socials tf you thankin?',
    //     '-------------------------------------------------------------',
    //     'Basic Linux Commands',
    //     'ls',
    //     'cd',
    //     'whoami'
    // ];

const commands = [{
    name: "help",
    description: "Shows all available commands",
    execute(inject) {
        inject("Help");

        commands.forEach(({ name, description }) => { inject(`${name} - ${description}`); });
    }
  }, {
    name: "whois",
    description: "Who are you? And what are you doing in my website >:(",
    execute(inject) {
        inject(`Hey I am Bit and if you are reading thi- I am just kidding. The name's Ary!
        (Ary Yakos is a pseudonym. Anyone else of that name is purely coincidental.)`);
    }
  }, {
    name: "about",
    description: "Hi",
    execute(inject) {
        inject(
        
        `Hello, I am Ary!
        My real name is Amritesh. I have the online aliases: Ary, n3zz, ary_yakos, tesh. I go by many names. 
        I am a 21 year old Cyber Security Apprentice aspiring to pursue a career in Cyber Security.
        As you can see I have somewhat prior knowledge in Web Design.
        I have about 7+ years in coding experience. I am currently also learning Java, PHP and JavaScript to gain further knowledge in website development.
        In addition to programming, I have deep passion for video games and seeing what makes them tick. When I am not digging around in cyber security research or tinkering with my raspberry pi, I would look at making text based adventure game prototypes. I also code on games in working with my friends and the people in a small discord server that I run called The Pseudo Dopamine Centre.
        My first hand experience with cyber security is my main experience with Cyber Discovery and my own experience with Kali Linux and GNS and Cisco Packet Tracer. I also tried practical skills on legal hacking sites such as OverTheWire and HackTheBox. I know all the basics it requires to make a network safe and secure as possible. Additionally I am also working on getting my Security+ and CEH.`
        
        );
    }
  }, {
    name: "tpdc",
    description: "What is TPDC?",
    execute(inject) {

    }
  }, {
    name: "projects",
    description: "My projects that i have worked on and am going to work on!",
    execute(inject) {

    }
  }, {
    name: "socials",
    description: "My socials",
    execute(inject) {

    }
  }, {
    name: "ls",
    description: "Lists everything in the server",
    execute(inject) {

    }
  }, {
    name: "cd",
    description: "Changes directory",
    execute(inject) {

    }
  }, {
    name: "whoami",
    description: "Shows your rank in the program",
    execute(inject) {

    }
}];

// Module exports
export default commands;
