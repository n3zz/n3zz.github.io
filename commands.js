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

    }
  }, {
    name: "intro",
    description: "Hi",
    execute(inject) {

    }
  }, {
    name: "about",
    description: "Who am I, and what do I do?",
    execute(inject) {

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
