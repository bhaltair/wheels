function PieChart(selector, options) {
  let canvas = 'string' === typeof selector ? document.querySelector(selector) : null;
  if (canvas === null) return false;
  let defaultOptions = {
    radius: 50,
    width: document.documentElement.clientWidth,
    height: 300,
    legendParams: {
      font: '10px Arial',
      x: 30,
      y: 30,
      margin: 20,
      width: 20,
      height: 12,
    }
  }
  this.options = Object.assign(defaultOptions, options);
  this.width = this.options.width;
  this.height = this.options.height;
  canvas.setAttribute("width", this.width * 2);
  canvas.setAttribute("height", this.height * 2);
  canvas.style.width = this.width + 'px';
  canvas.style.height = this.height +'px';
  this.context = canvas.getContext('2d')
  this.context.scale(2,2);
}

PieChart.prototype.load = function (data) {
  let count = 0;
  data.forEach(item => {
    count += item.value
  })
  this.data = data;
  this.count = count;
  return this;
}

PieChart.prototype.render = function () {
  let _generateLegen = (item, index) => {
    this.context.fillRect(
      this.options.legendParams.x,
      this.options.legendParams.y + index * this.options.legendParams.margin,
      this.options.legendParams.width,
      this.options.legendParams.height,
    );
    this.context.font = this.options.legendParams.font;
    this.context.textBaseline = 'top'
    this.context.fillText(
      item.title,
      this.options.legendParams.x + this.options.legendParams.width + 10,
      this.options.legendParams.y + index * this.options.legendParams.margin,
    );
  }
  let temparc = 0;
  this.data.forEach((item, index) => {
    item.color = item.color || `#${('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)}`;
    this.context.beginPath();
    this.context.moveTo(this.width / 3 * 2, this.height / 2);
    let startarc = temparc,
      endarc = startarc + (item.value / this.count) * Math.PI * 2;
    this.context.arc(
      this.width / 3 * 2,
      this.height / 2,
      this.options.radius,
      startarc,
      endarc,
      false
    );
    this.context.closePath();
    this.context.fillStyle = item.color;
    this.context.fill();
    temparc = endarc;
    if (this.options.legend) {
      _generateLegen(item, index);
    }
    return this;
  })
  return this;
}
