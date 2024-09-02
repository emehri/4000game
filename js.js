var last_Question = -1;
var last_Answer = -1;
var qTarget = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var dTarget = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var Means = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

function checkIt() {
  for (i = 0; i < 10; i++) {
    if (dTarget[i] == -1) {
      document.getElementById("g" + i).style.color = "black";
      continue;
    }
    if (Means[dTarget[i]] == i)
      document.getElementById("g" + i).style.color = "green";
    else document.getElementById("g" + i).style.color = "red";
  }
}

function sq(q) {
  blackKon();
  if (last_Answer > -1) {
    var past_Definition = qTarget[q];
    if (past_Definition > -1) {
      dTarget[past_Definition] = -1;
      document.getElementById("g" + past_Definition).innerText = "▬";
    }
    document.getElementById("g" + last_Answer).innerText = q + 1;
    qTarget[q] = last_Answer;
    dTarget[last_Answer] = q;
    last_Answer = -1;
    last_Question = -1;
    return;
  }
  last_Question = q;
}

function sd(d) {
  blackKon();
  if (last_Question > -1) {
    var past_Definition = qTarget[last_Question];
    if (past_Definition > -1) {
      dTarget[past_Definition] = -1;
      document.getElementById("g" + past_Definition).innerText = "▬";
    }
    document.getElementById("g" + d).innerText = last_Question + 1;
    qTarget[last_Question] = d;
    dTarget[d] = last_Question;
    last_Answer = -1;
    last_Question = -1;
    return;
  }
  last_Answer = d;
}

function blackKon() {
  for (i = 0; i < 10; i++)
    document.getElementById("g" + i).style.color = "black";
}

function showItems(Selected_Level) {
  document.getElementById("CheckAnswers").style.visibility = "visible";
  qTarget = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  dTarget = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  Means = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  last_Question = -1;
  last_Answer = -1;
  for (i = 0; i < 10; i++) {
    Means[i] = i;
    document.getElementById("g" + i).innerText = "▬";
  }
  blackKon();
  for (i = 0; i < 10; i++) {
    var k = Math.floor(Math.random() * 10);
    var temp = Means[i];
    Means[i] = Means[k];
    Means[k] = temp;
  }
  var reshte = ",";
  var n = 0;
  console.log("hello" + Selected_Level);
  while (true) {
    var k2 = Math.floor(Math.random() * Dictionary.length);
    var word = Dictionary[k2].word;
    if (
      Dictionary[k2].level != Selected_Level ||
      reshte.indexOf("," + word + ",") != -1
    )
      continue;
    console.log(Dictionary[k2].level);
    reshte += word + ",";
    document.getElementById("q" + n).innerText = Dictionary[k2].word;
    document.getElementById("d" + Means[n]).innerText = Dictionary[k2].def;
    n++;
    if (n == 10) break;
    console.log("salam");
  }
}
