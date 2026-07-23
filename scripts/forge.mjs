// 鍛造:noahark-match3 → 好撒瑪利亞人・備品(路 10:33-37)。
// ★ 拾穗類變體(glean 規格,牧者 07-09 拍板):①四方向掃 run(斜排也算=恩典多算一步,釘路10:35)
//   ②補位軟迴避(防連鎖雪崩)③捆帶動畫(金繩頭尾+繩結)④兩拍慢節奏(先亮 0.7s 再收)。
// newBlock 一律不含 endAnchor(A28 教訓)。
import fs from 'fs'
import path from 'path'
const ROOT = path.resolve(import.meta.dirname, '..')
const P = (f) => path.join(ROOT, f)
function repl(src, from, to, tag) {
  if (!src.includes(from)) { console.error('🔴 缺錨:', tag); process.exit(1) }
  return src.replace(from, to)
}
function replRange(src, startAnchor, endAnchor, newBlock, tag) {
  const i = src.indexOf(startAnchor)
  const j = src.indexOf(endAnchor, i + 1)
  if (i < 0 || j < 0) { console.error('🔴 缺區段錨:', tag); process.exit(1) }
  return src.slice(0, i) + newBlock + src.slice(j)
}

let g = fs.readFileSync(P('game.js'), 'utf8')

g = replRange(g, '// 挪亞方舟・動物上船', '(function () {', `// 好撒瑪利亞人・備品(路 10:33-37)——「Candy 骨架 + tsum 皮」家族・🌾 拾穗類斜線變體首個獨立站。
// 文案為 AI 依和合本草擬(引文均經 cuv MCP 逐字查證:路 10:33-34、10:35、10:37),牧者已核可(match3-swap 清單)。
//
// ★ 斜線變體四件套(glean 規格,牧者 07-09 拍板「拾穗類/收取類預設開斜線」):
//   ①橫/直/斜四方向都算一排——語意釘在路 10:35「此外所費用的,我回來必還你」:憐憫多算一步;
//   ②補位軟迴避(會立刻成排就重擲,最多 2 次)——防一手連鎖雪崩;
//   ③每條排亮起時金繩頭尾捆一捆(+繩結)——斜排孩子才看得出是一排;
//   ④兩拍慢節奏:先亮 0.7 秒看清楚,再一起收進行囊;連鎖每步放慢,享受觀察。
// 玩法:三連(含斜)=收進行囊(油/酒/裹傷布…),備齊目標份數=去照應傷者。永不會輸。
`, 'header')

g = repl(g, 'const PAIR = 2 // 每 2 隻=一對(一公一母,創 7:9)',
  'const PAIR = 3 // 每 3 件=備齊一份照應', 'pair')

g = repl(g, "const ANIMALS = ['sheep', 'dove', 'lion', 'elephant', 'turtle', 'frog']",
  "const ANIMALS = ['oil', 'wine', 'cloth', 'coin', 'water', 'herb']", 'kinds')

g = repl(g, "young: { label: '🐣 幼', desc: '6×6・上船 20 對', size: 6, kinds: 4, goal: 20, crow: 0 },",
  "young: { label: '🐣 幼', desc: '6×6・備妥 15 份', size: 6, kinds: 4, goal: 15, crow: 0 },", 'age-y')
g = repl(g, "kid: { label: '🙂 童', desc: '7×7・上船 32 對', size: 7, kinds: 5, goal: 32, crow: 2 },",
  "kid: { label: '🙂 童', desc: '7×7・備妥 22 份', size: 7, kinds: 5, goal: 22, crow: 2 },", 'age-k')
g = repl(g, "teen: { label: '🔥 青', desc: '8×8・上船 45 對', size: 8, kinds: 6, goal: 45, crow: 3 },",
  "teen: { label: '🔥 青', desc: '8×8・備妥 30 份', size: 8, kinds: 6, goal: 30, crow: 3 },", 'age-t')

