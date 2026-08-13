const lessonContent = {
  cash: lesson("Cash without the confusion", "CORNER SHOP", "Mia", "🧾", "#71c99c", [
    ["Price scanner", "A snack costs $4.60 and you pay with $10. How much change should you get?", ["$4.40", "$5.40", "$6.40"], 1],
    ["Cash register", "Your total is $7.35. What is the safest way to find the change from $10?", ["Guess", "Count up from $7.35", "Round the price"], 1],
    ["Receipt desk", "What should you check before leaving the store?", ["Only the logo", "Items, total, and change", "The paper color"], 1]
  ]),
  cards: lesson("Debit or credit?", "CARD CLUB", "Dex", "💳", "#ef9c88", [
    ["Debit terminal", "Which card normally takes money from your bank account?", ["Debit", "Credit", "Store card"], 0],
    ["Credit kiosk", "A credit card purchase uses whose money first?", ["Your cash", "The card company’s", "The store’s"], 1],
    ["Payment portal", "The smartest credit-card goal is to…", ["Ignore the bill", "Pay only the minimum", "Pay the full statement balance on time"], 2]
  ]),
  budget: lesson("Give every dollar a job", "BUDGET BAKERY", "Benny", "🥐", "#e5cf62", [
    ["Income counter", "What belongs in ‘money in’?", ["Job pay and allowance", "Things you want", "Only coins"], 0],
    ["Planning table", "Which are three useful money jobs?", ["Needs, wants, savings", "Fast, slow, medium", "Cash, cards, apps"], 0],
    ["Weekly planner", "When your life changes, your budget should…", ["Never change", "Be adjusted", "Be deleted"], 1]
  ]),
  saving: lesson("Save for something real", "SAVINGS PARK", "Sam", "🐿️", "#8dc9e7", [
    ["Goal flag", "A useful savings goal needs a price and…", ["A deadline", "A secret", "A coupon"], 0],
    ["Weekly calculator", "$120 in 12 weeks means saving how much each week?", ["$5", "$10", "$12"], 1],
    ["Savings vault", "When is the best time to move money into savings?", ["After it is spent", "As soon as money arrives", "Once a year"], 1]
  ]),
  credit: lesson("Your future money reputation", "SCORE SCHOOL", "Professor Score", "🦉", "#bba0e7", [
    ["Score board", "A credit score helps summarize how you handle…", ["Borrowed money", "Homework", "Cash change"], 0],
    ["Clock station", "Which habit can help your credit history?", ["Paying late", "Paying on time", "Losing bills"], 1],
    ["Balance bridge", "Why can minimum payments cost more?", ["Debt lasts longer and gains interest", "They add rewards", "They close the account"], 0]
  ]),
  scams: lesson("Spot scams before they get you", "SAFETY HQ", "Agent Penny", "🕵️", "#e99090", [
    ["Suspicious phone", "A message says ‘Act NOW or lose your account!’ What first?", ["Click fast", "Pause and verify", "Send your PIN"], 1],
    ["Security scanner", "Who should receive your one-time security code?", ["Nobody", "A friendly stranger", "Anyone claiming to be the bank"], 0],
    ["Safe exit", "How should you visit your bank after a suspicious text?", ["Use its link", "Open the official app", "Reply with your password"], 1]
  ]),
  banking: lesson("What banks actually do", "CASHVILLE BANK", "Mr. Banks", "🏦", "#79b8dd", [
    ["Checking desk", "Which account is commonly used for everyday spending?", ["Checking", "Savings", "Loan"], 0],
    ["Deposit window", "What happens when you deposit $25?", ["Your balance goes up $25", "You owe $25", "Nothing"], 0],
    ["Fee board", "Before opening an account, check its…", ["Logo color", "Fees and minimum balance", "Building size"], 1]
  ]),
  interest: lesson("Make time work for you", "INTEREST LAB", "Dr. Compound", "🧪", "#6bc995", [
    ["Growth machine", "Interest earned on earlier interest is called…", ["Simple spending", "Compound interest", "A fee"], 1],
    ["Borrowing booth", "When you borrow, interest usually makes the total cost…", ["Higher", "Lower", "Free"], 0],
    ["Time portal", "Why can starting to save earlier help?", ["Money gets more time to grow", "Prices freeze", "Banks give gifts"], 0]
  ]),
  earning: lesson("Your first paycheck", "PAYDAY CAFE", "Tori", "☕", "#e9c45d", [
    ["Pay-stub printer", "Gross pay means your pay…", ["Before deductions", "After spending", "In cash only"], 0],
    ["Deductions counter", "Taxes and benefits can be taken out as…", ["Bonuses", "Deductions", "Tips"], 1],
    ["Take-home table", "Net pay is the amount you…", ["Earn before deductions", "Actually take home", "Owe your employer"], 1]
  ]),
  investing: lesson("Grow money slowly", "MARKET GARDEN", "Nova", "🌱", "#aa96df", [
    ["Risk sign", "Investments can rise and fall. This is called…", ["Risk", "A guarantee", "A coupon"], 0],
    ["Garden plots", "Spreading money across investments is…", ["Borrowing", "Diversification", "Budgeting"], 1],
    ["Long path", "Investing is usually best treated as…", ["A quick bet", "A long-term plan", "Free money"], 1]
  ])
};

function lesson(title, world, npc, avatar, color, tasks) { return { title, world, npc, avatar, color, tasks }; }

const cashvilleNpcs = [
  { name: "Tori", avatar: "☕", x: 238, y: 345, color: "#e6a85e", lines: ["Morning! I just got my first café paycheck.", "The big number is gross pay. The smaller amount I receive is net pay—after deductions.", "Visit my Payday Café lesson if you want to read a pay stub together!"] },
  { name: "Mr. Banks", avatar: "🏦", x: 492, y: 196, color: "#6eadd2", lines: ["Welcome to Cashville Bank! Your money should have a safe home.", "Checking is useful for spending. Savings is for money you want to protect for later.", "And always look for account fees before you sign up."] },
  { name: "Jade", avatar: "🛹", x: 665, y: 415, color: "#d58cbb", lines: ["I almost spent my whole weekend budget on new wheels.", "I waited one day and realized I wanted concert tickets more.", "Waiting doesn’t mean ‘never.’ It gives future-you a vote."] },
  { name: "Leo", avatar: "🎮", x: 370, y: 425, color: "#8bc278", lines: ["I’m saving for a game, but tiny snack purchases kept wrecking my plan.", "Now I move $8 to savings every Friday before I spend anything.", "Small and automatic beats big and imaginary!"] },
  { name: "Nova", avatar: "🌱", x: 775, y: 175, color: "#a38bd5", lines: ["People online make investing look like a fast-money game. It really isn’t.", "I learned to spread risk and think in years, not hours.", "Come by Market Garden when you’re ready for the basics."] }
];

const dailyMissions = [
  { title: "The Gadget Urge", description: "A super-cool gadget appears while you scroll. Buy now or slow down?", question: "You’re scrolling YouTube and see a super-cool $65 tech gadget. The video says it’s nearly sold out. What do you do?", options: ["Buy it immediately", "Wait 24 hours and check my budget", "Use borrowed money"], best: 1, good: "Smart pause! Waiting breaks the impulse, and checking your budget protects your other goals.", retry: "That urgency is doing its job—making you act before thinking. Try giving yourself 24 hours." },
  { title: "The Sneaker Drop", description: "A limited drop tests your wants, goals, and patience.", question: "New $120 sneakers drop today, but you’ve saved $140 for a school trip. What’s your best move?", options: ["Use the trip money", "Ask to borrow the full amount", "Keep the trip money and plan for the shoes"], best: 2, good: "Nice! You protected an existing goal and can still make a separate shoe plan.", retry: "The shoes are tempting, but spending goal money trades something important for an impulse." },
  { title: "Free Robux?", description: "A suspicious message promises free game currency.", question: "A message promises free game currency if you enter your password. What do you do?", options: ["Enter it quickly", "Send it to a friend", "Close it and report it"], best: 2, good: "Exactly. Real giveaways should never need your password.", retry: "Passwords are private. A prize that asks for one is almost certainly a trap." },
  { title: "Lunch Money Choice", description: "Make today’s choice without forgetting Friday.", question: "You have $18 for three school lunches. Friends want a $12 takeout lunch today. What do you do?", options: ["Spend $12 today", "Check what the other lunches cost first", "Buy everyone lunch"], best: 1, good: "Good thinking. You checked the full week before making today’s choice.", retry: "Today’s lunch could leave you short later. Look at the whole week first." },
  { title: "Subscription Check", description: "A free trial is about to become a monthly charge.", question: "A free trial becomes $9.99/month tomorrow, and you barely used it. What’s best?", options: ["Cancel before renewal", "Forget about it", "Keep it just in case"], best: 0, good: "Correct! Canceling unused subscriptions keeps small charges from quietly adding up.", retry: "A monthly charge for something unused drains money from goals you actually care about." }
];

const officeTopicOrder = ["cash", "cards", "budget", "saving", "credit", "scams", "banking", "interest", "earning", "investing"];
const officeFloors = Object.fromEntries(Array.from({ length: 56 }, (_, index) => {
  const number = index + 1;
  const lessonId = officeTopicOrder[index % officeTopicOrder.length];
  const data = lessonContent[lessonId];
  const tier = Math.floor(index / officeTopicOrder.length) + 1;
  return [number, {
    name: `FLOOR ${number} · ${data.title.toUpperCase()}`,
    manager: data.npc,
    avatar: data.avatar,
    color: data.color,
    lessonId,
    intro: `Welcome to Lesson ${number}. This is ${data.title}, level ${tier}. Complete all three work desks to finish the floor and earn $15.`
  }];
}));

const officeLobbyNpcs = [
  { name: "Rae", avatar: "🛎️", x: 470, y: 235, color: "#d792a9", lines: ["Welcome to The Office! The elevator can take you to any lesson from Floor 1 to Floor 56.", "Each correct desk task pays $5 directly into your Cashville wallet.", "The lobby vending machine looks cheap, but I don’t trust that blinking screen."] },
  { name: "Omar", avatar: "💼", x: 620, y: 390, color: "#7ba8ca", lines: ["There are 56 lesson floors here, and every one is open from the start.", "Finishing a floor marks that lesson complete and pays $15 total.", "My best tip: read the whole question before choosing an answer."] }
];

