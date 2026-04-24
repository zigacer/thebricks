# 🏐 Odbojkarska igra (na osnovi the bricks)

Preprosta 2D odbojkarska igra narejena z uporabo **HTML5 Canvas**, **JavaScript-a** in **jQuery-ja**. Dva igralca igrata na isti tipkovnici in poskušata doseči točke tako, da žogo spravita na nasprotnikovo stran.

---

## 🎮 Značilnosti igre

- 🧑‍🤝‍🧑 Dva igralca na isti tipkovnici  
- 🏐 Fizikalno gibanje žoge  
- 🧠 Kolizije (žoga, loparji, mreža, stene)  
- 📊 Prikaz rezultata v živo  
- 🏁 Sistem zmage (privzeto do 5 točk)  
- 🔄 Samodejni reset po vsaki točki  
- 🎨 Narisana odbojkarska žoga z detajli  
- 🖼️ Ozadje igre (slika)  
- ⚡ Animacija z `setInterval`  

---

## 🎮 Upravljanje

### 🔵 Modri igralec (levo)
- **A** → premik levo  
- **D** → premik desno  

### 🔴 Rdeči igralec (desno)
- **← (levo puščica)** → premik levo  
- **→ (desno puščica)** → premik desno  

---

## 🧠 Kako igra deluje

Igra uporablja HTML5 `<canvas>` za risanje žoge, loparjev, mreže in ozadja. Žoga se premika s pomočjo osnovne fizike, odbija se od sten in loparjev, kot odboja pa je odvisen od mesta, kjer zadane lopar.

Točke se dodajo, ko žoga pade na tla brez uspešnega odboja. Igra se konča, ko igralec doseže 5 točk (ali več, če je izenačeno).

---

## 🏆 Zmaga

- Privzeti cilj je **5 točk**  
- Če je izenačeno pri 4:4, se cilj samodejno poveča  
- Zmagovalec se prikaže z obvestilom (SweetAlert)

---

## 👨‍💻 Avtor

Projekt ustvaril: **Žiga Černe Bralić**
