// All site content lives here. Add a line to PARTS to add a new part. Format: Name|Category|What it does|Everyday comparison
const PARTS=`Motherboard|Internal|The main circuit board that connects every part so they can talk to each other.|Like a city road network linking every building.
CPU (processor)|Internal|The chip that follows instructions and does the calculations.|The brain of the computer.
CPU cooler|Internal|A fan and metal block that stops the CPU from overheating.|Like a fan cooling you down after a run.
Heat sink|Internal|A finned metal block that pulls heat away from a chip.|Like the radiator of a car.
Thermal paste|Internal|A paste that fills tiny gaps between the CPU and its cooler so heat moves out faster.|Like filler that helps heat pass across.
RAM (memory)|Internal|Fast short-term memory for the programs you are using right now. It is cleared when the power goes off.|Like the desk where you spread out today’s work.
HDD (hard disk drive)|Internal|Stores files on spinning magnetic disks. Large and cheap, but slower.|Like a big filing cabinet.
SSD (SATA)|Internal|Stores files on memory chips with no moving parts. Much faster than an HDD.|Like a library where any book arrives instantly.
NVMe M.2 SSD|Internal|A tiny, very fast SSD that plugs straight into the motherboard.|Like an express lane beside the normal road.
Graphics card (GPU)|Internal|Draws the pictures, video, and games you see on screen.|Like an artist who paints the screen.
Sound card|Internal|Turns digital data into sound and records sound from a microphone.|Like a translator between numbers and music.
Network card|Internal|Connects the computer to a network by Wi-Fi or an Ethernet cable.|Like the front door to the internet.
Power supply (PSU)|Internal|Changes wall electricity into the power each part needs.|Like a heart pumping energy around the body.
Computer case|Internal|The box that holds and protects all the inside parts.|Like a house for the parts.
Case fans|Internal|Fans that pull cool air in and push hot air out.|Like windows letting fresh air through a house.
CMOS battery|Internal|A small coin battery that keeps the date, time, and BIOS settings when the power is off.|Like the battery in a wrist watch.
Optical drive|Internal|Reads and writes CDs and DVDs using a laser.|Like a record player that reads with light.
SATA data cable|Internal|A thin cable that carries data between storage drives and the motherboard.|Like a pipe carrying information.
Power cables|Internal|Cables that carry electricity from the PSU to the parts.|Like the wires inside your house walls.
Keyboard|Input|Lets you type letters, numbers, and commands.|Like a typewriter that talks to the computer.
Mouse|Input|Moves the pointer and lets you click things on screen.|Like your finger pointing at the screen.
Microphone|Input|Captures your voice as digital sound.|Like an ear for the computer.
Webcam|Input|A small camera for video calls and photos.|Like an eye for the computer.
Scanner|Input|Turns paper pages and photos into digital files.|Like a photocopier that saves to the computer.
Game controller|Input|Lets you control games with buttons and sticks.|Like a steering wheel for a game.
Touchpad|Input|A flat touch-sensitive pad on laptops that works like a mouse.|Like a mouse you move with a fingertip.
Monitor|Output|Shows what the computer is doing as pictures and text.|Like the computer’s face.
Speakers|Output|Play sound out loud.|Like the computer’s voice.
Headphones|Output|Play sound privately into your ears.|Like speakers made just for you.
Printer|Output|Puts text and pictures from the computer onto paper.|Like a machine that turns screens into paper.
Projector|Output|Shines the screen image onto a wall or big screen.|Like a flashlight that shows a movie.
USB flash drive|Storage|A small portable drive for carrying files between computers.|Like a pocket notebook.
External hard drive|Storage|A larger portable drive for backups and big files.|Like a suitcase for your files.
SD memory card|Storage|A tiny card that stores photos and videos from cameras and phones.|Like a reusable roll of film.
USB port|Ports|A socket for plugging in keyboards, mice, drives, and more.|Like a universal plug socket.
HDMI port|Ports|Sends high-quality picture and sound to a monitor or TV.|Like one hose carrying both picture and sound.
VGA port|Ports|An older socket that sends picture only to a monitor.|Like an old road that still works.
Ethernet port|Ports|A socket for a network cable for a steady internet connection.|Like a wired phone line.
Audio jack|Ports|A round socket for headphones, speakers, or a microphone.|Like a small doorway for sound.
Power port|Ports|The socket where the power cable brings electricity in.|Like a tap that lets electricity in.
UPS|Other|A battery backup that keeps the computer on for a few minutes in a power cut.|Like a spare tank of fuel.
Surge protector|Other|A power strip that blocks sudden voltage spikes that can damage parts.|Like a shield for your computer.
Router|Other|Shares one internet connection with many devices.|Like a traffic officer sending data the right way.
Modem|Other|Connects your home to the internet provider.|Like the bridge to the outside world.`.split("\n").map(l=>l.split("|"));
// A path is a list of part names (looked up above) or [title, text] pairs.
const PATHS=[
{t:"Your first hour with a computer",s:"Start with the parts you can touch, then check what you learned with a short quiz.",st:["Keyboard","Mouse","Monitor","Computer case","Power port"]},
{t:"Open it up: inside the case",s:"Follow the power and the data around the inside of a computer, then test yourself.",st:["Power supply (PSU)","Motherboard","CPU (processor)","RAM (memory)","SSD (SATA)","Graphics card (GPU)"]},
{t:"Storage: where your work lives",s:"From spinning hard drives to tiny memory sticks, learn where files are kept and why backups matter.",st:["HDD (hard disk drive)","SSD (SATA)","NVMe M.2 SSD","USB flash drive","External hard drive"]},
{t:"Office essentials: Word, PowerPoint, Excel",s:"The three programs used in almost every school and job, taught one small step at a time.",st:[["Word: type and format","Type a letter, then use Bold (Ctrl+B) on the Home tab."],["Word: save and print","Press Ctrl+S, name your file, then use File and Print."],["PowerPoint: build slides","Click New Slide, add a title, and pick a theme on the Design tab."],["Excel: enter data","Click a cell, type a number, and press Enter."],["Excel: add with SUM","Type =SUM(B2:B6) to add a list of numbers."]]}];
const SIM=[["Press the power button","The button tells the power supply to start."],["Power supply (PSU)","It turns wall electricity into power for every part."],["Motherboard","Power flows to the motherboard, which wakes up the other parts."],["CPU (processor)","The CPU starts following its first instructions."],["RAM (memory)","Programs are loaded into fast memory."],["SSD or HDD","The operating system is read from storage."],["Monitor","The desktop appears on your screen. The computer is ready."]];
const LESSONS={Word:[["What is Word?","Open Word and click Blank document."],["Parts of the screen","Find the Ribbon, the tabs, the ruler, and the document area."],["Typing and editing","Use Ctrl+C, Ctrl+V, and Ctrl+Z to copy, paste, and undo."],["Formatting text","Select text, then click Bold (Ctrl+B) on the Home tab."],["Pictures and tables","Click the Insert tab, then choose Pictures or Table."],["Save and print","Press Ctrl+S, type a name, then choose File and Print."]],
PowerPoint:[["What is PowerPoint?","Open it and click Blank Presentation."],["Add and arrange slides","On the Home tab click New Slide, then drag slides to reorder."],["Text and pictures","Click a text box and type, then use Insert and Pictures."],["Themes and design","Open the Design tab and pick a theme."],["Transitions and animations","Use the Transitions tab, and keep effects simple."],["Present and save","Press F5 to start the show and Ctrl+S to save."]],
Excel:[["What is Excel?","Rows, columns, and cells make up a worksheet."],["Type data","Click a cell, type, and press Enter."],["Format cells","Select cells, then use Bold, fill color, and borders."],["Simple formulas","Type =SUM(B2:B6) to add a list of numbers."],["Make a chart","Select your data, then click Insert and Chart."],["Save your file","Press Ctrl+S and choose .xlsx or PDF."]]};
const QUIZ=[["Which part is called the brain of the computer?",["CPU","RAM","Monitor","Printer"],0],["Which storage has no moving parts and is faster?",["HDD","SSD","CD drive","Floppy disk"],1],["What does RAM hold?",["Programs you are using now","Photos forever","The internet","Electricity"],0],["Which port sends picture and sound to a TV?",["VGA","Audio jack","HDMI","Power port"],2],["Which device protects against power spikes?",["Router","Modem","Surge protector","Scanner"],2],["What does the power supply do?",["Stores files","Changes wall power into usable power","Draws pictures","Cools the CPU"],1]];
const GLOSS=[["Hardware","The physical parts of a computer that you can touch."],["Software","Programs and apps that tell the hardware what to do."],["Operating system","The main software that runs the computer, such as Windows or Android."],["CPU","The chip that does the thinking and calculating."],["RAM","Fast, short-term memory for programs that are open right now."],["Storage","Where files are kept even when the power is off."],["Bit and byte","A bit is a 1 or 0. Eight bits make one byte."],["Port","A socket on a computer for plugging in cables and devices."],["Peripheral","A device you connect to a computer, such as a mouse or printer."],["Driver","Small software that lets the computer talk to a device."],["BIOS","Start-up software that wakes the hardware before the operating system loads."],["Network","Computers connected so they can share data."],["File","A saved piece of work, such as a letter or photo."],["Folder","A container used to keep files organised."],["Cloud","Storage on internet servers instead of on your own device."],["Backup","An extra copy of your files in case the first is lost."]];
