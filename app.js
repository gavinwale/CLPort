const outputDiv = document.getElementById('output');
const inputLine = document.querySelector('.input-line');
const commandInput = document.getElementById('command');
const breakLine = '==========================================================================================';

// The magic happens here
function output(text) {
    // Create div
    const outputLine = document.createElement('div');
    outputLine.innerHTML = text;
    // Add to the div every time there's new stuff
    outputDiv.appendChild(outputLine);
    // Make it smooth (not sure what this does)
    inputLine.scrollIntoView({behavior: 'smooth'});
}

commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = commandInput.value.trim();
        if (command) {
            const args = command.split(/\s+/);
            const cmd = args[0].toLowerCase();
            output('[user@gavin~]$ ' + command);
            switch (cmd) {
                case 'help':
                    output(breakLine);
                    output('Commands:');
                    output(breakLine);
                    output('--help: prints this list');
                    output('--about: about me');
                    output("--education: what i've learned");
                    output("--experience: what i've done");
                    output('--skills: what i can do');
                    output('--contact: my information');
                    output('--exit: closes the window');
                    output(breakLine);
                break;
              case 'about':
                    output(breakLine);
                    output('About:');
                    output(breakLine);
                    output('--Ex-Division I College Football student-athlete. High energy, great attention to detail, excellent work ethic.');
                    output('--Passionate about blockchain technology, parallel computing, ethical hacking, and theory/analysis of mechanical systems.');
                    output('--In my free time I workout, trade crypto, and build smart contracts.');
                    output(breakLine);
                break;
              case 'education':
                    output(breakLine);
                    output('Education:');
                    output(breakLine);
                    output("-Boise State University");
                    output("----BS in Mechanical Engineering (Spring 2023)");
                    output("----Minor in Computer Science");
                    output("----Minor in Computational Science & Engineering");
                    output("----Minor in Applied Mathematics");
                    output("----Full Athletic Scholarship");
                    output("----3.3 GPA");
                    output(breakLine);
                    output("-Coronado High School");
                    output("----High School Diploma (Spring 2019)");
                    output("----Top 1% of 950+ graduating class");
                    output("----4.7 GPA");
                    output(breakLine);
                break;
              case 'experience':
                    output(breakLine);
                    output('Experience:');
                    output(breakLine);
                    output('-Freelance Blockchain Developer (Spring 2022 => Present)');
                    output('----Developing custom ERC20 smart contracts with innvotive tokenomics');
                    output('----Building custom decentralized applications for a variety of use cases & utilities');
                    output('----Helping audit/breakdown smart contract vulnerabilities/exploits');
                    output('----Creating connections in the space, work on teams to bring new technology to web3');
                    output('----Working on creating groundbreaking utility through the ERC1155 multi-token standard and UE5');
                    output(breakLine);
                    output('-BSU Capstone (Fall 2022 => Present)');
                    output('----Working on a team to cut down on manufacturing speed of a fiber optic array collimator');
                    output('----Machining with high tolerance, precision design, teamwork');
                    output('----Learning how to communicate effectively with corporate operations (purchasing, deadlines, etc.)')
                    output(breakLine);
                    output('-Student Athlete (Summer 2019 => Spring 2023)');
                    output('----Balanced 30+ hours per week of athletics while managing rigorous a academic schedule');
                    output('----Accepted constructive criticism & feedback to improve skills');
                    output('----Exercised strong leadership skills on and off the field');
                    output(breakLine);
                break;
              case 'skills':
                    output(breakLine);
                    output('Skills:');
                    output(breakLine);
                    output('-Programming');
                    output('----Solidity, Java, C++, C, SQL, JavaScript, React, Git, Linux, Arduino...'); 
                    output('----CUDA, MATLAB, MPI, CSS, HTML, Go, Rust, ethers.js, web3.js');
                    output(breakLine);
                    output('-Engineering/Math');
                    output('----Machine Design, Design, Systems Engineering, Project Management, HVAC, Failure Analysis...');
                    output('----Thermodynamics, Chemistry, Calculus, Discrete Math, Numerical Calculus');
                    output(breakLine);
                    output('-Miscellaneous');
                    output('----Problem Solving, Communication, Leadership, Decision Making, Teamwork, Trading, Graphics...');
                    output('----Attention To Detail, Critical Thinking, Video Editing, Organization');
                    output(breakLine);
                break;
              case 'contact':
                    output(breakLine);
                    output('Contact:');
                    output(breakLine);
                    output('-Email: wale.gavin@gmail.com');
                    output('-Phone: (702)279-5155');
                    output('-Linkedin: https://www.linkedin.com/in/gavinwale/');
                    output('-Github: https://github.com/gavinwale');
                    output(breakLine);
                break;
              case 'exit':
                    output(breakLine);
                    output('Goodbye!');
                    output(breakLine);
                    setTimeout(() => window.close(), 3000);
                break;
              default:
                    output('"${cmd}" is not a valid command. Use "help" for a list of commands.');
            }
            commandInput.value = '';
          }
        }
      });
      commandInput.focus();