g = replRange(g, '  const T = {', '\n\n  const VOICES', `  const T = {
    title: '🍶 好撒瑪利亞人・備品',
    ref: '路加福音 10:33-35',
    intro1: '「看見他就動了慈心，上前用油和酒倒在他的傷處，包裹好了」(路 10:33-34)',
    how: '有人被打傷躺在路旁!點一個備品、再點旁邊的一個交換;排成一排 3 個同款就「收進行囊」——油、酒、裹傷布,照顧他的都備齊。這一關「斜的一排也算」:憐憫多算一步(路 10:35)。收的時候會先用金繩捆一捆、亮一下,再一起收進去——慢慢看,不用急。連出 4 個以上會出現慈心方塊,點一下整排整列一起收!',
    pick: '那條路上,需要一顆動了慈心的心:',
    hud: (p, goal) => \`🍶 已備 \${p}/\${goal} 份\`,
    gather: '收進行囊!',
    cascade: '又備了新的一批…',
    shuffle: '把行囊抖一抖,重新擺好…',
    noswap: '這樣排不成一排——輕輕放回去',
    crowCome: '路上捲起小旋風…',
    crowGo: '旋風散了',
    rainbowBorn: '慈心方塊!點它,整排整列一起收',
    rainbowGo: '動了慈心,全都備齊!',
    bind: '金繩捆一捆…',
    closeLine: '此外所費用的，我回來必還你。(路 10:35)',
    winTitle: '🎉 備齊了,去照應他!',
    winVerse: '惟有一個撒瑪利亞人行路來到那裡，看見他就動了慈心，上前用油和酒倒在他的傷處，包裹好了，扶他騎上自己的牲口，帶到店裡去照應他。',
    winRef: '路加福音 10:33-34',
    teachVerse: '他說：是憐憫他的。耶穌說：你去照樣行罷。',
    teachRef: '路加福音 10:37',
    teach: '撒瑪利亞人沒有先問「他是誰」,只看見「他需要」。油和酒是自己的,銀子是自己的,連「此外所費用的」也一併承擔——憐憫從不算得剛剛好,總是多給一步,所以連斜的一排也算。主說:你去照樣行罷。',
    review: '文案待牧者審核・經文均經和合本逐句核對',
  }`, 'T')

g = repl(g, "window.__ping('noahark-match3' + suffix, t)", "window.__ping('samaritan-match3' + suffix, t)", 'ping')

// 曠野路色調
g = repl(g, "sky.addColorStop(0, '#9db8d8'); sky.addColorStop(0.55, '#c6d6e4'); sky.addColorStop(0.72, '#9ec380'); sky.addColorStop(1, '#7fae62')",
  "sky.addColorStop(0, '#c4d4e0'); sky.addColorStop(0.5, '#e4d4b0'); sky.addColorStop(0.72, '#cfae78'); sky.addColorStop(1, '#b09058')", 'sky')
g = repl(g, "ctx.fillStyle = 'rgba(90,130,70,0.28)'", "ctx.fillStyle = 'rgba(140,110,60,0.26)'", 'board-bg')
g = repl(g, "ctx.strokeStyle = 'rgba(70,105,55,0.2)'", "ctx.strokeStyle = 'rgba(110,85,45,0.22)'", 'board-grid')

