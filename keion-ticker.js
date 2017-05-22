class KeionTicker {
  reconfig(config) {
    this.config = config;
    this.textInner = this.config.el.querySelector('.kt-text-inner');

    let inner = config.el.querySelector('.kt-inner');
    var arr = this.constructor.Keions;
    var chosen = '';
    if (config.keion === 'random') {
      chosen = this.constructor.ImgRoot + arr[Math.floor(Math.random() * arr.length)] + '.png';
    } else if (arr.includes(config.keion)) {
      chosen = this.constructor.ImgRoot + config.keion + '.png';
    } else {
      chosen = config.keion;
    }

    var icon = inner.querySelector('.kt-icon');
    if (icon != null) {
      icon.style.backgroundImage = `url(${chosen})`;
    } else {
      inner.insertAdjacentHTML('afterbegin', `<span class="kt-icon" style="background-image: url(${chosen})"></span>`);
    }

    let text = config.el.querySelector('.kt-text-inner');
    text.style.animationName = 'ticker';
    text.style.animationDuration = config.speed;
    text.style.animationIterationCount = 'infinite';
    text.innerHTML = config.msgs.join(config.separator);
  }

  constructor(config) {
    console.log('Starting a ticker with config:', config);

    var html = ['kt-outer', 'kt-inner', 'kt-text-outer', 'kt-text-inner']
      .reduceRight((acc, cur) => `<div class="${cur}">${acc}</div>`, '');
    config.el.innerHTML = html;

    this.reconfig(config);
  }

  start () {
    this.textInner.style.animationPlayState = 'running';
  }

  stop () {
    let el = this.config.el.querySelector('.kt-text-inner');
    let nel = el.cloneNode(true);
    el.parentNode.replaceChild(nel, el);
  }

  pause () {
    this.textInner.style.animationPlayState = 'paused';
  }

  change (config) {
    for (var k in this.config)
      if (typeof config[k] === 'undefined')
        config[k] = this.config[k];

    console.log('Change a ticker with config:', config);

    this.reconfig(config);
  }
}

KeionTicker.Keions = ['azusa', 'mio', 'mugi', 'yui'];
KeionTicker.ImgRoot = 'img/';