const elevatorPoint = { x: 820, y: 230 };
const vendingPoint = { x: 165, y: 285 };
const weaponShopDoor = { x: 200, y: 730 };
const weaponShopReturnPoint = { x: 380, y: 730 };
const weaponShopExit = { x: 480, y: 485 };
const shopItems = [
  { name: "Healing Potion", icon: "♥", x: 220, y: 220, price: 5, key: "cashWisePotions" },
  { name: "Frost Axe", icon: "❄", x: 480, y: 220, price: 20, key: "cashWiseFrostAxe" },
  { name: "Phoenix Wand", icon: "✦", x: 730, y: 220, price: 30, key: "cashWisePhoenixWand" },
  { name: "Shadow Bow", icon: "➶", x: 480, y: 350, price: 25, key: "cashWiseShadowBow" }
];
const officeStations = [{ x: 245, y: 355 }, { x: 500, y: 235 }, { x: 735, y: 360 }];

const VIEW_WIDTH = 960;
const VIEW_HEIGHT = 540;
const WORLD_WIDTH = 4800;
const WORLD_HEIGHT = 4800;
const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");
const camera = { x: 0, y: 0 };
let canvasPixelRatio = 1;

function configureHighDpiCanvas() {
  canvasPixelRatio = Math.min(window.devicePixelRatio || 1, 3);
  canvas.width = Math.round(VIEW_WIDTH * canvasPixelRatio);
  canvas.height = Math.round(VIEW_HEIGHT * canvasPixelRatio);
  canvas.style.aspectRatio = `${VIEW_WIDTH} / ${VIEW_HEIGHT}`;
  ctx.setTransform(canvasPixelRatio, 0, 0, canvasPixelRatio, 0, 0);
  ctx.imageSmoothingEnabled = false;
}

configureHighDpiCanvas();
window.addEventListener("resize", configureHighDpiCanvas);
const modal = document.querySelector(".lesson-modal");
const cards = [...document.querySelectorAll(".lesson-card")];
const keys = new Set();
const stations = [{ x: 280, y: 350 }, { x: 520, y: 230 }, { x: 790, y: 360 }];
const dailyBoard = { x: 850, y: 360 };
const cashvilleObstacles = [
  { x: 175, y: 65, w: 200, h: 158 },
  { x: 395, y: 43, w: 190, h: 153 },
  { x: 620, y: 60, w: 205, h: 158 },
  { x: 60, y: 360, w: 180, h: 138 },
  { x: 695, y: 375, w: 170, h: 123 },
  { x: 60, y: 555, w: 280, h: 150 }
];
const expandedTownBuildings = [];
const expandedTownTrees = [];
const districtNames = ["THRIFT", "ARCADE", "MARKET", "LIBRARY", "DINER", "SAVINGS", "REPAIR", "STUDIO"];
for (let row = 0; row < 6; row++) {
  for (let column = 0; column < 6; column++) {
    if (row === 0 && column === 0) continue;
    const districtX = 150 + column * 720;
    const districtY = 65 + row * 720;
    expandedTownBuildings.push({ x: districtX, y: districtY, w: 185, h: 148, label: districtNames[(row * 6 + column) % districtNames.length], wall: "#d8b477", roof: "#87534d" });
    expandedTownBuildings.push({ x: districtX + 300, y: districtY + 350, w: 170, h: 130, label: "HOME", wall: "#a7c98d", roof: "#537550" });
    expandedTownTrees.push({ x: districtX - 70, y: districtY + 250 }, { x: districtX + 245, y: districtY + 220 }, { x: districtX + 520, y: districtY + 70 });
  }
}
const lessonObstacles = Array.from({ length: 6 }, (_, index) => ({
  x: 70 + index * 145,
  y: 117,
  w: 95,
  h: 82
}));
const officeLobbyObstacles = [
  { x: 105, y: 105, w: 120, h: 145 },
  { x: 755, y: 80, w: 140, h: 120 },
  { x: 380, y: 110, w: 180, h: 80 }
];
const officeFloorObstacles = [
  { x: 755, y: 80, w: 140, h: 120 },
  { x: 195, y: 265, w: 100, h: 50 },
  { x: 450, y: 145, w: 100, h: 50 },
  { x: 685, y: 270, w: 100, h: 50 }
];
let player = { x: 105, y: 440 };
let mode = "hub";
let currentLesson = null;
let currentTask = 0;
let playing = false;
let dialogueOpen = false;
let pendingDaily = false;
let ignoredNpc = null;
let currentFloor = 1;
let officeTask = 0;
let jumpOffset = 0;
let jumpVelocity = 0;
let bossHealth = 1000;
let bossMaxHealth = 1000;
let bossPhase = 1;
let playerHealth = 250;
let equippedWeapon = 0;
let attackCooldown = 0;
let bossAttackCooldown = 0;
let bossTransition = 0;
let bossPosition = { x: 730, y: 280 };
let slashTimer = 0;
let missiles = [];
let aimPoint = { x: 730, y: 280 };
let explosionTimer = 0;
let bossEnding = false;
let playerFacing = "down";
let rammageddonTimer = 1500;
let rammageddonMessageTimer = 0;
let animationFrame;
let lastTime = 0;

const storageKey = "cashWiseCompletedLessons";
function getSaved(key, fallback = []) { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } }
function completedLessons() { return getSaved(storageKey); }
function completedOfficeFloors() { return getSaved("cashWiseOfficeCompleted", []); }
function gameMoney() { return Number(localStorage.getItem("cashWiseGameMoney") || 0); }
function updateWallet() { document.querySelector("#game-money").textContent = gameMoney(); }
function changeMoney(amount) {
  const next = Math.max(0, gameMoney() + amount);
  localStorage.setItem("cashWiseGameMoney", next);
  updateWallet();
  return next;
}

function updateProgress() {
  const complete = completedOfficeFloors();
  const percent = Math.round((complete.length / 56) * 100);
  document.querySelector("#completed-count").textContent = complete.length;
  document.querySelector("#lesson-total").textContent = "56";
  document.querySelector("#progress-percent").textContent = `${percent}%`;
  const ring = document.querySelector(".progress-ring");
  ring.style.setProperty("--progress", `${percent * 3.6}deg`);
  ring.setAttribute("aria-label", `${percent} percent complete`);
  document.querySelector("#progress-message").textContent = percent === 100 ? "You finished all 56 Office floors—legendary!" : percent >= 50 ? "You’re over halfway up The Office. Keep working!" : "Enter The Office and choose any lesson floor from the elevator.";
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  cards.forEach(card => card.hidden = button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter);
}));

function openGameShell(title, world) {
  document.querySelector("#game-title").textContent = title;
  document.querySelector("#game-world").textContent = world;
  document.querySelector("#coin-count").textContent = "0";
  updateWallet();
  document.querySelector(".game-dialogue").hidden = true;
  document.querySelector(".game-finish").hidden = true;
  document.querySelector(".finish-button").textContent = "Back to lessons";
  dialogueOpen = false;
  ignoredNpc = null;
  playing = true;
  if (!modal.open) modal.showModal();
  lastTime = performance.now();
  cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(gameLoop);
}

function startCashville(goToDaily = false) {
  mode = "bedroom";
  pendingDaily = goToDaily;
  player = { x: 115, y: 430 };
  openGameShell("A new day", "CASHVILLE · BEDROOM");
  document.querySelector("#mission-count").textContent = "MORNING";
  document.querySelector("#mission-label").textContent = "Wake up and start your day";
  document.querySelector(".wake-screen").hidden = false;
}

function startDay() {
  mode = "hub";
  document.querySelector(".wake-screen").hidden = true;
  player = pendingDaily ? { x: 650, y: 340 } : { x: 260, y: 460 };
  document.querySelector("#game-title").textContent = "Cashville";
  document.querySelector("#game-world").textContent = "DAY 1 · SUNNY";
  document.querySelector("#mission-count").textContent = "TODAY";
  document.querySelector("#mission-label").textContent = pendingDaily ? "Walk to the glowing challenge board" : "Explore town and talk to your neighbors";
}

function startLesson(lessonId) {
  mode = "lesson";
  currentLesson = lessonId;
  currentTask = 0;
  player = { x: 105, y: 440 };
  const data = lessonContent[lessonId];
  openGameShell(data.title, data.world);
  document.querySelector(".wake-screen").hidden = true;
  updateMissionHud();
}

function enterOfficeLobby() {
  mode = "officeLobby";
  player = { x: 45, y: 310 };
  dialogueOpen = false;
  ignoredNpc = null;
  document.querySelector("#game-title").textContent = "The Office";
  document.querySelector("#game-world").textContent = "LOBBY · 9:00 AM";
  document.querySelector("#mission-count").textContent = "LEVEL 0";
  document.querySelector("#mission-label").textContent = "Choose any lesson from Floor 1 to Floor 56";
}

function enterOfficeFloor(floorNumber) {
  mode = "officeFloor";
  currentFloor = floorNumber;
  officeTask = 0;
  player = { x: 700, y: 245 };
  dialogueOpen = false;
  ignoredNpc = "elevator";
  const floor = officeFloors[floorNumber];
  document.querySelector("#game-title").textContent = floor.name;
  document.querySelector("#game-world").textContent = `THE OFFICE · LEVEL ${floorNumber}`;
  updateOfficeHud();
  openManagerDialogue();
}

function startOffice() {
  mode = "officeLobby";
  openGameShell("The Office", "LOBBY · 9:00 AM");
  document.querySelector(".wake-screen").hidden = true;
  enterOfficeLobby();
}

function updateOfficeHud() {
  document.querySelector("#mission-count").textContent = `LEVEL ${currentFloor} · JOB ${Math.min(officeTask + 1, 3)}/3`;
  document.querySelector("#mission-label").textContent = officeTask < 3 ? "Walk to the glowing work desk" : "Shift complete";
}