// ═══ 斜線引擎四件套 ═══
// ① 四方向掃 run
g = replRange(g, '    // —— 配對邏輯(掃 run 線段:同款動物 3+ 連;烏鴉/彩虹不參與)——', '    _hasMatch()', `    // —— 配對邏輯(🌾 斜線變體:橫/直/斜四方向掃 run;旋風/慈心不參與)——
    _scanRuns() {
      const n = this.cfg.size
      const runs = []
      const DIRS = [[0, 1], [1, 0], [1, 1], [1, -1]]
      const at = (r, c) => (r >= 0 && c >= 0 && r < n && c < n) ? this.grid[r][c].kind : null
      for (const [dr, dc] of DIRS) {
        for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
          const k = this.grid[r][c].kind
          if (!this._isAnimal(k)) continue
          if (at(r - dr, c - dc) === k) continue // 不是 run 起點
          let len = 1
          while (at(r + dr * len, c + dc * len) === k) len++
          if (len >= 3) {
            const cells = []
            for (let i = 0; i < len; i++) cells.push({ r: r + dr * i, c: c + dc * i })
            runs.push(cells)
          }
        }
      }
      return runs
    }

    // ② 補位軟迴避:這格放 k 會立刻成一排(四方向)嗎?
    _wouldMatchAt(r, c, k) {
      const n = this.cfg.size
      const at = (rr, cc) => (rr >= 0 && cc >= 0 && rr < n && cc < n) ? this.grid[rr][cc].kind : null
      for (const [dr, dc] of [[0, 1], [1, 0], [1, 1], [1, -1]]) {
        let len = 1
        for (let i = 1; at(r + dr * i, c + dc * i) === k; i++) len++
        for (let i = 1; at(r - dr * i, c - dc * i) === k; i++) len++
        if (len >= 3) return true
      }
      return false
    }

`, 'scan-4dir')

// 起手盤:斜向也要擋
g = repl(g, `          let k
          do { k = this._rand() } while (
            (c >= 2 && this.grid[r][c - 1].kind === k && this.grid[r][c - 2].kind === k) ||
            (r >= 2 && this.grid[r - 1][c].kind === k && this.grid[r - 2][c].kind === k)
          )`, `          let k
          do { k = this._rand() } while (
            (c >= 2 && this.grid[r][c - 1].kind === k && this.grid[r][c - 2].kind === k) ||
            (r >= 2 && this.grid[r - 1][c].kind === k && this.grid[r - 2][c].kind === k) ||
            (r >= 2 && c >= 2 && this.grid[r - 1][c - 1].kind === k && this.grid[r - 2][c - 2].kind === k) ||
            (r >= 2 && c + 2 < n && this.grid[r - 1][c + 1].kind === k && this.grid[r - 2][c + 2].kind === k)
          )`, 'board-gen-diag')

// 補位重擲(軟迴避,最多 2 次)
g = repl(g, `        for (let r = write; r >= 0; r--) {
          this.grid[r][c].kind = this._rand()
          this.grid[r][c].crowLife = 0
          this.grid[r][c].dy = -(write + 1) * g.D - 60
        }`, `        for (let r = write; r >= 0; r--) {
          let k = this._rand(), tries = 0
          while (this._wouldMatchAt(r, c, k) && ++tries <= 2) k = this._rand()
          this.grid[r][c].kind = k
          this.grid[r][c].crowLife = 0
          this.grid[r][c].dy = -(write + 1) * g.D - 60
        }`, 'refill-soft-avoid')

// ④ 兩拍慢節奏:_resolve 拆成「捆好亮起(pending)」→「收取」兩段
g = replRange(g, '    // 收取所有現成 3+ 連 → 4+ 連的中位格變彩虹方塊 → 重力補位;回傳收了幾隻', '    // 點彩虹:整排整列一起上船', `    // 兩拍收取:第一拍=金繩捆好亮 0.7 秒(pending);第二拍=一起收進行囊+補位。
    // 回傳:-1=剛捆好(還沒收)、0=沒排、N=收了 N 件。
    _resolve() {
      const geo = this._geo()
      if (this.pending) {
        const { hit, rainbowAt } = this.pending
        this.pending = null
        let count = 0
        for (const key of hit) {
          const [r, c] = key.split(',').map(Number)
          const p = this._cellXY(r, c, geo)
          this.flyers.push({ sx: p.x, sy: p.y, x: p.x, y: p.y, kind: this.grid[r][c].kind, t: 0 })
          this.pops.push({ x: p.x, y: p.y, t: 0 })
          this.grid[r][c].kind = null
          count++
        }
        for (const rb of rainbowAt) {
          const cell = this.grid[rb.r][rb.c]
          cell.kind = 'rainbow'; cell.sq = 0.3
          this.toasts.push({ text: T.rainbowBorn, t: this._t })
          this._tone(659, 0.12, 0, 'triangle', 0.1); this._tone(784, 0.14, 0.1, 'triangle', 0.1); this._tone(988, 0.2, 0.2, 'triangle', 0.1)
        }
        this._gravity()
        this._tone(523, 0.1, 0, 'triangle', 0.1); this._tone(659, 0.14, 0.08, 'triangle', 0.1)
        return count
      }
      const runs = this._scanRuns()
      if (!runs.length) return 0
      const hit = new Set()
      const rainbowAt = []
      for (const run of runs) {
        if (run.length >= 4) rainbowAt.push(run[Math.floor(run.length / 2)])
        for (const p of run) hit.add(p.r + ',' + p.c)
      }
      for (const rb of rainbowAt) hit.delete(rb.r + ',' + rb.c)
      this.pending = { runs, hit, rainbowAt, t: this._t }
      this.toasts.push({ text: T.bind, t: this._t })
      this._tone(392, 0.1, 0, 'sine', 0.07)
      return -1
    }

`, 'two-beat-resolve')

