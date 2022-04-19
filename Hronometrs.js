export class Hronometrs {
  display = document.querySelector(".clock");
  history = document.querySelector(".history");
  seconds = 0;

  constructor() {
    this.display.textContent = 0;
  }
  //funkcija, kas sadala secundes 2 skaitļos, lai vararētu piešķirt ktrāsiņas.
  dataOutput(seconds) {
    this.display.innerHTML = "";
    let secondsArr = seconds.toString().split("");

    for (let i = 0; i < secondsArr.length; i++) {
      secondsArr[i] = `<span class="_${secondsArr[i]}">${secondsArr[i]}</span>`;
    }
    return secondsArr.toString().replaceAll(",", "");
  }
  //funkcija, kas iedarbina hronometru
  start() {
    const interval = setInterval(() => {
      this.seconds++;
      this.display.innerHTML = this.dataOutput(this.seconds);
    }, 1000);
    return interval;
  }
  //funkcija, kas apstādina hronometru
  stop(interval) {
    clearInterval(interval);
  }
  //funkcija, kas saglabā hronometra vērtības.
  loop(x, interval) {
    x.insertAdjacentHTML("afterbegin", `${this.dataOutput(this.seconds)}<br>`);
    this.stop(interval);
    this.seconds = 0;
    this.display.textContent = 0;
  }
  //funkcija, kas notīra hronometru, to apstādinot.
  clear(interval) {
    this.stop(interval);
    this.display.textContent = 0;
    this.history.textContent = ``;
  }
}
