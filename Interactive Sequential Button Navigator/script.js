const A = document.getElementById("A");
const s = document.getElementById("s");
const p = document.getElementById("p");
const i = document.getElementById("i");
const r = document.getElementById("r");
const e = document.getElementById("e");
const n = document.getElementById("n");
const t = document.getElementById("t");
const Aspirent = document.getElementById("complete");

A.addEventListener("click", () => {
    A.style.display = "none";
    s.style.display = "block";
});

s.addEventListener("click", () => {
    s.style.display = "none";
    p.style.display = "block";
});


p.addEventListener("click", () => {
    p.style.display = "none";
    i.style.display = "block";
});

i.addEventListener("click", () => {
    i.style.display = "none";
    r.style.display = "block";
});

r.addEventListener("click", () => {
    r.style.display = "none";
    e.style.display = "block";
});

e.addEventListener("click", () => {
    e.style.display = "none";
    n.style.display = "block";
});

n.addEventListener("click", () => {
    n.style.display = "none";
    t.style.display = "block";
});

t.addEventListener("click", () => {
    t.style.display = "none";
    Aspirent.style.display = "block";
});

Aspirent.addEventListener("click", () => {
    Aspirent.style.display = "none";
    A.style.display = "block";
});