// _update 吃 -1(捆好=再鎖 0.7s;收到=慢連鎖 0.8s)
g = repl(g, `          const got = this._resolve()
          if (got) {
            this.collected += got
            this.toasts.push({ text: this.collected % (PAIR * 3) < 3 ? T.gather : T.cascade, t: this._t })
            this.lock = 0.45
          } else if (this._pairs() >= this.cfg.goal) {`, `          const got = this._resolve()
          if (got === -1) {
            this.lock = 0.7 // 第一拍:金繩捆好,亮著看清楚
          } else if (got) {
            this.collected += got
            this.toasts.push({ text: this.collected % (PAIR * 3) < 3 ? T.gather : T.cascade, t: this._t })
            this.lock = 0.8 // 連鎖放慢,享受觀察
          } else if (this._pairs() >= this.cfg.goal) {`, 'update-two-beat')

// pending 欄位初始化
g = repl(g, "      this.rainbowFxT = 0\n      this.blessPlayed = false",
  "      this.rainbowFxT = 0\n      this.pending = null\n      this.blessPlayed = false", 'ctor-pending')
g = repl(g, "      this.crowT = 14\n      this.blessPlayed = false\n      this.state = 'play'",
  "      this.crowT = 14\n      this.pending = null\n      this.blessPlayed = false\n      this.state = 'play'", 'start-pending')

// ③ 捆帶動畫:金繩頭尾+繩結(畫在 Q 彈圈之前)
g = repl(g, '      // Q 彈圈(收取瞬間)', `      // 🌾 捆帶:pending 的每條排,金繩把頭尾綁起來+中點繩結+格子亮
      if (this.pending) {
        const blink = 0.55 + 0.45 * Math.sin((this._t - this.pending.t) * 10)
        for (const run of this.pending.runs) {
          const a = this._cellXY(run[0].r, run[0].c, g)
          const b = this._cellXY(run[run.length - 1].r, run[run.length - 1].c, g)
          ctx.globalAlpha = blink
          for (const p0 of run) {
            const p = this._cellXY(p0.r, p0.c, g)
            ctx.fillStyle = 'rgba(255,225,130,0.35)'
            ctx.beginPath(); ctx.arc(p.x, p.y + this.grid[p0.r][p0.c].dy, g.D * 0.46, 0, 7); ctx.fill()
          }
          ctx.strokeStyle = '#d8a840'; ctx.lineWidth = 5; ctx.lineCap = 'round'
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          ctx.lineCap = 'butt'
          const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2
          ctx.fillStyle = '#b07828'
          ctx.beginPath(); ctx.arc(mx, my, 7, 0, 7); ctx.fill()
          ctx.strokeStyle = '#b07828'; ctx.lineWidth = 3
          ctx.beginPath(); ctx.moveTo(mx - 8, my + 8); ctx.lineTo(mx + 8, my - 8); ctx.stroke()
          ctx.globalAlpha = 1
        }
      }
      // Q 彈圈(收取瞬間)`, 'rope-draw')

