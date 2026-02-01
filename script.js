class Person{
    constructor(name, games, sympathy, awesome) {
        this.name = name;
        this.games = games;
        this.sympathy = sympathy;
        this.awesome = awesome;
        this.id = `${name.replaceAll(" ", "").toLowerCase()}`;

        this.score = this.calculateScore();
        this.currentRank = 0;

        this.link = null;
    }

    calculateScore() {
        let totalPoints = 0;
        this.games.forEach(game => {
            totalPoints += points(this.name, game.person2, game.quantity);
        });
        totalPoints = totalPoints + this.sympathy + this.awesome;
        return totalPoints;
    }
}

class Game{
    constructor(person1, person2, type, quantity) {
        this.person1 = person1;
        this.person2 = person2;
        this.type = type;
        this.quantity = quantity;
    }
}


function points(name, p2, quantity){
    let currentPoints = 0
    if (quantity == 1) {
        if (name === "Ira D") {
            currentPoints = 3;
        } else {
            currentPoints = 4;
        }
    } else if (quantity == 2) {
        if (name === "Ira D") {
            currentPoints = 6;
        } else {
            currentPoints = 7;
        }
    }else {
        if (name === "Ira D") {
            currentPoints = (6 + (2*(quantity-2)));

        } else {
            currentPoints = (7 + (2*(quantity-2)));
        }
    }
    if (p2 == "Ira D"){
        currentPoints += quantity;
    }
    return currentPoints;
    }




const playerNames = [
    "Alex G", "Amy L", "Andrew H", "Brad J", "Brandon Y", "Chris B",
    "David F", "David G", "Derek J", "Eric D", "Eddie H", "Eric P",
    "Ira D", "Jana C", "Jessy R", "Jodi H", "Jon N", "John R",
    "Katherine F", "Mikey B", "Roxy N", "Scott U", "Sid S", "Steve M", "Josh Z", "Nelson C", "Aaron F", "Kevin H" 
];

const playerList = playerNames.map(name => new Person(name, [], 0, 0));


const playerMap = {};
playerList.forEach(player => {
    playerMap[player.name] = player;
});