document.querySelector(".cashville-play").addEventListener("click", () => startCashville(false));
document.querySelector(".office-play").addEventListener("click", startOffice);
document.querySelector(".daily-play").addEventListener("click", () => startCashville(true));
document.querySelector(".start-day-button").addEventListener("click", startDay);
document.querySelectorAll(".lesson-button").forEach(button => button.addEventListener("click", () => startLesson(button.closest(".lesson-card").dataset.lesson)));

function updateMissionHud() {
  const task = lessonContent[currentLesson].tasks[currentTask];
  document.querySelector("#mission-count").textContent = `MISSION ${currentTask + 1}/3`;
  document.querySelector("#mission-label").textContent = task ? `Walk to: ${task[0]}` : "Lesson complete";
}

function gameLoop(time) {
  if (!playing) return;
  ctx.setTransform(canvasPixelRatio, 0, 0, canvasPixelRatio, 0, 0);
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, VIEW_WIDTH, VIEW_HEIGHT);
  const dt = Math.min((time - lastTime) / 16.67, 2);
  lastTime = time;
  updateJump(dt);
  if (!dialogueOpen && mode !== "bedroom") movePlayer(dt);
  if (mode === "hub") updateHubInteractions();
  if (mode === "lesson") updateLessonInteraction();
  if (mode === "officeLobby") updateOfficeLobbyInteractions();
  if (mode === "officeFloor") updateOfficeFloorInteractions();
  if (mode === "weaponShop") updateWeaponShopInteractions();
  if (mode === "boss") updateBossFight(dt);
  if (mode === "hub") updateCamera();
  else { camera.x = 0; camera.y = 0; }
  if (mode === "bedroom") drawBedroom();
  else if (mode === "hub") drawCashville(time);
  else if (mode === "lesson") drawLessonWorld(time);
  else if (mode === "officeLobby") drawOfficeLobby(time);
  else if (mode === "officeFloor") drawOfficeFloor(time);
  else if (mode === "weaponShop") drawWeaponShop(time);
  else drawBossArena(time);
  animationFrame = requestAnimationFrame(gameLoop);
}

function updateJump(dt) {
  if (jumpOffset > 0 || jumpVelocity > 0) {
    jumpOffset += jumpVelocity * dt;
    jumpVelocity -= 0.58 * dt;
    if (jumpOffset <= 0) { jumpOffset = 0; jumpVelocity = 0; }
  }
}

function updateBossFight(dt) {
  if (dialogueOpen || playerHealth <= 0) return;
  attackCooldown = Math.max(0, attackCooldown - dt);
  bossAttackCooldown = Math.max(0, bossAttackCooldown - dt);
  slashTimer = Math.max(0, slashTimer - dt);
  bossTransition = Math.max(0, bossTransition - dt);
  rammageddonMessageTimer = Math.max(0, rammageddonMessageTimer - dt);
  updateMissiles(dt);
  if (bossEnding) {
    explosionTimer = Math.max(0, explosionTimer - dt);
    if (explosionTimer === 0) { bossEnding = false; endBossFight(true); }
    return;
  }
  rammageddonTimer -= dt;
  if (rammageddonTimer <= 0) castRammageddon();
  const angle = Math.atan2(player.y - bossPosition.y, player.x - bossPosition.x);
  const bossSpeed = 0.95 + bossPhase * 0.18;
  bossPosition.x += Math.cos(angle) * bossSpeed * dt;
  bossPosition.y += Math.sin(angle) * bossSpeed * dt;
  if (Math.hypot(player.x - bossPosition.x, player.y - bossPosition.y) < 58 && jumpOffset < 8 && bossAttackCooldown <= 0) {
    playerHealth = Math.max(0, playerHealth - (15 + bossPhase * 5));
    bossAttackCooldown = Math.max(24, 52 - bossPhase * 4);
    if (playerHealth === 0) endBossFight(false);
  }
}

function castRammageddon() {
  playerHealth = Math.max(1, Math.ceil(playerHealth / 2));
  rammageddonTimer = 1500;
  rammageddonMessageTimer = 210;
}

function updateMissiles(dt) {
  missiles.forEach(missile => {
    missile.x += missile.vx * dt;
    missile.y += missile.vy * dt;
    missile.life -= dt;
    if (!bossEnding && Math.hypot(missile.x - bossPosition.x, missile.y - bossPosition.y) < 58) {
      missile.life = 0;
      damageBoss(missile.damage);
    }
  });
  missiles = missiles.filter(missile => missile.life > 0 && missile.x > 0 && missile.x < VIEW_WIDTH && missile.y > 60 && missile.y < VIEW_HEIGHT);
}

function damageBoss(amount) {
  if (bossEnding || bossHealth <= 0) return;
  bossHealth = Math.max(0, bossHealth - amount);
  if (bossHealth > 0) return;
  if (bossPhase < 6) {
    bossPhase++;
    bossMaxHealth = [0, 1000, 1200, 1400, 1600, 1800, 2200][bossPhase];
    bossHealth = bossMaxHealth;
    bossPosition = { x: 710 + (bossPhase % 2) * 60, y: 220 + (bossPhase % 3) * 70 };
    bossTransition = 45;
    bossAttackCooldown = 65;
    missiles = [];
    document.querySelector("#mission-count").textContent = `BOSS PHASE ${bossPhase}/6`;
    document.querySelector("#mission-label").textContent = `Omar transformed! Phase ${bossPhase} has ${bossMaxHealth} health`;
  } else {
    bossEnding = true;
    explosionTimer = 105;
    missiles = [];
    document.querySelector("#mission-count").textContent = "FINAL EXPLOSION";
    document.querySelector("#mission-label").textContent = "Demon Omar is overloading—stand back!";
  }
}

function updateCamera() {
  camera.x = Math.max(0, Math.min(WORLD_WIDTH - VIEW_WIDTH, player.x - VIEW_WIDTH / 2));
  camera.y = Math.max(0, Math.min(WORLD_HEIGHT - VIEW_HEIGHT, player.y - VIEW_HEIGHT / 2));
}

function movePlayer(dt) {
  const speed = 3.4 * dt;
  let dx = 0;
  let dy = 0;
  if (keys.has("w") || keys.has("arrowup")) dy -= speed;
  if (keys.has("s") || keys.has("arrowdown")) dy += speed;
  if (keys.has("a") || keys.has("arrowleft")) dx -= speed;
  if (keys.has("d") || keys.has("arrowright")) dx += speed;
  if (Math.abs(dx) >= Math.abs(dy) && dx !== 0) playerFacing = dx > 0 ? "right" : "left";
  else if (dy !== 0) playerFacing = dy > 0 ? "down" : "up";

  // Crossing any part of Cashville's reachable eastern edge enters The Office.
  // This check must happen before world-boundary clamping below.
  if (mode === "hub" && dx > 0 && player.x + dx >= WORLD_WIDTH - 36) {
    enterOfficeLobby();
    return;
  }
  if (mode === "officeLobby" && player.x + dx < 18 && player.y > 245 && player.y < 385) {
    mode = "hub";
    player = { x: WORLD_WIDTH - 90, y: 310 };
    ignoredNpc = null;
    document.querySelector("#game-title").textContent = "Cashville";
    document.querySelector("#game-world").textContent = "DAY 1 · SUNNY";
    document.querySelector("#mission-count").textContent = "TODAY";
    document.querySelector("#mission-label").textContent = "Explore town or head east to The Office";
    return;
  }

  // Resolve each axis separately so the player slides naturally along walls.
  const maxX = mode === "hub" ? WORLD_WIDTH - 35 : VIEW_WIDTH - 35;
  const maxY = mode === "hub" ? WORLD_HEIGHT - 40 : VIEW_HEIGHT - 40;
  const nextX = Math.max(35, Math.min(maxX, player.x + dx));
  if (!positionIsBlocked(nextX, player.y)) player.x = nextX;
  const nextY = Math.max(mode === "hub" ? 35 : 100, Math.min(maxY, player.y + dy));
  if (!positionIsBlocked(player.x, nextY)) player.y = nextY;
}

function positionIsBlocked(x, y) {
  const obstacles = mode === "hub" ? [...cashvilleObstacles, ...expandedTownBuildings] :
    mode === "lesson" ? lessonObstacles :
    mode === "officeLobby" ? officeLobbyObstacles :
    mode === "officeFloor" ? officeFloorObstacles : [];
  // Only the character's feet collide, which keeps the top-down perspective natural.
  const feet = { left: x - 12, right: x + 12, top: y - 8, bottom: y + 9 };
  return obstacles.some(obstacle =>
    feet.right > obstacle.x &&
    feet.left < obstacle.x + obstacle.w &&
    feet.bottom > obstacle.y &&
    feet.top < obstacle.y + obstacle.h
  );
}

function updateHubInteractions() {
  if (dialogueOpen) return;
  if (Math.hypot(player.x - weaponShopDoor.x, player.y - weaponShopDoor.y) < 45 && ignoredNpc !== "weaponShop") return enterWeaponShop();
  if (Math.hypot(player.x - dailyBoard.x, player.y - dailyBoard.y) < 44 && ignoredNpc !== "daily") return openDailyChallenge();
  const nearby = cashvilleNpcs.find(npc => Math.hypot(player.x - npc.x, player.y - npc.y) < 38);
  if (nearby && ignoredNpc !== nearby.name) openNpcDialogue(nearby);
  if (ignoredNpc) {
    const old = ignoredNpc === "daily" ? dailyBoard : ignoredNpc === "weaponShop" ? weaponShopDoor : cashvilleNpcs.find(npc => npc.name === ignoredNpc);
    if (old && Math.hypot(player.x - old.x, player.y - old.y) > 68) ignoredNpc = null;
  }
}

function updateLessonInteraction() {
  if (dialogueOpen) return;
  const target = stations[currentTask];
  if (target && Math.hypot(player.x - target.x, player.y - target.y) < 42) openLessonQuestion();
}