// 行囊(沿用窗格進度)
g = replRange(g, '    // 方舟:右側大船,艙房窗=進度(每對亮一格)', '    _rainbowArc(alpha) {', `    // 行囊:右側驢背鞍袋,一格=一份照應(備齊亮一格)
    _ark() {
      const { ctx } = this
      const goal = this.cfg.goal
      const done = this._pairs()
      const frac = (this.collected % PAIR) / PAIR
      const ax = 764, aw = 176
      // 鞍袋主體
      ctx.fillStyle = '#9a6a3a'
      rR(ctx, ax + 8, 96, aw - 16, 300, 16); ctx.fill()
      ctx.fillStyle = '#b8824a'
      rR(ctx, ax + 18, 108, aw - 36, 276, 12); ctx.fill()
      // 綁帶
      ctx.strokeStyle = '#6a4a26'; ctx.lineWidth = 5
      ctx.beginPath(); ctx.moveTo(ax + 8, 160); ctx.lineTo(ax + aw - 8, 160); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(ax + 8, 330); ctx.lineTo(ax + aw - 8, 330); ctx.stroke()
      // 格袋(=目標份數)
      const houseY = 116, houseH = 262
      const cols = goal > 36 ? 5 : goal > 24 ? 4 : goal > 16 ? 3 : 2
      const rows = Math.ceil(goal / cols)
      const wx0 = ax + 28, wy0 = houseY + 4
      const ww = (aw - 56 - (cols - 1) * 6) / cols
      const wh = Math.min(26, (houseH - 16 - (rows - 1) * 5) / rows)
      for (let i = 0; i < goal; i++) {
        const col = i % cols, row = Math.floor(i / cols)
        const wx = wx0 + col * (ww + 6), wy = wy0 + row * (wh + 5)
        const full = i < done
        const filling = i === done ? frac : 0
        ctx.fillStyle = full ? '#ffe9b0' : 'rgba(70,48,22,0.45)'
        rR(ctx, wx, wy, ww, wh, 6); ctx.fill()
        if (!full && filling > 0) {
          ctx.fillStyle = 'rgba(255,233,176,0.5)'
          rR(ctx, wx, wy + wh * (1 - filling), ww, wh * filling, 5); ctx.fill()
        }
        if (full) { // 備妥小紅心(慈心)
          ctx.fillStyle = '#d86a5a'
          const hx = wx + ww / 2, hy = wy + wh * 0.52, hr = wh * 0.2
          ctx.beginPath()
          ctx.arc(hx - hr * 0.5, hy - hr * 0.3, hr * 0.55, 0, 7)
          ctx.arc(hx + hr * 0.5, hy - hr * 0.3, hr * 0.55, 0, 7)
          ctx.moveTo(hx - hr, hy - hr * 0.1); ctx.lineTo(hx, hy + hr); ctx.lineTo(hx + hr, hy - hr * 0.1)
          ctx.fill()
        }
      }
      // 袋口+踏墊(備品落點)
      ctx.fillStyle = '#5a4016'
      rR(ctx, ax + 26, 388, 34, 38, 6); ctx.fill()
      ctx.fillStyle = '#d8b878'
      ctx.beginPath(); ctx.moveTo(ax + 28, 424); ctx.lineTo(ax - 34, 452); ctx.lineTo(ax - 22, 460); ctx.lineTo(ax + 60, 426); ctx.closePath(); ctx.fill()
      ctx.fillStyle = '#3c2c14'
      ctx.font = 'bold 14px "Noto Sans TC","Microsoft JhengHei",sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('行囊', ax + aw / 2, 66)
      ctx.font = '11px "Noto Sans TC","Microsoft JhengHei",sans-serif'
      ctx.fillText('(路 10:34 帶到店裡去照應他)', ax + aw / 2, 82)
    }

`, 'saddlebag')

