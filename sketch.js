let suaidade;
let açãoaventura;
let comédia;
let romance;
let título = "Playfair Display";
let corpo = "Julius Sans One";

let séries = {
  menor10: {
    açãoaventura: "Hora da Aventura",
    comédia: "Tom e Jerry",
    romance: "Shrek"
  },
  entre10e14: {
    açãoaventura: "The Thundermans",
    comédia: "Brookly Nine-Nine",
    romance: "Eu nunca"
  },
  entre14e16: {
    açãoaventura: "Lúcifer",
    comédia: "Friends",
    romance: "Outer Banks"
  },
  entre16e18: {
    açãoaventura: "The 100",
    comédia: "The end of the f*cking world",
    romance: "Bridgerton"
  },
  maior18: {
    açãoaventura: "The Walking Dead",
    comédia: "A lista negra",
    romance: "You"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100, 100);
  createSpan("Qual sua idade?").position(650, 530).addClass("hidden");
  suaidade = createInput("").position(615, 585).addClass("hidden");
  açãoaventura = createCheckbox("Gosta de séries de ação e aventura?🎬").position(100, 600).addClass("hidden");
  comédia = createCheckbox("Gosta de séries comédia? 🤣").position(100, 650).addClass("hidden");
  romance = createCheckbox("Gosta de séries de romance? 🥰💘").position(100, 700).addClass('hidden');
  
  button = createButton("START💜✨").position(width / 2, 530);
  button.mousePressed(bota);
  button.addClass("botao");
}

function bota() {
  selectAll('.hidden').forEach(el => el.removeClass('hidden'));
  button.hide();
}

function draw() {
  background("white");
  
  let idade = parseInt(suaidade.value());
  let checkaçãoaventura = açãoaventura.checked();
  let checkcomédia = comédia.checked();
  let checkromance = romance.checked();
  
  let série = "Insira suas preferências:";
  
  if (suaidade.value() !== "") {
    série = mostrasérie(idade, checkaçãoaventura, checkcomédia, checkromance);
  }
  
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text("MELHOR INDICADOR DE SÉRIES", width / 2, 30);
  textFont(título);
  
  fill("black");
  textSize(40);
  text(série, width / 2, height / 2);
  textFont(corpo);
}

function mostrasérie(idade, checkaçãoaventura, checkcomédia, checkromance) {
  if (isNaN(idade)) {
    return "Idade Inválida";
  } else if (idade < 5) {
    return "Sai daqui, você ainda é pirralho";
  } else if (idade > 120) {
    return "Morreu e esqueceram de enterrar";
  }
  
  if (idade >= 5 && idade < 10) {
    if (checkaçãoaventura) return séries["menor10"]["açãoaventura"];
    if (checkcomédia) return séries["menor10"]["comédia"];
    if (checkromance) return séries["menor10"]["romance"];
  } else if (idade >= 10 && idade < 14) {
    if (checkaçãoaventura) return séries["entre10e14"]["açãoaventura"];
    if (checkcomédia) return séries["entre10e14"]["comédia"];
    if (checkromance) return séries["entre10e14"]["romance"];
  } else if (idade >= 14 && idade < 16) {
    if (checkaçãoaventura) return séries["entre14e16"]["açãoaventura"];
    if (checkcomédia) return séries["entre14e16"]["comédia"];
    if (checkromance) return séries["entre14e16"]["romance"];
  } else if (idade >= 16 && idade < 18) {
    if (checkaçãoaventura) return séries["entre16e18"]["açãoaventura"];
    if (checkcomédia) return séries["entre16e18"]["comédia"];
    if (checkromance) return séries["entre16e18"]["romance"];
  } else if (idade >= 18) {
    if (checkaçãoaventura) return séries["maior18"]["açãoaventura"];
    if (checkcomédia) return séries["maior18"]["comédia"];
    if (checkromance) return séries["maior18"]["romance"];
  }

  return "Nenhuma série encontrada"; 
}