function updateOfficeLobbyInteractions() {
  if (dialogueOpen) return;
  if (Math.hypot(player.x - elevatorPoint.x, player.y - elevatorPoint.y) < 42 && ignoredNpc !== "elevator") return openElevator();
  if (Math.hypot(player.x - vendingPoint.x, player.y - vendingPoint.y) < 42 && ignoredNpc !== "vending") return openVendingMachine();
  const nearby = officeLobbyNpcs.find(npc => Math.hypot(player.x - npc.x, player.y - npc.y) < 38);
  if (nearby && ignoredNpc !== nearby.name) {
    if (nearby.name === "Omar") {
      if (localStorage.getItem("cashWiseVendingScammed") === "true") openOmarReveal();
      return;
    }
    openNpcDialogue(nearby);
  }
  resetIgnoredOfficeTarget();
}

function updateWeaponShopInteractions() {
  if (dialogueOpen) return;
  if (Math.hypot(player.x - weaponShopExit.x, player.y - weaponShopExit.y) < 42 && ignoredNpc !== "shopExit") return leaveWeaponShop();
  const item = shopItems.find(entry => Math.hypot(player.x - entry.x, player.y - entry.y) < 40);
  if (item && ignoredNpc !== item.key) openShopItem(item);
  if (ignoredNpc) {
    const old = ignoredNpc === "shopExit" ? weaponShopExit : shopItems.find(entry => entry.key === ignoredNpc);
    if (old && Math.hypot(player.x - old.x, player.y - old.y) > 70) ignoredNpc = null;
  }
}

function updateOfficeFloorInteractions() {
  if (dialogueOpen) return;
  if (Math.hypot(player.x - elevatorPoint.x, player.y - elevatorPoint.y) < 42 && ignoredNpc !== "elevator") return openElevator();
  const floor = officeFloors[currentFloor];
  const manager = { name: floor.manager, x: 480, y: 425, avatar: floor.avatar, color: floor.color, lines: [floor.intro, "Every correct report pays $5. Your wallet stays with you across Cashville.", "All 56 floors are open, so choose any lesson from the elevator."] };
  if (Math.hypot(player.x - manager.x, player.y - manager.y) < 38 && ignoredNpc !== manager.name) return openNpcDialogue(manager);
  const target = officeStations[officeTask];
  if (target && Math.hypot(player.x - target.x, player.y - target.y) < 42) return openOfficeJob();
  resetIgnoredOfficeTarget();
}

function resetIgnoredOfficeTarget() {
  if (!ignoredNpc) return;
  let old = ignoredNpc === "elevator" ? elevatorPoint : ignoredNpc === "vending" ? vendingPoint : officeLobbyNpcs.find(npc => npc.name === ignoredNpc);
  if (!old && mode === "officeFloor") old = { x: 480, y: 425 };
  if (old && Math.hypot(player.x - old.x, player.y - old.y) > 70) ignoredNpc = null;
}

function enterWeaponShop() {
  mode = "weaponShop";
  player = { x: 480, y: 440 };
  ignoredNpc = "shopExit";
  camera.x = 0; camera.y = 0;
  document.querySelector("#game-title").textContent = "For When You Will Need It";
  document.querySelector("#game-world").textContent = "ENCHANTED WEAPON SHOP";
  document.querySelector("#mission-count").textContent = "SECRET SHOP";
  document.querySelector("#mission-label").textContent = "Explore the enchanted weapons and potions";
  if (localStorage.getItem("cashWiseSwordOwned") !== "true") openWizardGreeting();
}

function openWizardGreeting() {
  setDialogue("Mysterious Wizard", "🧙", "At last! Take this enchanted sword. Its blade deals 50 damage—but only draw it when the demon appears.", [
    { label: "I won't ever need this!", action: acceptWizardSword }
  ]);
}

function acceptWizardSword() {
  localStorage.setItem("cashWiseSwordOwned", "true");
  setDialogue("You", "🗡️", "I won't ever need this!", [
    { label: "Watch the wizard vanish", action: () => closeDialogue(null) }
  ]);
}

function leaveWeaponShop() {
  mode = "hub";
  player = { ...weaponShopReturnPoint };
  ignoredNpc = "weaponShop";
  document.querySelector("#game-title").textContent = "Cashville";
  document.querySelector("#game-world").textContent = "DAY 1 · SUNNY";
  document.querySelector("#mission-count").textContent = "TODAY";
  document.querySelector("#mission-label").textContent = "Explore town or follow the east road to The Office";
}

function openShopItem(item) {
  const owned = item.key === "cashWisePotions" ? Number(localStorage.getItem(item.key) || 0) : localStorage.getItem(item.key) === "true";
  setDialogue("Enchanted Display", item.icon, `${item.name} — $${item.price}. ${owned ? "You already own this item." : "Purchase it?"}`, [
    { label: item.name === "Healing Potion" ? "Buy one" : "Buy it", action: () => buyShopItem(item) },
    { label: "Leave it", action: () => closeDialogue(item.key) }
  ]);
}

function buyShopItem(item) {
  if (gameMoney() < item.price) {
    setDialogue("Enchanted Display", "💸", `You need $${item.price}, but your wallet has $${gameMoney()}.`, [{ label: "Okay", action: () => closeDialogue(item.key) }]);
    return;
  }
  changeMoney(-item.price);
  if (item.key === "cashWisePotions") localStorage.setItem(item.key, Number(localStorage.getItem(item.key) || 0) + 1);
  else localStorage.setItem(item.key, "true");
  setDialogue("Enchanted Display", item.icon, `${item.name} added to your inventory.`, [{ label: "Nice", action: () => closeDialogue(item.key) }]);
}

function openOmarReveal() {
  setDialogue("Omar", "💼", "You actually bought RAMAGEDDON from that machine? Then the contract is complete…", [
    { label: "What contract?", action: revealDemonOmar },
    { label: "Omar, what is happening?", action: revealDemonOmar },
    { label: "Back away", action: revealDemonOmar }
  ]);
}

function revealDemonOmar() {
  setDialogue("Demon Omar", "😈", "YOUR TEN DOLLARS HAVE OPENED THE GATE. CASHVILLE DISSOLVES NOW!", [
    { label: "Face Demon Omar", action: startBossFight }
  ]);
}

function startBossFight() {
  mode = "boss";
  dialogueOpen = false;
  document.querySelector(".game-dialogue").hidden = true;
  player = { x: 220, y: 330 };
  playerHealth = 250;
  bossPhase = 1;
  bossMaxHealth = 1000;
  bossHealth = 1000;
  bossPosition = { x: 730, y: 280 };
  equippedWeapon = 0;
  attackCooldown = 0;
  bossAttackCooldown = 70;
  bossTransition = 130;
  bossEnding = false;
  explosionTimer = 0;
  missiles = [];
  playerFacing = "right";
  rammageddonTimer = 1500;
  rammageddonMessageTimer = 0;
  document.querySelector("#game-title").textContent = "Demon Omar";
  document.querySelector("#game-world").textContent = "RAMAGEDDON ARENA";
  document.querySelector("#mission-count").textContent = "BOSS PHASE 1/6";
  document.querySelector("#mission-label").textContent = "Press 1 for sword · 2 for launcher · Click to attack · Space to jump";
}

function endBossFight(won) {
  dialogueOpen = true;
  if (won) changeMoney(100);
  document.querySelector("#finish-message").textContent = won ? "Demon Omar defeated! You survived RAMAGEDDON and earned $100." : "Demon Omar defeated you. Visit the weapon shop, stock up, and try again.";
  document.querySelector(".game-finish h3").textContent = won ? "Boss defeated!" : "You were defeated";
  document.querySelector(".finish-button").textContent = "Return to Cashville";
  document.querySelector(".game-finish").hidden = false;
}

function setDialogue(name, avatar, text, buttons) {
  dialogueOpen = true;
  keys.clear();
  document.querySelector("#speaker-name").textContent = name;
  document.querySelector(".npc-avatar").textContent = avatar;
  document.querySelector("#game-question").textContent = text;
  const box = document.querySelector(".game-answers");
  box.innerHTML = "";
  buttons.forEach(({ label, action }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", action);
    box.appendChild(button);
  });
  document.querySelector(".game-dialogue").hidden = false;
}

function closeDialogue(ignore) {
  document.querySelector(".game-dialogue").hidden = true;
  dialogueOpen = false;
  ignoredNpc = ignore;
}

function openNpcDialogue(npc) {
  if (npc.name === "Rae") {
    setDialogue("Rae · Lobbyist", npc.avatar, "Welcome! What do you need?", [
      { label: "What about the vending machine?", action: () => showRaeVendingResponse(npc) },
      { label: "How do the 56 floors work?", action: () => showNpcResponse(npc, 0) },
      { label: "How do I earn money?", action: () => showNpcResponse(npc, 1) }
    ]);
    return;
  }
  setDialogue(npc.name, npc.avatar, `Hey! What do you want to talk about?`, [
    { label: "What are you working on?", action: () => showNpcResponse(npc, 0) },
    { label: "Teach me something", action: () => showNpcResponse(npc, 1) },
    { label: "Give me one money tip", action: () => showNpcResponse(npc, 2) }
  ]);
}

function showRaeVendingResponse(npc) {
  const response = localStorage.getItem("cashWiseVendingScammed") === "true"
    ? "NO MORE RAMAGEDDON!"
    : "That machine has been acting strange. Check it carefully before spending anything.";
  setDialogue("Rae · Lobbyist", npc.avatar, response, [
    { label: "Ask something else", action: () => openNpcDialogue(npc) },
    { label: "Thanks", action: () => closeDialogue(npc.name) }
  ]);
}

function showNpcResponse(npc, responseIndex) {
  setDialogue(npc.name, npc.avatar, npc.lines[responseIndex], [
    { label: "Ask something else", action: () => openNpcDialogue(npc) },
    { label: "Thanks—see you!", action: () => closeDialogue(npc.name) }
  ]);
}

function openManagerDialogue() {
  const floor = officeFloors[currentFloor];
  const manager = { name: floor.manager, avatar: floor.avatar, lines: [floor.intro, "Each glowing desk is part of this floor’s Cash Wise lesson.", "Complete all three jobs to earn $15, then choose any other floor."] };
  openNpcDialogue(manager);
}