// GAMES
const games = [
  // 11/08/2025
  new Game("Alex G", "Mikey B", "s", 1),
  new Game("Alex G", "Mikey B", "s", 1),
  new Game("Alex G", "Chris B", "s", 1),
  new Game("Katherine F", "Chris B", "d", 1),
  new Game("Jodi H", "Chris B", "d", 1),
  new Game("Sid S", "Ira D", "d", 1),
  new Game("Ira D", "Roxy N", "d", 1),
  new Game("Sid S", "Eric P", "d", 1),
  new Game("Brad J", null, "sym", 1),
  new Game("Mikey B", null, "sym", 1),

  // 11/15/2025
  new Game("Brandon Y", "Eddie H", "s", 1),
  new Game("Mikey B", "David F", "s", 2),
  new Game("Katherine F", "Derek J", "d", 1),
  new Game("Eddie H", "Eric P", "d", 1),
  new Game("Eddie H", "Chris B", "d", 1),
  new Game("Sid S", "Chris B", "d", 1),
  new Game("Derek J", "Chris B", "d", 1),
  new Game("Brandon Y", "Eric P", "d", 1),
  new Game("David F", null, "sym", 1),
  new Game("Ira D", null, "sym", 1),

  // 11/22/2025
  new Game("Sid S", "Mikey B", "d", 1),
  new Game("Jodi H", "Eric D", "d", 1),
  new Game("Eddie H", "Ira D", "d", 1),
  new Game("Eric P", "Eric D", "d", 1),
  new Game("David G", "Eddie H", "d", 1),
  new Game("Mikey B", "Eric D", "d", 1),
  new Game("Eric P", "David G", "d", 1),

  // 11/29/2025
  new Game("Alex G", "Derek J", "d", 1),
  new Game("Alex G", "Ira D", "d", 1),
  new Game("Alex G", "Mikey B", "d", 1),
  new Game("Eric P", "Brad J", "d", 1),
  new Game("Sid S", "Brad J", "d", 1),
  new Game("David G", null, "sym", 1),

  // 12/06/2025
  new Game("Derek J", "Eric P", "s", 1),
  new Game("Derek J", "Mikey B", "s", 1),
  new Game("Alex G", "Jon N", "d", 1),
  new Game("Alex G", "Eddie H", "d", 1),
  new Game("Jon N", "Eddie H", "d", 1),
  new Game("David F", "Eric P", "d", 1),
  new Game("David F", "Brandon Y", "d", 1),
  new Game("Sid S", "Mikey B", "d", 1),
  new Game("Ira D", null, "sym", 1),
  new Game("Brandon Y", null, "awe", 2),
  new Game("Chris B", null, "awe", 2),
  new Game("David G", null, "awe", 2),
  new Game("Katherine F", null, "awe", 2),


  // 12/13/2025
  new Game("Eric D", "Mikey B", "d", 1),
  new Game("Eric D", "Chris B", "d", 1),
  new Game("Katherine F", "Andrew H", "d", 1),
  new Game("Katherine F", "Eric P", "d", 1),
  new Game("Katherine F", "Mikey B", "d", 1),
  new Game("Jana C", "Eric P", "d", 1),
  new Game("Sid S", "Derek J", "d", 1),
  new Game("Sid S", "Eric P", "d", 1),
  new Game("Ira D", null, "sym", 1),
  new Game("Derek J", null, "sym", 1),
  new Game("Eddie H", null, "sym", 2),
  new Game("Amy L", null, "sym", 1),

  // 12/20/2025
  new Game("Andrew H", "Eric P", "d", 1),
  new Game("Andrew H", "Mikey B", "d", 1),
  new Game("Steve M", "Eddie H", "d", 1),
  new Game("Steve M", "Amy L", "d", 1),
  new Game("Ira D", "Eddie H", "d", 1),
  new Game("Mikey B", "Sid S", "d", 1),
  new Game("John R", null, "sym", 1),
  new Game("Derek J", null, "sym", 1),
  new Game("Katherine F", null, "sym", 1),
  new Game("Scott U", null, "sym", 1),
  new Game("Brad J", null, "sym", 1),
  new Game("David F", null, "sym", 1),

  // 12/27/2025
  new Game("Andrew H", "Alex G", "d", 1),
  new Game("Andrew H", "Eric P", "d", 1),
  new Game("Alex G", "Eric P", "d", 1),
  new Game("Jodi H", "Eric P", "d", 1),
  new Game("Jodi H", "Brandon Y", "d", 1),
  new Game("Jodi H", "David G", "d", 1),
  new Game("Mikey B", "Eric D", "d", 1),
  new Game("Scott U", "Brandon Y", "d", 1),
  new Game("John R", null, "sym", 1),
  new Game("Amy L", null, "sym", 1),
  new Game("Brad J", null, "sym", 1),

  // 01/03/2026
  new Game("Brandon Y", "Derek J", "d", 1),
  new Game("Brandon Y", "Sid S", "d", 1),
  new Game("Brandon Y", "Brad J", "d", 1),
  new Game("Eric D", "Sid S", "d", 1),
  new Game("Mikey B", "Chris B", "d", 1),
  new Game("Andrew H", "Chris B", "d", 1),
  new Game("Jessy R", "Brad J", "d", 1),
  new Game("Jessy R", "Alex G", "d", 1),
  new Game("Katherine F", null, "sym", 1),
  new Game("Eric P", null, "sym", 1),

  // 01/10/2026
  new Game("Chris B", "Alex G", "d", 1),
  new Game("Chris B", "Eric P", "d", 1),
  new Game("Chris B", "Sid S", "d", 1),
  new Game("Alex G", "Sid S", "d", 1),
  new Game("John R", "Sid S", "d", 1),
  new Game("John R", "Alex G", "d", 1),
  new Game("Andrew H", "Brad J", "d", 1),
  new Game("Andrew H", "Katherine F", "d", 1),
  new Game("Jessy R", null, "sym", 1),
  new Game("Ira D", null, "sym", 1),
  new Game("Mikey B", null, "sym", 1),
  new Game("Eric D", null, "sym", 1),

  // 01/17/2026
  new Game("John R", "Alex G", "d", 1),
  new Game("Mikey B", "Alex G", "d", 1),
  new Game("Andrew H", "Eric P", "d", 1),
  new Game("Mikey B", "Eric P", "d", 1),
  new Game("Brandon Y", "Katherine F", "d", 1),
  new Game("Brad J", "Jessy R", "d", 1),
  new Game("Chris B", null, "sym", 1),
  new Game("Roxy N", null, "sym", 1),
  new Game("Sid S", null, "sym", 1),
  new Game("Chris B", null, "awe", 1),
  new Game("Brad J", null, "awe", 1),
  new Game("Jessy R", null, "awe", 1),
  new Game("Roxy N", null, "awe", 1),
  new Game("Sid S", null, "awe", 1),
  new Game("Alex G", null, "awe", 1),
  new Game("John R", null, "awe", 1),
  new Game("Katherine F", null, "awe", 1),
  new Game("Eric P", null, "awe", 1),
  new Game("Mikey B", null, "awe", 1),
  new Game("Andrew H", null, "awe", 1),
  new Game("Brandon Y", null, "awe", 1),

 // 01/24/26
  new Game("Chris B", "Amy L", "d", 1),
  new Game("Amy L", "Derek J", "d", 1),
  new Game("Katherine F", "Chris B", "d", 1),
  new Game("Chris B", "Mikey B", "d", 1), 
  new Game("Ira D", "Andrew H", "d", 1),
  new Game("Andrew H", "Mikey B", "d", 1),
  new Game("David F", "Jessy R", "d", 1),
  new Game("Eric P", null, "sym", 1),
  new Game("Sid S", null, "sym", 1),
  new Game("Jodi H", null, "sym", 1),

 // 01/31/26
  new Game("Amy L", "Eric P", "d", 1),
  new Game("Mikey B", "Brandon Y", "d", 1),
  new Game("Derek J", "Eric P", "d", 1),
  new Game("Josh Z", "Ira D", "d", 1),
  new Game("Alex G", "Eric P", "d", 1),
  new Game("Kevin H", "Katherine F", "d", 1),
  new Game("Aaron F", "Steve M", "d", 1),
  new Game("Chris B", "Josh Z", "d", 1),
  new Game("Chris B", "Katherine F", "d", 1),
  new Game("Andrew H", null, "sym", 1),
  new Game("Nelson C", null, "sym", 1),
  new Game("Brad J", null, "sym", 1)
];