// 特效弧改暖光
g = repl(g, `      const COLORS = ['#e8524a', '#f0a030', '#f5d90a', '#58b368', '#4a90d9', '#9068be']
      ctx.save()
      ctx.globalAlpha = 0.75 * alpha`, `      const COLORS = ['#ffe9b0', '#f8d488', '#e8b860', '#d89838', '#c07828', '#a86018']
      ctx.save()
      ctx.globalAlpha = 0.75 * alpha`, 'arc-colors')
g = repl(g, `      const COLORS = ['#e8524a', '#f0a030', '#f5d90a', '#58b368', '#4a90d9', '#9068be']
      ctx.lineWidth = Math.max(3, H * 0.008)`, `      const COLORS = ['#ffe9b0', '#f8d488', '#e8b860', '#d89838', '#c07828', '#a86018']
      ctx.lineWidth = Math.max(3, H * 0.008)`, 'wincard-arc')

// tsum 皮:六款備品+小旋風(crow)+慈心方塊(rainbow)
g = replRange(g, "      if (kind === 'sheep') {", `      ctx.restore()
    }

    _drawIntro() {`, `      if (kind === 'oil') { // 油瓶:金黃陶瓶+木塞
        body('#e8c060', '#c49c3c')
        ctx.fillStyle = '#a8845a'
        rR(ctx, -r * 0.16, -r * 1.28, r * 0.32, r * 0.4, r * 0.08); ctx.fill()
        ctx.fillStyle = '#c49c3c'
        rR(ctx, -r * 0.3, -r * 1.0, r * 0.6, r * 0.24, r * 0.08); ctx.fill()
        face()
      } else if (kind === 'wine') { // 酒袋:紫紅皮囊+綁口
        body('#a85a6a', '#884252')
        ctx.strokeStyle = '#5a2c38'; ctx.lineWidth = Math.max(1.8, r * 0.09); ctx.lineCap = 'round'
        ctx.beginPath(); ctx.moveTo(-r * 0.32, -r * 0.92); ctx.lineTo(r * 0.32, -r * 0.8); ctx.stroke()
        ctx.lineCap = 'butt'
        ctx.fillStyle = '#884252'
        ctx.beginPath(); ctx.arc(0, -r * 1.08, r * 0.15, 0, 7); ctx.fill()
        face()
      } else if (kind === 'cloth') { // 裹傷布卷:白布捲+層紋
        body('#f2ede0', '#d4ccb4')
        ctx.strokeStyle = '#d4ccb4'; ctx.lineWidth = Math.max(1.6, r * 0.07)
        ctx.beginPath(); ctx.arc(0, -r * 0.9, r * 0.34, 0, 7); ctx.stroke()
        ctx.beginPath(); ctx.arc(0, -r * 0.9, r * 0.18, 0, 7); ctx.stroke()
        ctx.fillStyle = '#e8e0cc'
        ctx.beginPath(); ctx.arc(0, -r * 0.9, r * 0.34, 0, 7); ctx.globalAlpha = 0.5; ctx.fill(); ctx.globalAlpha = 1
        face()
      } else if (kind === 'coin') { // 二錢銀子:銀圓+刻紋
        body('#c8ccd4', '#a4a8b4')
        ctx.strokeStyle = '#8a8e9c'; ctx.lineWidth = Math.max(1.5, r * 0.07)
        ctx.beginPath(); ctx.arc(0, -r * 0.55, r * 0.28, 0, 7); ctx.stroke()
        ctx.beginPath(); ctx.arc(0, -r * 0.55, r * 0.14, 0, 7); ctx.stroke()
        face(r * 0.06)
      } else if (kind === 'water') { // 水囊:藍
        body('#78a8d8', '#5888b8')
        ctx.fillStyle = '#5888b8'
        ctx.beginPath(); ctx.arc(0, -r * 1.02, r * 0.16, 0, 7); ctx.fill()
        ctx.fillStyle = 'rgba(255,255,255,0.35)'
        ctx.beginPath(); ctx.ellipse(-r * 0.32, -r * 0.3, r * 0.15, r * 0.3, 0.5, 0, 7); ctx.fill()
        face()
      } else if (kind === 'herb') { // 藥草束:綠
        body('#8abc7a', '#6a9c5a')
        ctx.strokeStyle = '#4e7c42'; ctx.lineWidth = Math.max(1.5, r * 0.07); ctx.lineCap = 'round'
        for (const a of [-0.4, 0, 0.4]) {
          ctx.beginPath(); ctx.moveTo(a * r * 0.5, -r * 0.8); ctx.quadraticCurveTo(a * r, -r * 1.2, a * r * 1.25, -r * 1.05); ctx.stroke()
        }
        ctx.lineCap = 'butt'
        face()
      } else if (kind === 'crow') { // 小旋風:路上的塵土捲(擋一會兒自己散)
        ctx.strokeStyle = '#b09a6e'; ctx.lineWidth = Math.max(2, r * 0.11); ctx.lineCap = 'round'
        for (let i = 0; i < 3; i++) {
          const rr = r * (0.75 - i * 0.22)
          const a0 = this._t * 4 + i * 1.4
          ctx.globalAlpha = 0.85 - i * 0.2
          ctx.beginPath(); ctx.arc(0, r * (0.3 - i * 0.32), rr, a0, a0 + Math.PI * 1.4); ctx.stroke()
        }
        ctx.globalAlpha = 1; ctx.lineCap = 'butt'
        const er = r * 0.1
        ctx.fillStyle = '#6a5a40'
        ctx.beginPath(); ctx.arc(-er * 1.6, -r * 0.35, er * 0.8, 0, 7); ctx.fill()
        ctx.beginPath(); ctx.arc(er * 1.6, -r * 0.35, er * 0.8, 0, 7); ctx.fill()
      } else if (kind === 'rainbow') { // 慈心方塊:白底+紅心+星光(動了慈心,路10:33)
        body('#fdf6ec', '#d8c4a8')
        ctx.fillStyle = '#d8604a'
        const hr = r * 0.42
        ctx.beginPath()
        ctx.arc(-hr * 0.5, -hr * 0.25, hr * 0.55, 0, 7)
        ctx.arc(hr * 0.5, -hr * 0.25, hr * 0.55, 0, 7)
        ctx.moveTo(-hr, -hr * 0.02); ctx.lineTo(0, hr); ctx.lineTo(hr, -hr * 0.02)
        ctx.fill()
        const tw = 0.6 + 0.4 * Math.sin(this._t * 5)
        ctx.fillStyle = \`rgba(255,220,140,\${tw})\`
        ctx.beginPath()
        for (let i = 0; i < 10; i++) {
          const ang = (i / 10) * Math.PI * 2 - Math.PI / 2
          const rr = i % 2 === 0 ? r * 0.2 : r * 0.09
          const px = r * 0.58 + Math.cos(ang) * rr, py = -r * 0.62 + Math.sin(ang) * rr
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
        }
        ctx.closePath(); ctx.fill()
      }
`, 'tsum-kinds')