function openElevator() {
  const buttons = [{ label: "Lobby", action: () => { closeDialogue("elevator"); enterOfficeLobby(); player = { x: 700, y: 245 }; } }];
  for (let start = 1; start <= 56; start += 8) {
    const end = Math.min(56, start + 7);
    buttons.push({ label: `Floors ${start}–${end}`, action: () => openElevatorRange(start) });
  }
  setDialogue("Elevator", "🛗", "Choose a lesson-floor range. All 56 floors are open.", buttons);
}

function openElevatorRange(start) {
  const end = Math.min(56, start + 7);
  const complete = completedOfficeFloors();
  const buttons = [];
  for (let floor = start; floor <= end; floor++) {
    buttons.push({ label: `${complete.includes(floor) ? "✓ " : ""}Lesson ${floor}`, action: () => enterOfficeFloor(floor) });
  }
  buttons.push({ label: "← Floor directory", action: openElevator });
  setDialogue("Elevator", "🛗", `Lessons ${start}–${end}. Choose any floor.`, buttons);
}

function openVendingMachine() {
  setDialogue("Vending Machine", "🥤", `RAMAGEDDON ENERGY — $10. The display says “LAST ONE!” Do you want to buy it?`, [
    { label: "Buy it for $10", action: buyVendingItem },
    { label: "Check the machine first", action: inspectVendingMachine },
    { label: "Keep my money", action: () => closeDialogue("vending") }
  ]);
}

function inspectVendingMachine() {
  localStorage.setItem("cashWiseMissileOwned", "true");
  setDialogue("Vending Machine", "🚀", "Behind the machine you find a strange enchanted missile launcher. You take it, but there is no damage label anywhere.", [
    { label: "Buy it anyway", action: buyVendingItem },
    { label: "Walk away", action: () => closeDialogue("vending") }
  ]);
}

function buyVendingItem() {
  if (gameMoney() < 10) {
    setDialogue("Vending Machine", "💸", `You only have $${gameMoney()}. You need $10. Work upstairs first.`, [{ label: "Okay", action: () => closeDialogue("vending") }]);
    return;
  }
  changeMoney(-10);
  localStorage.setItem("cashWiseVendingScammed", "true");
  setDialogue("Vending Machine", "🚫", "The machine took your $10, but nothing came out—OUT OF STOCK. You got scammed! Maybe Rae the lobbyist knows what happened.", [{ label: "Ask Rae about it", action: () => closeDialogue("vending") }]);
}

function openOfficeJob() {
  const floor = officeFloors[currentFloor];
  const lessonId = floor.lessonId;
  const data = lessonContent[lessonId];
  const task = data.tasks[officeTask % data.tasks.length];
  setDialogue(`${floor.manager} · Work Desk`, data.avatar, `${data.title}: ${task[1]}`, task[2].map((answer, index) => ({ label: answer, action: event => answerOfficeJob(event.currentTarget, index === task[3], lessonId) })));
}

function answerOfficeJob(button, correct, lessonId) {
  if (!correct) {
    button.classList.add("wrong");
    document.querySelector("#game-question").textContent = "That report needs another look. Try again—your pay depends on accuracy!";
    setTimeout(() => button.classList.remove("wrong"), 350);
    return;
  }
  changeMoney(5);
  officeTask++;
  closeDialogue(null);
  document.querySelector("#coin-count").textContent = officeTask;
  if (officeTask < 3) {
    player = { x: officeStations[officeTask - 1].x - 65, y: officeStations[officeTask - 1].y + 62 };
    updateOfficeHud();
    return;
  }
  finishOfficeFloor();
}

function finishOfficeFloor() {
  const complete = completedOfficeFloors();
  if (!complete.includes(currentFloor)) complete.push(currentFloor);
  localStorage.setItem("cashWiseOfficeCompleted", JSON.stringify(complete));
  updateProgress();
  dialogueOpen = true;
  document.querySelector("#finish-message").textContent = `Lesson ${currentFloor} complete! You earned $15. Use the elevator to choose any other lesson from 1–56.`;
  document.querySelector(".game-finish").hidden = false;
  document.querySelector(".finish-button").textContent = "Return to the lobby";
}

function openLessonQuestion() {
  const data = lessonContent[currentLesson];
  const task = data.tasks[currentTask];
  setDialogue(data.npc, data.avatar, task[1], task[2].map((answer, index) => ({ label: answer, action: event => chooseLessonAnswer(event.currentTarget, index === task[3]) })));
}

function chooseLessonAnswer(button, correct) {
  if (!correct) {
    button.classList.add("wrong");
    document.querySelector("#game-question").textContent = "Not quite—think it through and try again.";
    setTimeout(() => button.classList.remove("wrong"), 350);
    return;
  }
  currentTask++;
  document.querySelector("#coin-count").textContent = currentTask;
  closeDialogue(null);
  if (currentTask === 3) finishLesson();
  else {
    player = { x: stations[currentTask - 1].x - 70, y: stations[currentTask - 1].y + 65 };
    updateMissionHud();
  }
}

function openDailyChallenge() {
  const mission = dailyMissions[dailyIndex];
  setDialogue("Penny", "📱", mission.question, mission.options.map((answer, index) => ({ label: answer, action: () => answerDaily(index === mission.best) })));
}

function answerDaily(best) {
  const mission = dailyMissions[dailyIndex];
  if (!best) {
    setDialogue("Penny", "🤔", mission.retry, [{ label: "Think again", action: openDailyChallenge }]);
    return;
  }
  setDialogue("Penny", "✨", mission.good, [{ label: "Challenge complete!", action: completeDaily }]);
}

function completeDaily() {
  localStorage.setItem("cashWiseDailyLast", localDate());
  updateDaily();
  closeDialogue("daily");
  pendingDaily = false;
  document.querySelector("#coin-count").textContent = "3";
  document.querySelector("#mission-label").textContent = "Daily challenge complete—explore Cashville!";
}

function finishLesson() {
  dialogueOpen = true;
  const complete = completedLessons();
  if (!complete.includes(currentLesson)) complete.push(currentLesson);
  localStorage.setItem(storageKey, JSON.stringify(complete));
  updateProgress();
  document.querySelector("#finish-message").textContent = `${lessonContent[currentLesson].npc} says: Great work! You earned 3 Cash Coins.`;
  document.querySelector(".game-finish").hidden = false;
}

function drawBedroom() {
  ctx.fillStyle = "#2b2430"; ctx.fillRect(0, 0, 960, 540);
  ctx.fillStyle = "#c99f75"; ctx.fillRect(70, 70, 820, 410);
  drawTiles(90, 90, 780, 370, "#d9b98d", "#cda979", 32);
  pixelRect(130, 130, 230, 150, "#6b8eb2", "#3f5c79");
  pixelRect(150, 150, 190, 110, "#e8dfc7", "#806d5b");
  pixelRect(150, 150, 55, 40, "#fff4d5", "#b69f7e");
  drawPixelPerson(240, 210, "#4d755c", "#e0a87f", false);
  pixelRect(620, 125, 150, 120, "#86bdcf", "#446773");
  ctx.fillStyle = "#ffe477"; ctx.fillRect(636, 140, 55, 45);
  pixelRect(620, 330, 150, 80, "#8c674d", "#553f32");
  ctx.fillStyle = "#f3e6bd"; ctx.font = "800 20px monospace"; ctx.textAlign = "center"; ctx.fillText("YOUR ROOM", 480, 45);
}

function drawCashville(time) {
  ctx.save();
  ctx.translate(-camera.x, -camera.y);
  ctx.fillStyle = "#79b86a"; ctx.fillRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
  drawVisibleWorldGrass();
  ctx.fillStyle = "#d8b36e";
  for (let offset = 0; offset < WORLD_HEIGHT; offset += 720) ctx.fillRect(0, 268 + offset, WORLD_WIDTH, 82);
  for (let offset = 0; offset < WORLD_WIDTH; offset += 720) ctx.fillRect(430 + offset, 0, 90, WORLD_HEIGHT);
  ctx.fillStyle = "#c99e5d";
  for (let roadY = 303; roadY < WORLD_HEIGHT; roadY += 720) for (let x = 0; x < WORLD_WIDTH; x += 38) ctx.fillRect(x, roadY, 22, 5);
  for (let roadX = 471; roadX < WORLD_WIDTH; roadX += 720) for (let y = 0; y < WORLD_HEIGHT; y += 38) ctx.fillRect(roadX, y, 5, 22);
  ctx.fillStyle = "#5ba4b1"; ctx.fillRect(0, 70, 170, 135); ctx.fillStyle = "#8dd2d5"; for (let y = 82; y < 200; y += 22) for (let x = 5; x < 165; x += 34) ctx.fillRect(x + ((y/22)%2)*8, y, 18, 4);
  drawHouse(185, 70, 180, 145, "PAYDAY CAFE", "#e9bd63", "#8d4a3e");
  drawHouse(405, 48, 170, 140, "BANK", "#8ebbd4", "#4f6d8c");
  drawHouse(630, 65, 185, 145, "MARKET", "#c39add", "#71558d");
  drawHouse(70, 365, 160, 125, "YOUR HOME", "#e7c895", "#9b5a52");
  drawHouse(705, 380, 150, 110, "TRAINING", "#9dcf8d", "#47704a");
  drawHouse(70, 560, 260, 135, "FOR WHEN YOU WILL NEED IT", "#776486", "#35283e");
  expandedTownBuildings.forEach(building => {
    if (worldRectIsVisible(building.x - 15, building.y - 30, building.w + 30, building.h + 55)) drawHouse(building.x, building.y, building.w, building.h, building.label, building.wall, building.roof);
  });
  [[38,235],[120,235],[875,95],[875,220],[580,420],[280,475],[905,470]].forEach(([x,y]) => drawTree(x,y));
  expandedTownTrees.forEach(tree => { if (worldRectIsVisible(tree.x - 35, tree.y - 55, 70, 100)) drawTree(tree.x, tree.y); });
  cashvilleNpcs.forEach(npc => { drawPixelPerson(npc.x, npc.y, npc.color, "#d9a078", true); drawNameTag(npc.name, npc.x, npc.y - 45); });
  drawDailyBoard(time);
  ctx.fillStyle = "#fff0a8"; ctx.fillRect(887, 272, 73, 48); ctx.fillStyle = "#4c3b31"; ctx.font = "800 10px monospace"; ctx.textAlign = "center"; ctx.fillText("EAST", 923, 288); ctx.fillText("DISTRICTS →", 923, 302);
  ctx.fillStyle = "#fff0a8"; ctx.fillRect(WORLD_WIDTH - 100, 272, 100, 48); ctx.fillStyle = "#4c3b31"; ctx.fillText("THE OFFICE →", WORLD_WIDTH - 50, 300);
  drawPlayerCharacter();
  ctx.restore();
  ctx.fillStyle = "#173d34"; ctx.font = "800 15px monospace"; ctx.textAlign = "center"; ctx.fillText(pendingDaily ? "Find the glowing DAILY CHALLENGE board" : "Talk to neighbors · Follow the east road to work", 480, 522);
}