games.forEach(game => {
    const p1 = playerMap[game.person1];
    const p2 = playerMap[game.person2];

    if (game.type === "awe") {
        p1.awesome += game.quantity;
    } else if (game.type === "sym") {
        p1.sympathy += game.quantity;
    } else if (game.type === "d" || game.type === "s") {

        addOrMergeGame({
            type: game.type,
            person2: game.person2,
            quantity: game.quantity
        }, p1);

        if (game.type == "d" && p2) {
            addOrMergeGame({
            type: game.type,
            person2: game.person1,
            quantity: game.quantity
        }, p2);
    }
    } else {
        throw Error("Invalid game type");
    }
});


function addOrMergeGame(game, player) {
    const type = game.type;
    const p2 = game.person2;

    const findGame = player.games.find(
    g => g.type === type && g.person2 === p2
    );

    if (findGame) {
        findGame.quantity += game.quantity;
    } else {
        player.games.push({
            type: game.type,
            person2: game.person2,
            quantity: game.quantity
        });
    }
}






















playerList.forEach(player => {
    player.score = player.calculateScore();
    player.games.sort((a,b) =>
        a.person2.localeCompare(b.person2)
    )
});

playerList.sort((a,b) => b.score - a.score);
playerList.forEach((player, index) => {
    player.currentRank = index + 1;
})


let selectedPlayerLink = null;


const ranking = document.getElementById("ranking_HTML");
const details = document.getElementById("playerDetails");


playerList.forEach(player => {
    const li = document.createElement("li");
    const link = document.createElement("a");

    link.id = player.id;
    link.href = "#";
    link.textContent = `${player.name} (${player.score} points)`;

    player.link = link;


    li.appendChild(link);
    ranking.appendChild(li);

    
    link.addEventListener("click", (e) => {
        e.preventDefault(); 

        if (selectedPlayerLink) {
            selectedPlayerLink.classList.remove("playerSelected");
        }

        playerList.forEach(p => 
            p.link.classList.remove("p2Singles", "p2Doubles")
        );


        link.classList.add("playerSelected");
        selectedPlayerLink = link;

        player.games.forEach(game => {
            const p2Player = playerList.find(p => p.name === game.person2);
            if (!p2Player) {
                throw new Error(`Player not found: ${game.person2}`);
            }

            if (game.type === "d") {
                p2Player.link.classList.add("p2Doubles");
            } else {
                p2Player.link.classList.add("p2Singles");
            }
        })

        showPlayerDetails(player);

    });

});

function showPlayerDetails(player) {
    details.style.display = "block";
    let gamePointsTotal = 0;
    details.innerHTML = `
        <h2>${player.name}</h2>

        <p><strong>Games:</strong></p>
        <ul>
            ${player.games.map(game => {
                const gameText = game.type === "d" 
                    ? `Doubles with <span class="playerNameDoubles">${game.person2}</span>` 
                    : `Singles against <span class="playerNameSingles">${game.person2}</span>`;

                const gamePoints = points(
                    player.name,
                    game.person2,
                    game.quantity
                );

                gamePointsTotal += gamePoints;
                return `<li>${gameText} (x${game.quantity})
                 — <em>${gamePoints} pts</em> 
                 </li>`;
            }).join("")}
            
        </ul>

        <p><strong>Points Earned From Games:</strong> ${gamePointsTotal}</p>
        <p><strong>Sympathy Points:</strong> ${player.sympathy}</p>
        <p><strong>Awesomeness Points:</strong> ${player.awesome}</p>
        <p><strong>Overall Total Points:</strong> ${gamePointsTotal + player.sympathy + player.awesome}</p>
        <p><strong>Current Rank:</strong> ${player.currentRank}</p>
    `;
}


