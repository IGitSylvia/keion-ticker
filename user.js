KeionTicker.ImgRoot = 'https://cdn.rawgit.com/dogancelik/keion-ticker/f38a3efd/img/';

var kt = new KeionTicker({
  el: document.getElementById('kt'),
  speed: '30s',
  separator: ' ― ',
  keion: 'random',
  msgs: [
    'Lorem ipsum dolor sit amet.',
    'Sed dapibus vestibulum sapien.',
    'Duis blandit auctor lobortis.',
    'Nulla adipiscing dignissim.'
  ]
});
kt.start();

setTimeout(function () {
  kt.stop();
  kt.config.el.className = 'comic';
  kt.change({
    speed: '20s',
    separator: ' 🍔 ',
    msgs: ['I', 'love', 'hamburger!'],
    keion: 'https://cloud.githubusercontent.com/assets/486818/26293938/fa5732d6-3ec8-11e7-8fd9-3a897531844c.png'
  });
  kt.start();
}, 5000);