function drawVisibleWorldGrass() {
  const size = 32;
  const startX = Math.max(0, Math.floor(camera.x / size) * size);
  const startY = Math.max(0, Math.floor(camera.y / size) * size);
  const endX = Math.min(WORLD_WIDTH, camera.x + VIEW_WIDTH + size);
  const endY = Math.min(WORLD_HEIGHT, camera.y + VIEW_HEIGHT + size);
  for (let y = startY; y < endY; y += size) {
    for (let x = startX; x < endX; x += size) {
      ctx.fillStyle = ((x / size + y / size) % 2) ? "#83c273" : "#79b86a";
      ctx.fillRect(x, y, size, size);
    }
  }
}

function worldRectIsVisible(x, y, width, height) {
  return x + width > camera.x && x < camera.x + VIEW_WIDTH && y + height > camera.y && y < camera.y + VIEW_HEIGHT;
}

function drawDailyBoard(time) {
  const pulse = 0.5 + Math.sin(time / 180) * 0.2;
  ctx.fillStyle = `rgba(255,238,112,${pulse})`; ctx.fillRect(dailyBoard.x - 38, dailyBoard.y - 62, 76, 76);
  pixelRect(dailyBoard.x - 31, dailyBoard.y - 56, 62, 50, "#ffe577", "#5f4932");
  ctx.fillStyle = "#5f4932"; ctx.fillRect(dailyBoard.x - 24, dailyBoard.y - 49, 48, 5); ctx.fillRect(dailyBoard.x - 4, dailyBoard.y - 6, 8, 34);
  ctx.font = "800 9px monospace"; ctx.textAlign = "center"; ctx.fillText("DAILY", dailyBoard.x, dailyBoard.y - 30); ctx.fillText("CHOICE", dailyBoard.x, dailyBoard.y - 18);
}

function drawWeaponShop(time) {
  ctx.fillStyle = "#1e1725"; ctx.fillRect(0, 0, VIEW_WIDTH, VIEW_HEIGHT);
  ctx.fillStyle = "#4a3654"; ctx.fillRect(25, 55, 910, 445);
  drawTiles(40, 70, 880, 410, "#503b59", "#46324e", 40);
  ctx.fillStyle = "#b77ee0"; ctx.fillRect(25, 55, 910, 24);
  ctx.fillStyle = "#f3db93"; ctx.font = "800 16px monospace"; ctx.textAlign = "center"; ctx.fillText("FOR WHEN YOU WILL NEED IT", 480, 44);
  shopItems.forEach((item, index) => {
    const glow = 0.25 + Math.sin(time / 180 + index) * 0.12;
    ctx.fillStyle = `rgba(220,150,255,${glow})`; ctx.fillRect(item.x - 48, item.y - 76, 96, 90);
    pixelRect(item.x - 38, item.y - 60, 76, 54, "#765082", "#2b2032");
    ctx.fillStyle = "#fff1bd"; ctx.font = "800 24px monospace"; ctx.fillText(item.icon, item.x, item.y - 26);
    ctx.font = "800 10px monospace"; ctx.fillText(`${item.name} $${item.price}`, item.x, item.y + 8);
  });
  pixelRect(390, 420, 180, 60, "#704b38", "#35261f");
  ctx.fillStyle = "#f5e3ad"; ctx.font = "800 11px monospace"; ctx.fillText("EXIT TO CASHVILLE", 480, 455);
  if (localStorage.getItem("cashWiseSwordOwned") !== "true") {
    drawPixelPerson(850, 390, "#704d91", "#b88b68", true); drawNameTag("Wizard", 850, 345);
  }
  drawPlayerCharacter();
  ctx.fillStyle = "#f2deaa"; ctx.font = "800 13px monospace"; ctx.fillText("Walk to an enchanted display to inspect it", 480, 522);
}

function drawBossArena(time) {
  ctx.fillStyle = "#210b12"; ctx.fillRect(0, 0, VIEW_WIDTH, VIEW_HEIGHT);
  ctx.fillStyle = "#4d1520"; ctx.fillRect(24, 72, 912, 440);
  for (let y = 82; y < 500; y += 42) for (let x = 34; x < 930; x += 42) {
    ctx.fillStyle = ((x + y) / 42) % 2 < 1 ? "#5e1b24" : "#4a121d"; ctx.fillRect(x, y, 40, 40);
  }
  ctx.fillStyle = "#ff6a22";
  for (let x = 30; x < 930; x += 110) { const height = 12 + Math.sin(time/130 + x)*8; ctx.fillRect(x, 488-height, 65, height); }
  drawDemonOmar();
  missiles.forEach(missile => {
    ctx.fillStyle = missile.kind === "fire" ? "#ff7433" : missile.kind === "arrow" ? "#e5d5a7" : "#ffdb58";
    const length = missile.kind === "arrow" ? 30 : 24;
    ctx.fillRect(missile.x - length/2, missile.y - 5, length, missile.kind === "arrow" ? 4 : 10);
    if (missile.kind === "missile") { ctx.fillStyle = "#ff5b2d"; ctx.fillRect(missile.x - Math.sign(missile.vx) * 18, missile.y - 3, 10, 6); }
  });
  drawPlayerCharacter();
  if (slashTimer > 0 && (equippedWeapon === 1 || equippedWeapon === 4)) { ctx.strokeStyle = equippedWeapon === 4 ? "#8eeaff" : "#fff0a0"; ctx.lineWidth = 9; ctx.beginPath(); ctx.arc(player.x, player.y - jumpOffset, 58, -0.8, 1.1); ctx.stroke(); }
  drawBossHealthBars();
  if (bossTransition > 0) {
    ctx.fillStyle = `rgba(210,201,184,${Math.min(1, bossTransition/80)})`;
    for (let y = 80; y < 500; y += 32) for (let x = 32; x < 930; x += 32) if (((x * 7 + y * 13) % 130) < bossTransition) ctx.fillRect(x, y, 30, 30);
  }
  if (bossEnding) drawFinalExplosion();
  if (rammageddonMessageTimer > 0) {
    ctx.fillStyle = "rgba(50,0,18,.92)"; ctx.fillRect(145, 82, 670, 58);
    ctx.strokeStyle = "#ff4658"; ctx.lineWidth = 4; ctx.strokeRect(145, 82, 670, 58);
    ctx.fillStyle = "#fff0d1"; ctx.font = "800 16px monospace"; ctx.textAlign = "center";
    ctx.fillText("OMAR CASTED RAMMAGEDDON AND YOUR HEALTH GETS HALVED.", 480, 116);
  }
  if (equippedWeapon === 2 && !bossEnding) {
    ctx.strokeStyle = "#ffe86b"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(aimPoint.x, aimPoint.y, 13, 0, Math.PI * 2); ctx.moveTo(aimPoint.x - 20, aimPoint.y); ctx.lineTo(aimPoint.x + 20, aimPoint.y); ctx.moveTo(aimPoint.x, aimPoint.y - 20); ctx.lineTo(aimPoint.x, aimPoint.y + 20); ctx.stroke();
  }
  ctx.fillStyle = "#ffe6bb"; ctx.font = "800 12px monospace"; ctx.textAlign = "center";
  const weaponText = ({ 1: "SWORD · 50", 2: "MISSILE · 200", 4: "FROST AXE · 90", 5: "PHOENIX WAND · 120", 6: "SHADOW BOW · 75" })[equippedWeapon] || "1–6 EQUIP · 3 POTION";
  ctx.fillText(`${weaponText} · CLICK ATTACK · SPACE JUMP`, 480, 528);
}

function drawDemonOmar() {
  const x = bossPosition.x, y = bossPosition.y;
  ctx.fillStyle = "rgba(0,0,0,.35)"; ctx.fillRect(x-38,y+35,76,12);
  ctx.fillStyle = "#781629"; ctx.fillRect(x-38,y-40,76,80);
  ctx.fillStyle = "#c12e34"; ctx.fillRect(x-30,y-70,60,38);
  ctx.fillStyle = "#2a1018"; ctx.fillRect(x-38,y-82,18,25); ctx.fillRect(x+20,y-82,18,25);
  ctx.fillStyle = "#ffe96b"; ctx.fillRect(x-18,y-56,10,8); ctx.fillRect(x+8,y-56,10,8);
  ctx.fillStyle = "#ee5039"; ctx.fillRect(x-52,y-28,14,52); ctx.fillRect(x+38,y-28,14,52);
  ctx.fillStyle = "#f3d38a"; ctx.font = "800 12px monospace"; ctx.textAlign = "center"; ctx.fillText(`DEMON OMAR · PHASE ${bossPhase}`, x, y-94);
}