g = repl(g, "this._tsum(ctx, VW * 0.32, VH * 0.63, 26, 'sheep', 0.25 * Math.abs(Math.sin(this._t * 2)))",
  "this._tsum(ctx, VW * 0.32, VH * 0.63, 26, 'oil', 0.25 * Math.abs(Math.sin(this._t * 2)))", 'demo1')
g = repl(g, "this._tsum(ctx, VW * 0.5, VH * 0.63, 26, 'lion', 0.25 * Math.abs(Math.sin(this._t * 2 + 1)))",
  "this._tsum(ctx, VW * 0.5, VH * 0.63, 26, 'wine', 0.25 * Math.abs(Math.sin(this._t * 2 + 1)))", 'demo2')
g = repl(g, "this._tsum(ctx, VW * 0.68, VH * 0.63, 26, 'frog', 0.25 * Math.abs(Math.sin(this._t * 2 + 2)))",
  "this._tsum(ctx, VW * 0.68, VH * 0.63, 26, 'cloth', 0.25 * Math.abs(Math.sin(this._t * 2 + 2)))", 'demo3')
g = repl(g, "ctx.fillText(T.ref + ' ・ 保全生命', VW / 2, VH * 0.23)",
  "ctx.fillText(T.ref + ' ・ 你去照樣行罷', VW / 2, VH * 0.23)", 'intro-sub')
