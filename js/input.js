class Input {
  constructor() {
    this.keys = [];

    window.addEventListener('keydown', (e) => this.keys.push(e.key));
    window.addEventListener('keyup',   (e) => this.keys = this.keys.filter((k) => k !== e.key));
  }

  isDown(key) {
    return this.keys.includes(key);
  }
}

export const input = new Input();