function drawFinalExplosion() {
  const progress = 105 - explosionTimer;
  const radius = 20 + progress * 2.5;
  ctx.fillStyle = "rgba(255,225,80,.8)"; ctx.beginPath(); ctx.arc(bossPosition.x, bossPosition.y, radius, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "rgba(255,80,25,.75)"; ctx.beginPath(); ctx.arc(bossPosition.x, bossPosition.y, radius * .68, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "rgba(255,255,220,.9)"; ctx.beginPath(); ctx.arc(bossPosition.x, bossPosition.y, radius * .3, 0, Math.PI * 2); ctx.fill();
  for (let index = 0; index < 16; index++) {
    const angle = index * Math.PI / 8;
    const distance = progress * (1.2 + (index % 3) * .35);
    ctx.fillStyle = index % 2 ? "#ffb22e" : "#ef4328";
    ctx.fillRect(bossPosition.x + Math.cos(angle) * distance - 6, bossPosition.y + Math.sin(angle) * distance - 6, 12, 12);
  }
}

function drawBossHealthBars() {
  ctx.fillStyle = "#170b10"; ctx.fillRect(25, 18, 300, 42); ctx.fillRect(635, 18, 300, 42);
  ctx.fillStyle = "#3dcf82"; ctx.fillRect(35, 40, 280 * (playerHealth / 250), 12);
  ctx.fillStyle = "#d7353f"; ctx.fillRect(645, 40, 280 * (bossHealth / bossMaxHealth), 12);
  ctx.fillStyle = "#fff0d1"; ctx.font = "800 12px monospace"; ctx.textAlign = "left"; ctx.fillText(`YOU  ${playerHealth}/250`, 35, 34);
  ctx.fillText(`OMAR P${bossPhase}/6  ${bossHealth}/${bossMaxHealth}`, 645, 34);
  ctx.textAlign = "center"; ctx.fillText(`RAMMAGEDDON IN ${Math.max(0, Math.ceil(rammageddonTimer / 60))}s`, 480, 34);
}

function drawOfficeLobby(time) {
  ctx.fillStyle = "#26222c"; ctx.fillRect(0, 0, 960, 540);
  ctx.fillStyle = "#d4c9b6"; ctx.fillRect(25, 58, 910, 450);
  drawTiles(35, 70, 890, 425, "#d8d0c1", "#c7bdad", 36);
  ctx.fillStyle = "#914f4f"; ctx.fillRect(0, 278, 110, 72); ctx.fillStyle = "#f0cf7c"; ctx.font = "800 13px monospace"; ctx.textAlign = "center"; ctx.fillText("← CASHVILLE", 55, 318);
  drawVendingMachine();
  drawElevator();
  pixelRect(380, 110, 180, 80, "#986f56", "#5d4437");
  ctx.fillStyle = "#f3e5ba"; ctx.font = "800 12px monospace"; ctx.fillText("RECEPTION", 470, 150);
  officeLobbyNpcs.forEach(npc => { drawPixelPerson(npc.x, npc.y, npc.color, "#dba37d", true); drawNameTag(npc.name, npc.x, npc.y - 45); });
  ctx.fillStyle = `rgba(255,231,104,${0.35 + Math.sin(time/180)*0.15})`; ctx.fillRect(elevatorPoint.x - 32, elevatorPoint.y - 18, 64, 24);
  drawPlayerCharacter();
  ctx.fillStyle = "#352d38"; ctx.font = "800 14px monospace"; ctx.fillText("Elevator: Lessons 1–56 · Work earns wallet money", 480, 526);
}

function drawOfficeFloor(time) {
  const floor = officeFloors[currentFloor];
  ctx.fillStyle = "#292630"; ctx.fillRect(0, 0, 960, 540);
  ctx.fillStyle = "#cfc7b9"; ctx.fillRect(25, 58, 910, 450);
  drawTiles(35, 70, 890, 425, "#d7d1c6", "#c8c0b4", 40);
  ctx.fillStyle = floor.color; ctx.fillRect(25, 58, 910, 34);
  drawElevator();
  officeStations.forEach((station, index) => drawOfficeDesk(station, index, floor.color, time));
  drawPixelPerson(480, 425, floor.color, "#a87558", true); drawNameTag(floor.manager, 480, 380);
  drawPlayerCharacter();
  ctx.fillStyle = "#352d38"; ctx.font = "800 14px monospace"; ctx.textAlign = "center"; ctx.fillText(officeTask < 3 ? `Complete work desk ${officeTask + 1} to earn $5` : "SHIFT COMPLETE", 480, 526);
}

function drawElevator() {
  pixelRect(755, 80, 140, 120, "#78838a", "#42494e");
  ctx.fillStyle = "#41494e"; ctx.fillRect(772, 100, 50, 88); ctx.fillRect(828, 100, 50, 88);
  ctx.fillStyle = "#d7c562"; ctx.fillRect(742, 128, 8, 18);
  ctx.fillStyle = "#f4ecbd"; ctx.font = "800 11px monospace"; ctx.textAlign = "center"; ctx.fillText("ELEVATOR", 825, 72);
}

function drawVendingMachine() {
  pixelRect(105, 105, 120, 145, "#bc5656", "#5b3035");
  ctx.fillStyle = "#27363a"; ctx.fillRect(120, 122, 73, 77);
  [[130,133,"#e8c65f"],[158,133,"#7fcae0"],[130,163,"#94cf70"],[158,163,"#df7d84"]].forEach(([x,y,color]) => { ctx.fillStyle=color; ctx.fillRect(x,y,18,20); });
  ctx.fillStyle = "#f1da76"; ctx.fillRect(199, 130, 12, 27); ctx.fillStyle = "#2d242c"; ctx.fillRect(134, 216, 60, 12);
  ctx.fillStyle = "#fff2bd"; ctx.font = "800 10px monospace"; ctx.textAlign = "center"; ctx.fillText("$10 RAMAGEDDON", 165, 98);
}

function drawOfficeDesk(station, index, color, time) {
  const deskX = station.x - 50;
  const deskY = station.y - 90;
  const active = index === officeTask;
  if (active) { ctx.fillStyle = `rgba(255,231,104,${0.4 + Math.sin(time/160)*0.18})`; ctx.fillRect(deskX-9, deskY-9, 118, 75); }
  pixelRect(deskX, deskY, 100, 50, index < officeTask ? "#70bd82" : color, "#57453c");
  ctx.fillStyle = "#27383a"; ctx.fillRect(station.x-24, deskY-30, 48, 28); ctx.fillStyle = "#a9d7db"; ctx.fillRect(station.x-19, deskY-25, 38, 18);
  ctx.fillStyle = "#342d35"; ctx.font = "800 11px monospace"; ctx.textAlign = "center"; ctx.fillText(index < officeTask ? "DONE ✓" : `JOB ${index+1}`, station.x, deskY+43);
}

function drawLessonWorld(time) {
  const data = lessonContent[currentLesson];
  ctx.fillStyle = "#3d313f"; ctx.fillRect(0, 0, 960, 540);
  ctx.fillStyle = "#e1c59d"; ctx.fillRect(30, 72, 900, 430);
  drawTiles(45, 90, 870, 395, "#ead4af", "#d8bd96", 40);
  ctx.fillStyle = data.color; ctx.fillRect(30, 72, 900, 34);
  for (let x = 75; x < 900; x += 145) { pixelRect(x, 122, 85, 72, "#87664d", "#533c30"); ctx.fillStyle = data.color; ctx.fillRect(x+10, 132, 65, 12); }
  stations.forEach((station, index) => drawLessonStation(station, index, data.color, time));
  drawPixelPerson(468, 305, data.color, "#9a6849", true); drawNameTag(data.npc, 468, 260);
  drawPlayerCharacter();
  ctx.fillStyle = "#35293a"; ctx.font = "800 14px monospace"; ctx.textAlign = "center"; ctx.fillText(data.tasks[currentTask]?.[0] || "LESSON COMPLETE", 480, 524);
}

function drawLessonStation(station, index, color, time) {
  const active = index === currentTask;
  if (active) { const pulse = 42 + Math.sin(time / 160) * 6; ctx.fillStyle = "rgba(255,238,100,.35)"; ctx.fillRect(station.x - pulse/2, station.y - 54, pulse, 65); }
  pixelRect(station.x - 18, station.y - 42, 36, 44, index < currentTask ? "#69bf83" : active ? color : "#9a9388", "#4b443f");
  ctx.fillStyle = "#fff3c4"; ctx.fillRect(station.x - 11, station.y - 34, 22, 16);
  ctx.fillStyle = "#35293a"; ctx.font = "800 12px monospace"; ctx.textAlign = "center"; ctx.fillText(index < currentTask ? "✓" : index + 1, station.x, station.y - 22);
}

function drawTiles(x, y, w, h, a, b, size) {
  for (let row = 0; row < Math.ceil(h/size); row++) for (let col = 0; col < Math.ceil(w/size); col++) { ctx.fillStyle = (row+col)%2 ? a : b; ctx.fillRect(x+col*size, y+row*size, size, size); }
}

function pixelRect(x, y, w, h, fill, edge) { ctx.fillStyle = edge; ctx.fillRect(x-4,y-4,w+8,h+8); ctx.fillStyle = fill; ctx.fillRect(x,y,w,h); ctx.fillStyle = "rgba(255,255,255,.22)"; ctx.fillRect(x+5,y+5,w-10,5); }

function drawHouse(x, y, w, h, label, wall, roof) {
  ctx.fillStyle = "rgba(34,55,39,.22)"; ctx.fillRect(x+10,y+h,w,15);
  ctx.fillStyle = wall; ctx.fillRect(x,y+36,w,h-36);
  ctx.fillStyle = roof; ctx.fillRect(x-10,y+18,w+20,34); ctx.fillRect(x+8,y+8,w-16,12); ctx.fillRect(x+28,y,w-56,10);
  ctx.fillStyle = "#5a4037"; ctx.fillRect(x+w/2-16,y+h-45,32,45);
  ctx.fillStyle = "#aad4d5"; ctx.fillRect(x+20,y+72,38,30); ctx.fillRect(x+w-58,y+72,38,30);
  ctx.fillStyle = "#fff0bd"; ctx.font = "800 11px monospace"; ctx.textAlign = "center"; ctx.fillText(label === "BANK" ? "$" : "", x+w/2, y+31);
  ctx.fillStyle = "#273e37"; ctx.fillText(label, x+w/2, y+67);
}

function drawTree(x, y) { ctx.fillStyle = "#684a35"; ctx.fillRect(x-7,y,14,34); ctx.fillStyle = "#386b45"; ctx.fillRect(x-26,y-34,52,38); ctx.fillStyle = "#4f8a53"; ctx.fillRect(x-18,y-46,36,54); ctx.fillStyle = "#71a860"; ctx.fillRect(x-10,y-39,18,12); }

function drawPlayerCharacter() {
  const drawY = player.y - jumpOffset;
  drawPixelPerson(player.x, drawY, "#244f45", "#e6aa80", true, playerFacing);
  if (mode !== "boss" || equippedWeapon === 0 || equippedWeapon === 3) return;
  const facingAngles = { right: 0, down: Math.PI / 2, left: Math.PI, up: -Math.PI / 2 };
  ctx.save(); ctx.translate(player.x, drawY - 10); ctx.rotate(facingAngles[playerFacing]);
  if (equippedWeapon === 1) { ctx.fillStyle = "#dfe9ec"; ctx.fillRect(10, -4, 43, 7); ctx.fillStyle = "#e6c24f"; ctx.fillRect(13, -10, 6, 19); }
  if (equippedWeapon === 2) { ctx.fillStyle = "#6b765f"; ctx.fillRect(8, -9, 50, 15); ctx.fillStyle = "#c84b3d"; ctx.fillRect(50, -6, 12, 9); }
  if (equippedWeapon === 4) { ctx.fillStyle = "#9de8ff"; ctx.fillRect(10, -5, 46, 9); ctx.fillRect(42, -19, 18, 36); ctx.fillStyle = "#654735"; ctx.fillRect(4, -3, 45, 6); }
  if (equippedWeapon === 5) { ctx.fillStyle = "#ffb52e"; ctx.fillRect(8, -4, 50, 8); ctx.fillStyle = "#ffef8b"; ctx.beginPath(); ctx.arc(60, 0, 10, 0, Math.PI*2); ctx.fill(); }
  if (equippedWeapon === 6) { ctx.strokeStyle = "#b98a59"; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(28, 0, 24, -1.2, 1.2); ctx.stroke(); ctx.strokeStyle = "#eee1ba"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(37,-22); ctx.lineTo(37,22); ctx.stroke(); }
  ctx.restore();
}

function drawPixelPerson(x, y, shirt, skin, standing, facing = "down") {
  ctx.fillStyle = "rgba(34,47,38,.22)"; ctx.fillRect(x-14,y+21,28,7);
  ctx.fillStyle = standing ? "#3f342f" : shirt; ctx.fillRect(x-11,y+10,8,17); ctx.fillRect(x+3,y+10,8,17);
  ctx.fillStyle = shirt; ctx.fillRect(x-15,y-18,30,31); ctx.fillRect(x-20,y-13,5,22); ctx.fillRect(x+15,y-13,5,22);
  ctx.fillStyle = skin; ctx.fillRect(x-12,y-42,24,24); ctx.fillRect(x-17,y-37,5,12); ctx.fillRect(x+12,y-37,5,12);
  ctx.fillStyle = "#44342f"; ctx.fillRect(x-12,y-45,24,8); ctx.fillRect(x-12,y-40,5,8);
  ctx.fillStyle = "#26362f";
  if (facing === "down") { ctx.fillRect(x-7,y-32,3,3); ctx.fillRect(x+5,y-32,3,3); }
  else if (facing === "left") { ctx.fillRect(x-10,y-32,3,3); ctx.fillRect(x-10,y-26,3,3); }
  else if (facing === "right") { ctx.fillRect(x+7,y-32,3,3); ctx.fillRect(x+7,y-26,3,3); }
  else { ctx.fillStyle = "#44342f"; ctx.fillRect(x-10,y-37,20,8); }
}

function drawNameTag(name, x, y) { const width = Math.max(48, name.length*8+12); ctx.fillStyle = "rgba(32,45,38,.85)"; ctx.fillRect(x-width/2,y-13,width,18); ctx.fillStyle = "#fff4d2"; ctx.font = "800 10px monospace"; ctx.textAlign = "center"; ctx.fillText(name,x,y); }

function closeGame() { playing = false; keys.clear(); cancelAnimationFrame(animationFrame); modal.close(); }
document.querySelector(".modal-close").addEventListener("click", closeGame);
document.querySelector(".finish-button").addEventListener("click", () => {
  if (mode === "boss") {
    document.querySelector(".game-finish").hidden = true;
    document.querySelector(".game-finish h3").textContent = "Mission complete!";
    dialogueOpen = false;
    mode = "hub";
    player = { ...weaponShopReturnPoint };
    document.querySelector("#game-title").textContent = "Cashville";
    document.querySelector("#game-world").textContent = "DAY 1 · AFTER RAMAGEDDON";
    document.querySelector("#mission-count").textContent = "SURVIVOR";
    document.querySelector("#mission-label").textContent = "Cashville is safe again";
    return;
  }
  if (mode === "officeFloor" && officeTask >= 3) {
    document.querySelector(".game-finish").hidden = true;
    dialogueOpen = false;
    enterOfficeLobby();
    player = { x: 700, y: 245 };
    return;
  }
  closeGame();
});
modal.addEventListener("cancel", event => { event.preventDefault(); closeGame(); });

window.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  if (["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(key) && modal.open) { event.preventDefault(); keys.add(key); }
  if (key === " " && modal.open && !dialogueOpen && jumpOffset === 0) { event.preventDefault(); jumpVelocity = 9.5; }
  if (mode === "boss" && key === "1" && localStorage.getItem("cashWiseSwordOwned") === "true") equippedWeapon = 1;
  if (mode === "boss" && key === "2" && localStorage.getItem("cashWiseMissileOwned") === "true") equippedWeapon = 2;
  if (mode === "boss" && key === "3") useHealingPotion();
  if (mode === "boss" && key === "4" && localStorage.getItem("cashWiseFrostAxe") === "true") equippedWeapon = 4;
  if (mode === "boss" && key === "5" && localStorage.getItem("cashWisePhoenixWand") === "true") equippedWeapon = 5;
  if (mode === "boss" && key === "6" && localStorage.getItem("cashWiseShadowBow") === "true") equippedWeapon = 6;
  if (key === "escape" && modal.open) closeGame();
});
window.addEventListener("keyup", event => keys.delete(event.key.toLowerCase()));
document.querySelectorAll(".mobile-pad button").forEach(button => {
  const key = button.dataset.key;
  ["pointerdown","touchstart"].forEach(type => button.addEventListener(type, event => { event.preventDefault(); keys.add(key); }));
  ["pointerup","pointercancel","touchend"].forEach(type => button.addEventListener(type, () => keys.delete(key)));
});

canvas.addEventListener("mousemove", event => { aimPoint = canvasEventPoint(event); if (mode === "boss") faceToward(aimPoint); });

canvas.addEventListener("click", event => {
  if (mode !== "boss" || dialogueOpen || attackCooldown > 0 || equippedWeapon === 0) return;
  aimPoint = canvasEventPoint(event);
  faceToward(aimPoint);
  if (equippedWeapon === 1) {
    slashTimer = 12;
    attackCooldown = 22;
    if (Math.hypot(player.x - bossPosition.x, player.y - bossPosition.y) <= 115) damageBoss(50);
  } else if (equippedWeapon === 2) {
    attackCooldown = 34;
    const angle = Math.atan2(aimPoint.y - (player.y - jumpOffset), aimPoint.x - player.x);
    missiles.push({ x: player.x, y: player.y - jumpOffset - 12, vx: Math.cos(angle) * 11, vy: Math.sin(angle) * 11, life: 105, damage: 200, kind: "missile" });
  } else if (equippedWeapon === 4) {
    slashTimer = 15;
    attackCooldown = 30;
    if (Math.hypot(player.x - bossPosition.x, player.y - bossPosition.y) <= 100) damageBoss(90);
  } else if (equippedWeapon === 5 || equippedWeapon === 6) {
    const angle = Math.atan2(aimPoint.y - (player.y - jumpOffset), aimPoint.x - player.x);
    const isWand = equippedWeapon === 5;
    missiles.push({ x: player.x, y: player.y - jumpOffset - 12, vx: Math.cos(angle) * (isWand ? 8 : 15), vy: Math.sin(angle) * (isWand ? 8 : 15), life: 110, damage: isWand ? 120 : 75, kind: isWand ? "fire" : "arrow" });
    attackCooldown = isWand ? 42 : 20;
  }
});

function faceToward(point) {
  const dx = point.x - player.x;
  const dy = point.y - (player.y - jumpOffset);
  if (Math.abs(dx) >= Math.abs(dy)) playerFacing = dx >= 0 ? "right" : "left";
  else playerFacing = dy >= 0 ? "down" : "up";
}

function canvasEventPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * VIEW_WIDTH / rect.width,
    y: (event.clientY - rect.top) * VIEW_HEIGHT / rect.height
  };
}