g = repl(g, "ctx.fillText(`上船 ${this.cfg.goal} 對——一對一對,一個不少`, W / 2, H * 0.235)",
  "ctx.fillText(`備妥 ${this.cfg.goal} 份——斜的一排也算,憐憫多算一步`, W / 2, H * 0.235)", 'win-sub')

fs.writeFileSync(P('game.js'), g)

// ── index.html / sw / manifest / gen-tts ──
let h = fs.readFileSync(P('index.html'), 'utf8')
h = repl(h, '<title>挪亞方舟・動物上船</title>', '<title>好撒瑪利亞人・備品</title>', 'title')
h = repl(h, '<meta name="description" content="點兩隻相鄰的動物交換,排成一排 3 隻同款就一起上船!一對一對進方舟,保全生命(創世記 6-9,和合本)">',
  '<meta name="description" content="點兩個相鄰的備品交換,橫直斜三連就收進行囊——油和酒倒在他的傷處!憐憫多算一步(路加福音 10,和合本)">', 'desc')
h = repl(h, '<meta name="theme-color" content="#9db8d8">', '<meta name="theme-color" content="#e4d4b0">', 'theme')
h = repl(h, 'background:#9db8d8', 'background:#e4d4b0', 'bg')
h = repl(h, '📱 請把手機轉成橫向<br>方舟和動物們都在等你!', '📱 請把手機轉成橫向<br>行囊和備品都在等你!', 'rotate')
h = repl(h, "var k = 'ping-noahark-match3'", "var k = 'ping-samaritan-match3'", 'ping-key')
h = repl(h, "window.__ping('noahark-match3')", "window.__ping('samaritan-match3')", 'ping-id')
fs.writeFileSync(P('index.html'), h)

let s = fs.readFileSync(P('sw.js'), 'utf8')
s = repl(s, "var CACHE_NAME = 'noahark-match3-v2';", "var CACHE_NAME = 'samaritan-match3-v1';", 'sw')
fs.writeFileSync(P('sw.js'), s)

let m = fs.readFileSync(P('manifest.webmanifest'), 'utf8')
m = m.replace('挪亞方舟・動物上船', '好撒瑪利亞人・備品').replace('"short_name": "方舟上船"', '"short_name": "好撒瑪利亞人"')
m = m.replace('點兩隻相鄰的動物交換,排成一排 3 隻同款就一起上船!一對一對進方舟,保全生命(創世記 6-9,和合本)', '點兩個相鄰的備品交換,橫直斜三連就收進行囊——油和酒倒在他的傷處!憐憫多算一步(路加福音 10,和合本)')
m = m.replace('"background_color": "#9db8d8"', '"background_color": "#e4d4b0"').replace('"theme_color": "#8a5a30"', '"theme_color": "#b07828"')
fs.writeFileSync(P('manifest.webmanifest'), m)

let t = fs.readFileSync(P('scripts/gen-tts.mjs'), 'utf8')
t = replRange(t, "  ['intro',", '];', `  ['intro', '看見他就動了慈心,上前用油和酒倒在他的傷處,包裹好了。'],
  ['bless', '第二天拿出二錢銀子來,交給店主,說:你且照應他;此外所費用的,我回來必還你。'],
  ['win', '他說:是憐憫他的。耶穌說:你去照樣行罷。路加福音十章三十七節。']
`, 'tts-lines')
fs.writeFileSync(P('scripts/gen-tts.mjs'), t)

console.log('🟢 鍛造完成:好撒瑪利亞人・備品(斜線變體四件套)')
