(function () {
  'use strict';
  if (!window || !window.Chart) { return; }

  var AxisSlidersPlugin = {
    id: 'axisSliders',
    defaults: {
      x: { enable: true, step: 500 },
      y: { enable: true, step: 0.5 },
      labels: { xUnit: 'kbps' }
    },
    _state: new WeakMap(),
    afterInit: function (chart, _args, opts) {
      this._maybeCreate(chart, opts || this.defaults);
    },
    afterUpdate: function (chart, _args, opts) {
      var st = this._state.get(chart);
      if (!st) {
        this._maybeCreate(chart, opts || this.defaults);
        return;
      }
      if (st.creating) {
        // 初期化中は何もしない
        return;
      }
    },
    beforeDestroy: function (chart) {
      this._destroy(chart);
    },
    _maybeCreate: function (chart, opts) {
      if (!window.noUiSlider) { return; }
      if (!chart || !chart.scales || !chart.scales.x || !chart.scales.y) { return; }
      if (this._state.get(chart)) { return; }

      var canvas = chart.canvas;
      var host = canvas && canvas.parentNode;
      if (!host) { return; }
      // ensure positioned container
      if (getComputedStyle(host).position === 'static') {
        host.classList.add('axis-slider-host');
      } else {
        host.classList.add('axis-slider-host');
      }

      var xScale = chart.scales.x;
      var yScale = chart.scales.y;
      var x0 = xScale.min, x1 = xScale.max;
      var y0 = yScale.min, y1 = yScale.max;
      var cid = (canvas && canvas.id) || '';

      // 動的ステップ決定（IDで判定）
      var xStep = (opts && opts.x && typeof opts.x.step === 'number') ? opts.x.step : 500;
      var yStep = (opts && opts.y && typeof opts.y.step === 'number') ? opts.y.step : 0.5;
      if (cid.indexOf('butteraugli') !== -1) { yStep = 0.1; }
      if (cid.indexOf('fps') !== -1) { yStep = 1; }

      var state = {
        creating: true,
        defaults: { xMin: x0, xMax: x1, yMin: y0, yMax: y1 },
        nodes: {}
      };
      // 初期化前に登録して再入を防ぐ
      this._state.set(chart, state);

      // Y slider (min/max)
      if (!opts.y || opts.y.enable !== false) {
        var yDiv = document.createElement('div');
        yDiv.className = 'axis-slider axis-slider--y';
        host.appendChild(yDiv);
        window.noUiSlider.create(yDiv, {
          start: [y0, y1],
          connect: true,
          orientation: 'vertical',
          direction: 'rtl',
          step: yStep,
          range: { min: y0, max: y1 },
          tooltips: [true, true],
          format: _makeFormatter(yStep)
        });
        yDiv.noUiSlider.on('update', function (values) {
          if (state.creating) return;
          var vmin = parseFloat(values[0]);
          var vmax = parseFloat(values[1]);
          chart.options.scales.y.min = vmin;
          chart.options.scales.y.max = vmax;
          chart.update('none');
        });
        state.nodes.y = yDiv;
      }

      // X slider (min/max)
      if (!opts.x || opts.x.enable !== false) {
        var xDiv = document.createElement('div');
        xDiv.className = 'axis-slider axis-slider--x';
        host.appendChild(xDiv);
        window.noUiSlider.create(xDiv, {
          start: [x0, x1],
          connect: true,
          orientation: 'horizontal',
          step: xStep,
          range: { min: x0, max: x1 },
          tooltips: [true, true],
          format: _makeFormatter(xStep)
        });
        xDiv.noUiSlider.on('update', function (values) {
          if (state.creating) return;
          var xmin = parseFloat(values[0]);
          var xmax = parseFloat(values[1]);
          chart.options.scales.x.min = xmin;
          chart.options.scales.x.max = xmax;
          chart.update('none');
        });
        state.nodes.x = xDiv;
      }

      // Reset button
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'axis-slider__reset';
      btn.title = 'Reset to defaults';
      btn.textContent = 'Reset';
      btn.addEventListener('click', function () {
        if (state.nodes.x && state.nodes.x.noUiSlider) {
          state.nodes.x.noUiSlider.set([state.defaults.xMin, state.defaults.xMax]);
        }
        if (state.nodes.y && state.nodes.y.noUiSlider) {
          state.nodes.y.noUiSlider.set([state.defaults.yMin, state.defaults.yMax]);
        }
        chart.options.scales.x.min = state.defaults.xMin;
        chart.options.scales.x.max = state.defaults.xMax;
        chart.options.scales.y.min = state.defaults.yMin;
        chart.options.scales.y.max = state.defaults.yMax;
        chart.update('none');
      });
      host.appendChild(btn);
      state.nodes.reset = btn;

      // 初期化完了
      state.creating = false;
    },
    _destroy: function (chart) {
      var st = this._state.get(chart);
      if (!st) { return; }
      ['x', 'y'].forEach(function (k) {
        var node = st.nodes[k];
        if (node && node.noUiSlider) { node.noUiSlider.destroy(); }
        if (node && node.parentNode) { node.parentNode.removeChild(node); }
      });
      if (st.nodes.reset && st.nodes.reset.parentNode) { st.nodes.reset.parentNode.removeChild(st.nodes.reset); }
      this._state.delete(chart);
    }
  };

  function _makeFormatter(step) {
    var decimals = 0;
    if (typeof step === 'number') {
      var s = String(step);
      var i = s.indexOf('.');
      decimals = i === -1 ? 0 : (s.length - i - 1);
    }
    return {
      to: function (v) { return Number(v).toFixed(decimals); },
      from: function (v) { return Number(v); }
    };
  }

  window.Chart.register(AxisSlidersPlugin);
  window.AxisSliders = { pluginId: 'axisSliders' };
})(); 