function useHealingPotion() {
  const potions = Number(localStorage.getItem("cashWisePotions") || 0);
  if (potions <= 0 || playerHealth >= 250) return;
  localStorage.setItem("cashWisePotions", potions - 1);
  playerHealth = Math.min(250, playerHealth + 60);
}

function localDate(date = new Date()) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`; }
const dayNumber = Math.floor(new Date().setHours(0,0,0,0) / 86400000);
const dailyIndex = dayNumber % dailyMissions.length;
function updateDaily() {
  const mission = dailyMissions[dailyIndex];
  document.querySelector("#challenge-title").textContent = mission.title;
  document.querySelector("#daily-description").textContent = mission.description;
  document.querySelector("#daily-date").textContent = new Date().toLocaleDateString(undefined, { month: "short", day: "numeric" }).toUpperCase();
  const done = localStorage.getItem("cashWiseDailyLast") === localDate();
  document.querySelector(".daily-play").textContent = done ? "Visit Cashville again →" : "Wake up in Cashville →";
  let streak = Number(localStorage.getItem("cashWiseDailyStreak") || 0);
  const previous = new Date(); previous.setDate(previous.getDate()-1);
  if (done && localStorage.getItem("cashWiseStreakCounted") !== localDate()) {
    streak = localStorage.getItem("cashWiseStreakPrevious") === localDate(previous) ? streak + 1 : 1;
    localStorage.setItem("cashWiseDailyStreak", streak);
    localStorage.setItem("cashWiseStreakCounted", localDate());
    localStorage.setItem("cashWiseStreakPrevious", localDate());
  }
  document.querySelector("#daily-streak").textContent = `${streak} day streak`;
}

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => { const nav = document.querySelector("nav"); nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", nav.classList.contains("open")); });

updateProgress();
updateDaily();
