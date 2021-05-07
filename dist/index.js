module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 842:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getInputs = void 0;
const core = __importStar(__webpack_require__(186));
function getInputs() {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            gpgPrivateKey: core.getInput('gpg-private-key', { required: true }),
            passphrase: core.getInput('passphrase'),
            gitUserSigningkey: /true/i.test(core.getInput('git-user-signingkey')),
            gitCommitGpgsign: /true/i.test(core.getInput('git-commit-gpgsign')),
            gitTagGpgsign: /true/i.test(core.getInput('git-tag-gpgsign')),
            gitPushGpgsign: /true/i.test(core.getInput('git-push-gpgsign')),
            gitCommitterName: core.getInput('git-committer-name'),
            gitCommitterEmail: core.getInput('git-committer-email'),
            workdir: core.getInput('workdir') || '.'
        };
    });
}
exports.getInputs = getInputs;
//# sourceMappingURL=context.js.map

/***/ }),

/***/ 757:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exec = void 0;
const actionsExec = __importStar(__webpack_require__(514));
exports.exec = (command, args = [], silent) => __awaiter(void 0, void 0, void 0, function* () {
    let stdout = '';
    let stderr = '';
    const options = {
        silent: silent,
        ignoreReturnCode: true
    };
    options.listeners = {
        stdout: (data) => {
            stdout += data.toString();
        },
        stderr: (data) => {
            stderr += data.toString();
        }
    };
    const returnCode = yield actionsExec.exec(command, args, options);
    return {
        success: returnCode === 0,
        stdout: stdout.trim(),
        stderr: stderr.trim()
    };
});
//# sourceMappingURL=exec.js.map

/***/ }),

/***/ 374:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setConfig = void 0;
const exec = __importStar(__webpack_require__(757));
const git = (args = []) => __awaiter(void 0, void 0, void 0, function* () {
    return yield exec.exec(`git`, args, true).then(res => {
        if (res.stderr != '' && !res.success) {
            throw new Error(res.stderr);
        }
        return res.stdout.trim();
    });
});
function setConfig(key, value) {
    return __awaiter(this, void 0, void 0, function* () {
        yield git(['config', key, value]);
    });
}
exports.setConfig = setConfig;
//# sourceMappingURL=git.js.map

/***/ }),

/***/ 60:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.killAgent = exports.deleteKey = exports.presetPassphrase = exports.configureAgent = exports.getKeygrips = exports.importKey = exports.getDirs = exports.getVersion = exports.agentConfig = void 0;
const fs = __importStar(__webpack_require__(747));
const path = __importStar(__webpack_require__(622));
const os = __importStar(__webpack_require__(87));
const exec = __importStar(__webpack_require__(757));
const openpgp = __importStar(__webpack_require__(666));
exports.agentConfig = `default-cache-ttl 7200
max-cache-ttl 31536000
allow-preset-passphrase`;
const getGnupgHome = () => __awaiter(void 0, void 0, void 0, function* () {
    if (process.env.GNUPGHOME) {
        return process.env.GNUPGHOME;
    }
    let homedir = path.join(process.env.HOME || '', '.gnupg');
    if (os.platform() == 'win32' && !process.env.HOME) {
        homedir = path.join(process.env.USERPROFILE || '', '.gnupg');
    }
    return homedir;
});
const gpgConnectAgent = (command) => __awaiter(void 0, void 0, void 0, function* () {
    return yield exec.exec(`gpg-connect-agent "${command}" /bye`, [], true).then(res => {
        if (res.stderr != '' && !res.success) {
            throw new Error(res.stderr);
        }
        for (let line of res.stdout.replace(/\r/g, '').trim().split(/\n/g)) {
            if (line.startsWith('ERR')) {
                throw new Error(line);
            }
        }
        return res.stdout.trim();
    });
});
exports.getVersion = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield exec.exec('gpg', ['--version'], true).then(res => {
        if (res.stderr != '') {
            throw new Error(res.stderr);
        }
        let gnupgVersion = '';
        let libgcryptVersion = '';
        for (let line of res.stdout.replace(/\r/g, '').trim().split(/\n/g)) {
            if (line.startsWith('gpg (GnuPG) ')) {
                gnupgVersion = line.substr('gpg (GnuPG) '.length).trim();
            }
            else if (line.startsWith('gpg (GnuPG/MacGPG2) ')) {
                gnupgVersion = line.substr('gpg (GnuPG/MacGPG2) '.length).trim();
            }
            else if (line.startsWith('libgcrypt ')) {
                libgcryptVersion = line.substr('libgcrypt '.length).trim();
            }
        }
        return {
            gnupg: gnupgVersion,
            libgcrypt: libgcryptVersion
        };
    });
});
exports.getDirs = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield exec.exec('gpgconf', ['--list-dirs'], true).then(res => {
        if (res.stderr != '' && !res.success) {
            throw new Error(res.stderr);
        }
        let libdir = '';
        let libexecdir = '';
        let datadir = '';
        let homedir = '';
        for (let line of res.stdout.replace(/\r/g, '').trim().split(/\n/g)) {
            if (line.startsWith('libdir:')) {
                libdir = line.substr('libdir:'.length).replace('%3a', ':').trim();
            }
            else if (line.startsWith('libexecdir:')) {
                libexecdir = line.substr('libexecdir:'.length).replace('%3a', ':').trim();
            }
            else if (line.startsWith('datadir:')) {
                datadir = line.substr('datadir:'.length).replace('%3a', ':').trim();
            }
            else if (line.startsWith('homedir:')) {
                homedir = line.substr('homedir:'.length).replace('%3a', ':').trim();
            }
        }
        return {
            libdir: libdir,
            libexecdir: libexecdir,
            datadir: datadir,
            homedir: homedir
        };
    });
});
exports.importKey = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const keyFolder = fs.mkdtempSync(path.join(os.tmpdir(), 'ghaction-import-gpg-'));
    const keyPath = `${keyFolder}/key.pgp`;
    fs.writeFileSync(keyPath, (yield openpgp.isArmored(key)) ? key : Buffer.from(key, 'base64').toString(), { mode: 0o600 });
    return yield exec
        .exec('gpg', ['--import', '--batch', '--yes', keyPath], true)
        .then(res => {
        if (res.stderr != '' && !res.success) {
            throw new Error(res.stderr);
        }
        if (res.stderr != '') {
            return res.stderr.trim();
        }
        return res.stdout.trim();
    })
        .finally(() => {
        fs.unlinkSync(keyPath);
    });
});
exports.getKeygrips = (fingerprint) => __awaiter(void 0, void 0, void 0, function* () {
    return yield exec.exec('gpg', ['--batch', '--with-colons', '--with-keygrip', '--list-secret-keys', fingerprint], true).then(res => {
        if (res.stderr != '' && !res.success) {
            throw new Error(res.stderr);
        }
        let keygrips = [];
        for (let line of res.stdout.replace(/\r/g, '').trim().split(/\n/g)) {
            if (line.startsWith('grp')) {
                keygrips.push(line.replace(/(grp|:)/g, '').trim());
            }
        }
        return keygrips;
    });
});
exports.configureAgent = (config) => __awaiter(void 0, void 0, void 0, function* () {
    const gpgAgentConf = path.join(yield getGnupgHome(), 'gpg-agent.conf');
    yield fs.writeFile(gpgAgentConf, config, function (err) {
        if (err)
            throw err;
    });
    yield gpgConnectAgent('RELOADAGENT');
});
exports.presetPassphrase = (keygrip, passphrase) => __awaiter(void 0, void 0, void 0, function* () {
    const hexPassphrase = Buffer.from(passphrase, 'utf8').toString('hex').toUpperCase();
    yield gpgConnectAgent(`PRESET_PASSPHRASE ${keygrip} -1 ${hexPassphrase}`);
    return yield gpgConnectAgent(`KEYINFO ${keygrip}`);
});
exports.deleteKey = (fingerprint) => __awaiter(void 0, void 0, void 0, function* () {
    yield exec.exec('gpg', ['--batch', '--yes', '--delete-secret-keys', fingerprint], true).then(res => {
        if (res.stderr != '' && !res.success) {
            throw new Error(res.stderr);
        }
    });
    yield exec.exec('gpg', ['--batch', '--yes', '--delete-keys', fingerprint], true).then(res => {
        if (res.stderr != '' && !res.success) {
            throw new Error(res.stderr);
        }
    });
});
exports.killAgent = () => __awaiter(void 0, void 0, void 0, function* () {
    yield gpgConnectAgent('KILLAGENT');
});
//# sourceMappingURL=gpg.js.map

/***/ }),

/***/ 109:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__webpack_require__(186));
const context = __importStar(__webpack_require__(842));
const git = __importStar(__webpack_require__(374));
const gpg = __importStar(__webpack_require__(60));
const openpgp = __importStar(__webpack_require__(666));
const stateHelper = __importStar(__webpack_require__(647));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let inputs = yield context.getInputs();
            stateHelper.setGpgPrivateKey(inputs.gpgPrivateKey);
            if (inputs.workdir && inputs.workdir !== '.') {
                core.info(`📂 Using ${inputs.workdir} as working directory...`);
                process.chdir(inputs.workdir);
            }
            core.info('📣 GnuPG info');
            const version = yield gpg.getVersion();
            const dirs = yield gpg.getDirs();
            core.info(`Version    : ${version.gnupg} (libgcrypt ${version.libgcrypt})`);
            core.info(`Libdir     : ${dirs.libdir}`);
            core.info(`Libexecdir : ${dirs.libexecdir}`);
            core.info(`Datadir    : ${dirs.datadir}`);
            core.info(`Homedir    : ${dirs.homedir}`);
            core.info('🔮 Checking GPG private key');
            const privateKey = yield openpgp.readPrivateKey(inputs.gpgPrivateKey);
            core.debug(`Fingerprint  : ${privateKey.fingerprint}`);
            core.debug(`KeyID        : ${privateKey.keyID}`);
            core.debug(`Name         : ${privateKey.name}`);
            core.debug(`Email        : ${privateKey.email}`);
            core.debug(`CreationTime : ${privateKey.creationTime}`);
            core.info('🔑 Importing GPG private key');
            yield gpg.importKey(inputs.gpgPrivateKey).then(stdout => {
                core.debug(stdout);
            });
            if (inputs.passphrase) {
                core.info('⚙️ Configuring GnuPG agent');
                yield gpg.configureAgent(gpg.agentConfig);
                core.info('📌 Getting keygrips');
                for (let keygrip of yield gpg.getKeygrips(privateKey.fingerprint)) {
                    core.info(`🔓 Presetting passphrase for ${keygrip}`);
                    yield gpg.presetPassphrase(keygrip, inputs.passphrase).then(stdout => {
                        core.debug(stdout);
                    });
                }
            }
            core.info('🛒 Setting outputs...');
            core.setOutput('fingerprint', privateKey.fingerprint);
            core.setOutput('keyid', privateKey.keyID);
            core.setOutput('name', privateKey.name);
            core.setOutput('email', privateKey.email);
            if (inputs.gitUserSigningkey) {
                core.info('🔐 Setting GPG signing keyID for this Git repository');
                yield git.setConfig('user.signingkey', privateKey.keyID);
                const userEmail = inputs.gitCommitterEmail || privateKey.email;
                const userName = inputs.gitCommitterName || privateKey.name;
                if (userEmail != privateKey.email) {
                    core.setFailed(`Committer email "${inputs.gitCommitterEmail}" (name: "${inputs.gitCommitterName}") does not match GPG private key email "${privateKey.email}" (name: "${privateKey.name}")`);
                    return;
                }
                core.info(`🔨 Configuring Git committer (${userName} <${userEmail}>)`);
                yield git.setConfig('user.name', userName);
                yield git.setConfig('user.email', userEmail);
                if (inputs.gitCommitGpgsign) {
                    core.info('💎 Sign all commits automatically');
                    yield git.setConfig('commit.gpgsign', 'true');
                }
                if (inputs.gitTagGpgsign) {
                    core.info('💎 Sign all tags automatically');
                    yield git.setConfig('tag.gpgsign', 'true');
                }
                if (inputs.gitPushGpgsign) {
                    core.info('💎 Sign all pushes automatically');
                    yield git.setConfig('push.gpgsign', 'true');
                }
            }
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
function cleanup() {
    return __awaiter(this, void 0, void 0, function* () {
        if (stateHelper.gpgPrivateKey.length <= 0) {
            core.debug('GPG private key is not defined. Skipping cleanup.');
            return;
        }
        try {
            core.info('🚿 Removing keys');
            const privateKey = yield openpgp.readPrivateKey(stateHelper.gpgPrivateKey);
            yield gpg.deleteKey(privateKey.fingerprint);
            core.info('💀 Killing GnuPG agent');
            yield gpg.killAgent();
        }
        catch (error) {
            core.warning(error.message);
        }
    });
}
if (!stateHelper.IsPost) {
    run();
}
else {
    cleanup();
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 666:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArmored = exports.generateKeyPair = exports.readPrivateKey = void 0;
const openpgp = __importStar(__webpack_require__(946));
const addressparser_1 = __importDefault(__webpack_require__(764));
exports.readPrivateKey = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const privateKey = yield openpgp.readKey({
        armoredKey: (yield exports.isArmored(key)) ? key : Buffer.from(key, 'base64').toString()
    });
    const address = yield privateKey.getPrimaryUser().then(primaryUser => {
        var _a;
        return addressparser_1.default((_a = primaryUser.user.userID) === null || _a === void 0 ? void 0 : _a.userID)[0];
    });
    return {
        fingerprint: privateKey.getFingerprint().toUpperCase(),
        keyID: yield privateKey.getEncryptionKey().then(encKey => {
            // @ts-ignore
            return encKey === null || encKey === void 0 ? void 0 : encKey.getKeyID().toHex().toUpperCase();
        }),
        name: address.name,
        email: address.address,
        creationTime: privateKey.getCreationTime()
    };
});
exports.generateKeyPair = (name, email, passphrase, type) => __awaiter(void 0, void 0, void 0, function* () {
    const keyPair = yield openpgp.generateKey({
        userIDs: [{ name: name, email: email }],
        passphrase: passphrase,
        type: type
    });
    return {
        publicKey: keyPair.publicKeyArmored.replace(/\r\n/g, '\n').trim(),
        privateKey: keyPair.privateKeyArmored.replace(/\r\n/g, '\n').trim()
    };
});
exports.isArmored = (text) => __awaiter(void 0, void 0, void 0, function* () {
    return text.trimLeft().startsWith('---');
});
//# sourceMappingURL=openpgp.js.map

/***/ }),

/***/ 647:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setGpgPrivateKey = exports.gpgPrivateKey = exports.IsPost = void 0;
const core = __importStar(__webpack_require__(186));
exports.IsPost = !!process.env['STATE_isPost'];
exports.gpgPrivateKey = process.env['STATE_gpgPrivateKey'] || '';
function setGpgPrivateKey(gpgPrivateKey) {
    core.saveState('gpgPrivateKey', gpgPrivateKey);
}
exports.setGpgPrivateKey = setGpgPrivateKey;
if (!exports.IsPost) {
    core.saveState('isPost', 'true');
}
//# sourceMappingURL=state-helper.js.map

/***/ }),

/***/ 351:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 186:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const command_1 = __webpack_require__(351);
const file_command_1 = __webpack_require__(717);
const utils_1 = __webpack_require__(278);
const os = __importStar(__webpack_require__(87));
const path = __importStar(__webpack_require__(622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// For internal use, subject to change.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__webpack_require__(747));
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 514:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tr = __importStar(__webpack_require__(159));
/**
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 *
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
 */
function exec(commandLine, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandArgs = tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
}
exports.exec = exec;
//# sourceMappingURL=exec.js.map

/***/ }),

/***/ 159:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const os = __importStar(__webpack_require__(87));
const events = __importStar(__webpack_require__(614));
const child = __importStar(__webpack_require__(129));
const path = __importStar(__webpack_require__(622));
const io = __importStar(__webpack_require__(436));
const ioUtil = __importStar(__webpack_require__(962));
/* eslint-disable @typescript-eslint/unbound-method */
const IS_WINDOWS = process.platform === 'win32';
/*
 * Class for running command line tools. Handles quoting and arg parsing in a platform agnostic way.
 */
class ToolRunner extends events.EventEmitter {
    constructor(toolPath, args, options) {
        super();
        if (!toolPath) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = toolPath;
        this.args = args || [];
        this.options = options || {};
    }
    _debug(message) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(message);
        }
    }
    _getCommandString(options, noPrefix) {
        const toolPath = this._getSpawnFileName();
        const args = this._getSpawnArgs(options);
        let cmd = noPrefix ? '' : '[command]'; // omit prefix when piped to a second tool
        if (IS_WINDOWS) {
            // Windows + cmd file
            if (this._isCmdFile()) {
                cmd += toolPath;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows + verbatim
            else if (options.windowsVerbatimArguments) {
                cmd += `"${toolPath}"`;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows (regular)
            else {
                cmd += this._windowsQuoteCmdArg(toolPath);
                for (const a of args) {
                    cmd += ` ${this._windowsQuoteCmdArg(a)}`;
                }
            }
        }
        else {
            // OSX/Linux - this can likely be improved with some form of quoting.
            // creating processes on Unix is fundamentally different than Windows.
            // on Unix, execvp() takes an arg array.
            cmd += toolPath;
            for (const a of args) {
                cmd += ` ${a}`;
            }
        }
        return cmd;
    }
    _processLineBuffer(data, strBuffer, onLine) {
        try {
            let s = strBuffer + data.toString();
            let n = s.indexOf(os.EOL);
            while (n > -1) {
                const line = s.substring(0, n);
                onLine(line);
                // the rest of the string ...
                s = s.substring(n + os.EOL.length);
                n = s.indexOf(os.EOL);
            }
            strBuffer = s;
        }
        catch (err) {
            // streaming lines to console is best effort.  Don't fail a build.
            this._debug(`error processing line. Failed with error ${err}`);
        }
    }
    _getSpawnFileName() {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                return process.env['COMSPEC'] || 'cmd.exe';
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(options) {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                let argline = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const a of this.args) {
                    argline += ' ';
                    argline += options.windowsVerbatimArguments
                        ? a
                        : this._windowsQuoteCmdArg(a);
                }
                argline += '"';
                return [argline];
            }
        }
        return this.args;
    }
    _endsWith(str, end) {
        return str.endsWith(end);
    }
    _isCmdFile() {
        const upperToolPath = this.toolPath.toUpperCase();
        return (this._endsWith(upperToolPath, '.CMD') ||
            this._endsWith(upperToolPath, '.BAT'));
    }
    _windowsQuoteCmdArg(arg) {
        // for .exe, apply the normal quoting rules that libuv applies
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(arg);
        }
        // otherwise apply quoting rules specific to the cmd.exe command line parser.
        // the libuv rules are generic and are not designed specifically for cmd.exe
        // command line parser.
        //
        // for a detailed description of the cmd.exe command line parser, refer to
        // http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/7970912#7970912
        // need quotes for empty arg
        if (!arg) {
            return '""';
        }
        // determine whether the arg needs to be quoted
        const cmdSpecialChars = [
            ' ',
            '\t',
            '&',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '^',
            '=',
            ';',
            '!',
            "'",
            '+',
            ',',
            '`',
            '~',
            '|',
            '<',
            '>',
            '"'
        ];
        let needsQuotes = false;
        for (const char of arg) {
            if (cmdSpecialChars.some(x => x === char)) {
                needsQuotes = true;
                break;
            }
        }
        // short-circuit if quotes not needed
        if (!needsQuotes) {
            return arg;
        }
        // the following quoting rules are very similar to the rules that by libuv applies.
        //
        // 1) wrap the string in quotes
        //
        // 2) double-up quotes - i.e. " => ""
        //
        //    this is different from the libuv quoting rules. libuv replaces " with \", which unfortunately
        //    doesn't work well with a cmd.exe command line.
        //
        //    note, replacing " with "" also works well if the arg is passed to a downstream .NET console app.
        //    for example, the command line:
        //          foo.exe "myarg:""my val"""
        //    is parsed by a .NET console app into an arg array:
        //          [ "myarg:\"my val\"" ]
        //    which is the same end result when applying libuv quoting rules. although the actual
        //    command line from libuv quoting rules would look like:
        //          foo.exe "myarg:\"my val\""
        //
        // 3) double-up slashes that precede a quote,
        //    e.g.  hello \world    => "hello \world"
        //          hello\"world    => "hello\\""world"
        //          hello\\"world   => "hello\\\\""world"
        //          hello world\    => "hello world\\"
        //
        //    technically this is not required for a cmd.exe command line, or the batch argument parser.
        //    the reasons for including this as a .cmd quoting rule are:
        //
        //    a) this is optimized for the scenario where the argument is passed from the .cmd file to an
        //       external program. many programs (e.g. .NET console apps) rely on the slash-doubling rule.
        //
        //    b) it's what we've been doing previously (by deferring to node default behavior) and we
        //       haven't heard any complaints about that aspect.
        //
        // note, a weakness of the quoting rules chosen here, is that % is not escaped. in fact, % cannot be
        // escaped when used on the command line directly - even though within a .cmd file % can be escaped
        // by using %%.
        //
        // the saving grace is, on the command line, %var% is left as-is if var is not defined. this contrasts
        // the line parsing rules within a .cmd file, where if var is not defined it is replaced with nothing.
        //
        // one option that was explored was replacing % with ^% - i.e. %var% => ^%var^%. this hack would
        // often work, since it is unlikely that var^ would exist, and the ^ character is removed when the
        // variable is used. the problem, however, is that ^ is not removed when %* is used to pass the args
        // to an external program.
        //
        // an unexplored potential solution for the % escaping problem, is to create a wrapper .cmd file.
        // % can be escaped within a .cmd file.
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\'; // double the slash
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '"'; // double the quote
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _uvQuoteCmdArg(arg) {
        // Tool runner wraps child_process.spawn() and needs to apply the same quoting as
        // Node in certain cases where the undocumented spawn option windowsVerbatimArguments
        // is used.
        //
        // Since this function is a port of quote_cmd_arg from Node 4.x (technically, lib UV,
        // see https://github.com/nodejs/node/blob/v4.x/deps/uv/src/win/process.c for details),
        // pasting copyright notice from Node within this function:
        //
        //      Copyright Joyent, Inc. and other Node contributors. All rights reserved.
        //
        //      Permission is hereby granted, free of charge, to any person obtaining a copy
        //      of this software and associated documentation files (the "Software"), to
        //      deal in the Software without restriction, including without limitation the
        //      rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        //      sell copies of the Software, and to permit persons to whom the Software is
        //      furnished to do so, subject to the following conditions:
        //
        //      The above copyright notice and this permission notice shall be included in
        //      all copies or substantial portions of the Software.
        //
        //      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        //      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        //      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        //      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        //      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        //      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        //      IN THE SOFTWARE.
        if (!arg) {
            // Need double quotation for empty argument
            return '""';
        }
        if (!arg.includes(' ') && !arg.includes('\t') && !arg.includes('"')) {
            // No quotation needed
            return arg;
        }
        if (!arg.includes('"') && !arg.includes('\\')) {
            // No embedded double quotes or backslashes, so I can just wrap
            // quote marks around the whole thing.
            return `"${arg}"`;
        }
        // Expected input/output:
        //   input : hello"world
        //   output: "hello\"world"
        //   input : hello""world
        //   output: "hello\"\"world"
        //   input : hello\world
        //   output: hello\world
        //   input : hello\\world
        //   output: hello\\world
        //   input : hello\"world
        //   output: "hello\\\"world"
        //   input : hello\\"world
        //   output: "hello\\\\\"world"
        //   input : hello world\
        //   output: "hello world\\" - note the comment in libuv actually reads "hello world\"
        //                             but it appears the comment is wrong, it should be "hello world\\"
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\';
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '\\';
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _cloneExecOptions(options) {
        options = options || {};
        const result = {
            cwd: options.cwd || process.cwd(),
            env: options.env || process.env,
            silent: options.silent || false,
            windowsVerbatimArguments: options.windowsVerbatimArguments || false,
            failOnStdErr: options.failOnStdErr || false,
            ignoreReturnCode: options.ignoreReturnCode || false,
            delay: options.delay || 10000
        };
        result.outStream = options.outStream || process.stdout;
        result.errStream = options.errStream || process.stderr;
        return result;
    }
    _getSpawnOptions(options, toolPath) {
        options = options || {};
        const result = {};
        result.cwd = options.cwd;
        result.env = options.env;
        result['windowsVerbatimArguments'] =
            options.windowsVerbatimArguments || this._isCmdFile();
        if (options.windowsVerbatimArguments) {
            result.argv0 = `"${toolPath}"`;
        }
        return result;
    }
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            // root the tool path if it is unrooted and contains relative pathing
            if (!ioUtil.isRooted(this.toolPath) &&
                (this.toolPath.includes('/') ||
                    (IS_WINDOWS && this.toolPath.includes('\\')))) {
                // prefer options.cwd if it is specified, however options.cwd may also need to be rooted
                this.toolPath = path.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            // if the tool is only a file name, then resolve it from the PATH
            // otherwise verify it exists (add extension on Windows if necessary)
            this.toolPath = yield io.which(this.toolPath, true);
            return new Promise((resolve, reject) => {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug('arguments:');
                for (const arg of this.args) {
                    this._debug(`   ${arg}`);
                }
                const optionsNonNull = this._cloneExecOptions(this.options);
                if (!optionsNonNull.silent && optionsNonNull.outStream) {
                    optionsNonNull.outStream.write(this._getCommandString(optionsNonNull) + os.EOL);
                }
                const state = new ExecState(optionsNonNull, this.toolPath);
                state.on('debug', (message) => {
                    this._debug(message);
                });
                const fileName = this._getSpawnFileName();
                const cp = child.spawn(fileName, this._getSpawnArgs(optionsNonNull), this._getSpawnOptions(this.options, fileName));
                const stdbuffer = '';
                if (cp.stdout) {
                    cp.stdout.on('data', (data) => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(data);
                        }
                        if (!optionsNonNull.silent && optionsNonNull.outStream) {
                            optionsNonNull.outStream.write(data);
                        }
                        this._processLineBuffer(data, stdbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(line);
                            }
                        });
                    });
                }
                const errbuffer = '';
                if (cp.stderr) {
                    cp.stderr.on('data', (data) => {
                        state.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(data);
                        }
                        if (!optionsNonNull.silent &&
                            optionsNonNull.errStream &&
                            optionsNonNull.outStream) {
                            const s = optionsNonNull.failOnStdErr
                                ? optionsNonNull.errStream
                                : optionsNonNull.outStream;
                            s.write(data);
                        }
                        this._processLineBuffer(data, errbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(line);
                            }
                        });
                    });
                }
                cp.on('error', (err) => {
                    state.processError = err.message;
                    state.processExited = true;
                    state.processClosed = true;
                    state.CheckComplete();
                });
                cp.on('exit', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    this._debug(`Exit code ${code} received from tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                cp.on('close', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    state.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                state.on('done', (error, exitCode) => {
                    if (stdbuffer.length > 0) {
                        this.emit('stdline', stdbuffer);
                    }
                    if (errbuffer.length > 0) {
                        this.emit('errline', errbuffer);
                    }
                    cp.removeAllListeners();
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(exitCode);
                    }
                });
                if (this.options.input) {
                    if (!cp.stdin) {
                        throw new Error('child process missing stdin');
                    }
                    cp.stdin.end(this.options.input);
                }
            });
        });
    }
}
exports.ToolRunner = ToolRunner;
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
function argStringToArray(argString) {
    const args = [];
    let inQuotes = false;
    let escaped = false;
    let arg = '';
    function append(c) {
        // we only escape double quotes.
        if (escaped && c !== '"') {
            arg += '\\';
        }
        arg += c;
        escaped = false;
    }
    for (let i = 0; i < argString.length; i++) {
        const c = argString.charAt(i);
        if (c === '"') {
            if (!escaped) {
                inQuotes = !inQuotes;
            }
            else {
                append(c);
            }
            continue;
        }
        if (c === '\\' && escaped) {
            append(c);
            continue;
        }
        if (c === '\\' && inQuotes) {
            escaped = true;
            continue;
        }
        if (c === ' ' && !inQuotes) {
            if (arg.length > 0) {
                args.push(arg);
                arg = '';
            }
            continue;
        }
        append(c);
    }
    if (arg.length > 0) {
        args.push(arg.trim());
    }
    return args;
}
exports.argStringToArray = argStringToArray;
class ExecState extends events.EventEmitter {
    constructor(options, toolPath) {
        super();
        this.processClosed = false; // tracks whether the process has exited and stdio is closed
        this.processError = '';
        this.processExitCode = 0;
        this.processExited = false; // tracks whether the process has exited
        this.processStderr = false; // tracks whether stderr was written to
        this.delay = 10000; // 10 seconds
        this.done = false;
        this.timeout = null;
        if (!toolPath) {
            throw new Error('toolPath must not be empty');
        }
        this.options = options;
        this.toolPath = toolPath;
        if (options.delay) {
            this.delay = options.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        }
        else if (this.processExited) {
            this.timeout = setTimeout(ExecState.HandleTimeout, this.delay, this);
        }
    }
    _debug(message) {
        this.emit('debug', message);
    }
    _setResult() {
        // determine whether there is an error
        let error;
        if (this.processExited) {
            if (this.processError) {
                error = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            }
            else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                error = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            }
            else if (this.processStderr && this.options.failOnStdErr) {
                error = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        // clear the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit('done', error, this.processExitCode);
    }
    static HandleTimeout(state) {
        if (state.done) {
            return;
        }
        if (!state.processClosed && state.processExited) {
            const message = `The STDIO streams did not close within ${state.delay /
                1000} seconds of the exit event from process '${state.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            state._debug(message);
        }
        state._setResult();
    }
}
//# sourceMappingURL=toolrunner.js.map

/***/ }),

/***/ 962:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const assert_1 = __webpack_require__(357);
const fs = __webpack_require__(747);
const path = __webpack_require__(622);
_a = fs.promises, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
exports.IS_WINDOWS = process.platform === 'win32';
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
}
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Recursively create a directory at `fsPath`.
 *
 * This implementation is optimistic, meaning it attempts to create the full
 * path first, and backs up the path stack from there.
 *
 * @param fsPath The path to create
 * @param maxDepth The maximum recursion depth
 * @param depth The current recursion depth
 */
function mkdirP(fsPath, maxDepth = 1000, depth = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        fsPath = path.resolve(fsPath);
        if (depth >= maxDepth)
            return exports.mkdir(fsPath);
        try {
            yield exports.mkdir(fsPath);
            return;
        }
        catch (err) {
            switch (err.code) {
                case 'ENOENT': {
                    yield mkdirP(path.dirname(fsPath), maxDepth, depth + 1);
                    yield exports.mkdir(fsPath);
                    return;
                }
                default: {
                    let stats;
                    try {
                        stats = yield exports.stat(fsPath);
                    }
                    catch (err2) {
                        throw err;
                    }
                    if (!stats.isDirectory())
                        throw err;
                }
            }
        }
    });
}
exports.mkdirP = mkdirP;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
}
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
//# sourceMappingURL=io-util.js.map

/***/ }),

/***/ 436:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const childProcess = __webpack_require__(129);
const path = __webpack_require__(622);
const util_1 = __webpack_require__(669);
const ioUtil = __webpack_require__(962);
const exec = util_1.promisify(childProcess.exec);
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory()
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Node doesn't provide a delete operation, only an unlink function. This means that if the file is being used by another
            // program (e.g. antivirus), it won't be deleted. To address this, we shell out the work to rd/del.
            try {
                if (yield ioUtil.isDirectory(inputPath, true)) {
                    yield exec(`rd /s /q "${inputPath}"`);
                }
                else {
                    yield exec(`del /f /a "${inputPath}"`);
                }
            }
            catch (err) {
                // if you try to delete a file that doesn't exist, desired result is achieved
                // other errors are valid
                if (err.code !== 'ENOENT')
                    throw err;
            }
            // Shelling out fails to remove a symlink folder with missing source, this unlink catches that
            try {
                yield ioUtil.unlink(inputPath);
            }
            catch (err) {
                // if you try to delete a file that doesn't exist, desired result is achieved
                // other errors are valid
                if (err.code !== 'ENOENT')
                    throw err;
            }
        }
        else {
            let isDir = false;
            try {
                isDir = yield ioUtil.isDirectory(inputPath);
            }
            catch (err) {
                // if you try to delete a file that doesn't exist, desired result is achieved
                // other errors are valid
                if (err.code !== 'ENOENT')
                    throw err;
                return;
            }
            if (isDir) {
                yield exec(`rm -rf "${inputPath}"`);
            }
            else {
                yield ioUtil.unlink(inputPath);
            }
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield ioUtil.mkdirP(fsPath);
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
        }
        try {
            // build the list of extensions to try
            const extensions = [];
            if (ioUtil.IS_WINDOWS && process.env.PATHEXT) {
                for (const extension of process.env.PATHEXT.split(path.delimiter)) {
                    if (extension) {
                        extensions.push(extension);
                    }
                }
            }
            // if it's rooted, return it if exists. otherwise return empty.
            if (ioUtil.isRooted(tool)) {
                const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
                if (filePath) {
                    return filePath;
                }
                return '';
            }
            // if any path separators, return empty
            if (tool.includes('/') || (ioUtil.IS_WINDOWS && tool.includes('\\'))) {
                return '';
            }
            // build the list of directories
            //
            // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
            // it feels like we should not do this. Checking the current directory seems like more of a use
            // case of a shell, and the which() function exposed by the toolkit should strive for consistency
            // across platforms.
            const directories = [];
            if (process.env.PATH) {
                for (const p of process.env.PATH.split(path.delimiter)) {
                    if (p) {
                        directories.push(p);
                    }
                }
            }
            // return the first match
            for (const directory of directories) {
                const filePath = yield ioUtil.tryGetExecutablePath(directory + path.sep + tool, extensions);
                if (filePath) {
                    return filePath;
                }
            }
            return '';
        }
        catch (err) {
            throw new Error(`which failed with message ${err.message}`);
        }
    });
}
exports.which = which;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    return { force, recursive };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 764:
/***/ ((module) => {

"use strict";


// expose to the world
module.exports = addressparser;

/**
 * Parses structured e-mail addresses from an address field
 *
 * Example:
 *
 *    'Name <address@domain>'
 *
 * will be converted to
 *
 *     [{name: 'Name', address: 'address@domain'}]
 *
 * @param {String} str Address field
 * @return {Array} An array of address objects
 */
function addressparser(str) {
    var tokenizer = new Tokenizer(str);
    var tokens = tokenizer.tokenize();

    var addresses = [];
    var address = [];
    var parsedAddresses = [];

    tokens.forEach(function (token) {
        if (token.type === 'operator' && (token.value === ',' || token.value === ';')) {
            if (address.length) {
                addresses.push(address);
            }
            address = [];
        } else {
            address.push(token);
        }
    });

    if (address.length) {
        addresses.push(address);
    }

    addresses.forEach(function (address) {
        address = _handleAddress(address);
        if (address.length) {
            parsedAddresses = parsedAddresses.concat(address);
        }
    });

    return parsedAddresses;
}

/**
 * Converts tokens for a single address into an address object
 *
 * @param {Array} tokens Tokens object
 * @return {Object} Address object
 */
function _handleAddress(tokens) {
    var token;
    var isGroup = false;
    var state = 'text';
    var address;
    var addresses = [];
    var data = {
        address: [],
        comment: [],
        group: [],
        text: []
    };
    var i;
    var len;

    // Filter out <addresses>, (comments) and regular text
    for (i = 0, len = tokens.length; i < len; i++) {
        token = tokens[i];
        if (token.type === 'operator') {
            switch (token.value) {
                case '<':
                    state = 'address';
                    break;
                case '(':
                    state = 'comment';
                    break;
                case ':':
                    state = 'group';
                    isGroup = true;
                    break;
                default:
                    state = 'text';
            }
        } else if (token.value) {
            if (state === 'address') {
                // handle use case where unquoted name includes a "<"
                // Apple Mail truncates everything between an unexpected < and an address
                // and so will we
                token.value = token.value.replace(/^[^<]*<\s*/, '');
            }
            data[state].push(token.value);
        }
    }

    // If there is no text but a comment, replace the two
    if (!data.text.length && data.comment.length) {
        data.text = data.comment;
        data.comment = [];
    }

    if (isGroup) {
        // http://tools.ietf.org/html/rfc2822#appendix-A.1.3
        data.text = data.text.join(' ');
        addresses.push({
            name: data.text || (address && address.name),
            group: data.group.length ? addressparser(data.group.join(',')) : []
        });
    } else {
        // If no address was found, try to detect one from regular text
        if (!data.address.length && data.text.length) {
            for (i = data.text.length - 1; i >= 0; i--) {
                if (data.text[i].match(/^[^@\s]+@[^@\s]+$/)) {
                    data.address = data.text.splice(i, 1);
                    break;
                }
            }

            var _regexHandler = function (address) {
                if (!data.address.length) {
                    data.address = [address.trim()];
                    return ' ';
                } else {
                    return address;
                }
            };

            // still no address
            if (!data.address.length) {
                for (i = data.text.length - 1; i >= 0; i--) {
                    // fixed the regex to parse email address correctly when email address has more than one @
                    data.text[i] = data.text[i].replace(/\s*\b[^@\s]+@[^\s]+\b\s*/, _regexHandler).trim();
                    if (data.address.length) {
                        break;
                    }
                }
            }
        }

        // If there's still is no text but a comment exixts, replace the two
        if (!data.text.length && data.comment.length) {
            data.text = data.comment;
            data.comment = [];
        }

        // Keep only the first address occurence, push others to regular text
        if (data.address.length > 1) {
            data.text = data.text.concat(data.address.splice(1));
        }

        // Join values with spaces
        data.text = data.text.join(' ');
        data.address = data.address.join(' ');

        if (!data.address && isGroup) {
            return [];
        } else {
            address = {
                address: data.address || data.text || '',
                name: data.text || data.address || ''
            };

            if (address.address === address.name) {
                if ((address.address || '').match(/@/)) {
                    address.name = '';
                } else {
                    address.address = '';
                }

            }

            addresses.push(address);
        }
    }

    return addresses;
}

/**
 * Creates a Tokenizer object for tokenizing address field strings
 *
 * @constructor
 * @param {String} str Address field string
 */
function Tokenizer(str) {
    this.str = (str || '').toString();
    this.operatorCurrent = '';
    this.operatorExpecting = '';
    this.node = null;
    this.escaped = false;

    this.list = [];
}

/**
 * Operator tokens and which tokens are expected to end the sequence
 */
Tokenizer.prototype.operators = {
    '"': '"',
    '(': ')',
    '<': '>',
    ',': '',
    ':': ';',
    // Semicolons are not a legal delimiter per the RFC2822 grammar other
    // than for terminating a group, but they are also not valid for any
    // other use in this context.  Given that some mail clients have
    // historically allowed the semicolon as a delimiter equivalent to the
    // comma in their UI, it makes sense to treat them the same as a comma
    // when used outside of a group.
    ';': ''
};

/**
 * Tokenizes the original input string
 *
 * @return {Array} An array of operator|text tokens
 */
Tokenizer.prototype.tokenize = function () {
    var chr, list = [];
    for (var i = 0, len = this.str.length; i < len; i++) {
        chr = this.str.charAt(i);
        this.checkChar(chr);
    }

    this.list.forEach(function (node) {
        node.value = (node.value || '').toString().trim();
        if (node.value) {
            list.push(node);
        }
    });

    return list;
};

/**
 * Checks if a character is an operator or text and acts accordingly
 *
 * @param {String} chr Character from the address field
 */
Tokenizer.prototype.checkChar = function (chr) {
    if ((chr in this.operators || chr === '\\') && this.escaped) {
        this.escaped = false;
    } else if (this.operatorExpecting && chr === this.operatorExpecting) {
        this.node = {
            type: 'operator',
            value: chr
        };
        this.list.push(this.node);
        this.node = null;
        this.operatorExpecting = '';
        this.escaped = false;
        return;
    } else if (!this.operatorExpecting && chr in this.operators) {
        this.node = {
            type: 'operator',
            value: chr
        };
        this.list.push(this.node);
        this.node = null;
        this.operatorExpecting = this.operators[chr];
        this.escaped = false;
        return;
    }

    if (!this.escaped && chr === '\\') {
        this.escaped = true;
        return;
    }

    if (!this.node) {
        this.node = {
            type: 'text',
            value: ''
        };
        this.list.push(this.node);
    }

    if (this.escaped && chr !== '\\') {
        this.node.value += '\\';
    }

    this.node.value += chr;
    this.escaped = false;
};


/***/ }),

/***/ 435:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const asn1 = exports;

asn1.bignum = __webpack_require__(641);

asn1.define = __webpack_require__(245).define;
asn1.base = __webpack_require__(96);
asn1.constants = __webpack_require__(371);
asn1.decoders = __webpack_require__(952);
asn1.encoders = __webpack_require__(83);


/***/ }),

/***/ 245:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const encoders = __webpack_require__(83);
const decoders = __webpack_require__(952);
const inherits = __webpack_require__(124);

const api = exports;

api.define = function define(name, body) {
  return new Entity(name, body);
};

function Entity(name, body) {
  this.name = name;
  this.body = body;

  this.decoders = {};
  this.encoders = {};
}

Entity.prototype._createNamed = function createNamed(Base) {
  const name = this.name;

  function Generated(entity) {
    this._initNamed(entity, name);
  }
  inherits(Generated, Base);
  Generated.prototype._initNamed = function _initNamed(entity, name) {
    Base.call(this, entity, name);
  };

  return new Generated(this);
};

Entity.prototype._getDecoder = function _getDecoder(enc) {
  enc = enc || 'der';
  // Lazily create decoder
  if (!this.decoders.hasOwnProperty(enc))
    this.decoders[enc] = this._createNamed(decoders[enc]);
  return this.decoders[enc];
};

Entity.prototype.decode = function decode(data, enc, options) {
  return this._getDecoder(enc).decode(data, options);
};

Entity.prototype._getEncoder = function _getEncoder(enc) {
  enc = enc || 'der';
  // Lazily create encoder
  if (!this.encoders.hasOwnProperty(enc))
    this.encoders[enc] = this._createNamed(encoders[enc]);
  return this.encoders[enc];
};

Entity.prototype.encode = function encode(data, enc, /* internal */ reporter) {
  return this._getEncoder(enc).encode(data, reporter);
};


/***/ }),

/***/ 298:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const inherits = __webpack_require__(124);
const Reporter = __webpack_require__(744)/* .Reporter */ .b;
const Buffer = __webpack_require__(118).Buffer;

function DecoderBuffer(base, options) {
  Reporter.call(this, options);
  if (!Buffer.isBuffer(base)) {
    this.error('Input not Buffer');
    return;
  }

  this.base = base;
  this.offset = 0;
  this.length = base.length;
}
inherits(DecoderBuffer, Reporter);
exports.C = DecoderBuffer;

DecoderBuffer.isDecoderBuffer = function isDecoderBuffer(data) {
  if (data instanceof DecoderBuffer) {
    return true;
  }

  // Or accept compatible API
  const isCompatible = typeof data === 'object' &&
    Buffer.isBuffer(data.base) &&
    data.constructor.name === 'DecoderBuffer' &&
    typeof data.offset === 'number' &&
    typeof data.length === 'number' &&
    typeof data.save === 'function' &&
    typeof data.restore === 'function' &&
    typeof data.isEmpty === 'function' &&
    typeof data.readUInt8 === 'function' &&
    typeof data.skip === 'function' &&
    typeof data.raw === 'function';

  return isCompatible;
};

DecoderBuffer.prototype.save = function save() {
  return { offset: this.offset, reporter: Reporter.prototype.save.call(this) };
};

DecoderBuffer.prototype.restore = function restore(save) {
  // Return skipped data
  const res = new DecoderBuffer(this.base);
  res.offset = save.offset;
  res.length = this.offset;

  this.offset = save.offset;
  Reporter.prototype.restore.call(this, save.reporter);

  return res;
};

DecoderBuffer.prototype.isEmpty = function isEmpty() {
  return this.offset === this.length;
};

DecoderBuffer.prototype.readUInt8 = function readUInt8(fail) {
  if (this.offset + 1 <= this.length)
    return this.base.readUInt8(this.offset++, true);
  else
    return this.error(fail || 'DecoderBuffer overrun');
};

DecoderBuffer.prototype.skip = function skip(bytes, fail) {
  if (!(this.offset + bytes <= this.length))
    return this.error(fail || 'DecoderBuffer overrun');

  const res = new DecoderBuffer(this.base);

  // Share reporter state
  res._reporterState = this._reporterState;

  res.offset = this.offset;
  res.length = this.offset + bytes;
  this.offset += bytes;
  return res;
};

DecoderBuffer.prototype.raw = function raw(save) {
  return this.base.slice(save ? save.offset : this.offset, this.length);
};

function EncoderBuffer(value, reporter) {
  if (Array.isArray(value)) {
    this.length = 0;
    this.value = value.map(function(item) {
      if (!EncoderBuffer.isEncoderBuffer(item))
        item = new EncoderBuffer(item, reporter);
      this.length += item.length;
      return item;
    }, this);
  } else if (typeof value === 'number') {
    if (!(0 <= value && value <= 0xff))
      return reporter.error('non-byte EncoderBuffer value');
    this.value = value;
    this.length = 1;
  } else if (typeof value === 'string') {
    this.value = value;
    this.length = Buffer.byteLength(value);
  } else if (Buffer.isBuffer(value)) {
    this.value = value;
    this.length = value.length;
  } else {
    return reporter.error('Unsupported type: ' + typeof value);
  }
}
exports.R = EncoderBuffer;

EncoderBuffer.isEncoderBuffer = function isEncoderBuffer(data) {
  if (data instanceof EncoderBuffer) {
    return true;
  }

  // Or accept compatible API
  const isCompatible = typeof data === 'object' &&
    data.constructor.name === 'EncoderBuffer' &&
    typeof data.length === 'number' &&
    typeof data.join === 'function';

  return isCompatible;
};

EncoderBuffer.prototype.join = function join(out, offset) {
  if (!out)
    out = Buffer.alloc(this.length);
  if (!offset)
    offset = 0;

  if (this.length === 0)
    return out;

  if (Array.isArray(this.value)) {
    this.value.forEach(function(item) {
      item.join(out, offset);
      offset += item.length;
    });
  } else {
    if (typeof this.value === 'number')
      out[offset] = this.value;
    else if (typeof this.value === 'string')
      out.write(this.value, offset);
    else if (Buffer.isBuffer(this.value))
      this.value.copy(out, offset);
    offset += this.length;
  }

  return out;
};


/***/ }),

/***/ 96:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const base = exports;

base.Reporter = __webpack_require__(744)/* .Reporter */ .b;
base.DecoderBuffer = __webpack_require__(298)/* .DecoderBuffer */ .C;
base.EncoderBuffer = __webpack_require__(298)/* .EncoderBuffer */ .R;
base.Node = __webpack_require__(651);


/***/ }),

/***/ 651:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Reporter = __webpack_require__(744)/* .Reporter */ .b;
const EncoderBuffer = __webpack_require__(298)/* .EncoderBuffer */ .R;
const DecoderBuffer = __webpack_require__(298)/* .DecoderBuffer */ .C;
const assert = __webpack_require__(910);

// Supported tags
const tags = [
  'seq', 'seqof', 'set', 'setof', 'objid', 'bool',
  'gentime', 'utctime', 'null_', 'enum', 'int', 'objDesc',
  'bitstr', 'bmpstr', 'charstr', 'genstr', 'graphstr', 'ia5str', 'iso646str',
  'numstr', 'octstr', 'printstr', 't61str', 'unistr', 'utf8str', 'videostr'
];

// Public methods list
const methods = [
  'key', 'obj', 'use', 'optional', 'explicit', 'implicit', 'def', 'choice',
  'any', 'contains'
].concat(tags);

// Overrided methods list
const overrided = [
  '_peekTag', '_decodeTag', '_use',
  '_decodeStr', '_decodeObjid', '_decodeTime',
  '_decodeNull', '_decodeInt', '_decodeBool', '_decodeList',

  '_encodeComposite', '_encodeStr', '_encodeObjid', '_encodeTime',
  '_encodeNull', '_encodeInt', '_encodeBool'
];

function Node(enc, parent, name) {
  const state = {};
  this._baseState = state;

  state.name = name;
  state.enc = enc;

  state.parent = parent || null;
  state.children = null;

  // State
  state.tag = null;
  state.args = null;
  state.reverseArgs = null;
  state.choice = null;
  state.optional = false;
  state.any = false;
  state.obj = false;
  state.use = null;
  state.useDecoder = null;
  state.key = null;
  state['default'] = null;
  state.explicit = null;
  state.implicit = null;
  state.contains = null;

  // Should create new instance on each method
  if (!state.parent) {
    state.children = [];
    this._wrap();
  }
}
module.exports = Node;

const stateProps = [
  'enc', 'parent', 'children', 'tag', 'args', 'reverseArgs', 'choice',
  'optional', 'any', 'obj', 'use', 'alteredUse', 'key', 'default', 'explicit',
  'implicit', 'contains'
];

Node.prototype.clone = function clone() {
  const state = this._baseState;
  const cstate = {};
  stateProps.forEach(function(prop) {
    cstate[prop] = state[prop];
  });
  const res = new this.constructor(cstate.parent);
  res._baseState = cstate;
  return res;
};

Node.prototype._wrap = function wrap() {
  const state = this._baseState;
  methods.forEach(function(method) {
    this[method] = function _wrappedMethod() {
      const clone = new this.constructor(this);
      state.children.push(clone);
      return clone[method].apply(clone, arguments);
    };
  }, this);
};

Node.prototype._init = function init(body) {
  const state = this._baseState;

  assert(state.parent === null);
  body.call(this);

  // Filter children
  state.children = state.children.filter(function(child) {
    return child._baseState.parent === this;
  }, this);
  assert.equal(state.children.length, 1, 'Root node can have only one child');
};

Node.prototype._useArgs = function useArgs(args) {
  const state = this._baseState;

  // Filter children and args
  const children = args.filter(function(arg) {
    return arg instanceof this.constructor;
  }, this);
  args = args.filter(function(arg) {
    return !(arg instanceof this.constructor);
  }, this);

  if (children.length !== 0) {
    assert(state.children === null);
    state.children = children;

    // Replace parent to maintain backward link
    children.forEach(function(child) {
      child._baseState.parent = this;
    }, this);
  }
  if (args.length !== 0) {
    assert(state.args === null);
    state.args = args;
    state.reverseArgs = args.map(function(arg) {
      if (typeof arg !== 'object' || arg.constructor !== Object)
        return arg;

      const res = {};
      Object.keys(arg).forEach(function(key) {
        if (key == (key | 0))
          key |= 0;
        const value = arg[key];
        res[value] = key;
      });
      return res;
    });
  }
};

//
// Overrided methods
//

overrided.forEach(function(method) {
  Node.prototype[method] = function _overrided() {
    const state = this._baseState;
    throw new Error(method + ' not implemented for encoding: ' + state.enc);
  };
});

//
// Public methods
//

tags.forEach(function(tag) {
  Node.prototype[tag] = function _tagMethod() {
    const state = this._baseState;
    const args = Array.prototype.slice.call(arguments);

    assert(state.tag === null);
    state.tag = tag;

    this._useArgs(args);

    return this;
  };
});

Node.prototype.use = function use(item) {
  assert(item);
  const state = this._baseState;

  assert(state.use === null);
  state.use = item;

  return this;
};

Node.prototype.optional = function optional() {
  const state = this._baseState;

  state.optional = true;

  return this;
};

Node.prototype.def = function def(val) {
  const state = this._baseState;

  assert(state['default'] === null);
  state['default'] = val;
  state.optional = true;

  return this;
};

Node.prototype.explicit = function explicit(num) {
  const state = this._baseState;

  assert(state.explicit === null && state.implicit === null);
  state.explicit = num;

  return this;
};

Node.prototype.implicit = function implicit(num) {
  const state = this._baseState;

  assert(state.explicit === null && state.implicit === null);
  state.implicit = num;

  return this;
};

Node.prototype.obj = function obj() {
  const state = this._baseState;
  const args = Array.prototype.slice.call(arguments);

  state.obj = true;

  if (args.length !== 0)
    this._useArgs(args);

  return this;
};

Node.prototype.key = function key(newKey) {
  const state = this._baseState;

  assert(state.key === null);
  state.key = newKey;

  return this;
};

Node.prototype.any = function any() {
  const state = this._baseState;

  state.any = true;

  return this;
};

Node.prototype.choice = function choice(obj) {
  const state = this._baseState;

  assert(state.choice === null);
  state.choice = obj;
  this._useArgs(Object.keys(obj).map(function(key) {
    return obj[key];
  }));

  return this;
};

Node.prototype.contains = function contains(item) {
  const state = this._baseState;

  assert(state.use === null);
  state.contains = item;

  return this;
};

//
// Decoding
//

Node.prototype._decode = function decode(input, options) {
  const state = this._baseState;

  // Decode root node
  if (state.parent === null)
    return input.wrapResult(state.children[0]._decode(input, options));

  let result = state['default'];
  let present = true;

  let prevKey = null;
  if (state.key !== null)
    prevKey = input.enterKey(state.key);

  // Check if tag is there
  if (state.optional) {
    let tag = null;
    if (state.explicit !== null)
      tag = state.explicit;
    else if (state.implicit !== null)
      tag = state.implicit;
    else if (state.tag !== null)
      tag = state.tag;

    if (tag === null && !state.any) {
      // Trial and Error
      const save = input.save();
      try {
        if (state.choice === null)
          this._decodeGeneric(state.tag, input, options);
        else
          this._decodeChoice(input, options);
        present = true;
      } catch (e) {
        present = false;
      }
      input.restore(save);
    } else {
      present = this._peekTag(input, tag, state.any);

      if (input.isError(present))
        return present;
    }
  }

  // Push object on stack
  let prevObj;
  if (state.obj && present)
    prevObj = input.enterObject();

  if (present) {
    // Unwrap explicit values
    if (state.explicit !== null) {
      const explicit = this._decodeTag(input, state.explicit);
      if (input.isError(explicit))
        return explicit;
      input = explicit;
    }

    const start = input.offset;

    // Unwrap implicit and normal values
    if (state.use === null && state.choice === null) {
      let save;
      if (state.any)
        save = input.save();
      const body = this._decodeTag(
        input,
        state.implicit !== null ? state.implicit : state.tag,
        state.any
      );
      if (input.isError(body))
        return body;

      if (state.any)
        result = input.raw(save);
      else
        input = body;
    }

    if (options && options.track && state.tag !== null)
      options.track(input.path(), start, input.length, 'tagged');

    if (options && options.track && state.tag !== null)
      options.track(input.path(), input.offset, input.length, 'content');

    // Select proper method for tag
    if (state.any) {
      // no-op
    } else if (state.choice === null) {
      result = this._decodeGeneric(state.tag, input, options);
    } else {
      result = this._decodeChoice(input, options);
    }

    if (input.isError(result))
      return result;

    // Decode children
    if (!state.any && state.choice === null && state.children !== null) {
      state.children.forEach(function decodeChildren(child) {
        // NOTE: We are ignoring errors here, to let parser continue with other
        // parts of encoded data
        child._decode(input, options);
      });
    }

    // Decode contained/encoded by schema, only in bit or octet strings
    if (state.contains && (state.tag === 'octstr' || state.tag === 'bitstr')) {
      const data = new DecoderBuffer(result);
      result = this._getUse(state.contains, input._reporterState.obj)
        ._decode(data, options);
    }
  }

  // Pop object
  if (state.obj && present)
    result = input.leaveObject(prevObj);

  // Set key
  if (state.key !== null && (result !== null || present === true))
    input.leaveKey(prevKey, state.key, result);
  else if (prevKey !== null)
    input.exitKey(prevKey);

  return result;
};

Node.prototype._decodeGeneric = function decodeGeneric(tag, input, options) {
  const state = this._baseState;

  if (tag === 'seq' || tag === 'set')
    return null;
  if (tag === 'seqof' || tag === 'setof')
    return this._decodeList(input, tag, state.args[0], options);
  else if (/str$/.test(tag))
    return this._decodeStr(input, tag, options);
  else if (tag === 'objid' && state.args)
    return this._decodeObjid(input, state.args[0], state.args[1], options);
  else if (tag === 'objid')
    return this._decodeObjid(input, null, null, options);
  else if (tag === 'gentime' || tag === 'utctime')
    return this._decodeTime(input, tag, options);
  else if (tag === 'null_')
    return this._decodeNull(input, options);
  else if (tag === 'bool')
    return this._decodeBool(input, options);
  else if (tag === 'objDesc')
    return this._decodeStr(input, tag, options);
  else if (tag === 'int' || tag === 'enum')
    return this._decodeInt(input, state.args && state.args[0], options);

  if (state.use !== null) {
    return this._getUse(state.use, input._reporterState.obj)
      ._decode(input, options);
  } else {
    return input.error('unknown tag: ' + tag);
  }
};

Node.prototype._getUse = function _getUse(entity, obj) {

  const state = this._baseState;
  // Create altered use decoder if implicit is set
  state.useDecoder = this._use(entity, obj);
  assert(state.useDecoder._baseState.parent === null);
  state.useDecoder = state.useDecoder._baseState.children[0];
  if (state.implicit !== state.useDecoder._baseState.implicit) {
    state.useDecoder = state.useDecoder.clone();
    state.useDecoder._baseState.implicit = state.implicit;
  }
  return state.useDecoder;
};

Node.prototype._decodeChoice = function decodeChoice(input, options) {
  const state = this._baseState;
  let result = null;
  let match = false;

  Object.keys(state.choice).some(function(key) {
    const save = input.save();
    const node = state.choice[key];
    try {
      const value = node._decode(input, options);
      if (input.isError(value))
        return false;

      result = { type: key, value: value };
      match = true;
    } catch (e) {
      input.restore(save);
      return false;
    }
    return true;
  }, this);

  if (!match)
    return input.error('Choice not matched');

  return result;
};

//
// Encoding
//

Node.prototype._createEncoderBuffer = function createEncoderBuffer(data) {
  return new EncoderBuffer(data, this.reporter);
};

Node.prototype._encode = function encode(data, reporter, parent) {
  const state = this._baseState;
  if (state['default'] !== null && state['default'] === data)
    return;

  const result = this._encodeValue(data, reporter, parent);
  if (result === undefined)
    return;

  if (this._skipDefault(result, reporter, parent))
    return;

  return result;
};

Node.prototype._encodeValue = function encode(data, reporter, parent) {
  const state = this._baseState;

  // Decode root node
  if (state.parent === null)
    return state.children[0]._encode(data, reporter || new Reporter());

  let result = null;

  // Set reporter to share it with a child class
  this.reporter = reporter;

  // Check if data is there
  if (state.optional && data === undefined) {
    if (state['default'] !== null)
      data = state['default'];
    else
      return;
  }

  // Encode children first
  let content = null;
  let primitive = false;
  if (state.any) {
    // Anything that was given is translated to buffer
    result = this._createEncoderBuffer(data);
  } else if (state.choice) {
    result = this._encodeChoice(data, reporter);
  } else if (state.contains) {
    content = this._getUse(state.contains, parent)._encode(data, reporter);
    primitive = true;
  } else if (state.children) {
    content = state.children.map(function(child) {
      if (child._baseState.tag === 'null_')
        return child._encode(null, reporter, data);

      if (child._baseState.key === null)
        return reporter.error('Child should have a key');
      const prevKey = reporter.enterKey(child._baseState.key);

      if (typeof data !== 'object')
        return reporter.error('Child expected, but input is not object');

      const res = child._encode(data[child._baseState.key], reporter, data);
      reporter.leaveKey(prevKey);

      return res;
    }, this).filter(function(child) {
      return child;
    });
    content = this._createEncoderBuffer(content);
  } else {
    if (state.tag === 'seqof' || state.tag === 'setof') {
      // TODO(indutny): this should be thrown on DSL level
      if (!(state.args && state.args.length === 1))
        return reporter.error('Too many args for : ' + state.tag);

      if (!Array.isArray(data))
        return reporter.error('seqof/setof, but data is not Array');

      const child = this.clone();
      child._baseState.implicit = null;
      content = this._createEncoderBuffer(data.map(function(item) {
        const state = this._baseState;

        return this._getUse(state.args[0], data)._encode(item, reporter);
      }, child));
    } else if (state.use !== null) {
      result = this._getUse(state.use, parent)._encode(data, reporter);
    } else {
      content = this._encodePrimitive(state.tag, data);
      primitive = true;
    }
  }

  // Encode data itself
  if (!state.any && state.choice === null) {
    const tag = state.implicit !== null ? state.implicit : state.tag;
    const cls = state.implicit === null ? 'universal' : 'context';

    if (tag === null) {
      if (state.use === null)
        reporter.error('Tag could be omitted only for .use()');
    } else {
      if (state.use === null)
        result = this._encodeComposite(tag, primitive, cls, content);
    }
  }

  // Wrap in explicit
  if (state.explicit !== null)
    result = this._encodeComposite(state.explicit, false, 'context', result);

  return result;
};

Node.prototype._encodeChoice = function encodeChoice(data, reporter) {
  const state = this._baseState;

  const node = state.choice[data.type];
  if (!node) {
    assert(
      false,
      data.type + ' not found in ' +
            JSON.stringify(Object.keys(state.choice)));
  }
  return node._encode(data.value, reporter);
};

Node.prototype._encodePrimitive = function encodePrimitive(tag, data) {
  const state = this._baseState;

  if (/str$/.test(tag))
    return this._encodeStr(data, tag);
  else if (tag === 'objid' && state.args)
    return this._encodeObjid(data, state.reverseArgs[0], state.args[1]);
  else if (tag === 'objid')
    return this._encodeObjid(data, null, null);
  else if (tag === 'gentime' || tag === 'utctime')
    return this._encodeTime(data, tag);
  else if (tag === 'null_')
    return this._encodeNull();
  else if (tag === 'int' || tag === 'enum')
    return this._encodeInt(data, state.args && state.reverseArgs[0]);
  else if (tag === 'bool')
    return this._encodeBool(data);
  else if (tag === 'objDesc')
    return this._encodeStr(data, tag);
  else
    throw new Error('Unsupported tag: ' + tag);
};

Node.prototype._isNumstr = function isNumstr(str) {
  return /^[0-9 ]*$/.test(str);
};

Node.prototype._isPrintstr = function isPrintstr(str) {
  return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(str);
};


/***/ }),

/***/ 744:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const inherits = __webpack_require__(124);

function Reporter(options) {
  this._reporterState = {
    obj: null,
    path: [],
    options: options || {},
    errors: []
  };
}
exports.b = Reporter;

Reporter.prototype.isError = function isError(obj) {
  return obj instanceof ReporterError;
};

Reporter.prototype.save = function save() {
  const state = this._reporterState;

  return { obj: state.obj, pathLen: state.path.length };
};

Reporter.prototype.restore = function restore(data) {
  const state = this._reporterState;

  state.obj = data.obj;
  state.path = state.path.slice(0, data.pathLen);
};

Reporter.prototype.enterKey = function enterKey(key) {
  return this._reporterState.path.push(key);
};

Reporter.prototype.exitKey = function exitKey(index) {
  const state = this._reporterState;

  state.path = state.path.slice(0, index - 1);
};

Reporter.prototype.leaveKey = function leaveKey(index, key, value) {
  const state = this._reporterState;

  this.exitKey(index);
  if (state.obj !== null)
    state.obj[key] = value;
};

Reporter.prototype.path = function path() {
  return this._reporterState.path.join('/');
};

Reporter.prototype.enterObject = function enterObject() {
  const state = this._reporterState;

  const prev = state.obj;
  state.obj = {};
  return prev;
};

Reporter.prototype.leaveObject = function leaveObject(prev) {
  const state = this._reporterState;

  const now = state.obj;
  state.obj = prev;
  return now;
};

Reporter.prototype.error = function error(msg) {
  let err;
  const state = this._reporterState;

  const inherited = msg instanceof ReporterError;
  if (inherited) {
    err = msg;
  } else {
    err = new ReporterError(state.path.map(function(elem) {
      return '[' + JSON.stringify(elem) + ']';
    }).join(''), msg.message || msg, msg.stack);
  }

  if (!state.options.partial)
    throw err;

  if (!inherited)
    state.errors.push(err);

  return err;
};

Reporter.prototype.wrapResult = function wrapResult(result) {
  const state = this._reporterState;
  if (!state.options.partial)
    return result;

  return {
    result: this.isError(result) ? null : result,
    errors: state.errors
  };
};

function ReporterError(path, msg) {
  this.path = path;
  this.rethrow(msg);
}
inherits(ReporterError, Error);

ReporterError.prototype.rethrow = function rethrow(msg) {
  this.message = msg + ' at: ' + (this.path || '(shallow)');
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, ReporterError);

  if (!this.stack) {
    try {
      // IE only adds stack when thrown
      throw new Error(this.message);
    } catch (e) {
      this.stack = e.stack;
    }
  }
  return this;
};


/***/ }),

/***/ 188:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


// Helper
function reverse(map) {
  const res = {};

  Object.keys(map).forEach(function(key) {
    // Convert key to integer if it is stringified
    if ((key | 0) == key)
      key = key | 0;

    const value = map[key];
    res[value] = key;
  });

  return res;
}

exports.tagClass = {
  0: 'universal',
  1: 'application',
  2: 'context',
  3: 'private'
};
exports.tagClassByName = reverse(exports.tagClass);

exports.tag = {
  0x00: 'end',
  0x01: 'bool',
  0x02: 'int',
  0x03: 'bitstr',
  0x04: 'octstr',
  0x05: 'null_',
  0x06: 'objid',
  0x07: 'objDesc',
  0x08: 'external',
  0x09: 'real',
  0x0a: 'enum',
  0x0b: 'embed',
  0x0c: 'utf8str',
  0x0d: 'relativeOid',
  0x10: 'seq',
  0x11: 'set',
  0x12: 'numstr',
  0x13: 'printstr',
  0x14: 't61str',
  0x15: 'videostr',
  0x16: 'ia5str',
  0x17: 'utctime',
  0x18: 'gentime',
  0x19: 'graphstr',
  0x1a: 'iso646str',
  0x1b: 'genstr',
  0x1c: 'unistr',
  0x1d: 'charstr',
  0x1e: 'bmpstr'
};
exports.tagByName = reverse(exports.tag);


/***/ }),

/***/ 371:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const constants = exports;

// Helper
constants._reverse = function reverse(map) {
  const res = {};

  Object.keys(map).forEach(function(key) {
    // Convert key to integer if it is stringified
    if ((key | 0) == key)
      key = key | 0;

    const value = map[key];
    res[value] = key;
  });

  return res;
};

constants.der = __webpack_require__(188);


/***/ }),

/***/ 332:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const inherits = __webpack_require__(124);

const bignum = __webpack_require__(641);
const DecoderBuffer = __webpack_require__(298)/* .DecoderBuffer */ .C;
const Node = __webpack_require__(651);

// Import DER constants
const der = __webpack_require__(188);

function DERDecoder(entity) {
  this.enc = 'der';
  this.name = entity.name;
  this.entity = entity;

  // Construct base tree
  this.tree = new DERNode();
  this.tree._init(entity.body);
}
module.exports = DERDecoder;

DERDecoder.prototype.decode = function decode(data, options) {
  if (!DecoderBuffer.isDecoderBuffer(data)) {
    data = new DecoderBuffer(data, options);
  }

  return this.tree._decode(data, options);
};

// Tree methods

function DERNode(parent) {
  Node.call(this, 'der', parent);
}
inherits(DERNode, Node);

DERNode.prototype._peekTag = function peekTag(buffer, tag, any) {
  if (buffer.isEmpty())
    return false;

  const state = buffer.save();
  const decodedTag = derDecodeTag(buffer, 'Failed to peek tag: "' + tag + '"');
  if (buffer.isError(decodedTag))
    return decodedTag;

  buffer.restore(state);

  return decodedTag.tag === tag || decodedTag.tagStr === tag ||
    (decodedTag.tagStr + 'of') === tag || any;
};

DERNode.prototype._decodeTag = function decodeTag(buffer, tag, any) {
  const decodedTag = derDecodeTag(buffer,
    'Failed to decode tag of "' + tag + '"');
  if (buffer.isError(decodedTag))
    return decodedTag;

  let len = derDecodeLen(buffer,
    decodedTag.primitive,
    'Failed to get length of "' + tag + '"');

  // Failure
  if (buffer.isError(len))
    return len;

  if (!any &&
      decodedTag.tag !== tag &&
      decodedTag.tagStr !== tag &&
      decodedTag.tagStr + 'of' !== tag) {
    return buffer.error('Failed to match tag: "' + tag + '"');
  }

  if (decodedTag.primitive || len !== null)
    return buffer.skip(len, 'Failed to match body of: "' + tag + '"');

  // Indefinite length... find END tag
  const state = buffer.save();
  const res = this._skipUntilEnd(
    buffer,
    'Failed to skip indefinite length body: "' + this.tag + '"');
  if (buffer.isError(res))
    return res;

  len = buffer.offset - state.offset;
  buffer.restore(state);
  return buffer.skip(len, 'Failed to match body of: "' + tag + '"');
};

DERNode.prototype._skipUntilEnd = function skipUntilEnd(buffer, fail) {
  for (;;) {
    const tag = derDecodeTag(buffer, fail);
    if (buffer.isError(tag))
      return tag;
    const len = derDecodeLen(buffer, tag.primitive, fail);
    if (buffer.isError(len))
      return len;

    let res;
    if (tag.primitive || len !== null)
      res = buffer.skip(len);
    else
      res = this._skipUntilEnd(buffer, fail);

    // Failure
    if (buffer.isError(res))
      return res;

    if (tag.tagStr === 'end')
      break;
  }
};

DERNode.prototype._decodeList = function decodeList(buffer, tag, decoder,
  options) {
  const result = [];
  while (!buffer.isEmpty()) {
    const possibleEnd = this._peekTag(buffer, 'end');
    if (buffer.isError(possibleEnd))
      return possibleEnd;

    const res = decoder.decode(buffer, 'der', options);
    if (buffer.isError(res) && possibleEnd)
      break;
    result.push(res);
  }
  return result;
};

DERNode.prototype._decodeStr = function decodeStr(buffer, tag) {
  if (tag === 'bitstr') {
    const unused = buffer.readUInt8();
    if (buffer.isError(unused))
      return unused;
    return { unused: unused, data: buffer.raw() };
  } else if (tag === 'bmpstr') {
    const raw = buffer.raw();
    if (raw.length % 2 === 1)
      return buffer.error('Decoding of string type: bmpstr length mismatch');

    let str = '';
    for (let i = 0; i < raw.length / 2; i++) {
      str += String.fromCharCode(raw.readUInt16BE(i * 2));
    }
    return str;
  } else if (tag === 'numstr') {
    const numstr = buffer.raw().toString('ascii');
    if (!this._isNumstr(numstr)) {
      return buffer.error('Decoding of string type: ' +
                          'numstr unsupported characters');
    }
    return numstr;
  } else if (tag === 'octstr') {
    return buffer.raw();
  } else if (tag === 'objDesc') {
    return buffer.raw();
  } else if (tag === 'printstr') {
    const printstr = buffer.raw().toString('ascii');
    if (!this._isPrintstr(printstr)) {
      return buffer.error('Decoding of string type: ' +
                          'printstr unsupported characters');
    }
    return printstr;
  } else if (/str$/.test(tag)) {
    return buffer.raw().toString();
  } else {
    return buffer.error('Decoding of string type: ' + tag + ' unsupported');
  }
};

DERNode.prototype._decodeObjid = function decodeObjid(buffer, values, relative) {
  let result;
  const identifiers = [];
  let ident = 0;
  let subident = 0;
  while (!buffer.isEmpty()) {
    subident = buffer.readUInt8();
    ident <<= 7;
    ident |= subident & 0x7f;
    if ((subident & 0x80) === 0) {
      identifiers.push(ident);
      ident = 0;
    }
  }
  if (subident & 0x80)
    identifiers.push(ident);

  const first = (identifiers[0] / 40) | 0;
  const second = identifiers[0] % 40;

  if (relative)
    result = identifiers;
  else
    result = [first, second].concat(identifiers.slice(1));

  if (values) {
    let tmp = values[result.join(' ')];
    if (tmp === undefined)
      tmp = values[result.join('.')];
    if (tmp !== undefined)
      result = tmp;
  }

  return result;
};

DERNode.prototype._decodeTime = function decodeTime(buffer, tag) {
  const str = buffer.raw().toString();

  let year;
  let mon;
  let day;
  let hour;
  let min;
  let sec;
  if (tag === 'gentime') {
    year = str.slice(0, 4) | 0;
    mon = str.slice(4, 6) | 0;
    day = str.slice(6, 8) | 0;
    hour = str.slice(8, 10) | 0;
    min = str.slice(10, 12) | 0;
    sec = str.slice(12, 14) | 0;
  } else if (tag === 'utctime') {
    year = str.slice(0, 2) | 0;
    mon = str.slice(2, 4) | 0;
    day = str.slice(4, 6) | 0;
    hour = str.slice(6, 8) | 0;
    min = str.slice(8, 10) | 0;
    sec = str.slice(10, 12) | 0;
    if (year < 70)
      year = 2000 + year;
    else
      year = 1900 + year;
  } else {
    return buffer.error('Decoding ' + tag + ' time is not supported yet');
  }

  return Date.UTC(year, mon - 1, day, hour, min, sec, 0);
};

DERNode.prototype._decodeNull = function decodeNull() {
  return null;
};

DERNode.prototype._decodeBool = function decodeBool(buffer) {
  const res = buffer.readUInt8();
  if (buffer.isError(res))
    return res;
  else
    return res !== 0;
};

DERNode.prototype._decodeInt = function decodeInt(buffer, values) {
  // Bigint, return as it is (assume big endian)
  const raw = buffer.raw();
  let res = new bignum(raw);

  if (values)
    res = values[res.toString(10)] || res;

  return res;
};

DERNode.prototype._use = function use(entity, obj) {
  if (typeof entity === 'function')
    entity = entity(obj);
  return entity._getDecoder('der').tree;
};

// Utility methods

function derDecodeTag(buf, fail) {
  let tag = buf.readUInt8(fail);
  if (buf.isError(tag))
    return tag;

  const cls = der.tagClass[tag >> 6];
  const primitive = (tag & 0x20) === 0;

  // Multi-octet tag - load
  if ((tag & 0x1f) === 0x1f) {
    let oct = tag;
    tag = 0;
    while ((oct & 0x80) === 0x80) {
      oct = buf.readUInt8(fail);
      if (buf.isError(oct))
        return oct;

      tag <<= 7;
      tag |= oct & 0x7f;
    }
  } else {
    tag &= 0x1f;
  }
  const tagStr = der.tag[tag];

  return {
    cls: cls,
    primitive: primitive,
    tag: tag,
    tagStr: tagStr
  };
}

function derDecodeLen(buf, primitive, fail) {
  let len = buf.readUInt8(fail);
  if (buf.isError(len))
    return len;

  // Indefinite form
  if (!primitive && len === 0x80)
    return null;

  // Definite form
  if ((len & 0x80) === 0) {
    // Short form
    return len;
  }

  // Long form
  const num = len & 0x7f;
  if (num > 4)
    return buf.error('length octect is too long');

  len = 0;
  for (let i = 0; i < num; i++) {
    len <<= 8;
    const j = buf.readUInt8(fail);
    if (buf.isError(j))
      return j;
    len |= j;
  }

  return len;
}


/***/ }),

/***/ 952:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const decoders = exports;

decoders.der = __webpack_require__(332);
decoders.pem = __webpack_require__(361);


/***/ }),

/***/ 361:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const inherits = __webpack_require__(124);
const Buffer = __webpack_require__(118).Buffer;

const DERDecoder = __webpack_require__(332);

function PEMDecoder(entity) {
  DERDecoder.call(this, entity);
  this.enc = 'pem';
}
inherits(PEMDecoder, DERDecoder);
module.exports = PEMDecoder;

PEMDecoder.prototype.decode = function decode(data, options) {
  const lines = data.toString().split(/[\r\n]+/g);

  const label = options.label.toUpperCase();

  const re = /^-----(BEGIN|END) ([^-]+)-----$/;
  let start = -1;
  let end = -1;
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(re);
    if (match === null)
      continue;

    if (match[2] !== label)
      continue;

    if (start === -1) {
      if (match[1] !== 'BEGIN')
        break;
      start = i;
    } else {
      if (match[1] !== 'END')
        break;
      end = i;
      break;
    }
  }
  if (start === -1 || end === -1)
    throw new Error('PEM section not found for: ' + label);

  const base64 = lines.slice(start + 1, end).join('');
  // Remove excessive symbols
  base64.replace(/[^a-z0-9+/=]+/gi, '');

  const input = Buffer.from(base64, 'base64');
  return DERDecoder.prototype.decode.call(this, input, options);
};


/***/ }),

/***/ 769:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const inherits = __webpack_require__(124);
const Buffer = __webpack_require__(118).Buffer;
const Node = __webpack_require__(651);

// Import DER constants
const der = __webpack_require__(188);

function DEREncoder(entity) {
  this.enc = 'der';
  this.name = entity.name;
  this.entity = entity;

  // Construct base tree
  this.tree = new DERNode();
  this.tree._init(entity.body);
}
module.exports = DEREncoder;

DEREncoder.prototype.encode = function encode(data, reporter) {
  return this.tree._encode(data, reporter).join();
};

// Tree methods

function DERNode(parent) {
  Node.call(this, 'der', parent);
}
inherits(DERNode, Node);

DERNode.prototype._encodeComposite = function encodeComposite(tag,
  primitive,
  cls,
  content) {
  const encodedTag = encodeTag(tag, primitive, cls, this.reporter);

  // Short form
  if (content.length < 0x80) {
    const header = Buffer.alloc(2);
    header[0] = encodedTag;
    header[1] = content.length;
    return this._createEncoderBuffer([ header, content ]);
  }

  // Long form
  // Count octets required to store length
  let lenOctets = 1;
  for (let i = content.length; i >= 0x100; i >>= 8)
    lenOctets++;

  const header = Buffer.alloc(1 + 1 + lenOctets);
  header[0] = encodedTag;
  header[1] = 0x80 | lenOctets;

  for (let i = 1 + lenOctets, j = content.length; j > 0; i--, j >>= 8)
    header[i] = j & 0xff;

  return this._createEncoderBuffer([ header, content ]);
};

DERNode.prototype._encodeStr = function encodeStr(str, tag) {
  if (tag === 'bitstr') {
    return this._createEncoderBuffer([ str.unused | 0, str.data ]);
  } else if (tag === 'bmpstr') {
    const buf = Buffer.alloc(str.length * 2);
    for (let i = 0; i < str.length; i++) {
      buf.writeUInt16BE(str.charCodeAt(i), i * 2);
    }
    return this._createEncoderBuffer(buf);
  } else if (tag === 'numstr') {
    if (!this._isNumstr(str)) {
      return this.reporter.error('Encoding of string type: numstr supports ' +
                                 'only digits and space');
    }
    return this._createEncoderBuffer(str);
  } else if (tag === 'printstr') {
    if (!this._isPrintstr(str)) {
      return this.reporter.error('Encoding of string type: printstr supports ' +
                                 'only latin upper and lower case letters, ' +
                                 'digits, space, apostrophe, left and rigth ' +
                                 'parenthesis, plus sign, comma, hyphen, ' +
                                 'dot, slash, colon, equal sign, ' +
                                 'question mark');
    }
    return this._createEncoderBuffer(str);
  } else if (/str$/.test(tag)) {
    return this._createEncoderBuffer(str);
  } else if (tag === 'objDesc') {
    return this._createEncoderBuffer(str);
  } else {
    return this.reporter.error('Encoding of string type: ' + tag +
                               ' unsupported');
  }
};

DERNode.prototype._encodeObjid = function encodeObjid(id, values, relative) {
  if (typeof id === 'string') {
    if (!values)
      return this.reporter.error('string objid given, but no values map found');
    if (!values.hasOwnProperty(id))
      return this.reporter.error('objid not found in values map');
    id = values[id].split(/[\s.]+/g);
    for (let i = 0; i < id.length; i++)
      id[i] |= 0;
  } else if (Array.isArray(id)) {
    id = id.slice();
    for (let i = 0; i < id.length; i++)
      id[i] |= 0;
  }

  if (!Array.isArray(id)) {
    return this.reporter.error('objid() should be either array or string, ' +
                               'got: ' + JSON.stringify(id));
  }

  if (!relative) {
    if (id[1] >= 40)
      return this.reporter.error('Second objid identifier OOB');
    id.splice(0, 2, id[0] * 40 + id[1]);
  }

  // Count number of octets
  let size = 0;
  for (let i = 0; i < id.length; i++) {
    let ident = id[i];
    for (size++; ident >= 0x80; ident >>= 7)
      size++;
  }

  const objid = Buffer.alloc(size);
  let offset = objid.length - 1;
  for (let i = id.length - 1; i >= 0; i--) {
    let ident = id[i];
    objid[offset--] = ident & 0x7f;
    while ((ident >>= 7) > 0)
      objid[offset--] = 0x80 | (ident & 0x7f);
  }

  return this._createEncoderBuffer(objid);
};

function two(num) {
  if (num < 10)
    return '0' + num;
  else
    return num;
}

DERNode.prototype._encodeTime = function encodeTime(time, tag) {
  let str;
  const date = new Date(time);

  if (tag === 'gentime') {
    str = [
      two(date.getUTCFullYear()),
      two(date.getUTCMonth() + 1),
      two(date.getUTCDate()),
      two(date.getUTCHours()),
      two(date.getUTCMinutes()),
      two(date.getUTCSeconds()),
      'Z'
    ].join('');
  } else if (tag === 'utctime') {
    str = [
      two(date.getUTCFullYear() % 100),
      two(date.getUTCMonth() + 1),
      two(date.getUTCDate()),
      two(date.getUTCHours()),
      two(date.getUTCMinutes()),
      two(date.getUTCSeconds()),
      'Z'
    ].join('');
  } else {
    this.reporter.error('Encoding ' + tag + ' time is not supported yet');
  }

  return this._encodeStr(str, 'octstr');
};

DERNode.prototype._encodeNull = function encodeNull() {
  return this._createEncoderBuffer('');
};

DERNode.prototype._encodeInt = function encodeInt(num, values) {
  if (typeof num === 'string') {
    if (!values)
      return this.reporter.error('String int or enum given, but no values map');
    if (!values.hasOwnProperty(num)) {
      return this.reporter.error('Values map doesn\'t contain: ' +
                                 JSON.stringify(num));
    }
    num = values[num];
  }

  // Bignum, assume big endian
  if (typeof num !== 'number' && !Buffer.isBuffer(num)) {
    const numArray = num.toArray();
    if (!num.sign && numArray[0] & 0x80) {
      numArray.unshift(0);
    }
    num = Buffer.from(numArray);
  }

  if (Buffer.isBuffer(num)) {
    let size = num.length;
    if (num.length === 0)
      size++;

    const out = Buffer.alloc(size);
    num.copy(out);
    if (num.length === 0)
      out[0] = 0;
    return this._createEncoderBuffer(out);
  }

  if (num < 0x80)
    return this._createEncoderBuffer(num);

  if (num < 0x100)
    return this._createEncoderBuffer([0, num]);

  let size = 1;
  for (let i = num; i >= 0x100; i >>= 8)
    size++;

  const out = new Array(size);
  for (let i = out.length - 1; i >= 0; i--) {
    out[i] = num & 0xff;
    num >>= 8;
  }
  if(out[0] & 0x80) {
    out.unshift(0);
  }

  return this._createEncoderBuffer(Buffer.from(out));
};

DERNode.prototype._encodeBool = function encodeBool(value) {
  return this._createEncoderBuffer(value ? 0xff : 0);
};

DERNode.prototype._use = function use(entity, obj) {
  if (typeof entity === 'function')
    entity = entity(obj);
  return entity._getEncoder('der').tree;
};

DERNode.prototype._skipDefault = function skipDefault(dataBuffer, reporter, parent) {
  const state = this._baseState;
  let i;
  if (state['default'] === null)
    return false;

  const data = dataBuffer.join();
  if (state.defaultBuffer === undefined)
    state.defaultBuffer = this._encodeValue(state['default'], reporter, parent).join();

  if (data.length !== state.defaultBuffer.length)
    return false;

  for (i=0; i < data.length; i++)
    if (data[i] !== state.defaultBuffer[i])
      return false;

  return true;
};

// Utility methods

function encodeTag(tag, primitive, cls, reporter) {
  let res;

  if (tag === 'seqof')
    tag = 'seq';
  else if (tag === 'setof')
    tag = 'set';

  if (der.tagByName.hasOwnProperty(tag))
    res = der.tagByName[tag];
  else if (typeof tag === 'number' && (tag | 0) === tag)
    res = tag;
  else
    return reporter.error('Unknown tag: ' + tag);

  if (res >= 0x1f)
    return reporter.error('Multi-octet tag encoding unsupported');

  if (!primitive)
    res |= 0x20;

  res |= (der.tagClassByName[cls || 'universal'] << 6);

  return res;
}


/***/ }),

/***/ 83:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const encoders = exports;

encoders.der = __webpack_require__(769);
encoders.pem = __webpack_require__(279);


/***/ }),

/***/ 279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const inherits = __webpack_require__(124);

const DEREncoder = __webpack_require__(769);

function PEMEncoder(entity) {
  DEREncoder.call(this, entity);
  this.enc = 'pem';
}
inherits(PEMEncoder, DEREncoder);
module.exports = PEMEncoder;

PEMEncoder.prototype.encode = function encode(data, options) {
  const buf = DEREncoder.prototype.encode.call(this, data);

  const p = buf.toString('base64');
  const out = [ '-----BEGIN ' + options.label + '-----' ];
  for (let i = 0; i < p.length; i += 64)
    out.push(p.slice(i, i + 64));
  out.push('-----END ' + options.label + '-----');
  return out.join('\n');
};


/***/ }),

/***/ 641:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  var Buffer;
  try {
    Buffer = __webpack_require__(293).Buffer;
  } catch (e) {
  }

  BN.isBN = function isBN (num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' &&
      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
    }

    if (base === 16) {
      this._parseHex(number, start);
    } else {
      this._parseBase(number, base, start);
    }

    if (number[0] === '-') {
      this.negative = 1;
    }

    this.strip();

    if (endian !== 'le') return;

    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [ number & 0x3ffffff ];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [ 0 ];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this.strip();
  };

  function parseHex (str, start, end) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r <<= 4;

      // 'a' - 'f'
      if (c >= 49 && c <= 54) {
        r |= c - 49 + 0xa;

      // 'A' - 'F'
      } else if (c >= 17 && c <= 22) {
        r |= c - 17 + 0xa;

      // '0' - '9'
      } else {
        r |= c & 0xf;
      }
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    // Scan 24-bit chunks and add them to the number
    var off = 0;
    for (i = number.length - 6, j = 0; i >= start; i -= 6) {
      w = parseHex(number, i, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
      off += 24;
      if (off >= 26) {
        off -= 26;
        j++;
      }
    }
    if (i + 6 !== start) {
      w = parseHex(number, start, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
    }
    this.strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        r += c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        r += c - 17 + 0xa;

      // '0' - '9'
      } else {
        r += c;
      }
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [ 0 ];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand (size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }
    return this;
  };

  // Remove leading `0` from `this`
  BN.prototype.strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  BN.prototype.inspect = function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  };

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    var ret = this.words[0];
    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }
    return (this.negative !== 0) ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16);
  };

  BN.prototype.toBuffer = function toBuffer (endian, length) {
    assert(typeof Buffer !== 'undefined');
    return this.toArrayLike(Buffer, endian, length);
  };

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    this.strip();
    var littleEndian = endian === 'le';
    var res = new ArrayType(reqLength);

    var b, i;
    var q = this.clone();
    if (!littleEndian) {
      // Assume big-endian
      for (i = 0; i < reqLength - byteLength; i++) {
        res[i] = 0;
      }

      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[reqLength - i - 1] = b;
      }
    } else {
      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[i] = b;
      }

      for (; i < reqLength; i++) {
        res[i] = 0;
      }
    }

    return res;
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos (width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }
    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos (width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }
    return this.clone();
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg () {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this.strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this.strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this.strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this.strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this.strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this.strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out.strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = (mid + Math.imul(ah0, bl0)) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = (mid + Math.imul(ah1, bl0)) | 0;
    hi = Math.imul(ah1, bh0);
    lo = (lo + Math.imul(al0, bl1)) | 0;
    mid = (mid + Math.imul(al0, bh1)) | 0;
    mid = (mid + Math.imul(ah0, bl1)) | 0;
    hi = (hi + Math.imul(ah0, bh1)) | 0;
    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = (mid + Math.imul(ah2, bl0)) | 0;
    hi = Math.imul(ah2, bh0);
    lo = (lo + Math.imul(al1, bl1)) | 0;
    mid = (mid + Math.imul(al1, bh1)) | 0;
    mid = (mid + Math.imul(ah1, bl1)) | 0;
    hi = (hi + Math.imul(ah1, bh1)) | 0;
    lo = (lo + Math.imul(al0, bl2)) | 0;
    mid = (mid + Math.imul(al0, bh2)) | 0;
    mid = (mid + Math.imul(ah0, bl2)) | 0;
    hi = (hi + Math.imul(ah0, bh2)) | 0;
    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = (mid + Math.imul(ah3, bl0)) | 0;
    hi = Math.imul(ah3, bh0);
    lo = (lo + Math.imul(al2, bl1)) | 0;
    mid = (mid + Math.imul(al2, bh1)) | 0;
    mid = (mid + Math.imul(ah2, bl1)) | 0;
    hi = (hi + Math.imul(ah2, bh1)) | 0;
    lo = (lo + Math.imul(al1, bl2)) | 0;
    mid = (mid + Math.imul(al1, bh2)) | 0;
    mid = (mid + Math.imul(ah1, bl2)) | 0;
    hi = (hi + Math.imul(ah1, bh2)) | 0;
    lo = (lo + Math.imul(al0, bl3)) | 0;
    mid = (mid + Math.imul(al0, bh3)) | 0;
    mid = (mid + Math.imul(ah0, bl3)) | 0;
    hi = (hi + Math.imul(ah0, bh3)) | 0;
    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = (mid + Math.imul(ah4, bl0)) | 0;
    hi = Math.imul(ah4, bh0);
    lo = (lo + Math.imul(al3, bl1)) | 0;
    mid = (mid + Math.imul(al3, bh1)) | 0;
    mid = (mid + Math.imul(ah3, bl1)) | 0;
    hi = (hi + Math.imul(ah3, bh1)) | 0;
    lo = (lo + Math.imul(al2, bl2)) | 0;
    mid = (mid + Math.imul(al2, bh2)) | 0;
    mid = (mid + Math.imul(ah2, bl2)) | 0;
    hi = (hi + Math.imul(ah2, bh2)) | 0;
    lo = (lo + Math.imul(al1, bl3)) | 0;
    mid = (mid + Math.imul(al1, bh3)) | 0;
    mid = (mid + Math.imul(ah1, bl3)) | 0;
    hi = (hi + Math.imul(ah1, bh3)) | 0;
    lo = (lo + Math.imul(al0, bl4)) | 0;
    mid = (mid + Math.imul(al0, bh4)) | 0;
    mid = (mid + Math.imul(ah0, bl4)) | 0;
    hi = (hi + Math.imul(ah0, bh4)) | 0;
    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = (mid + Math.imul(ah5, bl0)) | 0;
    hi = Math.imul(ah5, bh0);
    lo = (lo + Math.imul(al4, bl1)) | 0;
    mid = (mid + Math.imul(al4, bh1)) | 0;
    mid = (mid + Math.imul(ah4, bl1)) | 0;
    hi = (hi + Math.imul(ah4, bh1)) | 0;
    lo = (lo + Math.imul(al3, bl2)) | 0;
    mid = (mid + Math.imul(al3, bh2)) | 0;
    mid = (mid + Math.imul(ah3, bl2)) | 0;
    hi = (hi + Math.imul(ah3, bh2)) | 0;
    lo = (lo + Math.imul(al2, bl3)) | 0;
    mid = (mid + Math.imul(al2, bh3)) | 0;
    mid = (mid + Math.imul(ah2, bl3)) | 0;
    hi = (hi + Math.imul(ah2, bh3)) | 0;
    lo = (lo + Math.imul(al1, bl4)) | 0;
    mid = (mid + Math.imul(al1, bh4)) | 0;
    mid = (mid + Math.imul(ah1, bl4)) | 0;
    hi = (hi + Math.imul(ah1, bh4)) | 0;
    lo = (lo + Math.imul(al0, bl5)) | 0;
    mid = (mid + Math.imul(al0, bh5)) | 0;
    mid = (mid + Math.imul(ah0, bl5)) | 0;
    hi = (hi + Math.imul(ah0, bh5)) | 0;
    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = (mid + Math.imul(ah6, bl0)) | 0;
    hi = Math.imul(ah6, bh0);
    lo = (lo + Math.imul(al5, bl1)) | 0;
    mid = (mid + Math.imul(al5, bh1)) | 0;
    mid = (mid + Math.imul(ah5, bl1)) | 0;
    hi = (hi + Math.imul(ah5, bh1)) | 0;
    lo = (lo + Math.imul(al4, bl2)) | 0;
    mid = (mid + Math.imul(al4, bh2)) | 0;
    mid = (mid + Math.imul(ah4, bl2)) | 0;
    hi = (hi + Math.imul(ah4, bh2)) | 0;
    lo = (lo + Math.imul(al3, bl3)) | 0;
    mid = (mid + Math.imul(al3, bh3)) | 0;
    mid = (mid + Math.imul(ah3, bl3)) | 0;
    hi = (hi + Math.imul(ah3, bh3)) | 0;
    lo = (lo + Math.imul(al2, bl4)) | 0;
    mid = (mid + Math.imul(al2, bh4)) | 0;
    mid = (mid + Math.imul(ah2, bl4)) | 0;
    hi = (hi + Math.imul(ah2, bh4)) | 0;
    lo = (lo + Math.imul(al1, bl5)) | 0;
    mid = (mid + Math.imul(al1, bh5)) | 0;
    mid = (mid + Math.imul(ah1, bl5)) | 0;
    hi = (hi + Math.imul(ah1, bh5)) | 0;
    lo = (lo + Math.imul(al0, bl6)) | 0;
    mid = (mid + Math.imul(al0, bh6)) | 0;
    mid = (mid + Math.imul(ah0, bl6)) | 0;
    hi = (hi + Math.imul(ah0, bh6)) | 0;
    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = (mid + Math.imul(ah7, bl0)) | 0;
    hi = Math.imul(ah7, bh0);
    lo = (lo + Math.imul(al6, bl1)) | 0;
    mid = (mid + Math.imul(al6, bh1)) | 0;
    mid = (mid + Math.imul(ah6, bl1)) | 0;
    hi = (hi + Math.imul(ah6, bh1)) | 0;
    lo = (lo + Math.imul(al5, bl2)) | 0;
    mid = (mid + Math.imul(al5, bh2)) | 0;
    mid = (mid + Math.imul(ah5, bl2)) | 0;
    hi = (hi + Math.imul(ah5, bh2)) | 0;
    lo = (lo + Math.imul(al4, bl3)) | 0;
    mid = (mid + Math.imul(al4, bh3)) | 0;
    mid = (mid + Math.imul(ah4, bl3)) | 0;
    hi = (hi + Math.imul(ah4, bh3)) | 0;
    lo = (lo + Math.imul(al3, bl4)) | 0;
    mid = (mid + Math.imul(al3, bh4)) | 0;
    mid = (mid + Math.imul(ah3, bl4)) | 0;
    hi = (hi + Math.imul(ah3, bh4)) | 0;
    lo = (lo + Math.imul(al2, bl5)) | 0;
    mid = (mid + Math.imul(al2, bh5)) | 0;
    mid = (mid + Math.imul(ah2, bl5)) | 0;
    hi = (hi + Math.imul(ah2, bh5)) | 0;
    lo = (lo + Math.imul(al1, bl6)) | 0;
    mid = (mid + Math.imul(al1, bh6)) | 0;
    mid = (mid + Math.imul(ah1, bl6)) | 0;
    hi = (hi + Math.imul(ah1, bh6)) | 0;
    lo = (lo + Math.imul(al0, bl7)) | 0;
    mid = (mid + Math.imul(al0, bh7)) | 0;
    mid = (mid + Math.imul(ah0, bl7)) | 0;
    hi = (hi + Math.imul(ah0, bh7)) | 0;
    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = (mid + Math.imul(ah8, bl0)) | 0;
    hi = Math.imul(ah8, bh0);
    lo = (lo + Math.imul(al7, bl1)) | 0;
    mid = (mid + Math.imul(al7, bh1)) | 0;
    mid = (mid + Math.imul(ah7, bl1)) | 0;
    hi = (hi + Math.imul(ah7, bh1)) | 0;
    lo = (lo + Math.imul(al6, bl2)) | 0;
    mid = (mid + Math.imul(al6, bh2)) | 0;
    mid = (mid + Math.imul(ah6, bl2)) | 0;
    hi = (hi + Math.imul(ah6, bh2)) | 0;
    lo = (lo + Math.imul(al5, bl3)) | 0;
    mid = (mid + Math.imul(al5, bh3)) | 0;
    mid = (mid + Math.imul(ah5, bl3)) | 0;
    hi = (hi + Math.imul(ah5, bh3)) | 0;
    lo = (lo + Math.imul(al4, bl4)) | 0;
    mid = (mid + Math.imul(al4, bh4)) | 0;
    mid = (mid + Math.imul(ah4, bl4)) | 0;
    hi = (hi + Math.imul(ah4, bh4)) | 0;
    lo = (lo + Math.imul(al3, bl5)) | 0;
    mid = (mid + Math.imul(al3, bh5)) | 0;
    mid = (mid + Math.imul(ah3, bl5)) | 0;
    hi = (hi + Math.imul(ah3, bh5)) | 0;
    lo = (lo + Math.imul(al2, bl6)) | 0;
    mid = (mid + Math.imul(al2, bh6)) | 0;
    mid = (mid + Math.imul(ah2, bl6)) | 0;
    hi = (hi + Math.imul(ah2, bh6)) | 0;
    lo = (lo + Math.imul(al1, bl7)) | 0;
    mid = (mid + Math.imul(al1, bh7)) | 0;
    mid = (mid + Math.imul(ah1, bl7)) | 0;
    hi = (hi + Math.imul(ah1, bh7)) | 0;
    lo = (lo + Math.imul(al0, bl8)) | 0;
    mid = (mid + Math.imul(al0, bh8)) | 0;
    mid = (mid + Math.imul(ah0, bl8)) | 0;
    hi = (hi + Math.imul(ah0, bh8)) | 0;
    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = (mid + Math.imul(ah9, bl0)) | 0;
    hi = Math.imul(ah9, bh0);
    lo = (lo + Math.imul(al8, bl1)) | 0;
    mid = (mid + Math.imul(al8, bh1)) | 0;
    mid = (mid + Math.imul(ah8, bl1)) | 0;
    hi = (hi + Math.imul(ah8, bh1)) | 0;
    lo = (lo + Math.imul(al7, bl2)) | 0;
    mid = (mid + Math.imul(al7, bh2)) | 0;
    mid = (mid + Math.imul(ah7, bl2)) | 0;
    hi = (hi + Math.imul(ah7, bh2)) | 0;
    lo = (lo + Math.imul(al6, bl3)) | 0;
    mid = (mid + Math.imul(al6, bh3)) | 0;
    mid = (mid + Math.imul(ah6, bl3)) | 0;
    hi = (hi + Math.imul(ah6, bh3)) | 0;
    lo = (lo + Math.imul(al5, bl4)) | 0;
    mid = (mid + Math.imul(al5, bh4)) | 0;
    mid = (mid + Math.imul(ah5, bl4)) | 0;
    hi = (hi + Math.imul(ah5, bh4)) | 0;
    lo = (lo + Math.imul(al4, bl5)) | 0;
    mid = (mid + Math.imul(al4, bh5)) | 0;
    mid = (mid + Math.imul(ah4, bl5)) | 0;
    hi = (hi + Math.imul(ah4, bh5)) | 0;
    lo = (lo + Math.imul(al3, bl6)) | 0;
    mid = (mid + Math.imul(al3, bh6)) | 0;
    mid = (mid + Math.imul(ah3, bl6)) | 0;
    hi = (hi + Math.imul(ah3, bh6)) | 0;
    lo = (lo + Math.imul(al2, bl7)) | 0;
    mid = (mid + Math.imul(al2, bh7)) | 0;
    mid = (mid + Math.imul(ah2, bl7)) | 0;
    hi = (hi + Math.imul(ah2, bh7)) | 0;
    lo = (lo + Math.imul(al1, bl8)) | 0;
    mid = (mid + Math.imul(al1, bh8)) | 0;
    mid = (mid + Math.imul(ah1, bl8)) | 0;
    hi = (hi + Math.imul(ah1, bh8)) | 0;
    lo = (lo + Math.imul(al0, bl9)) | 0;
    mid = (mid + Math.imul(al0, bh9)) | 0;
    mid = (mid + Math.imul(ah0, bl9)) | 0;
    hi = (hi + Math.imul(ah0, bh9)) | 0;
    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = (mid + Math.imul(ah9, bl1)) | 0;
    hi = Math.imul(ah9, bh1);
    lo = (lo + Math.imul(al8, bl2)) | 0;
    mid = (mid + Math.imul(al8, bh2)) | 0;
    mid = (mid + Math.imul(ah8, bl2)) | 0;
    hi = (hi + Math.imul(ah8, bh2)) | 0;
    lo = (lo + Math.imul(al7, bl3)) | 0;
    mid = (mid + Math.imul(al7, bh3)) | 0;
    mid = (mid + Math.imul(ah7, bl3)) | 0;
    hi = (hi + Math.imul(ah7, bh3)) | 0;
    lo = (lo + Math.imul(al6, bl4)) | 0;
    mid = (mid + Math.imul(al6, bh4)) | 0;
    mid = (mid + Math.imul(ah6, bl4)) | 0;
    hi = (hi + Math.imul(ah6, bh4)) | 0;
    lo = (lo + Math.imul(al5, bl5)) | 0;
    mid = (mid + Math.imul(al5, bh5)) | 0;
    mid = (mid + Math.imul(ah5, bl5)) | 0;
    hi = (hi + Math.imul(ah5, bh5)) | 0;
    lo = (lo + Math.imul(al4, bl6)) | 0;
    mid = (mid + Math.imul(al4, bh6)) | 0;
    mid = (mid + Math.imul(ah4, bl6)) | 0;
    hi = (hi + Math.imul(ah4, bh6)) | 0;
    lo = (lo + Math.imul(al3, bl7)) | 0;
    mid = (mid + Math.imul(al3, bh7)) | 0;
    mid = (mid + Math.imul(ah3, bl7)) | 0;
    hi = (hi + Math.imul(ah3, bh7)) | 0;
    lo = (lo + Math.imul(al2, bl8)) | 0;
    mid = (mid + Math.imul(al2, bh8)) | 0;
    mid = (mid + Math.imul(ah2, bl8)) | 0;
    hi = (hi + Math.imul(ah2, bh8)) | 0;
    lo = (lo + Math.imul(al1, bl9)) | 0;
    mid = (mid + Math.imul(al1, bh9)) | 0;
    mid = (mid + Math.imul(ah1, bl9)) | 0;
    hi = (hi + Math.imul(ah1, bh9)) | 0;
    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = (mid + Math.imul(ah9, bl2)) | 0;
    hi = Math.imul(ah9, bh2);
    lo = (lo + Math.imul(al8, bl3)) | 0;
    mid = (mid + Math.imul(al8, bh3)) | 0;
    mid = (mid + Math.imul(ah8, bl3)) | 0;
    hi = (hi + Math.imul(ah8, bh3)) | 0;
    lo = (lo + Math.imul(al7, bl4)) | 0;
    mid = (mid + Math.imul(al7, bh4)) | 0;
    mid = (mid + Math.imul(ah7, bl4)) | 0;
    hi = (hi + Math.imul(ah7, bh4)) | 0;
    lo = (lo + Math.imul(al6, bl5)) | 0;
    mid = (mid + Math.imul(al6, bh5)) | 0;
    mid = (mid + Math.imul(ah6, bl5)) | 0;
    hi = (hi + Math.imul(ah6, bh5)) | 0;
    lo = (lo + Math.imul(al5, bl6)) | 0;
    mid = (mid + Math.imul(al5, bh6)) | 0;
    mid = (mid + Math.imul(ah5, bl6)) | 0;
    hi = (hi + Math.imul(ah5, bh6)) | 0;
    lo = (lo + Math.imul(al4, bl7)) | 0;
    mid = (mid + Math.imul(al4, bh7)) | 0;
    mid = (mid + Math.imul(ah4, bl7)) | 0;
    hi = (hi + Math.imul(ah4, bh7)) | 0;
    lo = (lo + Math.imul(al3, bl8)) | 0;
    mid = (mid + Math.imul(al3, bh8)) | 0;
    mid = (mid + Math.imul(ah3, bl8)) | 0;
    hi = (hi + Math.imul(ah3, bh8)) | 0;
    lo = (lo + Math.imul(al2, bl9)) | 0;
    mid = (mid + Math.imul(al2, bh9)) | 0;
    mid = (mid + Math.imul(ah2, bl9)) | 0;
    hi = (hi + Math.imul(ah2, bh9)) | 0;
    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = (mid + Math.imul(ah9, bl3)) | 0;
    hi = Math.imul(ah9, bh3);
    lo = (lo + Math.imul(al8, bl4)) | 0;
    mid = (mid + Math.imul(al8, bh4)) | 0;
    mid = (mid + Math.imul(ah8, bl4)) | 0;
    hi = (hi + Math.imul(ah8, bh4)) | 0;
    lo = (lo + Math.imul(al7, bl5)) | 0;
    mid = (mid + Math.imul(al7, bh5)) | 0;
    mid = (mid + Math.imul(ah7, bl5)) | 0;
    hi = (hi + Math.imul(ah7, bh5)) | 0;
    lo = (lo + Math.imul(al6, bl6)) | 0;
    mid = (mid + Math.imul(al6, bh6)) | 0;
    mid = (mid + Math.imul(ah6, bl6)) | 0;
    hi = (hi + Math.imul(ah6, bh6)) | 0;
    lo = (lo + Math.imul(al5, bl7)) | 0;
    mid = (mid + Math.imul(al5, bh7)) | 0;
    mid = (mid + Math.imul(ah5, bl7)) | 0;
    hi = (hi + Math.imul(ah5, bh7)) | 0;
    lo = (lo + Math.imul(al4, bl8)) | 0;
    mid = (mid + Math.imul(al4, bh8)) | 0;
    mid = (mid + Math.imul(ah4, bl8)) | 0;
    hi = (hi + Math.imul(ah4, bh8)) | 0;
    lo = (lo + Math.imul(al3, bl9)) | 0;
    mid = (mid + Math.imul(al3, bh9)) | 0;
    mid = (mid + Math.imul(ah3, bl9)) | 0;
    hi = (hi + Math.imul(ah3, bh9)) | 0;
    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = (mid + Math.imul(ah9, bl4)) | 0;
    hi = Math.imul(ah9, bh4);
    lo = (lo + Math.imul(al8, bl5)) | 0;
    mid = (mid + Math.imul(al8, bh5)) | 0;
    mid = (mid + Math.imul(ah8, bl5)) | 0;
    hi = (hi + Math.imul(ah8, bh5)) | 0;
    lo = (lo + Math.imul(al7, bl6)) | 0;
    mid = (mid + Math.imul(al7, bh6)) | 0;
    mid = (mid + Math.imul(ah7, bl6)) | 0;
    hi = (hi + Math.imul(ah7, bh6)) | 0;
    lo = (lo + Math.imul(al6, bl7)) | 0;
    mid = (mid + Math.imul(al6, bh7)) | 0;
    mid = (mid + Math.imul(ah6, bl7)) | 0;
    hi = (hi + Math.imul(ah6, bh7)) | 0;
    lo = (lo + Math.imul(al5, bl8)) | 0;
    mid = (mid + Math.imul(al5, bh8)) | 0;
    mid = (mid + Math.imul(ah5, bl8)) | 0;
    hi = (hi + Math.imul(ah5, bh8)) | 0;
    lo = (lo + Math.imul(al4, bl9)) | 0;
    mid = (mid + Math.imul(al4, bh9)) | 0;
    mid = (mid + Math.imul(ah4, bl9)) | 0;
    hi = (hi + Math.imul(ah4, bh9)) | 0;
    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = (mid + Math.imul(ah9, bl5)) | 0;
    hi = Math.imul(ah9, bh5);
    lo = (lo + Math.imul(al8, bl6)) | 0;
    mid = (mid + Math.imul(al8, bh6)) | 0;
    mid = (mid + Math.imul(ah8, bl6)) | 0;
    hi = (hi + Math.imul(ah8, bh6)) | 0;
    lo = (lo + Math.imul(al7, bl7)) | 0;
    mid = (mid + Math.imul(al7, bh7)) | 0;
    mid = (mid + Math.imul(ah7, bl7)) | 0;
    hi = (hi + Math.imul(ah7, bh7)) | 0;
    lo = (lo + Math.imul(al6, bl8)) | 0;
    mid = (mid + Math.imul(al6, bh8)) | 0;
    mid = (mid + Math.imul(ah6, bl8)) | 0;
    hi = (hi + Math.imul(ah6, bh8)) | 0;
    lo = (lo + Math.imul(al5, bl9)) | 0;
    mid = (mid + Math.imul(al5, bh9)) | 0;
    mid = (mid + Math.imul(ah5, bl9)) | 0;
    hi = (hi + Math.imul(ah5, bh9)) | 0;
    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = (mid + Math.imul(ah9, bl6)) | 0;
    hi = Math.imul(ah9, bh6);
    lo = (lo + Math.imul(al8, bl7)) | 0;
    mid = (mid + Math.imul(al8, bh7)) | 0;
    mid = (mid + Math.imul(ah8, bl7)) | 0;
    hi = (hi + Math.imul(ah8, bh7)) | 0;
    lo = (lo + Math.imul(al7, bl8)) | 0;
    mid = (mid + Math.imul(al7, bh8)) | 0;
    mid = (mid + Math.imul(ah7, bl8)) | 0;
    hi = (hi + Math.imul(ah7, bh8)) | 0;
    lo = (lo + Math.imul(al6, bl9)) | 0;
    mid = (mid + Math.imul(al6, bh9)) | 0;
    mid = (mid + Math.imul(ah6, bl9)) | 0;
    hi = (hi + Math.imul(ah6, bh9)) | 0;
    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = (mid + Math.imul(ah9, bl7)) | 0;
    hi = Math.imul(ah9, bh7);
    lo = (lo + Math.imul(al8, bl8)) | 0;
    mid = (mid + Math.imul(al8, bh8)) | 0;
    mid = (mid + Math.imul(ah8, bl8)) | 0;
    hi = (hi + Math.imul(ah8, bh8)) | 0;
    lo = (lo + Math.imul(al7, bl9)) | 0;
    mid = (mid + Math.imul(al7, bh9)) | 0;
    mid = (mid + Math.imul(ah7, bl9)) | 0;
    hi = (hi + Math.imul(ah7, bh9)) | 0;
    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = (mid + Math.imul(ah9, bl8)) | 0;
    hi = Math.imul(ah9, bh8);
    lo = (lo + Math.imul(al8, bl9)) | 0;
    mid = (mid + Math.imul(al8, bh9)) | 0;
    mid = (mid + Math.imul(ah8, bl9)) | 0;
    hi = (hi + Math.imul(ah8, bh9)) | 0;
    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = (mid + Math.imul(ah9, bl9)) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out.strip();
  }

  function jumboMulTo (self, num, out) {
    var fftm = new FFTM();
    return fftm.mulp(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out.strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this.strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this.strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this.strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) < num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this.strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this.strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this.strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q.strip();
    }
    a.strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  };

  // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested
  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modn = function modn (num) {
    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return acc;
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    return this.strip();
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      this._expand(s + 1);
      this.words[s] |= q;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this.strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  BN.prototype.gtn = function gtn (num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt (num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten (num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte (num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn (num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt (num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten (num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte (num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn (num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq (num) {
    return this.cmp(num) === 0;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      if (r.strip !== undefined) {
        // r is BN v4 instance
        r.strip();
      } else {
        // r is BN v5 instance
        r._strip();
      }
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    prev >>>= 22;
    input.words[i - 10] = prev;
    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
    return a.umod(this.m)._forceRed(this);
  };

  Red.prototype.neg = function neg (a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})( false || module, this);


/***/ }),

/***/ 124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

try {
  var util = __webpack_require__(669);
  /* istanbul ignore next */
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  /* istanbul ignore next */
  module.exports = __webpack_require__(544);
}


/***/ }),

/***/ 544:
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ 910:
/***/ ((module) => {

module.exports = assert;

function assert(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
}

assert.equal = function assertEqual(l, r, msg) {
  if (l != r)
    throw new Error(msg || ('Assertion failed: ' + l + ' != ' + r));
};


/***/ }),

/***/ 946:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*! OpenPGP.js v5.0.0-2 - 2021-04-27 - this is LGPL licensed code, see LICENSE/our website https://openpgpjs.org/ for more information. */
const e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.defineProperty(exports, "__esModule", ({value:!0}));var t=__webpack_require__(293),r=__webpack_require__(413),i=__webpack_require__(417),n=__webpack_require__(761),a=__webpack_require__(87),s=__webpack_require__(669),o=__webpack_require__(435);function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=/*#__PURE__*/c(t),h=/*#__PURE__*/c(r),d=/*#__PURE__*/c(i),f=/*#__PURE__*/c(n),l=/*#__PURE__*/c(a),p=/*#__PURE__*/c(s),y=/*#__PURE__*/c(o);const b=Symbol("doneWritingPromise"),m=Symbol("doneWritingResolve"),g=Symbol("doneWritingReject");class w extends Array{constructor(){super(),this[b]=new Promise((e,t)=>{this[m]=e,this[g]=t}),this[b].catch(()=>{})}}function v(e){return w.prototype.isPrototypeOf(e)}function _(e){if(!v(e)){const t=e.getWriter(),r=t.releaseLock;return t.releaseLock=()=>{t.closed.catch((function(){})),r.call(t)},t}this.stream=e}w.prototype.getReader=function(){return{read:async()=>(await this[b],this.length?{value:this.shift(),done:!1}:{value:void 0,done:!0})}},_.prototype.write=async function(e){this.stream.push(e)},_.prototype.close=async function(){this.stream[m]()},_.prototype.abort=async function(e){return this.stream[g](e),e},_.prototype.releaseLock=function(){};const k="object"==typeof e.process&&"object"==typeof e.process.versions,A=k&&h.default.Readable;function S(t){return e.ReadableStream&&e.ReadableStream.prototype.isPrototypeOf(t)?"web":T&&T.prototype.isPrototypeOf(t)?"ponyfill":A&&A.prototype.isPrototypeOf(t)?"node":!!v(t)&&"array"}function E(e){return Uint8Array.prototype.isPrototypeOf(e)}function x(e){if(1===e.length)return e[0];let t=0;for(let r=0;r<e.length;r++){if(!E(e[r]))throw Error("concatUint8Array: Data must be in the form of a Uint8Array");t+=e[r].length}const r=new Uint8Array(t);let i=0;return e.forEach((function(e){r.set(e,i),i+=e.length})),r}const P=k&&u.default.Buffer,M=k&&h.default.Readable;let C,K;if(M){C=function(e){let t=!1;return new T({start(r){e.pause(),e.on("data",i=>{t||(P.isBuffer(i)&&(i=new Uint8Array(i.buffer,i.byteOffset,i.byteLength)),r.enqueue(i),e.pause())}),e.on("end",()=>{t||r.close()}),e.on("error",e=>r.error(e))},pull(){e.resume()},cancel(r){t=!0,e.destroy(r)}})};class e extends M{constructor(e,t){super(t),this._reader=H(e)}async _read(e){try{for(;;){const{done:e,value:t}=await this._reader.read();if(e){this.push(null);break}if(!this.push(t)||this._cancelling){this._reading=!1;break}}}catch(e){this.emit("error",e)}}_destroy(e){this._reader.cancel(e)}}K=function(t,r){return new e(t,r)}}const D=new WeakSet,R=Symbol("externalBuffer");function I(e){if(this.stream=e,e[R]&&(this[R]=e[R].slice()),v(e)){const t=e.getReader();return this._read=t.read.bind(t),this._releaseLock=()=>{},void(this._cancel=()=>{})}let t=S(e);if("node"===t&&(e=C(e)),t){const t=e.getReader();return this._read=t.read.bind(t),this._releaseLock=()=>{t.closed.catch((function(){})),t.releaseLock()},void(this._cancel=t.cancel.bind(t))}let r=!1;this._read=async()=>r||D.has(e)?{value:void 0,done:!0}:(r=!0,{value:e,done:!1}),this._releaseLock=()=>{if(r)try{D.add(e)}catch(e){}}}I.prototype.read=async function(){if(this[R]&&this[R].length){return{done:!1,value:this[R].shift()}}return this._read()},I.prototype.releaseLock=function(){this[R]&&(this.stream[R]=this[R]),this._releaseLock()},I.prototype.cancel=function(e){return this._cancel(e)},I.prototype.readLine=async function(){let e,t=[];for(;!e;){let{done:r,value:i}=await this.read();if(i+="",r)return t.length?j(t):void 0;const n=i.indexOf("\n")+1;n&&(e=j(t.concat(i.substr(0,n))),t=[]),n!==i.length&&t.push(i.substr(n))}return this.unshift(...t),e},I.prototype.readByte=async function(){const{done:e,value:t}=await this.read();if(e)return;const r=t[0];return this.unshift(re(t,1)),r},I.prototype.readBytes=async function(e){const t=[];let r=0;for(;;){const{done:i,value:n}=await this.read();if(i)return t.length?j(t):void 0;if(t.push(n),r+=n.length,r>=e){const r=j(t);return this.unshift(re(r,e)),re(r,0,e)}}},I.prototype.peekBytes=async function(e){const t=await this.readBytes(e);return this.unshift(t),t},I.prototype.unshift=function(...e){this[R]||(this[R]=[]),1===e.length&&E(e[0])&&this[R].length&&e[0].length&&this[R][0].byteOffset>=e[0].length?this[R][0]=new Uint8Array(this[R][0].buffer,this[R][0].byteOffset-e[0].length,this[R][0].byteLength+e[0].length):this[R].unshift(...e.filter(e=>e&&e.length))},I.prototype.readToEnd=async function(e=j){const t=[];for(;;){const{done:e,value:r}=await this.read();if(e)break;t.push(r)}return e(t)};let U,B,{ReadableStream:T,WritableStream:z,TransformStream:q}=e;async function F(){if(q)return;const[t,r]=await Promise.all([Promise.resolve().then((function(){return bd})),Promise.resolve().then((function(){return zd}))]);({ReadableStream:T,WritableStream:z,TransformStream:q}=t);const{createReadableStreamWrapper:i}=r;e.ReadableStream&&T!==e.ReadableStream&&(U=i(T),B=i(e.ReadableStream))}const O=k&&u.default.Buffer;function N(e){let t=S(e);return"node"===t?C(e):"web"===t&&U?U(e):t?e:new T({start(t){t.enqueue(e),t.close()}})}function L(e){if(S(e))return e;const t=new w;return(async()=>{const r=G(t);await r.write(e),await r.close()})(),t}function j(e){return e.some(e=>S(e)&&!v(e))?W(e):e.some(e=>v(e))?function(e){const t=new w;let r=Promise.resolve();return e.forEach((i,n)=>(r=r.then(()=>V(i,t,{preventClose:n!==e.length-1})),r)),t}(e):"string"==typeof e[0]?e.join(""):O&&O.isBuffer(e[0])?O.concat(e):x(e)}function W(e){e=e.map(N);const t=Y((async function(e){await Promise.all(i.map(t=>ne(t,e)))}));let r=Promise.resolve();const i=e.map((i,n)=>X(i,(i,a)=>(r=r.then(()=>V(i,t.writable,{preventClose:n!==e.length-1})),r)));return t.readable}function H(e){return new I(e)}function G(e){return new _(e)}async function V(e,t,{preventClose:r=!1,preventAbort:i=!1,preventCancel:n=!1}={}){if(S(e)&&!v(e)){e=N(e);try{if(e[R]){const r=G(t);for(let t=0;t<e[R].length;t++)await r.ready,await r.write(e[R][t]);r.releaseLock()}await e.pipeTo(t,{preventClose:r,preventAbort:i,preventCancel:n})}catch(e){}return}const a=H(e=L(e)),s=G(t);try{for(;;){await s.ready;const{done:e,value:t}=await a.read();if(e){r||await s.close();break}await s.write(t)}}catch(e){i||await s.abort(e)}finally{a.releaseLock(),s.releaseLock()}}function Z(e,t){const r=new q(t);return V(e,r.writable),r.readable}function Y(e){let t,r,i=!1;return{readable:new T({start(e){r=e},pull(){t?t():i=!0},cancel:e},{highWaterMark:0}),writable:new z({write:async function(e){r.enqueue(e),i?i=!1:(await new Promise(e=>{t=e}),t=null)},close:r.close.bind(r),abort:r.error.bind(r)})}}function $(e,t=(()=>{}),r=(()=>{})){if(v(e)){const i=new w;return(async()=>{const n=await ie(e),a=t(n),s=r();let o;o=void 0!==a&&void 0!==s?j([a,s]):void 0!==a?a:s;const c=G(i);await c.write(o),await c.close()})(),i}if(S(e))return Z(e,{async transform(e,r){try{const i=await t(e);void 0!==i&&r.enqueue(i)}catch(e){r.error(e)}},async flush(e){try{const t=await r();void 0!==t&&e.enqueue(t)}catch(t){e.error(t)}}});const i=t(e),n=r();return void 0!==i&&void 0!==n?j([i,n]):void 0!==i?i:n}function X(e,t){if(S(e)&&!v(e)){let r;const i=new q({start(e){r=e}}),n=V(e,i.writable),a=Y((async function(){r.error(Error("Readable side was canceled.")),await n,await new Promise(setTimeout)}));return t(i.readable,a.writable),a.readable}e=L(e);const r=new w;return t(e,r),r}function J(e,t){let r;const i=X(e,(e,n)=>{const a=H(e);a.remainder=()=>(a.releaseLock(),V(e,n),i),r=t(a)});return r}function Q(e){if(S(e)){const t=function(e){if(v(e)){const t=new w,r=new w;return(async()=>{const i=H(e),n=G(t),a=G(r);try{for(;;){await n.ready,await a.ready;const{done:e,value:t}=await i.read();if(e){await n.close(),await a.close();break}await n.write(t),await a.write(t)}}catch(e){await n.abort(e),await a.abort(e)}finally{i.releaseLock(),n.releaseLock(),a.releaseLock()}})(),[t,r]}if(S(e)){const t=N(e).tee();return t[0][R]=t[1][R]=e[R],t}return[re(e),re(e)]}(e);return te(e,t[0]),t[1]}return re(e)}function ee(e){return v(e)?Q(e):S(e)?new T({start(t){const r=X(e,async(e,r)=>{const i=H(e),n=G(r);try{for(;;){await n.ready;const{done:e,value:r}=await i.read();if(e){try{t.close()}catch(e){}return void await n.close()}try{t.enqueue(r)}catch(e){}await n.write(r)}}catch(e){t.error(e),await n.abort(e)}});te(e,r)}}):re(e)}function te(e,t){Object.entries(Object.getOwnPropertyDescriptors(e.constructor.prototype)).forEach(([r,i])=>{"constructor"!==r&&(i.value?i.value=i.value.bind(t):i.get=i.get.bind(t),Object.defineProperty(e,r,i))})}function re(e,t=0,r=1/0){if(v(e))throw Error("Not implemented");if(S(e)){if(t>=0&&r>=0){let i=0;return Z(e,{transform(e,n){i<r?(i+e.length>=t&&n.enqueue(re(e,Math.max(t-i,0),r-i)),i+=e.length):n.terminate()}})}if(t<0&&(r<0||r===1/0)){let i=[];return $(e,e=>{e.length>=-t?i=[e]:i.push(e)},()=>re(j(i),t,r))}if(0===t&&r<0){let i;return $(e,e=>{const n=i?j([i,e]):e;if(n.length>=-r)return i=re(n,r),re(n,t,r);i=n})}return console.warn(`stream.slice(input, ${t}, ${r}) not implemented efficiently.`),ae(async()=>re(await ie(e),t,r))}return e[R]&&(e=j(e[R].concat([e]))),!E(e)||O&&O.isBuffer(e)?e.slice(t,r):(r===1/0&&(r=e.length),e.subarray(t,r))}async function ie(e,t=j){return S(e)?H(e).readToEnd(t):e}async function ne(e,t){if(S(e)){if(e.cancel)return e.cancel(t);if(e.destroy)return e.destroy(t),await new Promise(setTimeout),t}}function ae(e){const t=new w;return(async()=>{const r=G(t);try{await r.write(await e()),await r.close()}catch(e){await r.abort(e)}})(),t}var se=/*#__PURE__*/Object.freeze({__proto__:null,get ReadableStream(){return T},get WritableStream(){return z},get TransformStream(){return q},ArrayStream:w,loadStreamsPonyfill:F,isStream:S,isArrayStream:v,isUint8Array:E,toStream:N,get toPonyfillReadable(){return U},get toNativeReadable(){return B},concatUint8Array:x,concatStream:W,concat:j,getReader:H,getWriter:G,pipe:V,transformRaw:Z,transform:$,transformPair:X,parse:J,clone:Q,passiveClone:ee,slice:re,readToEnd:ie,cancel:ne,fromAsync:ae,get nodeToWeb(){return C},get webToNode(){return K}});class oe{constructor(e){if(void 0===e)throw Error("Invalid BigInteger input");if(e instanceof Uint8Array){const t=e,r=Array(t.length);for(let e=0;e<t.length;e++){const i=t[e].toString(16);r[e]=t[e]<=15?"0"+i:i}this.value=BigInt("0x0"+r.join(""))}else this.value=BigInt(e)}clone(){return new oe(this.value)}iinc(){return this.value++,this}inc(){return this.clone().iinc()}idec(){return this.value--,this}dec(){return this.clone().idec()}iadd(e){return this.value+=e.value,this}add(e){return this.clone().iadd(e)}isub(e){return this.value-=e.value,this}sub(e){return this.clone().isub(e)}imul(e){return this.value*=e.value,this}mul(e){return this.clone().imul(e)}imod(e){return this.value%=e.value,this.isNegative()&&this.iadd(e),this}mod(e){return this.clone().imod(e)}modExp(e,t){if(t.isZero())throw Error("Modulo cannot be zero");if(t.isOne())return new oe(0);if(e.isNegative())throw Error("Unsopported negative exponent");let r=e.value,i=this.value;i%=t.value;let n=BigInt(1);for(;r>BigInt(0);){const e=r&BigInt(1);r>>=BigInt(1);const a=n*i%t.value;n=e?a:n,i=i*i%t.value}return new oe(n)}modInv(e){const{gcd:t,x:r}=this._egcd(e);if(!t.isOne())throw Error("Inverse does not exist");return r.add(e).mod(e)}_egcd(e){let t=BigInt(0),r=BigInt(1),i=BigInt(1),n=BigInt(0),a=this.value;for(e=e.value;e!==BigInt(0);){const s=a/e;let o=t;t=i-s*t,i=o,o=r,r=n-s*r,n=o,o=e,e=a%e,a=o}return{x:new oe(i),y:new oe(n),gcd:new oe(a)}}gcd(e){let t=this.value;for(e=e.value;e!==BigInt(0);){const r=e;e=t%e,t=r}return new oe(t)}ileftShift(e){return this.value<<=e.value,this}leftShift(e){return this.clone().ileftShift(e)}irightShift(e){return this.value>>=e.value,this}rightShift(e){return this.clone().irightShift(e)}equal(e){return this.value===e.value}lt(e){return this.value<e.value}lte(e){return this.value<=e.value}gt(e){return this.value>e.value}gte(e){return this.value>=e.value}isZero(){return this.value===BigInt(0)}isOne(){return this.value===BigInt(1)}isNegative(){return this.value<BigInt(0)}isEven(){return!(this.value&BigInt(1))}abs(){const e=this.clone();return this.isNegative()&&(e.value=-e.value),e}toString(){return this.value.toString()}toNumber(){const e=Number(this.value);if(e>Number.MAX_SAFE_INTEGER)throw Error("Number can only safely store up to 53 bits");return e}getBit(e){return(this.value>>BigInt(e)&BigInt(1))===BigInt(0)?0:1}bitLength(){const e=new oe(0),t=new oe(1),r=new oe(-1),i=this.isNegative()?r:e;let n=1;const a=this.clone();for(;!a.irightShift(t).equal(i);)n++;return n}byteLength(){const e=new oe(0),t=new oe(-1),r=this.isNegative()?t:e,i=new oe(8);let n=1;const a=this.clone();for(;!a.irightShift(i).equal(r);)n++;return n}toUint8Array(e="be",t){let r=this.value.toString(16);r.length%2==1&&(r="0"+r);const i=r.length/2,n=new Uint8Array(t||i),a=t?t-i:0;let s=0;for(;s<i;)n[s+a]=parseInt(r.slice(2*s,2*s+2),16),s++;return"be"!==e&&n.reverse(),n}}const ce=e.process&&"development"===e.process.env.NODE_ENV,ue={isString:function(e){return"string"==typeof e||String.prototype.isPrototypeOf(e)},isArray:function(e){return Array.prototype.isPrototypeOf(e)},isUint8Array:E,isStream:S,readNumber:function(e){let t=0;for(let r=0;r<e.length;r++)t+=256**r*e[e.length-1-r];return t},writeNumber:function(e,t){const r=new Uint8Array(t);for(let i=0;i<t;i++)r[i]=e>>8*(t-i-1)&255;return r},readDate:function(e){const t=ue.readNumber(e);return new Date(1e3*t)},writeDate:function(e){const t=Math.floor(e.getTime()/1e3);return ue.writeNumber(t,4)},normalizeDate:function(e=Date.now()){return null===e||e===1/0?e:new Date(1e3*Math.floor(+e/1e3))},readMPI:function(e){const t=(e[0]<<8|e[1])+7>>>3;return e.subarray(2,2+t)},leftPad(e,t){const r=new Uint8Array(t),i=t-e.length;return r.set(e,i),r},uint8ArrayToMPI:function(e){const t=ue.uint8ArrayBitLength(e);if(0===t)throw Error("Zero MPI");const r=e.subarray(e.length-Math.ceil(t/8)),i=Uint8Array.from([(65280&t)>>8,255&t]);return ue.concatUint8Array([i,r])},uint8ArrayBitLength:function(e){let t;for(t=0;t<e.length&&0===e[t];t++);if(t===e.length)return 0;const r=e.subarray(t);return 8*(r.length-1)+ue.nbits(r[0])},hexToUint8Array:function(e){const t=new Uint8Array(e.length>>1);for(let r=0;r<e.length>>1;r++)t[r]=parseInt(e.substr(r<<1,2),16);return t},uint8ArrayToHex:function(e){const t=[],r=e.length;let i,n=0;for(;n<r;){for(i=e[n++].toString(16);i.length<2;)i="0"+i;t.push(""+i)}return t.join("")},stringToUint8Array:function(e){return $(e,e=>{if(!ue.isString(e))throw Error("stringToUint8Array: Data must be in the form of a string");const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t})},uint8ArrayToString:function(e){const t=[],r=(e=new Uint8Array(e)).length;for(let i=0;i<r;i+=16384)t.push(String.fromCharCode.apply(String,e.subarray(i,i+16384<r?i+16384:r)));return t.join("")},encodeUTF8:function(e){const t=new TextEncoder("utf-8");function r(e,r=!1){return t.encode(e,{stream:!r})}return $(e,r,()=>r("",!0))},decodeUTF8:function(e){const t=new TextDecoder("utf-8");function r(e,r=!1){return t.decode(e,{stream:!r})}return $(e,r,()=>r(new Uint8Array,!0))},concat:j,concatUint8Array:x,equalsUint8Array:function(e,t){if(!ue.isUint8Array(e)||!ue.isUint8Array(t))throw Error("Data must be in the form of a Uint8Array");if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0},writeChecksum:function(e){let t=0;for(let r=0;r<e.length;r++)t=t+e[r]&65535;return ue.writeNumber(t,2)},printDebug:function(e){ce&&console.log(e)},printDebugError:function(e){ce&&console.error(e)},nbits:function(e){let t=1,r=e>>>16;return 0!==r&&(e=r,t+=16),r=e>>8,0!==r&&(e=r,t+=8),r=e>>4,0!==r&&(e=r,t+=4),r=e>>2,0!==r&&(e=r,t+=2),r=e>>1,0!==r&&(e=r,t+=1),t},double:function(e){const t=new Uint8Array(e.length),r=e.length-1;for(let i=0;i<r;i++)t[i]=e[i]<<1^e[i+1]>>7;return t[r]=e[r]<<1^135*(e[0]>>7),t},shiftRight:function(e,t){if(t)for(let r=e.length-1;r>=0;r--)e[r]>>=t,r>0&&(e[r]|=e[r-1]<<8-t);return e},getWebCrypto:function(){return void 0!==e&&e.crypto&&e.crypto.subtle},detectNode:function(){return"object"==typeof e.process&&"object"==typeof e.process.versions},detectBigInt:()=>"undefined"!=typeof BigInt,getBigInteger:async function(){if(ue.detectBigInt())return oe;{const{default:e}=await Promise.resolve().then((function(){return Ld}));return e}},getNodeCrypto:function(){return d.default},getNodeZlib:function(){return f.default},getNodeBuffer:function(){return(u.default||{}).Buffer},getHardwareConcurrency:function(){if(ue.detectNode()){return l.default.cpus().length}return navigator.hardwareConcurrency||1},isEmailAddress:function(e){if(!ue.isString(e))return!1;return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+([a-zA-Z]{2,}|xn--[a-zA-Z\-0-9]+)))$/.test(e)},canonicalizeEOL:function(e){let t=!1;return $(e,e=>{let r;t&&(e=ue.concatUint8Array([new Uint8Array([13]),e])),13===e[e.length-1]?(t=!0,e=e.subarray(0,-1)):t=!1;const i=[];for(let t=0;r=e.indexOf(10,t)+1,r;t=r)13!==e[r-2]&&i.push(r);if(!i.length)return e;const n=new Uint8Array(e.length+i.length);let a=0;for(let t=0;t<i.length;t++){const r=e.subarray(i[t-1]||0,i[t]);n.set(r,a),a+=r.length,n[a-1]=13,n[a]=10,a++}return n.set(e.subarray(i[i.length-1]||0),a),n},()=>t?new Uint8Array([13]):void 0)},nativeEOL:function(e){let t=!1;return $(e,e=>{let r;13===(e=t&&10!==e[0]?ue.concatUint8Array([new Uint8Array([13]),e]):new Uint8Array(e))[e.length-1]?(t=!0,e=e.subarray(0,-1)):t=!1;let i=0;for(let t=0;t!==e.length;t=r){r=e.indexOf(13,t)+1,r||(r=e.length);const n=r-(10===e[r]?1:0);t&&e.copyWithin(i,t,n),i+=n-t}return e.subarray(0,i)},()=>t?new Uint8Array([13]):void 0)},removeTrailingSpaces:function(e){return e.split("\n").map(e=>{let t=e.length-1;for(;t>=0&&(" "===e[t]||"\t"===e[t]);t--);return e.substr(0,t+1)}).join("\n")},wrapError:function(e,t){if(!t)return Error(e);try{t.message=e+": "+t.message}catch(e){}return t},constructAllowedPackets:function(e){const t={};return e.forEach(e=>{if(!e.tag)throw Error("Invalid input: expected a packet class");t[e.tag]=e}),t},anyPromise:function(e){return new Promise(async(t,r)=>{let i;await Promise.all(e.map(async e=>{try{t(await e)}catch(e){i=e}})),r(i)})}},he=ue.getNodeBuffer();let de,fe;function le(e){let t=new Uint8Array;return $(e,e=>{t=ue.concatUint8Array([t,e]);const r=[],i=Math.floor(t.length/45),n=45*i,a=de(t.subarray(0,n));for(let e=0;e<i;e++)r.push(a.substr(60*e,60)),r.push("\n");return t=t.subarray(n),r.join("")},()=>t.length?de(t)+"\n":"")}function pe(e){let t="";return $(e,e=>{t+=e;let r=0;const i=[" ","\t","\r","\n"];for(let e=0;e<i.length;e++){const n=i[e];for(let e=t.indexOf(n);-1!==e;e=t.indexOf(n,e+1))r++}let n=t.length;for(;n>0&&(n-r)%4!=0;n--)i.includes(t[n])&&r--;const a=fe(t.substr(0,n));return t=t.substr(n),a},()=>fe(t))}function ye(e){return pe(e.replace(/-/g,"+").replace(/_/g,"/"))}function be(e,t){let r=le(e).replace(/[\r\n]/g,"");return t&&(r=r.replace(/[+]/g,"-").replace(/[/]/g,"_").replace(/[=]/g,"")),r}he?(de=e=>he.from(e).toString("base64"),fe=e=>{const t=he.from(e,"base64");return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}):(de=e=>btoa(ue.uint8ArrayToString(e)),fe=e=>ue.stringToUint8Array(atob(e)));const me=Symbol("byValue");var ge={curve:{p256:"p256","P-256":"p256",secp256r1:"p256",prime256v1:"p256","1.2.840.10045.3.1.7":"p256","2a8648ce3d030107":"p256","2A8648CE3D030107":"p256",p384:"p384","P-384":"p384",secp384r1:"p384","1.3.132.0.34":"p384","2b81040022":"p384","2B81040022":"p384",p521:"p521","P-521":"p521",secp521r1:"p521","1.3.132.0.35":"p521","2b81040023":"p521","2B81040023":"p521",secp256k1:"secp256k1","1.3.132.0.10":"secp256k1","2b8104000a":"secp256k1","2B8104000A":"secp256k1",ED25519:"ed25519",ed25519:"ed25519",Ed25519:"ed25519","1.3.6.1.4.1.11591.15.1":"ed25519","2b06010401da470f01":"ed25519","2B06010401DA470F01":"ed25519",X25519:"curve25519",cv25519:"curve25519",curve25519:"curve25519",Curve25519:"curve25519","1.3.6.1.4.1.3029.1.5.1":"curve25519","2b060104019755010501":"curve25519","2B060104019755010501":"curve25519",brainpoolP256r1:"brainpoolP256r1","1.3.36.3.3.2.8.1.1.7":"brainpoolP256r1","2b2403030208010107":"brainpoolP256r1","2B2403030208010107":"brainpoolP256r1",brainpoolP384r1:"brainpoolP384r1","1.3.36.3.3.2.8.1.1.11":"brainpoolP384r1","2b240303020801010b":"brainpoolP384r1","2B240303020801010B":"brainpoolP384r1",brainpoolP512r1:"brainpoolP512r1","1.3.36.3.3.2.8.1.1.13":"brainpoolP512r1","2b240303020801010d":"brainpoolP512r1","2B240303020801010D":"brainpoolP512r1"},s2k:{simple:0,salted:1,iterated:3,gnu:101},publicKey:{rsaEncryptSign:1,rsaEncrypt:2,rsaSign:3,elgamal:16,dsa:17,ecdh:18,ecdsa:19,eddsa:22,aedh:23,aedsa:24},symmetric:{plaintext:0,idea:1,tripledes:2,cast5:3,blowfish:4,aes128:7,aes192:8,aes256:9,twofish:10},compression:{uncompressed:0,zip:1,zlib:2,bzip2:3},hash:{md5:1,sha1:2,ripemd:3,sha256:8,sha384:9,sha512:10,sha224:11},webHash:{"SHA-1":2,"SHA-256":8,"SHA-384":9,"SHA-512":10},aead:{eax:1,ocb:2,experimentalGCM:100},packet:{publicKeyEncryptedSessionKey:1,signature:2,symEncryptedSessionKey:3,onePassSignature:4,secretKey:5,publicKey:6,secretSubkey:7,compressedData:8,symmetricallyEncryptedData:9,marker:10,literalData:11,trust:12,userID:13,publicSubkey:14,userAttribute:17,symEncryptedIntegrityProtectedData:18,modificationDetectionCode:19,aeadEncryptedData:20},literal:{binary:98,text:116,utf8:117,mime:109},signature:{binary:0,text:1,standalone:2,certGeneric:16,certPersona:17,certCasual:18,certPositive:19,certRevocation:48,subkeyBinding:24,keyBinding:25,key:31,keyRevocation:32,subkeyRevocation:40,timestamp:64,thirdParty:80},signatureSubpacket:{signatureCreationTime:2,signatureExpirationTime:3,exportableCertification:4,trustSignature:5,regularExpression:6,revocable:7,keyExpirationTime:9,placeholderBackwardsCompatibility:10,preferredSymmetricAlgorithms:11,revocationKey:12,issuer:16,notationData:20,preferredHashAlgorithms:21,preferredCompressionAlgorithms:22,keyServerPreferences:23,preferredKeyServer:24,primaryUserID:25,policyURI:26,keyFlags:27,signersUserID:28,reasonForRevocation:29,features:30,signatureTarget:31,embeddedSignature:32,issuerFingerprint:33,preferredAEADAlgorithms:34},keyFlags:{certifyKeys:1,signData:2,encryptCommunication:4,encryptStorage:8,splitPrivateKey:16,authentication:32,sharedPrivateKey:128},armor:{multipartSection:0,multipartLast:1,signed:2,message:3,publicKey:4,privateKey:5,signature:6},reasonForRevocation:{noReason:0,keySuperseded:1,keyCompromised:2,keyRetired:3,userIDInvalid:32},features:{modificationDetection:1,aead:2,v5Keys:4},write:function(e,t){if("number"==typeof t&&(t=this.read(e,t)),void 0!==e[t])return e[t];throw Error("Invalid enum value.")},read:function(e,t){if(e[me]||(e[me]=[],Object.entries(e).forEach(([t,r])=>{e[me][r]=t})),void 0!==e[me][t])return e[me][t];throw Error("Invalid enum value.")}},we={preferredHashAlgorithm:ge.hash.sha256,preferredSymmetricAlgorithm:ge.symmetric.aes256,preferredCompressionAlgorithm:ge.compression.uncompressed,deflateLevel:6,aeadProtect:!1,preferredAEADAlgorithm:ge.aead.eax,aeadChunkSizeByte:12,v5Keys:!1,s2kIterationCountByte:224,allowUnauthenticatedMessages:!1,allowUnauthenticatedStream:!1,checksumRequired:!1,minRSABits:2048,passwordCollisionCheck:!1,revocationsExpire:!1,allowInsecureDecryptionWithSigningKeys:!1,minBytesForWebCrypto:1e3,tolerant:!0,showVersion:!1,showComment:!1,versionString:"OpenPGP.js 5.0.0-2",commentString:"https://openpgpjs.org",maxUserIDLength:5120,knownNotations:["preferred-email-encoding@pgp.com","pka-address@gnupg.org"],useIndutnyElliptic:!0,rejectHashAlgorithms:new Set([ge.hash.md5,ge.hash.ripemd]),rejectMessageHashAlgorithms:new Set([ge.hash.md5,ge.hash.ripemd,ge.hash.sha1]),rejectPublicKeyAlgorithms:new Set([ge.publicKey.elgamal,ge.publicKey.dsa])};function ve(e){const t=e.match(/^-----BEGIN PGP (MESSAGE, PART \d+\/\d+|MESSAGE, PART \d+|SIGNED MESSAGE|MESSAGE|PUBLIC KEY BLOCK|PRIVATE KEY BLOCK|SIGNATURE)-----$/m);if(!t)throw Error("Unknown ASCII armor type");return/MESSAGE, PART \d+\/\d+/.test(t[1])?ge.armor.multipartSection:/MESSAGE, PART \d+/.test(t[1])?ge.armor.multipartLast:/SIGNED MESSAGE/.test(t[1])?ge.armor.signed:/MESSAGE/.test(t[1])?ge.armor.message:/PUBLIC KEY BLOCK/.test(t[1])?ge.armor.publicKey:/PRIVATE KEY BLOCK/.test(t[1])?ge.armor.privateKey:/SIGNATURE/.test(t[1])?ge.armor.signature:void 0}function _e(e,t){let r="";return t.showVersion&&(r+="Version: "+t.versionString+"\n"),t.showComment&&(r+="Comment: "+t.commentString+"\n"),e&&(r+="Comment: "+e+"\n"),r+="\n",r}function ke(e){return le(function(e){let t=13501623;return $(e,e=>{const r=Se?Math.floor(e.length/4):0,i=new Uint32Array(e.buffer,e.byteOffset,r);for(let e=0;e<r;e++)t^=i[e],t=Ae[0][t>>24&255]^Ae[1][t>>16&255]^Ae[2][t>>8&255]^Ae[3][t>>0&255];for(let i=4*r;i<e.length;i++)t=t>>8^Ae[0][255&t^e[i]]},()=>new Uint8Array([t,t>>8,t>>16]))}(e))}const Ae=[Array(255),Array(255),Array(255),Array(255)];for(let e=0;e<=255;e++){let t=e<<16;for(let e=0;e<8;e++)t=t<<1^(0!=(8388608&t)?8801531:0);Ae[0][e]=(16711680&t)>>16|65280&t|(255&t)<<16}for(let e=0;e<=255;e++)Ae[1][e]=Ae[0][e]>>8^Ae[0][255&Ae[0][e]];for(let e=0;e<=255;e++)Ae[2][e]=Ae[1][e]>>8^Ae[0][255&Ae[1][e]];for(let e=0;e<=255;e++)Ae[3][e]=Ae[2][e]>>8^Ae[0][255&Ae[2][e]];const Se=function(){const e=new ArrayBuffer(2);return new DataView(e).setInt16(0,255,!0),255===new Int16Array(e)[0]}();function Ee(e){for(let t=0;t<e.length;t++){if(!/^([^\s:]|[^\s:][^:]*[^\s:]): .+$/.test(e[t]))throw Error("Improperly formatted armor header: "+e[t]);/^(Version|Comment|MessageID|Hash|Charset): .+$/.test(e[t])||ue.printDebugError(Error("Unknown header: "+e[t]))}}function xe(e){let t=e,r="";const i=e.lastIndexOf("=");return i>=0&&i!==e.length-1&&(t=e.slice(0,i),r=e.slice(i+1).substr(0,4)),{body:t,checksum:r}}function Pe(e,t=we){return new Promise(async(r,i)=>{try{const n=/^-----[^-]+-----$/m,a=/^[ \f\r\t\u00a0\u2000-\u200a\u202f\u205f\u3000]*$/;let s;const o=[];let c,u,h,d=o,f=[],l=pe(X(e,async(e,t)=>{const p=H(e);try{for(;;){let e=await p.readLine();if(void 0===e)throw Error("Misformed armored text");if(e=ue.removeTrailingSpaces(e.replace(/[\r\n]/g,"")),s)if(c)u||2!==s||(n.test(e)?(f=f.join("\r\n"),u=!0,Ee(d),d=[],c=!1):f.push(e.replace(/^- /,"")));else if(n.test(e)&&i(Error("Mandatory blank line missing between armor headers and armor data")),a.test(e)){if(Ee(d),c=!0,u||2!==s){r({text:f,data:l,headers:o,type:s});break}}else d.push(e);else n.test(e)&&(s=ve(e))}}catch(e){return void i(e)}const y=G(t);try{for(;;){await y.ready;const{done:e,value:t}=await p.read();if(e)throw Error("Misformed armored text");const r=t+"";if(-1!==r.indexOf("=")||-1!==r.indexOf("-")){let e=await p.readToEnd();e.length||(e=""),e=r+e,e=ue.removeTrailingSpaces(e.replace(/\r/g,""));const t=e.split(n);if(1===t.length)throw Error("Misformed armored text");const i=xe(t[0].slice(0,-1));h=i.checksum,await y.write(i.body);break}await y.write(r)}await y.ready,await y.close()}catch(e){await y.abort(e)}}));l=X(l,async(e,r)=>{const i=ie(ke(ee(e)));i.catch(()=>{}),await V(e,r,{preventClose:!0});const n=G(r);try{const e=(await i).replace("\n","");if(h!==e&&(h||t.checksumRequired))throw Error("Ascii armor integrity check on message failed: '"+h+"' should be '"+e+"'");await n.ready,await n.close()}catch(e){await n.abort(e)}})}catch(e){i(e)}})}function Me(e,t,r,i,n,a=we){let s,o;e===ge.armor.signed&&(s=t.text,o=t.hash,t=t.data);const c=ee(t),u=[];switch(e){case ge.armor.multipartSection:u.push("-----BEGIN PGP MESSAGE, PART "+r+"/"+i+"-----\n"),u.push(_e(n,a)),u.push(le(t)),u.push("=",ke(c)),u.push("-----END PGP MESSAGE, PART "+r+"/"+i+"-----\n");break;case ge.armor.multipartLast:u.push("-----BEGIN PGP MESSAGE, PART "+r+"-----\n"),u.push(_e(n,a)),u.push(le(t)),u.push("=",ke(c)),u.push("-----END PGP MESSAGE, PART "+r+"-----\n");break;case ge.armor.signed:u.push("\n-----BEGIN PGP SIGNED MESSAGE-----\n"),u.push("Hash: "+o+"\n\n"),u.push(s.replace(/^-/gm,"- -")),u.push("\n-----BEGIN PGP SIGNATURE-----\n"),u.push(_e(n,a)),u.push(le(t)),u.push("=",ke(c)),u.push("-----END PGP SIGNATURE-----\n");break;case ge.armor.message:u.push("-----BEGIN PGP MESSAGE-----\n"),u.push(_e(n,a)),u.push(le(t)),u.push("=",ke(c)),u.push("-----END PGP MESSAGE-----\n");break;case ge.armor.publicKey:u.push("-----BEGIN PGP PUBLIC KEY BLOCK-----\n"),u.push(_e(n,a)),u.push(le(t)),u.push("=",ke(c)),u.push("-----END PGP PUBLIC KEY BLOCK-----\n");break;case ge.armor.privateKey:u.push("-----BEGIN PGP PRIVATE KEY BLOCK-----\n"),u.push(_e(n,a)),u.push(le(t)),u.push("=",ke(c)),u.push("-----END PGP PRIVATE KEY BLOCK-----\n");break;case ge.armor.signature:u.push("-----BEGIN PGP SIGNATURE-----\n"),u.push(_e(n,a)),u.push(le(t)),u.push("=",ke(c)),u.push("-----END PGP SIGNATURE-----\n")}return ue.concat(u)}class Ce{constructor(){this.bytes=""}read(e){this.bytes=ue.uint8ArrayToString(e.subarray(0,8))}write(){return ue.stringToUint8Array(this.bytes)}toHex(){return ue.uint8ArrayToHex(ue.stringToUint8Array(this.bytes))}equals(e,t=!1){return t&&(e.isWildcard()||this.isWildcard())||this.bytes===e.bytes}isNull(){return""===this.bytes}isWildcard(){return/^0+$/.test(this.toHex())}static mapToHex(e){return e.toHex()}static fromID(e){const t=new Ce;return t.read(ue.hexToUint8Array(e)),t}static wildcard(){const e=new Ce;return e.read(new Uint8Array(8)),e}}var Ke=function(){var e,t,r=!1;function i(r,i){var n=e[(t[r]+t[i])%255];return 0!==r&&0!==i||(n=0),n}var n,a,s,o,c=!1;function u(){function u(r){var i,n,a;for(n=a=function(r){var i=e[255-t[r]];return 0===r&&(i=0),i}(r),i=0;i<4;i++)a^=n=255&(n<<1|n>>>7);return a^=99}r||function(){e=[],t=[];var i,n,a=1;for(i=0;i<255;i++)e[i]=a,n=128&a,a<<=1,a&=255,128===n&&(a^=27),a^=e[i],t[e[i]]=i;e[255]=e[0],t[0]=0,r=!0}(),n=[],a=[],s=[[],[],[],[]],o=[[],[],[],[]];for(var h=0;h<256;h++){var d=u(h);n[h]=d,a[d]=h,s[0][h]=i(2,d)<<24|d<<16|d<<8|i(3,d),o[0][d]=i(14,h)<<24|i(9,h)<<16|i(13,h)<<8|i(11,h);for(var f=1;f<4;f++)s[f][h]=s[f-1][h]>>>8|s[f-1][h]<<24,o[f][d]=o[f-1][d]>>>8|o[f-1][d]<<24}c=!0}var h=function(e,t){c||u();var r=new Uint32Array(t);r.set(n,512),r.set(a,768);for(var i=0;i<4;i++)r.set(s[i],4096+1024*i>>2),r.set(o[i],8192+1024*i>>2);var h=function(e,t,r){"use asm";var i=0,n=0,a=0,s=0,o=0,c=0,u=0,h=0,d=0,f=0,l=0,p=0,y=0,b=0,m=0,g=0,w=0,v=0,_=0,k=0,A=0;var S=new e.Uint32Array(r),E=new e.Uint8Array(r);function x(e,t,r,o,c,u,h,d){e=e|0;t=t|0;r=r|0;o=o|0;c=c|0;u=u|0;h=h|0;d=d|0;var f=0,l=0,p=0,y=0,b=0,m=0,g=0,w=0;f=r|0x400,l=r|0x800,p=r|0xc00;c=c^S[(e|0)>>2],u=u^S[(e|4)>>2],h=h^S[(e|8)>>2],d=d^S[(e|12)>>2];for(w=16;(w|0)<=o<<4;w=w+16|0){y=S[(r|c>>22&1020)>>2]^S[(f|u>>14&1020)>>2]^S[(l|h>>6&1020)>>2]^S[(p|d<<2&1020)>>2]^S[(e|w|0)>>2],b=S[(r|u>>22&1020)>>2]^S[(f|h>>14&1020)>>2]^S[(l|d>>6&1020)>>2]^S[(p|c<<2&1020)>>2]^S[(e|w|4)>>2],m=S[(r|h>>22&1020)>>2]^S[(f|d>>14&1020)>>2]^S[(l|c>>6&1020)>>2]^S[(p|u<<2&1020)>>2]^S[(e|w|8)>>2],g=S[(r|d>>22&1020)>>2]^S[(f|c>>14&1020)>>2]^S[(l|u>>6&1020)>>2]^S[(p|h<<2&1020)>>2]^S[(e|w|12)>>2];c=y,u=b,h=m,d=g}i=S[(t|c>>22&1020)>>2]<<24^S[(t|u>>14&1020)>>2]<<16^S[(t|h>>6&1020)>>2]<<8^S[(t|d<<2&1020)>>2]^S[(e|w|0)>>2],n=S[(t|u>>22&1020)>>2]<<24^S[(t|h>>14&1020)>>2]<<16^S[(t|d>>6&1020)>>2]<<8^S[(t|c<<2&1020)>>2]^S[(e|w|4)>>2],a=S[(t|h>>22&1020)>>2]<<24^S[(t|d>>14&1020)>>2]<<16^S[(t|c>>6&1020)>>2]<<8^S[(t|u<<2&1020)>>2]^S[(e|w|8)>>2],s=S[(t|d>>22&1020)>>2]<<24^S[(t|c>>14&1020)>>2]<<16^S[(t|u>>6&1020)>>2]<<8^S[(t|h<<2&1020)>>2]^S[(e|w|12)>>2]}function P(e,t,r,i){e=e|0;t=t|0;r=r|0;i=i|0;x(0x0000,0x0800,0x1000,A,e,t,r,i)}function M(e,t,r,i){e=e|0;t=t|0;r=r|0;i=i|0;var a=0;x(0x0400,0x0c00,0x2000,A,e,i,r,t);a=n,n=s,s=a}function C(e,t,r,d){e=e|0;t=t|0;r=r|0;d=d|0;x(0x0000,0x0800,0x1000,A,o^e,c^t,u^r,h^d);o=i,c=n,u=a,h=s}function K(e,t,r,d){e=e|0;t=t|0;r=r|0;d=d|0;var f=0;x(0x0400,0x0c00,0x2000,A,e,d,r,t);f=n,n=s,s=f;i=i^o,n=n^c,a=a^u,s=s^h;o=e,c=t,u=r,h=d}function D(e,t,r,d){e=e|0;t=t|0;r=r|0;d=d|0;x(0x0000,0x0800,0x1000,A,o,c,u,h);o=i=i^e,c=n=n^t,u=a=a^r,h=s=s^d}function R(e,t,r,d){e=e|0;t=t|0;r=r|0;d=d|0;x(0x0000,0x0800,0x1000,A,o,c,u,h);i=i^e,n=n^t,a=a^r,s=s^d;o=e,c=t,u=r,h=d}function I(e,t,r,d){e=e|0;t=t|0;r=r|0;d=d|0;x(0x0000,0x0800,0x1000,A,o,c,u,h);o=i,c=n,u=a,h=s;i=i^e,n=n^t,a=a^r,s=s^d}function U(e,t,r,o){e=e|0;t=t|0;r=r|0;o=o|0;x(0x0000,0x0800,0x1000,A,d,f,l,p);p=~g&p|g&p+1;l=~m&l|m&l+((p|0)==0);f=~b&f|b&f+((l|0)==0);d=~y&d|y&d+((f|0)==0);i=i^e;n=n^t;a=a^r;s=s^o}function B(e,t,r,i){e=e|0;t=t|0;r=r|0;i=i|0;var n=0,a=0,s=0,d=0,f=0,l=0,p=0,y=0,b=0,m=0;e=e^o,t=t^c,r=r^u,i=i^h;n=w|0,a=v|0,s=_|0,d=k|0;for(;(b|0)<128;b=b+1|0){if(n>>>31){f=f^e,l=l^t,p=p^r,y=y^i}n=n<<1|a>>>31,a=a<<1|s>>>31,s=s<<1|d>>>31,d=d<<1;m=i&1;i=i>>>1|r<<31,r=r>>>1|t<<31,t=t>>>1|e<<31,e=e>>>1;if(m)e=e^0xe1000000}o=f,c=l,u=p,h=y}function T(e){e=e|0;A=e}function z(e,t,r,o){e=e|0;t=t|0;r=r|0;o=o|0;i=e,n=t,a=r,s=o}function q(e,t,r,i){e=e|0;t=t|0;r=r|0;i=i|0;o=e,c=t,u=r,h=i}function F(e,t,r,i){e=e|0;t=t|0;r=r|0;i=i|0;d=e,f=t,l=r,p=i}function O(e,t,r,i){e=e|0;t=t|0;r=r|0;i=i|0;y=e,b=t,m=r,g=i}function N(e,t,r,i){e=e|0;t=t|0;r=r|0;i=i|0;p=~g&p|g&i,l=~m&l|m&r,f=~b&f|b&t,d=~y&d|y&e}function L(e){e=e|0;if(e&15)return-1;E[e|0]=i>>>24,E[e|1]=i>>>16&255,E[e|2]=i>>>8&255,E[e|3]=i&255,E[e|4]=n>>>24,E[e|5]=n>>>16&255,E[e|6]=n>>>8&255,E[e|7]=n&255,E[e|8]=a>>>24,E[e|9]=a>>>16&255,E[e|10]=a>>>8&255,E[e|11]=a&255,E[e|12]=s>>>24,E[e|13]=s>>>16&255,E[e|14]=s>>>8&255,E[e|15]=s&255;return 16}function j(e){e=e|0;if(e&15)return-1;E[e|0]=o>>>24,E[e|1]=o>>>16&255,E[e|2]=o>>>8&255,E[e|3]=o&255,E[e|4]=c>>>24,E[e|5]=c>>>16&255,E[e|6]=c>>>8&255,E[e|7]=c&255,E[e|8]=u>>>24,E[e|9]=u>>>16&255,E[e|10]=u>>>8&255,E[e|11]=u&255,E[e|12]=h>>>24,E[e|13]=h>>>16&255,E[e|14]=h>>>8&255,E[e|15]=h&255;return 16}function W(){P(0,0,0,0);w=i,v=n,_=a,k=s}function H(e,t,r){e=e|0;t=t|0;r=r|0;var o=0;if(t&15)return-1;while((r|0)>=16){V[e&7](E[t|0]<<24|E[t|1]<<16|E[t|2]<<8|E[t|3],E[t|4]<<24|E[t|5]<<16|E[t|6]<<8|E[t|7],E[t|8]<<24|E[t|9]<<16|E[t|10]<<8|E[t|11],E[t|12]<<24|E[t|13]<<16|E[t|14]<<8|E[t|15]);E[t|0]=i>>>24,E[t|1]=i>>>16&255,E[t|2]=i>>>8&255,E[t|3]=i&255,E[t|4]=n>>>24,E[t|5]=n>>>16&255,E[t|6]=n>>>8&255,E[t|7]=n&255,E[t|8]=a>>>24,E[t|9]=a>>>16&255,E[t|10]=a>>>8&255,E[t|11]=a&255,E[t|12]=s>>>24,E[t|13]=s>>>16&255,E[t|14]=s>>>8&255,E[t|15]=s&255;o=o+16|0,t=t+16|0,r=r-16|0}return o|0}function G(e,t,r){e=e|0;t=t|0;r=r|0;var i=0;if(t&15)return-1;while((r|0)>=16){Z[e&1](E[t|0]<<24|E[t|1]<<16|E[t|2]<<8|E[t|3],E[t|4]<<24|E[t|5]<<16|E[t|6]<<8|E[t|7],E[t|8]<<24|E[t|9]<<16|E[t|10]<<8|E[t|11],E[t|12]<<24|E[t|13]<<16|E[t|14]<<8|E[t|15]);i=i+16|0,t=t+16|0,r=r-16|0}return i|0}var V=[P,M,C,K,D,R,I,U];var Z=[C,B];return{set_rounds:T,set_state:z,set_iv:q,set_nonce:F,set_mask:O,set_counter:N,get_state:L,get_iv:j,gcm_init:W,cipher:H,mac:G}}({Uint8Array,Uint32Array},e,t);return h.set_key=function(e,t,i,a,s,c,u,d,f){var l=r.subarray(0,60),p=r.subarray(256,316);l.set([t,i,a,s,c,u,d,f]);for(var y=e,b=1;y<4*e+28;y++){var m=l[y-1];(y%e==0||8===e&&y%e==4)&&(m=n[m>>>24]<<24^n[m>>>16&255]<<16^n[m>>>8&255]<<8^n[255&m]),y%e==0&&(m=m<<8^m>>>24^b<<24,b=b<<1^(128&b?27:0)),l[y]=l[y-e]^m}for(var g=0;g<y;g+=4)for(var w=0;w<4;w++){m=l[y-(4+g)+(4-w)%4];p[g+w]=g<4||g>=y-4?m:o[0][n[m>>>24]]^o[1][n[m>>>16&255]]^o[2][n[m>>>8&255]]^o[3][n[255&m]]}h.set_rounds(e+5)},h};return h.ENC={ECB:0,CBC:2,CFB:4,OFB:6,CTR:7},h.DEC={ECB:1,CBC:3,CFB:5,OFB:6,CTR:7},h.MAC={CBC:0,GCM:1},h.HEAP_DATA=16384,h}();function De(e){return e instanceof Uint8Array}function Re(e,t){const r=e?e.byteLength:t||65536;if(4095&r||r<=0)throw Error("heap size must be a positive integer and a multiple of 4096");return e=e||new Uint8Array(new ArrayBuffer(r))}function Ie(e,t,r,i,n){const a=e.length-t,s=a<n?a:n;return e.set(r.subarray(i,i+s),t),s}function Ue(...e){const t=e.reduce((e,t)=>e+t.length,0),r=new Uint8Array(t);let i=0;for(let t=0;t<e.length;t++)r.set(e[t],i),i+=e[t].length;return r}class Be extends Error{constructor(...e){super(...e)}}class Te extends Error{constructor(...e){super(...e)}}class ze extends Error{constructor(...e){super(...e)}}const qe=[],Fe=[];class Oe{constructor(e,t,r=!0,i,n,a){this.pos=0,this.len=0,this.mode=i,this.pos=0,this.len=0,this.key=e,this.iv=t,this.padding=r,this.acquire_asm(n,a)}acquire_asm(e,t){return void 0!==this.heap&&void 0!==this.asm||(this.heap=e||qe.pop()||Re().subarray(Ke.HEAP_DATA),this.asm=t||Fe.pop()||new Ke(null,this.heap.buffer),this.reset(this.key,this.iv)),{heap:this.heap,asm:this.asm}}release_asm(){void 0!==this.heap&&void 0!==this.asm&&(qe.push(this.heap),Fe.push(this.asm)),this.heap=void 0,this.asm=void 0}reset(e,t){const{asm:r}=this.acquire_asm(),i=e.length;if(16!==i&&24!==i&&32!==i)throw new Te("illegal key size");const n=new DataView(e.buffer,e.byteOffset,e.byteLength);if(r.set_key(i>>2,n.getUint32(0),n.getUint32(4),n.getUint32(8),n.getUint32(12),i>16?n.getUint32(16):0,i>16?n.getUint32(20):0,i>24?n.getUint32(24):0,i>24?n.getUint32(28):0),void 0!==t){if(16!==t.length)throw new Te("illegal iv size");let e=new DataView(t.buffer,t.byteOffset,t.byteLength);r.set_iv(e.getUint32(0),e.getUint32(4),e.getUint32(8),e.getUint32(12))}else r.set_iv(0,0,0,0)}AES_Encrypt_process(e){if(!De(e))throw new TypeError("data isn't of expected type");let{heap:t,asm:r}=this.acquire_asm(),i=Ke.ENC[this.mode],n=Ke.HEAP_DATA,a=this.pos,s=this.len,o=0,c=e.length||0,u=0,h=0,d=new Uint8Array(s+c&-16);for(;c>0;)h=Ie(t,a+s,e,o,c),s+=h,o+=h,c-=h,h=r.cipher(i,n+a,s),h&&d.set(t.subarray(a,a+h),u),u+=h,h<s?(a+=h,s-=h):(a=0,s=0);return this.pos=a,this.len=s,d}AES_Encrypt_finish(){let{heap:e,asm:t}=this.acquire_asm(),r=Ke.ENC[this.mode],i=Ke.HEAP_DATA,n=this.pos,a=this.len,s=16-a%16,o=a;if(this.hasOwnProperty("padding")){if(this.padding){for(let t=0;t<s;++t)e[n+a+t]=s;a+=s,o=a}else if(a%16)throw new Te("data length must be a multiple of the block size")}else a+=s;const c=new Uint8Array(o);return a&&t.cipher(r,i+n,a),o&&c.set(e.subarray(n,n+o)),this.pos=0,this.len=0,this.release_asm(),c}AES_Decrypt_process(e){if(!De(e))throw new TypeError("data isn't of expected type");let{heap:t,asm:r}=this.acquire_asm(),i=Ke.DEC[this.mode],n=Ke.HEAP_DATA,a=this.pos,s=this.len,o=0,c=e.length||0,u=0,h=s+c&-16,d=0,f=0;this.padding&&(d=s+c-h||16,h-=d);const l=new Uint8Array(h);for(;c>0;)f=Ie(t,a+s,e,o,c),s+=f,o+=f,c-=f,f=r.cipher(i,n+a,s-(c?0:d)),f&&l.set(t.subarray(a,a+f),u),u+=f,f<s?(a+=f,s-=f):(a=0,s=0);return this.pos=a,this.len=s,l}AES_Decrypt_finish(){let{heap:e,asm:t}=this.acquire_asm(),r=Ke.DEC[this.mode],i=Ke.HEAP_DATA,n=this.pos,a=this.len,s=a;if(a>0){if(a%16){if(this.hasOwnProperty("padding"))throw new Te("data length must be a multiple of the block size");a+=16-a%16}if(t.cipher(r,i+n,a),this.hasOwnProperty("padding")&&this.padding){let t=e[n+s-1];if(t<1||t>16||t>s)throw new ze("bad padding");let r=0;for(let i=t;i>1;i--)r|=t^e[n+s-i];if(r)throw new ze("bad padding");s-=t}}const o=new Uint8Array(s);return s>0&&o.set(e.subarray(n,n+s)),this.pos=0,this.len=0,this.release_asm(),o}}class Ne{static encrypt(e,t,r=!1){return new Ne(t,r).encrypt(e)}static decrypt(e,t,r=!1){return new Ne(t,r).decrypt(e)}constructor(e,t=!1,r){this.aes=r||new Oe(e,void 0,t,"ECB")}encrypt(e){return Ue(this.aes.AES_Encrypt_process(e),this.aes.AES_Encrypt_finish())}decrypt(e){return Ue(this.aes.AES_Decrypt_process(e),this.aes.AES_Decrypt_finish())}}function Le(e){const t=function(e){const t=new Ne(e);this.encrypt=function(e){return t.encrypt(e)},this.decrypt=function(e){return t.decrypt(e)}};return t.blockSize=t.prototype.blockSize=16,t.keySize=t.prototype.keySize=e/8,t}function je(e,t,r,i,n,a){const s=[16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756],o=[-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344],c=[520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584],u=[8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928],h=[256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080],d=[536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312],f=[2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154],l=[268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696];let p,y,b,m,g,w,v,_,k,A,S,E,x,P,M=0,C=t.length;const K=32===e.length?3:9;_=3===K?r?[0,32,2]:[30,-2,-2]:r?[0,32,2,62,30,-2,64,96,2]:[94,62,-2,32,64,2,30,-2,-2],r&&(C=(t=function(e,t){const r=8-e.length%8;let i;if(2===t&&r<8)i=32;else if(1===t)i=r;else{if(t||!(r<8)){if(8===r)return e;throw Error("des: invalid padding")}i=0}const n=new Uint8Array(e.length+r);for(let t=0;t<e.length;t++)n[t]=e[t];for(let t=0;t<r;t++)n[e.length+t]=i;return n}(t,a)).length);let D=new Uint8Array(C),R=0;for(1===i&&(k=n[M++]<<24|n[M++]<<16|n[M++]<<8|n[M++],S=n[M++]<<24|n[M++]<<16|n[M++]<<8|n[M++],M=0);M<C;){for(w=t[M++]<<24|t[M++]<<16|t[M++]<<8|t[M++],v=t[M++]<<24|t[M++]<<16|t[M++]<<8|t[M++],1===i&&(r?(w^=k,v^=S):(A=k,E=S,k=w,S=v)),b=252645135&(w>>>4^v),v^=b,w^=b<<4,b=65535&(w>>>16^v),v^=b,w^=b<<16,b=858993459&(v>>>2^w),w^=b,v^=b<<2,b=16711935&(v>>>8^w),w^=b,v^=b<<8,b=1431655765&(w>>>1^v),v^=b,w^=b<<1,w=w<<1|w>>>31,v=v<<1|v>>>31,y=0;y<K;y+=3){for(x=_[y+1],P=_[y+2],p=_[y];p!==x;p+=P)m=v^e[p],g=(v>>>4|v<<28)^e[p+1],b=w,w=v,v=b^(o[m>>>24&63]|u[m>>>16&63]|d[m>>>8&63]|l[63&m]|s[g>>>24&63]|c[g>>>16&63]|h[g>>>8&63]|f[63&g]);b=w,w=v,v=b}w=w>>>1|w<<31,v=v>>>1|v<<31,b=1431655765&(w>>>1^v),v^=b,w^=b<<1,b=16711935&(v>>>8^w),w^=b,v^=b<<8,b=858993459&(v>>>2^w),w^=b,v^=b<<2,b=65535&(w>>>16^v),v^=b,w^=b<<16,b=252645135&(w>>>4^v),v^=b,w^=b<<4,1===i&&(r?(k=w,S=v):(w^=A,v^=E)),D[R++]=w>>>24,D[R++]=w>>>16&255,D[R++]=w>>>8&255,D[R++]=255&w,D[R++]=v>>>24,D[R++]=v>>>16&255,D[R++]=v>>>8&255,D[R++]=255&v}return r||(D=function(e,t){let r,i=null;if(2===t)r=32;else if(1===t)i=e[e.length-1];else{if(t)throw Error("des: invalid padding");r=0}if(!i){for(i=1;e[e.length-i]===r;)i++;i--}return e.subarray(0,e.length-i)}(D,a)),D}function We(e){const t=[0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964],r=[0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697],i=[0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272],n=[0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144],a=[0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256],s=[0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488],o=[0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746],c=[0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568],u=[0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578],h=[0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488],d=[0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800],f=[0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744],l=[0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128],p=[0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261],y=e.length>8?3:1,b=Array(32*y),m=[0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0];let g,w,v,_=0,k=0;for(let A=0;A<y;A++){let y=e[_++]<<24|e[_++]<<16|e[_++]<<8|e[_++],A=e[_++]<<24|e[_++]<<16|e[_++]<<8|e[_++];v=252645135&(y>>>4^A),A^=v,y^=v<<4,v=65535&(A>>>-16^y),y^=v,A^=v<<-16,v=858993459&(y>>>2^A),A^=v,y^=v<<2,v=65535&(A>>>-16^y),y^=v,A^=v<<-16,v=1431655765&(y>>>1^A),A^=v,y^=v<<1,v=16711935&(A>>>8^y),y^=v,A^=v<<8,v=1431655765&(y>>>1^A),A^=v,y^=v<<1,v=y<<8|A>>>20&240,y=A<<24|A<<8&16711680|A>>>8&65280|A>>>24&240,A=v;for(let e=0;e<16;e++)m[e]?(y=y<<2|y>>>26,A=A<<2|A>>>26):(y=y<<1|y>>>27,A=A<<1|A>>>27),y&=-15,A&=-15,g=t[y>>>28]|r[y>>>24&15]|i[y>>>20&15]|n[y>>>16&15]|a[y>>>12&15]|s[y>>>8&15]|o[y>>>4&15],w=c[A>>>28]|u[A>>>24&15]|h[A>>>20&15]|d[A>>>16&15]|f[A>>>12&15]|l[A>>>8&15]|p[A>>>4&15],v=65535&(w>>>16^g),b[k++]=g^v,b[k++]=w^v<<16}return b}function He(e){this.key=[];for(let t=0;t<3;t++)this.key.push(new Uint8Array(e.subarray(8*t,8*t+8)));this.encrypt=function(e){return je(We(this.key[2]),je(We(this.key[1]),je(We(this.key[0]),e,!0,0,null,null),!1,0,null,null),!0,0,null,null)}}function Ge(){this.BlockSize=8,this.KeySize=16,this.setKey=function(e){if(this.masking=Array(16),this.rotate=Array(16),this.reset(),e.length!==this.KeySize)throw Error("CAST-128: keys must be 16 bytes");return this.keySchedule(e),!0},this.reset=function(){for(let e=0;e<16;e++)this.masking[e]=0,this.rotate[e]=0},this.getBlockSize=function(){return this.BlockSize},this.encrypt=function(e){const t=Array(e.length);for(let a=0;a<e.length;a+=8){let s,o=e[a]<<24|e[a+1]<<16|e[a+2]<<8|e[a+3],c=e[a+4]<<24|e[a+5]<<16|e[a+6]<<8|e[a+7];s=c,c=o^r(c,this.masking[0],this.rotate[0]),o=s,s=c,c=o^i(c,this.masking[1],this.rotate[1]),o=s,s=c,c=o^n(c,this.masking[2],this.rotate[2]),o=s,s=c,c=o^r(c,this.masking[3],this.rotate[3]),o=s,s=c,c=o^i(c,this.masking[4],this.rotate[4]),o=s,s=c,c=o^n(c,this.masking[5],this.rotate[5]),o=s,s=c,c=o^r(c,this.masking[6],this.rotate[6]),o=s,s=c,c=o^i(c,this.masking[7],this.rotate[7]),o=s,s=c,c=o^n(c,this.masking[8],this.rotate[8]),o=s,s=c,c=o^r(c,this.masking[9],this.rotate[9]),o=s,s=c,c=o^i(c,this.masking[10],this.rotate[10]),o=s,s=c,c=o^n(c,this.masking[11],this.rotate[11]),o=s,s=c,c=o^r(c,this.masking[12],this.rotate[12]),o=s,s=c,c=o^i(c,this.masking[13],this.rotate[13]),o=s,s=c,c=o^n(c,this.masking[14],this.rotate[14]),o=s,s=c,c=o^r(c,this.masking[15],this.rotate[15]),o=s,t[a]=c>>>24&255,t[a+1]=c>>>16&255,t[a+2]=c>>>8&255,t[a+3]=255&c,t[a+4]=o>>>24&255,t[a+5]=o>>>16&255,t[a+6]=o>>>8&255,t[a+7]=255&o}return t},this.decrypt=function(e){const t=Array(e.length);for(let a=0;a<e.length;a+=8){let s,o=e[a]<<24|e[a+1]<<16|e[a+2]<<8|e[a+3],c=e[a+4]<<24|e[a+5]<<16|e[a+6]<<8|e[a+7];s=c,c=o^r(c,this.masking[15],this.rotate[15]),o=s,s=c,c=o^n(c,this.masking[14],this.rotate[14]),o=s,s=c,c=o^i(c,this.masking[13],this.rotate[13]),o=s,s=c,c=o^r(c,this.masking[12],this.rotate[12]),o=s,s=c,c=o^n(c,this.masking[11],this.rotate[11]),o=s,s=c,c=o^i(c,this.masking[10],this.rotate[10]),o=s,s=c,c=o^r(c,this.masking[9],this.rotate[9]),o=s,s=c,c=o^n(c,this.masking[8],this.rotate[8]),o=s,s=c,c=o^i(c,this.masking[7],this.rotate[7]),o=s,s=c,c=o^r(c,this.masking[6],this.rotate[6]),o=s,s=c,c=o^n(c,this.masking[5],this.rotate[5]),o=s,s=c,c=o^i(c,this.masking[4],this.rotate[4]),o=s,s=c,c=o^r(c,this.masking[3],this.rotate[3]),o=s,s=c,c=o^n(c,this.masking[2],this.rotate[2]),o=s,s=c,c=o^i(c,this.masking[1],this.rotate[1]),o=s,s=c,c=o^r(c,this.masking[0],this.rotate[0]),o=s,t[a]=c>>>24&255,t[a+1]=c>>>16&255,t[a+2]=c>>>8&255,t[a+3]=255&c,t[a+4]=o>>>24&255,t[a+5]=o>>16&255,t[a+6]=o>>8&255,t[a+7]=255&o}return t};const e=[,,,,];e[0]=[,,,,],e[0][0]=[4,0,13,15,12,14,8],e[0][1]=[5,2,16,18,17,19,10],e[0][2]=[6,3,23,22,21,20,9],e[0][3]=[7,1,26,25,27,24,11],e[1]=[,,,,],e[1][0]=[0,6,21,23,20,22,16],e[1][1]=[1,4,0,2,1,3,18],e[1][2]=[2,5,7,6,5,4,17],e[1][3]=[3,7,10,9,11,8,19],e[2]=[,,,,],e[2][0]=[4,0,13,15,12,14,8],e[2][1]=[5,2,16,18,17,19,10],e[2][2]=[6,3,23,22,21,20,9],e[2][3]=[7,1,26,25,27,24,11],e[3]=[,,,,],e[3][0]=[0,6,21,23,20,22,16],e[3][1]=[1,4,0,2,1,3,18],e[3][2]=[2,5,7,6,5,4,17],e[3][3]=[3,7,10,9,11,8,19];const t=[,,,,];function r(e,t,r){const i=t+e,n=i<<r|i>>>32-r;return(a[0][n>>>24]^a[1][n>>>16&255])-a[2][n>>>8&255]+a[3][255&n]}function i(e,t,r){const i=t^e,n=i<<r|i>>>32-r;return a[0][n>>>24]-a[1][n>>>16&255]+a[2][n>>>8&255]^a[3][255&n]}function n(e,t,r){const i=t-e,n=i<<r|i>>>32-r;return(a[0][n>>>24]+a[1][n>>>16&255]^a[2][n>>>8&255])-a[3][255&n]}t[0]=[,,,,],t[0][0]=[24,25,23,22,18],t[0][1]=[26,27,21,20,22],t[0][2]=[28,29,19,18,25],t[0][3]=[30,31,17,16,28],t[1]=[,,,,],t[1][0]=[3,2,12,13,8],t[1][1]=[1,0,14,15,13],t[1][2]=[7,6,8,9,3],t[1][3]=[5,4,10,11,7],t[2]=[,,,,],t[2][0]=[19,18,28,29,25],t[2][1]=[17,16,30,31,28],t[2][2]=[23,22,24,25,18],t[2][3]=[21,20,26,27,22],t[3]=[,,,,],t[3][0]=[8,9,7,6,3],t[3][1]=[10,11,5,4,7],t[3][2]=[12,13,3,2,8],t[3][3]=[14,15,1,0,13],this.keySchedule=function(r){const i=[,,,,,,,,],n=Array(32);let s;for(let e=0;e<4;e++)s=4*e,i[e]=r[s]<<24|r[s+1]<<16|r[s+2]<<8|r[s+3];const o=[6,7,4,5];let c,u=0;for(let r=0;r<2;r++)for(let r=0;r<4;r++){for(s=0;s<4;s++){const t=e[r][s];c=i[t[1]],c^=a[4][i[t[2]>>>2]>>>24-8*(3&t[2])&255],c^=a[5][i[t[3]>>>2]>>>24-8*(3&t[3])&255],c^=a[6][i[t[4]>>>2]>>>24-8*(3&t[4])&255],c^=a[7][i[t[5]>>>2]>>>24-8*(3&t[5])&255],c^=a[o[s]][i[t[6]>>>2]>>>24-8*(3&t[6])&255],i[t[0]]=c}for(s=0;s<4;s++){const e=t[r][s];c=a[4][i[e[0]>>>2]>>>24-8*(3&e[0])&255],c^=a[5][i[e[1]>>>2]>>>24-8*(3&e[1])&255],c^=a[6][i[e[2]>>>2]>>>24-8*(3&e[2])&255],c^=a[7][i[e[3]>>>2]>>>24-8*(3&e[3])&255],c^=a[4+s][i[e[4]>>>2]>>>24-8*(3&e[4])&255],n[u]=c,u++}}for(let e=0;e<16;e++)this.masking[e]=n[e],this.rotate[e]=31&n[16+e]};const a=[,,,,,,,,];a[0]=[821772500,2678128395,1810681135,1059425402,505495343,2617265619,1610868032,3483355465,3218386727,2294005173,3791863952,2563806837,1852023008,365126098,3269944861,584384398,677919599,3229601881,4280515016,2002735330,1136869587,3744433750,2289869850,2731719981,2714362070,879511577,1639411079,575934255,717107937,2857637483,576097850,2731753936,1725645e3,2810460463,5111599,767152862,2543075244,1251459544,1383482551,3052681127,3089939183,3612463449,1878520045,1510570527,2189125840,2431448366,582008916,3163445557,1265446783,1354458274,3529918736,3202711853,3073581712,3912963487,3029263377,1275016285,4249207360,2905708351,3304509486,1442611557,3585198765,2712415662,2731849581,3248163920,2283946226,208555832,2766454743,1331405426,1447828783,3315356441,3108627284,2957404670,2981538698,3339933917,1669711173,286233437,1465092821,1782121619,3862771680,710211251,980974943,1651941557,430374111,2051154026,704238805,4128970897,3144820574,2857402727,948965521,3333752299,2227686284,718756367,2269778983,2731643755,718440111,2857816721,3616097120,1113355533,2478022182,410092745,1811985197,1944238868,2696854588,1415722873,1682284203,1060277122,1998114690,1503841958,82706478,2315155686,1068173648,845149890,2167947013,1768146376,1993038550,3566826697,3390574031,940016341,3355073782,2328040721,904371731,1205506512,4094660742,2816623006,825647681,85914773,2857843460,1249926541,1417871568,3287612,3211054559,3126306446,1975924523,1353700161,2814456437,2438597621,1800716203,722146342,2873936343,1151126914,4160483941,2877670899,458611604,2866078500,3483680063,770352098,2652916994,3367839148,3940505011,3585973912,3809620402,718646636,2504206814,2914927912,3631288169,2857486607,2860018678,575749918,2857478043,718488780,2069512688,3548183469,453416197,1106044049,3032691430,52586708,3378514636,3459808877,3211506028,1785789304,218356169,3571399134,3759170522,1194783844,1523787992,3007827094,1975193539,2555452411,1341901877,3045838698,3776907964,3217423946,2802510864,2889438986,1057244207,1636348243,3761863214,1462225785,2632663439,481089165,718503062,24497053,3332243209,3344655856,3655024856,3960371065,1195698900,2971415156,3710176158,2115785917,4027663609,3525578417,2524296189,2745972565,3564906415,1372086093,1452307862,2780501478,1476592880,3389271281,18495466,2378148571,901398090,891748256,3279637769,3157290713,2560960102,1447622437,4284372637,216884176,2086908623,1879786977,3588903153,2242455666,2938092967,3559082096,2810645491,758861177,1121993112,215018983,642190776,4169236812,1196255959,2081185372,3508738393,941322904,4124243163,2877523539,1848581667,2205260958,3180453958,2589345134,3694731276,550028657,2519456284,3789985535,2973870856,2093648313,443148163,46942275,2734146937,1117713533,1115362972,1523183689,3717140224,1551984063],a[1]=[522195092,4010518363,1776537470,960447360,4267822970,4005896314,1435016340,1929119313,2913464185,1310552629,3579470798,3724818106,2579771631,1594623892,417127293,2715217907,2696228731,1508390405,3994398868,3925858569,3695444102,4019471449,3129199795,3770928635,3520741761,990456497,4187484609,2783367035,21106139,3840405339,631373633,3783325702,532942976,396095098,3548038825,4267192484,2564721535,2011709262,2039648873,620404603,3776170075,2898526339,3612357925,4159332703,1645490516,223693667,1567101217,3362177881,1029951347,3470931136,3570957959,1550265121,119497089,972513919,907948164,3840628539,1613718692,3594177948,465323573,2659255085,654439692,2575596212,2699288441,3127702412,277098644,624404830,4100943870,2717858591,546110314,2403699828,3655377447,1321679412,4236791657,1045293279,4010672264,895050893,2319792268,494945126,1914543101,2777056443,3894764339,2219737618,311263384,4275257268,3458730721,669096869,3584475730,3835122877,3319158237,3949359204,2005142349,2713102337,2228954793,3769984788,569394103,3855636576,1425027204,108000370,2736431443,3671869269,3043122623,1750473702,2211081108,762237499,3972989403,2798899386,3061857628,2943854345,867476300,964413654,1591880597,1594774276,2179821409,552026980,3026064248,3726140315,2283577634,3110545105,2152310760,582474363,1582640421,1383256631,2043843868,3322775884,1217180674,463797851,2763038571,480777679,2718707717,2289164131,3118346187,214354409,200212307,3810608407,3025414197,2674075964,3997296425,1847405948,1342460550,510035443,4080271814,815934613,833030224,1620250387,1945732119,2703661145,3966000196,1388869545,3456054182,2687178561,2092620194,562037615,1356438536,3409922145,3261847397,1688467115,2150901366,631725691,3840332284,549916902,3455104640,394546491,837744717,2114462948,751520235,2221554606,2415360136,3999097078,2063029875,803036379,2702586305,821456707,3019566164,360699898,4018502092,3511869016,3677355358,2402471449,812317050,49299192,2570164949,3259169295,2816732080,3331213574,3101303564,2156015656,3705598920,3546263921,143268808,3200304480,1638124008,3165189453,3341807610,578956953,2193977524,3638120073,2333881532,807278310,658237817,2969561766,1641658566,11683945,3086995007,148645947,1138423386,4158756760,1981396783,2401016740,3699783584,380097457,2680394679,2803068651,3334260286,441530178,4016580796,1375954390,761952171,891809099,2183123478,157052462,3683840763,1592404427,341349109,2438483839,1417898363,644327628,2233032776,2353769706,2201510100,220455161,1815641738,182899273,2995019788,3627381533,3702638151,2890684138,1052606899,588164016,1681439879,4038439418,2405343923,4229449282,167996282,1336969661,1688053129,2739224926,1543734051,1046297529,1138201970,2121126012,115334942,1819067631,1902159161,1941945968,2206692869,1159982321],a[2]=[2381300288,637164959,3952098751,3893414151,1197506559,916448331,2350892612,2932787856,3199334847,4009478890,3905886544,1373570990,2450425862,4037870920,3778841987,2456817877,286293407,124026297,3001279700,1028597854,3115296800,4208886496,2691114635,2188540206,1430237888,1218109995,3572471700,308166588,570424558,2187009021,2455094765,307733056,1310360322,3135275007,1384269543,2388071438,863238079,2359263624,2801553128,3380786597,2831162807,1470087780,1728663345,4072488799,1090516929,532123132,2389430977,1132193179,2578464191,3051079243,1670234342,1434557849,2711078940,1241591150,3314043432,3435360113,3091448339,1812415473,2198440252,267246943,796911696,3619716990,38830015,1526438404,2806502096,374413614,2943401790,1489179520,1603809326,1920779204,168801282,260042626,2358705581,1563175598,2397674057,1356499128,2217211040,514611088,2037363785,2186468373,4022173083,2792511869,2913485016,1173701892,4200428547,3896427269,1334932762,2455136706,602925377,2835607854,1613172210,41346230,2499634548,2457437618,2188827595,41386358,4172255629,1313404830,2405527007,3801973774,2217704835,873260488,2528884354,2478092616,4012915883,2555359016,2006953883,2463913485,575479328,2218240648,2099895446,660001756,2341502190,3038761536,3888151779,3848713377,3286851934,1022894237,1620365795,3449594689,1551255054,15374395,3570825345,4249311020,4151111129,3181912732,310226346,1133119310,530038928,136043402,2476768958,3107506709,2544909567,1036173560,2367337196,1681395281,1758231547,3641649032,306774401,1575354324,3716085866,1990386196,3114533736,2455606671,1262092282,3124342505,2768229131,4210529083,1833535011,423410938,660763973,2187129978,1639812e3,3508421329,3467445492,310289298,272797111,2188552562,2456863912,310240523,677093832,1013118031,901835429,3892695601,1116285435,3036471170,1337354835,243122523,520626091,277223598,4244441197,4194248841,1766575121,594173102,316590669,742362309,3536858622,4176435350,3838792410,2501204839,1229605004,3115755532,1552908988,2312334149,979407927,3959474601,1148277331,176638793,3614686272,2083809052,40992502,1340822838,2731552767,3535757508,3560899520,1354035053,122129617,7215240,2732932949,3118912700,2718203926,2539075635,3609230695,3725561661,1928887091,2882293555,1988674909,2063640240,2491088897,1459647954,4189817080,2302804382,1113892351,2237858528,1927010603,4002880361,1856122846,1594404395,2944033133,3855189863,3474975698,1643104450,4054590833,3431086530,1730235576,2984608721,3084664418,2131803598,4178205752,267404349,1617849798,1616132681,1462223176,736725533,2327058232,551665188,2945899023,1749386277,2575514597,1611482493,674206544,2201269090,3642560800,728599968,1680547377,2620414464,1388111496,453204106,4156223445,1094905244,2754698257,2201108165,3757000246,2704524545,3922940700,3996465027],a[3]=[2645754912,532081118,2814278639,3530793624,1246723035,1689095255,2236679235,4194438865,2116582143,3859789411,157234593,2045505824,4245003587,1687664561,4083425123,605965023,672431967,1336064205,3376611392,214114848,4258466608,3232053071,489488601,605322005,3998028058,264917351,1912574028,756637694,436560991,202637054,135989450,85393697,2152923392,3896401662,2895836408,2145855233,3535335007,115294817,3147733898,1922296357,3464822751,4117858305,1037454084,2725193275,2127856640,1417604070,1148013728,1827919605,642362335,2929772533,909348033,1346338451,3547799649,297154785,1917849091,4161712827,2883604526,3968694238,1469521537,3780077382,3375584256,1763717519,136166297,4290970789,1295325189,2134727907,2798151366,1566297257,3672928234,2677174161,2672173615,965822077,2780786062,289653839,1133871874,3491843819,35685304,1068898316,418943774,672553190,642281022,2346158704,1954014401,3037126780,4079815205,2030668546,3840588673,672283427,1776201016,359975446,3750173538,555499703,2769985273,1324923,69110472,152125443,3176785106,3822147285,1340634837,798073664,1434183902,15393959,216384236,1303690150,3881221631,3711134124,3960975413,106373927,2578434224,1455997841,1801814300,1578393881,1854262133,3188178946,3258078583,2302670060,1539295533,3505142565,3078625975,2372746020,549938159,3278284284,2620926080,181285381,2865321098,3970029511,68876850,488006234,1728155692,2608167508,836007927,2435231793,919367643,3339422534,3655756360,1457871481,40520939,1380155135,797931188,234455205,2255801827,3990488299,397000196,739833055,3077865373,2871719860,4022553888,772369276,390177364,3853951029,557662966,740064294,1640166671,1699928825,3535942136,622006121,3625353122,68743880,1742502,219489963,1664179233,1577743084,1236991741,410585305,2366487942,823226535,1050371084,3426619607,3586839478,212779912,4147118561,1819446015,1911218849,530248558,3486241071,3252585495,2886188651,3410272728,2342195030,20547779,2982490058,3032363469,3631753222,312714466,1870521650,1493008054,3491686656,615382978,4103671749,2534517445,1932181,2196105170,278426614,6369430,3274544417,2913018367,697336853,2143000447,2946413531,701099306,1558357093,2805003052,3500818408,2321334417,3567135975,216290473,3591032198,23009561,1996984579,3735042806,2024298078,3739440863,569400510,2339758983,3016033873,3097871343,3639523026,3844324983,3256173865,795471839,2951117563,4101031090,4091603803,3603732598,971261452,534414648,428311343,3389027175,2844869880,694888862,1227866773,2456207019,3043454569,2614353370,3749578031,3676663836,459166190,4132644070,1794958188,51825668,2252611902,3084671440,2036672799,3436641603,1099053433,2469121526,3059204941,1323291266,2061838604,1018778475,2233344254,2553501054,334295216,3556750194,1065731521,183467730],a[4]=[2127105028,745436345,2601412319,2788391185,3093987327,500390133,1155374404,389092991,150729210,3891597772,3523549952,1935325696,716645080,946045387,2901812282,1774124410,3869435775,4039581901,3293136918,3438657920,948246080,363898952,3867875531,1286266623,1598556673,68334250,630723836,1104211938,1312863373,613332731,2377784574,1101634306,441780740,3129959883,1917973735,2510624549,3238456535,2544211978,3308894634,1299840618,4076074851,1756332096,3977027158,297047435,3790297736,2265573040,3621810518,1311375015,1667687725,47300608,3299642885,2474112369,201668394,1468347890,576830978,3594690761,3742605952,1958042578,1747032512,3558991340,1408974056,3366841779,682131401,1033214337,1545599232,4265137049,206503691,103024618,2855227313,1337551222,2428998917,2963842932,4015366655,3852247746,2796956967,3865723491,3747938335,247794022,3755824572,702416469,2434691994,397379957,851939612,2314769512,218229120,1380406772,62274761,214451378,3170103466,2276210409,3845813286,28563499,446592073,1693330814,3453727194,29968656,3093872512,220656637,2470637031,77972100,1667708854,1358280214,4064765667,2395616961,325977563,4277240721,4220025399,3605526484,3355147721,811859167,3069544926,3962126810,652502677,3075892249,4132761541,3498924215,1217549313,3250244479,3858715919,3053989961,1538642152,2279026266,2875879137,574252750,3324769229,2651358713,1758150215,141295887,2719868960,3515574750,4093007735,4194485238,1082055363,3417560400,395511885,2966884026,179534037,3646028556,3738688086,1092926436,2496269142,257381841,3772900718,1636087230,1477059743,2499234752,3811018894,2675660129,3285975680,90732309,1684827095,1150307763,1723134115,3237045386,1769919919,1240018934,815675215,750138730,2239792499,1234303040,1995484674,138143821,675421338,1145607174,1936608440,3238603024,2345230278,2105974004,323969391,779555213,3004902369,2861610098,1017501463,2098600890,2628620304,2940611490,2682542546,1171473753,3656571411,3687208071,4091869518,393037935,159126506,1662887367,1147106178,391545844,3452332695,1891500680,3016609650,1851642611,546529401,1167818917,3194020571,2848076033,3953471836,575554290,475796850,4134673196,450035699,2351251534,844027695,1080539133,86184846,1554234488,3692025454,1972511363,2018339607,1491841390,1141460869,1061690759,4244549243,2008416118,2351104703,2868147542,1598468138,722020353,1027143159,212344630,1387219594,1725294528,3745187956,2500153616,458938280,4129215917,1828119673,544571780,3503225445,2297937496,1241802790,267843827,2694610800,1397140384,1558801448,3782667683,1806446719,929573330,2234912681,400817706,616011623,4121520928,3603768725,1761550015,1968522284,4053731006,4192232858,4005120285,872482584,3140537016,3894607381,2287405443,1963876937,3663887957,1584857e3,2975024454,1833426440,4025083860],a[5]=[4143615901,749497569,1285769319,3795025788,2514159847,23610292,3974978748,844452780,3214870880,3751928557,2213566365,1676510905,448177848,3730751033,4086298418,2307502392,871450977,3222878141,4110862042,3831651966,2735270553,1310974780,2043402188,1218528103,2736035353,4274605013,2702448458,3936360550,2693061421,162023535,2827510090,687910808,23484817,3784910947,3371371616,779677500,3503626546,3473927188,4157212626,3500679282,4248902014,2466621104,3899384794,1958663117,925738300,1283408968,3669349440,1840910019,137959847,2679828185,1239142320,1315376211,1547541505,1690155329,739140458,3128809933,3933172616,3876308834,905091803,1548541325,4040461708,3095483362,144808038,451078856,676114313,2861728291,2469707347,993665471,373509091,2599041286,4025009006,4170239449,2149739950,3275793571,3749616649,2794760199,1534877388,572371878,2590613551,1753320020,3467782511,1405125690,4270405205,633333386,3026356924,3475123903,632057672,2846462855,1404951397,3882875879,3915906424,195638627,2385783745,3902872553,1233155085,3355999740,2380578713,2702246304,2144565621,3663341248,3894384975,2502479241,4248018925,3094885567,1594115437,572884632,3385116731,767645374,1331858858,1475698373,3793881790,3532746431,1321687957,619889600,1121017241,3440213920,2070816767,2833025776,1933951238,4095615791,890643334,3874130214,859025556,360630002,925594799,1764062180,3920222280,4078305929,979562269,2810700344,4087740022,1949714515,546639971,1165388173,3069891591,1495988560,922170659,1291546247,2107952832,1813327274,3406010024,3306028637,4241950635,153207855,2313154747,1608695416,1150242611,1967526857,721801357,1220138373,3691287617,3356069787,2112743302,3281662835,1111556101,1778980689,250857638,2298507990,673216130,2846488510,3207751581,3562756981,3008625920,3417367384,2198807050,529510932,3547516680,3426503187,2364944742,102533054,2294910856,1617093527,1204784762,3066581635,1019391227,1069574518,1317995090,1691889997,3661132003,510022745,3238594800,1362108837,1817929911,2184153760,805817662,1953603311,3699844737,120799444,2118332377,207536705,2282301548,4120041617,145305846,2508124933,3086745533,3261524335,1877257368,2977164480,3160454186,2503252186,4221677074,759945014,254147243,2767453419,3801518371,629083197,2471014217,907280572,3900796746,940896768,2751021123,2625262786,3161476951,3661752313,3260732218,1425318020,2977912069,1496677566,3988592072,2140652971,3126511541,3069632175,977771578,1392695845,1698528874,1411812681,1369733098,1343739227,3620887944,1142123638,67414216,3102056737,3088749194,1626167401,2546293654,3941374235,697522451,33404913,143560186,2595682037,994885535,1247667115,3859094837,2699155541,3547024625,4114935275,2968073508,3199963069,2732024527,1237921620,951448369,1898488916,1211705605,2790989240,2233243581,3598044975],a[6]=[2246066201,858518887,1714274303,3485882003,713916271,2879113490,3730835617,539548191,36158695,1298409750,419087104,1358007170,749914897,2989680476,1261868530,2995193822,2690628854,3443622377,3780124940,3796824509,2976433025,4259637129,1551479e3,512490819,1296650241,951993153,2436689437,2460458047,144139966,3136204276,310820559,3068840729,643875328,1969602020,1680088954,2185813161,3283332454,672358534,198762408,896343282,276269502,3014846926,84060815,197145886,376173866,3943890818,3813173521,3545068822,1316698879,1598252827,2633424951,1233235075,859989710,2358460855,3503838400,3409603720,1203513385,1193654839,2792018475,2060853022,207403770,1144516871,3068631394,1121114134,177607304,3785736302,326409831,1929119770,2983279095,4183308101,3474579288,3200513878,3228482096,119610148,1170376745,3378393471,3163473169,951863017,3337026068,3135789130,2907618374,1183797387,2015970143,4045674555,2182986399,2952138740,3928772205,384012900,2454997643,10178499,2879818989,2596892536,111523738,2995089006,451689641,3196290696,235406569,1441906262,3890558523,3013735005,4158569349,1644036924,376726067,1006849064,3664579700,2041234796,1021632941,1374734338,2566452058,371631263,4007144233,490221539,206551450,3140638584,1053219195,1853335209,3412429660,3562156231,735133835,1623211703,3104214392,2738312436,4096837757,3366392578,3110964274,3956598718,3196820781,2038037254,3877786376,2339753847,300912036,3766732888,2372630639,1516443558,4200396704,1574567987,4069441456,4122592016,2699739776,146372218,2748961456,2043888151,35287437,2596680554,655490400,1132482787,110692520,1031794116,2188192751,1324057718,1217253157,919197030,686247489,3261139658,1028237775,3135486431,3059715558,2460921700,986174950,2661811465,4062904701,2752986992,3709736643,367056889,1353824391,731860949,1650113154,1778481506,784341916,357075625,3608602432,1074092588,2480052770,3811426202,92751289,877911070,3600361838,1231880047,480201094,3756190983,3094495953,434011822,87971354,363687820,1717726236,1901380172,3926403882,2481662265,400339184,1490350766,2661455099,1389319756,2558787174,784598401,1983468483,30828846,3550527752,2716276238,3841122214,1765724805,1955612312,1277890269,1333098070,1564029816,2704417615,1026694237,3287671188,1260819201,3349086767,1016692350,1582273796,1073413053,1995943182,694588404,1025494639,3323872702,3551898420,4146854327,453260480,1316140391,1435673405,3038941953,3486689407,1622062951,403978347,817677117,950059133,4246079218,3278066075,1486738320,1417279718,481875527,2549965225,3933690356,760697757,1452955855,3897451437,1177426808,1702951038,4085348628,2447005172,1084371187,3516436277,3068336338,1073369276,1027665953,3284188590,1230553676,1368340146,2226246512,267243139,2274220762,4070734279,2497715176,2423353163,2504755875],a[7]=[3793104909,3151888380,2817252029,895778965,2005530807,3871412763,237245952,86829237,296341424,3851759377,3974600970,2475086196,709006108,1994621201,2972577594,937287164,3734691505,168608556,3189338153,2225080640,3139713551,3033610191,3025041904,77524477,185966941,1208824168,2344345178,1721625922,3354191921,1066374631,1927223579,1971335949,2483503697,1551748602,2881383779,2856329572,3003241482,48746954,1398218158,2050065058,313056748,4255789917,393167848,1912293076,940740642,3465845460,3091687853,2522601570,2197016661,1727764327,364383054,492521376,1291706479,3264136376,1474851438,1685747964,2575719748,1619776915,1814040067,970743798,1561002147,2925768690,2123093554,1880132620,3151188041,697884420,2550985770,2607674513,2659114323,110200136,1489731079,997519150,1378877361,3527870668,478029773,2766872923,1022481122,431258168,1112503832,897933369,2635587303,669726182,3383752315,918222264,163866573,3246985393,3776823163,114105080,1903216136,761148244,3571337562,1690750982,3166750252,1037045171,1888456500,2010454850,642736655,616092351,365016990,1185228132,4174898510,1043824992,2023083429,2241598885,3863320456,3279669087,3674716684,108438443,2132974366,830746235,606445527,4173263986,2204105912,1844756978,2532684181,4245352700,2969441100,3796921661,1335562986,4061524517,2720232303,2679424040,634407289,885462008,3294724487,3933892248,2094100220,339117932,4048830727,3202280980,1458155303,2689246273,1022871705,2464987878,3714515309,353796843,2822958815,4256850100,4052777845,551748367,618185374,3778635579,4020649912,1904685140,3069366075,2670879810,3407193292,2954511620,4058283405,2219449317,3135758300,1120655984,3447565834,1474845562,3577699062,550456716,3466908712,2043752612,881257467,869518812,2005220179,938474677,3305539448,3850417126,1315485940,3318264702,226533026,965733244,321539988,1136104718,804158748,573969341,3708209826,937399083,3290727049,2901666755,1461057207,4013193437,4066861423,3242773476,2421326174,1581322155,3028952165,786071460,3900391652,3918438532,1485433313,4023619836,3708277595,3678951060,953673138,1467089153,1930354364,1533292819,2492563023,1346121658,1685000834,1965281866,3765933717,4190206607,2052792609,3515332758,690371149,3125873887,2180283551,2903598061,3933952357,436236910,289419410,14314871,1242357089,2904507907,1616633776,2666382180,585885352,3471299210,2699507360,1432659641,277164553,3354103607,770115018,2303809295,3741942315,3177781868,2853364978,2269453327,3774259834,987383833,1290892879,225909803,1741533526,890078084,1496906255,1111072499,916028167,243534141,1252605537,2204162171,531204876,290011180,3916834213,102027703,237315147,209093447,1486785922,220223953,2758195998,4175039106,82940208,3127791296,2569425252,518464269,1353887104,3941492737,2377294467,3935040926]}function Ve(e){this.cast5=new Ge,this.cast5.setKey(e),this.encrypt=function(e){return this.cast5.encrypt(e)}}He.keySize=He.prototype.keySize=24,He.blockSize=He.prototype.blockSize=8,Ve.blockSize=Ve.prototype.blockSize=8,Ve.keySize=Ve.prototype.keySize=16;const Ze=4294967295;function Ye(e,t){return(e<<t|e>>>32-t)&Ze}function $e(e,t){return e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24}function Xe(e,t,r){e.splice(t,4,255&r,r>>>8&255,r>>>16&255,r>>>24&255)}function Je(e,t){return e>>>8*t&255}function Qe(e){this.tf=function(){let e=null,t=null,r=-1,i=[],n=[[],[],[],[]];function a(e){return n[0][Je(e,0)]^n[1][Je(e,1)]^n[2][Je(e,2)]^n[3][Je(e,3)]}function s(e){return n[0][Je(e,3)]^n[1][Je(e,0)]^n[2][Je(e,1)]^n[3][Je(e,2)]}function o(e,t){let r=a(t[0]),n=s(t[1]);t[2]=Ye(t[2]^r+n+i[4*e+8]&Ze,31),t[3]=Ye(t[3],1)^r+2*n+i[4*e+9]&Ze,r=a(t[2]),n=s(t[3]),t[0]=Ye(t[0]^r+n+i[4*e+10]&Ze,31),t[1]=Ye(t[1],1)^r+2*n+i[4*e+11]&Ze}function c(e,t){let r=a(t[0]),n=s(t[1]);t[2]=Ye(t[2],1)^r+n+i[4*e+10]&Ze,t[3]=Ye(t[3]^r+2*n+i[4*e+11]&Ze,31),r=a(t[2]),n=s(t[3]),t[0]=Ye(t[0],1)^r+n+i[4*e+8]&Ze,t[1]=Ye(t[1]^r+2*n+i[4*e+9]&Ze,31)}return{name:"twofish",blocksize:16,open:function(t){let r,a,s,o,c;e=t;const u=[],h=[],d=[];let f;const l=[];let p,y,b;const m=[[8,1,7,13,6,15,3,2,0,11,5,9,14,12,10,4],[2,8,11,13,15,7,6,14,3,1,9,4,0,10,12,5]],g=[[14,12,11,8,1,2,3,5,15,4,10,6,7,0,9,13],[1,14,2,11,4,12,3,7,6,13,10,5,15,9,0,8]],w=[[11,10,5,14,6,13,9,0,12,8,15,3,2,4,7,1],[4,12,7,5,1,6,9,10,0,14,13,8,2,11,3,15]],v=[[13,7,15,4,1,2,6,14,9,11,3,0,8,5,12,10],[11,9,5,1,12,3,13,14,6,4,7,15,2,0,8,10]],_=[0,8,1,9,2,10,3,11,4,12,5,13,6,14,7,15],k=[0,9,2,11,4,13,6,15,8,1,10,3,12,5,14,7],A=[[],[]],S=[[],[],[],[]];function E(e){return e^e>>2^[0,90,180,238][3&e]}function x(e){return e^e>>1^e>>2^[0,238,180,90][3&e]}function P(e,t){let r,i,n;for(r=0;r<8;r++)i=t>>>24,t=t<<8&Ze|e>>>24,e=e<<8&Ze,n=i<<1,128&i&&(n^=333),t^=i^n<<16,n^=i>>>1,1&i&&(n^=166),t^=n<<24|n<<8;return t}function M(e,t){const r=t>>4,i=15&t,n=m[e][r^i],a=g[e][_[i]^k[r]];return v[e][_[a]^k[n]]<<4|w[e][n^a]}function C(e,t){let r=Je(e,0),i=Je(e,1),n=Je(e,2),a=Je(e,3);switch(f){case 4:r=A[1][r]^Je(t[3],0),i=A[0][i]^Je(t[3],1),n=A[0][n]^Je(t[3],2),a=A[1][a]^Je(t[3],3);case 3:r=A[1][r]^Je(t[2],0),i=A[1][i]^Je(t[2],1),n=A[0][n]^Je(t[2],2),a=A[0][a]^Je(t[2],3);case 2:r=A[0][A[0][r]^Je(t[1],0)]^Je(t[0],0),i=A[0][A[1][i]^Je(t[1],1)]^Je(t[0],1),n=A[1][A[0][n]^Je(t[1],2)]^Je(t[0],2),a=A[1][A[1][a]^Je(t[1],3)]^Je(t[0],3)}return S[0][r]^S[1][i]^S[2][n]^S[3][a]}for(e=e.slice(0,32),r=e.length;16!==r&&24!==r&&32!==r;)e[r++]=0;for(r=0;r<e.length;r+=4)d[r>>2]=$e(e,r);for(r=0;r<256;r++)A[0][r]=M(0,r),A[1][r]=M(1,r);for(r=0;r<256;r++)p=A[1][r],y=E(p),b=x(p),S[0][r]=p+(y<<8)+(b<<16)+(b<<24),S[2][r]=y+(b<<8)+(p<<16)+(b<<24),p=A[0][r],y=E(p),b=x(p),S[1][r]=b+(b<<8)+(y<<16)+(p<<24),S[3][r]=y+(p<<8)+(b<<16)+(y<<24);for(f=d.length/2,r=0;r<f;r++)a=d[r+r],u[r]=a,s=d[r+r+1],h[r]=s,l[f-r-1]=P(a,s);for(r=0;r<40;r+=2)a=16843009*r,s=a+16843009,a=C(a,u),s=Ye(C(s,h),8),i[r]=a+s&Ze,i[r+1]=Ye(a+2*s,9);for(r=0;r<256;r++)switch(a=s=o=c=r,f){case 4:a=A[1][a]^Je(l[3],0),s=A[0][s]^Je(l[3],1),o=A[0][o]^Je(l[3],2),c=A[1][c]^Je(l[3],3);case 3:a=A[1][a]^Je(l[2],0),s=A[1][s]^Je(l[2],1),o=A[0][o]^Je(l[2],2),c=A[0][c]^Je(l[2],3);case 2:n[0][r]=S[0][A[0][A[0][a]^Je(l[1],0)]^Je(l[0],0)],n[1][r]=S[1][A[0][A[1][s]^Je(l[1],1)]^Je(l[0],1)],n[2][r]=S[2][A[1][A[0][o]^Je(l[1],2)]^Je(l[0],2)],n[3][r]=S[3][A[1][A[1][c]^Je(l[1],3)]^Je(l[0],3)]}},close:function(){i=[],n=[[],[],[],[]]},encrypt:function(e,n){t=e,r=n;const a=[$e(t,r)^i[0],$e(t,r+4)^i[1],$e(t,r+8)^i[2],$e(t,r+12)^i[3]];for(let e=0;e<8;e++)o(e,a);return Xe(t,r,a[2]^i[4]),Xe(t,r+4,a[3]^i[5]),Xe(t,r+8,a[0]^i[6]),Xe(t,r+12,a[1]^i[7]),r+=16,t},decrypt:function(e,n){t=e,r=n;const a=[$e(t,r)^i[4],$e(t,r+4)^i[5],$e(t,r+8)^i[6],$e(t,r+12)^i[7]];for(let e=7;e>=0;e--)c(e,a);Xe(t,r,a[2]^i[0]),Xe(t,r+4,a[3]^i[1]),Xe(t,r+8,a[0]^i[2]),Xe(t,r+12,a[1]^i[3]),r+=16},finalize:function(){return t}}}(),this.tf.open(Array.from(e),0),this.encrypt=function(e){return this.tf.encrypt(Array.from(e),0)}}function et(){}function tt(e){this.bf=new et,this.bf.init(e),this.encrypt=function(e){return this.bf.encryptBlock(e)}}Qe.keySize=Qe.prototype.keySize=32,Qe.blockSize=Qe.prototype.blockSize=16,et.prototype.BLOCKSIZE=8,et.prototype.SBOXES=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]],et.prototype.PARRAY=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],et.prototype.NN=16,et.prototype._clean=function(e){if(e<0){e=(2147483647&e)+2147483648}return e},et.prototype._F=function(e){let t;const r=255&e,i=255&(e>>>=8),n=255&(e>>>=8),a=255&(e>>>=8);return t=this.sboxes[0][a]+this.sboxes[1][n],t^=this.sboxes[2][i],t+=this.sboxes[3][r],t},et.prototype._encryptBlock=function(e){let t,r=e[0],i=e[1];for(t=0;t<this.NN;++t){r^=this.parray[t],i=this._F(r)^i;const e=r;r=i,i=e}r^=this.parray[this.NN+0],i^=this.parray[this.NN+1],e[0]=this._clean(i),e[1]=this._clean(r)},et.prototype.encryptBlock=function(e){let t;const r=[0,0],i=this.BLOCKSIZE/2;for(t=0;t<this.BLOCKSIZE/2;++t)r[0]=r[0]<<8|255&e[t+0],r[1]=r[1]<<8|255&e[t+i];this._encryptBlock(r);const n=[];for(t=0;t<this.BLOCKSIZE/2;++t)n[t+0]=r[0]>>>24-8*t&255,n[t+i]=r[1]>>>24-8*t&255;return n},et.prototype._decryptBlock=function(e){let t,r=e[0],i=e[1];for(t=this.NN+1;t>1;--t){r^=this.parray[t],i=this._F(r)^i;const e=r;r=i,i=e}r^=this.parray[1],i^=this.parray[0],e[0]=this._clean(i),e[1]=this._clean(r)},et.prototype.init=function(e){let t,r=0;for(this.parray=[],t=0;t<this.NN+2;++t){let i=0;for(let t=0;t<4;++t)i=i<<8|255&e[r],++r>=e.length&&(r=0);this.parray[t]=this.PARRAY[t]^i}for(this.sboxes=[],t=0;t<4;++t)for(this.sboxes[t]=[],r=0;r<256;++r)this.sboxes[t][r]=this.SBOXES[t][r];const i=[0,0];for(t=0;t<this.NN+2;t+=2)this._encryptBlock(i),this.parray[t+0]=i[0],this.parray[t+1]=i[1];for(t=0;t<4;++t)for(r=0;r<256;r+=2)this._encryptBlock(i),this.sboxes[t][r+0]=i[0],this.sboxes[t][r+1]=i[1]},tt.keySize=tt.prototype.keySize=16,tt.blockSize=tt.prototype.blockSize=8;const rt=Le(128),it=Le(192),nt=Le(256);var at=/*#__PURE__*/Object.freeze({__proto__:null,aes128:rt,aes192:it,aes256:nt,des:function(e){this.key=e,this.encrypt=function(e,t){return je(We(this.key),e,!0,0,null,t)},this.decrypt=function(e,t){return je(We(this.key),e,!1,0,null,t)}},tripledes:He,cast5:Ve,twofish:Qe,blowfish:tt,idea:function(){throw Error("IDEA symmetric-key algorithm not implemented")}}),st=function(e,t,r){"use asm";var i=0,n=0,a=0,s=0,o=0,c=0,u=0;var h=0,d=0,f=0,l=0,p=0,y=0,b=0,m=0,g=0,w=0;var v=new e.Uint8Array(r);function _(e,t,r,c,u,h,d,f,l,p,y,b,m,g,w,v){e=e|0;t=t|0;r=r|0;c=c|0;u=u|0;h=h|0;d=d|0;f=f|0;l=l|0;p=p|0;y=y|0;b=b|0;m=m|0;g=g|0;w=w|0;v=v|0;var _=0,k=0,A=0,S=0,E=0,x=0,P=0,M=0,C=0,K=0,D=0,R=0,I=0,U=0,B=0,T=0,z=0,q=0,F=0,O=0,N=0,L=0,j=0,W=0,H=0,G=0,V=0,Z=0,Y=0,$=0,X=0,J=0,Q=0,ee=0,te=0,re=0,ie=0,ne=0,ae=0,se=0,oe=0,ce=0,ue=0,he=0,de=0,fe=0,le=0,pe=0,ye=0,be=0,me=0,ge=0,we=0,ve=0,_e=0,ke=0,Ae=0,Se=0,Ee=0,xe=0,Pe=0,Me=0,Ce=0,Ke=0,De=0,Re=0,Ie=0,Ue=0,Be=0,Te=0,ze=0;_=i;k=n;A=a;S=s;E=o;P=e+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=t+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=r+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=c+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=u+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=h+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=d+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=f+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=l+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=p+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=y+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=b+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=m+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=g+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=w+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;P=v+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=g^l^r^e;M=x<<1|x>>>31;P=M+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=w^p^c^t;C=x<<1|x>>>31;P=C+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=v^y^u^r;K=x<<1|x>>>31;P=K+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=M^b^h^c;D=x<<1|x>>>31;P=D+(_<<5|_>>>27)+E+(k&A|~k&S)+0x5a827999|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=C^m^d^u;R=x<<1|x>>>31;P=R+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=K^g^f^h;I=x<<1|x>>>31;P=I+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=D^w^l^d;U=x<<1|x>>>31;P=U+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=R^v^p^f;B=x<<1|x>>>31;P=B+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=I^M^y^l;T=x<<1|x>>>31;P=T+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=U^C^b^p;z=x<<1|x>>>31;P=z+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=B^K^m^y;q=x<<1|x>>>31;P=q+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=T^D^g^b;F=x<<1|x>>>31;P=F+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=z^R^w^m;O=x<<1|x>>>31;P=O+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=q^I^v^g;N=x<<1|x>>>31;P=N+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=F^U^M^w;L=x<<1|x>>>31;P=L+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=O^B^C^v;j=x<<1|x>>>31;P=j+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=N^T^K^M;W=x<<1|x>>>31;P=W+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=L^z^D^C;H=x<<1|x>>>31;P=H+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=j^q^R^K;G=x<<1|x>>>31;P=G+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=W^F^I^D;V=x<<1|x>>>31;P=V+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=H^O^U^R;Z=x<<1|x>>>31;P=Z+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=G^N^B^I;Y=x<<1|x>>>31;P=Y+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=V^L^T^U;$=x<<1|x>>>31;P=$+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Z^j^z^B;X=x<<1|x>>>31;P=X+(_<<5|_>>>27)+E+(k^A^S)+0x6ed9eba1|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Y^W^q^T;J=x<<1|x>>>31;P=J+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=$^H^F^z;Q=x<<1|x>>>31;P=Q+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=X^G^O^q;ee=x<<1|x>>>31;P=ee+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=J^V^N^F;te=x<<1|x>>>31;P=te+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Q^Z^L^O;re=x<<1|x>>>31;P=re+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=ee^Y^j^N;ie=x<<1|x>>>31;P=ie+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=te^$^W^L;ne=x<<1|x>>>31;P=ne+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=re^X^H^j;ae=x<<1|x>>>31;P=ae+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=ie^J^G^W;se=x<<1|x>>>31;P=se+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=ne^Q^V^H;oe=x<<1|x>>>31;P=oe+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=ae^ee^Z^G;ce=x<<1|x>>>31;P=ce+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=se^te^Y^V;ue=x<<1|x>>>31;P=ue+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=oe^re^$^Z;he=x<<1|x>>>31;P=he+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=ce^ie^X^Y;de=x<<1|x>>>31;P=de+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=ue^ne^J^$;fe=x<<1|x>>>31;P=fe+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=he^ae^Q^X;le=x<<1|x>>>31;P=le+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=de^se^ee^J;pe=x<<1|x>>>31;P=pe+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=fe^oe^te^Q;ye=x<<1|x>>>31;P=ye+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=le^ce^re^ee;be=x<<1|x>>>31;P=be+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=pe^ue^ie^te;me=x<<1|x>>>31;P=me+(_<<5|_>>>27)+E+(k&A|k&S|A&S)-0x70e44324|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=ye^he^ne^re;ge=x<<1|x>>>31;P=ge+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=be^de^ae^ie;we=x<<1|x>>>31;P=we+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=me^fe^se^ne;ve=x<<1|x>>>31;P=ve+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=ge^le^oe^ae;_e=x<<1|x>>>31;P=_e+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=we^pe^ce^se;ke=x<<1|x>>>31;P=ke+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=ve^ye^ue^oe;Ae=x<<1|x>>>31;P=Ae+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=_e^be^he^ce;Se=x<<1|x>>>31;P=Se+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=ke^me^de^ue;Ee=x<<1|x>>>31;P=Ee+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Ae^ge^fe^he;xe=x<<1|x>>>31;P=xe+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Se^we^le^de;Pe=x<<1|x>>>31;P=Pe+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Ee^ve^pe^fe;Me=x<<1|x>>>31;P=Me+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=xe^_e^ye^le;Ce=x<<1|x>>>31;P=Ce+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Pe^ke^be^pe;Ke=x<<1|x>>>31;P=Ke+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Me^Ae^me^ye;De=x<<1|x>>>31;P=De+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Ce^Se^ge^be;Re=x<<1|x>>>31;P=Re+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Ke^Ee^we^me;Ie=x<<1|x>>>31;P=Ie+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=De^xe^ve^ge;Ue=x<<1|x>>>31;P=Ue+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Re^Pe^_e^we;Be=x<<1|x>>>31;P=Be+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Ie^Me^ke^ve;Te=x<<1|x>>>31;P=Te+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;x=Ue^Ce^Ae^_e;ze=x<<1|x>>>31;P=ze+(_<<5|_>>>27)+E+(k^A^S)-0x359d3e2a|0;E=S;S=A;A=k<<30|k>>>2;k=_;_=P;i=i+_|0;n=n+k|0;a=a+A|0;s=s+S|0;o=o+E|0}function k(e){e=e|0;_(v[e|0]<<24|v[e|1]<<16|v[e|2]<<8|v[e|3],v[e|4]<<24|v[e|5]<<16|v[e|6]<<8|v[e|7],v[e|8]<<24|v[e|9]<<16|v[e|10]<<8|v[e|11],v[e|12]<<24|v[e|13]<<16|v[e|14]<<8|v[e|15],v[e|16]<<24|v[e|17]<<16|v[e|18]<<8|v[e|19],v[e|20]<<24|v[e|21]<<16|v[e|22]<<8|v[e|23],v[e|24]<<24|v[e|25]<<16|v[e|26]<<8|v[e|27],v[e|28]<<24|v[e|29]<<16|v[e|30]<<8|v[e|31],v[e|32]<<24|v[e|33]<<16|v[e|34]<<8|v[e|35],v[e|36]<<24|v[e|37]<<16|v[e|38]<<8|v[e|39],v[e|40]<<24|v[e|41]<<16|v[e|42]<<8|v[e|43],v[e|44]<<24|v[e|45]<<16|v[e|46]<<8|v[e|47],v[e|48]<<24|v[e|49]<<16|v[e|50]<<8|v[e|51],v[e|52]<<24|v[e|53]<<16|v[e|54]<<8|v[e|55],v[e|56]<<24|v[e|57]<<16|v[e|58]<<8|v[e|59],v[e|60]<<24|v[e|61]<<16|v[e|62]<<8|v[e|63])}function A(e){e=e|0;v[e|0]=i>>>24;v[e|1]=i>>>16&255;v[e|2]=i>>>8&255;v[e|3]=i&255;v[e|4]=n>>>24;v[e|5]=n>>>16&255;v[e|6]=n>>>8&255;v[e|7]=n&255;v[e|8]=a>>>24;v[e|9]=a>>>16&255;v[e|10]=a>>>8&255;v[e|11]=a&255;v[e|12]=s>>>24;v[e|13]=s>>>16&255;v[e|14]=s>>>8&255;v[e|15]=s&255;v[e|16]=o>>>24;v[e|17]=o>>>16&255;v[e|18]=o>>>8&255;v[e|19]=o&255}function S(){i=0x67452301;n=0xefcdab89;a=0x98badcfe;s=0x10325476;o=0xc3d2e1f0;c=u=0}function E(e,t,r,h,d,f,l){e=e|0;t=t|0;r=r|0;h=h|0;d=d|0;f=f|0;l=l|0;i=e;n=t;a=r;s=h;o=d;c=f;u=l}function x(e,t){e=e|0;t=t|0;var r=0;if(e&63)return-1;while((t|0)>=64){k(e);e=e+64|0;t=t-64|0;r=r+64|0}c=c+r|0;if(c>>>0<r>>>0)u=u+1|0;return r|0}function P(e,t,r){e=e|0;t=t|0;r=r|0;var i=0,n=0;if(e&63)return-1;if(~r)if(r&31)return-1;if((t|0)>=64){i=x(e,t)|0;if((i|0)==-1)return-1;e=e+i|0;t=t-i|0}i=i+t|0;c=c+t|0;if(c>>>0<t>>>0)u=u+1|0;v[e|t]=0x80;if((t|0)>=56){for(n=t+1|0;(n|0)<64;n=n+1|0)v[e|n]=0x00;k(e);t=0;v[e|0]=0}for(n=t+1|0;(n|0)<59;n=n+1|0)v[e|n]=0;v[e|56]=u>>>21&255;v[e|57]=u>>>13&255;v[e|58]=u>>>5&255;v[e|59]=u<<3&255|c>>>29;v[e|60]=c>>>21&255;v[e|61]=c>>>13&255;v[e|62]=c>>>5&255;v[e|63]=c<<3&255;k(e);if(~r)A(r);return i|0}function M(){i=h;n=d;a=f;s=l;o=p;c=64;u=0}function C(){i=y;n=b;a=m;s=g;o=w;c=64;u=0}function K(e,t,r,v,k,A,E,x,P,M,C,K,D,R,I,U){e=e|0;t=t|0;r=r|0;v=v|0;k=k|0;A=A|0;E=E|0;x=x|0;P=P|0;M=M|0;C=C|0;K=K|0;D=D|0;R=R|0;I=I|0;U=U|0;S();_(e^0x5c5c5c5c,t^0x5c5c5c5c,r^0x5c5c5c5c,v^0x5c5c5c5c,k^0x5c5c5c5c,A^0x5c5c5c5c,E^0x5c5c5c5c,x^0x5c5c5c5c,P^0x5c5c5c5c,M^0x5c5c5c5c,C^0x5c5c5c5c,K^0x5c5c5c5c,D^0x5c5c5c5c,R^0x5c5c5c5c,I^0x5c5c5c5c,U^0x5c5c5c5c);y=i;b=n;m=a;g=s;w=o;S();_(e^0x36363636,t^0x36363636,r^0x36363636,v^0x36363636,k^0x36363636,A^0x36363636,E^0x36363636,x^0x36363636,P^0x36363636,M^0x36363636,C^0x36363636,K^0x36363636,D^0x36363636,R^0x36363636,I^0x36363636,U^0x36363636);h=i;d=n;f=a;l=s;p=o;c=64;u=0}function D(e,t,r){e=e|0;t=t|0;r=r|0;var c=0,u=0,h=0,d=0,f=0,l=0;if(e&63)return-1;if(~r)if(r&31)return-1;l=P(e,t,-1)|0;c=i,u=n,h=a,d=s,f=o;C();_(c,u,h,d,f,0x80000000,0,0,0,0,0,0,0,0,0,672);if(~r)A(r);return l|0}function R(e,t,r,c,u){e=e|0;t=t|0;r=r|0;c=c|0;u=u|0;var h=0,d=0,f=0,l=0,p=0,y=0,b=0,m=0,g=0,w=0;if(e&63)return-1;if(~u)if(u&31)return-1;v[e+t|0]=r>>>24;v[e+t+1|0]=r>>>16&255;v[e+t+2|0]=r>>>8&255;v[e+t+3|0]=r&255;D(e,t+4|0,-1)|0;h=y=i,d=b=n,f=m=a,l=g=s,p=w=o;c=c-1|0;while((c|0)>0){M();_(y,b,m,g,w,0x80000000,0,0,0,0,0,0,0,0,0,672);y=i,b=n,m=a,g=s,w=o;C();_(y,b,m,g,w,0x80000000,0,0,0,0,0,0,0,0,0,672);y=i,b=n,m=a,g=s,w=o;h=h^i;d=d^n;f=f^a;l=l^s;p=p^o;c=c-1|0}i=h;n=d;a=f;s=l;o=p;if(~u)A(u);return 0}return{reset:S,init:E,process:x,finish:P,hmac_reset:M,hmac_init:K,hmac_finish:D,pbkdf2_generate_block:R}};class ot{constructor(){this.pos=0,this.len=0}reset(){const{asm:e}=this.acquire_asm();return this.result=null,this.pos=0,this.len=0,e.reset(),this}process(e){if(null!==this.result)throw new Be("state must be reset before processing new data");const{asm:t,heap:r}=this.acquire_asm();let i=this.pos,n=this.len,a=0,s=e.length,o=0;for(;s>0;)o=Ie(r,i+n,e,a,s),n+=o,a+=o,s-=o,o=t.process(i,n),i+=o,n-=o,n||(i=0);return this.pos=i,this.len=n,this}finish(){if(null!==this.result)throw new Be("state must be reset before processing new data");const{asm:e,heap:t}=this.acquire_asm();return e.finish(this.pos,this.len,0),this.result=new Uint8Array(this.HASH_SIZE),this.result.set(t.subarray(0,this.HASH_SIZE)),this.pos=0,this.len=0,this.release_asm(),this}}const ct=[],ut=[];class ht extends ot{constructor(){super(),this.NAME="sha1",this.BLOCK_SIZE=64,this.HASH_SIZE=20,this.acquire_asm()}acquire_asm(){return void 0!==this.heap&&void 0!==this.asm||(this.heap=ct.pop()||Re(),this.asm=ut.pop()||st({Uint8Array},null,this.heap.buffer),this.reset()),{heap:this.heap,asm:this.asm}}release_asm(){void 0!==this.heap&&void 0!==this.asm&&(ct.push(this.heap),ut.push(this.asm)),this.heap=void 0,this.asm=void 0}static bytes(e){return(new ht).process(e).finish().result}}ht.NAME="sha1",ht.heap_pool=[],ht.asm_pool=[],ht.asm_function=st;const dt=[],ft=[];class lt extends ot{constructor(){super(),this.NAME="sha256",this.BLOCK_SIZE=64,this.HASH_SIZE=32,this.acquire_asm()}acquire_asm(){return void 0!==this.heap&&void 0!==this.asm||(this.heap=dt.pop()||Re(),this.asm=ft.pop()||function(e,t,r){"use asm";var i=0,n=0,a=0,s=0,o=0,c=0,u=0,h=0,d=0,f=0,l=0,p=0,y=0,b=0,m=0,g=0,w=0,v=0,_=0,k=0,A=0,S=0,E=0,x=0,P=0,M=0,C=new e.Uint8Array(r);function K(e,t,r,d,f,l,p,y,b,m,g,w,v,_,k,A){e=e|0;t=t|0;r=r|0;d=d|0;f=f|0;l=l|0;p=p|0;y=y|0;b=b|0;m=m|0;g=g|0;w=w|0;v=v|0;_=_|0;k=k|0;A=A|0;var S=0,E=0,x=0,P=0,M=0,C=0,K=0,D=0;S=i;E=n;x=a;P=s;M=o;C=c;K=u;D=h;D=e+D+(M>>>6^M>>>11^M>>>25^M<<26^M<<21^M<<7)+(K^M&(C^K))+0x428a2f98|0;P=P+D|0;D=D+(S&E^x&(S^E))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;K=t+K+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(C^P&(M^C))+0x71374491|0;x=x+K|0;K=K+(D&S^E&(D^S))+(D>>>2^D>>>13^D>>>22^D<<30^D<<19^D<<10)|0;C=r+C+(x>>>6^x>>>11^x>>>25^x<<26^x<<21^x<<7)+(M^x&(P^M))+0xb5c0fbcf|0;E=E+C|0;C=C+(K&D^S&(K^D))+(K>>>2^K>>>13^K>>>22^K<<30^K<<19^K<<10)|0;M=d+M+(E>>>6^E>>>11^E>>>25^E<<26^E<<21^E<<7)+(P^E&(x^P))+0xe9b5dba5|0;S=S+M|0;M=M+(C&K^D&(C^K))+(C>>>2^C>>>13^C>>>22^C<<30^C<<19^C<<10)|0;P=f+P+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(x^S&(E^x))+0x3956c25b|0;D=D+P|0;P=P+(M&C^K&(M^C))+(M>>>2^M>>>13^M>>>22^M<<30^M<<19^M<<10)|0;x=l+x+(D>>>6^D>>>11^D>>>25^D<<26^D<<21^D<<7)+(E^D&(S^E))+0x59f111f1|0;K=K+x|0;x=x+(P&M^C&(P^M))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;E=p+E+(K>>>6^K>>>11^K>>>25^K<<26^K<<21^K<<7)+(S^K&(D^S))+0x923f82a4|0;C=C+E|0;E=E+(x&P^M&(x^P))+(x>>>2^x>>>13^x>>>22^x<<30^x<<19^x<<10)|0;S=y+S+(C>>>6^C>>>11^C>>>25^C<<26^C<<21^C<<7)+(D^C&(K^D))+0xab1c5ed5|0;M=M+S|0;S=S+(E&x^P&(E^x))+(E>>>2^E>>>13^E>>>22^E<<30^E<<19^E<<10)|0;D=b+D+(M>>>6^M>>>11^M>>>25^M<<26^M<<21^M<<7)+(K^M&(C^K))+0xd807aa98|0;P=P+D|0;D=D+(S&E^x&(S^E))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;K=m+K+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(C^P&(M^C))+0x12835b01|0;x=x+K|0;K=K+(D&S^E&(D^S))+(D>>>2^D>>>13^D>>>22^D<<30^D<<19^D<<10)|0;C=g+C+(x>>>6^x>>>11^x>>>25^x<<26^x<<21^x<<7)+(M^x&(P^M))+0x243185be|0;E=E+C|0;C=C+(K&D^S&(K^D))+(K>>>2^K>>>13^K>>>22^K<<30^K<<19^K<<10)|0;M=w+M+(E>>>6^E>>>11^E>>>25^E<<26^E<<21^E<<7)+(P^E&(x^P))+0x550c7dc3|0;S=S+M|0;M=M+(C&K^D&(C^K))+(C>>>2^C>>>13^C>>>22^C<<30^C<<19^C<<10)|0;P=v+P+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(x^S&(E^x))+0x72be5d74|0;D=D+P|0;P=P+(M&C^K&(M^C))+(M>>>2^M>>>13^M>>>22^M<<30^M<<19^M<<10)|0;x=_+x+(D>>>6^D>>>11^D>>>25^D<<26^D<<21^D<<7)+(E^D&(S^E))+0x80deb1fe|0;K=K+x|0;x=x+(P&M^C&(P^M))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;E=k+E+(K>>>6^K>>>11^K>>>25^K<<26^K<<21^K<<7)+(S^K&(D^S))+0x9bdc06a7|0;C=C+E|0;E=E+(x&P^M&(x^P))+(x>>>2^x>>>13^x>>>22^x<<30^x<<19^x<<10)|0;S=A+S+(C>>>6^C>>>11^C>>>25^C<<26^C<<21^C<<7)+(D^C&(K^D))+0xc19bf174|0;M=M+S|0;S=S+(E&x^P&(E^x))+(E>>>2^E>>>13^E>>>22^E<<30^E<<19^E<<10)|0;e=(t>>>7^t>>>18^t>>>3^t<<25^t<<14)+(k>>>17^k>>>19^k>>>10^k<<15^k<<13)+e+m|0;D=e+D+(M>>>6^M>>>11^M>>>25^M<<26^M<<21^M<<7)+(K^M&(C^K))+0xe49b69c1|0;P=P+D|0;D=D+(S&E^x&(S^E))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;t=(r>>>7^r>>>18^r>>>3^r<<25^r<<14)+(A>>>17^A>>>19^A>>>10^A<<15^A<<13)+t+g|0;K=t+K+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(C^P&(M^C))+0xefbe4786|0;x=x+K|0;K=K+(D&S^E&(D^S))+(D>>>2^D>>>13^D>>>22^D<<30^D<<19^D<<10)|0;r=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+r+w|0;C=r+C+(x>>>6^x>>>11^x>>>25^x<<26^x<<21^x<<7)+(M^x&(P^M))+0x0fc19dc6|0;E=E+C|0;C=C+(K&D^S&(K^D))+(K>>>2^K>>>13^K>>>22^K<<30^K<<19^K<<10)|0;d=(f>>>7^f>>>18^f>>>3^f<<25^f<<14)+(t>>>17^t>>>19^t>>>10^t<<15^t<<13)+d+v|0;M=d+M+(E>>>6^E>>>11^E>>>25^E<<26^E<<21^E<<7)+(P^E&(x^P))+0x240ca1cc|0;S=S+M|0;M=M+(C&K^D&(C^K))+(C>>>2^C>>>13^C>>>22^C<<30^C<<19^C<<10)|0;f=(l>>>7^l>>>18^l>>>3^l<<25^l<<14)+(r>>>17^r>>>19^r>>>10^r<<15^r<<13)+f+_|0;P=f+P+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(x^S&(E^x))+0x2de92c6f|0;D=D+P|0;P=P+(M&C^K&(M^C))+(M>>>2^M>>>13^M>>>22^M<<30^M<<19^M<<10)|0;l=(p>>>7^p>>>18^p>>>3^p<<25^p<<14)+(d>>>17^d>>>19^d>>>10^d<<15^d<<13)+l+k|0;x=l+x+(D>>>6^D>>>11^D>>>25^D<<26^D<<21^D<<7)+(E^D&(S^E))+0x4a7484aa|0;K=K+x|0;x=x+(P&M^C&(P^M))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;p=(y>>>7^y>>>18^y>>>3^y<<25^y<<14)+(f>>>17^f>>>19^f>>>10^f<<15^f<<13)+p+A|0;E=p+E+(K>>>6^K>>>11^K>>>25^K<<26^K<<21^K<<7)+(S^K&(D^S))+0x5cb0a9dc|0;C=C+E|0;E=E+(x&P^M&(x^P))+(x>>>2^x>>>13^x>>>22^x<<30^x<<19^x<<10)|0;y=(b>>>7^b>>>18^b>>>3^b<<25^b<<14)+(l>>>17^l>>>19^l>>>10^l<<15^l<<13)+y+e|0;S=y+S+(C>>>6^C>>>11^C>>>25^C<<26^C<<21^C<<7)+(D^C&(K^D))+0x76f988da|0;M=M+S|0;S=S+(E&x^P&(E^x))+(E>>>2^E>>>13^E>>>22^E<<30^E<<19^E<<10)|0;b=(m>>>7^m>>>18^m>>>3^m<<25^m<<14)+(p>>>17^p>>>19^p>>>10^p<<15^p<<13)+b+t|0;D=b+D+(M>>>6^M>>>11^M>>>25^M<<26^M<<21^M<<7)+(K^M&(C^K))+0x983e5152|0;P=P+D|0;D=D+(S&E^x&(S^E))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;m=(g>>>7^g>>>18^g>>>3^g<<25^g<<14)+(y>>>17^y>>>19^y>>>10^y<<15^y<<13)+m+r|0;K=m+K+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(C^P&(M^C))+0xa831c66d|0;x=x+K|0;K=K+(D&S^E&(D^S))+(D>>>2^D>>>13^D>>>22^D<<30^D<<19^D<<10)|0;g=(w>>>7^w>>>18^w>>>3^w<<25^w<<14)+(b>>>17^b>>>19^b>>>10^b<<15^b<<13)+g+d|0;C=g+C+(x>>>6^x>>>11^x>>>25^x<<26^x<<21^x<<7)+(M^x&(P^M))+0xb00327c8|0;E=E+C|0;C=C+(K&D^S&(K^D))+(K>>>2^K>>>13^K>>>22^K<<30^K<<19^K<<10)|0;w=(v>>>7^v>>>18^v>>>3^v<<25^v<<14)+(m>>>17^m>>>19^m>>>10^m<<15^m<<13)+w+f|0;M=w+M+(E>>>6^E>>>11^E>>>25^E<<26^E<<21^E<<7)+(P^E&(x^P))+0xbf597fc7|0;S=S+M|0;M=M+(C&K^D&(C^K))+(C>>>2^C>>>13^C>>>22^C<<30^C<<19^C<<10)|0;v=(_>>>7^_>>>18^_>>>3^_<<25^_<<14)+(g>>>17^g>>>19^g>>>10^g<<15^g<<13)+v+l|0;P=v+P+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(x^S&(E^x))+0xc6e00bf3|0;D=D+P|0;P=P+(M&C^K&(M^C))+(M>>>2^M>>>13^M>>>22^M<<30^M<<19^M<<10)|0;_=(k>>>7^k>>>18^k>>>3^k<<25^k<<14)+(w>>>17^w>>>19^w>>>10^w<<15^w<<13)+_+p|0;x=_+x+(D>>>6^D>>>11^D>>>25^D<<26^D<<21^D<<7)+(E^D&(S^E))+0xd5a79147|0;K=K+x|0;x=x+(P&M^C&(P^M))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;k=(A>>>7^A>>>18^A>>>3^A<<25^A<<14)+(v>>>17^v>>>19^v>>>10^v<<15^v<<13)+k+y|0;E=k+E+(K>>>6^K>>>11^K>>>25^K<<26^K<<21^K<<7)+(S^K&(D^S))+0x06ca6351|0;C=C+E|0;E=E+(x&P^M&(x^P))+(x>>>2^x>>>13^x>>>22^x<<30^x<<19^x<<10)|0;A=(e>>>7^e>>>18^e>>>3^e<<25^e<<14)+(_>>>17^_>>>19^_>>>10^_<<15^_<<13)+A+b|0;S=A+S+(C>>>6^C>>>11^C>>>25^C<<26^C<<21^C<<7)+(D^C&(K^D))+0x14292967|0;M=M+S|0;S=S+(E&x^P&(E^x))+(E>>>2^E>>>13^E>>>22^E<<30^E<<19^E<<10)|0;e=(t>>>7^t>>>18^t>>>3^t<<25^t<<14)+(k>>>17^k>>>19^k>>>10^k<<15^k<<13)+e+m|0;D=e+D+(M>>>6^M>>>11^M>>>25^M<<26^M<<21^M<<7)+(K^M&(C^K))+0x27b70a85|0;P=P+D|0;D=D+(S&E^x&(S^E))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;t=(r>>>7^r>>>18^r>>>3^r<<25^r<<14)+(A>>>17^A>>>19^A>>>10^A<<15^A<<13)+t+g|0;K=t+K+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(C^P&(M^C))+0x2e1b2138|0;x=x+K|0;K=K+(D&S^E&(D^S))+(D>>>2^D>>>13^D>>>22^D<<30^D<<19^D<<10)|0;r=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+r+w|0;C=r+C+(x>>>6^x>>>11^x>>>25^x<<26^x<<21^x<<7)+(M^x&(P^M))+0x4d2c6dfc|0;E=E+C|0;C=C+(K&D^S&(K^D))+(K>>>2^K>>>13^K>>>22^K<<30^K<<19^K<<10)|0;d=(f>>>7^f>>>18^f>>>3^f<<25^f<<14)+(t>>>17^t>>>19^t>>>10^t<<15^t<<13)+d+v|0;M=d+M+(E>>>6^E>>>11^E>>>25^E<<26^E<<21^E<<7)+(P^E&(x^P))+0x53380d13|0;S=S+M|0;M=M+(C&K^D&(C^K))+(C>>>2^C>>>13^C>>>22^C<<30^C<<19^C<<10)|0;f=(l>>>7^l>>>18^l>>>3^l<<25^l<<14)+(r>>>17^r>>>19^r>>>10^r<<15^r<<13)+f+_|0;P=f+P+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(x^S&(E^x))+0x650a7354|0;D=D+P|0;P=P+(M&C^K&(M^C))+(M>>>2^M>>>13^M>>>22^M<<30^M<<19^M<<10)|0;l=(p>>>7^p>>>18^p>>>3^p<<25^p<<14)+(d>>>17^d>>>19^d>>>10^d<<15^d<<13)+l+k|0;x=l+x+(D>>>6^D>>>11^D>>>25^D<<26^D<<21^D<<7)+(E^D&(S^E))+0x766a0abb|0;K=K+x|0;x=x+(P&M^C&(P^M))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;p=(y>>>7^y>>>18^y>>>3^y<<25^y<<14)+(f>>>17^f>>>19^f>>>10^f<<15^f<<13)+p+A|0;E=p+E+(K>>>6^K>>>11^K>>>25^K<<26^K<<21^K<<7)+(S^K&(D^S))+0x81c2c92e|0;C=C+E|0;E=E+(x&P^M&(x^P))+(x>>>2^x>>>13^x>>>22^x<<30^x<<19^x<<10)|0;y=(b>>>7^b>>>18^b>>>3^b<<25^b<<14)+(l>>>17^l>>>19^l>>>10^l<<15^l<<13)+y+e|0;S=y+S+(C>>>6^C>>>11^C>>>25^C<<26^C<<21^C<<7)+(D^C&(K^D))+0x92722c85|0;M=M+S|0;S=S+(E&x^P&(E^x))+(E>>>2^E>>>13^E>>>22^E<<30^E<<19^E<<10)|0;b=(m>>>7^m>>>18^m>>>3^m<<25^m<<14)+(p>>>17^p>>>19^p>>>10^p<<15^p<<13)+b+t|0;D=b+D+(M>>>6^M>>>11^M>>>25^M<<26^M<<21^M<<7)+(K^M&(C^K))+0xa2bfe8a1|0;P=P+D|0;D=D+(S&E^x&(S^E))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;m=(g>>>7^g>>>18^g>>>3^g<<25^g<<14)+(y>>>17^y>>>19^y>>>10^y<<15^y<<13)+m+r|0;K=m+K+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(C^P&(M^C))+0xa81a664b|0;x=x+K|0;K=K+(D&S^E&(D^S))+(D>>>2^D>>>13^D>>>22^D<<30^D<<19^D<<10)|0;g=(w>>>7^w>>>18^w>>>3^w<<25^w<<14)+(b>>>17^b>>>19^b>>>10^b<<15^b<<13)+g+d|0;C=g+C+(x>>>6^x>>>11^x>>>25^x<<26^x<<21^x<<7)+(M^x&(P^M))+0xc24b8b70|0;E=E+C|0;C=C+(K&D^S&(K^D))+(K>>>2^K>>>13^K>>>22^K<<30^K<<19^K<<10)|0;w=(v>>>7^v>>>18^v>>>3^v<<25^v<<14)+(m>>>17^m>>>19^m>>>10^m<<15^m<<13)+w+f|0;M=w+M+(E>>>6^E>>>11^E>>>25^E<<26^E<<21^E<<7)+(P^E&(x^P))+0xc76c51a3|0;S=S+M|0;M=M+(C&K^D&(C^K))+(C>>>2^C>>>13^C>>>22^C<<30^C<<19^C<<10)|0;v=(_>>>7^_>>>18^_>>>3^_<<25^_<<14)+(g>>>17^g>>>19^g>>>10^g<<15^g<<13)+v+l|0;P=v+P+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(x^S&(E^x))+0xd192e819|0;D=D+P|0;P=P+(M&C^K&(M^C))+(M>>>2^M>>>13^M>>>22^M<<30^M<<19^M<<10)|0;_=(k>>>7^k>>>18^k>>>3^k<<25^k<<14)+(w>>>17^w>>>19^w>>>10^w<<15^w<<13)+_+p|0;x=_+x+(D>>>6^D>>>11^D>>>25^D<<26^D<<21^D<<7)+(E^D&(S^E))+0xd6990624|0;K=K+x|0;x=x+(P&M^C&(P^M))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;k=(A>>>7^A>>>18^A>>>3^A<<25^A<<14)+(v>>>17^v>>>19^v>>>10^v<<15^v<<13)+k+y|0;E=k+E+(K>>>6^K>>>11^K>>>25^K<<26^K<<21^K<<7)+(S^K&(D^S))+0xf40e3585|0;C=C+E|0;E=E+(x&P^M&(x^P))+(x>>>2^x>>>13^x>>>22^x<<30^x<<19^x<<10)|0;A=(e>>>7^e>>>18^e>>>3^e<<25^e<<14)+(_>>>17^_>>>19^_>>>10^_<<15^_<<13)+A+b|0;S=A+S+(C>>>6^C>>>11^C>>>25^C<<26^C<<21^C<<7)+(D^C&(K^D))+0x106aa070|0;M=M+S|0;S=S+(E&x^P&(E^x))+(E>>>2^E>>>13^E>>>22^E<<30^E<<19^E<<10)|0;e=(t>>>7^t>>>18^t>>>3^t<<25^t<<14)+(k>>>17^k>>>19^k>>>10^k<<15^k<<13)+e+m|0;D=e+D+(M>>>6^M>>>11^M>>>25^M<<26^M<<21^M<<7)+(K^M&(C^K))+0x19a4c116|0;P=P+D|0;D=D+(S&E^x&(S^E))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;t=(r>>>7^r>>>18^r>>>3^r<<25^r<<14)+(A>>>17^A>>>19^A>>>10^A<<15^A<<13)+t+g|0;K=t+K+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(C^P&(M^C))+0x1e376c08|0;x=x+K|0;K=K+(D&S^E&(D^S))+(D>>>2^D>>>13^D>>>22^D<<30^D<<19^D<<10)|0;r=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+r+w|0;C=r+C+(x>>>6^x>>>11^x>>>25^x<<26^x<<21^x<<7)+(M^x&(P^M))+0x2748774c|0;E=E+C|0;C=C+(K&D^S&(K^D))+(K>>>2^K>>>13^K>>>22^K<<30^K<<19^K<<10)|0;d=(f>>>7^f>>>18^f>>>3^f<<25^f<<14)+(t>>>17^t>>>19^t>>>10^t<<15^t<<13)+d+v|0;M=d+M+(E>>>6^E>>>11^E>>>25^E<<26^E<<21^E<<7)+(P^E&(x^P))+0x34b0bcb5|0;S=S+M|0;M=M+(C&K^D&(C^K))+(C>>>2^C>>>13^C>>>22^C<<30^C<<19^C<<10)|0;f=(l>>>7^l>>>18^l>>>3^l<<25^l<<14)+(r>>>17^r>>>19^r>>>10^r<<15^r<<13)+f+_|0;P=f+P+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(x^S&(E^x))+0x391c0cb3|0;D=D+P|0;P=P+(M&C^K&(M^C))+(M>>>2^M>>>13^M>>>22^M<<30^M<<19^M<<10)|0;l=(p>>>7^p>>>18^p>>>3^p<<25^p<<14)+(d>>>17^d>>>19^d>>>10^d<<15^d<<13)+l+k|0;x=l+x+(D>>>6^D>>>11^D>>>25^D<<26^D<<21^D<<7)+(E^D&(S^E))+0x4ed8aa4a|0;K=K+x|0;x=x+(P&M^C&(P^M))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;p=(y>>>7^y>>>18^y>>>3^y<<25^y<<14)+(f>>>17^f>>>19^f>>>10^f<<15^f<<13)+p+A|0;E=p+E+(K>>>6^K>>>11^K>>>25^K<<26^K<<21^K<<7)+(S^K&(D^S))+0x5b9cca4f|0;C=C+E|0;E=E+(x&P^M&(x^P))+(x>>>2^x>>>13^x>>>22^x<<30^x<<19^x<<10)|0;y=(b>>>7^b>>>18^b>>>3^b<<25^b<<14)+(l>>>17^l>>>19^l>>>10^l<<15^l<<13)+y+e|0;S=y+S+(C>>>6^C>>>11^C>>>25^C<<26^C<<21^C<<7)+(D^C&(K^D))+0x682e6ff3|0;M=M+S|0;S=S+(E&x^P&(E^x))+(E>>>2^E>>>13^E>>>22^E<<30^E<<19^E<<10)|0;b=(m>>>7^m>>>18^m>>>3^m<<25^m<<14)+(p>>>17^p>>>19^p>>>10^p<<15^p<<13)+b+t|0;D=b+D+(M>>>6^M>>>11^M>>>25^M<<26^M<<21^M<<7)+(K^M&(C^K))+0x748f82ee|0;P=P+D|0;D=D+(S&E^x&(S^E))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;m=(g>>>7^g>>>18^g>>>3^g<<25^g<<14)+(y>>>17^y>>>19^y>>>10^y<<15^y<<13)+m+r|0;K=m+K+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(C^P&(M^C))+0x78a5636f|0;x=x+K|0;K=K+(D&S^E&(D^S))+(D>>>2^D>>>13^D>>>22^D<<30^D<<19^D<<10)|0;g=(w>>>7^w>>>18^w>>>3^w<<25^w<<14)+(b>>>17^b>>>19^b>>>10^b<<15^b<<13)+g+d|0;C=g+C+(x>>>6^x>>>11^x>>>25^x<<26^x<<21^x<<7)+(M^x&(P^M))+0x84c87814|0;E=E+C|0;C=C+(K&D^S&(K^D))+(K>>>2^K>>>13^K>>>22^K<<30^K<<19^K<<10)|0;w=(v>>>7^v>>>18^v>>>3^v<<25^v<<14)+(m>>>17^m>>>19^m>>>10^m<<15^m<<13)+w+f|0;M=w+M+(E>>>6^E>>>11^E>>>25^E<<26^E<<21^E<<7)+(P^E&(x^P))+0x8cc70208|0;S=S+M|0;M=M+(C&K^D&(C^K))+(C>>>2^C>>>13^C>>>22^C<<30^C<<19^C<<10)|0;v=(_>>>7^_>>>18^_>>>3^_<<25^_<<14)+(g>>>17^g>>>19^g>>>10^g<<15^g<<13)+v+l|0;P=v+P+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(x^S&(E^x))+0x90befffa|0;D=D+P|0;P=P+(M&C^K&(M^C))+(M>>>2^M>>>13^M>>>22^M<<30^M<<19^M<<10)|0;_=(k>>>7^k>>>18^k>>>3^k<<25^k<<14)+(w>>>17^w>>>19^w>>>10^w<<15^w<<13)+_+p|0;x=_+x+(D>>>6^D>>>11^D>>>25^D<<26^D<<21^D<<7)+(E^D&(S^E))+0xa4506ceb|0;K=K+x|0;x=x+(P&M^C&(P^M))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;k=(A>>>7^A>>>18^A>>>3^A<<25^A<<14)+(v>>>17^v>>>19^v>>>10^v<<15^v<<13)+k+y|0;E=k+E+(K>>>6^K>>>11^K>>>25^K<<26^K<<21^K<<7)+(S^K&(D^S))+0xbef9a3f7|0;C=C+E|0;E=E+(x&P^M&(x^P))+(x>>>2^x>>>13^x>>>22^x<<30^x<<19^x<<10)|0;A=(e>>>7^e>>>18^e>>>3^e<<25^e<<14)+(_>>>17^_>>>19^_>>>10^_<<15^_<<13)+A+b|0;S=A+S+(C>>>6^C>>>11^C>>>25^C<<26^C<<21^C<<7)+(D^C&(K^D))+0xc67178f2|0;M=M+S|0;S=S+(E&x^P&(E^x))+(E>>>2^E>>>13^E>>>22^E<<30^E<<19^E<<10)|0;i=i+S|0;n=n+E|0;a=a+x|0;s=s+P|0;o=o+M|0;c=c+C|0;u=u+K|0;h=h+D|0}function D(e){e=e|0;K(C[e|0]<<24|C[e|1]<<16|C[e|2]<<8|C[e|3],C[e|4]<<24|C[e|5]<<16|C[e|6]<<8|C[e|7],C[e|8]<<24|C[e|9]<<16|C[e|10]<<8|C[e|11],C[e|12]<<24|C[e|13]<<16|C[e|14]<<8|C[e|15],C[e|16]<<24|C[e|17]<<16|C[e|18]<<8|C[e|19],C[e|20]<<24|C[e|21]<<16|C[e|22]<<8|C[e|23],C[e|24]<<24|C[e|25]<<16|C[e|26]<<8|C[e|27],C[e|28]<<24|C[e|29]<<16|C[e|30]<<8|C[e|31],C[e|32]<<24|C[e|33]<<16|C[e|34]<<8|C[e|35],C[e|36]<<24|C[e|37]<<16|C[e|38]<<8|C[e|39],C[e|40]<<24|C[e|41]<<16|C[e|42]<<8|C[e|43],C[e|44]<<24|C[e|45]<<16|C[e|46]<<8|C[e|47],C[e|48]<<24|C[e|49]<<16|C[e|50]<<8|C[e|51],C[e|52]<<24|C[e|53]<<16|C[e|54]<<8|C[e|55],C[e|56]<<24|C[e|57]<<16|C[e|58]<<8|C[e|59],C[e|60]<<24|C[e|61]<<16|C[e|62]<<8|C[e|63])}function R(e){e=e|0;C[e|0]=i>>>24;C[e|1]=i>>>16&255;C[e|2]=i>>>8&255;C[e|3]=i&255;C[e|4]=n>>>24;C[e|5]=n>>>16&255;C[e|6]=n>>>8&255;C[e|7]=n&255;C[e|8]=a>>>24;C[e|9]=a>>>16&255;C[e|10]=a>>>8&255;C[e|11]=a&255;C[e|12]=s>>>24;C[e|13]=s>>>16&255;C[e|14]=s>>>8&255;C[e|15]=s&255;C[e|16]=o>>>24;C[e|17]=o>>>16&255;C[e|18]=o>>>8&255;C[e|19]=o&255;C[e|20]=c>>>24;C[e|21]=c>>>16&255;C[e|22]=c>>>8&255;C[e|23]=c&255;C[e|24]=u>>>24;C[e|25]=u>>>16&255;C[e|26]=u>>>8&255;C[e|27]=u&255;C[e|28]=h>>>24;C[e|29]=h>>>16&255;C[e|30]=h>>>8&255;C[e|31]=h&255}function I(){i=0x6a09e667;n=0xbb67ae85;a=0x3c6ef372;s=0xa54ff53a;o=0x510e527f;c=0x9b05688c;u=0x1f83d9ab;h=0x5be0cd19;d=f=0}function U(e,t,r,l,p,y,b,m,g,w){e=e|0;t=t|0;r=r|0;l=l|0;p=p|0;y=y|0;b=b|0;m=m|0;g=g|0;w=w|0;i=e;n=t;a=r;s=l;o=p;c=y;u=b;h=m;d=g;f=w}function B(e,t){e=e|0;t=t|0;var r=0;if(e&63)return-1;while((t|0)>=64){D(e);e=e+64|0;t=t-64|0;r=r+64|0}d=d+r|0;if(d>>>0<r>>>0)f=f+1|0;return r|0}function T(e,t,r){e=e|0;t=t|0;r=r|0;var i=0,n=0;if(e&63)return-1;if(~r)if(r&31)return-1;if((t|0)>=64){i=B(e,t)|0;if((i|0)==-1)return-1;e=e+i|0;t=t-i|0}i=i+t|0;d=d+t|0;if(d>>>0<t>>>0)f=f+1|0;C[e|t]=0x80;if((t|0)>=56){for(n=t+1|0;(n|0)<64;n=n+1|0)C[e|n]=0x00;D(e);t=0;C[e|0]=0}for(n=t+1|0;(n|0)<59;n=n+1|0)C[e|n]=0;C[e|56]=f>>>21&255;C[e|57]=f>>>13&255;C[e|58]=f>>>5&255;C[e|59]=f<<3&255|d>>>29;C[e|60]=d>>>21&255;C[e|61]=d>>>13&255;C[e|62]=d>>>5&255;C[e|63]=d<<3&255;D(e);if(~r)R(r);return i|0}function z(){i=l;n=p;a=y;s=b;o=m;c=g;u=w;h=v;d=64;f=0}function q(){i=_;n=k;a=A;s=S;o=E;c=x;u=P;h=M;d=64;f=0}function F(e,t,r,C,D,R,U,B,T,z,q,F,O,N,L,j){e=e|0;t=t|0;r=r|0;C=C|0;D=D|0;R=R|0;U=U|0;B=B|0;T=T|0;z=z|0;q=q|0;F=F|0;O=O|0;N=N|0;L=L|0;j=j|0;I();K(e^0x5c5c5c5c,t^0x5c5c5c5c,r^0x5c5c5c5c,C^0x5c5c5c5c,D^0x5c5c5c5c,R^0x5c5c5c5c,U^0x5c5c5c5c,B^0x5c5c5c5c,T^0x5c5c5c5c,z^0x5c5c5c5c,q^0x5c5c5c5c,F^0x5c5c5c5c,O^0x5c5c5c5c,N^0x5c5c5c5c,L^0x5c5c5c5c,j^0x5c5c5c5c);_=i;k=n;A=a;S=s;E=o;x=c;P=u;M=h;I();K(e^0x36363636,t^0x36363636,r^0x36363636,C^0x36363636,D^0x36363636,R^0x36363636,U^0x36363636,B^0x36363636,T^0x36363636,z^0x36363636,q^0x36363636,F^0x36363636,O^0x36363636,N^0x36363636,L^0x36363636,j^0x36363636);l=i;p=n;y=a;b=s;m=o;g=c;w=u;v=h;d=64;f=0}function O(e,t,r){e=e|0;t=t|0;r=r|0;var d=0,f=0,l=0,p=0,y=0,b=0,m=0,g=0,w=0;if(e&63)return-1;if(~r)if(r&31)return-1;w=T(e,t,-1)|0;d=i,f=n,l=a,p=s,y=o,b=c,m=u,g=h;q();K(d,f,l,p,y,b,m,g,0x80000000,0,0,0,0,0,0,768);if(~r)R(r);return w|0}function N(e,t,r,d,f){e=e|0;t=t|0;r=r|0;d=d|0;f=f|0;var l=0,p=0,y=0,b=0,m=0,g=0,w=0,v=0,_=0,k=0,A=0,S=0,E=0,x=0,P=0,M=0;if(e&63)return-1;if(~f)if(f&31)return-1;C[e+t|0]=r>>>24;C[e+t+1|0]=r>>>16&255;C[e+t+2|0]=r>>>8&255;C[e+t+3|0]=r&255;O(e,t+4|0,-1)|0;l=_=i,p=k=n,y=A=a,b=S=s,m=E=o,g=x=c,w=P=u,v=M=h;d=d-1|0;while((d|0)>0){z();K(_,k,A,S,E,x,P,M,0x80000000,0,0,0,0,0,0,768);_=i,k=n,A=a,S=s,E=o,x=c,P=u,M=h;q();K(_,k,A,S,E,x,P,M,0x80000000,0,0,0,0,0,0,768);_=i,k=n,A=a,S=s,E=o,x=c,P=u,M=h;l=l^i;p=p^n;y=y^a;b=b^s;m=m^o;g=g^c;w=w^u;v=v^h;d=d-1|0}i=l;n=p;a=y;s=b;o=m;c=g;u=w;h=v;if(~f)R(f);return 0}return{reset:I,init:U,process:B,finish:T,hmac_reset:z,hmac_init:F,hmac_finish:O,pbkdf2_generate_block:N}}({Uint8Array},null,this.heap.buffer),this.reset()),{heap:this.heap,asm:this.asm}}release_asm(){void 0!==this.heap&&void 0!==this.asm&&(dt.push(this.heap),ft.push(this.asm)),this.heap=void 0,this.asm=void 0}static bytes(e){return(new lt).process(e).finish().result}}lt.NAME="sha256";var pt=yt;function yt(e,t){if(!e)throw Error(t||"Assertion failed")}yt.equal=function(e,t,r){if(e!=t)throw Error(r||"Assertion failed: "+e+" != "+t)};var bt=void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function mt(e,t){return e(t={exports:{}},t.exports),t.exports}var gt=mt((function(e){e.exports="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}})),wt=mt((function(e){try{var t=p.default;if("function"!=typeof t.inherits)throw"";e.exports=t.inherits}catch(t){e.exports=gt}}));function vt(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function _t(e){return 1===e.length?"0"+e:e}function kt(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}var At={inherits:wt,toArray:function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),i=0;i<e.length;i+=2)r.push(parseInt(e[i]+e[i+1],16))}else for(var i=0;i<e.length;i++){var n=e.charCodeAt(i),a=n>>8,s=255&n;a?r.push(a,s):r.push(s)}else for(i=0;i<e.length;i++)r[i]=0|e[i];return r},toHex:function(e){for(var t="",r=0;r<e.length;r++)t+=_t(e[r].toString(16));return t},htonl:vt,toHex32:function(e,t){for(var r="",i=0;i<e.length;i++){var n=e[i];"little"===t&&(n=vt(n)),r+=kt(n.toString(16))}return r},zero2:_t,zero8:kt,join32:function(e,t,r,i){var n=r-t;pt(n%4==0);for(var a=Array(n/4),s=0,o=t;s<a.length;s++,o+=4){var c;c="big"===i?e[o]<<24|e[o+1]<<16|e[o+2]<<8|e[o+3]:e[o+3]<<24|e[o+2]<<16|e[o+1]<<8|e[o],a[s]=c>>>0}return a},split32:function(e,t){for(var r=Array(4*e.length),i=0,n=0;i<e.length;i++,n+=4){var a=e[i];"big"===t?(r[n]=a>>>24,r[n+1]=a>>>16&255,r[n+2]=a>>>8&255,r[n+3]=255&a):(r[n+3]=a>>>24,r[n+2]=a>>>16&255,r[n+1]=a>>>8&255,r[n]=255&a)}return r},rotr32:function(e,t){return e>>>t|e<<32-t},rotl32:function(e,t){return e<<t|e>>>32-t},sum32:function(e,t){return e+t>>>0},sum32_3:function(e,t,r){return e+t+r>>>0},sum32_4:function(e,t,r,i){return e+t+r+i>>>0},sum32_5:function(e,t,r,i,n){return e+t+r+i+n>>>0},sum64:function(e,t,r,i){var n=e[t],a=i+e[t+1]>>>0,s=(a<i?1:0)+r+n;e[t]=s>>>0,e[t+1]=a},sum64_hi:function(e,t,r,i){return(t+i>>>0<t?1:0)+e+r>>>0},sum64_lo:function(e,t,r,i){return t+i>>>0},sum64_4_hi:function(e,t,r,i,n,a,s,o){var c=0,u=t;return c+=(u=u+i>>>0)<t?1:0,c+=(u=u+a>>>0)<a?1:0,e+r+n+s+(c+=(u=u+o>>>0)<o?1:0)>>>0},sum64_4_lo:function(e,t,r,i,n,a,s,o){return t+i+a+o>>>0},sum64_5_hi:function(e,t,r,i,n,a,s,o,c,u){var h=0,d=t;return h+=(d=d+i>>>0)<t?1:0,h+=(d=d+a>>>0)<a?1:0,h+=(d=d+o>>>0)<o?1:0,e+r+n+s+c+(h+=(d=d+u>>>0)<u?1:0)>>>0},sum64_5_lo:function(e,t,r,i,n,a,s,o,c,u){return t+i+a+o+u>>>0},rotr64_hi:function(e,t,r){return(t<<32-r|e>>>r)>>>0},rotr64_lo:function(e,t,r){return(e<<32-r|t>>>r)>>>0},shr64_hi:function(e,t,r){return e>>>r},shr64_lo:function(e,t,r){return(e<<32-r|t>>>r)>>>0}};function St(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}var Et=St;St.prototype.update=function(e,t){if(e=At.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var r=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-r,e.length),0===this.pending.length&&(this.pending=null),e=At.join32(e,0,e.length-r,this.endian);for(var i=0;i<e.length;i+=this._delta32)this._update(e,i,i+this._delta32)}return this},St.prototype.digest=function(e){return this.update(this._pad()),pt(null===this.pending),this._digest(e)},St.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,r=t-(e+this.padLength)%t,i=Array(r+this.padLength);i[0]=128;for(var n=1;n<r;n++)i[n]=0;if(e<<=3,"big"===this.endian){for(var a=8;a<this.padLength;a++)i[n++]=0;i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=e>>>24&255,i[n++]=e>>>16&255,i[n++]=e>>>8&255,i[n++]=255&e}else for(i[n++]=255&e,i[n++]=e>>>8&255,i[n++]=e>>>16&255,i[n++]=e>>>24&255,i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=0,a=8;a<this.padLength;a++)i[n++]=0;return i};var xt={BlockHash:Et},Pt=At.rotr32;function Mt(e,t,r){return e&t^~e&r}function Ct(e,t,r){return e&t^e&r^t&r}function Kt(e,t,r){return e^t^r}var Dt={ft_1:function(e,t,r,i){return 0===e?Mt(t,r,i):1===e||3===e?Kt(t,r,i):2===e?Ct(t,r,i):void 0},ch32:Mt,maj32:Ct,p32:Kt,s0_256:function(e){return Pt(e,2)^Pt(e,13)^Pt(e,22)},s1_256:function(e){return Pt(e,6)^Pt(e,11)^Pt(e,25)},g0_256:function(e){return Pt(e,7)^Pt(e,18)^e>>>3},g1_256:function(e){return Pt(e,17)^Pt(e,19)^e>>>10}},Rt=At.sum32,It=At.sum32_4,Ut=At.sum32_5,Bt=Dt.ch32,Tt=Dt.maj32,zt=Dt.s0_256,qt=Dt.s1_256,Ft=Dt.g0_256,Ot=Dt.g1_256,Nt=xt.BlockHash,Lt=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function jt(){if(!(this instanceof jt))return new jt;Nt.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=Lt,this.W=Array(64)}At.inherits(jt,Nt);var Wt=jt;function Ht(){if(!(this instanceof Ht))return new Ht;Wt.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}jt.blockSize=512,jt.outSize=256,jt.hmacStrength=192,jt.padLength=64,jt.prototype._update=function(e,t){for(var r=this.W,i=0;i<16;i++)r[i]=e[t+i];for(;i<r.length;i++)r[i]=It(Ot(r[i-2]),r[i-7],Ft(r[i-15]),r[i-16]);var n=this.h[0],a=this.h[1],s=this.h[2],o=this.h[3],c=this.h[4],u=this.h[5],h=this.h[6],d=this.h[7];for(pt(this.k.length===r.length),i=0;i<r.length;i++){var f=Ut(d,qt(c),Bt(c,u,h),this.k[i],r[i]),l=Rt(zt(n),Tt(n,a,s));d=h,h=u,u=c,c=Rt(o,f),o=s,s=a,a=n,n=Rt(f,l)}this.h[0]=Rt(this.h[0],n),this.h[1]=Rt(this.h[1],a),this.h[2]=Rt(this.h[2],s),this.h[3]=Rt(this.h[3],o),this.h[4]=Rt(this.h[4],c),this.h[5]=Rt(this.h[5],u),this.h[6]=Rt(this.h[6],h),this.h[7]=Rt(this.h[7],d)},jt.prototype._digest=function(e){return"hex"===e?At.toHex32(this.h,"big"):At.split32(this.h,"big")},At.inherits(Ht,Wt);var Gt=Ht;Ht.blockSize=512,Ht.outSize=224,Ht.hmacStrength=192,Ht.padLength=64,Ht.prototype._digest=function(e){return"hex"===e?At.toHex32(this.h.slice(0,7),"big"):At.split32(this.h.slice(0,7),"big")};var Vt=At.rotr64_hi,Zt=At.rotr64_lo,Yt=At.shr64_hi,$t=At.shr64_lo,Xt=At.sum64,Jt=At.sum64_hi,Qt=At.sum64_lo,er=At.sum64_4_hi,tr=At.sum64_4_lo,rr=At.sum64_5_hi,ir=At.sum64_5_lo,nr=xt.BlockHash,ar=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function sr(){if(!(this instanceof sr))return new sr;nr.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=ar,this.W=Array(160)}At.inherits(sr,nr);var or=sr;function cr(e,t,r,i,n){var a=e&r^~e&n;return a<0&&(a+=4294967296),a}function ur(e,t,r,i,n,a){var s=t&i^~t&a;return s<0&&(s+=4294967296),s}function hr(e,t,r,i,n){var a=e&r^e&n^r&n;return a<0&&(a+=4294967296),a}function dr(e,t,r,i,n,a){var s=t&i^t&a^i&a;return s<0&&(s+=4294967296),s}function fr(e,t){var r=Vt(e,t,28)^Vt(t,e,2)^Vt(t,e,7);return r<0&&(r+=4294967296),r}function lr(e,t){var r=Zt(e,t,28)^Zt(t,e,2)^Zt(t,e,7);return r<0&&(r+=4294967296),r}function pr(e,t){var r=Vt(e,t,14)^Vt(e,t,18)^Vt(t,e,9);return r<0&&(r+=4294967296),r}function yr(e,t){var r=Zt(e,t,14)^Zt(e,t,18)^Zt(t,e,9);return r<0&&(r+=4294967296),r}function br(e,t){var r=Vt(e,t,1)^Vt(e,t,8)^Yt(e,t,7);return r<0&&(r+=4294967296),r}function mr(e,t){var r=Zt(e,t,1)^Zt(e,t,8)^$t(e,t,7);return r<0&&(r+=4294967296),r}function gr(e,t){var r=Vt(e,t,19)^Vt(t,e,29)^Yt(e,t,6);return r<0&&(r+=4294967296),r}function wr(e,t){var r=Zt(e,t,19)^Zt(t,e,29)^$t(e,t,6);return r<0&&(r+=4294967296),r}function vr(){if(!(this instanceof vr))return new vr;or.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}sr.blockSize=1024,sr.outSize=512,sr.hmacStrength=192,sr.padLength=128,sr.prototype._prepareBlock=function(e,t){for(var r=this.W,i=0;i<32;i++)r[i]=e[t+i];for(;i<r.length;i+=2){var n=gr(r[i-4],r[i-3]),a=wr(r[i-4],r[i-3]),s=r[i-14],o=r[i-13],c=br(r[i-30],r[i-29]),u=mr(r[i-30],r[i-29]),h=r[i-32],d=r[i-31];r[i]=er(n,a,s,o,c,u,h,d),r[i+1]=tr(n,a,s,o,c,u,h,d)}},sr.prototype._update=function(e,t){this._prepareBlock(e,t);var r=this.W,i=this.h[0],n=this.h[1],a=this.h[2],s=this.h[3],o=this.h[4],c=this.h[5],u=this.h[6],h=this.h[7],d=this.h[8],f=this.h[9],l=this.h[10],p=this.h[11],y=this.h[12],b=this.h[13],m=this.h[14],g=this.h[15];pt(this.k.length===r.length);for(var w=0;w<r.length;w+=2){var v=m,_=g,k=pr(d,f),A=yr(d,f),S=cr(d,f,l,p,y),E=ur(d,f,l,p,y,b),x=this.k[w],P=this.k[w+1],M=r[w],C=r[w+1],K=rr(v,_,k,A,S,E,x,P,M,C),D=ir(v,_,k,A,S,E,x,P,M,C);v=fr(i,n),_=lr(i,n),k=hr(i,n,a,s,o),A=dr(i,n,a,s,o,c);var R=Jt(v,_,k,A),I=Qt(v,_,k,A);m=y,g=b,y=l,b=p,l=d,p=f,d=Jt(u,h,K,D),f=Qt(h,h,K,D),u=o,h=c,o=a,c=s,a=i,s=n,i=Jt(K,D,R,I),n=Qt(K,D,R,I)}Xt(this.h,0,i,n),Xt(this.h,2,a,s),Xt(this.h,4,o,c),Xt(this.h,6,u,h),Xt(this.h,8,d,f),Xt(this.h,10,l,p),Xt(this.h,12,y,b),Xt(this.h,14,m,g)},sr.prototype._digest=function(e){return"hex"===e?At.toHex32(this.h,"big"):At.split32(this.h,"big")},At.inherits(vr,or);var _r=vr;vr.blockSize=1024,vr.outSize=384,vr.hmacStrength=192,vr.padLength=128,vr.prototype._digest=function(e){return"hex"===e?At.toHex32(this.h.slice(0,12),"big"):At.split32(this.h.slice(0,12),"big")};var kr=At.rotl32,Ar=At.sum32,Sr=At.sum32_3,Er=At.sum32_4,xr=xt.BlockHash;function Pr(){if(!(this instanceof Pr))return new Pr;xr.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}At.inherits(Pr,xr);var Mr=Pr;function Cr(e,t,r,i){return e<=15?t^r^i:e<=31?t&r|~t&i:e<=47?(t|~r)^i:e<=63?t&i|r&~i:t^(r|~i)}function Kr(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function Dr(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}Pr.blockSize=512,Pr.outSize=160,Pr.hmacStrength=192,Pr.padLength=64,Pr.prototype._update=function(e,t){for(var r=this.h[0],i=this.h[1],n=this.h[2],a=this.h[3],s=this.h[4],o=r,c=i,u=n,h=a,d=s,f=0;f<80;f++){var l=Ar(kr(Er(r,Cr(f,i,n,a),e[Rr[f]+t],Kr(f)),Ur[f]),s);r=s,s=a,a=kr(n,10),n=i,i=l,l=Ar(kr(Er(o,Cr(79-f,c,u,h),e[Ir[f]+t],Dr(f)),Br[f]),d),o=d,d=h,h=kr(u,10),u=c,c=l}l=Sr(this.h[1],n,h),this.h[1]=Sr(this.h[2],a,d),this.h[2]=Sr(this.h[3],s,o),this.h[3]=Sr(this.h[4],r,c),this.h[4]=Sr(this.h[0],i,u),this.h[0]=l},Pr.prototype._digest=function(e){return"hex"===e?At.toHex32(this.h,"little"):At.split32(this.h,"little")};var Rr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],Ir=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],Ur=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],Br=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],Tr={ripemd160:Mr};function zr(e,t){let r=e[0],i=e[1],n=e[2],a=e[3];r=Fr(r,i,n,a,t[0],7,-680876936),a=Fr(a,r,i,n,t[1],12,-389564586),n=Fr(n,a,r,i,t[2],17,606105819),i=Fr(i,n,a,r,t[3],22,-1044525330),r=Fr(r,i,n,a,t[4],7,-176418897),a=Fr(a,r,i,n,t[5],12,1200080426),n=Fr(n,a,r,i,t[6],17,-1473231341),i=Fr(i,n,a,r,t[7],22,-45705983),r=Fr(r,i,n,a,t[8],7,1770035416),a=Fr(a,r,i,n,t[9],12,-1958414417),n=Fr(n,a,r,i,t[10],17,-42063),i=Fr(i,n,a,r,t[11],22,-1990404162),r=Fr(r,i,n,a,t[12],7,1804603682),a=Fr(a,r,i,n,t[13],12,-40341101),n=Fr(n,a,r,i,t[14],17,-1502002290),i=Fr(i,n,a,r,t[15],22,1236535329),r=Or(r,i,n,a,t[1],5,-165796510),a=Or(a,r,i,n,t[6],9,-1069501632),n=Or(n,a,r,i,t[11],14,643717713),i=Or(i,n,a,r,t[0],20,-373897302),r=Or(r,i,n,a,t[5],5,-701558691),a=Or(a,r,i,n,t[10],9,38016083),n=Or(n,a,r,i,t[15],14,-660478335),i=Or(i,n,a,r,t[4],20,-405537848),r=Or(r,i,n,a,t[9],5,568446438),a=Or(a,r,i,n,t[14],9,-1019803690),n=Or(n,a,r,i,t[3],14,-187363961),i=Or(i,n,a,r,t[8],20,1163531501),r=Or(r,i,n,a,t[13],5,-1444681467),a=Or(a,r,i,n,t[2],9,-51403784),n=Or(n,a,r,i,t[7],14,1735328473),i=Or(i,n,a,r,t[12],20,-1926607734),r=Nr(r,i,n,a,t[5],4,-378558),a=Nr(a,r,i,n,t[8],11,-2022574463),n=Nr(n,a,r,i,t[11],16,1839030562),i=Nr(i,n,a,r,t[14],23,-35309556),r=Nr(r,i,n,a,t[1],4,-1530992060),a=Nr(a,r,i,n,t[4],11,1272893353),n=Nr(n,a,r,i,t[7],16,-155497632),i=Nr(i,n,a,r,t[10],23,-1094730640),r=Nr(r,i,n,a,t[13],4,681279174),a=Nr(a,r,i,n,t[0],11,-358537222),n=Nr(n,a,r,i,t[3],16,-722521979),i=Nr(i,n,a,r,t[6],23,76029189),r=Nr(r,i,n,a,t[9],4,-640364487),a=Nr(a,r,i,n,t[12],11,-421815835),n=Nr(n,a,r,i,t[15],16,530742520),i=Nr(i,n,a,r,t[2],23,-995338651),r=Lr(r,i,n,a,t[0],6,-198630844),a=Lr(a,r,i,n,t[7],10,1126891415),n=Lr(n,a,r,i,t[14],15,-1416354905),i=Lr(i,n,a,r,t[5],21,-57434055),r=Lr(r,i,n,a,t[12],6,1700485571),a=Lr(a,r,i,n,t[3],10,-1894986606),n=Lr(n,a,r,i,t[10],15,-1051523),i=Lr(i,n,a,r,t[1],21,-2054922799),r=Lr(r,i,n,a,t[8],6,1873313359),a=Lr(a,r,i,n,t[15],10,-30611744),n=Lr(n,a,r,i,t[6],15,-1560198380),i=Lr(i,n,a,r,t[13],21,1309151649),r=Lr(r,i,n,a,t[4],6,-145523070),a=Lr(a,r,i,n,t[11],10,-1120210379),n=Lr(n,a,r,i,t[2],15,718787259),i=Lr(i,n,a,r,t[9],21,-343485551),e[0]=Gr(r,e[0]),e[1]=Gr(i,e[1]),e[2]=Gr(n,e[2]),e[3]=Gr(a,e[3])}function qr(e,t,r,i,n,a){return t=Gr(Gr(t,e),Gr(i,a)),Gr(t<<n|t>>>32-n,r)}function Fr(e,t,r,i,n,a,s){return qr(t&r|~t&i,e,t,n,a,s)}function Or(e,t,r,i,n,a,s){return qr(t&i|r&~i,e,t,n,a,s)}function Nr(e,t,r,i,n,a,s){return qr(t^r^i,e,t,n,a,s)}function Lr(e,t,r,i,n,a,s){return qr(r^(t|~i),e,t,n,a,s)}function jr(e){const t=[];let r;for(r=0;r<64;r+=4)t[r>>2]=e.charCodeAt(r)+(e.charCodeAt(r+1)<<8)+(e.charCodeAt(r+2)<<16)+(e.charCodeAt(r+3)<<24);return t}const Wr="0123456789abcdef".split("");function Hr(e){let t="",r=0;for(;r<4;r++)t+=Wr[e>>8*r+4&15]+Wr[e>>8*r&15];return t}function Gr(e,t){return e+t&4294967295}const Vr=ue.getWebCrypto(),Zr=ue.getNodeCrypto();function Yr(e){return async function(t){const r=Zr.createHash(e);return $(t,e=>{r.update(e)},()=>new Uint8Array(r.digest()))}}function $r(e,t){return async function(r,i=we){if(v(r)&&(r=await ie(r)),!ue.isStream(r)&&Vr&&t&&r.length>=i.minBytesForWebCrypto)return new Uint8Array(await Vr.digest(t,r));const n=e();return $(r,e=>{n.update(e)},()=>new Uint8Array(n.digest()))}}function Xr(e,t){return async function(r,i=we){if(v(r)&&(r=await ie(r)),ue.isStream(r)){const t=new e;return $(r,e=>{t.process(e)},()=>t.finish().result)}return Vr&&t&&r.length>=i.minBytesForWebCrypto?new Uint8Array(await Vr.digest(t,r)):e.bytes(r)}}let Jr;Jr=Zr?{md5:Yr("md5"),sha1:Yr("sha1"),sha224:Yr("sha224"),sha256:Yr("sha256"),sha384:Yr("sha384"),sha512:Yr("sha512"),ripemd:Yr("ripemd160")}:{md5:async function(e){const t=function(e){const t=e.length,r=[1732584193,-271733879,-1732584194,271733878];let i;for(i=64;i<=e.length;i+=64)zr(r,jr(e.substring(i-64,i)));e=e.substring(i-64);const n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<e.length;i++)n[i>>2]|=e.charCodeAt(i)<<(i%4<<3);if(n[i>>2]|=128<<(i%4<<3),i>55)for(zr(r,n),i=0;i<16;i++)n[i]=0;return n[14]=8*t,zr(r,n),r}(ue.uint8ArrayToString(e));return ue.hexToUint8Array(function(e){for(let t=0;t<e.length;t++)e[t]=Hr(e[t]);return e.join("")}(t))},sha1:Xr(ht,-1===navigator.userAgent.indexOf("Edge")&&"SHA-1"),sha224:$r(Gt),sha256:Xr(lt,"SHA-256"),sha384:$r(_r,"SHA-384"),sha512:$r(or,"SHA-512"),ripemd:$r(Mr)};var Qr={md5:Jr.md5,sha1:Jr.sha1,sha224:Jr.sha224,sha256:Jr.sha256,sha384:Jr.sha384,sha512:Jr.sha512,ripemd:Jr.ripemd,digest:function(e,t){switch(e){case 1:return this.md5(t);case 2:return this.sha1(t);case 3:return this.ripemd(t);case 8:return this.sha256(t);case 9:return this.sha384(t);case 10:return this.sha512(t);case 11:return this.sha224(t);default:throw Error("Invalid hash function.")}},getHashByteLength:function(e){switch(e){case 1:return 16;case 2:case 3:return 20;case 8:return 32;case 9:return 48;case 10:return 64;case 11:return 28;default:throw Error("Invalid hash algorithm.")}}};class ei{static encrypt(e,t,r){return new ei(t,r).encrypt(e)}static decrypt(e,t,r){return new ei(t,r).decrypt(e)}constructor(e,t,r){this.aes=r||new Oe(e,t,!0,"CFB"),delete this.aes.padding}encrypt(e){return Ue(this.aes.AES_Encrypt_process(e),this.aes.AES_Encrypt_finish())}decrypt(e){return Ue(this.aes.AES_Decrypt_process(e),this.aes.AES_Decrypt_finish())}}const ti=ue.getWebCrypto(),ri=ue.getNodeCrypto(),ii=ri?ri.getCiphers():[],ni={idea:ii.includes("idea-cfb")?"idea-cfb":void 0,tripledes:ii.includes("des-ede3-cfb")?"des-ede3-cfb":void 0,cast5:ii.includes("cast5-cfb")?"cast5-cfb":void 0,blowfish:ii.includes("bf-cfb")?"bf-cfb":void 0,aes128:ii.includes("aes-128-cfb")?"aes-128-cfb":void 0,aes192:ii.includes("aes-192-cfb")?"aes-192-cfb":void 0,aes256:ii.includes("aes-256-cfb")?"aes-256-cfb":void 0};var ai=/*#__PURE__*/Object.freeze({__proto__:null,encrypt:async function(e,t,r,i,n){if(ue.getNodeCrypto()&&ni[e])return function(e,t,r,i){const n=new ri.createCipheriv(ni[e],t,i);return $(r,e=>new Uint8Array(n.update(e)))}(e,t,r,i);if("aes"===e.substr(0,3))return function(e,t,r,i,n){if(ue.getWebCrypto()&&24!==t.length&&!ue.isStream(r)&&r.length>=3e3*n.minBytesForWebCrypto)return async function(e,t,r,i){const n=await ti.importKey("raw",t,{name:"AES-CBC"},!1,["encrypt"]),{blockSize:a}=at[e],s=ue.concatUint8Array([new Uint8Array(a),r]),o=new Uint8Array(await ti.encrypt({name:"AES-CBC",iv:i},n,s)).subarray(0,r.length);return function(e,t){for(let r=0;r<e.length;r++)e[r]=e[r]^t[r]}(o,r),o}(e,t,r,i);const a=new ei(t,i);return $(r,e=>a.aes.AES_Encrypt_process(e),()=>a.aes.AES_Encrypt_finish())}(e,t,r,i,n);const a=new at[e](t),s=a.blockSize,o=i.slice();let c=new Uint8Array;const u=e=>{e&&(c=ue.concatUint8Array([c,e]));const t=new Uint8Array(c.length);let r,i=0;for(;e?c.length>=s:c.length;){const e=a.encrypt(o);for(r=0;r<s;r++)o[r]=c[r]^e[r],t[i++]=o[r];c=c.subarray(s)}return t.subarray(0,i)};return $(r,u,u)},decrypt:async function(e,t,r,i){if(ue.getNodeCrypto()&&ni[e])return function(e,t,r,i){const n=new ri.createDecipheriv(ni[e],t,i);return $(r,e=>new Uint8Array(n.update(e)))}(e,t,r,i);if("aes"===e.substr(0,3))return function(e,t,r,i){if(ue.isStream(r)){const e=new ei(t,i);return $(r,t=>e.aes.AES_Decrypt_process(t),()=>e.aes.AES_Decrypt_finish())}return ei.decrypt(r,t,i)}(0,t,r,i);const n=new at[e](t),a=n.blockSize;let s=i,o=new Uint8Array;const c=e=>{e&&(o=ue.concatUint8Array([o,e]));const t=new Uint8Array(o.length);let r,i=0;for(;e?o.length>=a:o.length;){const e=n.encrypt(s);for(s=o,r=0;r<a;r++)t[i++]=s[r]^e[r];o=o.subarray(a)}return t.subarray(0,i)};return $(r,c,c)}});class si{static encrypt(e,t,r){return new si(t,r).encrypt(e)}static decrypt(e,t,r){return new si(t,r).encrypt(e)}constructor(e,t,r){this.aes=r||new Oe(e,void 0,!1,"CTR"),delete this.aes.padding,this.AES_CTR_set_options(t)}encrypt(e){return Ue(this.aes.AES_Encrypt_process(e),this.aes.AES_Encrypt_finish())}decrypt(e){return Ue(this.aes.AES_Encrypt_process(e),this.aes.AES_Encrypt_finish())}AES_CTR_set_options(e,t,r){let{asm:i}=this.aes.acquire_asm();if(void 0!==r){if(r<8||r>48)throw new Te("illegal counter size");let e=Math.pow(2,r)-1;i.set_mask(0,0,e/4294967296|0,0|e)}else r=48,i.set_mask(0,0,65535,4294967295);if(void 0===e)throw Error("nonce is required");{let t=e.length;if(!t||t>16)throw new Te("illegal nonce size");let r=new DataView(new ArrayBuffer(16));new Uint8Array(r.buffer).set(e),i.set_nonce(r.getUint32(0),r.getUint32(4),r.getUint32(8),r.getUint32(12))}if(void 0!==t){if(t<0||t>=Math.pow(2,r))throw new Te("illegal counter value");i.set_counter(0,0,t/4294967296|0,0|t)}}}class oi{static encrypt(e,t,r=!0,i){return new oi(t,i,r).encrypt(e)}static decrypt(e,t,r=!0,i){return new oi(t,i,r).decrypt(e)}constructor(e,t,r=!0,i){this.aes=i||new Oe(e,t,r,"CBC")}encrypt(e){return Ue(this.aes.AES_Encrypt_process(e),this.aes.AES_Encrypt_finish())}decrypt(e){return Ue(this.aes.AES_Decrypt_process(e),this.aes.AES_Decrypt_finish())}}const ci=ue.getWebCrypto(),ui=ue.getNodeCrypto();function hi(e,t){const r=e.length-16;for(let i=0;i<16;i++)e[i+r]^=t[i];return e}const di=new Uint8Array(16);async function fi(e){const t=await async function(e){if(ue.getWebCrypto()&&24!==e.length)return e=await ci.importKey("raw",e,{name:"AES-CBC",length:8*e.length},!1,["encrypt"]),async function(t){const r=await ci.encrypt({name:"AES-CBC",iv:di,length:128},e,t);return new Uint8Array(r).subarray(0,r.byteLength-16)};if(ue.getNodeCrypto())return async function(t){const r=new ui.createCipheriv("aes-"+8*e.length+"-cbc",e,di).update(t);return new Uint8Array(r)};return async function(t){return oi.encrypt(t,e,!1,di)}}(e),r=ue.double(await t(di)),i=ue.double(r);return async function(e){return(await t(function(e,t,r){if(e.length&&e.length%16==0)return hi(e,t);const i=new Uint8Array(e.length+(16-e.length%16));return i.set(e),i[e.length]=128,hi(i,r)}(e,r,i))).subarray(-16)}}const li=ue.getWebCrypto(),pi=ue.getNodeCrypto(),yi=ue.getNodeBuffer(),bi=new Uint8Array(16),mi=new Uint8Array(16);mi[15]=1;const gi=new Uint8Array(16);async function wi(e){const t=await fi(e);return function(e,r){return t(ue.concatUint8Array([e,r]))}}async function vi(e){return ue.getWebCrypto()&&24!==e.length&&-1===navigator.userAgent.indexOf("Edge")?(e=await li.importKey("raw",e,{name:"AES-CTR",length:8*e.length},!1,["encrypt"]),async function(t,r){const i=await li.encrypt({name:"AES-CTR",counter:r,length:128},e,t);return new Uint8Array(i)}):ue.getNodeCrypto()?async function(t,r){const i=new pi.createCipheriv("aes-"+8*e.length+"-ctr",e,r),n=yi.concat([i.update(t),i.final()]);return new Uint8Array(n)}:async function(t,r){return si.encrypt(t,e,r)}}async function _i(e,t){if("aes"!==e.substr(0,3))throw Error("EAX mode supports only AES cipher");const[r,i]=await Promise.all([wi(t),vi(t)]);return{encrypt:async function(e,t,n){const[a,s]=await Promise.all([r(bi,t),r(mi,n)]),o=await i(e,a),c=await r(gi,o);for(let e=0;e<16;e++)c[e]^=s[e]^a[e];return ue.concatUint8Array([o,c])},decrypt:async function(e,t,n){if(e.length<16)throw Error("Invalid EAX ciphertext");const a=e.subarray(0,-16),s=e.subarray(-16),[o,c,u]=await Promise.all([r(bi,t),r(mi,n),r(gi,a)]),h=u;for(let e=0;e<16;e++)h[e]^=c[e]^o[e];if(!ue.equalsUint8Array(s,h))throw Error("Authentication tag mismatch");return await i(a,o)}}}gi[15]=2,_i.getNonce=function(e,t){const r=e.slice();for(let e=0;e<t.length;e++)r[8+e]^=t[e];return r},_i.blockLength=16,_i.ivLength=16,_i.tagLength=16;function ki(e){let t=0;for(let r=1;0==(e&r);r<<=1)t++;return t}function Ai(e,t){for(let r=0;r<e.length;r++)e[r]^=t[r];return e}function Si(e,t){return Ai(e.slice(),t)}const Ei=new Uint8Array(16),xi=new Uint8Array([1]);async function Pi(e,t){let r,i,n,a=0;function s(e,t,i,s){const o=t.length/16|0;!function(e,t){const r=ue.nbits(Math.max(e.length,t.length)/16|0)-1;for(let e=a+1;e<=r;e++)n[e]=ue.double(n[e-1]);a=r}(t,s);const c=ue.concatUint8Array([Ei.subarray(0,15-i.length),xi,i]),u=63&c[15];c[15]&=192;const h=r(c),d=ue.concatUint8Array([h,Si(h.subarray(0,8),h.subarray(1,9))]),f=ue.shiftRight(d.subarray(0+(u>>3),17+(u>>3)),8-(7&u)).subarray(1),l=new Uint8Array(16),p=new Uint8Array(t.length+16);let y,b=0;for(y=0;y<o;y++)Ai(f,n[ki(y+1)]),p.set(Ai(e(Si(f,t)),f),b),Ai(l,e===r?t:p.subarray(b)),t=t.subarray(16),b+=16;if(t.length){Ai(f,n.x);const i=r(f);p.set(Si(t,i),b);const a=new Uint8Array(16);a.set(e===r?t:p.subarray(b,-16),0),a[t.length]=128,Ai(l,a),b+=t.length}const m=Ai(r(Ai(Ai(l,f),n.$)),function(e){if(!e.length)return Ei;const t=e.length/16|0,i=new Uint8Array(16),a=new Uint8Array(16);for(let s=0;s<t;s++)Ai(i,n[ki(s+1)]),Ai(a,r(Si(i,e))),e=e.subarray(16);if(e.length){Ai(i,n.x);const t=new Uint8Array(16);t.set(e,0),t[e.length]=128,Ai(t,i),Ai(a,r(t))}return a}(s));return p.set(m,b),p}return function(e,t){const a=new at[e](t);r=a.encrypt.bind(a),i=a.decrypt.bind(a);const s=r(Ei),o=ue.double(s);n=[],n[0]=ue.double(o),n.x=s,n.$=o}(e,t),{encrypt:async function(e,t,i){return s(r,e,t,i)},decrypt:async function(e,t,r){if(e.length<16)throw Error("Invalid OCB ciphertext");const n=e.subarray(-16);e=e.subarray(0,-16);const a=s(i,e,t,r);if(ue.equalsUint8Array(n,a.subarray(-16)))return a.subarray(0,-16);throw Error("Authentication tag mismatch")}}}Pi.getNonce=function(e,t){const r=e.slice();for(let e=0;e<t.length;e++)r[7+e]^=t[e];return r},Pi.blockLength=16,Pi.ivLength=15,Pi.tagLength=16;class Mi{constructor(e,t,r,i=16,n){this.tagSize=i,this.gamma0=0,this.counter=1,this.aes=n||new Oe(e,void 0,!1,"CTR");let{asm:a,heap:s}=this.aes.acquire_asm();if(a.gcm_init(),this.tagSize<4||this.tagSize>16)throw new Te("illegal tagSize value");const o=t.length||0,c=new Uint8Array(16);12!==o?(this._gcm_mac_process(t),s[0]=0,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=0,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=0,s[11]=o>>>29,s[12]=o>>>21&255,s[13]=o>>>13&255,s[14]=o>>>5&255,s[15]=o<<3&255,a.mac(Ke.MAC.GCM,Ke.HEAP_DATA,16),a.get_iv(Ke.HEAP_DATA),a.set_iv(0,0,0,0),c.set(s.subarray(0,16))):(c.set(t),c[15]=1);const u=new DataView(c.buffer);if(this.gamma0=u.getUint32(12),a.set_nonce(u.getUint32(0),u.getUint32(4),u.getUint32(8),0),a.set_mask(0,0,0,4294967295),void 0!==r){if(r.length>68719476704)throw new Te("illegal adata length");r.length?(this.adata=r,this._gcm_mac_process(r)):this.adata=void 0}else this.adata=void 0;if(this.counter<1||this.counter>4294967295)throw new RangeError("counter must be a positive 32-bit integer");a.set_counter(0,0,0,this.gamma0+this.counter|0)}static encrypt(e,t,r,i,n){return new Mi(t,r,i,n).encrypt(e)}static decrypt(e,t,r,i,n){return new Mi(t,r,i,n).decrypt(e)}encrypt(e){return this.AES_GCM_encrypt(e)}decrypt(e){return this.AES_GCM_decrypt(e)}AES_GCM_Encrypt_process(e){let t=0,r=e.length||0,{asm:i,heap:n}=this.aes.acquire_asm(),a=this.counter,s=this.aes.pos,o=this.aes.len,c=0,u=o+r&-16,h=0;if((a-1<<4)+o+r>68719476704)throw new RangeError("counter overflow");const d=new Uint8Array(u);for(;r>0;)h=Ie(n,s+o,e,t,r),o+=h,t+=h,r-=h,h=i.cipher(Ke.ENC.CTR,Ke.HEAP_DATA+s,o),h=i.mac(Ke.MAC.GCM,Ke.HEAP_DATA+s,h),h&&d.set(n.subarray(s,s+h),c),a+=h>>>4,c+=h,h<o?(s+=h,o-=h):(s=0,o=0);return this.counter=a,this.aes.pos=s,this.aes.len=o,d}AES_GCM_Encrypt_finish(){let{asm:e,heap:t}=this.aes.acquire_asm(),r=this.counter,i=this.tagSize,n=this.adata,a=this.aes.pos,s=this.aes.len;const o=new Uint8Array(s+i);e.cipher(Ke.ENC.CTR,Ke.HEAP_DATA+a,s+15&-16),s&&o.set(t.subarray(a,a+s));let c=s;for(;15&c;c++)t[a+c]=0;e.mac(Ke.MAC.GCM,Ke.HEAP_DATA+a,c);const u=void 0!==n?n.length:0,h=(r-1<<4)+s;return t[0]=0,t[1]=0,t[2]=0,t[3]=u>>>29,t[4]=u>>>21,t[5]=u>>>13&255,t[6]=u>>>5&255,t[7]=u<<3&255,t[8]=t[9]=t[10]=0,t[11]=h>>>29,t[12]=h>>>21&255,t[13]=h>>>13&255,t[14]=h>>>5&255,t[15]=h<<3&255,e.mac(Ke.MAC.GCM,Ke.HEAP_DATA,16),e.get_iv(Ke.HEAP_DATA),e.set_counter(0,0,0,this.gamma0),e.cipher(Ke.ENC.CTR,Ke.HEAP_DATA,16),o.set(t.subarray(0,i),s),this.counter=1,this.aes.pos=0,this.aes.len=0,o}AES_GCM_Decrypt_process(e){let t=0,r=e.length||0,{asm:i,heap:n}=this.aes.acquire_asm(),a=this.counter,s=this.tagSize,o=this.aes.pos,c=this.aes.len,u=0,h=c+r>s?c+r-s&-16:0,d=c+r-h,f=0;if((a-1<<4)+c+r>68719476704)throw new RangeError("counter overflow");const l=new Uint8Array(h);for(;r>d;)f=Ie(n,o+c,e,t,r-d),c+=f,t+=f,r-=f,f=i.mac(Ke.MAC.GCM,Ke.HEAP_DATA+o,f),f=i.cipher(Ke.DEC.CTR,Ke.HEAP_DATA+o,f),f&&l.set(n.subarray(o,o+f),u),a+=f>>>4,u+=f,o=0,c=0;return r>0&&(c+=Ie(n,0,e,t,r)),this.counter=a,this.aes.pos=o,this.aes.len=c,l}AES_GCM_Decrypt_finish(){let{asm:e,heap:t}=this.aes.acquire_asm(),r=this.tagSize,i=this.adata,n=this.counter,a=this.aes.pos,s=this.aes.len,o=s-r;if(s<r)throw new Be("authentication tag not found");const c=new Uint8Array(o),u=new Uint8Array(t.subarray(a+o,a+s));let h=o;for(;15&h;h++)t[a+h]=0;e.mac(Ke.MAC.GCM,Ke.HEAP_DATA+a,h),e.cipher(Ke.DEC.CTR,Ke.HEAP_DATA+a,h),o&&c.set(t.subarray(a,a+o));const d=void 0!==i?i.length:0,f=(n-1<<4)+s-r;t[0]=0,t[1]=0,t[2]=0,t[3]=d>>>29,t[4]=d>>>21,t[5]=d>>>13&255,t[6]=d>>>5&255,t[7]=d<<3&255,t[8]=t[9]=t[10]=0,t[11]=f>>>29,t[12]=f>>>21&255,t[13]=f>>>13&255,t[14]=f>>>5&255,t[15]=f<<3&255,e.mac(Ke.MAC.GCM,Ke.HEAP_DATA,16),e.get_iv(Ke.HEAP_DATA),e.set_counter(0,0,0,this.gamma0),e.cipher(Ke.ENC.CTR,Ke.HEAP_DATA,16);let l=0;for(let e=0;e<r;++e)l|=u[e]^t[e];if(l)throw new ze("data integrity check failed");return this.counter=1,this.aes.pos=0,this.aes.len=0,c}AES_GCM_decrypt(e){const t=this.AES_GCM_Decrypt_process(e),r=this.AES_GCM_Decrypt_finish(),i=new Uint8Array(t.length+r.length);return t.length&&i.set(t),r.length&&i.set(r,t.length),i}AES_GCM_encrypt(e){const t=this.AES_GCM_Encrypt_process(e),r=this.AES_GCM_Encrypt_finish(),i=new Uint8Array(t.length+r.length);return t.length&&i.set(t),r.length&&i.set(r,t.length),i}_gcm_mac_process(e){let{asm:t,heap:r}=this.aes.acquire_asm(),i=0,n=e.length||0,a=0;for(;n>0;){for(a=Ie(r,0,e,i,n),i+=a,n-=a;15&a;)r[a++]=0;t.mac(Ke.MAC.GCM,Ke.HEAP_DATA,a)}}}const Ci=ue.getWebCrypto(),Ki=ue.getNodeCrypto(),Di=ue.getNodeBuffer();async function Ri(e,t){if("aes"!==e.substr(0,3))throw Error("GCM mode supports only AES cipher");if(ue.getWebCrypto()&&24!==t.length){const e=await Ci.importKey("raw",t,{name:"AES-GCM"},!1,["encrypt","decrypt"]);return{encrypt:async function(r,i,n=new Uint8Array){if(!r.length||!n.length&&-1!==navigator.userAgent.indexOf("Edge"))return Mi.encrypt(r,t,i,n);const a=await Ci.encrypt({name:"AES-GCM",iv:i,additionalData:n,tagLength:128},e,r);return new Uint8Array(a)},decrypt:async function(r,i,n=new Uint8Array){if(16===r.length||!n.length&&-1!==navigator.userAgent.indexOf("Edge"))return Mi.decrypt(r,t,i,n);const a=await Ci.decrypt({name:"AES-GCM",iv:i,additionalData:n,tagLength:128},e,r);return new Uint8Array(a)}}}return ue.getNodeCrypto()?{encrypt:async function(e,r,i=new Uint8Array){const n=new Ki.createCipheriv("aes-"+8*t.length+"-gcm",t,r);n.setAAD(i);const a=Di.concat([n.update(e),n.final(),n.getAuthTag()]);return new Uint8Array(a)},decrypt:async function(e,r,i=new Uint8Array){const n=new Ki.createDecipheriv("aes-"+8*t.length+"-gcm",t,r);n.setAAD(i),n.setAuthTag(e.slice(e.length-16,e.length));const a=Di.concat([n.update(e.slice(0,e.length-16)),n.final()]);return new Uint8Array(a)}}:{encrypt:async function(e,r,i){return Mi.encrypt(e,t,r,i)},decrypt:async function(e,r,i){return Mi.decrypt(e,t,r,i)}}}Ri.getNonce=function(e,t){const r=e.slice();for(let e=0;e<t.length;e++)r[4+e]^=t[e];return r},Ri.blockLength=16,Ri.ivLength=12,Ri.tagLength=16;var Ii={cfb:ai,gcm:Ri,experimentalGCM:Ri,eax:_i,ocb:Pi},Ui=mt((function(e){!function(e){var t=function(e){var t,r=new Float64Array(16);if(e)for(t=0;t<e.length;t++)r[t]=e[t];return r},r=function(){throw Error("no PRNG")},i=new Uint8Array(32);i[0]=9;var n=t(),a=t([1]),s=t([56129,1]),o=t([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),c=t([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),u=t([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),h=t([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),f=t([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function l(e,t,r,i){return function(e,t,r,i,n){var a,s=0;for(a=0;a<n;a++)s|=e[t+a]^r[i+a];return(1&s-1>>>8)-1}(e,t,r,i,32)}function p(e,t){var r;for(r=0;r<16;r++)e[r]=0|t[r]}function y(e){var t,r,i=1;for(t=0;t<16;t++)r=e[t]+i+65535,i=Math.floor(r/65536),e[t]=r-65536*i;e[0]+=i-1+37*(i-1)}function b(e,t,r){for(var i,n=~(r-1),a=0;a<16;a++)i=n&(e[a]^t[a]),e[a]^=i,t[a]^=i}function m(e,r){var i,n,a,s=t(),o=t();for(i=0;i<16;i++)o[i]=r[i];for(y(o),y(o),y(o),n=0;n<2;n++){for(s[0]=o[0]-65517,i=1;i<15;i++)s[i]=o[i]-65535-(s[i-1]>>16&1),s[i-1]&=65535;s[15]=o[15]-32767-(s[14]>>16&1),a=s[15]>>16&1,s[14]&=65535,b(o,s,1-a)}for(i=0;i<16;i++)e[2*i]=255&o[i],e[2*i+1]=o[i]>>8}function g(e,t){var r=new Uint8Array(32),i=new Uint8Array(32);return m(r,e),m(i,t),l(r,0,i,0)}function w(e){var t=new Uint8Array(32);return m(t,e),1&t[0]}function v(e,t){var r;for(r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}function _(e,t,r){for(var i=0;i<16;i++)e[i]=t[i]+r[i]}function k(e,t,r){for(var i=0;i<16;i++)e[i]=t[i]-r[i]}function A(e,t,r){var i,n,a=0,s=0,o=0,c=0,u=0,h=0,d=0,f=0,l=0,p=0,y=0,b=0,m=0,g=0,w=0,v=0,_=0,k=0,A=0,S=0,E=0,x=0,P=0,M=0,C=0,K=0,D=0,R=0,I=0,U=0,B=0,T=r[0],z=r[1],q=r[2],F=r[3],O=r[4],N=r[5],L=r[6],j=r[7],W=r[8],H=r[9],G=r[10],V=r[11],Z=r[12],Y=r[13],$=r[14],X=r[15];a+=(i=t[0])*T,s+=i*z,o+=i*q,c+=i*F,u+=i*O,h+=i*N,d+=i*L,f+=i*j,l+=i*W,p+=i*H,y+=i*G,b+=i*V,m+=i*Z,g+=i*Y,w+=i*$,v+=i*X,s+=(i=t[1])*T,o+=i*z,c+=i*q,u+=i*F,h+=i*O,d+=i*N,f+=i*L,l+=i*j,p+=i*W,y+=i*H,b+=i*G,m+=i*V,g+=i*Z,w+=i*Y,v+=i*$,_+=i*X,o+=(i=t[2])*T,c+=i*z,u+=i*q,h+=i*F,d+=i*O,f+=i*N,l+=i*L,p+=i*j,y+=i*W,b+=i*H,m+=i*G,g+=i*V,w+=i*Z,v+=i*Y,_+=i*$,k+=i*X,c+=(i=t[3])*T,u+=i*z,h+=i*q,d+=i*F,f+=i*O,l+=i*N,p+=i*L,y+=i*j,b+=i*W,m+=i*H,g+=i*G,w+=i*V,v+=i*Z,_+=i*Y,k+=i*$,A+=i*X,u+=(i=t[4])*T,h+=i*z,d+=i*q,f+=i*F,l+=i*O,p+=i*N,y+=i*L,b+=i*j,m+=i*W,g+=i*H,w+=i*G,v+=i*V,_+=i*Z,k+=i*Y,A+=i*$,S+=i*X,h+=(i=t[5])*T,d+=i*z,f+=i*q,l+=i*F,p+=i*O,y+=i*N,b+=i*L,m+=i*j,g+=i*W,w+=i*H,v+=i*G,_+=i*V,k+=i*Z,A+=i*Y,S+=i*$,E+=i*X,d+=(i=t[6])*T,f+=i*z,l+=i*q,p+=i*F,y+=i*O,b+=i*N,m+=i*L,g+=i*j,w+=i*W,v+=i*H,_+=i*G,k+=i*V,A+=i*Z,S+=i*Y,E+=i*$,x+=i*X,f+=(i=t[7])*T,l+=i*z,p+=i*q,y+=i*F,b+=i*O,m+=i*N,g+=i*L,w+=i*j,v+=i*W,_+=i*H,k+=i*G,A+=i*V,S+=i*Z,E+=i*Y,x+=i*$,P+=i*X,l+=(i=t[8])*T,p+=i*z,y+=i*q,b+=i*F,m+=i*O,g+=i*N,w+=i*L,v+=i*j,_+=i*W,k+=i*H,A+=i*G,S+=i*V,E+=i*Z,x+=i*Y,P+=i*$,M+=i*X,p+=(i=t[9])*T,y+=i*z,b+=i*q,m+=i*F,g+=i*O,w+=i*N,v+=i*L,_+=i*j,k+=i*W,A+=i*H,S+=i*G,E+=i*V,x+=i*Z,P+=i*Y,M+=i*$,C+=i*X,y+=(i=t[10])*T,b+=i*z,m+=i*q,g+=i*F,w+=i*O,v+=i*N,_+=i*L,k+=i*j,A+=i*W,S+=i*H,E+=i*G,x+=i*V,P+=i*Z,M+=i*Y,C+=i*$,K+=i*X,b+=(i=t[11])*T,m+=i*z,g+=i*q,w+=i*F,v+=i*O,_+=i*N,k+=i*L,A+=i*j,S+=i*W,E+=i*H,x+=i*G,P+=i*V,M+=i*Z,C+=i*Y,K+=i*$,D+=i*X,m+=(i=t[12])*T,g+=i*z,w+=i*q,v+=i*F,_+=i*O,k+=i*N,A+=i*L,S+=i*j,E+=i*W,x+=i*H,P+=i*G,M+=i*V,C+=i*Z,K+=i*Y,D+=i*$,R+=i*X,g+=(i=t[13])*T,w+=i*z,v+=i*q,_+=i*F,k+=i*O,A+=i*N,S+=i*L,E+=i*j,x+=i*W,P+=i*H,M+=i*G,C+=i*V,K+=i*Z,D+=i*Y,R+=i*$,I+=i*X,w+=(i=t[14])*T,v+=i*z,_+=i*q,k+=i*F,A+=i*O,S+=i*N,E+=i*L,x+=i*j,P+=i*W,M+=i*H,C+=i*G,K+=i*V,D+=i*Z,R+=i*Y,I+=i*$,U+=i*X,v+=(i=t[15])*T,s+=38*(k+=i*q),o+=38*(A+=i*F),c+=38*(S+=i*O),u+=38*(E+=i*N),h+=38*(x+=i*L),d+=38*(P+=i*j),f+=38*(M+=i*W),l+=38*(C+=i*H),p+=38*(K+=i*G),y+=38*(D+=i*V),b+=38*(R+=i*Z),m+=38*(I+=i*Y),g+=38*(U+=i*$),w+=38*(B+=i*X),a=(i=(a+=38*(_+=i*z))+(n=1)+65535)-65536*(n=Math.floor(i/65536)),s=(i=s+n+65535)-65536*(n=Math.floor(i/65536)),o=(i=o+n+65535)-65536*(n=Math.floor(i/65536)),c=(i=c+n+65535)-65536*(n=Math.floor(i/65536)),u=(i=u+n+65535)-65536*(n=Math.floor(i/65536)),h=(i=h+n+65535)-65536*(n=Math.floor(i/65536)),d=(i=d+n+65535)-65536*(n=Math.floor(i/65536)),f=(i=f+n+65535)-65536*(n=Math.floor(i/65536)),l=(i=l+n+65535)-65536*(n=Math.floor(i/65536)),p=(i=p+n+65535)-65536*(n=Math.floor(i/65536)),y=(i=y+n+65535)-65536*(n=Math.floor(i/65536)),b=(i=b+n+65535)-65536*(n=Math.floor(i/65536)),m=(i=m+n+65535)-65536*(n=Math.floor(i/65536)),g=(i=g+n+65535)-65536*(n=Math.floor(i/65536)),w=(i=w+n+65535)-65536*(n=Math.floor(i/65536)),v=(i=v+n+65535)-65536*(n=Math.floor(i/65536)),a=(i=(a+=n-1+37*(n-1))+(n=1)+65535)-65536*(n=Math.floor(i/65536)),s=(i=s+n+65535)-65536*(n=Math.floor(i/65536)),o=(i=o+n+65535)-65536*(n=Math.floor(i/65536)),c=(i=c+n+65535)-65536*(n=Math.floor(i/65536)),u=(i=u+n+65535)-65536*(n=Math.floor(i/65536)),h=(i=h+n+65535)-65536*(n=Math.floor(i/65536)),d=(i=d+n+65535)-65536*(n=Math.floor(i/65536)),f=(i=f+n+65535)-65536*(n=Math.floor(i/65536)),l=(i=l+n+65535)-65536*(n=Math.floor(i/65536)),p=(i=p+n+65535)-65536*(n=Math.floor(i/65536)),y=(i=y+n+65535)-65536*(n=Math.floor(i/65536)),b=(i=b+n+65535)-65536*(n=Math.floor(i/65536)),m=(i=m+n+65535)-65536*(n=Math.floor(i/65536)),g=(i=g+n+65535)-65536*(n=Math.floor(i/65536)),w=(i=w+n+65535)-65536*(n=Math.floor(i/65536)),v=(i=v+n+65535)-65536*(n=Math.floor(i/65536)),a+=n-1+37*(n-1),e[0]=a,e[1]=s,e[2]=o,e[3]=c,e[4]=u,e[5]=h,e[6]=d,e[7]=f,e[8]=l,e[9]=p,e[10]=y,e[11]=b,e[12]=m,e[13]=g,e[14]=w,e[15]=v}function S(e,t){A(e,t,t)}function E(e,r){var i,n=t();for(i=0;i<16;i++)n[i]=r[i];for(i=253;i>=0;i--)S(n,n),2!==i&&4!==i&&A(n,n,r);for(i=0;i<16;i++)e[i]=n[i]}function x(e,r,i){var n,a,o=new Uint8Array(32),c=new Float64Array(80),u=t(),h=t(),d=t(),f=t(),l=t(),p=t();for(a=0;a<31;a++)o[a]=r[a];for(o[31]=127&r[31]|64,o[0]&=248,v(c,i),a=0;a<16;a++)h[a]=c[a],f[a]=u[a]=d[a]=0;for(u[0]=f[0]=1,a=254;a>=0;--a)b(u,h,n=o[a>>>3]>>>(7&a)&1),b(d,f,n),_(l,u,d),k(u,u,d),_(d,h,f),k(h,h,f),S(f,l),S(p,u),A(u,d,u),A(d,h,l),_(l,u,d),k(u,u,d),S(h,u),k(d,f,p),A(u,d,s),_(u,u,f),A(d,d,u),A(u,f,p),A(f,h,c),S(h,l),b(u,h,n),b(d,f,n);for(a=0;a<16;a++)c[a+16]=u[a],c[a+32]=d[a],c[a+48]=h[a],c[a+64]=f[a];var y=c.subarray(32),g=c.subarray(16);return E(y,y),A(g,g,y),m(e,g),0}function P(e,t){return x(e,t,i)}function M(e,r){var i=t(),n=t(),a=t(),s=t(),o=t(),u=t(),h=t(),d=t(),f=t();k(i,e[1],e[0]),k(f,r[1],r[0]),A(i,i,f),_(n,e[0],e[1]),_(f,r[0],r[1]),A(n,n,f),A(a,e[3],r[3]),A(a,a,c),A(s,e[2],r[2]),_(s,s,s),k(o,n,i),k(u,s,a),_(h,s,a),_(d,n,i),A(e[0],o,u),A(e[1],d,h),A(e[2],h,u),A(e[3],o,d)}function C(e,t,r){var i;for(i=0;i<4;i++)b(e[i],t[i],r)}function K(e,r){var i=t(),n=t(),a=t();E(a,r[2]),A(i,r[0],a),A(n,r[1],a),m(e,n),e[31]^=w(i)<<7}function D(e,t,r){var i,s;for(p(e[0],n),p(e[1],a),p(e[2],a),p(e[3],n),s=255;s>=0;--s)C(e,t,i=r[s/8|0]>>(7&s)&1),M(t,e),M(e,e),C(e,t,i)}function R(e,r){var i=[t(),t(),t(),t()];p(i[0],u),p(i[1],h),p(i[2],a),A(i[3],u,h),D(e,i,r)}function I(i,n,a){var s,o,c=[t(),t(),t(),t()];for(a||r(n,32),(s=e.hash(n.subarray(0,32)))[0]&=248,s[31]&=127,s[31]|=64,R(c,s),K(i,c),o=0;o<32;o++)n[o+32]=i[o];return 0}var U=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function B(e,t){var r,i,n,a;for(i=63;i>=32;--i){for(r=0,n=i-32,a=i-12;n<a;++n)t[n]+=r-16*t[i]*U[n-(i-32)],r=Math.floor((t[n]+128)/256),t[n]-=256*r;t[n]+=r,t[i]=0}for(r=0,n=0;n<32;n++)t[n]+=r-(t[31]>>4)*U[n],r=t[n]>>8,t[n]&=255;for(n=0;n<32;n++)t[n]-=r*U[n];for(i=0;i<32;i++)t[i+1]+=t[i]>>8,e[i]=255&t[i]}function T(e){var t,r=new Float64Array(64);for(t=0;t<64;t++)r[t]=e[t];for(t=0;t<64;t++)e[t]=0;B(e,r)}function z(e,r){var i=t(),s=t(),c=t(),u=t(),h=t(),d=t(),l=t();return p(e[2],a),v(e[1],r),S(c,e[1]),A(u,c,o),k(c,c,e[2]),_(u,e[2],u),S(h,u),S(d,h),A(l,d,h),A(i,l,c),A(i,i,u),function(e,r){var i,n=t();for(i=0;i<16;i++)n[i]=r[i];for(i=250;i>=0;i--)S(n,n),1!==i&&A(n,n,r);for(i=0;i<16;i++)e[i]=n[i]}(i,i),A(i,i,c),A(i,i,u),A(i,i,u),A(e[0],i,u),S(s,e[0]),A(s,s,u),g(s,c)&&A(e[0],e[0],f),S(s,e[0]),A(s,s,u),g(s,c)?-1:(w(e[0])===r[31]>>7&&k(e[0],n,e[0]),A(e[3],e[0],e[1]),0)}function q(){for(var e=0;e<arguments.length;e++)if(!(arguments[e]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function F(e){for(var t=0;t<e.length;t++)e[t]=0}e.scalarMult=function(e,t){if(q(e,t),32!==e.length)throw Error("bad n size");if(32!==t.length)throw Error("bad p size");var r=new Uint8Array(32);return x(r,e,t),r},e.box={},e.box.keyPair=function(){var e,t,i=new Uint8Array(32),n=new Uint8Array(32);return e=i,r(t=n,32),P(e,t),{publicKey:i,secretKey:n}},e.box.keyPair.fromSecretKey=function(e){if(q(e),32!==e.length)throw Error("bad secret key size");var t=new Uint8Array(32);return P(t,e),{publicKey:t,secretKey:new Uint8Array(e)}},e.sign=function(r,i){if(q(r,i),64!==i.length)throw Error("bad secret key size");var n=new Uint8Array(64+r.length);return function(r,i,n,a){var s,o,c,u,h,d=new Float64Array(64),f=[t(),t(),t(),t()];(s=e.hash(a.subarray(0,32)))[0]&=248,s[31]&=127,s[31]|=64;var l=n+64;for(u=0;u<n;u++)r[64+u]=i[u];for(u=0;u<32;u++)r[32+u]=s[32+u];for(T(c=e.hash(r.subarray(32,l))),R(f,c),K(r,f),u=32;u<64;u++)r[u]=a[u];for(T(o=e.hash(r.subarray(0,l))),u=0;u<64;u++)d[u]=0;for(u=0;u<32;u++)d[u]=c[u];for(u=0;u<32;u++)for(h=0;h<32;h++)d[u+h]+=o[u]*s[h];B(r.subarray(32),d)}(n,r,r.length,i),n},e.sign.detached=function(t,r){for(var i=e.sign(t,r),n=new Uint8Array(64),a=0;a<n.length;a++)n[a]=i[a];return n},e.sign.detached.verify=function(r,i,n){if(q(r,i,n),64!==i.length)throw Error("bad signature size");if(32!==n.length)throw Error("bad public key size");var a,s=new Uint8Array(64+r.length),o=new Uint8Array(64+r.length);for(a=0;a<64;a++)s[a]=i[a];for(a=0;a<r.length;a++)s[a+64]=r[a];return function(r,i,n,a){var s,o,c=new Uint8Array(32),u=[t(),t(),t(),t()],h=[t(),t(),t(),t()];if(n<64)return-1;if(z(h,a))return-1;for(s=0;s<n;s++)r[s]=i[s];for(s=0;s<32;s++)r[s+32]=a[s];if(T(o=e.hash(r.subarray(0,n))),D(u,h,o),R(h,i.subarray(32)),M(u,h),K(c,u),n-=64,l(i,0,c,0)){for(s=0;s<n;s++)r[s]=0;return-1}for(s=0;s<n;s++)r[s]=i[s+64];return n}(o,s,s.length,n)>=0},e.sign.keyPair=function(){var e=new Uint8Array(32),t=new Uint8Array(64);return I(e,t),{publicKey:e,secretKey:t}},e.sign.keyPair.fromSecretKey=function(e){if(q(e),64!==e.length)throw Error("bad secret key size");for(var t=new Uint8Array(32),r=0;r<t.length;r++)t[r]=e[32+r];return{publicKey:t,secretKey:new Uint8Array(e)}},e.sign.keyPair.fromSeed=function(e){if(q(e),32!==e.length)throw Error("bad seed size");for(var t=new Uint8Array(32),r=new Uint8Array(64),i=0;i<32;i++)r[i]=e[i];return I(t,r,!0),{publicKey:t,secretKey:r}},e.setPRNG=function(e){r=e},function(){var t="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(t&&t.getRandomValues){e.setPRNG((function(e,r){var i,n=new Uint8Array(r);for(i=0;i<r;i+=65536)t.getRandomValues(n.subarray(i,i+Math.min(r-i,65536)));for(i=0;i<r;i++)e[i]=n[i];F(n)}))}else(t=d.default)&&t.randomBytes&&e.setPRNG((function(e,r){var i,n=t.randomBytes(r);for(i=0;i<r;i++)e[i]=n[i];F(n)}))}()}(e.exports?e.exports:self.nacl=self.nacl||{})}));const Bi=ue.getNodeCrypto();async function Ti(t){const r=new Uint8Array(t);if("undefined"!=typeof crypto&&crypto.getRandomValues)crypto.getRandomValues(r);else if(void 0!==e&&"object"==typeof e.msCrypto&&"function"==typeof e.msCrypto.getRandomValues)e.msCrypto.getRandomValues(r);else if(Bi){const e=Bi.randomBytes(r.length);r.set(e)}else{if(!qi.buffer)throw Error("No secure random number generator available.");await qi.get(r)}return r}async function zi(e,t){const r=await ue.getBigInteger();if(t.lt(e))throw Error("Illegal parameter value: max <= min");const i=t.sub(e),n=i.byteLength();return new r(await Ti(n+8)).mod(i).add(e)}const qi=new class{constructor(){this.buffer=null,this.size=null,this.callback=null}init(e,t){this.buffer=new Uint8Array(e),this.size=0,this.callback=t}set(e){if(!this.buffer)throw Error("RandomBuffer is not initialized");if(!(e instanceof Uint8Array))throw Error("Invalid type: buf not an Uint8Array");const t=this.buffer.length-this.size;e.length>t&&(e=e.subarray(0,t)),this.buffer.set(e,this.size),this.size+=e.length}async get(e){if(!this.buffer)throw Error("RandomBuffer is not initialized");if(!(e instanceof Uint8Array))throw Error("Invalid type: buf not an Uint8Array");if(this.size<e.length){if(!this.callback)throw Error("Random number buffer depleted");return await this.callback(),this.get(e)}for(let t=0;t<e.length;t++)e[t]=this.buffer[--this.size],this.buffer[this.size]=0}};var Fi=/*#__PURE__*/Object.freeze({__proto__:null,getRandomBytes:Ti,getRandomBigInteger:zi,randomBuffer:qi});async function Oi(e,t,r){const i=await ue.getBigInteger(),n=new i(1),a=n.leftShift(new i(e-1)),s=new i(30),o=[1,6,5,4,3,2,1,4,3,2,1,2,1,4,3,2,1,2,1,4,3,2,1,6,5,4,3,2,1,2],c=await zi(a,a.leftShift(n));let u=c.mod(s).toNumber();do{c.iadd(new i(o[u])),u=(u+o[u])%o.length,c.bitLength()>e&&(c.imod(a.leftShift(n)).iadd(a),u=c.mod(s).toNumber())}while(!await Ni(c,t,r));return c}async function Ni(e,t,r){return!(t&&!e.dec().gcd(t).isOne())&&(!!await async function(e){const t=await ue.getBigInteger();return Li.every(r=>0!==e.mod(new t(r)))}(e)&&(!!await async function(e,t){const r=await ue.getBigInteger();return(t=t||new r(2)).modExp(e.dec(),e).isOne()}(e)&&!!await async function(e,t,r){const i=await ue.getBigInteger(),n=e.bitLength();t||(t=Math.max(1,n/48|0));const a=e.dec();let s=0;for(;!a.getBit(s);)s++;const o=e.rightShift(new i(s));for(;t>0;t--){let t,n=(r?r():await zi(new i(2),a)).modExp(o,e);if(!n.isOne()&&!n.equal(a)){for(t=1;t<s;t++){if(n=n.mul(n).mod(e),n.isOne())return!1;if(n.equal(a))break}if(t===s)return!1}}return!0}(e,r)))}const Li=[7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997,1009,1013,1019,1021,1031,1033,1039,1049,1051,1061,1063,1069,1087,1091,1093,1097,1103,1109,1117,1123,1129,1151,1153,1163,1171,1181,1187,1193,1201,1213,1217,1223,1229,1231,1237,1249,1259,1277,1279,1283,1289,1291,1297,1301,1303,1307,1319,1321,1327,1361,1367,1373,1381,1399,1409,1423,1427,1429,1433,1439,1447,1451,1453,1459,1471,1481,1483,1487,1489,1493,1499,1511,1523,1531,1543,1549,1553,1559,1567,1571,1579,1583,1597,1601,1607,1609,1613,1619,1621,1627,1637,1657,1663,1667,1669,1693,1697,1699,1709,1721,1723,1733,1741,1747,1753,1759,1777,1783,1787,1789,1801,1811,1823,1831,1847,1861,1867,1871,1873,1877,1879,1889,1901,1907,1913,1931,1933,1949,1951,1973,1979,1987,1993,1997,1999,2003,2011,2017,2027,2029,2039,2053,2063,2069,2081,2083,2087,2089,2099,2111,2113,2129,2131,2137,2141,2143,2153,2161,2179,2203,2207,2213,2221,2237,2239,2243,2251,2267,2269,2273,2281,2287,2293,2297,2309,2311,2333,2339,2341,2347,2351,2357,2371,2377,2381,2383,2389,2393,2399,2411,2417,2423,2437,2441,2447,2459,2467,2473,2477,2503,2521,2531,2539,2543,2549,2551,2557,2579,2591,2593,2609,2617,2621,2633,2647,2657,2659,2663,2671,2677,2683,2687,2689,2693,2699,2707,2711,2713,2719,2729,2731,2741,2749,2753,2767,2777,2789,2791,2797,2801,2803,2819,2833,2837,2843,2851,2857,2861,2879,2887,2897,2903,2909,2917,2927,2939,2953,2957,2963,2969,2971,2999,3001,3011,3019,3023,3037,3041,3049,3061,3067,3079,3083,3089,3109,3119,3121,3137,3163,3167,3169,3181,3187,3191,3203,3209,3217,3221,3229,3251,3253,3257,3259,3271,3299,3301,3307,3313,3319,3323,3329,3331,3343,3347,3359,3361,3371,3373,3389,3391,3407,3413,3433,3449,3457,3461,3463,3467,3469,3491,3499,3511,3517,3527,3529,3533,3539,3541,3547,3557,3559,3571,3581,3583,3593,3607,3613,3617,3623,3631,3637,3643,3659,3671,3673,3677,3691,3697,3701,3709,3719,3727,3733,3739,3761,3767,3769,3779,3793,3797,3803,3821,3823,3833,3847,3851,3853,3863,3877,3881,3889,3907,3911,3917,3919,3923,3929,3931,3943,3947,3967,3989,4001,4003,4007,4013,4019,4021,4027,4049,4051,4057,4073,4079,4091,4093,4099,4111,4127,4129,4133,4139,4153,4157,4159,4177,4201,4211,4217,4219,4229,4231,4241,4243,4253,4259,4261,4271,4273,4283,4289,4297,4327,4337,4339,4349,4357,4363,4373,4391,4397,4409,4421,4423,4441,4447,4451,4457,4463,4481,4483,4493,4507,4513,4517,4519,4523,4547,4549,4561,4567,4583,4591,4597,4603,4621,4637,4639,4643,4649,4651,4657,4663,4673,4679,4691,4703,4721,4723,4729,4733,4751,4759,4783,4787,4789,4793,4799,4801,4813,4817,4831,4861,4871,4877,4889,4903,4909,4919,4931,4933,4937,4943,4951,4957,4967,4969,4973,4987,4993,4999];const ji=[];async function Wi(e,t){const r=e.length;if(r>t-11)throw Error("Message too long");const i=await async function(e){const t=new Uint8Array(e);let r=0;for(;r<e;){const i=await Ti(e-r);for(let e=0;e<i.length;e++)0!==i[e]&&(t[r++]=i[e])}return t}(t-r-3),n=new Uint8Array(t);return n[1]=2,n.set(i,2),n.set(e,t-r),n}function Hi(e){let t=2;for(;0!==e[t]&&t<e.length;)t++;const r=t-2,i=e[t++];if(0===e[0]&&2===e[1]&&r>=8&&0===i)return e.subarray(t);throw Error("Decryption error")}async function Gi(e,t,r){let i;if(t.length!==Qr.getHashByteLength(e))throw Error("Invalid hash length");const n=new Uint8Array(ji[e].length);for(i=0;i<ji[e].length;i++)n[i]=ji[e][i];const a=n.length+t.length;if(r<a+11)throw Error("Intended encoded message length too short");const s=new Uint8Array(r-a-3).fill(255),o=new Uint8Array(r);return o[1]=1,o.set(s,2),o.set(n,r-a),o.set(t,r-t.length),o}ji[1]=[48,32,48,12,6,8,42,134,72,134,247,13,2,5,5,0,4,16],ji[2]=[48,33,48,9,6,5,43,14,3,2,26,5,0,4,20],ji[3]=[48,33,48,9,6,5,43,36,3,2,1,5,0,4,20],ji[8]=[48,49,48,13,6,9,96,134,72,1,101,3,4,2,1,5,0,4,32],ji[9]=[48,65,48,13,6,9,96,134,72,1,101,3,4,2,2,5,0,4,48],ji[10]=[48,81,48,13,6,9,96,134,72,1,101,3,4,2,3,5,0,4,64],ji[11]=[48,45,48,13,6,9,96,134,72,1,101,3,4,2,4,5,0,4,28];var Vi=/*#__PURE__*/Object.freeze({__proto__:null,emeEncode:Wi,emeDecode:Hi,emsaEncode:Gi});const Zi=ue.getWebCrypto(),Yi=ue.getNodeCrypto(),$i=Yi?y.default:void 0;function Xi(e,t){return"function"!=typeof e.then?new Promise((function(r,i){e.onerror=function(){i(Error(t))},e.oncomplete=function(e){r(e.target.result)}})):e}const Ji=ue.detectNode()?$i.define("RSAPrivateKey",(function(){this.seq().obj(this.key("version").int(),this.key("modulus").int(),this.key("publicExponent").int(),this.key("privateExponent").int(),this.key("prime1").int(),this.key("prime2").int(),this.key("exponent1").int(),this.key("exponent2").int(),this.key("coefficient").int())})):void 0,Qi=ue.detectNode()?$i.define("RSAPubliceKey",(function(){this.seq().obj(this.key("modulus").int(),this.key("publicExponent").int())})):void 0;var en=/*#__PURE__*/Object.freeze({__proto__:null,sign:async function(e,t,r,i,n,a,s,o,c){if(t&&!ue.isStream(t))if(ue.getWebCrypto())try{return await async function(e,t,r,i,n,a,s,o){const c=await async function(e,t,r,i,n,a){const s=await ue.getBigInteger(),o=new s(i),c=new s(n),u=new s(r);let h=u.mod(c.dec()),d=u.mod(o.dec());return d=d.toUint8Array(),h=h.toUint8Array(),{kty:"RSA",n:be(e,!0),e:be(t,!0),d:be(r,!0),p:be(n,!0),q:be(i,!0),dp:be(h,!0),dq:be(d,!0),qi:be(a,!0),ext:!0}}(r,i,n,a,s,o),u={name:"RSASSA-PKCS1-v1_5",hash:{name:e}},h=await Zi.importKey("jwk",c,u,!1,["sign"]);return new Uint8Array(await Zi.sign({name:"RSASSA-PKCS1-v1_5",hash:e},h,t))}(ge.read(ge.webHash,e),t,r,i,n,a,s,o)}catch(e){ue.printDebugError(e)}else if(ue.getNodeCrypto())return async function(e,t,r,i,n,a,s,o){const{default:c}=await Promise.resolve().then((function(){return Fd})),u=new c(a),h=new c(s),d=new c(n),f=d.mod(h.subn(1)),l=d.mod(u.subn(1)),p=Yi.createSign(ge.read(ge.hash,e));p.write(t),p.end();const y={version:0,modulus:new c(r),publicExponent:new c(i),privateExponent:new c(n),prime1:new c(s),prime2:new c(a),exponent1:f,exponent2:l,coefficient:new c(o)};if(void 0!==Yi.createPrivateKey){const e=Ji.encode(y,"der");return new Uint8Array(p.sign({key:e,format:"der",type:"pkcs1"}))}const b=Ji.encode(y,"pem",{label:"RSA PRIVATE KEY"});return new Uint8Array(p.sign(b))}(e,t,r,i,n,a,s,o);return async function(e,t,r,i){const n=await ue.getBigInteger();t=new n(t);const a=new n(await Gi(e,i,t.byteLength()));if(r=new n(r),a.gte(t))throw Error("Message size cannot exceed modulus size");return a.modExp(r,t).toUint8Array("be",t.byteLength())}(e,r,n,c)},verify:async function(e,t,r,i,n,a){if(t&&!ue.isStream(t))if(ue.getWebCrypto())try{return await async function(e,t,r,i,n){const a=function(e,t){return{kty:"RSA",n:be(e,!0),e:be(t,!0),ext:!0}}(i,n),s=await Zi.importKey("jwk",a,{name:"RSASSA-PKCS1-v1_5",hash:{name:e}},!1,["verify"]);return Zi.verify({name:"RSASSA-PKCS1-v1_5",hash:e},s,r,t)}(ge.read(ge.webHash,e),t,r,i,n)}catch(e){ue.printDebugError(e)}else if(ue.getNodeCrypto())return async function(e,t,r,i,n){const{default:a}=await Promise.resolve().then((function(){return Fd})),s=Yi.createVerify(ge.read(ge.hash,e));s.write(t),s.end();const o={modulus:new a(i),publicExponent:new a(n)};let c;if(void 0!==Yi.createPrivateKey){const e=Qi.encode(o,"der");c={key:e,format:"der",type:"pkcs1"}}else c=Qi.encode(o,"pem",{label:"RSA PUBLIC KEY"});try{return await s.verify(c,r)}catch(e){return!1}}(e,t,r,i,n);return async function(e,t,r,i,n){const a=await ue.getBigInteger();if(r=new a(r),t=new a(t),i=new a(i),t.gte(r))throw Error("Signature size cannot exceed modulus size");const s=t.modExp(i,r).toUint8Array("be",r.byteLength()),o=await Gi(e,n,r.byteLength());return ue.equalsUint8Array(s,o)}(e,r,i,n,a)},encrypt:async function(e,t,r){return ue.getNodeCrypto()?async function(e,t,r){const{default:i}=await Promise.resolve().then((function(){return Fd})),n={modulus:new i(t),publicExponent:new i(r)};let a;if(void 0!==Yi.createPrivateKey){const e=Qi.encode(n,"der");a={key:e,format:"der",type:"pkcs1",padding:Yi.constants.RSA_PKCS1_PADDING}}else{const e=Qi.encode(n,"pem",{label:"RSA PUBLIC KEY"});a={key:e,padding:Yi.constants.RSA_PKCS1_PADDING}}return new Uint8Array(Yi.publicEncrypt(a,e))}(e,t,r):async function(e,t,r){const i=await ue.getBigInteger();if(t=new i(t),e=new i(await Wi(e,t.byteLength())),r=new i(r),e.gte(t))throw Error("Message size cannot exceed modulus size");return e.modExp(r,t).toUint8Array("be",t.byteLength())}(e,t,r)},decrypt:async function(e,t,r,i,n,a,s){return ue.getNodeCrypto()?async function(e,t,r,i,n,a,s){const{default:o}=await Promise.resolve().then((function(){return Fd})),c=new o(n),u=new o(a),h=new o(i),d=h.mod(u.subn(1)),f=h.mod(c.subn(1)),l={version:0,modulus:new o(t),publicExponent:new o(r),privateExponent:new o(i),prime1:new o(a),prime2:new o(n),exponent1:d,exponent2:f,coefficient:new o(s)};let p;if(void 0!==Yi.createPrivateKey){const e=Ji.encode(l,"der");p={key:e,format:"der",type:"pkcs1",padding:Yi.constants.RSA_PKCS1_PADDING}}else{const e=Ji.encode(l,"pem",{label:"RSA PRIVATE KEY"});p={key:e,padding:Yi.constants.RSA_PKCS1_PADDING}}try{return new Uint8Array(Yi.privateDecrypt(p,e))}catch(e){throw Error("Decryption error")}}(e,t,r,i,n,a,s):async function(e,t,r,i,n,a,s){const o=await ue.getBigInteger();if(e=new o(e),t=new o(t),r=new o(r),i=new o(i),n=new o(n),a=new o(a),s=new o(s),e.gte(t))throw Error("Data too large.");const c=i.mod(a.dec()),u=i.mod(n.dec()),h=(await zi(new o(2),t)).mod(t),d=h.modInv(t).modExp(r,t),f=(e=e.mul(d).mod(t)).modExp(u,n),l=e.modExp(c,a);let p=s.mul(l.sub(f)).mod(a).mul(n).add(f);return p=p.mul(h).mod(t),Hi(p.toUint8Array("be",t.byteLength()))}(e,t,r,i,n,a,s)},generate:async function(t,r){if(r=new(await ue.getBigInteger())(r),ue.getWebCrypto()){let i,n;if(e.crypto&&e.crypto.subtle||e.msCrypto)n={name:"RSASSA-PKCS1-v1_5",modulusLength:t,publicExponent:r.toUint8Array(),hash:{name:"SHA-1"}},i=Zi.generateKey(n,!0,["sign","verify"]),i=await Xi(i,"Error generating RSA key pair.");else{if(!e.crypto||!e.crypto.webkitSubtle)throw Error("Unknown WebCrypto implementation");n={name:"RSA-OAEP",modulusLength:t,publicExponent:r.toUint8Array(),hash:{name:"SHA-1"}},i=await Zi.generateKey(n,!0,["encrypt","decrypt"])}let a=Zi.exportKey("jwk",i.privateKey);return a=await Xi(a,"Error exporting RSA key pair."),a instanceof ArrayBuffer&&(a=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(a)))),{n:ye(a.n),e:r.toUint8Array(),d:ye(a.d),p:ye(a.q),q:ye(a.p),u:ye(a.qi)}}if(ue.getNodeCrypto()&&Yi.generateKeyPair&&Ji){const e={modulusLength:t,publicExponent:r.toNumber(),publicKeyEncoding:{type:"pkcs1",format:"der"},privateKeyEncoding:{type:"pkcs1",format:"der"}},i=await new Promise((t,r)=>Yi.generateKeyPair("rsa",e,(e,i,n)=>{e?r(e):t(Ji.decode(n,"der"))}));return{n:i.modulus.toArrayLike(Uint8Array),e:i.publicExponent.toArrayLike(Uint8Array),d:i.privateExponent.toArrayLike(Uint8Array),p:i.prime2.toArrayLike(Uint8Array),q:i.prime1.toArrayLike(Uint8Array),u:i.coefficient.toArrayLike(Uint8Array)}}let i=await Oi(t-(t>>1),r,40),n=await Oi(t>>1,r,40);i.lt(n)&&([n,i]=[i,n]);const a=n.dec().imul(i.dec());return{n:n.mul(i).toUint8Array(),e:r.toUint8Array(),d:r.modInv(a).toUint8Array(),p:n.toUint8Array(),q:i.toUint8Array(),u:n.modInv(i).toUint8Array()}},validateParams:async function(e,t,r,i,n,a){const s=await ue.getBigInteger();if(e=new s(e),i=new s(i),n=new s(n),!i.mul(n).equal(e))return!1;const o=new s(2);if(a=new s(a),!i.mul(a).mod(n).isOne())return!1;t=new s(t),r=new s(r);const c=new s(Math.floor(e.bitLength()/3)),u=await zi(o,o.leftShift(c)),h=u.mul(r).mul(t);return!(!h.mod(i.dec()).equal(u)||!h.mod(n.dec()).equal(u))}});var tn=/*#__PURE__*/Object.freeze({__proto__:null,encrypt:async function(e,t,r,i){const n=await ue.getBigInteger();t=new n(t),r=new n(r),i=new n(i);const a=new n(await Wi(e,t.byteLength())),s=await zi(new n(1),t.dec());return{c1:r.modExp(s,t).toUint8Array(),c2:i.modExp(s,t).imul(a).imod(t).toUint8Array()}},decrypt:async function(e,t,r,i){const n=await ue.getBigInteger();return e=new n(e),t=new n(t),r=new n(r),i=new n(i),Hi(e.modExp(i,r).modInv(r).imul(t).imod(r).toUint8Array("be",r.byteLength()))},validateParams:async function(e,t,r,i){const n=await ue.getBigInteger();e=new n(e),t=new n(t),r=new n(r);const a=new n(1);if(t.lte(a)||t.gte(e))return!1;const s=new n(e.bitLength()),o=new n(1023);if(s.lt(o))return!1;if(!t.modExp(e.dec(),e).isOne())return!1;let c=t;const u=new n(1),h=new n(2).leftShift(new n(17));for(;u.lt(h);){if(c=c.mul(t).imod(e),c.isOne())return!1;u.iinc()}i=new n(i);const d=new n(2),f=await zi(d.leftShift(s.dec()),d.leftShift(s)),l=e.dec().imul(f).iadd(i);return!!r.equal(t.modExp(l,e))}});class rn{constructor(e){if(e instanceof rn)this.oid=e.oid;else if(ue.isArray(e)||ue.isUint8Array(e)){if(6===(e=new Uint8Array(e))[0]){if(e[1]!==e.length-2)throw Error("Length mismatch in DER encoded oid");e=e.subarray(2)}this.oid=e}else this.oid=""}read(e){if(e.length>=1){const t=e[0];if(e.length>=1+t)return this.oid=e.subarray(1,1+t),1+this.oid.length}throw Error("Invalid oid")}write(){return ue.concatUint8Array([new Uint8Array([this.oid.length]),this.oid])}toHex(){return ue.uint8ArrayToHex(this.oid)}getName(){const e=this.toHex();if(ge.curve[e])return ge.write(ge.curve,e);throw Error("Unknown curve object identifier.")}}function nn(e,t){return e.keyPair({priv:t})}function an(e,t){const r=e.keyPair({pub:t});if(!0!==r.validate().result)throw Error("Invalid elliptic public key");return r}async function sn(e){if(!we.useIndutnyElliptic)throw Error("This curve is only supported in the full build of OpenPGP.js");const{default:t}=await Promise.resolve().then((function(){return al}));return new t.ec(e)}const on=ue.getWebCrypto(),cn=ue.getNodeCrypto(),un={p256:"P-256",p384:"P-384",p521:"P-521"},hn=cn?cn.getCurves():[],dn=cn?{secp256k1:hn.includes("secp256k1")?"secp256k1":void 0,p256:hn.includes("prime256v1")?"prime256v1":void 0,p384:hn.includes("secp384r1")?"secp384r1":void 0,p521:hn.includes("secp521r1")?"secp521r1":void 0,ed25519:hn.includes("ED25519")?"ED25519":void 0,curve25519:hn.includes("X25519")?"X25519":void 0,brainpoolP256r1:hn.includes("brainpoolP256r1")?"brainpoolP256r1":void 0,brainpoolP384r1:hn.includes("brainpoolP384r1")?"brainpoolP384r1":void 0,brainpoolP512r1:hn.includes("brainpoolP512r1")?"brainpoolP512r1":void 0}:{},fn={p256:{oid:[6,8,42,134,72,206,61,3,1,7],keyType:ge.publicKey.ecdsa,hash:ge.hash.sha256,cipher:ge.symmetric.aes128,node:dn.p256,web:un.p256,payloadSize:32,sharedSize:256},p384:{oid:[6,5,43,129,4,0,34],keyType:ge.publicKey.ecdsa,hash:ge.hash.sha384,cipher:ge.symmetric.aes192,node:dn.p384,web:un.p384,payloadSize:48,sharedSize:384},p521:{oid:[6,5,43,129,4,0,35],keyType:ge.publicKey.ecdsa,hash:ge.hash.sha512,cipher:ge.symmetric.aes256,node:dn.p521,web:un.p521,payloadSize:66,sharedSize:528},secp256k1:{oid:[6,5,43,129,4,0,10],keyType:ge.publicKey.ecdsa,hash:ge.hash.sha256,cipher:ge.symmetric.aes128,node:dn.secp256k1,payloadSize:32},ed25519:{oid:[6,9,43,6,1,4,1,218,71,15,1],keyType:ge.publicKey.eddsa,hash:ge.hash.sha512,node:!1,payloadSize:32},curve25519:{oid:[6,10,43,6,1,4,1,151,85,1,5,1],keyType:ge.publicKey.ecdh,hash:ge.hash.sha256,cipher:ge.symmetric.aes128,node:!1,payloadSize:32},brainpoolP256r1:{oid:[6,9,43,36,3,3,2,8,1,1,7],keyType:ge.publicKey.ecdsa,hash:ge.hash.sha256,cipher:ge.symmetric.aes128,node:dn.brainpoolP256r1,payloadSize:32},brainpoolP384r1:{oid:[6,9,43,36,3,3,2,8,1,1,11],keyType:ge.publicKey.ecdsa,hash:ge.hash.sha384,cipher:ge.symmetric.aes192,node:dn.brainpoolP384r1,payloadSize:48},brainpoolP512r1:{oid:[6,9,43,36,3,3,2,8,1,1,13],keyType:ge.publicKey.ecdsa,hash:ge.hash.sha512,cipher:ge.symmetric.aes256,node:dn.brainpoolP512r1,payloadSize:64}};class ln{constructor(e,t){try{(ue.isArray(e)||ue.isUint8Array(e))&&(e=new rn(e)),e instanceof rn&&(e=e.getName()),this.name=ge.write(ge.curve,e)}catch(e){throw Error("Not valid curve")}t=t||fn[this.name],this.keyType=t.keyType,this.oid=t.oid,this.hash=t.hash,this.cipher=t.cipher,this.node=t.node&&fn[this.name],this.web=t.web&&fn[this.name],this.payloadSize=t.payloadSize,this.web&&ue.getWebCrypto()?this.type="web":this.node&&ue.getNodeCrypto()?this.type="node":"curve25519"===this.name?this.type="curve25519":"ed25519"===this.name&&(this.type="ed25519")}async genKeyPair(){let e;switch(this.type){case"web":try{return await async function(e){const t=await on.generateKey({name:"ECDSA",namedCurve:un[e]},!0,["sign","verify"]),r=await on.exportKey("jwk",t.privateKey);return{publicKey:yn(await on.exportKey("jwk",t.publicKey)),privateKey:ye(r.d)}}(this.name)}catch(e){ue.printDebugError("Browser did not support generating ec key "+e.message);break}case"node":return async function(e){const t=cn.createECDH(dn[e]);return await t.generateKeys(),{publicKey:new Uint8Array(t.getPublicKey()),privateKey:new Uint8Array(t.getPrivateKey())}}(this.name);case"curve25519":{const t=await Ti(32);t[0]=127&t[0]|64,t[31]&=248;const r=t.slice().reverse();return e=Ui.box.keyPair.fromSecretKey(r),{publicKey:ue.concatUint8Array([new Uint8Array([64]),e.publicKey]),privateKey:t}}case"ed25519":{const e=await Ti(32),t=Ui.sign.keyPair.fromSeed(e);return{publicKey:ue.concatUint8Array([new Uint8Array([64]),t.publicKey]),privateKey:e}}}const t=await sn(this.name);return e=await t.genKeyPair({entropy:ue.uint8ArrayToString(await Ti(32))}),{publicKey:new Uint8Array(e.getPublic("array",!1)),privateKey:e.getPrivate().toArrayLike(Uint8Array)}}}async function pn(e,t,r,i){const n={p256:!0,p384:!0,p521:!0,secp256k1:!0,curve25519:e===ge.publicKey.ecdh,brainpoolP256r1:!0,brainpoolP384r1:!0,brainpoolP512r1:!0},a=t.getName();if(!n[a])return!1;if("curve25519"===a){i=i.slice().reverse();const{publicKey:e}=Ui.box.keyPair.fromSecretKey(i);r=new Uint8Array(r);const t=new Uint8Array([64,...e]);return!!ue.equalsUint8Array(t,r)}const s=await sn(a);try{r=an(s,r).getPublic()}catch(e){return!1}return!!nn(s,i).getPublic().eq(r)}function yn(e){const t=ye(e.x),r=ye(e.y),i=new Uint8Array(t.length+r.length+1);return i[0]=4,i.set(t,1),i.set(r,t.length+1),i}function bn(e,t,r){const i=e,n=r.slice(1,i+1),a=r.slice(i+1,2*i+1);return{kty:"EC",crv:t,x:be(n,!0),y:be(a,!0),ext:!0}}function mn(e,t,r,i){const n=bn(e,t,r);return n.d=be(i,!0),n}const gn=ue.getWebCrypto(),wn=ue.getNodeCrypto();async function vn(e,t,r,i,n,a){const s=new ln(e);if(r&&!ue.isStream(r)){const e={publicKey:i,privateKey:n};switch(s.type){case"web":try{return await async function(e,t,r,i){const n=e.payloadSize,a=mn(e.payloadSize,un[e.name],i.publicKey,i.privateKey),s=await gn.importKey("jwk",a,{name:"ECDSA",namedCurve:un[e.name],hash:{name:ge.read(ge.webHash,e.hash)}},!1,["sign"]),o=new Uint8Array(await gn.sign({name:"ECDSA",namedCurve:un[e.name],hash:{name:ge.read(ge.webHash,t)}},s,r));return{r:o.slice(0,n),s:o.slice(n,n<<1)}}(s,t,r,e)}catch(e){if("p521"!==s.name&&("DataError"===e.name||"OperationError"===e.name))throw e;ue.printDebugError("Browser did not support signing: "+e.message)}break;case"node":{const i=await async function(e,t,r,i){const n=wn.createSign(ge.read(ge.hash,t));n.write(r),n.end();const a=Sn.encode({version:1,parameters:e.oid,privateKey:Array.from(i.privateKey),publicKey:{unused:0,data:Array.from(i.publicKey)}},"pem",{label:"EC PRIVATE KEY"});return An.decode(n.sign(a),"der")}(s,t,r,e);return{r:i.r.toArrayLike(Uint8Array),s:i.s.toArrayLike(Uint8Array)}}}}return async function(e,t,r){const i=nn(await sn(e.name),r).sign(t);return{r:i.r.toArrayLike(Uint8Array),s:i.s.toArrayLike(Uint8Array)}}(s,a,n)}async function _n(e,t,r,i,n,a){const s=new ln(e);if(i&&!ue.isStream(i))switch(s.type){case"web":try{return await async function(e,t,{r,s:i},n,a){const s=bn(e.payloadSize,un[e.name],a),o=await gn.importKey("jwk",s,{name:"ECDSA",namedCurve:un[e.name],hash:{name:ge.read(ge.webHash,e.hash)}},!1,["verify"]),c=ue.concatUint8Array([r,i]).buffer;return gn.verify({name:"ECDSA",namedCurve:un[e.name],hash:{name:ge.read(ge.webHash,t)}},o,c,n)}(s,t,r,i,n)}catch(e){if("p521"!==s.name&&("DataError"===e.name||"OperationError"===e.name))throw e;ue.printDebugError("Browser did not support verifying: "+e.message)}break;case"node":return async function(e,t,{r,s:i},n,a){const{default:s}=await Promise.resolve().then((function(){return Fd})),o=wn.createVerify(ge.read(ge.hash,t));o.write(n),o.end();const c=xn.encode({algorithm:{algorithm:[1,2,840,10045,2,1],parameters:e.oid},subjectPublicKey:{unused:0,data:Array.from(a)}},"pem",{label:"PUBLIC KEY"}),u=An.encode({r:new s(r),s:new s(i)},"der");try{return o.verify(c,u)}catch(e){return!1}}(s,t,r,i,n)}return async function(e,t,r,i){return an(await sn(e.name),i).verify(r,t)}(s,r,void 0===t?i:a,n)}const kn=wn?y.default:void 0,An=wn?kn.define("ECDSASignature",(function(){this.seq().obj(this.key("r").int(),this.key("s").int())})):void 0,Sn=wn?kn.define("ECPrivateKey",(function(){this.seq().obj(this.key("version").int(),this.key("privateKey").octstr(),this.key("parameters").explicit(0).optional().any(),this.key("publicKey").explicit(1).optional().bitstr())})):void 0,En=wn?kn.define("AlgorithmIdentifier",(function(){this.seq().obj(this.key("algorithm").objid(),this.key("parameters").optional().any())})):void 0,xn=wn?kn.define("SubjectPublicKeyInfo",(function(){this.seq().obj(this.key("algorithm").use(En),this.key("subjectPublicKey").bitstr())})):void 0;var Pn=/*#__PURE__*/Object.freeze({__proto__:null,sign:vn,verify:_n,validateParams:async function(e,t,r){const i=new ln(e);if(i.keyType!==ge.publicKey.ecdsa)return!1;switch(i.type){case"web":case"node":{const i=await Ti(8),n=ge.hash.sha256,a=await Qr.digest(n,i);try{const s=await vn(e,n,i,t,r,a);return await _n(e,n,s,i,t,a)}catch(e){return!1}}default:return pn(ge.publicKey.ecdsa,e,t,r)}}});Ui.hash=e=>new Uint8Array(or().update(e).digest());var Mn=/*#__PURE__*/Object.freeze({__proto__:null,sign:async function(e,t,r,i,n,a){if(Qr.getHashByteLength(t)<Qr.getHashByteLength(ge.hash.sha256))throw Error("Hash algorithm too weak: sha256 or stronger is required for EdDSA.");const s=ue.concatUint8Array([n,i.subarray(1)]),o=Ui.sign.detached(a,s);return{r:o.subarray(0,32),s:o.subarray(32)}},verify:async function(e,t,{r,s:i},n,a,s){const o=ue.concatUint8Array([r,i]);return Ui.sign.detached.verify(s,o,a.subarray(1))},validateParams:async function(e,t,r){if("ed25519"!==e.getName())return!1;const{publicKey:i}=Ui.sign.keyPair.fromSeed(r),n=new Uint8Array([64,...i]);return ue.equalsUint8Array(t,n)}});function Cn(e,t){const r=new at["aes"+8*e.length](e),i=new Uint32Array([2795939494,2795939494]),n=Dn(t);let a=i;const s=n,o=n.length/2,c=new Uint32Array([0,0]);let u=new Uint32Array(4);for(let e=0;e<=5;++e)for(let t=0;t<o;++t)c[1]=o*e+(1+t),u[0]=a[0],u[1]=a[1],u[2]=s[2*t],u[3]=s[2*t+1],u=Dn(r.encrypt(Rn(u))),a=u.subarray(0,2),a[0]^=c[0],a[1]^=c[1],s[2*t]=u[2],s[2*t+1]=u[3];return Rn(a,s)}function Kn(e,t){const r=new at["aes"+8*e.length](e),i=new Uint32Array([2795939494,2795939494]),n=Dn(t);let a=n.subarray(0,2);const s=n.subarray(2),o=n.length/2-1,c=new Uint32Array([0,0]);let u=new Uint32Array(4);for(let e=5;e>=0;--e)for(let t=o-1;t>=0;--t)c[1]=o*e+(t+1),u[0]=a[0]^c[0],u[1]=a[1]^c[1],u[2]=s[2*t],u[3]=s[2*t+1],u=Dn(r.decrypt(Rn(u))),a=u.subarray(0,2),s[2*t]=u[2],s[2*t+1]=u[3];if(a[0]===i[0]&&a[1]===i[1])return Rn(s);throw Error("Key Data Integrity failed")}function Dn(e){const{length:t}=e,r=function(e){if(ue.isString(e)){const{length:t}=e,r=new ArrayBuffer(t),i=new Uint8Array(r);for(let r=0;r<t;++r)i[r]=e.charCodeAt(r);return r}return new Uint8Array(e).buffer}(e),i=new DataView(r),n=new Uint32Array(t/4);for(let e=0;e<t/4;++e)n[e]=i.getUint32(4*e);return n}function Rn(){let e=0;for(let t=0;t<arguments.length;++t)e+=4*arguments[t].length;const t=new ArrayBuffer(e),r=new DataView(t);let i=0;for(let e=0;e<arguments.length;++e){for(let t=0;t<arguments[e].length;++t)r.setUint32(i+4*t,arguments[e][t]);i+=4*arguments[e].length}return new Uint8Array(t)}var In=/*#__PURE__*/Object.freeze({__proto__:null,wrap:Cn,unwrap:Kn});function Un(e){const t=8-e.length%8,r=new Uint8Array(e.length+t).fill(t);return r.set(e),r}function Bn(e){const t=e.length;if(t>0){const r=e[t-1];if(r>=1){const i=e.subarray(t-r),n=new Uint8Array(r).fill(r);if(ue.equalsUint8Array(i,n))return e.subarray(0,t-r)}}throw Error("Invalid padding")}var Tn=/*#__PURE__*/Object.freeze({__proto__:null,encode:Un,decode:Bn});const zn=ue.getWebCrypto(),qn=ue.getNodeCrypto();function Fn(e,t,r,i){return ue.concatUint8Array([t.write(),new Uint8Array([e]),r.write(),ue.stringToUint8Array("Anonymous Sender    "),i.subarray(0,20)])}async function On(e,t,r,i,n=!1,a=!1){let s;if(n){for(s=0;s<t.length&&0===t[s];s++);t=t.subarray(s)}if(a){for(s=t.length-1;s>=0&&0===t[s];s--);t=t.subarray(0,s+1)}return(await Qr.digest(e,ue.concatUint8Array([new Uint8Array([0,0,0,1]),t,i]))).subarray(0,r)}async function Nn(e,t){switch(e.type){case"curve25519":{const r=await Ti(32),{secretKey:i,sharedKey:n}=await Ln(e,t,null,r);let{publicKey:a}=Ui.box.keyPair.fromSecretKey(i);return a=ue.concatUint8Array([new Uint8Array([64]),a]),{publicKey:a,sharedKey:n}}case"web":if(e.web&&ue.getWebCrypto())try{return await async function(e,t){const r=bn(e.payloadSize,e.web.web,t);let i=zn.generateKey({name:"ECDH",namedCurve:e.web.web},!0,["deriveKey","deriveBits"]),n=zn.importKey("jwk",r,{name:"ECDH",namedCurve:e.web.web},!1,[]);[i,n]=await Promise.all([i,n]);let a=zn.deriveBits({name:"ECDH",namedCurve:e.web.web,public:n},i.privateKey,e.web.sharedSize),s=zn.exportKey("jwk",i.publicKey);[a,s]=await Promise.all([a,s]);const o=new Uint8Array(a);return{publicKey:new Uint8Array(yn(s)),sharedKey:o}}(e,t)}catch(e){ue.printDebugError(e)}break;case"node":return async function(e,t){const r=qn.createECDH(e.node.node);r.generateKeys();const i=new Uint8Array(r.computeSecret(t));return{publicKey:new Uint8Array(r.getPublicKey()),sharedKey:i}}(e,t)}return async function(e,t){const r=await sn(e.name),i=await e.genKeyPair();t=an(r,t);const n=nn(r,i.privateKey),a=i.publicKey,s=n.derive(t.getPublic()),o=r.curve.p.byteLength(),c=s.toArrayLike(Uint8Array,"be",o);return{publicKey:a,sharedKey:c}}(e,t)}async function Ln(e,t,r,i){if(i.length!==e.payloadSize){const t=new Uint8Array(e.payloadSize);t.set(i,e.payloadSize-i.length),i=t}switch(e.type){case"curve25519":{const e=i.slice().reverse();return{secretKey:e,sharedKey:Ui.scalarMult(e,t.subarray(1))}}case"web":if(e.web&&ue.getWebCrypto())try{return await async function(e,t,r,i){const n=mn(e.payloadSize,e.web.web,r,i);let a=zn.importKey("jwk",n,{name:"ECDH",namedCurve:e.web.web},!0,["deriveKey","deriveBits"]);const s=bn(e.payloadSize,e.web.web,t);let o=zn.importKey("jwk",s,{name:"ECDH",namedCurve:e.web.web},!0,[]);[a,o]=await Promise.all([a,o]);let c=zn.deriveBits({name:"ECDH",namedCurve:e.web.web,public:o},a,e.web.sharedSize),u=zn.exportKey("jwk",a);[c,u]=await Promise.all([c,u]);const h=new Uint8Array(c);return{secretKey:ye(u.d),sharedKey:h}}(e,t,r,i)}catch(e){ue.printDebugError(e)}break;case"node":return async function(e,t,r){const i=qn.createECDH(e.node.node);i.setPrivateKey(r);const n=new Uint8Array(i.computeSecret(t));return{secretKey:new Uint8Array(i.getPrivateKey()),sharedKey:n}}(e,t,i)}return async function(e,t,r){const i=await sn(e.name);t=an(i,t),r=nn(i,r);const n=new Uint8Array(r.getPrivate()),a=r.derive(t.getPublic()),s=i.curve.p.byteLength(),o=a.toArrayLike(Uint8Array,"be",s);return{secretKey:n,sharedKey:o}}(e,t,i)}var jn=/*#__PURE__*/Object.freeze({__proto__:null,validateParams:async function(e,t,r){return pn(ge.publicKey.ecdh,e,t,r)},encrypt:async function(e,t,r,i,n){const a=Un(r),s=new ln(e),{publicKey:o,sharedKey:c}=await Nn(s,i),u=Fn(ge.publicKey.ecdh,e,t,n),h=ge.read(ge.symmetric,t.cipher);return{publicKey:o,wrappedKey:Cn(await On(t.hash,c,at[h].keySize,u),a)}},decrypt:async function(e,t,r,i,n,a,s){const o=new ln(e),{sharedKey:c}=await Ln(o,r,n,a),u=Fn(ge.publicKey.ecdh,e,t,s),h=ge.read(ge.symmetric,t.cipher);let d;for(let e=0;e<3;e++)try{return Bn(Kn(await On(t.hash,c,at[h].keySize,u,1===e,2===e),i))}catch(e){d=e}throw d}});var Wn={rsa:en,elgamal:tn,elliptic:/*#__PURE__*/Object.freeze({__proto__:null,Curve:ln,ecdh:jn,ecdsa:Pn,eddsa:Mn,generate:async function(e){const t=await ue.getBigInteger();e=new ln(e);const r=await e.genKeyPair(),i=new t(r.publicKey).toUint8Array(),n=new t(r.privateKey).toUint8Array("be",e.payloadSize);return{oid:e.oid,Q:i,secret:n,hash:e.hash,cipher:e.cipher}},getPreferredHashAlgo:function(e){return fn[ge.write(ge.curve,e.toHex())].hash}}),dsa:/*#__PURE__*/Object.freeze({__proto__:null,sign:async function(e,t,r,i,n,a){const s=await ue.getBigInteger(),o=new s(1);let c,u,h,d;i=new s(i),n=new s(n),r=new s(r),a=new s(a),r=r.mod(i),a=a.mod(n);const f=new s(t.subarray(0,n.byteLength())).mod(n);for(;;){if(c=await zi(o,n),u=r.modExp(c,i).imod(n),u.isZero())continue;const e=a.mul(u).imod(n);if(d=f.add(e).imod(n),h=c.modInv(n).imul(d).imod(n),!h.isZero())break}return{r:u.toUint8Array("be",n.byteLength()),s:h.toUint8Array("be",n.byteLength())}},verify:async function(e,t,r,i,n,a,s,o){const c=await ue.getBigInteger(),u=new c(0);if(t=new c(t),r=new c(r),a=new c(a),s=new c(s),n=new c(n),o=new c(o),t.lte(u)||t.gte(s)||r.lte(u)||r.gte(s))return ue.printDebug("invalid DSA Signature"),!1;const h=new c(i.subarray(0,s.byteLength())).imod(s),d=r.modInv(s);if(d.isZero())return ue.printDebug("invalid DSA Signature"),!1;n=n.mod(a),o=o.mod(a);const f=h.mul(d).imod(s),l=t.mul(d).imod(s),p=n.modExp(f,a),y=o.modExp(l,a);return p.mul(y).imod(a).imod(s).equal(t)},validateParams:async function(e,t,r,i,n){const a=await ue.getBigInteger();e=new a(e),t=new a(t),r=new a(r),i=new a(i);const s=new a(1);if(r.lte(s)||r.gte(e))return!1;if(!e.dec().mod(t).isZero())return!1;if(!r.modExp(t,e).isOne())return!1;const o=new a(t.bitLength()),c=new a(150);if(o.lt(c)||!await Ni(t,null,32))return!1;n=new a(n);const u=new a(2),h=await zi(u.leftShift(o.dec()),u.leftShift(o)),d=t.mul(h).add(n);return!!i.equal(r.modExp(d,e))}}),nacl:Ui};var Hn=/*#__PURE__*/Object.freeze({__proto__:null,parseSignatureParams:function(e,t){let r=0;switch(e){case ge.publicKey.rsaEncryptSign:case ge.publicKey.rsaEncrypt:case ge.publicKey.rsaSign:return{s:ue.readMPI(t.subarray(r))};case ge.publicKey.dsa:case ge.publicKey.ecdsa:{const e=ue.readMPI(t.subarray(r));return r+=e.length+2,{r:e,s:ue.readMPI(t.subarray(r))}}case ge.publicKey.eddsa:{let e=ue.readMPI(t.subarray(r));r+=e.length+2,e=ue.leftPad(e,32);let i=ue.readMPI(t.subarray(r));return i=ue.leftPad(i,32),{r:e,s:i}}default:throw Error("Invalid signature algorithm.")}},verify:async function(e,t,r,i,n,a){switch(e){case ge.publicKey.rsaEncryptSign:case ge.publicKey.rsaEncrypt:case ge.publicKey.rsaSign:{const{n:e,e:s}=i,o=ue.leftPad(r.s,e.length);return Wn.rsa.verify(t,n,o,e,s,a)}case ge.publicKey.dsa:{const{g:e,p:n,q:s,y:o}=i,{r:c,s:u}=r;return Wn.dsa.verify(t,c,u,a,e,n,s,o)}case ge.publicKey.ecdsa:{const{oid:e,Q:s}=i,o=new Wn.elliptic.Curve(e).payloadSize,c=ue.leftPad(r.r,o),u=ue.leftPad(r.s,o);return Wn.elliptic.ecdsa.verify(e,t,{r:c,s:u},n,s,a)}case ge.publicKey.eddsa:{const{oid:e,Q:s}=i;return Wn.elliptic.eddsa.verify(e,t,r,n,s,a)}default:throw Error("Invalid signature algorithm.")}},sign:async function(e,t,r,i,n,a){if(!r||!i)throw Error("Missing key parameters");switch(e){case ge.publicKey.rsaEncryptSign:case ge.publicKey.rsaEncrypt:case ge.publicKey.rsaSign:{const{n:e,e:s}=r,{d:o,p:c,q:u,u:h}=i;return{s:await Wn.rsa.sign(t,n,e,s,o,c,u,h,a)}}case ge.publicKey.dsa:{const{g:e,p:n,q:s}=r,{x:o}=i;return Wn.dsa.sign(t,a,e,n,s,o)}case ge.publicKey.elgamal:throw Error("Signing with Elgamal is not defined in the OpenPGP standard.");case ge.publicKey.ecdsa:{const{oid:e,Q:s}=r,{d:o}=i;return Wn.elliptic.ecdsa.sign(e,t,n,s,o,a)}case ge.publicKey.eddsa:{const{oid:e,Q:s}=r,{seed:o}=i;return Wn.elliptic.eddsa.sign(e,t,n,s,o,a)}default:throw Error("Invalid signature algorithm.")}}});class Gn{constructor(e){e=void 0===e?new Uint8Array([]):ue.isString(e)?ue.stringToUint8Array(e):new Uint8Array(e),this.data=e}read(e){if(e.length>=1){const t=e[0];if(e.length>=1+t)return this.data=e.subarray(1,1+t),1+this.data.length}throw Error("Invalid symmetric key")}write(){return ue.concatUint8Array([new Uint8Array([this.data.length]),this.data])}}class Vn{constructor(e){if(e){const{hash:t,cipher:r}=e;this.hash=t,this.cipher=r}else this.hash=null,this.cipher=null}read(e){if(e.length<4||3!==e[0]||1!==e[1])throw Error("Cannot read KDFParams");return this.hash=e[2],this.cipher=e[3],4}write(){return new Uint8Array([3,1,this.hash,this.cipher])}}var Zn=/*#__PURE__*/Object.freeze({__proto__:null,publicKeyEncrypt:async function(e,t,r,i){switch(e){case ge.publicKey.rsaEncrypt:case ge.publicKey.rsaEncryptSign:{const{n:e,e:i}=t;return{c:await Wn.rsa.encrypt(r,e,i)}}case ge.publicKey.elgamal:{const{p:e,g:i,y:n}=t;return Wn.elgamal.encrypt(r,e,i,n)}case ge.publicKey.ecdh:{const{oid:e,Q:n,kdfParams:a}=t,{publicKey:s,wrappedKey:o}=await Wn.elliptic.ecdh.encrypt(e,a,r,n,i);return{V:s,C:new Gn(o)}}default:return[]}},publicKeyDecrypt:async function(e,t,r,i,n){switch(e){case ge.publicKey.rsaEncryptSign:case ge.publicKey.rsaEncrypt:{const{c:e}=i,{n,e:a}=t,{d:s,p:o,q:c,u}=r;return Wn.rsa.decrypt(e,n,a,s,o,c,u)}case ge.publicKey.elgamal:{const{c1:e,c2:n}=i,a=t.p,s=r.x;return Wn.elgamal.decrypt(e,n,a,s)}case ge.publicKey.ecdh:{const{oid:e,Q:a,kdfParams:s}=t,{d:o}=r,{V:c,C:u}=i;return Wn.elliptic.ecdh.decrypt(e,s,c,u.data,a,o,n)}default:throw Error("Invalid public key encryption algorithm.")}},parsePublicKeyParams:function(e,t){let r=0;switch(e){case ge.publicKey.rsaEncrypt:case ge.publicKey.rsaEncryptSign:case ge.publicKey.rsaSign:{const e=ue.readMPI(t.subarray(r));r+=e.length+2;const i=ue.readMPI(t.subarray(r));return r+=i.length+2,{read:r,publicParams:{n:e,e:i}}}case ge.publicKey.dsa:{const e=ue.readMPI(t.subarray(r));r+=e.length+2;const i=ue.readMPI(t.subarray(r));r+=i.length+2;const n=ue.readMPI(t.subarray(r));r+=n.length+2;const a=ue.readMPI(t.subarray(r));return r+=a.length+2,{read:r,publicParams:{p:e,q:i,g:n,y:a}}}case ge.publicKey.elgamal:{const e=ue.readMPI(t.subarray(r));r+=e.length+2;const i=ue.readMPI(t.subarray(r));r+=i.length+2;const n=ue.readMPI(t.subarray(r));return r+=n.length+2,{read:r,publicParams:{p:e,g:i,y:n}}}case ge.publicKey.ecdsa:{const e=new rn;r+=e.read(t);const i=ue.readMPI(t.subarray(r));return r+=i.length+2,{read:r,publicParams:{oid:e,Q:i}}}case ge.publicKey.eddsa:{const e=new rn;r+=e.read(t);let i=ue.readMPI(t.subarray(r));return r+=i.length+2,i=ue.leftPad(i,33),{read:r,publicParams:{oid:e,Q:i}}}case ge.publicKey.ecdh:{const e=new rn;r+=e.read(t);const i=ue.readMPI(t.subarray(r));r+=i.length+2;const n=new Vn;return r+=n.read(t.subarray(r)),{read:r,publicParams:{oid:e,Q:i,kdfParams:n}}}default:throw Error("Invalid public key encryption algorithm.")}},parsePrivateKeyParams:function(e,t,r){let i=0;switch(e){case ge.publicKey.rsaEncrypt:case ge.publicKey.rsaEncryptSign:case ge.publicKey.rsaSign:{const e=ue.readMPI(t.subarray(i));i+=e.length+2;const r=ue.readMPI(t.subarray(i));i+=r.length+2;const n=ue.readMPI(t.subarray(i));i+=n.length+2;const a=ue.readMPI(t.subarray(i));return i+=a.length+2,{read:i,privateParams:{d:e,p:r,q:n,u:a}}}case ge.publicKey.dsa:case ge.publicKey.elgamal:{const e=ue.readMPI(t.subarray(i));return i+=e.length+2,{read:i,privateParams:{x:e}}}case ge.publicKey.ecdsa:case ge.publicKey.ecdh:{const e=new ln(r.oid);let n=ue.readMPI(t.subarray(i));return i+=n.length+2,n=ue.leftPad(n,e.payloadSize),{read:i,privateParams:{d:n}}}case ge.publicKey.eddsa:{let e=ue.readMPI(t.subarray(i));return i+=e.length+2,e=ue.leftPad(e,32),{read:i,privateParams:{seed:e}}}default:throw Error("Invalid public key encryption algorithm.")}},parseEncSessionKeyParams:function(e,t){let r=0;switch(e){case ge.publicKey.rsaEncrypt:case ge.publicKey.rsaEncryptSign:return{c:ue.readMPI(t.subarray(r))};case ge.publicKey.elgamal:{const e=ue.readMPI(t.subarray(r));return r+=e.length+2,{c1:e,c2:ue.readMPI(t.subarray(r))}}case ge.publicKey.ecdh:{const e=ue.readMPI(t.subarray(r));r+=e.length+2;const i=new Gn;return i.read(t.subarray(r)),{V:e,C:i}}default:throw Error("Invalid public key encryption algorithm.")}},serializeParams:function(e,t){const r=Object.keys(t).map(e=>{const r=t[e];return ue.isUint8Array(r)?ue.uint8ArrayToMPI(r):r.write()});return ue.concatUint8Array(r)},generateParams:function(e,t,r){switch(e){case ge.publicKey.rsaEncrypt:case ge.publicKey.rsaEncryptSign:case ge.publicKey.rsaSign:return Wn.rsa.generate(t,65537).then(({n:e,e:t,d:r,p:i,q:n,u:a})=>({privateParams:{d:r,p:i,q:n,u:a},publicParams:{n:e,e:t}}));case ge.publicKey.ecdsa:return Wn.elliptic.generate(r).then(({oid:e,Q:t,secret:r})=>({privateParams:{d:r},publicParams:{oid:new rn(e),Q:t}}));case ge.publicKey.eddsa:return Wn.elliptic.generate(r).then(({oid:e,Q:t,secret:r})=>({privateParams:{seed:r},publicParams:{oid:new rn(e),Q:t}}));case ge.publicKey.ecdh:return Wn.elliptic.generate(r).then(({oid:e,Q:t,secret:r,hash:i,cipher:n})=>({privateParams:{d:r},publicParams:{oid:new rn(e),Q:t,kdfParams:new Vn({hash:i,cipher:n})}}));case ge.publicKey.dsa:case ge.publicKey.elgamal:throw Error("Unsupported algorithm for key generation.");default:throw Error("Invalid public key algorithm.")}},validateParams:async function(e,t,r){if(!t||!r)throw Error("Missing key parameters");switch(e){case ge.publicKey.rsaEncrypt:case ge.publicKey.rsaEncryptSign:case ge.publicKey.rsaSign:{const{n:e,e:i}=t,{d:n,p:a,q:s,u:o}=r;return Wn.rsa.validateParams(e,i,n,a,s,o)}case ge.publicKey.dsa:{const{p:e,q:i,g:n,y:a}=t,{x:s}=r;return Wn.dsa.validateParams(e,i,n,a,s)}case ge.publicKey.elgamal:{const{p:e,g:i,y:n}=t,{x:a}=r;return Wn.elgamal.validateParams(e,i,n,a)}case ge.publicKey.ecdsa:case ge.publicKey.ecdh:{const i=Wn.elliptic[ge.read(ge.publicKey,e)],{oid:n,Q:a}=t,{d:s}=r;return i.validateParams(n,a,s)}case ge.publicKey.eddsa:{const{oid:e,Q:i}=t,{seed:n}=r;return Wn.elliptic.eddsa.validateParams(e,i,n)}default:throw Error("Invalid public key algorithm.")}},getPrefixRandom:async function(e){const t=await Ti(at[e].blockSize),r=new Uint8Array([t[t.length-2],t[t.length-1]]);return ue.concat([t,r])},generateSessionKey:function(e){return Ti(at[e].keySize)}});const Yn={cipher:at,hash:Qr,mode:Ii,publicKey:Wn,signature:Hn,random:Fi,pkcs1:Vi,pkcs5:Tn,aesKW:In};Object.assign(Yn,Zn);var $n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function Xn(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)}const Jn={arraySet:function(e,t,r,i,n){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+i),n);else for(let a=0;a<i;a++)e[n+a]=t[r+a]},flattenChunks:function(e){let t,r,i,n,a;for(i=0,t=0,r=e.length;t<r;t++)i+=e[t].length;const s=new Uint8Array(i);for(n=0,t=0,r=e.length;t<r;t++)a=e[t],s.set(a,n),n+=a.length;return s}},Qn={arraySet:function(e,t,r,i,n){for(let a=0;a<i;a++)e[n+a]=t[r+a]},flattenChunks:function(e){return[].concat.apply([],e)}};let ea=$n?Uint8Array:Array,ta=$n?Uint16Array:Array,ra=$n?Int32Array:Array,ia=$n?Jn.flattenChunks:Qn.flattenChunks,na=$n?Jn.arraySet:Qn.arraySet;function aa(e){let t=e.length;for(;--t>=0;)e[t]=0}const sa=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],oa=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ca=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ua=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ha=Array(576);aa(ha);const da=Array(60);aa(da);const fa=Array(512);aa(fa);const la=Array(256);aa(la);const pa=Array(29);aa(pa);const ya=Array(30);function ba(e,t,r,i,n){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=i,this.max_length=n,this.has_stree=e&&e.length}let ma,ga,wa;function va(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function _a(e){return e<256?fa[e]:fa[256+(e>>>7)]}function ka(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function Aa(e,t,r){e.bi_valid>16-r?(e.bi_buf|=t<<e.bi_valid&65535,ka(e,e.bi_buf),e.bi_buf=t>>16-e.bi_valid,e.bi_valid+=r-16):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function Sa(e,t,r){Aa(e,r[2*t],r[2*t+1])}function Ea(e,t){let r=0;do{r|=1&e,e>>>=1,r<<=1}while(--t>0);return r>>>1}function xa(e,t,r){const i=Array(16);let n,a,s=0;for(n=1;n<=15;n++)i[n]=s=s+r[n-1]<<1;for(a=0;a<=t;a++){const t=e[2*a+1];0!==t&&(e[2*a]=Ea(i[t]++,t))}}function Pa(e){let t;for(t=0;t<286;t++)e.dyn_ltree[2*t]=0;for(t=0;t<30;t++)e.dyn_dtree[2*t]=0;for(t=0;t<19;t++)e.bl_tree[2*t]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function Ma(e){e.bi_valid>8?ka(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function Ca(e,t,r,i){const n=2*t,a=2*r;return e[n]<e[a]||e[n]===e[a]&&i[t]<=i[r]}function Ka(e,t,r){const i=e.heap[r];let n=r<<1;for(;n<=e.heap_len&&(n<e.heap_len&&Ca(t,e.heap[n+1],e.heap[n],e.depth)&&n++,!Ca(t,i,e.heap[n],e.depth));)e.heap[r]=e.heap[n],r=n,n<<=1;e.heap[r]=i}function Da(e,t,r){let i,n,a,s,o=0;if(0!==e.last_lit)do{i=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],n=e.pending_buf[e.l_buf+o],o++,0===i?Sa(e,n,t):(a=la[n],Sa(e,a+256+1,t),s=sa[a],0!==s&&(n-=pa[a],Aa(e,n,s)),i--,a=_a(i),Sa(e,a,r),s=oa[a],0!==s&&(i-=ya[a],Aa(e,i,s)))}while(o<e.last_lit);Sa(e,256,t)}function Ra(e,t){const r=t.dyn_tree,i=t.stat_desc.static_tree,n=t.stat_desc.has_stree,a=t.stat_desc.elems;let s,o,c,u=-1;for(e.heap_len=0,e.heap_max=573,s=0;s<a;s++)0!==r[2*s]?(e.heap[++e.heap_len]=u=s,e.depth[s]=0):r[2*s+1]=0;for(;e.heap_len<2;)c=e.heap[++e.heap_len]=u<2?++u:0,r[2*c]=1,e.depth[c]=0,e.opt_len--,n&&(e.static_len-=i[2*c+1]);for(t.max_code=u,s=e.heap_len>>1;s>=1;s--)Ka(e,r,s);c=a;do{s=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Ka(e,r,1),o=e.heap[1],e.heap[--e.heap_max]=s,e.heap[--e.heap_max]=o,r[2*c]=r[2*s]+r[2*o],e.depth[c]=(e.depth[s]>=e.depth[o]?e.depth[s]:e.depth[o])+1,r[2*s+1]=r[2*o+1]=c,e.heap[1]=c++,Ka(e,r,1)}while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],function(e,t){const r=t.dyn_tree,i=t.max_code,n=t.stat_desc.static_tree,a=t.stat_desc.has_stree,s=t.stat_desc.extra_bits,o=t.stat_desc.extra_base,c=t.stat_desc.max_length;let u,h,d,f,l,p,y=0;for(f=0;f<=15;f++)e.bl_count[f]=0;for(r[2*e.heap[e.heap_max]+1]=0,u=e.heap_max+1;u<573;u++)h=e.heap[u],f=r[2*r[2*h+1]+1]+1,f>c&&(f=c,y++),r[2*h+1]=f,h>i||(e.bl_count[f]++,l=0,h>=o&&(l=s[h-o]),p=r[2*h],e.opt_len+=p*(f+l),a&&(e.static_len+=p*(n[2*h+1]+l)));if(0!==y){do{for(f=c-1;0===e.bl_count[f];)f--;e.bl_count[f]--,e.bl_count[f+1]+=2,e.bl_count[c]--,y-=2}while(y>0);for(f=c;0!==f;f--)for(h=e.bl_count[f];0!==h;)d=e.heap[--u],d>i||(r[2*d+1]!==f&&(e.opt_len+=(f-r[2*d+1])*r[2*d],r[2*d+1]=f),h--)}}(e,t),xa(r,u,e.bl_count)}function Ia(e,t,r){let i,n,a=-1,s=t[1],o=0,c=7,u=4;for(0===s&&(c=138,u=3),t[2*(r+1)+1]=65535,i=0;i<=r;i++)n=s,s=t[2*(i+1)+1],++o<c&&n===s||(o<u?e.bl_tree[2*n]+=o:0!==n?(n!==a&&e.bl_tree[2*n]++,e.bl_tree[32]++):o<=10?e.bl_tree[34]++:e.bl_tree[36]++,o=0,a=n,0===s?(c=138,u=3):n===s?(c=6,u=3):(c=7,u=4))}function Ua(e,t,r){let i,n,a=-1,s=t[1],o=0,c=7,u=4;for(0===s&&(c=138,u=3),i=0;i<=r;i++)if(n=s,s=t[2*(i+1)+1],!(++o<c&&n===s)){if(o<u)do{Sa(e,n,e.bl_tree)}while(0!=--o);else 0!==n?(n!==a&&(Sa(e,n,e.bl_tree),o--),Sa(e,16,e.bl_tree),Aa(e,o-3,2)):o<=10?(Sa(e,17,e.bl_tree),Aa(e,o-3,3)):(Sa(e,18,e.bl_tree),Aa(e,o-11,7));o=0,a=n,0===s?(c=138,u=3):n===s?(c=6,u=3):(c=7,u=4)}}aa(ya);let Ba=!1;function Ta(e){Ba||(!function(){let e,t,r,i,n;const a=Array(16);for(r=0,i=0;i<28;i++)for(pa[i]=r,e=0;e<1<<sa[i];e++)la[r++]=i;for(la[r-1]=i,n=0,i=0;i<16;i++)for(ya[i]=n,e=0;e<1<<oa[i];e++)fa[n++]=i;for(n>>=7;i<30;i++)for(ya[i]=n<<7,e=0;e<1<<oa[i]-7;e++)fa[256+n++]=i;for(t=0;t<=15;t++)a[t]=0;for(e=0;e<=143;)ha[2*e+1]=8,e++,a[8]++;for(;e<=255;)ha[2*e+1]=9,e++,a[9]++;for(;e<=279;)ha[2*e+1]=7,e++,a[7]++;for(;e<=287;)ha[2*e+1]=8,e++,a[8]++;for(xa(ha,287,a),e=0;e<30;e++)da[2*e+1]=5,da[2*e]=Ea(e,5);ma=new ba(ha,sa,257,286,15),ga=new ba(da,oa,0,30,15),wa=new ba([],ca,0,19,7)}(),Ba=!0),e.l_desc=new va(e.dyn_ltree,ma),e.d_desc=new va(e.dyn_dtree,ga),e.bl_desc=new va(e.bl_tree,wa),e.bi_buf=0,e.bi_valid=0,Pa(e)}function za(e,t,r,i){Aa(e,0+(i?1:0),3),function(e,t,r,i){Ma(e),i&&(ka(e,r),ka(e,~r)),na(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}function qa(e){Aa(e,2,3),Sa(e,256,ha),function(e){16===e.bi_valid?(ka(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}function Fa(e,t,r,i){let n,a,s=0;e.level>0?(2===e.strm.data_type&&(e.strm.data_type=function(e){let t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return 0;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return 1;for(t=32;t<256;t++)if(0!==e.dyn_ltree[2*t])return 1;return 0}(e)),Ra(e,e.l_desc),Ra(e,e.d_desc),s=function(e){let t;for(Ia(e,e.dyn_ltree,e.l_desc.max_code),Ia(e,e.dyn_dtree,e.d_desc.max_code),Ra(e,e.bl_desc),t=18;t>=3&&0===e.bl_tree[2*ua[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),n=e.opt_len+3+7>>>3,a=e.static_len+3+7>>>3,a<=n&&(n=a)):n=a=r+5,r+4<=n&&-1!==t?za(e,t,r,i):4===e.strategy||a===n?(Aa(e,2+(i?1:0),3),Da(e,ha,da)):(Aa(e,4+(i?1:0),3),function(e,t,r,i){let n;for(Aa(e,t-257,5),Aa(e,r-1,5),Aa(e,i-4,4),n=0;n<i;n++)Aa(e,e.bl_tree[2*ua[n]+1],3);Ua(e,e.dyn_ltree,t-1),Ua(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,s+1),Da(e,e.dyn_ltree,e.dyn_dtree)),Pa(e),i&&Ma(e)}function Oa(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(la[r]+256+1)]++,e.dyn_dtree[2*_a(t)]++),e.last_lit===e.lit_bufsize-1}function Na(e,t,r,i){let n=65535&e|0,a=e>>>16&65535|0,s=0;for(;0!==r;){s=r>2e3?2e3:r,r-=s;do{n=n+t[i++]|0,a=a+n|0}while(--s);n%=65521,a%=65521}return n|a<<16|0}const La=function(){let e;const t=[];for(let r=0;r<256;r++){e=r;for(let t=0;t<8;t++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();function ja(e,t,r,i){const n=La,a=i+r;e^=-1;for(let r=i;r<a;r++)e=e>>>8^n[255&(e^t[r])];return-1^e}var Wa={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Ha(e,t){return e.msg=Wa[t],t}function Ga(e){return(e<<1)-(e>4?9:0)}function Va(e){let t=e.length;for(;--t>=0;)e[t]=0}function Za(e){const t=e.state;let r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(na(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function Ya(e,t){Fa(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,Za(e.strm)}function $a(e,t){e.pending_buf[e.pending++]=t}function Xa(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function Ja(e,t,r,i){let n=e.avail_in;return n>i&&(n=i),0===n?0:(e.avail_in-=n,na(t,e.input,e.next_in,n,r),1===e.state.wrap?e.adler=Na(e.adler,t,n,r):2===e.state.wrap&&(e.adler=ja(e.adler,t,n,r)),e.next_in+=n,e.total_in+=n,n)}function Qa(e,t){let r,i,n=e.max_chain_length,a=e.strstart,s=e.prev_length,o=e.nice_match;const c=e.strstart>e.w_size-262?e.strstart-(e.w_size-262):0,u=e.window,h=e.w_mask,d=e.prev,f=e.strstart+258;let l=u[a+s-1],p=u[a+s];e.prev_length>=e.good_match&&(n>>=2),o>e.lookahead&&(o=e.lookahead);do{if(r=t,u[r+s]===p&&u[r+s-1]===l&&u[r]===u[a]&&u[++r]===u[a+1]){a+=2,r++;do{}while(u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&a<f);if(i=258-(f-a),a=f-258,i>s){if(e.match_start=t,s=i,i>=o)break;l=u[a+s-1],p=u[a+s]}}}while((t=d[t&h])>c&&0!=--n);return s<=e.lookahead?s:e.lookahead}function es(e){const t=e.w_size;let r,i,n,a,s;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=t+(t-262)){na(e.window,e.window,t,t,0),e.match_start-=t,e.strstart-=t,e.block_start-=t,i=e.hash_size,r=i;do{n=e.head[--r],e.head[r]=n>=t?n-t:0}while(--i);i=t,r=i;do{n=e.prev[--r],e.prev[r]=n>=t?n-t:0}while(--i);a+=t}if(0===e.strm.avail_in)break;if(i=Ja(e.strm,e.window,e.strstart+e.lookahead,a),e.lookahead+=i,e.lookahead+e.insert>=3)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+3-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<3)););}while(e.lookahead<262&&0!==e.strm.avail_in)}function ts(e,t){let r,i;for(;;){if(e.lookahead<262){if(es(e),e.lookahead<262&&0===t)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-262&&(e.match_length=Qa(e,r)),e.match_length>=3)if(i=Oa(e,e.strstart-e.match_start,e.match_length-3),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=3){e.match_length--;do{e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart}while(0!=--e.match_length);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else i=Oa(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(i&&(Ya(e,!1),0===e.strm.avail_out))return 1}return e.insert=e.strstart<2?e.strstart:2,4===t?(Ya(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Ya(e,!1),0===e.strm.avail_out)?1:2}function rs(e,t){let r,i,n;for(;;){if(e.lookahead<262){if(es(e),e.lookahead<262&&0===t)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=2,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-262&&(e.match_length=Qa(e,r),e.match_length<=5&&(1===e.strategy||3===e.match_length&&e.strstart-e.match_start>4096)&&(e.match_length=2)),e.prev_length>=3&&e.match_length<=e.prev_length){n=e.strstart+e.lookahead-3,i=Oa(e,e.strstart-1-e.prev_match,e.prev_length-3),e.lookahead-=e.prev_length-1,e.prev_length-=2;do{++e.strstart<=n&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart)}while(0!=--e.prev_length);if(e.match_available=0,e.match_length=2,e.strstart++,i&&(Ya(e,!1),0===e.strm.avail_out))return 1}else if(e.match_available){if(i=Oa(e,0,e.window[e.strstart-1]),i&&Ya(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return 1}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(i=Oa(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<2?e.strstart:2,4===t?(Ya(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Ya(e,!1),0===e.strm.avail_out)?1:2}class is{constructor(e,t,r,i,n){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=i,this.func=n}}const ns=[new is(0,0,0,0,(function(e,t){let r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(es(e),0===e.lookahead&&0===t)return 1;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;const i=e.block_start+r;if((0===e.strstart||e.strstart>=i)&&(e.lookahead=e.strstart-i,e.strstart=i,Ya(e,!1),0===e.strm.avail_out))return 1;if(e.strstart-e.block_start>=e.w_size-262&&(Ya(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(Ya(e,!0),0===e.strm.avail_out?3:4):(e.strstart>e.block_start&&(Ya(e,!1),e.strm.avail_out),1)})),new is(4,4,8,4,ts),new is(4,5,16,8,ts),new is(4,6,32,32,ts),new is(4,4,16,16,rs),new is(8,16,32,32,rs),new is(8,16,128,128,rs),new is(8,32,128,256,rs),new is(32,128,258,1024,rs),new is(32,258,258,4096,rs)];class as{constructor(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new ta(1146),this.dyn_dtree=new ta(122),this.bl_tree=new ta(78),Va(this.dyn_ltree),Va(this.dyn_dtree),Va(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new ta(16),this.heap=new ta(573),Va(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new ta(573),Va(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}}function ss(e){const t=function(e){let t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=2,t=e.state,t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?42:113,e.adler=2===t.wrap?0:1,t.last_flush=0,Ta(t),0):Ha(e,-2)}(e);return 0===t&&function(e){e.window_size=2*e.w_size,Va(e.head),e.max_lazy_match=ns[e.level].max_lazy,e.good_match=ns[e.level].good_length,e.nice_match=ns[e.level].nice_length,e.max_chain_length=ns[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0}(e.state),t}function os(e,t){let r,i,n,a;if(!e||!e.state||t>5||t<0)return e?Ha(e,-2):-2;if(i=e.state,!e.output||!e.input&&0!==e.avail_in||666===i.status&&4!==t)return Ha(e,0===e.avail_out?-5:-2);if(i.strm=e,r=i.last_flush,i.last_flush=t,42===i.status)if(2===i.wrap)e.adler=0,$a(i,31),$a(i,139),$a(i,8),i.gzhead?($a(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),$a(i,255&i.gzhead.time),$a(i,i.gzhead.time>>8&255),$a(i,i.gzhead.time>>16&255),$a(i,i.gzhead.time>>24&255),$a(i,9===i.level?2:i.strategy>=2||i.level<2?4:0),$a(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&($a(i,255&i.gzhead.extra.length),$a(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=ja(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):($a(i,0),$a(i,0),$a(i,0),$a(i,0),$a(i,0),$a(i,9===i.level?2:i.strategy>=2||i.level<2?4:0),$a(i,3),i.status=113);else{let t=8+(i.w_bits-8<<4)<<8,r=-1;r=i.strategy>=2||i.level<2?0:i.level<6?1:6===i.level?2:3,t|=r<<6,0!==i.strstart&&(t|=32),t+=31-t%31,i.status=113,Xa(i,t),0!==i.strstart&&(Xa(i,e.adler>>>16),Xa(i,65535&e.adler)),e.adler=1}if(69===i.status)if(i.gzhead.extra){for(n=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>n&&(e.adler=ja(e.adler,i.pending_buf,i.pending-n,n)),Za(e),n=i.pending,i.pending!==i.pending_buf_size));)$a(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>n&&(e.adler=ja(e.adler,i.pending_buf,i.pending-n,n)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(e.adler=ja(e.adler,i.pending_buf,i.pending-n,n)),Za(e),n=i.pending,i.pending===i.pending_buf_size)){a=1;break}a=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,$a(i,a)}while(0!==a);i.gzhead.hcrc&&i.pending>n&&(e.adler=ja(e.adler,i.pending_buf,i.pending-n,n)),0===a&&(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(e.adler=ja(e.adler,i.pending_buf,i.pending-n,n)),Za(e),n=i.pending,i.pending===i.pending_buf_size)){a=1;break}a=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,$a(i,a)}while(0!==a);i.gzhead.hcrc&&i.pending>n&&(e.adler=ja(e.adler,i.pending_buf,i.pending-n,n)),0===a&&(i.status=103)}else i.status=103;if(103===i.status&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&Za(e),i.pending+2<=i.pending_buf_size&&($a(i,255&e.adler),$a(i,e.adler>>8&255),e.adler=0,i.status=113)):i.status=113),0!==i.pending){if(Za(e),0===e.avail_out)return i.last_flush=-1,0}else if(0===e.avail_in&&Ga(t)<=Ga(r)&&4!==t)return Ha(e,-5);if(666===i.status&&0!==e.avail_in)return Ha(e,-5);if(0!==e.avail_in||0!==i.lookahead||0!==t&&666!==i.status){var s=2===i.strategy?function(e,t){let r;for(;;){if(0===e.lookahead&&(es(e),0===e.lookahead)){if(0===t)return 1;break}if(e.match_length=0,r=Oa(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(Ya(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(Ya(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Ya(e,!1),0===e.strm.avail_out)?1:2}(i,t):3===i.strategy?function(e,t){let r,i,n,a;const s=e.window;for(;;){if(e.lookahead<=258){if(es(e),e.lookahead<=258&&0===t)return 1;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=3&&e.strstart>0&&(n=e.strstart-1,i=s[n],i===s[++n]&&i===s[++n]&&i===s[++n])){a=e.strstart+258;do{}while(i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&n<a);e.match_length=258-(a-n),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=3?(r=Oa(e,1,e.match_length-3),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=Oa(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(Ya(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(Ya(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(Ya(e,!1),0===e.strm.avail_out)?1:2}(i,t):ns[i.level].func(i,t);if(3!==s&&4!==s||(i.status=666),1===s||3===s)return 0===e.avail_out&&(i.last_flush=-1),0;if(2===s&&(1===t?qa(i):5!==t&&(za(i,0,0,!1),3===t&&(Va(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),Za(e),0===e.avail_out))return i.last_flush=-1,0}return 4!==t?0:i.wrap<=0?1:(2===i.wrap?($a(i,255&e.adler),$a(i,e.adler>>8&255),$a(i,e.adler>>16&255),$a(i,e.adler>>24&255),$a(i,255&e.total_in),$a(i,e.total_in>>8&255),$a(i,e.total_in>>16&255),$a(i,e.total_in>>24&255)):(Xa(i,e.adler>>>16),Xa(i,65535&e.adler)),Za(e),i.wrap>0&&(i.wrap=-i.wrap),0!==i.pending?0:1)}try{String.fromCharCode.call(null,0)}catch(e){}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){}const cs=new ea(256);for(let e=0;e<256;e++)cs[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;function us(e){let t,r,i,n,a=0;const s=e.length;for(i=0;i<s;i++)t=e.charCodeAt(i),55296==(64512&t)&&i+1<s&&(r=e.charCodeAt(i+1),56320==(64512&r)&&(t=65536+(t-55296<<10)+(r-56320),i++)),a+=t<128?1:t<2048?2:t<65536?3:4;const o=new ea(a);for(n=0,i=0;n<a;i++)t=e.charCodeAt(i),55296==(64512&t)&&i+1<s&&(r=e.charCodeAt(i+1),56320==(64512&r)&&(t=65536+(t-55296<<10)+(r-56320),i++)),t<128?o[n++]=t:t<2048?(o[n++]=192|t>>>6,o[n++]=128|63&t):t<65536?(o[n++]=224|t>>>12,o[n++]=128|t>>>6&63,o[n++]=128|63&t):(o[n++]=240|t>>>18,o[n++]=128|t>>>12&63,o[n++]=128|t>>>6&63,o[n++]=128|63&t);return o}cs[254]=cs[254]=1;class hs{constructor(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}}class ds{constructor(e){this.options={level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,...e||{}};const t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new hs,this.strm.avail_out=0;var r,i,n=function(e,t,r,i,n,a){if(!e)return-2;let s=1;if(-1===t&&(t=6),i<0?(s=0,i=-i):i>15&&(s=2,i-=16),n<1||n>9||8!==r||i<8||i>15||t<0||t>9||a<0||a>4)return Ha(e,-2);8===i&&(i=9);const o=new as;return e.state=o,o.strm=e,o.wrap=s,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new ea(2*o.w_size),o.head=new ta(o.hash_size),o.prev=new ta(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new ea(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=a,o.method=r,ss(e)}(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(0!==n)throw Error(Wa[n]);if(t.header&&(r=this.strm,i=t.header,r&&r.state&&(2!==r.state.wrap||(r.state.gzhead=i))),t.dictionary){let e;if(e="string"==typeof t.dictionary?us(t.dictionary):t.dictionary instanceof ArrayBuffer?new Uint8Array(t.dictionary):t.dictionary,0!==(n=function(e,t){const r=t.length;let i,n,a,s,o,c,u,h;if(!e||!e.state)return-2;if(i=e.state,s=i.wrap,2===s||1===s&&42!==i.status||i.lookahead)return-2;for(1===s&&(e.adler=Na(e.adler,t,r,0)),i.wrap=0,r>=i.w_size&&(0===s&&(Va(i.head),i.strstart=0,i.block_start=0,i.insert=0),h=new ea(i.w_size),na(h,t,r-i.w_size,i.w_size,0),t=h,r=i.w_size),o=e.avail_in,c=e.next_in,u=e.input,e.avail_in=r,e.next_in=0,e.input=t,es(i);i.lookahead>=3;){n=i.strstart,a=i.lookahead-2;do{i.ins_h=(i.ins_h<<i.hash_shift^i.window[n+3-1])&i.hash_mask,i.prev[n&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=n,n++}while(--a);i.strstart=n,i.lookahead=2,es(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,e.next_in=c,e.input=u,e.avail_in=o,i.wrap=s,0}(this.strm,e)))throw Error(Wa[n]);this._dict_set=!0}}push(e,t){const{strm:r,options:{chunkSize:i}}=this;var n,a;if(this.ended)return!1;a=t===~~t?t:!0===t?4:0,"string"==typeof e?r.input=us(e):e instanceof ArrayBuffer?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;do{if(0===r.avail_out&&(r.output=new ea(i),r.next_out=0,r.avail_out=i),1!==(n=os(r,a))&&0!==n)return this.onEnd(n),this.ended=!0,!1;0!==r.avail_out&&(0!==r.avail_in||4!==a&&2!==a)||this.onData(Xn(r.output,r.next_out))}while((r.avail_in>0||0===r.avail_out)&&1!==n);return 4===a?(n=function(e){let t;return e&&e.state?(t=e.state.status,42!==t&&69!==t&&73!==t&&91!==t&&103!==t&&113!==t&&666!==t?Ha(e,-2):(e.state=null,113===t?Ha(e,-3):0)):-2}(this.strm),this.onEnd(n),this.ended=!0,0===n):2!==a||(this.onEnd(0),r.avail_out=0,!0)}onData(e){this.chunks.push(e)}onEnd(e){0===e&&(this.result=ia(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg}}function fs(e,t){let r,i,n,a,s,o,c,u,h,d;const f=e.state;r=e.next_in;const l=e.input,p=r+(e.avail_in-5);i=e.next_out;const y=e.output,b=i-(t-e.avail_out),m=i+(e.avail_out-257),g=f.dmax,w=f.wsize,v=f.whave,_=f.wnext,k=f.window;n=f.hold,a=f.bits;const A=f.lencode,S=f.distcode,E=(1<<f.lenbits)-1,x=(1<<f.distbits)-1;e:do{a<15&&(n+=l[r++]<<a,a+=8,n+=l[r++]<<a,a+=8),s=A[n&E];t:for(;;){if(o=s>>>24,n>>>=o,a-=o,o=s>>>16&255,0===o)y[i++]=65535&s;else{if(!(16&o)){if(0==(64&o)){s=A[(65535&s)+(n&(1<<o)-1)];continue t}if(32&o){f.mode=12;break e}e.msg="invalid literal/length code",f.mode=30;break e}c=65535&s,o&=15,o&&(a<o&&(n+=l[r++]<<a,a+=8),c+=n&(1<<o)-1,n>>>=o,a-=o),a<15&&(n+=l[r++]<<a,a+=8,n+=l[r++]<<a,a+=8),s=S[n&x];r:for(;;){if(o=s>>>24,n>>>=o,a-=o,o=s>>>16&255,!(16&o)){if(0==(64&o)){s=S[(65535&s)+(n&(1<<o)-1)];continue r}e.msg="invalid distance code",f.mode=30;break e}if(u=65535&s,o&=15,a<o&&(n+=l[r++]<<a,a+=8,a<o&&(n+=l[r++]<<a,a+=8)),u+=n&(1<<o)-1,u>g){e.msg="invalid distance too far back",f.mode=30;break e}if(n>>>=o,a-=o,o=i-b,u>o){if(o=u-o,o>v&&f.sane){e.msg="invalid distance too far back",f.mode=30;break e}if(h=0,d=k,0===_){if(h+=w-o,o<c){c-=o;do{y[i++]=k[h++]}while(--o);h=i-u,d=y}}else if(_<o){if(h+=w+_-o,o-=_,o<c){c-=o;do{y[i++]=k[h++]}while(--o);if(h=0,_<c){o=_,c-=o;do{y[i++]=k[h++]}while(--o);h=i-u,d=y}}}else if(h+=_-o,o<c){c-=o;do{y[i++]=k[h++]}while(--o);h=i-u,d=y}for(;c>2;)y[i++]=d[h++],y[i++]=d[h++],y[i++]=d[h++],c-=3;c&&(y[i++]=d[h++],c>1&&(y[i++]=d[h++]))}else{h=i-u;do{y[i++]=y[h++],y[i++]=y[h++],y[i++]=y[h++],c-=3}while(c>2);c&&(y[i++]=y[h++],c>1&&(y[i++]=y[h++]))}break}}break}}while(r<p&&i<m);c=a>>3,r-=c,a-=c<<3,n&=(1<<a)-1,e.next_in=r,e.next_out=i,e.avail_in=r<p?p-r+5:5-(r-p),e.avail_out=i<m?m-i+257:257-(i-m),f.hold=n,f.bits=a}const ls=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],ps=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],ys=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],bs=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];function ms(e,t,r,i,n,a,s,o){const c=o.bits;let u,h,d,f,l,p=0,y=0,b=0,m=0,g=0,w=0,v=0,_=0,k=0,A=0,S=null,E=0;const x=new ta(16),P=new ta(16);let M,C,K,D=null,R=0;for(p=0;p<=15;p++)x[p]=0;for(y=0;y<i;y++)x[t[r+y]]++;for(g=c,m=15;m>=1&&0===x[m];m--);if(g>m&&(g=m),0===m)return n[a++]=20971520,n[a++]=20971520,o.bits=1,0;for(b=1;b<m&&0===x[b];b++);for(g<b&&(g=b),_=1,p=1;p<=15;p++)if(_<<=1,_-=x[p],_<0)return-1;if(_>0&&(0===e||1!==m))return-1;for(P[1]=0,p=1;p<15;p++)P[p+1]=P[p]+x[p];for(y=0;y<i;y++)0!==t[r+y]&&(s[P[t[r+y]]++]=y);0===e?(S=D=s,l=19):1===e?(S=ls,E-=257,D=ps,R-=257,l=256):(S=ys,D=bs,l=-1),A=0,y=0,p=b,f=a,w=g,v=0,d=-1,k=1<<g;const I=k-1;if(1===e&&k>852||2===e&&k>592)return 1;for(;;){M=p-v,s[y]<l?(C=0,K=s[y]):s[y]>l?(C=D[R+s[y]],K=S[E+s[y]]):(C=96,K=0),u=1<<p-v,h=1<<w,b=h;do{h-=u,n[f+(A>>v)+h]=M<<24|C<<16|K|0}while(0!==h);for(u=1<<p-1;A&u;)u>>=1;if(0!==u?(A&=u-1,A+=u):A=0,y++,0==--x[p]){if(p===m)break;p=t[r+s[y]]}if(p>g&&(A&I)!==d){for(0===v&&(v=g),f+=b,w=p-v,_=1<<w;w+v<m&&(_-=x[w+v],!(_<=0));)w++,_<<=1;if(k+=1<<w,1===e&&k>852||2===e&&k>592)return 1;d=A&I,n[d]=g<<24|w<<16|f-a|0}}return 0!==A&&(n[f+A]=p-v<<24|64<<16|0),o.bits=g,0}function gs(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}class ws{constructor(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new ta(320),this.work=new ta(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}}function vs(e){let t;return e&&e.state?(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,function(e){let t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new ra(852),t.distcode=t.distdyn=new ra(592),t.sane=1,t.back=-1,0):-2}(e)):-2}function _s(e,t){let r,i;return e?(i=new ws,e.state=i,i.window=null,r=function(e,t){let r,i;return e&&e.state?(i=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?-2:(null!==i.window&&i.wbits!==t&&(i.window=null),i.wrap=r,i.wbits=t,vs(e))):-2}(e,t),0!==r&&(e.state=null),r):-2}let ks,As,Ss=!0;function Es(e){if(Ss){let t;for(ks=new ra(512),As=new ra(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(ms(1,e.lens,0,288,ks,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;ms(2,e.lens,0,32,As,0,e.work,{bits:5}),Ss=!1}e.lencode=ks,e.lenbits=9,e.distcode=As,e.distbits=5}function xs(e,t,r,i){let n;const a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new ea(a.wsize)),i>=a.wsize?(na(a.window,t,r-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):(n=a.wsize-a.wnext,n>i&&(n=i),na(a.window,t,r-i,n,a.wnext),(i-=n)?(na(a.window,t,r-i,i,0),a.wnext=i,a.whave=a.wsize):(a.wnext+=n,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=n))),0}function Ps(e,t){let r,i,n,a,s,o,c,u,h,d,f,l,p,y,b,m,g,w,v,_,k,A,S,E,x=0,P=new ea(4);const M=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return-2;r=e.state,12===r.mode&&(r.mode=13),s=e.next_out,n=e.output,c=e.avail_out,a=e.next_in,i=e.input,o=e.avail_in,u=r.hold,h=r.bits,d=o,f=c,A=0;e:for(;;)switch(r.mode){case 1:if(0===r.wrap){r.mode=13;break}for(;h<16;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}if(2&r.wrap&&35615===u){r.check=0,P[0]=255&u,P[1]=u>>>8&255,r.check=ja(r.check,P,2,0),u=0,h=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){e.msg="unknown compression method",r.mode=30;break}if(u>>>=4,h-=4,k=8+(15&u),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&u?10:12,u=0,h=0;break;case 2:for(;h<16;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}if(r.flags=u,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(P[0]=255&u,P[1]=u>>>8&255,r.check=ja(r.check,P,2,0)),u=0,h=0,r.mode=3;case 3:for(;h<32;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}r.head&&(r.head.time=u),512&r.flags&&(P[0]=255&u,P[1]=u>>>8&255,P[2]=u>>>16&255,P[3]=u>>>24&255,r.check=ja(r.check,P,4,0)),u=0,h=0,r.mode=4;case 4:for(;h<16;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(P[0]=255&u,P[1]=u>>>8&255,r.check=ja(r.check,P,2,0)),u=0,h=0,r.mode=5;case 5:if(1024&r.flags){for(;h<16;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(P[0]=255&u,P[1]=u>>>8&255,r.check=ja(r.check,P,2,0)),u=0,h=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(l=r.length,l>o&&(l=o),l&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=Array(r.head.extra_len)),na(r.head.extra,i,a,l,k)),512&r.flags&&(r.check=ja(r.check,i,l,a)),o-=l,a+=l,r.length-=l),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;l=0;do{k=i[a+l++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k))}while(k&&l<o);if(512&r.flags&&(r.check=ja(r.check,i,l,a)),o-=l,a+=l,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;l=0;do{k=i[a+l++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k))}while(k&&l<o);if(512&r.flags&&(r.check=ja(r.check,i,l,a)),o-=l,a+=l,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;h<16;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}if(u!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}u=0,h=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;h<32;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}e.adler=r.check=gs(u),u=0,h=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=s,e.avail_out=c,e.next_in=a,e.avail_in=o,r.hold=u,r.bits=h,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){u>>>=7&h,h-=7&h,r.mode=27;break}for(;h<3;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}switch(r.last=1&u,u>>>=1,h-=1,3&u){case 0:r.mode=14;break;case 1:if(Es(r),r.mode=20,6===t){u>>>=2,h-=2;break e}break;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}u>>>=2,h-=2;break;case 14:for(u>>>=7&h,h-=7&h;h<32;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,u=0,h=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(l=r.length,l){if(l>o&&(l=o),l>c&&(l=c),0===l)break e;na(n,i,a,l,s),o-=l,a+=l,c-=l,s+=l,r.length-=l;break}r.mode=12;break;case 17:for(;h<14;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}if(r.nlen=257+(31&u),u>>>=5,h-=5,r.ndist=1+(31&u),u>>>=5,h-=5,r.ncode=4+(15&u),u>>>=4,h-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;h<3;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}r.lens[M[r.have++]]=7&u,u>>>=3,h-=3}for(;r.have<19;)r.lens[M[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},A=ms(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,A){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;x=r.lencode[u&(1<<r.lenbits)-1],b=x>>>24,m=x>>>16&255,g=65535&x,!(b<=h);){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}if(g<16)u>>>=b,h-=b,r.lens[r.have++]=g;else{if(16===g){for(E=b+2;h<E;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}if(u>>>=b,h-=b,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],l=3+(3&u),u>>>=2,h-=2}else if(17===g){for(E=b+3;h<E;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}u>>>=b,h-=b,k=0,l=3+(7&u),u>>>=3,h-=3}else{for(E=b+7;h<E;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}u>>>=b,h-=b,k=0,l=11+(127&u),u>>>=7,h-=7}if(r.have+l>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;l--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},A=ms(1,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,A){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},A=ms(2,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,A){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(o>=6&&c>=258){e.next_out=s,e.avail_out=c,e.next_in=a,e.avail_in=o,r.hold=u,r.bits=h,fs(e,f),s=e.next_out,n=e.output,c=e.avail_out,a=e.next_in,i=e.input,o=e.avail_in,u=r.hold,h=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;x=r.lencode[u&(1<<r.lenbits)-1],b=x>>>24,m=x>>>16&255,g=65535&x,!(b<=h);){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}if(m&&0==(240&m)){for(w=b,v=m,_=g;x=r.lencode[_+((u&(1<<w+v)-1)>>w)],b=x>>>24,m=x>>>16&255,g=65535&x,!(w+b<=h);){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}u>>>=w,h-=w,r.back+=w}if(u>>>=b,h-=b,r.back+=b,r.length=g,0===m){r.mode=26;break}if(32&m){r.back=-1,r.mode=12;break}if(64&m){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&m,r.mode=22;case 22:if(r.extra){for(E=r.extra;h<E;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,h-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;x=r.distcode[u&(1<<r.distbits)-1],b=x>>>24,m=x>>>16&255,g=65535&x,!(b<=h);){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}if(0==(240&m)){for(w=b,v=m,_=g;x=r.distcode[_+((u&(1<<w+v)-1)>>w)],b=x>>>24,m=x>>>16&255,g=65535&x,!(w+b<=h);){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}u>>>=w,h-=w,r.back+=w}if(u>>>=b,h-=b,r.back+=b,64&m){e.msg="invalid distance code",r.mode=30;break}r.offset=g,r.extra=15&m,r.mode=24;case 24:if(r.extra){for(E=r.extra;h<E;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,h-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===c)break e;if(l=f-c,r.offset>l){if(l=r.offset-l,l>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}l>r.wnext?(l-=r.wnext,p=r.wsize-l):p=r.wnext-l,l>r.length&&(l=r.length),y=r.window}else y=n,p=s-r.offset,l=r.length;l>c&&(l=c),c-=l,r.length-=l;do{n[s++]=y[p++]}while(--l);0===r.length&&(r.mode=21);break;case 26:if(0===c)break e;n[s++]=r.length,c--,r.mode=21;break;case 27:if(r.wrap){for(;h<32;){if(0===o)break e;o--,u|=i[a++]<<h,h+=8}if(f-=c,e.total_out+=f,r.total+=f,f&&(e.adler=r.check=r.flags?ja(r.check,n,f,s-f):Na(r.check,n,f,s-f)),f=c,(r.flags?u:gs(u))!==r.check){e.msg="incorrect data check",r.mode=30;break}u=0,h=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;h<32;){if(0===o)break e;o--,u+=i[a++]<<h,h+=8}if(u!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}u=0,h=0}r.mode=29;case 29:A=1;break e;case 30:A=-3;break e;case 32:default:return-2}return e.next_out=s,e.avail_out=c,e.next_in=a,e.avail_in=o,r.hold=u,r.bits=h,(r.wsize||f!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&xs(e,e.output,e.next_out,f-e.avail_out),d-=e.avail_in,f-=e.avail_out,e.total_in+=d,e.total_out+=f,r.total+=f,r.wrap&&f&&(e.adler=r.check=r.flags?ja(r.check,n,f,e.next_out-f):Na(r.check,n,f,e.next_out-f)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0===d&&0===f||4===t)&&0===A&&(A=-5),A}function Ms(e,t){const r=t.length;let i,n;return e&&e.state?(i=e.state,0!==i.wrap&&11!==i.mode?-2:11===i.mode&&(n=1,n=Na(n,t,r,0),n!==i.check)?-3:(xs(e,t,r,r),i.havedict=1,0)):-2}class Cs{constructor(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}}class Ks{constructor(e){this.options={chunkSize:16384,windowBits:0,...e||{}};const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new hs,this.strm.avail_out=0;let r=_s(this.strm,t.windowBits);if(0!==r)throw Error(Wa[r]);if(this.header=new Cs,function(e,t){let r;e&&e.state&&(r=e.state,0==(2&r.wrap)||(r.head=t,t.done=!1))}(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=us(t.dictionary):t.dictionary instanceof ArrayBuffer&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=Ms(this.strm,t.dictionary),0!==r)))throw Error(Wa[r])}push(e,t){const{strm:r,options:{chunkSize:i,dictionary:n}}=this;let a,s,o=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?4:0,"string"==typeof e?r.input=function(e){const t=new ea(e.length);for(let r=0,i=t.length;r<i;r++)t[r]=e.charCodeAt(r);return t}(e):e instanceof ArrayBuffer?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;do{if(0===r.avail_out&&(r.output=new ea(i),r.next_out=0,r.avail_out=i),a=Ps(r,0),2===a&&n&&(a=Ms(this.strm,n)),-5===a&&!0===o&&(a=0,o=!1),1!==a&&0!==a)return this.onEnd(a),this.ended=!0,!1;r.next_out&&(0!==r.avail_out&&1!==a&&(0!==r.avail_in||4!==s&&2!==s)||this.onData(Xn(r.output,r.next_out))),0===r.avail_in&&0===r.avail_out&&(o=!0)}while((r.avail_in>0||0===r.avail_out)&&1!==a);return 1===a&&(s=4),4===s?(a=function(e){if(!e||!e.state)return-2;const t=e.state;return t.window&&(t.window=null),e.state=null,0}(this.strm),this.onEnd(a),this.ended=!0,0===a):2!==s||(this.onEnd(0),r.avail_out=0,!0)}onData(e){this.chunks.push(e)}onEnd(e){0===e&&(this.result=ia(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg}}var Ds=[0,1,3,7,15,31,63,127,255],Rs=function(e){this.stream=e,this.bitOffset=0,this.curByte=0,this.hasByte=!1};Rs.prototype._ensureByte=function(){this.hasByte||(this.curByte=this.stream.readByte(),this.hasByte=!0)},Rs.prototype.read=function(e){for(var t=0;e>0;){this._ensureByte();var r=8-this.bitOffset;if(e>=r)t<<=r,t|=Ds[r]&this.curByte,this.hasByte=!1,this.bitOffset=0,e-=r;else{t<<=e;var i=r-e;t|=(this.curByte&Ds[e]<<i)>>i,this.bitOffset+=e,e=0}}return t},Rs.prototype.seek=function(e){var t=e%8,r=(e-t)/8;this.bitOffset=t,this.stream.seek(r),this.hasByte=!1},Rs.prototype.pi=function(){var e,t=new Uint8Array(6);for(e=0;e<t.length;e++)t[e]=this.read(8);return function(e){return Array.prototype.map.call(e,e=>("00"+e.toString(16)).slice(-2)).join("")}(t)};var Is=Rs,Us=function(){};Us.prototype.readByte=function(){throw Error("abstract method readByte() not implemented")},Us.prototype.read=function(e,t,r){for(var i=0;i<r;){var n=this.readByte();if(n<0)return 0===i?-1:i;e[t++]=n,i++}return i},Us.prototype.seek=function(e){throw Error("abstract method seek() not implemented")},Us.prototype.writeByte=function(e){throw Error("abstract method readByte() not implemented")},Us.prototype.write=function(e,t,r){var i;for(i=0;i<r;i++)this.writeByte(e[t++]);return r},Us.prototype.flush=function(){};var Bs,Ts=Us,zs=(Bs=new Uint32Array([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188]),function(){var e=4294967295;this.getCRC=function(){return~e>>>0},this.updateCRC=function(t){e=e<<8^Bs[255&(e>>>24^t)]},this.updateCRCRun=function(t,r){for(;r-- >0;)e=e<<8^Bs[255&(e>>>24^t)]}}),qs=function(e,t){var r,i=e[t];for(r=t;r>0;r--)e[r]=e[r-1];return e[0]=i,i},Fs={OK:0,LAST_BLOCK:-1,NOT_BZIP_DATA:-2,UNEXPECTED_INPUT_EOF:-3,UNEXPECTED_OUTPUT_EOF:-4,DATA_ERROR:-5,OUT_OF_MEMORY:-6,OBSOLETE_INPUT:-7,END_OF_BLOCK:-8},Os={};Os[Fs.LAST_BLOCK]="Bad file checksum",Os[Fs.NOT_BZIP_DATA]="Not bzip data",Os[Fs.UNEXPECTED_INPUT_EOF]="Unexpected input EOF",Os[Fs.UNEXPECTED_OUTPUT_EOF]="Unexpected output EOF",Os[Fs.DATA_ERROR]="Data error",Os[Fs.OUT_OF_MEMORY]="Out of memory",Os[Fs.OBSOLETE_INPUT]="Obsolete (pre 0.9.5) bzip format not supported.";var Ns=function(e,t){var r=Os[e]||"unknown error";t&&(r+=": "+t);var i=new TypeError(r);throw i.errorCode=e,i},Ls=function(e,t){this.writePos=this.writeCurrent=this.writeCount=0,this._start_bunzip(e,t)};Ls.prototype._init_block=function(){return this._get_next_block()?(this.blockCRC=new zs,!0):(this.writeCount=-1,!1)},Ls.prototype._start_bunzip=function(e,t){var r=new Uint8Array(4);4===e.read(r,0,4)&&"BZh"===String.fromCharCode(r[0],r[1],r[2])||Ns(Fs.NOT_BZIP_DATA,"bad magic");var i=r[3]-48;(i<1||i>9)&&Ns(Fs.NOT_BZIP_DATA,"level out of range"),this.reader=new Is(e),this.dbufSize=1e5*i,this.nextoutput=0,this.outputStream=t,this.streamCRC=0},Ls.prototype._get_next_block=function(){var e,t,r,i=this.reader,n=i.pi();if("177245385090"===n)return!1;"314159265359"!==n&&Ns(Fs.NOT_BZIP_DATA),this.targetBlockCRC=i.read(32)>>>0,this.streamCRC=(this.targetBlockCRC^(this.streamCRC<<1|this.streamCRC>>>31))>>>0,i.read(1)&&Ns(Fs.OBSOLETE_INPUT);var a=i.read(24);a>this.dbufSize&&Ns(Fs.DATA_ERROR,"initial position out of bounds");var s=i.read(16),o=new Uint8Array(256),c=0;for(e=0;e<16;e++)if(s&1<<15-e){var u=16*e;for(r=i.read(16),t=0;t<16;t++)r&1<<15-t&&(o[c++]=u+t)}var h=i.read(3);(h<2||h>6)&&Ns(Fs.DATA_ERROR);var d=i.read(15);0===d&&Ns(Fs.DATA_ERROR);var f=new Uint8Array(256);for(e=0;e<h;e++)f[e]=e;var l=new Uint8Array(d);for(e=0;e<d;e++){for(t=0;i.read(1);t++)t>=h&&Ns(Fs.DATA_ERROR);l[e]=qs(f,t)}var p,y=c+2,b=[];for(t=0;t<h;t++){var m,g,w=new Uint8Array(y),v=new Uint16Array(21);for(s=i.read(5),e=0;e<y;e++){for(;(s<1||s>20)&&Ns(Fs.DATA_ERROR),i.read(1);)i.read(1)?s--:s++;w[e]=s}for(m=g=w[0],e=1;e<y;e++)w[e]>g?g=w[e]:w[e]<m&&(m=w[e]);p={},b.push(p),p.permute=new Uint16Array(258),p.limit=new Uint32Array(22),p.base=new Uint32Array(21),p.minLen=m,p.maxLen=g;var _=0;for(e=m;e<=g;e++)for(v[e]=p.limit[e]=0,s=0;s<y;s++)w[s]===e&&(p.permute[_++]=s);for(e=0;e<y;e++)v[w[e]]++;for(_=s=0,e=m;e<g;e++)_+=v[e],p.limit[e]=_-1,_<<=1,s+=v[e],p.base[e+1]=_-s;p.limit[g+1]=Number.MAX_VALUE,p.limit[g]=_+v[g]-1,p.base[m]=0}var k=new Uint32Array(256);for(e=0;e<256;e++)f[e]=e;var A,S=0,E=0,x=0,P=this.dbuf=new Uint32Array(this.dbufSize);for(y=0;;){for(y--||(y=49,x>=d&&Ns(Fs.DATA_ERROR),p=b[l[x++]]),e=p.minLen,t=i.read(e);e>p.maxLen&&Ns(Fs.DATA_ERROR),!(t<=p.limit[e]);e++)t=t<<1|i.read(1);((t-=p.base[e])<0||t>=258)&&Ns(Fs.DATA_ERROR);var M=p.permute[t];if(0!==M&&1!==M){if(S)for(S=0,E+s>this.dbufSize&&Ns(Fs.DATA_ERROR),k[A=o[f[0]]]+=s;s--;)P[E++]=A;if(M>c)break;E>=this.dbufSize&&Ns(Fs.DATA_ERROR),k[A=o[A=qs(f,e=M-1)]]++,P[E++]=A}else S||(S=1,s=0),s+=0===M?S:2*S,S<<=1}for((a<0||a>=E)&&Ns(Fs.DATA_ERROR),t=0,e=0;e<256;e++)r=t+k[e],k[e]=t,t=r;for(e=0;e<E;e++)P[k[A=255&P[e]]]|=e<<8,k[A]++;var C=0,K=0,D=0;return E&&(K=255&(C=P[a]),C>>=8,D=-1),this.writePos=C,this.writeCurrent=K,this.writeCount=E,this.writeRun=D,!0},Ls.prototype._read_bunzip=function(e,t){var r,i,n;if(this.writeCount<0)return 0;var a=this.dbuf,s=this.writePos,o=this.writeCurrent,c=this.writeCount;this.outputsize;for(var u=this.writeRun;c;){for(c--,i=o,o=255&(s=a[s]),s>>=8,3==u++?(r=o,n=i,o=-1):(r=1,n=o),this.blockCRC.updateCRCRun(n,r);r--;)this.outputStream.writeByte(n),this.nextoutput++;o!=i&&(u=0)}return this.writeCount=c,this.blockCRC.getCRC()!==this.targetBlockCRC&&Ns(Fs.DATA_ERROR,"Bad block CRC (got "+this.blockCRC.getCRC().toString(16)+" expected "+this.targetBlockCRC.toString(16)+")"),this.nextoutput};var js=function(e){if("readByte"in e)return e;var t=new Ts;return t.pos=0,t.readByte=function(){return e[this.pos++]},t.seek=function(e){this.pos=e},t.eof=function(){return this.pos>=e.length},t},Ws=function(e){var t=new Ts,r=!0;if(e)if("number"==typeof e)t.buffer=new Uint8Array(e),r=!1;else{if("writeByte"in e)return e;t.buffer=e,r=!1}else t.buffer=new Uint8Array(16384);return t.pos=0,t.writeByte=function(e){if(r&&this.pos>=this.buffer.length){var t=new Uint8Array(2*this.buffer.length);t.set(this.buffer),this.buffer=t}this.buffer[this.pos++]=e},t.getBuffer=function(){if(this.pos!==this.buffer.length){if(!r)throw new TypeError("outputsize does not match decoded input");var e=new Uint8Array(this.pos);e.set(this.buffer.subarray(0,this.pos)),this.buffer=e}return this.buffer},t._coerced=!0,t};var Hs=function(e,t,r){for(var i=js(e),n=Ws(t),a=new Ls(i,n);!("eof"in i)||!i.eof();)if(a._init_block())a._read_bunzip();else{var s=a.reader.read(32)>>>0;if(s!==a.streamCRC&&Ns(Fs.DATA_ERROR,"Bad stream CRC (got "+a.streamCRC.toString(16)+" expected "+s.toString(16)+")"),!r||!("eof"in i)||i.eof())break;a._start_bunzip(i,n)}if("getBuffer"in n)return n.getBuffer()};class Gs{static get tag(){return ge.packet.literalData}constructor(e=new Date){this.format="utf8",this.date=ue.normalizeDate(e),this.text=null,this.data=null,this.filename=""}setText(e,t="utf8"){this.format=t,this.text=e,this.data=null}getText(e=!1){return(null===this.text||ue.isStream(this.text))&&(this.text=ue.decodeUTF8(ue.nativeEOL(this.getBytes(e)))),this.text}setBytes(e,t){this.format=t,this.data=e,this.text=null}getBytes(e=!1){return null===this.data&&(this.data=ue.canonicalizeEOL(ue.encodeUTF8(this.text))),e?ee(this.data):this.data}setFilename(e){this.filename=e}getFilename(){return this.filename}async read(e){await J(e,async e=>{const t=ge.read(ge.literal,await e.readByte()),r=await e.readByte();this.filename=ue.decodeUTF8(await e.readBytes(r)),this.date=ue.readDate(await e.readBytes(4));const i=e.remainder();this.setBytes(i,t)})}writeHeader(){const e=ue.encodeUTF8(this.filename),t=new Uint8Array([e.length]),r=new Uint8Array([ge.write(ge.literal,this.format)]),i=ue.writeDate(this.date);return ue.concatUint8Array([r,t,e,i])}write(){const e=this.writeHeader(),t=this.getBytes();return ue.concat([e,t])}}function Vs(e){let t,r=0;const i=e[0];return i<192?([r]=e,t=1):i<255?(r=(e[0]-192<<8)+e[1]+192,t=2):255===i&&(r=ue.readNumber(e.subarray(1,5)),t=5),{len:r,offset:t}}function Zs(e){return e<192?new Uint8Array([e]):e>191&&e<8384?new Uint8Array([192+(e-192>>8),e-192&255]):ue.concatUint8Array([new Uint8Array([255]),ue.writeNumber(e,4)])}function Ys(e){if(e<0||e>30)throw Error("Partial Length power must be between 1 and 30");return new Uint8Array([224+e])}function $s(e){return new Uint8Array([192|e])}function Xs(e,t){return ue.concatUint8Array([$s(e),Zs(t)])}function Js(e){return[ge.packet.literalData,ge.packet.compressedData,ge.packet.symmetricallyEncryptedData,ge.packet.symEncryptedIntegrityProtectedData,ge.packet.aeadEncryptedData].includes(e)}async function Qs(e,t){const r=H(e);let i,n;try{const a=await r.peekBytes(2);if(!a||a.length<2||0==(128&a[0]))throw Error("Error during parsing. This message / key probably does not conform to a valid OpenPGP format.");const s=await r.readByte();let o,c,u=-1,h=-1;h=0,0!=(64&s)&&(h=1),h?u=63&s:(u=(63&s)>>2,c=3&s);const d=Js(u);let f,l=null;if(d){if("array"===ue.isStream(e)){const e=new w;i=G(e),l=e}else{const e=new q;i=G(e.writable),l=e.readable}n=t({tag:u,packet:l})}else l=[];do{if(h){const e=await r.readByte();if(f=!1,e<192)o=e;else if(e>=192&&e<224)o=(e-192<<8)+await r.readByte()+192;else if(e>223&&e<255){if(o=1<<(31&e),f=!0,!d)throw new TypeError("This packet type does not support partial lengths.")}else o=await r.readByte()<<24|await r.readByte()<<16|await r.readByte()<<8|await r.readByte()}else switch(c){case 0:o=await r.readByte();break;case 1:o=await r.readByte()<<8|await r.readByte();break;case 2:o=await r.readByte()<<24|await r.readByte()<<16|await r.readByte()<<8|await r.readByte();break;default:o=1/0}if(o>0){let e=0;for(;;){i&&await i.ready;const{done:t,value:n}=await r.read();if(t){if(o===1/0)break;throw Error("Unexpected end of packet")}const a=o===1/0?n:n.subarray(0,o-e);if(i?await i.write(a):l.push(a),e+=n.length,e>=o){r.unshift(n.subarray(o-e+n.length));break}}}}while(f);const p=await r.peekBytes(d?1/0:2);return i?(await i.ready,await i.close()):(l=ue.concatUint8Array(l),await t({tag:u,packet:l})),!p||!p.length}catch(e){if(i)return await i.abort(e),!0;throw e}finally{i&&await n,r.releaseLock()}}class eo{static get tag(){return ge.packet.signature}constructor(e=new Date){this.version=4,this.signatureType=null,this.hashAlgorithm=null,this.publicKeyAlgorithm=null,this.signatureData=null,this.unhashedSubpackets=[],this.signedHashValue=null,this.created=ue.normalizeDate(e),this.signatureExpirationTime=null,this.signatureNeverExpires=!0,this.exportable=null,this.trustLevel=null,this.trustAmount=null,this.regularExpression=null,this.revocable=null,this.keyExpirationTime=null,this.keyNeverExpires=null,this.preferredSymmetricAlgorithms=null,this.revocationKeyClass=null,this.revocationKeyAlgorithm=null,this.revocationKeyFingerprint=null,this.issuerKeyID=new Ce,this.rawNotations=[],this.notations={},this.preferredHashAlgorithms=null,this.preferredCompressionAlgorithms=null,this.keyServerPreferences=null,this.preferredKeyServer=null,this.isPrimaryUserID=null,this.policyURI=null,this.keyFlags=null,this.signersUserID=null,this.reasonForRevocationFlag=null,this.reasonForRevocationString=null,this.features=null,this.signatureTargetPublicKeyAlgorithm=null,this.signatureTargetHashAlgorithm=null,this.signatureTargetHash=null,this.embeddedSignature=null,this.issuerKeyVersion=null,this.issuerFingerprint=null,this.preferredAEADAlgorithms=null,this.verified=null,this.revoked=null}read(e){let t=0;if(this.version=e[t++],4!==this.version&&5!==this.version)throw Error("Version "+this.version+" of the signature is unsupported.");this.signatureType=e[t++],this.publicKeyAlgorithm=e[t++],this.hashAlgorithm=e[t++],t+=this.readSubPackets(e.subarray(t,e.length),!0),this.signatureData=e.subarray(0,t),t+=this.readSubPackets(e.subarray(t,e.length),!1),this.signedHashValue=e.subarray(t,t+2),t+=2,this.params=Yn.signature.parseSignatureParams(this.publicKeyAlgorithm,e.subarray(t,e.length))}writeParams(){return this.params instanceof Promise?ae(async()=>Yn.serializeParams(this.publicKeyAlgorithm,await this.params)):Yn.serializeParams(this.publicKeyAlgorithm,this.params)}write(){const e=[];return e.push(this.signatureData),e.push(this.writeUnhashedSubPackets()),e.push(this.signedHashValue),e.push(this.writeParams()),ue.concat(e)}async sign(e,t,r=!1){const i=ge.write(ge.signature,this.signatureType),n=ge.write(ge.publicKey,this.publicKeyAlgorithm),a=ge.write(ge.hash,this.hashAlgorithm);5===e.version&&(this.version=5);const s=[new Uint8Array([this.version,i,n,a])];this.issuerKeyVersion=e.version,this.issuerFingerprint=e.getFingerprintBytes(),this.issuerKeyID=e.getKeyID(),s.push(this.writeHashedSubPackets()),this.signatureData=ue.concat(s);const o=this.toHash(i,t,r),c=await this.hash(i,t,o,r);this.signedHashValue=re(Q(c),0,2);const u=async()=>Yn.signature.sign(n,a,e.publicParams,e.privateParams,o,await ie(c));ue.isStream(c)?this.params=u():(this.params=await u(),this.verified=!0)}writeHashedSubPackets(){const e=ge.signatureSubpacket,t=[];let r;null!==this.created&&t.push(to(e.signatureCreationTime,ue.writeDate(this.created))),null!==this.signatureExpirationTime&&t.push(to(e.signatureExpirationTime,ue.writeNumber(this.signatureExpirationTime,4))),null!==this.exportable&&t.push(to(e.exportableCertification,new Uint8Array([this.exportable?1:0]))),null!==this.trustLevel&&(r=new Uint8Array([this.trustLevel,this.trustAmount]),t.push(to(e.trustSignature,r))),null!==this.regularExpression&&t.push(to(e.regularExpression,this.regularExpression)),null!==this.revocable&&t.push(to(e.revocable,new Uint8Array([this.revocable?1:0]))),null!==this.keyExpirationTime&&t.push(to(e.keyExpirationTime,ue.writeNumber(this.keyExpirationTime,4))),null!==this.preferredSymmetricAlgorithms&&(r=ue.stringToUint8Array(ue.uint8ArrayToString(this.preferredSymmetricAlgorithms)),t.push(to(e.preferredSymmetricAlgorithms,r))),null!==this.revocationKeyClass&&(r=new Uint8Array([this.revocationKeyClass,this.revocationKeyAlgorithm]),r=ue.concat([r,this.revocationKeyFingerprint]),t.push(to(e.revocationKey,r))),this.rawNotations.forEach(([{name:i,value:n,humanReadable:a}])=>{r=[new Uint8Array([a?128:0,0,0,0])],r.push(ue.writeNumber(i.length,2)),r.push(ue.writeNumber(n.length,2)),r.push(ue.stringToUint8Array(i)),r.push(n),r=ue.concat(r),t.push(to(e.notationData,r))}),null!==this.preferredHashAlgorithms&&(r=ue.stringToUint8Array(ue.uint8ArrayToString(this.preferredHashAlgorithms)),t.push(to(e.preferredHashAlgorithms,r))),null!==this.preferredCompressionAlgorithms&&(r=ue.stringToUint8Array(ue.uint8ArrayToString(this.preferredCompressionAlgorithms)),t.push(to(e.preferredCompressionAlgorithms,r))),null!==this.keyServerPreferences&&(r=ue.stringToUint8Array(ue.uint8ArrayToString(this.keyServerPreferences)),t.push(to(e.keyServerPreferences,r))),null!==this.preferredKeyServer&&t.push(to(e.preferredKeyServer,ue.stringToUint8Array(this.preferredKeyServer))),null!==this.isPrimaryUserID&&t.push(to(e.primaryUserID,new Uint8Array([this.isPrimaryUserID?1:0]))),null!==this.policyURI&&t.push(to(e.policyURI,ue.stringToUint8Array(this.policyURI))),null!==this.keyFlags&&(r=ue.stringToUint8Array(ue.uint8ArrayToString(this.keyFlags)),t.push(to(e.keyFlags,r))),null!==this.signersUserID&&t.push(to(e.signersUserID,ue.stringToUint8Array(this.signersUserID))),null!==this.reasonForRevocationFlag&&(r=ue.stringToUint8Array(String.fromCharCode(this.reasonForRevocationFlag)+this.reasonForRevocationString),t.push(to(e.reasonForRevocation,r))),null!==this.features&&(r=ue.stringToUint8Array(ue.uint8ArrayToString(this.features)),t.push(to(e.features,r))),null!==this.signatureTargetPublicKeyAlgorithm&&(r=[new Uint8Array([this.signatureTargetPublicKeyAlgorithm,this.signatureTargetHashAlgorithm])],r.push(ue.stringToUint8Array(this.signatureTargetHash)),r=ue.concat(r),t.push(to(e.signatureTarget,r))),null!==this.preferredAEADAlgorithms&&(r=ue.stringToUint8Array(ue.uint8ArrayToString(this.preferredAEADAlgorithms)),t.push(to(e.preferredAEADAlgorithms,r)));const i=ue.concat(t),n=ue.writeNumber(i.length,2);return ue.concat([n,i])}writeUnhashedSubPackets(){const e=ge.signatureSubpacket,t=[];let r;this.issuerKeyID.isNull()||5===this.issuerKeyVersion||t.push(to(e.issuer,this.issuerKeyID.write())),null!==this.embeddedSignature&&t.push(to(e.embeddedSignature,this.embeddedSignature.write())),null!==this.issuerFingerprint&&(r=[new Uint8Array([this.issuerKeyVersion]),this.issuerFingerprint],r=ue.concat(r),t.push(to(e.issuerFingerprint,r))),this.unhashedSubpackets.forEach(e=>{t.push(Zs(e.length)),t.push(e)});const i=ue.concat(t),n=ue.writeNumber(i.length,2);return ue.concat([n,i])}readSubPacket(e,t=!0){let r=0;const i=(e,t)=>{this[e]=[];for(let r=0;r<t.length;r++)this[e].push(t[r])},n=128&e[r],a=127&e[r];if(t||[ge.signatureSubpacket.issuer,ge.signatureSubpacket.issuerFingerprint,ge.signatureSubpacket.embeddedSignature].includes(a))switch(r++,a){case 2:this.created=ue.readDate(e.subarray(r,e.length));break;case 3:{const t=ue.readNumber(e.subarray(r,e.length));this.signatureNeverExpires=0===t,this.signatureExpirationTime=t;break}case 4:this.exportable=1===e[r++];break;case 5:this.trustLevel=e[r++],this.trustAmount=e[r++];break;case 6:this.regularExpression=e[r];break;case 7:this.revocable=1===e[r++];break;case 9:{const t=ue.readNumber(e.subarray(r,e.length));this.keyExpirationTime=t,this.keyNeverExpires=0===t;break}case 11:i("preferredSymmetricAlgorithms",e.subarray(r,e.length));break;case 12:this.revocationKeyClass=e[r++],this.revocationKeyAlgorithm=e[r++],this.revocationKeyFingerprint=e.subarray(r,r+20);break;case 16:this.issuerKeyID.read(e.subarray(r,e.length));break;case 20:{const t=!!(128&e[r]);r+=4;const i=ue.readNumber(e.subarray(r,r+2));r+=2;const a=ue.readNumber(e.subarray(r,r+2));r+=2;const s=ue.uint8ArrayToString(e.subarray(r,r+i)),o=e.subarray(r+i,r+i+a);this.rawNotations.push({name:s,humanReadable:t,value:o,critical:n}),t&&(this.notations[s]=ue.uint8ArrayToString(o));break}case 21:i("preferredHashAlgorithms",e.subarray(r,e.length));break;case 22:i("preferredCompressionAlgorithms",e.subarray(r,e.length));break;case 23:i("keyServerPreferences",e.subarray(r,e.length));break;case 24:this.preferredKeyServer=ue.uint8ArrayToString(e.subarray(r,e.length));break;case 25:this.isPrimaryUserID=0!==e[r++];break;case 26:this.policyURI=ue.uint8ArrayToString(e.subarray(r,e.length));break;case 27:i("keyFlags",e.subarray(r,e.length));break;case 28:this.signersUserID=ue.uint8ArrayToString(e.subarray(r,e.length));break;case 29:this.reasonForRevocationFlag=e[r++],this.reasonForRevocationString=ue.uint8ArrayToString(e.subarray(r,e.length));break;case 30:i("features",e.subarray(r,e.length));break;case 31:{this.signatureTargetPublicKeyAlgorithm=e[r++],this.signatureTargetHashAlgorithm=e[r++];const t=Yn.getHashByteLength(this.signatureTargetHashAlgorithm);this.signatureTargetHash=ue.uint8ArrayToString(e.subarray(r,r+t));break}case 32:this.embeddedSignature=new eo,this.embeddedSignature.read(e.subarray(r,e.length));break;case 33:this.issuerKeyVersion=e[r++],this.issuerFingerprint=e.subarray(r,e.length),5===this.issuerKeyVersion?this.issuerKeyID.read(this.issuerFingerprint):this.issuerKeyID.read(this.issuerFingerprint.subarray(-8));break;case 34:i.call(this,"preferredAEADAlgorithms",e.subarray(r,e.length));break;default:{const e=Error("Unknown signature subpacket type "+a+" @:"+r);if(n)throw e;ue.printDebug(e)}}else this.unhashedSubpackets.push(e.subarray(r,e.length))}readSubPackets(e,t=!0,r){const i=ue.readNumber(e.subarray(0,2));let n=2;for(;n<2+i;){const i=Vs(e.subarray(n,e.length));n+=i.offset,this.readSubPacket(e.subarray(n,n+i.len),t,r),n+=i.len}return n}toSign(e,t){const r=ge.signature;switch(e){case r.binary:return null!==t.text?ue.encodeUTF8(t.getText(!0)):t.getBytes(!0);case r.text:{const e=t.getBytes(!0);return ue.canonicalizeEOL(e)}case r.standalone:return new Uint8Array(0);case r.certGeneric:case r.certPersona:case r.certCasual:case r.certPositive:case r.certRevocation:{let e,i;if(t.userID)i=180,e=t.userID;else{if(!t.userAttribute)throw Error("Either a userID or userAttribute packet needs to be supplied for certification.");i=209,e=t.userAttribute}const n=e.write();return ue.concat([this.toSign(r.key,t),new Uint8Array([i]),ue.writeNumber(n.length,4),n])}case r.subkeyBinding:case r.subkeyRevocation:case r.keyBinding:return ue.concat([this.toSign(r.key,t),this.toSign(r.key,{key:t.bind})]);case r.key:if(void 0===t.key)throw Error("Key packet is required for this signature.");return t.key.writeForHash(this.version);case r.keyRevocation:return this.toSign(r.key,t);case r.timestamp:return new Uint8Array(0);case r.thirdParty:throw Error("Not implemented");default:throw Error("Unknown signature type.")}}calculateTrailer(e,t){let r=0;return $(Q(this.signatureData),e=>{r+=e.length},()=>{const i=[];return 5!==this.version||this.signatureType!==ge.signature.binary&&this.signatureType!==ge.signature.text||(t?i.push(new Uint8Array(6)):i.push(e.writeHeader())),i.push(new Uint8Array([this.version,255])),5===this.version&&i.push(new Uint8Array(4)),i.push(ue.writeNumber(r,4)),ue.concat(i)})}toHash(e,t,r=!1){const i=this.toSign(e,t);return ue.concat([i,this.signatureData,this.calculateTrailer(t,r)])}async hash(e,t,r,i=!1){const n=ge.write(ge.hash,this.hashAlgorithm);return r||(r=this.toHash(e,t,i)),Yn.hash.digest(n,r)}async verify(e,t,r,i=!1,n=we){const a=ge.write(ge.publicKey,this.publicKeyAlgorithm),s=ge.write(ge.hash,this.hashAlgorithm);if(a!==ge.write(ge.publicKey,e.algorithm))throw Error("Public key algorithm used to sign signature does not match issuer key algorithm.");let o,c;if(this.hashed?c=await this.hashed:(o=this.toHash(t,r,i),c=await this.hash(t,r,o)),c=await ie(c),this.signedHashValue[0]!==c[0]||this.signedHashValue[1]!==c[1])throw Error("Message digest did not match");if(this.params=await this.params,!await Yn.signature.verify(a,s,this.params,e.publicParams,o,c))throw Error("Signature verification failed");if(n.rejectHashAlgorithms.has(s))throw Error("Insecure hash algorithm: "+ge.read(ge.hash,s).toUpperCase());if(n.rejectMessageHashAlgorithms.has(s)&&[ge.signature.binary,ge.signature.text].includes(this.signatureType))throw Error("Insecure message hash algorithm: "+ge.read(ge.hash,s).toUpperCase());if(this.rawNotations.forEach(({name:e,critical:t})=>{if(t&&n.knownNotations.indexOf(e)<0)throw Error("Unknown critical notation: "+e)}),null!==this.revocationKeyClass)throw Error("This key is intended to be revoked with an authorized key, which OpenPGP.js does not support.");this.verified=!0}isExpired(e=new Date){const t=ue.normalizeDate(e);if(null!==t){const e=this.getExpirationTime();return!(this.created<=t&&t<=e)}return!1}getExpirationTime(){return this.signatureNeverExpires?1/0:new Date(this.created.getTime()+1e3*this.signatureExpirationTime)}}function to(e,t){const r=[];return r.push(Zs(t.length+1)),r.push(new Uint8Array([e])),r.push(t),ue.concat(r)}class ro{static get tag(){return ge.packet.onePassSignature}constructor(){this.version=null,this.signatureType=null,this.hashAlgorithm=null,this.publicKeyAlgorithm=null,this.issuerKeyID=null,this.flags=null}read(e){let t=0;return this.version=e[t++],this.signatureType=e[t++],this.hashAlgorithm=e[t++],this.publicKeyAlgorithm=e[t++],this.issuerKeyID=new Ce,this.issuerKeyID.read(e.subarray(t,t+8)),t+=8,this.flags=e[t++],this}write(){const e=new Uint8Array([3,ge.write(ge.signature,this.signatureType),ge.write(ge.hash,this.hashAlgorithm),ge.write(ge.publicKey,this.publicKeyAlgorithm)]),t=new Uint8Array([this.flags]);return ue.concatUint8Array([e,this.issuerKeyID.write(),t])}calculateTrailer(...e){return ae(async()=>eo.prototype.calculateTrailer.apply(await this.correspondingSig,e))}async verify(){const e=await this.correspondingSig;if(!e||e.constructor.tag!==ge.packet.signature)throw Error("Corresponding signature packet missing");if(e.signatureType!==this.signatureType||e.hashAlgorithm!==this.hashAlgorithm||e.publicKeyAlgorithm!==this.publicKeyAlgorithm||!e.issuerKeyID.equals(this.issuerKeyID))throw Error("Corresponding signature packet does not match one-pass signature packet");return e.hashed=this.hashed,e.verify.apply(e,arguments)}}ro.prototype.hash=eo.prototype.hash,ro.prototype.toHash=eo.prototype.toHash,ro.prototype.toSign=eo.prototype.toSign;const io=/*#__PURE__*/ue.constructAllowedPackets([Gs,ro,eo]);class no{static get tag(){return ge.packet.compressedData}constructor(e=we){this.packets=null,this.algorithm=ge.read(ge.compression,e.preferredCompressionAlgorithm),this.compressed=null,this.deflateLevel=e.deflateLevel}async read(e){await J(e,async e=>{this.algorithm=ge.read(ge.compression,await e.readByte()),this.compressed=e.remainder(),await this.decompress()})}write(){return null===this.compressed&&this.compress(),ue.concat([new Uint8Array([ge.write(ge.compression,this.algorithm)]),this.compressed])}async decompress(){if(!fo[this.algorithm])throw Error(this.algorithm+" decompression not supported");await this.packets.read(fo[this.algorithm](this.compressed),io)}compress(){if(!ho[this.algorithm])throw Error(this.algorithm+" compression not supported");this.compressed=ho[this.algorithm](this.packets.write(),this.deflateLevel)}}const ao=ue.getNodeZlib();function so(e){return e}function oo(e,t,r={}){return function(i){return!ue.isStream(i)||v(i)?ae(()=>ie(i).then(t=>new Promise((i,n)=>{e(t,r,(e,t)=>{if(e)return n(e);i(t)})}))):C(K(i).pipe(t(r)))}}function co(e,t={}){return function(r){const i=new e(t);return $(r,e=>{if(e.length)return i.push(e,2),i.result},()=>{if(e===ds)return i.push([],4),i.result})}}function uo(e){return function(t){return ae(async()=>e(await ie(t)))}}const ho=ao?{zip:/*#__PURE__*/(e,t)=>oo(ao.deflateRaw,ao.createDeflateRaw,{level:t})(e),zlib:/*#__PURE__*/(e,t)=>oo(ao.deflate,ao.createDeflate,{level:t})(e)}:{zip:/*#__PURE__*/(e,t)=>co(ds,{raw:!0,level:t})(e),zlib:/*#__PURE__*/(e,t)=>co(ds,{level:t})(e)},fo=ao?{uncompressed:so,zip:/*#__PURE__*/oo(ao.inflateRaw,ao.createInflateRaw),zlib:/*#__PURE__*/oo(ao.inflate,ao.createInflate),bzip2:/*#__PURE__*/uo(Hs)}:{uncompressed:so,zip:/*#__PURE__*/co(Ks,{raw:!0}),zlib:/*#__PURE__*/co(Ks),bzip2:/*#__PURE__*/uo(Hs)},lo=/*#__PURE__*/ue.constructAllowedPackets([Gs,no,ro,eo]);class po{static get tag(){return ge.packet.symEncryptedIntegrityProtectedData}constructor(){this.version=1,this.encrypted=null,this.modification=!1,this.packets=null}async read(e){await J(e,async e=>{if(1!==await e.readByte())throw Error("Invalid packet version.");this.encrypted=e.remainder()})}write(){return ue.concat([new Uint8Array([1]),this.encrypted])}async encrypt(e,t,r=we){let i=this.packets.write();v(i)&&(i=await ie(i));const n=await Yn.getPrefixRandom(e),a=new Uint8Array([211,20]),s=ue.concat([n,i,a]),o=await Yn.hash.sha1(ee(s)),c=ue.concat([s,o]);return this.encrypted=await Yn.mode.cfb.encrypt(e,t,c,new Uint8Array(Yn.cipher[e].blockSize),r),!0}async decrypt(e,t,r=we){let i=Q(this.encrypted);v(i)&&(i=await ie(i));const n=await Yn.mode.cfb.decrypt(e,t,i,new Uint8Array(Yn.cipher[e].blockSize)),a=re(ee(n),-20),s=re(n,0,-20),o=Promise.all([ie(await Yn.hash.sha1(ee(s))),ie(a)]).then(([e,t])=>{if(!ue.equalsUint8Array(e,t))throw Error("Modification detected.");return new Uint8Array}),c=re(s,Yn.cipher[e].blockSize+2);let u=re(c,0,-2);return u=j([u,ae(()=>o)]),ue.isStream(i)&&r.allowUnauthenticatedStream||(u=await ie(u)),await this.packets.read(u,lo),!0}}const yo=/*#__PURE__*/ue.constructAllowedPackets([Gs,no,ro,eo]);class bo{static get tag(){return ge.packet.aeadEncryptedData}constructor(){this.version=1,this.cipherAlgo=null,this.aeadAlgorithm="eax",this.aeadAlgo=null,this.chunkSizeByte=null,this.iv=null,this.encrypted=null,this.packets=null}async read(e){await J(e,async e=>{if(1!==await e.readByte())throw Error("Invalid packet version.");this.cipherAlgo=await e.readByte(),this.aeadAlgo=await e.readByte(),this.chunkSizeByte=await e.readByte();const t=Yn.mode[ge.read(ge.aead,this.aeadAlgo)];this.iv=await e.readBytes(t.ivLength),this.encrypted=e.remainder()})}write(){return ue.concat([new Uint8Array([this.version,this.cipherAlgo,this.aeadAlgo,this.chunkSizeByte]),this.iv,this.encrypted])}async decrypt(e,t){await this.packets.read(await this.crypt("decrypt",t,Q(this.encrypted)),yo)}async encrypt(e,t,r=we){this.cipherAlgo=ge.write(ge.symmetric,e),this.aeadAlgo=ge.write(ge.aead,this.aeadAlgorithm);const i=Yn.mode[ge.read(ge.aead,this.aeadAlgo)];this.iv=await Yn.random.getRandomBytes(i.ivLength),this.chunkSizeByte=r.aeadChunkSizeByte;const n=this.packets.write();this.encrypted=await this.crypt("encrypt",t,n)}async crypt(e,t,r){const i=ge.read(ge.symmetric,this.cipherAlgo),n=Yn.mode[ge.read(ge.aead,this.aeadAlgo)],a=await n(i,t),s="decrypt"===e?n.tagLength:0,o="encrypt"===e?n.tagLength:0,c=2**(this.chunkSizeByte+6)+s,u=new ArrayBuffer(21),h=new Uint8Array(u,0,13),d=new Uint8Array(u),f=new DataView(u),l=new Uint8Array(u,5,8);h.set([192|bo.tag,this.version,this.cipherAlgo,this.aeadAlgo,this.chunkSizeByte],0);let p=0,y=Promise.resolve(),b=0,m=0;const g=this.iv;return X(r,async(t,r)=>{if("array"!==ue.isStream(t)){const e=new q({},{highWaterMark:ue.getHardwareConcurrency()*2**(this.chunkSizeByte+6),size:e=>e.length});V(e.readable,r),r=e.writable}const i=H(t),u=G(r);try{for(;;){let t=await i.readBytes(c+s)||new Uint8Array;const r=t.subarray(t.length-s);let w,v;if(t=t.subarray(0,t.length-s),!p||t.length?(i.unshift(r),w=a[e](t,n.getNonce(g,l),h),m+=t.length-s+o):(f.setInt32(17,b),w=a[e](r,n.getNonce(g,l),d),m+=o,v=!0),b+=t.length-s,y=y.then(()=>w).then(async e=>{await u.ready,await u.write(e),m-=e.length}).catch(e=>u.abort(e)),(v||m>u.desiredSize)&&await y,v){await u.close();break}f.setInt32(9,++p)}}catch(e){await u.abort(e)}})}}class mo{static get tag(){return ge.packet.publicKeyEncryptedSessionKey}constructor(){this.version=3,this.publicKeyID=new Ce,this.publicKeyAlgorithm=null,this.sessionKey=null,this.sessionKeyAlgorithm=null,this.encrypted={}}read(e){this.version=e[0],this.publicKeyID.read(e.subarray(1,e.length)),this.publicKeyAlgorithm=ge.read(ge.publicKey,e[9]);const t=ge.write(ge.publicKey,this.publicKeyAlgorithm);this.encrypted=Yn.parseEncSessionKeyParams(t,e.subarray(10))}write(){const e=ge.write(ge.publicKey,this.publicKeyAlgorithm),t=[new Uint8Array([this.version]),this.publicKeyID.write(),new Uint8Array([ge.write(ge.publicKey,this.publicKeyAlgorithm)]),Yn.serializeParams(e,this.encrypted)];return ue.concatUint8Array(t)}async encrypt(e){const t=ue.concatUint8Array([new Uint8Array([ge.write(ge.symmetric,this.sessionKeyAlgorithm)]),this.sessionKey,ue.writeChecksum(this.sessionKey)]),r=ge.write(ge.publicKey,this.publicKeyAlgorithm);return this.encrypted=await Yn.publicKeyEncrypt(r,e.publicParams,t,e.getFingerprintBytes()),!0}async decrypt(e){const t=ge.write(ge.publicKey,this.publicKeyAlgorithm);if(t!==ge.write(ge.publicKey,e.algorithm))throw Error("Decryption error");const r=await Yn.publicKeyDecrypt(t,e.publicParams,e.privateParams,this.encrypted,e.getFingerprintBytes()),i=r.subarray(r.length-2),n=r.subarray(1,r.length-2);if(!ue.equalsUint8Array(i,ue.writeChecksum(n)))throw Error("Decryption error");return this.sessionKey=n,this.sessionKeyAlgorithm=ge.read(ge.symmetric,r[0]),!0}}class go{constructor(e=we){this.algorithm="sha256",this.type="iterated",this.c=e.s2kIterationCountByte,this.salt=null}getCount(){return 16+(15&this.c)<<6+(this.c>>4)}read(e){let t=0;switch(this.type=ge.read(ge.s2k,e[t++]),this.algorithm=e[t++],"gnu"!==this.type&&(this.algorithm=ge.read(ge.hash,this.algorithm)),this.type){case"simple":break;case"salted":this.salt=e.subarray(t,t+8),t+=8;break;case"iterated":this.salt=e.subarray(t,t+8),t+=8,this.c=e[t++];break;case"gnu":if("GNU"!==ue.uint8ArrayToString(e.subarray(t,t+3)))throw Error("Unknown s2k type.");if(t+=3,1001!==1e3+e[t++])throw Error("Unknown s2k gnu protection mode.");this.type="gnu-dummy";break;default:throw Error("Unknown s2k type.")}return t}write(){if("gnu-dummy"===this.type)return new Uint8Array([101,0,...ue.stringToUint8Array("GNU"),1]);const e=[new Uint8Array([ge.write(ge.s2k,this.type),ge.write(ge.hash,this.algorithm)])];switch(this.type){case"simple":break;case"salted":e.push(this.salt);break;case"iterated":e.push(this.salt),e.push(new Uint8Array([this.c]));break;case"gnu":throw Error("GNU s2k type not supported.");default:throw Error("Unknown s2k type.")}return ue.concatUint8Array(e)}async produceKey(e,t){e=ue.encodeUTF8(e);const r=ge.write(ge.hash,this.algorithm),i=[];let n=0,a=0;for(;n<t;){let t;switch(this.type){case"simple":t=ue.concatUint8Array([new Uint8Array(a),e]);break;case"salted":t=ue.concatUint8Array([new Uint8Array(a),this.salt,e]);break;case"iterated":{const r=ue.concatUint8Array([this.salt,e]);let i=r.length;const n=Math.max(this.getCount(),i);t=new Uint8Array(a+n),t.set(r,a);for(let e=a+i;e<n;e+=i,i*=2)t.copyWithin(e,a,e);break}case"gnu":throw Error("GNU s2k type not supported.");default:throw Error("Unknown s2k type.")}const s=await Yn.hash.digest(r,t);i.push(s),n+=s.length,a++}return ue.concatUint8Array(i).subarray(0,t)}}class wo{static get tag(){return ge.packet.symEncryptedSessionKey}constructor(e=we){this.version=e.aeadProtect?5:4,this.sessionKey=null,this.sessionKeyEncryptionAlgorithm=null,this.sessionKeyAlgorithm="aes256",this.aeadAlgorithm=ge.read(ge.aead,e.preferredAEADAlgorithm),this.encrypted=null,this.s2k=null,this.iv=null}read(e){let t=0;this.version=e[t++];const r=ge.read(ge.symmetric,e[t++]);if(5===this.version&&(this.aeadAlgorithm=ge.read(ge.aead,e[t++])),this.s2k=new go,t+=this.s2k.read(e.subarray(t,e.length)),5===this.version){const r=Yn.mode[this.aeadAlgorithm];this.iv=e.subarray(t,t+=r.ivLength)}5===this.version||t<e.length?(this.encrypted=e.subarray(t,e.length),this.sessionKeyEncryptionAlgorithm=r):this.sessionKeyAlgorithm=r}write(){const e=null===this.encrypted?this.sessionKeyAlgorithm:this.sessionKeyEncryptionAlgorithm;let t;return 5===this.version?t=ue.concatUint8Array([new Uint8Array([this.version,ge.write(ge.symmetric,e),ge.write(ge.aead,this.aeadAlgorithm)]),this.s2k.write(),this.iv,this.encrypted]):(t=ue.concatUint8Array([new Uint8Array([this.version,ge.write(ge.symmetric,e)]),this.s2k.write()]),null!==this.encrypted&&(t=ue.concatUint8Array([t,this.encrypted]))),t}async decrypt(e){const t=null!==this.sessionKeyEncryptionAlgorithm?this.sessionKeyEncryptionAlgorithm:this.sessionKeyAlgorithm,r=Yn.cipher[t].keySize,i=await this.s2k.produceKey(e,r);if(5===this.version){const e=Yn.mode[this.aeadAlgorithm],r=new Uint8Array([192|wo.tag,this.version,ge.write(ge.symmetric,this.sessionKeyEncryptionAlgorithm),ge.write(ge.aead,this.aeadAlgorithm)]),n=await e(t,i);this.sessionKey=await n.decrypt(this.encrypted,this.iv,r)}else if(null!==this.encrypted){const e=await Yn.mode.cfb.decrypt(t,i,this.encrypted,new Uint8Array(Yn.cipher[t].blockSize));this.sessionKeyAlgorithm=ge.read(ge.symmetric,e[0]),this.sessionKey=e.subarray(1,e.length)}else this.sessionKey=i}async encrypt(e,t=we){const r=null!==this.sessionKeyEncryptionAlgorithm?this.sessionKeyEncryptionAlgorithm:this.sessionKeyAlgorithm;this.sessionKeyEncryptionAlgorithm=r,this.s2k=new go(t),this.s2k.salt=await Yn.random.getRandomBytes(8);const i=Yn.cipher[r].keySize,n=await this.s2k.produceKey(e,i);if(null===this.sessionKey&&(this.sessionKey=await Yn.generateSessionKey(this.sessionKeyAlgorithm)),5===this.version){const e=Yn.mode[this.aeadAlgorithm];this.iv=await Yn.random.getRandomBytes(e.ivLength);const t=new Uint8Array([192|wo.tag,this.version,ge.write(ge.symmetric,this.sessionKeyEncryptionAlgorithm),ge.write(ge.aead,this.aeadAlgorithm)]),i=await e(r,n);this.encrypted=await i.encrypt(this.sessionKey,this.iv,t)}else{const e=new Uint8Array([ge.write(ge.symmetric,this.sessionKeyAlgorithm)]),i=ue.concatUint8Array([e,this.sessionKey]);this.encrypted=await Yn.mode.cfb.encrypt(r,n,i,new Uint8Array(Yn.cipher[r].blockSize),t)}}}class vo{static get tag(){return ge.packet.publicKey}constructor(e=new Date,t=we){this.version=t.v5Keys?5:4,this.created=ue.normalizeDate(e),this.algorithm=null,this.publicParams=null,this.expirationTimeV3=0,this.fingerprint=null,this.keyID=null}read(e){let t=0;if(this.version=e[t++],4===this.version||5===this.version){this.created=ue.readDate(e.subarray(t,t+4)),t+=4,this.algorithm=ge.read(ge.publicKey,e[t++]);const r=ge.write(ge.publicKey,this.algorithm);5===this.version&&(t+=4);try{const{read:i,publicParams:n}=Yn.parsePublicKeyParams(r,e.subarray(t));this.publicParams=n,t+=i}catch(e){throw Error("Error reading MPIs")}return t}throw Error("Version "+this.version+" of the key packet is unsupported.")}write(){const e=[];e.push(new Uint8Array([this.version])),e.push(ue.writeDate(this.created));const t=ge.write(ge.publicKey,this.algorithm);e.push(new Uint8Array([t]));const r=Yn.serializeParams(t,this.publicParams);return 5===this.version&&e.push(ue.writeNumber(r.length,4)),e.push(r),ue.concatUint8Array(e)}writeForHash(e){const t=this.writePublicKey();return 5===e?ue.concatUint8Array([new Uint8Array([154]),ue.writeNumber(t.length,4),t]):ue.concatUint8Array([new Uint8Array([153]),ue.writeNumber(t.length,2),t])}isDecrypted(){return null}getCreationTime(){return this.created}getKeyID(){return this.keyID||(this.keyID=new Ce,5===this.version?this.keyID.read(ue.hexToUint8Array(this.getFingerprint()).subarray(0,8)):4===this.version&&this.keyID.read(ue.hexToUint8Array(this.getFingerprint()).subarray(12,20))),this.keyID}getFingerprintBytes(){if(this.fingerprint)return this.fingerprint;const e=this.writeForHash(this.version);return 5===this.version?this.fingerprint=lt.bytes(e):4===this.version&&(this.fingerprint=ht.bytes(e)),this.fingerprint}getFingerprint(){return ue.uint8ArrayToHex(this.getFingerprintBytes())}hasSameFingerprintAs(e){return this.version===e.version&&ue.equalsUint8Array(this.writePublicKey(),e.writePublicKey())}getAlgorithmInfo(){const e={};e.algorithm=this.algorithm;const t=this.publicParams.n||this.publicParams.p;return t?e.bits=ue.uint8ArrayBitLength(t):e.curve=this.publicParams.oid.getName(),e}}vo.prototype.readPublicKey=vo.prototype.read,vo.prototype.writePublicKey=vo.prototype.write;const _o=/*#__PURE__*/ue.constructAllowedPackets([Gs,no,ro,eo]);class ko{static get tag(){return ge.packet.symmetricallyEncryptedData}constructor(){this.encrypted=null,this.packets=null}read(e){this.encrypted=e}write(){return this.encrypted}async decrypt(e,t,r=we){if(!r.allowUnauthenticatedMessages)throw Error("Message is not authenticated.");const i=await ie(Q(this.encrypted)),n=await Yn.mode.cfb.decrypt(e,t,i.subarray(Yn.cipher[e].blockSize+2),i.subarray(2,Yn.cipher[e].blockSize+2));await this.packets.read(n,_o)}async encrypt(e,t,r=we){const i=this.packets.write(),n=await Yn.getPrefixRandom(e),a=await Yn.mode.cfb.encrypt(e,t,n,new Uint8Array(Yn.cipher[e].blockSize),r),s=await Yn.mode.cfb.encrypt(e,t,i,a.subarray(2),r);this.encrypted=ue.concat([a,s])}}class Ao extends vo{static get tag(){return ge.packet.publicSubkey}constructor(e,t){super(e,t)}}class So{static get tag(){return ge.packet.userAttribute}constructor(){this.attributes=[]}read(e){let t=0;for(;t<e.length;){const r=Vs(e.subarray(t,e.length));t+=r.offset,this.attributes.push(ue.uint8ArrayToString(e.subarray(t,t+r.len))),t+=r.len}}write(){const e=[];for(let t=0;t<this.attributes.length;t++)e.push(Zs(this.attributes[t].length)),e.push(ue.stringToUint8Array(this.attributes[t]));return ue.concatUint8Array(e)}equals(e){return!!(e&&e instanceof So)&&this.attributes.every((function(t,r){return t===e.attributes[r]}))}}class Eo extends vo{static get tag(){return ge.packet.secretKey}constructor(e=new Date,t=we){super(e,t),this.keyMaterial=null,this.isEncrypted=null,this.s2kUsage=0,this.s2k=null,this.symmetric=null,this.aead=null,this.privateParams=null}read(e){let t=this.readPublicKey(e);if(this.s2kUsage=e[t++],5===this.version&&t++,255===this.s2kUsage||254===this.s2kUsage||253===this.s2kUsage){if(this.symmetric=e[t++],this.symmetric=ge.read(ge.symmetric,this.symmetric),253===this.s2kUsage&&(this.aead=e[t++],this.aead=ge.read(ge.aead,this.aead)),this.s2k=new go,t+=this.s2k.read(e.subarray(t,e.length)),"gnu-dummy"===this.s2k.type)return}else this.s2kUsage&&(this.symmetric=this.s2kUsage,this.symmetric=ge.read(ge.symmetric,this.symmetric));if(this.s2kUsage&&(this.iv=e.subarray(t,t+Yn.cipher[this.symmetric].blockSize),t+=this.iv.length),5===this.version&&(t+=4),this.keyMaterial=e.subarray(t),this.isEncrypted=!!this.s2kUsage,!this.isEncrypted){const e=this.keyMaterial.subarray(0,-2);if(!ue.equalsUint8Array(ue.writeChecksum(e),this.keyMaterial.subarray(-2)))throw Error("Key checksum mismatch");try{const t=ge.write(ge.publicKey,this.algorithm),{privateParams:r}=Yn.parsePrivateKeyParams(t,e,this.publicParams);this.privateParams=r}catch(e){throw Error("Error reading MPIs")}}}write(){const e=[this.writePublicKey()];e.push(new Uint8Array([this.s2kUsage]));const t=[];if(255!==this.s2kUsage&&254!==this.s2kUsage&&253!==this.s2kUsage||(t.push(ge.write(ge.symmetric,this.symmetric)),253===this.s2kUsage&&t.push(ge.write(ge.aead,this.aead)),t.push(...this.s2k.write())),this.s2kUsage&&"gnu-dummy"!==this.s2k.type&&t.push(...this.iv),5===this.version&&e.push(new Uint8Array([t.length])),e.push(new Uint8Array(t)),!this.isDummy()){if(!this.s2kUsage){const e=ge.write(ge.publicKey,this.algorithm);this.keyMaterial=Yn.serializeParams(e,this.privateParams)}5===this.version&&e.push(ue.writeNumber(this.keyMaterial.length,4)),e.push(this.keyMaterial),this.s2kUsage||e.push(ue.writeChecksum(this.keyMaterial))}return ue.concatUint8Array(e)}isDecrypted(){return!1===this.isEncrypted}isDummy(){return!(!this.s2k||"gnu-dummy"!==this.s2k.type)}makeDummy(e=we){this.isDummy()||(this.isDecrypted()&&this.clearPrivateParams(),this.isEncrypted=null,this.keyMaterial=null,this.s2k=new go(e),this.s2k.algorithm=0,this.s2k.c=0,this.s2k.type="gnu-dummy",this.s2kUsage=254,this.symmetric="aes256")}async encrypt(e,t=we){if(this.isDummy())return;if(!this.isDecrypted())throw Error("Key packet is already encrypted");if(this.isDecrypted()&&!e)return void(this.s2kUsage=0);if(!e)throw Error("The key must be decrypted before removing passphrase protection.");this.s2k=new go(t),this.s2k.salt=await Yn.random.getRandomBytes(8);const r=ge.write(ge.publicKey,this.algorithm),i=Yn.serializeParams(r,this.privateParams);this.symmetric="aes256";const n=await xo(this.s2k,e,this.symmetric),a=Yn.cipher[this.symmetric].blockSize;if(this.iv=await Yn.random.getRandomBytes(a),t.aeadProtect){this.s2kUsage=253,this.aead="eax";const e=Yn.mode[this.aead],t=await e(this.symmetric,n);this.keyMaterial=await t.encrypt(i,this.iv.subarray(0,e.ivLength),new Uint8Array)}else this.s2kUsage=254,this.keyMaterial=await Yn.mode.cfb.encrypt(this.symmetric,n,ue.concatUint8Array([i,await Yn.hash.sha1(i,t)]),this.iv,t)}async decrypt(e){if(this.isDummy())return!1;if(this.isDecrypted())throw Error("Key packet is already decrypted.");let t,r;if(254!==this.s2kUsage&&253!==this.s2kUsage)throw 255===this.s2kUsage?Error("Encrypted private key is authenticated using an insecure two-byte hash"):Error("Private key is encrypted using an insecure S2K function: unsalted MD5");if(t=await xo(this.s2k,e,this.symmetric),253===this.s2kUsage){const e=Yn.mode[this.aead];try{const i=await e(this.symmetric,t);r=await i.decrypt(this.keyMaterial,this.iv.subarray(0,e.ivLength),new Uint8Array)}catch(e){if("Authentication tag mismatch"===e.message)throw Error("Incorrect key passphrase: "+e.message);throw e}}else{const e=await Yn.mode.cfb.decrypt(this.symmetric,t,this.keyMaterial,this.iv);r=e.subarray(0,-20);const i=await Yn.hash.sha1(r);if(!ue.equalsUint8Array(i,e.subarray(-20)))throw Error("Incorrect key passphrase")}try{const e=ge.write(ge.publicKey,this.algorithm),{privateParams:t}=Yn.parsePrivateKeyParams(e,r,this.publicParams);this.privateParams=t}catch(e){throw Error("Error reading MPIs")}this.isEncrypted=!1,this.keyMaterial=null,this.s2kUsage=0}async validate(){if(this.isDummy())return;if(!this.isDecrypted())throw Error("Key is not decrypted");const e=ge.write(ge.publicKey,this.algorithm);let t;try{t=await Yn.validateParams(e,this.publicParams,this.privateParams)}catch(e){t=!1}if(!t)throw Error("Key is invalid")}async generate(e,t){const r=ge.write(ge.publicKey,this.algorithm),{privateParams:i,publicParams:n}=await Yn.generateParams(r,e,t);this.privateParams=i,this.publicParams=n,this.isEncrypted=!1}clearPrivateParams(){this.isDummy()||(Object.keys(this.privateParams).forEach(e=>{this.privateParams[e].fill(0),delete this.privateParams[e]}),this.privateParams=null,this.isEncrypted=!0)}}async function xo(e,t,r){return e.produceKey(t,Yn.cipher[r].keySize)}var Po=mt((function(e){!function(t){function r(e){function t(){return Ae<Se}function r(){return Ae}function n(e){Ae=e}function a(){Ae=0,Se=ke.length}function s(e,t){return{name:e,tokens:t||"",semantic:t||"",children:[]}}function o(e,t){var r;return null===t?null:((r=s(e)).tokens=t.tokens,r.semantic=t.semantic,r.children.push(t),r)}function c(e,t){return null!==t&&(e.tokens+=t.tokens,e.semantic+=t.semantic),e.children.push(t),e}function u(e){var r;return t()&&e(r=ke[Ae])?(Ae+=1,s("token",r)):null}function h(e){return function(){return o("literal",u((function(t){return t===e})))}}function d(){var e=arguments;return function(){var t,i,a,o;for(o=r(),i=s("and"),t=0;t<e.length;t+=1){if(null===(a=e[t]()))return n(o),null;c(i,a)}return i}}function f(){var e=arguments;return function(){var t,i,a;for(a=r(),t=0;t<e.length;t+=1){if(null!==(i=e[t]()))return i;n(a)}return null}}function l(e){return function(){var t,i;return i=r(),null!==(t=e())?t:(n(i),s("opt"))}}function p(e){return function(){var t=e();return null!==t&&(t.semantic=""),t}}function y(e){return function(){var t=e();return null!==t&&t.semantic.length>0&&(t.semantic=" "),t}}function b(e,t){return function(){var i,a,o,u,h;for(u=r(),i=s("star"),o=0,h=void 0===t?0:t;null!==(a=e());)o+=1,c(i,a);return o>=h?i:(n(u),null)}}function m(e){return e.charCodeAt(0)>=128}function g(){return o("cr",h("\r")())}function w(){return o("crlf",d(g,k)())}function v(){return o("dquote",h('"')())}function _(){return o("htab",h("\t")())}function k(){return o("lf",h("\n")())}function A(){return o("sp",h(" ")())}function S(){return o("vchar",u((function(t){var r=t.charCodeAt(0),i=33<=r&&r<=126;return e.rfc6532&&(i=i||m(t)),i})))}function E(){return o("wsp",f(A,_)())}function x(){var e=o("quoted-pair",f(d(h("\\"),f(S,E)),ie)());return null===e?null:(e.semantic=e.semantic[1],e)}function P(){return o("fws",f(ae,d(l(d(b(E),p(w))),b(E,1)))())}function M(){return o("ctext",f((function(){return u((function(t){var r=t.charCodeAt(0),i=33<=r&&r<=39||42<=r&&r<=91||93<=r&&r<=126;return e.rfc6532&&(i=i||m(t)),i}))}),te)())}function C(){return o("ccontent",f(M,x,K)())}function K(){return o("comment",d(h("("),b(d(l(P),C)),l(P),h(")"))())}function D(){return o("cfws",f(d(b(d(l(P),K),1),l(P)),P)())}function R(){return o("atext",u((function(t){var r="a"<=t&&t<="z"||"A"<=t&&t<="Z"||"0"<=t&&t<="9"||["!","#","$","%","&","'","*","+","-","/","=","?","^","_","`","{","|","}","~"].indexOf(t)>=0;return e.rfc6532&&(r=r||m(t)),r})))}function I(){return o("atom",d(y(l(D)),b(R,1),y(l(D)))())}function U(){var e,t;return null===(e=o("dot-atom-text",b(R,1)()))||null!==(t=b(d(h("."),b(R,1)))())&&c(e,t),e}function B(){return o("dot-atom",d(p(l(D)),U,p(l(D)))())}function T(){return o("qtext",f((function(){return u((function(t){var r=t.charCodeAt(0),i=33===r||35<=r&&r<=91||93<=r&&r<=126;return e.rfc6532&&(i=i||m(t)),i}))}),re)())}function z(){return o("qcontent",f(T,x)())}function q(){return o("quoted-string",d(p(l(D)),p(v),b(d(l(y(P)),z)),l(p(P)),p(v),p(l(D)))())}function F(){return o("word",f(I,q)())}function O(){return o("address",f(N,W)())}function N(){return o("mailbox",f(L,Q)())}function L(){return o("name-addr",d(l(H),j)())}function j(){return o("angle-addr",f(d(p(l(D)),h("<"),Q,h(">"),p(l(D))),se)())}function W(){return o("group",d(H,h(":"),l(Z),h(";"),p(l(D)))())}function H(){return o("display-name",(null!==(e=o("phrase",f(ne,b(F,1))()))&&(e.semantic=function(e){return e.replace(/([ \t]|\r\n)+/g," ").replace(/^\s*/,"").replace(/\s*$/,"")}(e.semantic)),e));var e}function G(){return o("mailbox-list",f(d(N,b(d(h(","),N))),ue)())}function V(){return o("address-list",f(d(O,b(d(h(","),O))),he)())}function Z(){return o("group-list",f(G,p(D),de)())}function Y(){return o("local-part",f(fe,B,q)())}function $(){return o("dtext",f((function(){return u((function(t){var r=t.charCodeAt(0),i=33<=r&&r<=90||94<=r&&r<=126;return e.rfc6532&&(i=i||m(t)),i}))}),pe)())}function X(){return o("domain-literal",d(p(l(D)),h("["),b(d(l(P),$)),l(P),h("]"),p(l(D)))())}function J(){return o("domain",(t=f(le,B,X)(),e.rejectTLD&&t&&t.semantic&&t.semantic.indexOf(".")<0?null:(t&&(t.semantic=t.semantic.replace(/\s+/g,"")),t)));var t}function Q(){return o("addr-spec",d(Y,h("@"),J)())}function ee(){return e.strict?null:o("obs-NO-WS-CTL",u((function(e){var t=e.charCodeAt(0);return 1<=t&&t<=8||11===t||12===t||14<=t&&t<=31||127===t})))}function te(){return e.strict?null:o("obs-ctext",ee())}function re(){return e.strict?null:o("obs-qtext",ee())}function ie(){return e.strict?null:o("obs-qp",d(h("\\"),f(h("\0"),ee,k,g))())}function ne(){return e.strict?null:e.atInDisplayName?o("obs-phrase",d(F,b(f(F,h("."),h("@"),y(D))))()):o("obs-phrase",d(F,b(f(F,h("."),y(D))))())}function ae(){return e.strict?null:o("obs-FWS",b(d(p(l(w)),E),1)())}function se(){return e.strict?null:o("obs-angle-addr",d(p(l(D)),h("<"),oe,Q,h(">"),p(l(D)))())}function oe(){return e.strict?null:o("obs-route",d(ce,h(":"))())}function ce(){return e.strict?null:o("obs-domain-list",d(b(f(p(D),h(","))),h("@"),J,b(d(h(","),p(l(D)),l(d(h("@"),J)))))())}function ue(){return e.strict?null:o("obs-mbox-list",d(b(d(p(l(D)),h(","))),N,b(d(h(","),l(d(N,p(D))))))())}function he(){return e.strict?null:o("obs-addr-list",d(b(d(p(l(D)),h(","))),O,b(d(h(","),l(d(O,p(D))))))())}function de(){return e.strict?null:o("obs-group-list",d(b(d(p(l(D)),h(",")),1),p(l(D)))())}function fe(){return e.strict?null:o("obs-local-part",d(F,b(d(h("."),F)))())}function le(){return e.strict?null:o("obs-domain",d(I,b(d(h("."),I)))())}function pe(){return e.strict?null:o("obs-dtext",f(ee,x)())}function ye(e,t){var r,i,n;if(null==t)return null;for(i=[t];i.length>0;){if((n=i.pop()).name===e)return n;for(r=n.children.length-1;r>=0;r-=1)i.push(n.children[r])}return null}function be(e,t){var r,i,n,a,s;if(null==t)return null;for(i=[t],a=[],s={},r=0;r<e.length;r+=1)s[e[r]]=!0;for(;i.length>0;)if((n=i.pop()).name in s)a.push(n);else for(r=n.children.length-1;r>=0;r-=1)i.push(n.children[r]);return a}function me(t){var r,i,n,a,s;if(null===t)return null;for(r=[],i=be(["group","mailbox"],t),n=0;n<i.length;n+=1)"group"===(a=i[n]).name?r.push(ge(a)):"mailbox"===a.name&&r.push(we(a));return s={ast:t,addresses:r},e.simple&&(s=function(e){var t;if(e&&e.addresses)for(t=0;t<e.addresses.length;t+=1)delete e.addresses[t].node;return e}(s)),e.oneResult?function(t){if(!t)return null;if(!e.partial&&t.addresses.length>1)return null;return t.addresses&&t.addresses[0]}(s):e.simple?s&&s.addresses:s}function ge(e){var t,r=ye("display-name",e),i=[],n=be(["mailbox"],e);for(t=0;t<n.length;t+=1)i.push(we(n[t]));return{node:e,parts:{name:r},type:e.name,name:ve(r),addresses:i}}function we(e){var t=ye("display-name",e),r=ye("addr-spec",e),i=function(e,t){var r,i,n,a;if(null==t)return null;for(i=[t],a=[];i.length>0;)for((n=i.pop()).name===e&&a.push(n),r=n.children.length-1;r>=0;r-=1)i.push(n.children[r]);return a}("cfws",e),n=be(["comment"],e),a=ye("local-part",r),s=ye("domain",r);return{node:e,parts:{name:t,address:r,local:a,domain:s,comments:i},type:e.name,name:ve(t),address:ve(r),local:ve(a),domain:ve(s),comments:_e(n),groupName:ve(e.groupName)}}function ve(e){return null!=e?e.semantic:null}function _e(e){var t="";if(e)for(var r=0;r<e.length;r+=1)t+=ve(e[r]);return t}var ke,Ae,Se,Ee,xe;if(null===(e=i(e,{})))return null;if(ke=e.input,xe={address:O,"address-list":V,"angle-addr":j,from:function(){return o("from",f(G,V)())},group:W,mailbox:N,"mailbox-list":G,"reply-to":function(){return o("reply-to",V())},sender:function(){return o("sender",f(N,O)())}}[e.startAt]||V,!e.strict){if(a(),e.strict=!0,Ee=xe(ke),e.partial||!t())return me(Ee);e.strict=!1}return a(),Ee=xe(ke),!e.partial&&t()?null:me(Ee)}function i(e,t){function r(e){return"[object String]"===Object.prototype.toString.call(e)}function i(e){return null==e}var n,a;if(r(e))e={input:e};else if(!function(e){return e===Object(e)}(e))return null;if(!r(e.input))return null;if(!t)return null;for(a in n={oneResult:!1,partial:!1,rejectTLD:!1,rfc6532:!1,simple:!1,startAt:"address-list",strict:!1,atInDisplayName:!1})i(e[a])&&(e[a]=i(t[a])?n[a]:t[a]);return e}r.parseOneAddress=function(e){return r(i(e,{oneResult:!0,rfc6532:!0,simple:!0,startAt:"address-list"}))},r.parseAddressList=function(e){return r(i(e,{rfc6532:!0,simple:!0,startAt:"address-list"}))},r.parseFrom=function(e){return r(i(e,{rfc6532:!0,simple:!0,startAt:"from"}))},r.parseSender=function(e){return r(i(e,{oneResult:!0,rfc6532:!0,simple:!0,startAt:"sender"}))},r.parseReplyTo=function(e){return r(i(e,{rfc6532:!0,simple:!0,startAt:"reply-to"}))},e.exports=r}()}));class Mo{static get tag(){return ge.packet.userID}constructor(){this.userID="",this.name="",this.email="",this.comment=""}static fromObject(e){if(ue.isString(e)||e.name&&!ue.isString(e.name)||e.email&&!ue.isEmailAddress(e.email)||e.comment&&!ue.isString(e.comment))throw Error("Invalid user ID format");const t=new Mo;Object.assign(t,e);const r=[];return t.name&&r.push(t.name),t.comment&&r.push(`(${t.comment})`),t.email&&r.push(`<${t.email}>`),t.userID=r.join(" "),t}read(e,t=we){const r=ue.decodeUTF8(e);if(r.length>t.maxUserIDLength)throw Error("User ID string is too long");try{const{name:e,address:t,comments:i}=Po.parseOneAddress({input:r,atInDisplayName:!0});this.comment=i.replace(/^\(|\)$/g,""),this.name=e,this.email=t}catch(e){}this.userID=r}write(){return ue.encodeUTF8(this.userID)}}class Co extends Eo{static get tag(){return ge.packet.secretSubkey}constructor(e=new Date,t=we){super(e,t)}}function Ko(e,t){if(!t[e])throw Error("Packet not allowed in this context: "+ge.read(ge.packets,e));return new t[e]}class Do extends Array{async read(e,t,r=we){this.stream=X(e,async(e,i)=>{const n=G(i);try{for(;;){if(await n.ready,await Qs(e,async e=>{try{const i=Ko(e.tag,t);i.packets=new Do,i.fromStream=ue.isStream(e.packet),await i.read(e.packet,r),await n.write(i)}catch(t){r.tolerant&&!Js(e.tag)||await n.abort(t),ue.printDebugError(t)}}))return await n.ready,void await n.close()}}catch(e){await n.abort(e)}});const i=H(this.stream);for(;;){const{done:e,value:t}=await i.read();if(e?this.stream=null:this.push(t),e||Js(t.constructor.tag))break}i.releaseLock()}write(){const e=[];for(let t=0;t<this.length;t++){const r=this[t].write();if(ue.isStream(r)&&Js(this[t].constructor.tag)){let i=[],n=0;const a=512;e.push($s(this[t].constructor.tag)),e.push($(r,e=>{if(i.push(e),n+=e.length,n>=a){const e=Math.min(Math.log(n)/Math.LN2|0,30),t=2**e,r=ue.concat([Ys(e)].concat(i));return i=[r.subarray(1+t)],n=i[0].length,r.subarray(0,1+t)}},()=>ue.concat([Zs(n)].concat(i))))}else{if(ue.isStream(r)){let i=0;e.push($(Q(r),e=>{i+=e.length},()=>Xs(this[t].constructor.tag,i)))}else e.push(Xs(this[t].constructor.tag,r.length));e.push(r)}}return ue.concat(e)}push(e){e&&(e.packets=e.packets||new Do,super.push(e))}filterByTag(...e){const t=new Do,r=e=>t=>e===t;for(let i=0;i<this.length;i++)e.some(r(this[i].constructor.tag))&&t.push(this[i]);return t}findPacket(e){return this.find(t=>t.constructor.tag===e)}indexOfTag(...e){const t=[],r=this,i=e=>t=>e===t;for(let n=0;n<this.length;n++)e.some(i(r[n].constructor.tag))&&t.push(n);return t}concat(e){if(e)for(let t=0;t<e.length;t++)this.push(e[t]);return this}}const Ro=/*#__PURE__*/ue.constructAllowedPackets([eo]);class Io{constructor(e){this.packets=e||new Do}write(){return this.packets.write()}armor(e=we){return Me(ge.armor.signature,this.write(),void 0,void 0,void 0,e)}}async function Uo(e,t){const r=new Co(e.date,t);return r.packets=null,r.algorithm=ge.read(ge.publicKey,e.algorithm),await r.generate(e.rsaBits,e.curve),r}async function Bo(e,t){const r=new Eo(e.date,t);return r.packets=null,r.algorithm=ge.read(ge.publicKey,e.algorithm),await r.generate(e.rsaBits,e.curve,e.config),r}async function To(e,t,r,i,n=new Date,a){let s,o;for(let c=e.length-1;c>=0;c--)try{s&&!(e[c].created>=s.created)||e[c].isExpired(n)||(e[c].verified||await e[c].verify(t,r,i,void 0,a),s=e[c])}catch(e){o=e}if(!s)throw ue.wrapError(`Could not find valid ${ge.read(ge.signature,r)} signature in key ${t.getKeyID().toHex()}`.replace("certGeneric ","self-").replace(/([a-z])([A-Z])/g,(e,t,r)=>t+" "+r.toLowerCase()),o);return s}function zo(e,t,r=new Date){const i=ue.normalizeDate(r);if(null!==i){const n=Wo(e,t);return!(e.created<=i&&i<=n)||t&&t.isExpired(r)}return!1}async function qo(e,t,r,i){const n={};n.key=t,n.bind=e;const a=new eo(r.date);return a.signatureType=ge.signature.subkeyBinding,a.publicKeyAlgorithm=t.algorithm,a.hashAlgorithm=await Fo(null,e,void 0,void 0,i),r.sign?(a.keyFlags=[ge.keyFlags.signData],a.embeddedSignature=await No(n,null,e,{signatureType:ge.signature.keyBinding},r.date,void 0,void 0,i)):a.keyFlags=[ge.keyFlags.encryptCommunication|ge.keyFlags.encryptStorage],r.keyExpirationTime>0&&(a.keyExpirationTime=r.keyExpirationTime,a.keyNeverExpires=!1),await a.sign(t,n),a}async function Fo(e,t,r=new Date,i={},n){let a=n.preferredHashAlgorithm,s=a;if(e){const t=await e.getPrimaryUser(r,i,n);t.selfCertification.preferredHashAlgorithms&&([s]=t.selfCertification.preferredHashAlgorithms,a=Yn.hash.getHashByteLength(a)<=Yn.hash.getHashByteLength(s)?s:a)}switch(Object.getPrototypeOf(t)){case Eo.prototype:case vo.prototype:case Co.prototype:case Ao.prototype:switch(t.algorithm){case"ecdh":case"ecdsa":case"eddsa":s=Yn.publicKey.elliptic.getPreferredHashAlgo(t.publicParams.oid)}}return Yn.hash.getHashByteLength(a)<=Yn.hash.getHashByteLength(s)?s:a}async function Oo(e,t=[],r=new Date,i=[],n=we){const a={symmetric:ge.symmetric.aes128,aead:ge.aead.eax,compression:ge.compression.uncompressed}[e],s={symmetric:n.preferredSymmetricAlgorithm,aead:n.preferredAEADAlgorithm,compression:n.preferredCompressionAlgorithm}[e],o={symmetric:"preferredSymmetricAlgorithms",aead:"preferredAEADAlgorithms",compression:"preferredCompressionAlgorithms"}[e];return(await Promise.all(t.map((async function(e,t){const a=(await e.getPrimaryUser(r,i[t],n)).selfCertification[o];return!!a&&a.indexOf(s)>=0})))).every(Boolean)?s:a}async function No(e,t,r,i,n,a,s=!1,o){if(r.isDummy())throw Error("Cannot sign with a gnu-dummy key.");if(!r.isDecrypted())throw Error("Private key is not decrypted.");const c=new eo(n);return Object.assign(c,i),c.publicKeyAlgorithm=r.algorithm,c.hashAlgorithm=await Fo(t,r,n,a,o),await c.sign(r,e,s),c}async function Lo(e,t,r,i){(e=e[r])&&(t[r].length?await Promise.all(e.map((async function(e){e.isExpired()||i&&!await i(e)||t[r].some((function(t){return ue.equalsUint8Array(t.writeParams(),e.writeParams())}))||t[r].push(e)}))):t[r]=e)}async function jo(e,t,r,i,n,a,s=new Date,o){a=a||e;const c=ue.normalizeDate(s),u=[];return await Promise.all(i.map((async function(e){try{n&&!e.issuerKeyID.equals(n.issuerKeyID)||o.revocationsExpire&&e.isExpired(c)||(e.verified||await e.verify(a,t,r,void 0,o),u.push(e.issuerKeyID))}catch(e){}}))),n?(n.revoked=!!u.some(e=>e.equals(n.issuerKeyID))||(n.revoked||!1),n.revoked):u.length>0}function Wo(e,t){let r;return!1===t.keyNeverExpires&&(r=e.created.getTime()+1e3*t.keyExpirationTime),r?new Date(r):1/0}function Ho(e,t={}){switch(e.type=e.type||t.type,e.curve=e.curve||t.curve,e.rsaBits=e.rsaBits||t.rsaBits,e.keyExpirationTime=void 0!==e.keyExpirationTime?e.keyExpirationTime:t.keyExpirationTime,e.passphrase=ue.isString(e.passphrase)?e.passphrase:t.passphrase,e.date=e.date||t.date,e.sign=e.sign||!1,e.type){case"ecc":try{e.curve=ge.write(ge.curve,e.curve)}catch(e){throw Error("Invalid curve")}e.curve!==ge.curve.ed25519&&e.curve!==ge.curve.curve25519||(e.curve=e.sign?ge.curve.ed25519:ge.curve.curve25519),e.sign?e.algorithm=e.curve===ge.curve.ed25519?ge.publicKey.eddsa:ge.publicKey.ecdsa:e.algorithm=ge.publicKey.ecdh;break;case"rsa":e.algorithm=ge.publicKey.rsaEncryptSign;break;default:throw Error("Unsupported key type "+e.type)}return e}function Go(e,t){if(!t.verified||!1!==t.revoked)throw Error("Signature not verified");const r=ge.write(ge.publicKey,e.algorithm);return r!==ge.publicKey.rsaEncrypt&&r!==ge.publicKey.elgamal&&r!==ge.publicKey.ecdh&&(!t.keyFlags||0!=(t.keyFlags[0]&ge.keyFlags.signData))}function Vo(e,t){if(!t.verified||!1!==t.revoked)throw Error("Signature not verified");const r=ge.write(ge.publicKey,e.algorithm);return r!==ge.publicKey.dsa&&r!==ge.publicKey.rsaSign&&r!==ge.publicKey.ecdsa&&r!==ge.publicKey.eddsa&&(!t.keyFlags||0!=(t.keyFlags[0]&ge.keyFlags.encryptCommunication)||0!=(t.keyFlags[0]&ge.keyFlags.encryptStorage))}function Zo(e,t){if(!e.verified)throw Error("Signature not verified");return!!t.allowInsecureDecryptionWithSigningKeys||(!e.keyFlags||0!=(e.keyFlags[0]&ge.keyFlags.encryptCommunication)||0!=(e.keyFlags[0]&ge.keyFlags.encryptStorage))}function Yo(e,t){const r=ge.write(ge.publicKey,e.algorithm);if(t.rejectPublicKeyAlgorithms.has(r))throw Error(e.algorithm+" keys are considered too weak.");if(new Set([ge.publicKey.rsaEncryptSign,ge.publicKey.rsaSign,ge.publicKey.rsaEncrypt]).has(r)&&ue.uint8ArrayBitLength(e.publicParams.n)<t.minRSABits)throw Error(`RSA keys shorter than ${t.minRSABits} bits are considered too weak.`)}class $o{constructor(e){if(!(this instanceof $o))return new $o(e);this.userID=e.constructor.tag===ge.packet.userID?e:null,this.userAttribute=e.constructor.tag===ge.packet.userAttribute?e:null,this.selfCertifications=[],this.otherCertifications=[],this.revocationSignatures=[]}toPacketlist(){const e=new Do;return e.push(this.userID||this.userAttribute),e.concat(this.revocationSignatures),e.concat(this.selfCertifications),e.concat(this.otherCertifications),e}async sign(e,t,r){const i={userID:this.userID,userAttribute:this.userAttribute,key:e},n=new $o(i.userID||i.userAttribute);return n.otherCertifications=await Promise.all(t.map((async function(t){if(t.isPublic())throw Error("Need private key for signing");if(t.hasSameFingerprintAs(e))throw Error("Not implemented for self signing");const n=await t.getSigningKey(void 0,void 0,void 0,r);return No(i,t,n.keyPacket,{signatureType:ge.signature.certGeneric,keyFlags:[ge.keyFlags.certifyKeys|ge.keyFlags.signData]},void 0,void 0,void 0,r)}))),await n.update(this,e),n}async isRevoked(e,t,r,i=new Date,n){return jo(e,ge.signature.certRevocation,{key:e,userID:this.userID,userAttribute:this.userAttribute},this.revocationSignatures,t,r,i,n)}async verifyCertificate(e,t,r,i=new Date,n){const a=this,s=t.issuerKeyID,o={userID:this.userID,userAttribute:this.userAttribute,key:e};return(await Promise.all(r.map((async function(r){if(!r.getKeyIDs().some(e=>e.equals(s)))return null;const c=await r.getSigningKey(s,i,void 0,n);if(t.revoked||await a.isRevoked(e,t,c.keyPacket,i,n))throw Error("User certificate is revoked");try{t.verified||await t.verify(c.keyPacket,ge.signature.certGeneric,o,void 0,n)}catch(e){throw ue.wrapError("User certificate is invalid",e)}if(t.isExpired(i))throw Error("User certificate is expired");return!0})))).find(e=>null!==e)||null}async verifyAllCertifications(e,t,r=new Date,i){const n=this,a=this.selfCertifications.concat(this.otherCertifications);return Promise.all(a.map((async function(a){return{keyID:a.issuerKeyID,valid:await n.verifyCertificate(e,a,t,r,i).catch(()=>!1)}})))}async verify(e,t=new Date,r){if(!this.selfCertifications.length)throw Error("No self-certifications");const i=this,n={userID:this.userID,userAttribute:this.userAttribute,key:e};let a;for(let s=this.selfCertifications.length-1;s>=0;s--)try{const a=this.selfCertifications[s];if(a.revoked||await i.isRevoked(e,a,void 0,t,r))throw Error("Self-certification is revoked");try{a.verified||await a.verify(e,ge.signature.certGeneric,n,void 0,r)}catch(e){throw ue.wrapError("Self-certification is invalid",e)}if(a.isExpired(t))throw Error("Self-certification is expired");return!0}catch(e){a=e}throw a}async update(e,t,r){const i={userID:this.userID,userAttribute:this.userAttribute,key:t};await Lo(e,this,"selfCertifications",(async function(e){try{return e.verified||await e.verify(t,ge.signature.certGeneric,i,void 0,r),!0}catch(e){return!1}})),await Lo(e,this,"otherCertifications"),await Lo(e,this,"revocationSignatures",(function(e){return jo(t,ge.signature.certRevocation,i,[e],void 0,void 0,void 0,r)}))}}class Xo{constructor(e){if(!(this instanceof Xo))return new Xo(e);this.keyPacket=e,this.bindingSignatures=[],this.revocationSignatures=[]}toPacketlist(){const e=new Do;return e.push(this.keyPacket),e.concat(this.revocationSignatures),e.concat(this.bindingSignatures),e}async isRevoked(e,t,r,i=new Date,n=we){return jo(e,ge.signature.subkeyRevocation,{key:e,bind:this.keyPacket},this.revocationSignatures,t,r,i,n)}async verify(e,t=new Date,r=we){const i={key:e,bind:this.keyPacket},n=await To(this.bindingSignatures,e,ge.signature.subkeyBinding,i,t,r);if(n.revoked||await this.isRevoked(e,n,null,t,r))throw Error("Subkey is revoked");if(zo(this.keyPacket,n,t))throw Error("Subkey is expired");return n}async getExpirationTime(e,t=new Date,r=we){const i={key:e,bind:this.keyPacket};let n;try{n=await To(this.bindingSignatures,e,ge.signature.subkeyBinding,i,t,r)}catch(e){return null}const a=Wo(this.keyPacket,n),s=n.getExpirationTime();return a<s?a:s}async update(e,t,r=we){if(!this.hasSameFingerprintAs(e))throw Error("SubKey update method: fingerprints of subkeys not equal");this.keyPacket.constructor.tag===ge.packet.publicSubkey&&e.keyPacket.constructor.tag===ge.packet.secretSubkey&&(this.keyPacket=e.keyPacket);const i=this,n={key:t,bind:i.keyPacket};await Lo(e,this,"bindingSignatures",(async function(e){for(let t=0;t<i.bindingSignatures.length;t++)if(i.bindingSignatures[t].issuerKeyID.equals(e.issuerKeyID))return e.created>i.bindingSignatures[t].created&&(i.bindingSignatures[t]=e),!1;try{return e.verified||await e.verify(t,ge.signature.subkeyBinding,n,void 0,r),!0}catch(e){return!1}})),await Lo(e,this,"revocationSignatures",(function(e){return jo(t,ge.signature.subkeyRevocation,n,[e],void 0,void 0,void 0,r)}))}async revoke(e,{flag:t=ge.reasonForRevocation.noReason,string:r=""}={},i=new Date,n=we){const a={key:e,bind:this.keyPacket},s=new Xo(this.keyPacket);return s.revocationSignatures.push(await No(a,null,e,{signatureType:ge.signature.subkeyRevocation,reasonForRevocationFlag:ge.write(ge.reasonForRevocation,t),reasonForRevocationString:r},i,void 0,void 0,n)),await s.update(this,e),s}hasSameFingerprintAs(e){return this.keyPacket.hasSameFingerprintAs(e.keyPacket||e)}}["getKeyID","getFingerprint","getAlgorithmInfo","getCreationTime","isDecrypted"].forEach(e=>{Xo.prototype[e]=function(){return this.keyPacket[e]()}});const Jo=/*#__PURE__*/ue.constructAllowedPackets([eo]);class Qo{constructor(e){if(!(this instanceof Qo))return new Qo(e);if(this.keyPacket=null,this.revocationSignatures=[],this.directSignatures=[],this.users=[],this.subKeys=[],this.packetlist2structure(e),!this.keyPacket)throw Error("Invalid key: need at least key packet")}get primaryKey(){return this.keyPacket}packetlist2structure(e){let t,r,i;for(let n=0;n<e.length;n++)switch(e[n].constructor.tag){case ge.packet.publicKey:case ge.packet.secretKey:if(this.keyPacket)throw Error("Key block contains multiple keys");this.keyPacket=e[n],r=this.getKeyID();break;case ge.packet.userID:case ge.packet.userAttribute:t=new $o(e[n]),this.users.push(t);break;case ge.packet.publicSubkey:case ge.packet.secretSubkey:t=null,i=new Xo(e[n]),this.subKeys.push(i);break;case ge.packet.signature:switch(e[n].signatureType){case ge.signature.certGeneric:case ge.signature.certPersona:case ge.signature.certCasual:case ge.signature.certPositive:if(!t){ue.printDebug("Dropping certification signatures without preceding user packet");continue}e[n].issuerKeyID.equals(r)?t.selfCertifications.push(e[n]):t.otherCertifications.push(e[n]);break;case ge.signature.certRevocation:t?t.revocationSignatures.push(e[n]):this.directSignatures.push(e[n]);break;case ge.signature.key:this.directSignatures.push(e[n]);break;case ge.signature.subkeyBinding:if(!i){ue.printDebug("Dropping subkey binding signature without preceding subkey packet");continue}i.bindingSignatures.push(e[n]);break;case ge.signature.keyRevocation:this.revocationSignatures.push(e[n]);break;case ge.signature.subkeyRevocation:if(!i){ue.printDebug("Dropping subkey revocation signature without preceding subkey packet");continue}i.revocationSignatures.push(e[n])}}}toPacketlist(){const e=new Do;return e.push(this.keyPacket),e.concat(this.revocationSignatures),e.concat(this.directSignatures),this.users.map(t=>e.concat(t.toPacketlist())),this.subKeys.map(t=>e.concat(t.toPacketlist())),e}async clone(e=!1){const t=new Qo(this.toPacketlist());return e&&t.getKeys().forEach(e=>{if(e.keyPacket=Object.create(Object.getPrototypeOf(e.keyPacket),Object.getOwnPropertyDescriptors(e.keyPacket)),!e.keyPacket.isDecrypted())return;const t={};Object.keys(e.keyPacket.privateParams).forEach(r=>{t[r]=new Uint8Array(e.keyPacket.privateParams[r])}),e.keyPacket.privateParams=t}),t}getSubkeys(e=null){const t=[];return this.subKeys.forEach(r=>{e&&!r.getKeyID().equals(e,!0)||t.push(r)}),t}getKeys(e=null){const t=[];return e&&!this.getKeyID().equals(e,!0)||t.push(this),t.concat(this.getSubkeys(e))}getKeyIDs(){return this.getKeys().map(e=>e.getKeyID())}getUserIDs(){return this.users.map(e=>e.userID?e.userID.userID:null).filter(e=>null!==e)}isPublic(){return this.keyPacket.constructor.tag===ge.packet.publicKey}isPrivate(){return this.keyPacket.constructor.tag===ge.packet.secretKey}toPublic(){const e=new Do,t=this.toPacketlist();let r,i,n;for(let a=0;a<t.length;a++)switch(t[a].constructor.tag){case ge.packet.secretKey:r=t[a].writePublicKey(),i=new vo,i.read(r),e.push(i);break;case ge.packet.secretSubkey:r=t[a].writePublicKey(),n=new Ao,n.read(r),e.push(n);break;default:e.push(t[a])}return new Qo(e)}write(){return this.toPacketlist().write()}armor(e=we){return Me(this.isPublic()?ge.armor.publicKey:ge.armor.privateKey,this.toPacketlist().write(),void 0,void 0,void 0,e)}async getSigningKey(e=null,t=new Date,r={},i=we){await this.verifyPrimaryKey(t,r,i);const n=this.keyPacket,a=this.subKeys.slice().sort((e,t)=>t.keyPacket.created-e.keyPacket.created);let s;for(const r of a)if(!e||r.getKeyID().equals(e))try{await r.verify(n,t,i);const e={key:n,bind:r.keyPacket},a=await To(r.bindingSignatures,n,ge.signature.subkeyBinding,e,t,i);if(!Go(r.keyPacket,a))continue;if(!a.embeddedSignature)throw Error("Missing embedded signature");return await To([a.embeddedSignature],r.keyPacket,ge.signature.keyBinding,e,t,i),Yo(r.keyPacket,i),r}catch(e){s=e}try{const a=await this.getPrimaryUser(t,r,i);if((!e||n.getKeyID().equals(e))&&Go(n,a.selfCertification))return Yo(n,i),this}catch(e){s=e}throw ue.wrapError("Could not find valid signing key packet in key "+this.getKeyID().toHex(),s)}async getEncryptionKey(e,t=new Date,r={},i=we){await this.verifyPrimaryKey(t,r,i);const n=this.keyPacket,a=this.subKeys.slice().sort((e,t)=>t.keyPacket.created-e.keyPacket.created);let s;for(const r of a)if(!e||r.getKeyID().equals(e))try{await r.verify(n,t,i);const e={key:n,bind:r.keyPacket},a=await To(r.bindingSignatures,n,ge.signature.subkeyBinding,e,t,i);if(Vo(r.keyPacket,a))return Yo(r.keyPacket,i),r}catch(e){s=e}try{const a=await this.getPrimaryUser(t,r,i);if((!e||n.getKeyID().equals(e))&&Vo(n,a.selfCertification))return Yo(n,i),this}catch(e){s=e}throw ue.wrapError("Could not find valid encryption key packet in key "+this.getKeyID().toHex(),s)}async getDecryptionKeys(e,t=new Date,r={},i=we){const n=this.keyPacket,a=[];for(let r=0;r<this.subKeys.length;r++)if(!e||this.subKeys[r].getKeyID().equals(e,!0))try{const e={key:n,bind:this.subKeys[r].keyPacket};Zo(await To(this.subKeys[r].bindingSignatures,n,ge.signature.subkeyBinding,e,t,i),i)&&a.push(this.subKeys[r])}catch(e){}const s=await this.getPrimaryUser(t,r,i);return e&&!n.getKeyID().equals(e,!0)||!Zo(s.selfCertification,i)||a.push(this),a}isDecrypted(){return this.getKeys().some(({keyPacket:e})=>e.isDecrypted())}async validate(e=we){if(!this.isPrivate())throw Error("Cannot validate a public key");let t;if(this.primaryKey.isDummy()){const r=await this.getSigningKey(null,null,void 0,{...e,rejectPublicKeyAlgorithms:new Set,minRSABits:0});r&&!r.keyPacket.isDummy()&&(t=r.keyPacket)}else t=this.primaryKey;if(t)return t.validate();{const e=this.getKeys();if(e.map(e=>e.keyPacket.isDummy()).every(Boolean))throw Error("Cannot validate an all-gnu-dummy key");return Promise.all(e.map(async e=>e.keyPacket.validate()))}}clearPrivateParams(){if(!this.isPrivate())throw Error("Can't clear private parameters of a public key");this.getKeys().forEach(({keyPacket:e})=>{e.isDecrypted()&&e.clearPrivateParams()})}async isRevoked(e,t,r=new Date,i=we){return jo(this.keyPacket,ge.signature.keyRevocation,{key:this.keyPacket},this.revocationSignatures,e,t,r,i)}async verifyPrimaryKey(e=new Date,t={},r=we){const i=this.keyPacket;if(await this.isRevoked(null,null,e,r))throw Error("Primary key is revoked");const{selfCertification:n}=await this.getPrimaryUser(e,t,r);if(zo(i,n,e))throw Error("Primary key is expired")}async getExpirationTime(e,t,r,i=we){const n=(await this.getPrimaryUser(null,r,i)).selfCertification,a=Wo(this.keyPacket,n),s=n.getExpirationTime();let o=a<s?a:s;if("encrypt"===e||"encrypt_sign"===e){const e=await this.getEncryptionKey(t,o,r,{...i,rejectPublicKeyAlgorithms:new Set,minRSABits:0}).catch(()=>{})||await this.getEncryptionKey(t,null,r,{...i,rejectPublicKeyAlgorithms:new Set,minRSABits:0}).catch(()=>{});if(!e)return null;const n=await e.getExpirationTime(this.keyPacket,void 0,i);n<o&&(o=n)}if("sign"===e||"encrypt_sign"===e){const e=await this.getSigningKey(t,o,r,{...i,rejectPublicKeyAlgorithms:new Set,minRSABits:0}).catch(()=>{})||await this.getSigningKey(t,null,r,{...i,rejectPublicKeyAlgorithms:new Set,minRSABits:0}).catch(()=>{});if(!e)return null;const n=await e.getExpirationTime(this.keyPacket,void 0,i);n<o&&(o=n)}return o}async getPrimaryUser(e=new Date,t={},r=we){const i=this.keyPacket,n=[];let a;for(let s=0;s<this.users.length;s++)try{const a=this.users[s];if(!a.userID)continue;if(void 0!==t.name&&a.userID.name!==t.name||void 0!==t.email&&a.userID.email!==t.email||void 0!==t.comment&&a.userID.comment!==t.comment)throw Error("Could not find user that matches that user ID");const o={userID:a.userID,key:i},c=await To(a.selfCertifications,i,ge.signature.certGeneric,o,e,r);n.push({index:s,user:a,selfCertification:c})}catch(e){a=e}if(!n.length)throw a||Error("Could not find primary user");await Promise.all(n.map((async function(t){return t.user.revoked||t.user.isRevoked(i,t.selfCertification,null,e,r)})));const s=n.sort((function(e,t){const r=e.selfCertification,i=t.selfCertification;return i.revoked-r.revoked||r.isPrimaryUserID-i.isPrimaryUserID||r.created-i.created})).pop(),{user:o,selfCertification:c}=s;if(c.revoked||await o.isRevoked(i,c,null,e,r))throw Error("Primary user is revoked");return s}async update(e,t=we){if(!this.hasSameFingerprintAs(e))throw Error("Key update method: fingerprints of keys not equal");if(this.isPublic()&&e.isPrivate()){if(!(this.subKeys.length===e.subKeys.length&&this.subKeys.every(t=>e.subKeys.some(e=>t.hasSameFingerprintAs(e)))))throw Error("Cannot update public key with private key if subkey mismatch");this.keyPacket=e.keyPacket}await Lo(e,this,"revocationSignatures",r=>jo(this.keyPacket,ge.signature.keyRevocation,this,[r],null,e.keyPacket,void 0,t)),await Lo(e,this,"directSignatures"),await Promise.all(e.users.map(async e=>{let r=!1;await Promise.all(this.users.map(async i=>{(e.userID&&i.userID&&e.userID.userID===i.userID.userID||e.userAttribute&&e.userAttribute.equals(i.userAttribute))&&(await i.update(e,this.keyPacket,t),r=!0)})),r||this.users.push(e)})),await Promise.all(e.subKeys.map(async e=>{let r=!1;await Promise.all(this.subKeys.map(async i=>{i.hasSameFingerprintAs(e)&&(await i.update(e,this.keyPacket,t),r=!0)})),r||this.subKeys.push(e)}))}async revoke({flag:e=ge.reasonForRevocation.noReason,string:t=""}={},r=new Date,i=we){if(this.isPublic())throw Error("Need private key for revoking");const n={key:this.keyPacket},a=await this.clone();return a.revocationSignatures.push(await No(n,null,this.keyPacket,{signatureType:ge.signature.keyRevocation,reasonForRevocationFlag:ge.write(ge.reasonForRevocation,e),reasonForRevocationString:t},r,void 0,void 0,i)),a}async getRevocationCertificate(e=new Date,t=we){const r={key:this.keyPacket},i=await To(this.revocationSignatures,this.keyPacket,ge.signature.keyRevocation,r,e,t),n=new Do;return n.push(i),Me(ge.armor.publicKey,n.write(),null,null,"This is a revocation certificate")}async applyRevocationCertificate(e,t=we){const r=await Pe(e,t),i=new Do;await i.read(r.data,Jo,void 0,t);const n=i.findPacket(ge.packet.signature);if(!n||n.signatureType!==ge.signature.keyRevocation)throw Error("Could not find revocation signature packet");if(!n.issuerKeyID.equals(this.getKeyID()))throw Error("Revocation signature does not match key");if(n.isExpired())throw Error("Revocation signature is expired");try{await n.verify(this.keyPacket,ge.signature.keyRevocation,{key:this.keyPacket},void 0,t)}catch(e){throw ue.wrapError("Could not verify revocation signature",e)}const a=await this.clone();return a.revocationSignatures.push(n),a}async signPrimaryUser(e,t,r,i=we){const{index:n,user:a}=await this.getPrimaryUser(t,r,i),s=await a.sign(this.keyPacket,e,i),o=await this.clone();return o.users[n]=s,o}async signAllUsers(e,t=we){const r=this,i=await this.clone();return i.users=await Promise.all(this.users.map((function(i){return i.sign(r.keyPacket,e,t)}))),i}async verifyPrimaryUser(e,t,r,i=we){const n=this.keyPacket,{user:a}=await this.getPrimaryUser(t,r,i);return e?await a.verifyAllCertifications(n,e,void 0,i):[{keyID:n.keyID,valid:await a.verify(n,void 0,i).catch(()=>!1)}]}async verifyAllUsers(e,t=we){const r=[],i=this.keyPacket;return await Promise.all(this.users.map((async function(n){(e?await n.verifyAllCertifications(i,e,void 0,t):[{keyID:i.keyID,valid:await n.verify(i,void 0,t).catch(()=>!1)}]).forEach(e=>{r.push({userID:n.userID.userID,keyID:e.keyID,valid:e.valid})})}))),r}async addSubkey(e={}){const t={...we,...e.config};if(!this.isPrivate())throw Error("Cannot add a subkey to a public key");if(e.passphrase)throw Error("Subkey could not be encrypted here, please encrypt whole key");if(e.rsaBits<t.minRSABits)throw Error(`rsaBits should be at least ${t.minRSABits}, got: ${e.rsaBits}`);const r=this.primaryKey;if(r.isDummy())throw Error("Cannot add subkey to gnu-dummy primary key");if(!r.isDecrypted())throw Error("Key is not decrypted");const i=r.getAlgorithmInfo();i.type=i.curve?"ecc":"rsa",i.rsaBits=i.bits||4096,i.curve=i.curve||"curve25519",e=Ho(e,i);const n=await Uo(e),a=await qo(n,r,e,t),s=this.toPacketlist();return s.push(n),s.push(a),new Qo(s)}}["getKeyID","getFingerprint","getAlgorithmInfo","getCreationTime","hasSameFingerprintAs"].forEach(e=>{Qo.prototype[e]=Xo.prototype[e]});const ec=/*#__PURE__*/ue.constructAllowedPackets([vo,Ao,Eo,Co,Mo,So,eo]);async function tc(e,t,r,i){r.passphrase&&await e.encrypt(r.passphrase,i),await Promise.all(t.map((async function(e,t){const n=r.subkeys[t].passphrase;n&&await e.encrypt(n,i)})));const n=new Do;n.push(e),await Promise.all(r.userIDs.map((async function(t,n){function a(e,t){return[t,...e.filter(e=>e!==t)]}const s=Mo.fromObject(t),o={};o.userID=s,o.key=e;const c=new eo(r.date);return c.signatureType=ge.signature.certGeneric,c.publicKeyAlgorithm=e.algorithm,c.hashAlgorithm=await Fo(null,e,void 0,void 0,i),c.keyFlags=[ge.keyFlags.certifyKeys|ge.keyFlags.signData],c.preferredSymmetricAlgorithms=a([ge.symmetric.aes256,ge.symmetric.aes128,ge.symmetric.aes192],i.preferredSymmetricAlgorithm),i.aeadProtect&&(c.preferredAEADAlgorithms=a([ge.aead.eax,ge.aead.ocb],i.preferredAEADAlgorithm)),c.preferredHashAlgorithms=a([ge.hash.sha256,ge.hash.sha512],i.preferredHashAlgorithm),c.preferredCompressionAlgorithms=a([ge.compression.zlib,ge.compression.zip,ge.compression.uncompressed],i.preferredCompressionAlgorithm),0===n&&(c.isPrimaryUserID=!0),c.features=[0],c.features[0]|=ge.features.modificationDetection,i.aeadProtect&&(c.features[0]|=ge.features.aead),i.v5Keys&&(c.features[0]|=ge.features.v5Keys),r.keyExpirationTime>0&&(c.keyExpirationTime=r.keyExpirationTime,c.keyNeverExpires=!1),await c.sign(e,o),{userIDPacket:s,signaturePacket:c}}))).then(e=>{e.forEach(({userIDPacket:e,signaturePacket:t})=>{n.push(e),n.push(t)})}),await Promise.all(t.map((async function(t,n){const a=r.subkeys[n];return{secretSubkeyPacket:t,subkeySignaturePacket:await qo(t,e,a,i)}}))).then(e=>{e.forEach(({secretSubkeyPacket:e,subkeySignaturePacket:t})=>{n.push(e),n.push(t)})});const a={key:e};return n.push(await No(a,null,e,{signatureType:ge.signature.keyRevocation,reasonForRevocationFlag:ge.reasonForRevocation.noReason,reasonForRevocationString:""},r.date,void 0,void 0,i)),r.passphrase&&e.clearPrivateParams(),await Promise.all(t.map((async function(e,t){r.subkeys[t].passphrase&&e.clearPrivateParams()}))),new Qo(n)}const rc=/*#__PURE__*/ue.constructAllowedPackets([Gs,no,bo,po,ko,mo,wo,ro,eo]),ic=/*#__PURE__*/ue.constructAllowedPackets([wo]),nc=/*#__PURE__*/ue.constructAllowedPackets([eo]);class ac{constructor(e){this.packets=e||new Do}getEncryptionKeyIDs(){const e=[];return this.packets.filterByTag(ge.packet.publicKeyEncryptedSessionKey).forEach((function(t){e.push(t.publicKeyID)})),e}getSigningKeyIDs(){const e=[],t=this.unwrapCompressed();if(t.packets.filterByTag(ge.packet.onePassSignature).forEach((function(t){e.push(t.issuerKeyID)})),!e.length){t.packets.filterByTag(ge.packet.signature).forEach((function(t){e.push(t.issuerKeyID)}))}return e}async decrypt(e,t,r,i=we){const n=r||await this.decryptSessionKeys(e,t,i),a=this.packets.filterByTag(ge.packet.symmetricallyEncryptedData,ge.packet.symEncryptedIntegrityProtectedData,ge.packet.aeadEncryptedData);if(0===a.length)return this;const s=a[0];let o=null;const c=Promise.all(n.map(async e=>{if(!e||!ue.isUint8Array(e.data)||!ue.isString(e.algorithm))throw Error("Invalid session key for decryption.");try{await s.decrypt(e.algorithm,e.data,i)}catch(e){ue.printDebugError(e),o=e}}));if(ne(s.encrypted),s.encrypted=null,await c,!s.packets||!s.packets.length)throw o||Error("Decryption failed.");const u=new ac(s.packets);return s.packets=new Do,u}async decryptSessionKeys(e,t,r=we){let i,n=[];if(t){const e=this.packets.filterByTag(ge.packet.symEncryptedSessionKey);if(!e)throw Error("No symmetrically encrypted session key packet found.");await Promise.all(t.map((async function(t,r){let i;r?(i=new Do,await i.read(e.write(),ic)):i=e,await Promise.all(i.map((async function(e){try{await e.decrypt(t),n.push(e)}catch(e){ue.printDebugError(e)}})))})))}else{if(!e)throw Error("No key or password specified.");{const t=this.packets.filterByTag(ge.packet.publicKeyEncryptedSessionKey);if(!t)throw Error("No public key encrypted session key packet found.");await Promise.all(t.map((async function(t){await Promise.all(e.map((async function(e){let a=[ge.symmetric.aes256,ge.symmetric.aes128,ge.symmetric.tripledes,ge.symmetric.cast5];try{const t=await e.getPrimaryUser(void 0,void 0,r);t.selfCertification.preferredSymmetricAlgorithms&&(a=a.concat(t.selfCertification.preferredSymmetricAlgorithms))}catch(e){}const s=(await e.getDecryptionKeys(t.publicKeyID,null,void 0,r)).map(e=>e.keyPacket);await Promise.all(s.map((async function(e){if(e&&!e.isDummy()){if(!e.isDecrypted())throw Error("Private key is not decrypted.");try{if(await t.decrypt(e),!a.includes(ge.write(ge.symmetric,t.sessionKeyAlgorithm)))throw Error("A non-preferred symmetric algorithm was used.");n.push(t)}catch(e){ue.printDebugError(e),i=e}}})))}))),ne(t.encrypted),t.encrypted=null})))}}if(n.length){if(n.length>1){const e={};n=n.filter((function(t){const r=t.sessionKeyAlgorithm+ue.uint8ArrayToString(t.sessionKey);return!e.hasOwnProperty(r)&&(e[r]=!0,!0)}))}return n.map(e=>({data:e.sessionKey,algorithm:e.sessionKeyAlgorithm}))}throw i||Error("Session key decryption failed.")}getLiteralData(){const e=this.unwrapCompressed().packets.findPacket(ge.packet.literalData);return e&&e.getBytes()||null}getFilename(){const e=this.unwrapCompressed().packets.findPacket(ge.packet.literalData);return e&&e.getFilename()||null}getText(){const e=this.unwrapCompressed().packets.findPacket(ge.packet.literalData);return e?e.getText():null}static async generateSessionKey(e=[],t=new Date,r=[],i=we){const n=ge.read(ge.symmetric,await Oo("symmetric",e,t,r,i)),a=i.aeadProtect&&await async function(e,t=new Date,r=[],i=we){let n=!0;return await Promise.all(e.map((async function(e,a){const s=await e.getPrimaryUser(t,r[a],i);s.selfCertification.features&&s.selfCertification.features[0]&ge.features.aead||(n=!1)}))),n}(e,t,r,i)?ge.read(ge.aead,await Oo("aead",e,t,r,i)):void 0;return{data:await Yn.generateSessionKey(n),algorithm:n,aeadAlgorithm:a}}async encrypt(e,t,r,i=!1,n=[],a=new Date,s=[],o=we){if(r){if(!ue.isUint8Array(r.data)||!ue.isString(r.algorithm))throw Error("Invalid session key for encryption.")}else if(e&&e.length)r=await ac.generateSessionKey(e,a,s,o);else{if(!t||!t.length)throw Error("No keys, passwords, or session key provided.");r=await ac.generateSessionKey(void 0,void 0,void 0,o)}const{data:c,algorithm:u,aeadAlgorithm:h}=r,d=await ac.encryptSessionKey(c,u,h,e,t,i,n,a,s,o);let f;return h?(f=new bo,f.aeadAlgorithm=h):f=new po,f.packets=this.packets,await f.encrypt(u,c,o),d.packets.push(f),f.packets=new Do,d}static async encryptSessionKey(e,t,r,i,n,a=!1,s=[],o=new Date,c=[],u=we){const h=new Do;if(i){const r=await Promise.all(i.map((async function(r,i){const n=await r.getEncryptionKey(s[i],o,c,u),h=new mo;return h.publicKeyID=a?Ce.wildcard():n.getKeyID(),h.publicKeyAlgorithm=n.keyPacket.algorithm,h.sessionKey=e,h.sessionKeyAlgorithm=t,await h.encrypt(n.keyPacket),delete h.sessionKey,h})));h.concat(r)}if(n){const i=async function(e,t){try{return await e.decrypt(t),1}catch(e){return 0}},a=(e,t)=>e+t,s=async function(e,t,r,o){const c=new wo(u);if(c.sessionKey=e,c.sessionKeyAlgorithm=t,r&&(c.aeadAlgorithm=r),await c.encrypt(o,u),u.passwordCollisionCheck){if(1!==(await Promise.all(n.map(e=>i(c,e)))).reduce(a))return s(e,t,o)}return delete c.sessionKey,c},o=await Promise.all(n.map(i=>s(e,t,r,i)));h.concat(o)}return new ac(h)}async sign(e=[],t=null,r=[],i=new Date,n=[],a=we){const s=new Do,o=this.packets.findPacket(ge.packet.literalData);if(!o)throw Error("No literal data packet to sign.");let c,u;const h=null===o.text?ge.signature.binary:ge.signature.text;if(t)for(u=t.packets.filterByTag(ge.packet.signature),c=u.length-1;c>=0;c--){const t=u[c],r=new ro;r.signatureType=t.signatureType,r.hashAlgorithm=t.hashAlgorithm,r.publicKeyAlgorithm=t.publicKeyAlgorithm,r.issuerKeyID=t.issuerKeyID,e.length||0!==c||(r.flags=1),s.push(r)}return await Promise.all(Array.from(e).reverse().map((async function(t,s){if(t.isPublic())throw Error("Need private key for signing");const o=r[e.length-1-s],c=await t.getSigningKey(o,i,n,a),u=new ro;return u.signatureType=h,u.hashAlgorithm=await Fo(t,c.keyPacket,i,n,a),u.publicKeyAlgorithm=c.keyPacket.algorithm,u.issuerKeyID=c.getKeyID(),s===e.length-1&&(u.flags=1),u}))).then(e=>{e.forEach(e=>s.push(e))}),s.push(o),s.concat(await sc(o,e,t,r,i,n,!1,a)),new ac(s)}compress(e,t=we){if(e===ge.compression.uncompressed)return this;const r=new no(t);r.algorithm=ge.read(ge.compression,e),r.packets=this.packets;const i=new Do;return i.push(r),new ac(i)}async signDetached(e=[],t=null,r=[],i=new Date,n=[],a=we){const s=this.packets.findPacket(ge.packet.literalData);if(!s)throw Error("No literal data packet to sign.");return new Io(await sc(s,e,t,r,i,n,!0,a))}async verify(e,t=new Date,r=we){const i=this.unwrapCompressed(),n=i.packets.filterByTag(ge.packet.literalData);if(1!==n.length)throw Error("Can only verify message with one literal data packet.");v(i.packets.stream)&&i.packets.concat(await ie(i.packets.stream,e=>e));const a=i.packets.filterByTag(ge.packet.onePassSignature).reverse(),s=i.packets.filterByTag(ge.packet.signature);return a.length&&!s.length&&ue.isStream(i.packets.stream)&&!v(i.packets.stream)?(await Promise.all(a.map(async e=>{e.correspondingSig=new Promise((t,r)=>{e.correspondingSigResolve=t,e.correspondingSigReject=r}),e.signatureData=ae(async()=>(await e.correspondingSig).signatureData),e.hashed=ie(await e.hash(e.signatureType,n[0],void 0,!1)),e.hashed.catch(()=>{})})),i.packets.stream=X(i.packets.stream,async(e,t)=>{const r=H(e),i=G(t);try{for(let e=0;e<a.length;e++){const{value:t}=await r.read();a[e].correspondingSigResolve(t)}await r.readToEnd(),await i.ready,await i.close()}catch(e){a.forEach(t=>{t.correspondingSigReject(e)}),await i.abort(e)}}),oc(a,n,e,t,!1,r)):oc(s,n,e,t,!1,r)}verifyDetached(e,t,r=new Date,i=we){const n=this.unwrapCompressed().packets.filterByTag(ge.packet.literalData);if(1!==n.length)throw Error("Can only verify message with one literal data packet.");return oc(e.packets,n,t,r,!0,i)}unwrapCompressed(){const e=this.packets.filterByTag(ge.packet.compressedData);return e.length?new ac(e[0].packets):this}async appendSignature(e){await this.packets.read(ue.isUint8Array(e)?e:(await Pe(e)).data,nc)}write(){return this.packets.write()}armor(e=we){return Me(ge.armor.message,this.write(),null,null,null,e)}}async function sc(e,t,r=null,i=[],n=new Date,a=[],s=!1,o=we){const c=new Do,u=null===e.text?ge.signature.binary:ge.signature.text;if(await Promise.all(t.map(async(t,r)=>{const c=a[r];if(t.isPublic())throw Error("Need private key for signing");const h=await t.getSigningKey(i[r],n,c,o);return No(e,t,h.keyPacket,{signatureType:u},n,c,s,o)})).then(e=>{e.forEach(e=>c.push(e))}),r){const e=r.packets.filterByTag(ge.packet.signature);c.concat(e)}return c}async function oc(e,t,r,i=new Date,n=!1,a=we){return Promise.all(e.filter((function(e){return["text","binary"].includes(ge.read(ge.signature,e.signatureType))})).map((async function(e){return async function(e,t,r,i=new Date,n=!1,a=we){let s,o,c;for(const t of r){if(t.getKeys(e.issuerKeyID).length>0){s=t;break}}if(s)try{o=await s.getSigningKey(e.issuerKeyID,null,void 0,a)}catch(e){c=e}else c=Error("Could not find signing key with key ID "+e.issuerKeyID.toHex());const u=e.correspondingSig||e,h={keyID:e.issuerKeyID,verified:(async()=>{if(c)throw c;await e.verify(o.keyPacket,e.signatureType,t[0],n,a);const r=await u;if(r.isExpired(i)||!(r.created>=o.getCreationTime()&&r.created<await(o===s?o.getExpirationTime(void 0,void 0,void 0,a):o.getExpirationTime(s,i,void 0,a))))throw Error("Signature is expired");return!0})(),signature:(async()=>{const e=await u,t=new Do;return t.push(e),new Io(t)})()};return h.signature.catch(()=>{}),h.verified.catch(()=>{}),h}(e,t,r,i,n,a)})))}const cc=/*#__PURE__*/ue.constructAllowedPackets([eo]);class uc{constructor(e,t){if(this.text=ue.removeTrailingSpaces(e).replace(/\r?\n/g,"\r\n"),t&&!(t instanceof Io))throw Error("Invalid signature input");this.signature=t||new Io(new Do)}getSigningKeyIDs(){const e=[];return this.signature.packets.forEach((function(t){e.push(t.issuerKeyID)})),e}async sign(e,t=null,r=[],i=new Date,n=[],a=we){const s=new Gs;s.setText(this.text);const o=new Io(await sc(s,e,t,r,i,n,!0,a));return new uc(this.text,o)}verify(e,t=new Date,r=we){const i=this.signature.packets,n=new Gs;return n.setText(this.text),oc(i,[n],e,t,!0,r)}getText(){return this.text.replace(/\r\n/g,"\n")}armor(e=we){let t=this.signature.packets.map((function(e){return ge.read(ge.hash,e.hashAlgorithm).toUpperCase()}));t=t.filter((function(e,t,r){return r.indexOf(e)===t}));const r={hash:t.join(),text:this.text,data:this.signature.packets.write()};return Me(ge.armor.signed,r,void 0,void 0,void 0,e)}}function hc(e){if(!(e instanceof ac))throw Error("Parameter [message] needs to be of type Message")}function dc(e){if(!(e instanceof uc||e instanceof ac))throw Error("Parameter [message] needs to be of type Message or CleartextMessage")}function fc(e){return e&&!ue.isArray(e)&&(e=[e]),e}async function lc(e,t,r="utf8"){const i=ue.isStream(e);return"array"===i?ie(e):"node"===t?(e=K(e),"binary"!==r&&e.setEncoding(r),e):"web"===t&&"ponyfill"===i?B(e):e}function pc(e,t){e.data=X(t.packets.stream,async(t,r)=>{await V(e.data,r,{preventClose:!0});const i=G(r);try{await ie(t,e=>e),await i.close()}catch(e){await i.abort(e)}})}async function yc(e){await Promise.all(e.map(async e=>{e.signature=await e.signature;try{e.valid=await e.verified}catch(t){e.valid=!1,e.error=t,ue.printDebugError(t)}}))}function bc(e,t){ue.printDebugError(t);try{t.message=e+": "+t.message}catch(e){}throw t}const mc=se,gc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol:e=>`Symbol(${e})`;function wc(){}const vc=Number.isNaN||function(e){return e!=e},_c=wc;function kc(e){return"object"==typeof e&&null!==e||"function"==typeof e}function Ac(e){return e.slice()}function Sc(e){return!1!==function(e){if("number"!=typeof e)return!1;if(vc(e))return!1;if(e<0)return!1;return!0}(e)&&e!==1/0}function Ec(e,t,r){if("function"!=typeof e)throw new TypeError("Argument is not a function");return Function.prototype.apply.call(e,t,r)}function xc(e,t,r,i){const n=e[t];if(void 0!==n){if("function"!=typeof n)throw new TypeError(n+" is not a method");switch(r){case 0:return()=>Mc(n,e,i);case 1:return t=>{const r=[t].concat(i);return Mc(n,e,r)}}}return()=>Tc(void 0)}function Pc(e,t,r){const i=e[t];if(void 0!==i)return Ec(i,e,r)}function Mc(e,t,r){try{return Tc(Ec(e,t,r))}catch(e){return zc(e)}}function Cc(e){if(vc(e=Number(e))||e<0)throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN");return e}function Kc(e){if(void 0===e)return()=>1;if("function"!=typeof e)throw new TypeError("size property of a queuing strategy must be a function");return t=>e(t)}const Dc=Promise,Rc=Promise.prototype.then,Ic=Promise.resolve.bind(Dc),Uc=Promise.reject.bind(Dc);function Bc(e){return new Dc(e)}function Tc(e){return Ic(e)}function zc(e){return Uc(e)}function qc(e,t,r){return Rc.call(e,t,r)}function Fc(e,t,r){qc(qc(e,t,r),void 0,_c)}function Oc(e,t){Fc(e,t)}function Nc(e,t){Fc(e,void 0,t)}function Lc(e,t,r){return qc(e,t,r)}function jc(e){qc(e,void 0,_c)}class Wc{constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0}get length(){return this._size}push(e){const t=this._back;let r=t;16383===t._elements.length&&(r={_elements:[],_next:void 0}),t._elements.push(e),r!==t&&(this._back=r,t._next=r),++this._size}shift(){const e=this._front;let t=e;const r=this._cursor;let i=r+1;const n=e._elements,a=n[r];return 16384===i&&(t=e._next,i=0),--this._size,this._cursor=i,e!==t&&(this._front=t),n[r]=void 0,a}forEach(e){let t=this._cursor,r=this._front,i=r._elements;for(;!(t===i.length&&void 0===r._next||t===i.length&&(r=r._next,i=r._elements,t=0,0===i.length));)e(i[t]),++t}peek(){const e=this._front,t=this._cursor;return e._elements[t]}}function Hc(e,t,r){let i=null;!0===r&&(i=Object.prototype);const n=Object.create(i);return n.value=e,n.done=t,n}function Gc(e,t){e._forAuthorCode=!0,e._ownerReadableStream=t,t._reader=e,"readable"===t._state?$c(e):"closed"===t._state?function(e){$c(e),Qc(e)}(e):Xc(e,t._storedError)}function Vc(e,t){return td(e._ownerReadableStream,t)}function Zc(e){"readable"===e._ownerReadableStream._state?Jc(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):function(e,t){Xc(e,t)}(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0}function Yc(e){return new TypeError("Cannot "+e+" a stream using a released reader")}function $c(e){e._closedPromise=Bc((t,r)=>{e._closedPromise_resolve=t,e._closedPromise_reject=r})}function Xc(e,t){$c(e),Jc(e,t)}function Jc(e,t){jc(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function Qc(e){e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}const eu=gc("[[CancelSteps]]"),tu=gc("[[PullSteps]]");function ru(e,t=!1){const r=new ou(e);return r._forAuthorCode=t,r}function iu(e){return Bc((t,r)=>{const i={_resolve:t,_reject:r};e._reader._readRequests.push(i)})}function nu(e,t,r){const i=e._reader;i._readRequests.shift()._resolve(Hc(t,r,i._forAuthorCode))}function au(e){return e._reader._readRequests.length}function su(e){const t=e._reader;return void 0!==t&&!!cu(t)}class ou{constructor(e){if(!1===Qh(e))throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance");if(!0===ed(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader");Gc(this,e),this._readRequests=new Wc}get closed(){return cu(this)?this._closedPromise:zc(hu("closed"))}cancel(e){return cu(this)?void 0===this._ownerReadableStream?zc(Yc("cancel")):Vc(this,e):zc(hu("cancel"))}read(){return cu(this)?void 0===this._ownerReadableStream?zc(Yc("read from")):uu(this):zc(hu("read"))}releaseLock(){if(!cu(this))throw hu("releaseLock");if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");Zc(this)}}}function cu(e){return!!kc(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readRequests")}function uu(e){const t=e._ownerReadableStream;return t._disturbed=!0,"closed"===t._state?Tc(Hc(void 0,!0,e._forAuthorCode)):"errored"===t._state?zc(t._storedError):t._readableStreamController[tu]()}function hu(e){return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`)}let du;"symbol"==typeof gc.asyncIterator&&(du={[gc.asyncIterator](){return this}},Object.defineProperty(du,gc.asyncIterator,{enumerable:!1}));const fu={next(){if(!1===lu(this))return zc(pu("next"));const e=this._asyncIteratorReader;return void 0===e._ownerReadableStream?zc(Yc("iterate")):Lc(uu(e),t=>{const r=t.done;return r&&Zc(e),Hc(t.value,r,!0)})},return(e){if(!1===lu(this))return zc(pu("next"));const t=this._asyncIteratorReader;if(void 0===t._ownerReadableStream)return zc(Yc("finish iterating"));if(t._readRequests.length>0)return zc(new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled"));if(!1===this._preventCancel){const r=Vc(t,e);return Zc(t),Lc(r,()=>Hc(e,!0,!0))}return Zc(t),Tc(Hc(e,!0,!0))}};function lu(e){return!!kc(e)&&!!Object.prototype.hasOwnProperty.call(e,"_asyncIteratorReader")}function pu(e){return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`)}function yu(e){const t=e._queue.shift();return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value}function bu(e,t,r){if(!Sc(r=Number(r)))throw new RangeError("Size must be a finite, non-NaN, non-negative number.");e._queue.push({value:t,size:r}),e._queueTotalSize+=r}function mu(e){e._queue=new Wc,e._queueTotalSize=0}void 0!==du&&Object.setPrototypeOf(fu,du),Object.defineProperty(fu,"next",{enumerable:!1}),Object.defineProperty(fu,"return",{enumerable:!1});const gu=gc("[[AbortSteps]]"),wu=gc("[[ErrorSteps]]");class vu{constructor(e={},t={}){ku(this);const r=t.size;let i=t.highWaterMark;if(void 0!==e.type)throw new RangeError("Invalid type is specified");const n=Kc(r);void 0===i&&(i=1),i=Cc(i),function(e,t,r,i){const n=Object.create(Ou.prototype);const a=xc(t,"write",1,[n]),s=xc(t,"close",0,[]),o=xc(t,"abort",1,[]);Nu(e,n,(function(){return Pc(t,"start",[n])}),a,s,o,r,i)}(this,e,i,n)}get locked(){if(!1===Au(this))throw Zu("locked");return Su(this)}abort(e){return!1===Au(this)?zc(Zu("abort")):!0===Su(this)?zc(new TypeError("Cannot abort a stream that already has a writer")):Eu(this,e)}close(){return!1===Au(this)?zc(Zu("close")):!0===Su(this)?zc(new TypeError("Cannot close a stream that already has a writer")):!0===Ku(this)?zc(new TypeError("Cannot close an already-closing stream")):xu(this)}getWriter(){if(!1===Au(this))throw Zu("getWriter");return _u(this)}}function _u(e){return new Iu(e)}function ku(e){e._state="writable",e._storedError=void 0,e._writer=void 0,e._writableStreamController=void 0,e._writeRequests=new Wc,e._inFlightWriteRequest=void 0,e._closeRequest=void 0,e._inFlightCloseRequest=void 0,e._pendingAbortRequest=void 0,e._backpressure=!1}function Au(e){return!!kc(e)&&!!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")}function Su(e){return void 0!==e._writer}function Eu(e,t){const r=e._state;if("closed"===r||"errored"===r)return Tc(void 0);if(void 0!==e._pendingAbortRequest)return e._pendingAbortRequest._promise;let i=!1;"erroring"===r&&(i=!0,t=void 0);const n=Bc((r,n)=>{e._pendingAbortRequest={_promise:void 0,_resolve:r,_reject:n,_reason:t,_wasAlreadyErroring:i}});return e._pendingAbortRequest._promise=n,!1===i&&Mu(e,t),n}function xu(e){const t=e._state;if("closed"===t||"errored"===t)return zc(new TypeError(`The stream (in ${t} state) is not in the writable state and cannot be closed`));const r=Bc((t,r)=>{const i={_resolve:t,_reject:r};e._closeRequest=i}),i=e._writer;var n;return void 0!==i&&!0===e._backpressure&&"writable"===t&&ah(i),bu(n=e._writableStreamController,"close",0),Wu(n),r}function Pu(e,t){"writable"!==e._state?Cu(e):Mu(e,t)}function Mu(e,t){const r=e._writableStreamController;e._state="erroring",e._storedError=t;const i=e._writer;void 0!==i&&zu(i,t),!1===function(e){if(void 0===e._inFlightWriteRequest&&void 0===e._inFlightCloseRequest)return!1;return!0}(e)&&!0===r._started&&Cu(e)}function Cu(e){e._state="errored",e._writableStreamController[wu]();const t=e._storedError;if(e._writeRequests.forEach(e=>{e._reject(t)}),e._writeRequests=new Wc,void 0===e._pendingAbortRequest)return void Du(e);const r=e._pendingAbortRequest;if(e._pendingAbortRequest=void 0,!0===r._wasAlreadyErroring)return r._reject(t),void Du(e);Fc(e._writableStreamController[gu](r._reason),()=>{r._resolve(),Du(e)},t=>{r._reject(t),Du(e)})}function Ku(e){return void 0!==e._closeRequest||void 0!==e._inFlightCloseRequest}function Du(e){void 0!==e._closeRequest&&(e._closeRequest._reject(e._storedError),e._closeRequest=void 0);const t=e._writer;void 0!==t&&Qu(t,e._storedError)}function Ru(e,t){const r=e._writer;void 0!==r&&t!==e._backpressure&&(!0===t?function(e){th(e)}(r):ah(r)),e._backpressure=t}class Iu{constructor(e){if(!1===Au(e))throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance");if(!0===Su(e))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=e,e._writer=this;const t=e._state;if("writable"===t)!1===Ku(e)&&!0===e._backpressure?th(this):ih(this),Xu(this);else if("erroring"===t)rh(this,e._storedError),Xu(this);else if("closed"===t)ih(this),Xu(r=this),eh(r);else{const t=e._storedError;rh(this,t),Ju(this,t)}var r}get closed(){return!1===Uu(this)?zc(Yu("closed")):this._closedPromise}get desiredSize(){if(!1===Uu(this))throw Yu("desiredSize");if(void 0===this._ownerWritableStream)throw $u("desiredSize");return function(e){const t=e._ownerWritableStream,r=t._state;if("errored"===r||"erroring"===r)return null;if("closed"===r)return 0;return ju(t._writableStreamController)}(this)}get ready(){return!1===Uu(this)?zc(Yu("ready")):this._readyPromise}abort(e){return!1===Uu(this)?zc(Yu("abort")):void 0===this._ownerWritableStream?zc($u("abort")):function(e,t){return Eu(e._ownerWritableStream,t)}(this,e)}close(){if(!1===Uu(this))return zc(Yu("close"));const e=this._ownerWritableStream;return void 0===e?zc($u("close")):!0===Ku(e)?zc(new TypeError("Cannot close an already-closing stream")):Bu(this)}releaseLock(){if(!1===Uu(this))throw Yu("releaseLock");void 0!==this._ownerWritableStream&&qu(this)}write(e){return!1===Uu(this)?zc(Yu("write")):void 0===this._ownerWritableStream?zc($u("write to")):Fu(this,e)}}function Uu(e){return!!kc(e)&&!!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")}function Bu(e){return xu(e._ownerWritableStream)}function Tu(e,t){"pending"===e._closedPromiseState?Qu(e,t):function(e,t){Ju(e,t)}(e,t)}function zu(e,t){"pending"===e._readyPromiseState?nh(e,t):function(e,t){rh(e,t)}(e,t)}function qu(e){const t=e._ownerWritableStream,r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");zu(e,r),Tu(e,r),t._writer=void 0,e._ownerWritableStream=void 0}function Fu(e,t){const r=e._ownerWritableStream,i=r._writableStreamController,n=function(e,t){try{return e._strategySizeAlgorithm(t)}catch(t){return Hu(e,t),1}}(i,t);if(r!==e._ownerWritableStream)return zc($u("write to"));const a=r._state;if("errored"===a)return zc(r._storedError);if(!0===Ku(r)||"closed"===a)return zc(new TypeError("The stream is closing or closed and cannot be written to"));if("erroring"===a)return zc(r._storedError);const s=function(e){return Bc((t,r)=>{const i={_resolve:t,_reject:r};e._writeRequests.push(i)})}(r);return function(e,t,r){const i={chunk:t};try{bu(e,i,r)}catch(t){return void Hu(e,t)}const n=e._controlledWritableStream;if(!1===Ku(n)&&"writable"===n._state){const t=Gu(e);Ru(n,t)}Wu(e)}(i,t,n),s}class Ou{constructor(){throw new TypeError("WritableStreamDefaultController cannot be constructed explicitly")}error(e){if(!1===function(e){if(!kc(e))return!1;if(!Object.prototype.hasOwnProperty.call(e,"_controlledWritableStream"))return!1;return!0}(this))throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController");"writable"===this._controlledWritableStream._state&&Vu(this,e)}[gu](e){const t=this._abortAlgorithm(e);return Lu(this),t}[wu](){mu(this)}}function Nu(e,t,r,i,n,a,s,o){t._controlledWritableStream=e,e._writableStreamController=t,t._queue=void 0,t._queueTotalSize=void 0,mu(t),t._started=!1,t._strategySizeAlgorithm=o,t._strategyHWM=s,t._writeAlgorithm=i,t._closeAlgorithm=n,t._abortAlgorithm=a;const c=Gu(t);Ru(e,c),Fc(Tc(r()),()=>{t._started=!0,Wu(t)},r=>{t._started=!0,Pu(e,r)})}function Lu(e){e._writeAlgorithm=void 0,e._closeAlgorithm=void 0,e._abortAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function ju(e){return e._strategyHWM-e._queueTotalSize}function Wu(e){const t=e._controlledWritableStream;if(!1===e._started)return;if(void 0!==t._inFlightWriteRequest)return;if("erroring"===t._state)return void Cu(t);if(0===e._queue.length)return;const r=e._queue.peek().value;"close"===r?function(e){const t=e._controlledWritableStream;(function(e){e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0})(t),yu(e);const r=e._closeAlgorithm();Lu(e),Fc(r,()=>{!function(e){e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0,"erroring"===e._state&&(e._storedError=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed";const t=e._writer;void 0!==t&&eh(t)}(t)},e=>{!function(e,t){e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),Pu(e,t)}(t,e)})}(e):function(e,t){const r=e._controlledWritableStream;(function(e){e._inFlightWriteRequest=e._writeRequests.shift()})(r),Fc(e._writeAlgorithm(t),()=>{!function(e){e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0}(r);const t=r._state;if(yu(e),!1===Ku(r)&&"writable"===t){const t=Gu(e);Ru(r,t)}Wu(e)},t=>{"writable"===r._state&&Lu(e),function(e,t){e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,Pu(e,t)}(r,t)})}(e,r.chunk)}function Hu(e,t){"writable"===e._controlledWritableStream._state&&Vu(e,t)}function Gu(e){return ju(e)<=0}function Vu(e,t){const r=e._controlledWritableStream;Lu(e),Mu(r,t)}function Zu(e){return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`)}function Yu(e){return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`)}function $u(e){return new TypeError("Cannot "+e+" a stream using a released writer")}function Xu(e){e._closedPromise=Bc((t,r)=>{e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending"})}function Ju(e,t){Xu(e),Qu(e,t)}function Qu(e,t){jc(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected"}function eh(e){e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved"}function th(e){e._readyPromise=Bc((t,r)=>{e._readyPromise_resolve=t,e._readyPromise_reject=r}),e._readyPromiseState="pending"}function rh(e,t){th(e),nh(e,t)}function ih(e){th(e),ah(e)}function nh(e,t){jc(e._readyPromise),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected"}function ah(e){e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled"}function sh(e){if("object"!=typeof e||null===e)return!1;try{return"boolean"==typeof e.aborted}catch(e){return!1}}const oh="undefined"!=typeof DOMException?DOMException:void 0;const ch=function(e){if("function"!=typeof e&&"object"!=typeof e)return!1;try{return new e,!0}catch(e){return!1}}(oh)?oh:function(){const e=function(e,t){this.message=e||"",this.name=t||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)};return Object.defineProperty(e.prototype=Object.create(Error.prototype),"constructor",{value:e,writable:!0,configurable:!0}),e}();function uh(e,t,r,i,n,a){const s=ru(e),o=_u(t);e._disturbed=!0;let c=!1,u=Tc(void 0);return Bc((h,d)=>{let f;if(void 0!==a){if(f=()=>{const r=new ch("Aborted","AbortError"),a=[];!1===i&&a.push(()=>"writable"===t._state?Eu(t,r):Tc(void 0)),!1===n&&a.push(()=>"readable"===e._state?td(e,r):Tc(void 0)),y(()=>Promise.all(a.map(e=>e())),!0,r)},!0===a.aborted)return void f();a.addEventListener("abort",f)}if(p(e,s._closedPromise,e=>{!1===i?y(()=>Eu(t,e),!0,e):b(!0,e)}),p(t,o._closedPromise,t=>{!1===n?y(()=>td(e,t),!0,t):b(!0,t)}),function(e,t,r){"closed"===e._state?r():Oc(t,r)}(e,s._closedPromise,()=>{!1===r?y(()=>function(e){const t=e._ownerWritableStream,r=t._state;return!0===Ku(t)||"closed"===r?Tc(void 0):"errored"===r?zc(t._storedError):Bu(e)}(o)):b()}),!0===Ku(t)||"closed"===t._state){const t=new TypeError("the destination writable stream closed before all data could be piped to it");!1===n?y(()=>td(e,t),!0,t):b(!0,t)}function l(){const e=u;return qc(u,()=>e!==u?l():void 0)}function p(e,t,r){"errored"===e._state?r(e._storedError):Nc(t,r)}function y(e,r,i){function n(){Fc(e(),()=>m(r,i),e=>m(!0,e))}!0!==c&&(c=!0,"writable"===t._state&&!1===Ku(t)?Oc(l(),n):n())}function b(e,r){!0!==c&&(c=!0,"writable"===t._state&&!1===Ku(t)?Oc(l(),()=>m(e,r)):m(e,r))}function m(e,t){qu(o),Zc(s),void 0!==a&&a.removeEventListener("abort",f),e?d(t):h(void 0)}jc(Bc((e,t)=>{!function r(i){i?e():qc(!0===c?Tc(!0):qc(o._readyPromise,()=>qc(uu(s),e=>!0===e.done||(u=qc(Fu(o,e.value),void 0,wc),!1))),r,t)}(!1)}))})}class hh{constructor(){throw new TypeError}get desiredSize(){if(!1===dh(this))throw _h("desiredSize");return gh(this)}close(){if(!1===dh(this))throw _h("close");if(!1===wh(this))throw new TypeError("The stream is not in a state that permits close");yh(this)}enqueue(e){if(!1===dh(this))throw _h("enqueue");if(!1===wh(this))throw new TypeError("The stream is not in a state that permits enqueue");return bh(this,e)}error(e){if(!1===dh(this))throw _h("error");mh(this,e)}[eu](e){mu(this);const t=this._cancelAlgorithm(e);return ph(this),t}[tu](){const e=this._controlledReadableStream;if(this._queue.length>0){const t=yu(this);return!0===this._closeRequested&&0===this._queue.length?(ph(this),rd(e)):fh(this),Tc(Hc(t,!1,e._reader._forAuthorCode))}const t=iu(e);return fh(this),t}}function dh(e){return!!kc(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableStream")}function fh(e){!1!==lh(e)&&(!0!==e._pulling?(e._pulling=!0,Fc(e._pullAlgorithm(),()=>{e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,fh(e))},t=>{mh(e,t)})):e._pullAgain=!0)}function lh(e){const t=e._controlledReadableStream;return!1!==wh(e)&&(!1!==e._started&&(!0===ed(t)&&au(t)>0||gh(e)>0))}function ph(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function yh(e){const t=e._controlledReadableStream;e._closeRequested=!0,0===e._queue.length&&(ph(e),rd(t))}function bh(e,t){const r=e._controlledReadableStream;if(!0===ed(r)&&au(r)>0)nu(r,t,!1);else{let r;try{r=e._strategySizeAlgorithm(t)}catch(t){throw mh(e,t),t}try{bu(e,t,r)}catch(t){throw mh(e,t),t}}fh(e)}function mh(e,t){const r=e._controlledReadableStream;"readable"===r._state&&(mu(e),ph(e),id(r,t))}function gh(e){const t=e._controlledReadableStream._state;return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function wh(e){const t=e._controlledReadableStream._state;return!1===e._closeRequested&&"readable"===t}function vh(e,t,r,i,n,a,s){t._controlledReadableStream=e,t._queue=void 0,t._queueTotalSize=void 0,mu(t),t._started=!1,t._closeRequested=!1,t._pullAgain=!1,t._pulling=!1,t._strategySizeAlgorithm=s,t._strategyHWM=a,t._pullAlgorithm=i,t._cancelAlgorithm=n,e._readableStreamController=t,Fc(Tc(r()),()=>{t._started=!0,fh(t)},e=>{mh(t,e)})}function _h(e){return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`)}const kh=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e};class Ah{constructor(){throw new TypeError("ReadableStreamBYOBRequest cannot be used directly")}get view(){if(!1===xh(this))throw Lh("view");return this._view}respond(e){if(!1===xh(this))throw Lh("respond");if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated");this._view.buffer,function(e,t){if(!1===Sc(t=Number(t)))throw new RangeError("bytesWritten must be a finite");Th(e,t)}(this._associatedReadableByteStreamController,e)}respondWithNewView(e){if(!1===xh(this))throw Lh("respond");if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated");if(!ArrayBuffer.isView(e))throw new TypeError("You can only respond with array buffer views");e.buffer,function(e,t){const r=e._pendingPullIntos.peek();if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(r.byteLength!==t.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");r.buffer=t.buffer,Th(e,t.byteLength)}(this._associatedReadableByteStreamController,e)}}class Sh{constructor(){throw new TypeError("ReadableByteStreamController constructor cannot be used directly")}get byobRequest(){if(!1===Eh(this))throw jh("byobRequest");if(void 0===this._byobRequest&&this._pendingPullIntos.length>0){const e=this._pendingPullIntos.peek(),t=new Uint8Array(e.buffer,e.byteOffset+e.bytesFilled,e.byteLength-e.bytesFilled),r=Object.create(Ah.prototype);!function(e,t,r){e._associatedReadableByteStreamController=t,e._view=r}(r,this,t),this._byobRequest=r}return this._byobRequest}get desiredSize(){if(!1===Eh(this))throw jh("desiredSize");return Oh(this)}close(){if(!1===Eh(this))throw jh("close");if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const e=this._controlledReadableByteStream._state;if("readable"!==e)throw new TypeError(`The stream (in ${e} state) is not in the readable state and cannot be closed`);!function(e){const t=e._controlledReadableByteStream;if(e._queueTotalSize>0)return void(e._closeRequested=!0);if(e._pendingPullIntos.length>0){if(e._pendingPullIntos.peek().bytesFilled>0){const t=new TypeError("Insufficient bytes to fill elements in the given buffer");throw Fh(e,t),t}}qh(e),rd(t)}(this)}enqueue(e){if(!1===Eh(this))throw jh("enqueue");if(!0===this._closeRequested)throw new TypeError("stream is closed or draining");const t=this._controlledReadableByteStream._state;if("readable"!==t)throw new TypeError(`The stream (in ${t} state) is not in the readable state and cannot be enqueued to`);if(!ArrayBuffer.isView(e))throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController");e.buffer,function(e,t){const r=e._controlledReadableByteStream,i=t.buffer,n=t.byteOffset,a=t.byteLength,s=i;if(!0===su(r))if(0===au(r))Kh(e,s,n,a);else{const e=new Uint8Array(s,n,a);nu(r,e,!1)}else!0===Gh(r)?(Kh(e,s,n,a),Bh(e)):Kh(e,s,n,a);Ph(e)}(this,e)}error(e){if(!1===Eh(this))throw jh("error");Fh(this,e)}[eu](e){if(this._pendingPullIntos.length>0){this._pendingPullIntos.peek().bytesFilled=0}mu(this);const t=this._cancelAlgorithm(e);return qh(this),t}[tu](){const e=this._controlledReadableByteStream;if(this._queueTotalSize>0){const t=this._queue.shift();let r;this._queueTotalSize-=t.byteLength,Ih(this);try{r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}catch(e){return zc(e)}return Tc(Hc(r,!1,e._reader._forAuthorCode))}const t=this._autoAllocateChunkSize;if(void 0!==t){let e;try{e=new ArrayBuffer(t)}catch(e){return zc(e)}const r={buffer:e,byteOffset:0,byteLength:t,bytesFilled:0,elementSize:1,ctor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(r)}const r=iu(e);return Ph(this),r}}function Eh(e){return!!kc(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableByteStream")}function xh(e){return!!kc(e)&&!!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")}function Ph(e){!1!==function(e){const t=e._controlledReadableByteStream;if("readable"!==t._state)return!1;if(!0===e._closeRequested)return!1;if(!1===e._started)return!1;if(!0===su(t)&&au(t)>0)return!0;if(!0===Gh(t)&&Hh(t)>0)return!0;if(Oh(e)>0)return!0;return!1}(e)&&(!0!==e._pulling?(e._pulling=!0,Fc(e._pullAlgorithm(),()=>{e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,Ph(e))},t=>{Fh(e,t)})):e._pullAgain=!0)}function Mh(e,t){let r=!1;"closed"===e._state&&(r=!0);const i=Ch(t);"default"===t.readerType?nu(e,i,r):function(e,t,r){const i=e._reader;i._readIntoRequests.shift()._resolve(Hc(t,r,i._forAuthorCode))}(e,i,r)}function Ch(e){const t=e.bytesFilled,r=e.elementSize;return new e.ctor(e.buffer,e.byteOffset,t/r)}function Kh(e,t,r,i){e._queue.push({buffer:t,byteOffset:r,byteLength:i}),e._queueTotalSize+=i}function Dh(e,t){const r=t.elementSize,i=t.bytesFilled-t.bytesFilled%r,n=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),a=t.bytesFilled+n,s=a-a%r;let o=n,c=!1;s>i&&(o=s-t.bytesFilled,c=!0);const u=e._queue;for(;o>0;){const r=u.peek(),i=Math.min(o,r.byteLength),n=t.byteOffset+t.bytesFilled;h=t.buffer,d=n,f=r.buffer,l=r.byteOffset,p=i,new Uint8Array(h).set(new Uint8Array(f,l,p),d),r.byteLength===i?u.shift():(r.byteOffset+=i,r.byteLength-=i),e._queueTotalSize-=i,Rh(e,i,t),o-=i}var h,d,f,l,p;return c}function Rh(e,t,r){Uh(e),r.bytesFilled+=t}function Ih(e){0===e._queueTotalSize&&!0===e._closeRequested?(qh(e),rd(e._controlledReadableByteStream)):Ph(e)}function Uh(e){void 0!==e._byobRequest&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=void 0,e._byobRequest=void 0)}function Bh(e){for(;e._pendingPullIntos.length>0;){if(0===e._queueTotalSize)return;const t=e._pendingPullIntos.peek();!0===Dh(e,t)&&(zh(e),Mh(e._controlledReadableByteStream,t))}}function Th(e,t){const r=e._pendingPullIntos.peek();if("closed"===e._controlledReadableByteStream._state){if(0!==t)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");!function(e,t){t.buffer=t.buffer;const r=e._controlledReadableByteStream;if(!0===Gh(r))for(;Hh(r)>0;){Mh(r,zh(e))}}(e,r)}else!function(e,t,r){if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range");if(Rh(e,t,r),r.bytesFilled<r.elementSize)return;zh(e);const i=r.bytesFilled%r.elementSize;if(i>0){const t=r.byteOffset+r.bytesFilled,n=r.buffer.slice(t-i,t);Kh(e,n,0,n.byteLength)}r.buffer=r.buffer,r.bytesFilled-=i,Mh(e._controlledReadableByteStream,r),Bh(e)}(e,t,r);Ph(e)}function zh(e){const t=e._pendingPullIntos.shift();return Uh(e),t}function qh(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0}function Fh(e,t){const r=e._controlledReadableByteStream;"readable"===r._state&&(!function(e){Uh(e),e._pendingPullIntos=new Wc}(e),mu(e),qh(e),id(r,t))}function Oh(e){const t=e._controlledReadableByteStream._state;return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function Nh(e,t,r){const i=Object.create(Sh.prototype);const n=xc(t,"pull",0,[i]),a=xc(t,"cancel",1,[]);let s=t.autoAllocateChunkSize;if(void 0!==s&&(s=Number(s),!1===kh(s)||s<=0))throw new RangeError("autoAllocateChunkSize must be a positive integer");!function(e,t,r,i,n,a,s){t._controlledReadableByteStream=e,t._pullAgain=!1,t._pulling=!1,t._byobRequest=void 0,t._queue=t._queueTotalSize=void 0,mu(t),t._closeRequested=!1,t._started=!1,t._strategyHWM=Cc(a),t._pullAlgorithm=i,t._cancelAlgorithm=n,t._autoAllocateChunkSize=s,t._pendingPullIntos=new Wc,e._readableStreamController=t,Fc(Tc(r()),()=>{t._started=!0,Ph(t)},e=>{Fh(t,e)})}(e,i,(function(){return Pc(t,"start",[i])}),n,a,r,s)}function Lh(e){return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`)}function jh(e){return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`)}function Wh(e){return Bc((t,r)=>{const i={_resolve:t,_reject:r};e._reader._readIntoRequests.push(i)})}function Hh(e){return e._reader._readIntoRequests.length}function Gh(e){const t=e._reader;return void 0!==t&&!!Zh(t)}class Vh{constructor(e){if(!Qh(e))throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source");if(!1===Eh(e._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");if(ed(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader");Gc(this,e),this._readIntoRequests=new Wc}get closed(){return Zh(this)?this._closedPromise:zc(Yh("closed"))}cancel(e){return Zh(this)?void 0===this._ownerReadableStream?zc(Yc("cancel")):Vc(this,e):zc(Yh("cancel"))}read(e){return Zh(this)?void 0===this._ownerReadableStream?zc(Yc("read from")):ArrayBuffer.isView(e)?(e.buffer,0===e.byteLength?zc(new TypeError("view must have non-zero byteLength")):function(e,t){const r=e._ownerReadableStream;if(r._disturbed=!0,"errored"===r._state)return zc(r._storedError);return function(e,t){const r=e._controlledReadableByteStream;let i=1;t.constructor!==DataView&&(i=t.constructor.BYTES_PER_ELEMENT);const n=t.constructor,a={buffer:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:i,ctor:n,readerType:"byob"};if(e._pendingPullIntos.length>0)return e._pendingPullIntos.push(a),Wh(r);if("closed"===r._state){return Tc(Hc(new n(a.buffer,a.byteOffset,0),!0,r._reader._forAuthorCode))}if(e._queueTotalSize>0){if(!0===Dh(e,a)){const t=Ch(a);return Ih(e),Tc(Hc(t,!1,r._reader._forAuthorCode))}if(!0===e._closeRequested){const t=new TypeError("Insufficient bytes to fill elements in the given buffer");return Fh(e,t),zc(t)}}e._pendingPullIntos.push(a);const s=Wh(r);return Ph(e),s}(r._readableStreamController,t)}(this,e)):zc(new TypeError("view must be an array buffer view")):zc(Yh("read"))}releaseLock(){if(!Zh(this))throw Yh("releaseLock");if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");Zc(this)}}}function Zh(e){return!!kc(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")}function Yh(e){return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`)}class $h{constructor(e={},t={}){Jh(this);const r=t.size;let i=t.highWaterMark;const n=e.type;if("bytes"===n+""){if(void 0!==r)throw new RangeError("The strategy for a byte stream cannot have a size function");void 0===i&&(i=0),i=Cc(i),Nh(this,e,i)}else{if(void 0!==n)throw new RangeError("Invalid type is specified");{const t=Kc(r);void 0===i&&(i=1),i=Cc(i),function(e,t,r,i){const n=Object.create(hh.prototype),a=xc(t,"pull",0,[n]),s=xc(t,"cancel",1,[]);vh(e,n,(function(){return Pc(t,"start",[n])}),a,s,r,i)}(this,e,i,t)}}}get locked(){if(!1===Qh(this))throw nd("locked");return ed(this)}cancel(e){return!1===Qh(this)?zc(nd("cancel")):!0===ed(this)?zc(new TypeError("Cannot cancel a stream that already has a reader")):td(this,e)}getReader({mode:e}={}){if(!1===Qh(this))throw nd("getReader");if(void 0===e)return ru(this,!0);if("byob"===(e+=""))return function(e,t=!1){const r=new Vh(e);return r._forAuthorCode=t,r}(this,!0);throw new RangeError("Invalid mode is specified")}pipeThrough({writable:e,readable:t},{preventClose:r,preventAbort:i,preventCancel:n,signal:a}={}){if(!1===Qh(this))throw nd("pipeThrough");if(!1===Au(e))throw new TypeError("writable argument to pipeThrough must be a WritableStream");if(!1===Qh(t))throw new TypeError("readable argument to pipeThrough must be a ReadableStream");if(r=!!r,i=!!i,n=!!n,void 0!==a&&!sh(a))throw new TypeError("ReadableStream.prototype.pipeThrough's signal option must be an AbortSignal");if(!0===ed(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(!0===Su(e))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");return jc(uh(this,e,r,i,n,a)),t}pipeTo(e,{preventClose:t,preventAbort:r,preventCancel:i,signal:n}={}){return!1===Qh(this)?zc(nd("pipeTo")):!1===Au(e)?zc(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream")):(t=!!t,r=!!r,i=!!i,void 0===n||sh(n)?!0===ed(this)?zc(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):!0===Su(e)?zc(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):uh(this,e,t,r,i,n):zc(new TypeError("ReadableStream.prototype.pipeTo's signal option must be an AbortSignal")))}tee(){if(!1===Qh(this))throw nd("tee");const e=function(e,t){const r=ru(e);let i,n,a,s,o,c=!1,u=!1,h=!1;const d=Bc(e=>{o=e});function f(){if(!0===c)return Tc(void 0);return c=!0,jc(Lc(uu(r),e=>{if(c=!1,!0===e.done)return!1===u&&yh(a._readableStreamController),void(!1===h&&yh(s._readableStreamController));const t=e.value,r=t,i=t;!1===u&&bh(a._readableStreamController,r),!1===h&&bh(s._readableStreamController,i)})),Tc(void 0)}function l(){}return a=Xh(l,f,(function(t){if(u=!0,i=t,!0===h){const t=Ac([i,n]),r=td(e,t);o(r)}return d})),s=Xh(l,f,(function(t){if(h=!0,n=t,!0===u){const t=Ac([i,n]),r=td(e,t);o(r)}return d})),Nc(r._closedPromise,e=>{mh(a._readableStreamController,e),mh(s._readableStreamController,e)}),[a,s]}(this);return Ac(e)}getIterator({preventCancel:e=!1}={}){if(!1===Qh(this))throw nd("getIterator");return function(e,t=!1){const r=ru(e),i=Object.create(fu);return i._asyncIteratorReader=r,i._preventCancel=!!t,i}(this,e)}}function Xh(e,t,r,i=1,n=(()=>1)){const a=Object.create($h.prototype);return Jh(a),vh(a,Object.create(hh.prototype),e,t,r,i,n),a}function Jh(e){e._state="readable",e._reader=void 0,e._storedError=void 0,e._disturbed=!1}function Qh(e){return!!kc(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")}function ed(e){return void 0!==e._reader}function td(e,t){if(e._disturbed=!0,"closed"===e._state)return Tc(void 0);if("errored"===e._state)return zc(e._storedError);return rd(e),Lc(e._readableStreamController[eu](t),wc)}function rd(e){e._state="closed";const t=e._reader;void 0!==t&&(cu(t)&&(t._readRequests.forEach(e=>{e._resolve(Hc(void 0,!0,t._forAuthorCode))}),t._readRequests=new Wc),Qc(t))}function id(e,t){e._state="errored",e._storedError=t;const r=e._reader;void 0!==r&&(cu(r)?(r._readRequests.forEach(e=>{e._reject(t)}),r._readRequests=new Wc):(r._readIntoRequests.forEach(e=>{e._reject(t)}),r._readIntoRequests=new Wc),Jc(r,t))}function nd(e){return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`)}"symbol"==typeof gc.asyncIterator&&Object.defineProperty($h.prototype,gc.asyncIterator,{value:$h.prototype.getIterator,enumerable:!1,writable:!0,configurable:!0});function ad(e){return!!kc(e)&&!!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")}function sd(e,t){mh(e._readable._readableStreamController,t),od(e,t)}function od(e,t){dd(e._transformStreamController),Hu(e._writable._writableStreamController,t),!0===e._backpressure&&cd(e,!1)}function cd(e,t){void 0!==e._backpressureChangePromise&&e._backpressureChangePromise_resolve(),e._backpressureChangePromise=Bc(t=>{e._backpressureChangePromise_resolve=t}),e._backpressure=t}class ud{constructor(){throw new TypeError("TransformStreamDefaultController instances cannot be created directly")}get desiredSize(){if(!1===hd(this))throw pd("desiredSize");return gh(this._controlledTransformStream._readable._readableStreamController)}enqueue(e){if(!1===hd(this))throw pd("enqueue");fd(this,e)}error(e){if(!1===hd(this))throw pd("error");var t;t=e,sd(this._controlledTransformStream,t)}terminate(){if(!1===hd(this))throw pd("terminate");!function(e){const t=e._controlledTransformStream,r=t._readable._readableStreamController;!0===wh(r)&&yh(r);od(t,new TypeError("TransformStream terminated"))}(this)}}function hd(e){return!!kc(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")}function dd(e){e._transformAlgorithm=void 0,e._flushAlgorithm=void 0}function fd(e,t){const r=e._controlledTransformStream,i=r._readable._readableStreamController;if(!1===wh(i))throw new TypeError("Readable side is not in a state that permits enqueue");try{bh(i,t)}catch(e){throw od(r,e),r._readable._storedError}(function(e){return!0!==lh(e)})(i)!==r._backpressure&&cd(r,!0)}function ld(e,t){return Lc(e._transformAlgorithm(t),void 0,t=>{throw sd(e._controlledTransformStream,t),t})}function pd(e){return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`)}function yd(e){return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`)}var bd=/*#__PURE__*/Object.freeze({__proto__:null,ByteLengthQueuingStrategy:class{constructor({highWaterMark:e}){this.highWaterMark=e}size(e){return e.byteLength}},CountQueuingStrategy:class{constructor({highWaterMark:e}){this.highWaterMark=e}size(){return 1}},ReadableStream:$h,TransformStream:class{constructor(e={},t={},r={}){const i=t.size;let n=t.highWaterMark;const a=r.size;let s=r.highWaterMark;if(void 0!==e.writableType)throw new RangeError("Invalid writable type specified");const o=Kc(i);if(void 0===n&&(n=1),n=Cc(n),void 0!==e.readableType)throw new RangeError("Invalid readable type specified");const c=Kc(a);let u;void 0===s&&(s=0),s=Cc(s),function(e,t,r,i,n,a){function s(){return t}e._writable=function(e,t,r,i,n=1,a=(()=>1)){const s=Object.create(vu.prototype);return ku(s),Nu(s,Object.create(Ou.prototype),e,t,r,i,n,a),s}(s,(function(t){return function(e,t){const r=e._transformStreamController;if(!0===e._backpressure){return Lc(e._backpressureChangePromise,()=>{const i=e._writable;if("erroring"===i._state)throw i._storedError;return ld(r,t)})}return ld(r,t)}(e,t)}),(function(){return function(e){const t=e._readable,r=e._transformStreamController,i=r._flushAlgorithm();return dd(r),Lc(i,()=>{if("errored"===t._state)throw t._storedError;const e=t._readableStreamController;!0===wh(e)&&yh(e)},r=>{throw sd(e,r),t._storedError})}(e)}),(function(t){return function(e,t){return sd(e,t),Tc(void 0)}(e,t)}),r,i),e._readable=Xh(s,(function(){return function(e){return cd(e,!1),e._backpressureChangePromise}(e)}),(function(t){return od(e,t),Tc(void 0)}),n,a),e._backpressure=void 0,e._backpressureChangePromise=void 0,e._backpressureChangePromise_resolve=void 0,cd(e,!0),e._transformStreamController=void 0}(this,Bc(e=>{u=e}),n,o,s,c),function(e,t){const r=Object.create(ud.prototype);let i=e=>{try{return fd(r,e),Tc(void 0)}catch(e){return zc(e)}};const n=t.transform;if(void 0!==n){if("function"!=typeof n)throw new TypeError("transform is not a method");i=e=>Mc(n,t,[e,r])}const a=xc(t,"flush",0,[r]);!function(e,t,r,i){t._controlledTransformStream=e,e._transformStreamController=t,t._transformAlgorithm=r,t._flushAlgorithm=i}(e,r,i,a)}(this,e);const h=Pc(e,"start",[this._transformStreamController]);u(h)}get readable(){if(!1===ad(this))throw yd("readable");return this._readable}get writable(){if(!1===ad(this))throw yd("writable");return this._writable}},WritableStream:vu}),md=function(e,t){return(md=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function gd(e,t){function r(){this.constructor=e}md(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function wd(e){if(!e)throw new TypeError("Assertion failed")}function vd(){}function _d(e){return"object"==typeof e&&null!==e||"function"==typeof e}function kd(e){if("function"!=typeof e)return!1;var t=!1;try{new e({start:function(){t=!0}})}catch(e){}return t}function Ad(e){return!!_d(e)&&"function"==typeof e.getReader}function Sd(e){return!!_d(e)&&"function"==typeof e.getWriter}function Ed(e){return!!_d(e)&&(!!Ad(e.readable)&&!!Sd(e.writable))}function xd(e){try{return e.getReader({mode:"byob"}).releaseLock(),!0}catch(e){return!1}}function Pd(e,t){var r=(void 0===t?{}:t).type;return wd(Ad(e)),wd(!1===e.locked),"bytes"===(r=Md(r))?new Rd(e):new Kd(e)}function Md(e){var t=e+"";if("bytes"===t)return t;if(void 0===e)return e;throw new RangeError("Invalid type is specified")}var Cd=function(){function e(e){this._underlyingReader=void 0,this._readerMode=void 0,this._readableStreamController=void 0,this._pendingRead=void 0,this._underlyingStream=e,this._attachDefaultReader()}return e.prototype.start=function(e){this._readableStreamController=e},e.prototype.cancel=function(e){return wd(void 0!==this._underlyingReader),this._underlyingReader.cancel(e)},e.prototype._attachDefaultReader=function(){if("default"!==this._readerMode){this._detachReader();var e=this._underlyingStream.getReader();this._readerMode="default",this._attachReader(e)}},e.prototype._attachReader=function(e){var t=this;wd(void 0===this._underlyingReader),this._underlyingReader=e;var r=this._underlyingReader.closed;r&&r.then((function(){return t._finishPendingRead()})).then((function(){e===t._underlyingReader&&t._readableStreamController.close()}),(function(r){e===t._underlyingReader&&t._readableStreamController.error(r)})).catch(vd)},e.prototype._detachReader=function(){void 0!==this._underlyingReader&&(this._underlyingReader.releaseLock(),this._underlyingReader=void 0,this._readerMode=void 0)},e.prototype._pullWithDefaultReader=function(){var e=this;this._attachDefaultReader();var t=this._underlyingReader.read().then((function(t){var r=e._readableStreamController;t.done?e._tryClose():r.enqueue(t.value)}));return this._setPendingRead(t),t},e.prototype._tryClose=function(){try{this._readableStreamController.close()}catch(e){}},e.prototype._setPendingRead=function(e){var t,r=this,i=function(){r._pendingRead===t&&(r._pendingRead=void 0)};this._pendingRead=t=e.then(i,i)},e.prototype._finishPendingRead=function(){var e=this;if(this._pendingRead){var t=function(){return e._finishPendingRead()};return this._pendingRead.then(t,t)}},e}(),Kd=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return gd(t,e),t.prototype.pull=function(){return this._pullWithDefaultReader()},t}(Cd);function Dd(e){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}var Rd=function(e){function t(t){var r=this,i=xd(t);return(r=e.call(this,t)||this)._supportsByob=i,r}return gd(t,e),Object.defineProperty(t.prototype,"type",{get:function(){return"bytes"},enumerable:!0,configurable:!0}),t.prototype._attachByobReader=function(){if("byob"!==this._readerMode){wd(this._supportsByob),this._detachReader();var e=this._underlyingStream.getReader({mode:"byob"});this._readerMode="byob",this._attachReader(e)}},t.prototype.pull=function(){if(this._supportsByob){var e=this._readableStreamController.byobRequest;if(void 0!==e)return this._pullWithByobRequest(e)}return this._pullWithDefaultReader()},t.prototype._pullWithByobRequest=function(e){var t=this;this._attachByobReader();var r=new Uint8Array(e.view.byteLength),i=this._underlyingReader.read(r).then((function(r){var i,n,a;t._readableStreamController,r.done?(t._tryClose(),e.respond(0)):(i=r.value,n=e.view,a=Dd(i),Dd(n).set(a,0),e.respond(r.value.byteLength))}));return this._setPendingRead(i),i},t}(Cd);function Id(e){wd(Sd(e)),wd(!1===e.locked);var t=e.getWriter();return new Ud(t)}var Ud=function(){function e(e){var t=this;this._writableStreamController=void 0,this._pendingWrite=void 0,this._state="writable",this._storedError=void 0,this._underlyingWriter=e,this._errorPromise=new Promise((function(e,r){t._errorPromiseReject=r})),this._errorPromise.catch(vd)}return e.prototype.start=function(e){var t=this;this._writableStreamController=e,this._underlyingWriter.closed.then((function(){t._state="closed"})).catch((function(e){return t._finishErroring(e)}))},e.prototype.write=function(e){var t=this,r=this._underlyingWriter;if(null===r.desiredSize)return r.ready;var i=r.write(e);i.catch((function(e){return t._finishErroring(e)})),r.ready.catch((function(e){return t._startErroring(e)}));var n=Promise.race([i,this._errorPromise]);return this._setPendingWrite(n),n},e.prototype.close=function(){var e=this;return void 0===this._pendingWrite?this._underlyingWriter.close():this._finishPendingWrite().then((function(){return e.close()}))},e.prototype.abort=function(e){if("errored"!==this._state)return this._underlyingWriter.abort(e)},e.prototype._setPendingWrite=function(e){var t,r=this,i=function(){r._pendingWrite===t&&(r._pendingWrite=void 0)};this._pendingWrite=t=e.then(i,i)},e.prototype._finishPendingWrite=function(){var e=this;if(void 0===this._pendingWrite)return Promise.resolve();var t=function(){return e._finishPendingWrite()};return this._pendingWrite.then(t,t)},e.prototype._startErroring=function(e){var t=this;if("writable"===this._state){this._state="erroring",this._storedError=e;var r=function(){return t._finishErroring(e)};void 0===this._pendingWrite?r():this._finishPendingWrite().then(r,r),this._writableStreamController.error(e)}},e.prototype._finishErroring=function(e){"writable"===this._state&&this._startErroring(e),"erroring"===this._state&&(this._state="errored",this._errorPromiseReject(this._storedError))},e}();function Bd(e){wd(Ed(e));var t=e.readable,r=e.writable;wd(!1===t.locked),wd(!1===r.locked);var i,n=t.getReader();try{i=r.getWriter()}catch(e){throw n.releaseLock(),e}return new Td(n,i)}var Td=function(){function e(e,t){var r=this;this._transformStreamController=void 0,this._onRead=function(e){if(!e.done)return r._transformStreamController.enqueue(e.value),r._reader.read().then(r._onRead)},this._onError=function(e){r._flushReject(e),r._transformStreamController.error(e),r._reader.cancel(e).catch(vd),r._writer.abort(e).catch(vd)},this._onTerminate=function(){r._flushResolve(),r._transformStreamController.terminate();var e=new TypeError("TransformStream terminated");r._writer.abort(e).catch(vd)},this._reader=e,this._writer=t,this._flushPromise=new Promise((function(e,t){r._flushResolve=e,r._flushReject=t}))}return e.prototype.start=function(e){this._transformStreamController=e,this._reader.read().then(this._onRead).then(this._onTerminate,this._onError);var t=this._reader.closed;t&&t.then(this._onTerminate,this._onError)},e.prototype.transform=function(e){return this._writer.write(e)},e.prototype.flush=function(){var e=this;return this._writer.close().then((function(){return e._flushPromise}))},e}(),zd=/*#__PURE__*/Object.freeze({__proto__:null,createReadableStreamWrapper:function(e){wd(function(e){return!!kd(e)&&!!Ad(new e)}(e));var t=function(e){try{return new e({type:"bytes"}),!0}catch(e){return!1}}(e);return function(r,i){var n=(void 0===i?{}:i).type;if("bytes"!==(n=Md(n))||t||(n=void 0),r.constructor===e&&("bytes"!==n||xd(r)))return r;var a=Pd(r,{type:n});return new e(a)}},createTransformStreamWrapper:function(e){return wd(function(e){return!!kd(e)&&!!Ed(new e)}(e)),function(t){if(t.constructor===e)return t;var r=Bd(t);return new e(r)}},createWrappingReadableSource:Pd,createWrappingTransformer:Bd,createWrappingWritableSink:Id,createWritableStreamWrapper:function(e){return wd(function(e){return!!kd(e)&&!!Sd(new e)}(e)),function(t){if(t.constructor===e)return t;var r=Id(t);return new e(r)}}}),qd=mt((function(e){!function(e,t){function r(e,t){if(!e)throw Error(t||"Assertion failed")}function i(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}function n(e,t,r){if(n.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&("le"!==t&&"be"!==t||(r=t,t=10),this._init(e||0,t||10,r||"be"))}var a;"object"==typeof e?e.exports=n:t.BN=n,n.BN=n,n.wordSize=26;try{a=u.default.Buffer}catch(e){}function s(e,t,r){for(var i=0,n=Math.min(e.length,r),a=t;a<n;a++){var s=e.charCodeAt(a)-48;i<<=4,i|=s>=49&&s<=54?s-49+10:s>=17&&s<=22?s-17+10:15&s}return i}function o(e,t,r,i){for(var n=0,a=Math.min(e.length,r),s=t;s<a;s++){var o=e.charCodeAt(s)-48;n*=i,n+=o>=49?o-49+10:o>=17?o-17+10:o}return n}n.isBN=function(e){return e instanceof n||null!==e&&"object"==typeof e&&e.constructor.wordSize===n.wordSize&&Array.isArray(e.words)},n.max=function(e,t){return e.cmp(t)>0?e:t},n.min=function(e,t){return e.cmp(t)<0?e:t},n.prototype._init=function(e,t,i){if("number"==typeof e)return this._initNumber(e,t,i);if("object"==typeof e)return this._initArray(e,t,i);"hex"===t&&(t=16),r(t===(0|t)&&t>=2&&t<=36);var n=0;"-"===(e=e.toString().replace(/\s+/g,""))[0]&&n++,16===t?this._parseHex(e,n):this._parseBase(e,t,n),"-"===e[0]&&(this.negative=1),this.strip(),"le"===i&&this._initArray(this.toArray(),t,i)},n.prototype._initNumber=function(e,t,i){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(r(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===i&&this._initArray(this.toArray(),t,i)},n.prototype._initArray=function(e,t,i){if(r("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=Array(this.length);for(var n=0;n<this.length;n++)this.words[n]=0;var a,s,o=0;if("be"===i)for(n=e.length-1,a=0;n>=0;n-=3)s=e[n]|e[n-1]<<8|e[n-2]<<16,this.words[a]|=s<<o&67108863,this.words[a+1]=s>>>26-o&67108863,(o+=24)>=26&&(o-=26,a++);else if("le"===i)for(n=0,a=0;n<e.length;n+=3)s=e[n]|e[n+1]<<8|e[n+2]<<16,this.words[a]|=s<<o&67108863,this.words[a+1]=s>>>26-o&67108863,(o+=24)>=26&&(o-=26,a++);return this.strip()},n.prototype._parseHex=function(e,t){this.length=Math.ceil((e.length-t)/6),this.words=Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var i,n,a=0;for(r=e.length-6,i=0;r>=t;r-=6)n=s(e,r,r+6),this.words[i]|=n<<a&67108863,this.words[i+1]|=n>>>26-a&4194303,(a+=24)>=26&&(a-=26,i++);r+6!==t&&(n=s(e,t,r+6),this.words[i]|=n<<a&67108863,this.words[i+1]|=n>>>26-a&4194303),this.strip()},n.prototype._parseBase=function(e,t,r){this.words=[0],this.length=1;for(var i=0,n=1;n<=67108863;n*=t)i++;i--,n=n/t|0;for(var a=e.length-r,s=a%i,c=Math.min(a,a-s)+r,u=0,h=r;h<c;h+=i)u=o(e,h,h+i,t),this.imuln(n),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u);if(0!==s){var d=1;for(u=o(e,h,e.length,t),h=0;h<s;h++)d*=t;this.imuln(d),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)}},n.prototype.copy=function(e){e.words=Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},n.prototype.clone=function(){var e=new n(null);return this.copy(e),e},n.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},n.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},n.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},n.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var c=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],h=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],d=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function f(e,t,r){r.negative=t.negative^e.negative;var i=e.length+t.length|0;r.length=i,i=i-1|0;var n=0|e.words[0],a=0|t.words[0],s=n*a,o=67108863&s,c=s/67108864|0;r.words[0]=o;for(var u=1;u<i;u++){for(var h=c>>>26,d=67108863&c,f=Math.min(u,t.length-1),l=Math.max(0,u-e.length+1);l<=f;l++){var p=u-l|0;h+=(s=(n=0|e.words[p])*(a=0|t.words[l])+d)/67108864|0,d=67108863&s}r.words[u]=0|d,c=0|h}return 0!==c?r.words[u]=0|c:r.length--,r.strip()}n.prototype.toString=function(e,t){var i;if(t=0|t||1,16===(e=e||10)||"hex"===e){i="";for(var n=0,a=0,s=0;s<this.length;s++){var o=this.words[s],u=(16777215&(o<<n|a)).toString(16);i=0!==(a=o>>>24-n&16777215)||s!==this.length-1?c[6-u.length]+u+i:u+i,(n+=2)>=26&&(n-=26,s--)}for(0!==a&&(i=a.toString(16)+i);i.length%t!=0;)i="0"+i;return 0!==this.negative&&(i="-"+i),i}if(e===(0|e)&&e>=2&&e<=36){var f=h[e],l=d[e];i="";var p=this.clone();for(p.negative=0;!p.isZero();){var y=p.modn(l).toString(e);i=(p=p.idivn(l)).isZero()?y+i:c[f-y.length]+y+i}for(this.isZero()&&(i="0"+i);i.length%t!=0;)i="0"+i;return 0!==this.negative&&(i="-"+i),i}r(!1,"Base should be between 2 and 36")},n.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&r(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},n.prototype.toJSON=function(){return this.toString(16)},n.prototype.toBuffer=function(e,t){return r(void 0!==a),this.toArrayLike(a,e,t)},n.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},n.prototype.toArrayLike=function(e,t,i){var n=this.byteLength(),a=i||Math.max(1,n);r(n<=a,"byte array longer than desired length"),r(a>0,"Requested array length <= 0"),this.strip();var s,o,c="le"===t,u=new e(a),h=this.clone();if(c){for(o=0;!h.isZero();o++)s=h.andln(255),h.iushrn(8),u[o]=s;for(;o<a;o++)u[o]=0}else{for(o=0;o<a-n;o++)u[o]=0;for(o=0;!h.isZero();o++)s=h.andln(255),h.iushrn(8),u[a-o-1]=s}return u},n.prototype._countBits=Math.clz32?function(e){return 32-Math.clz32(e)}:function(e){var t=e,r=0;return t>=4096&&(r+=13,t>>>=13),t>=64&&(r+=7,t>>>=7),t>=8&&(r+=4,t>>>=4),t>=2&&(r+=2,t>>>=2),r+t},n.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,r=0;return 0==(8191&t)&&(r+=13,t>>>=13),0==(127&t)&&(r+=7,t>>>=7),0==(15&t)&&(r+=4,t>>>=4),0==(3&t)&&(r+=2,t>>>=2),0==(1&t)&&r++,r},n.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return 26*(this.length-1)+t},n.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r)break}return e},n.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},n.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},n.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},n.prototype.isNeg=function(){return 0!==this.negative},n.prototype.neg=function(){return this.clone().ineg()},n.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},n.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this.strip()},n.prototype.ior=function(e){return r(0==(this.negative|e.negative)),this.iuor(e)},n.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},n.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},n.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var r=0;r<t.length;r++)this.words[r]=this.words[r]&e.words[r];return this.length=t.length,this.strip()},n.prototype.iand=function(e){return r(0==(this.negative|e.negative)),this.iuand(e)},n.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},n.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},n.prototype.iuxor=function(e){var t,r;this.length>e.length?(t=this,r=e):(t=e,r=this);for(var i=0;i<r.length;i++)this.words[i]=t.words[i]^r.words[i];if(this!==t)for(;i<t.length;i++)this.words[i]=t.words[i];return this.length=t.length,this.strip()},n.prototype.ixor=function(e){return r(0==(this.negative|e.negative)),this.iuxor(e)},n.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},n.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},n.prototype.inotn=function(e){r("number"==typeof e&&e>=0);var t=0|Math.ceil(e/26),i=e%26;this._expand(t),i>0&&t--;for(var n=0;n<t;n++)this.words[n]=67108863&~this.words[n];return i>0&&(this.words[n]=~this.words[n]&67108863>>26-i),this.strip()},n.prototype.notn=function(e){return this.clone().inotn(e)},n.prototype.setn=function(e,t){r("number"==typeof e&&e>=0);var i=e/26|0,n=e%26;return this._expand(i+1),this.words[i]=t?this.words[i]|1<<n:this.words[i]&~(1<<n),this.strip()},n.prototype.iadd=function(e){var t,r,i;if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();this.length>e.length?(r=this,i=e):(r=e,i=this);for(var n=0,a=0;a<i.length;a++)t=(0|r.words[a])+(0|i.words[a])+n,this.words[a]=67108863&t,n=t>>>26;for(;0!==n&&a<r.length;a++)t=(0|r.words[a])+n,this.words[a]=67108863&t,n=t>>>26;if(this.length=r.length,0!==n)this.words[this.length]=n,this.length++;else if(r!==this)for(;a<r.length;a++)this.words[a]=r.words[a];return this},n.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},n.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var r,i,n=this.cmp(e);if(0===n)return this.negative=0,this.length=1,this.words[0]=0,this;n>0?(r=this,i=e):(r=e,i=this);for(var a=0,s=0;s<i.length;s++)a=(t=(0|r.words[s])-(0|i.words[s])+a)>>26,this.words[s]=67108863&t;for(;0!==a&&s<r.length;s++)a=(t=(0|r.words[s])+a)>>26,this.words[s]=67108863&t;if(0===a&&s<r.length&&r!==this)for(;s<r.length;s++)this.words[s]=r.words[s];return this.length=Math.max(this.length,s),r!==this&&(this.negative=1),this.strip()},n.prototype.sub=function(e){return this.clone().isub(e)};var l=function(e,t,r){var i,n,a,s=e.words,o=t.words,c=r.words,u=0,h=0|s[0],d=8191&h,f=h>>>13,l=0|s[1],p=8191&l,y=l>>>13,b=0|s[2],m=8191&b,g=b>>>13,w=0|s[3],v=8191&w,_=w>>>13,k=0|s[4],A=8191&k,S=k>>>13,E=0|s[5],x=8191&E,P=E>>>13,M=0|s[6],C=8191&M,K=M>>>13,D=0|s[7],R=8191&D,I=D>>>13,U=0|s[8],B=8191&U,T=U>>>13,z=0|s[9],q=8191&z,F=z>>>13,O=0|o[0],N=8191&O,L=O>>>13,j=0|o[1],W=8191&j,H=j>>>13,G=0|o[2],V=8191&G,Z=G>>>13,Y=0|o[3],$=8191&Y,X=Y>>>13,J=0|o[4],Q=8191&J,ee=J>>>13,te=0|o[5],re=8191&te,ie=te>>>13,ne=0|o[6],ae=8191&ne,se=ne>>>13,oe=0|o[7],ce=8191&oe,ue=oe>>>13,he=0|o[8],de=8191&he,fe=he>>>13,le=0|o[9],pe=8191&le,ye=le>>>13;r.negative=e.negative^t.negative,r.length=19;var be=(u+(i=Math.imul(d,N))|0)+((8191&(n=(n=Math.imul(d,L))+Math.imul(f,N)|0))<<13)|0;u=((a=Math.imul(f,L))+(n>>>13)|0)+(be>>>26)|0,be&=67108863,i=Math.imul(p,N),n=(n=Math.imul(p,L))+Math.imul(y,N)|0,a=Math.imul(y,L);var me=(u+(i=i+Math.imul(d,W)|0)|0)+((8191&(n=(n=n+Math.imul(d,H)|0)+Math.imul(f,W)|0))<<13)|0;u=((a=a+Math.imul(f,H)|0)+(n>>>13)|0)+(me>>>26)|0,me&=67108863,i=Math.imul(m,N),n=(n=Math.imul(m,L))+Math.imul(g,N)|0,a=Math.imul(g,L),i=i+Math.imul(p,W)|0,n=(n=n+Math.imul(p,H)|0)+Math.imul(y,W)|0,a=a+Math.imul(y,H)|0;var ge=(u+(i=i+Math.imul(d,V)|0)|0)+((8191&(n=(n=n+Math.imul(d,Z)|0)+Math.imul(f,V)|0))<<13)|0;u=((a=a+Math.imul(f,Z)|0)+(n>>>13)|0)+(ge>>>26)|0,ge&=67108863,i=Math.imul(v,N),n=(n=Math.imul(v,L))+Math.imul(_,N)|0,a=Math.imul(_,L),i=i+Math.imul(m,W)|0,n=(n=n+Math.imul(m,H)|0)+Math.imul(g,W)|0,a=a+Math.imul(g,H)|0,i=i+Math.imul(p,V)|0,n=(n=n+Math.imul(p,Z)|0)+Math.imul(y,V)|0,a=a+Math.imul(y,Z)|0;var we=(u+(i=i+Math.imul(d,$)|0)|0)+((8191&(n=(n=n+Math.imul(d,X)|0)+Math.imul(f,$)|0))<<13)|0;u=((a=a+Math.imul(f,X)|0)+(n>>>13)|0)+(we>>>26)|0,we&=67108863,i=Math.imul(A,N),n=(n=Math.imul(A,L))+Math.imul(S,N)|0,a=Math.imul(S,L),i=i+Math.imul(v,W)|0,n=(n=n+Math.imul(v,H)|0)+Math.imul(_,W)|0,a=a+Math.imul(_,H)|0,i=i+Math.imul(m,V)|0,n=(n=n+Math.imul(m,Z)|0)+Math.imul(g,V)|0,a=a+Math.imul(g,Z)|0,i=i+Math.imul(p,$)|0,n=(n=n+Math.imul(p,X)|0)+Math.imul(y,$)|0,a=a+Math.imul(y,X)|0;var ve=(u+(i=i+Math.imul(d,Q)|0)|0)+((8191&(n=(n=n+Math.imul(d,ee)|0)+Math.imul(f,Q)|0))<<13)|0;u=((a=a+Math.imul(f,ee)|0)+(n>>>13)|0)+(ve>>>26)|0,ve&=67108863,i=Math.imul(x,N),n=(n=Math.imul(x,L))+Math.imul(P,N)|0,a=Math.imul(P,L),i=i+Math.imul(A,W)|0,n=(n=n+Math.imul(A,H)|0)+Math.imul(S,W)|0,a=a+Math.imul(S,H)|0,i=i+Math.imul(v,V)|0,n=(n=n+Math.imul(v,Z)|0)+Math.imul(_,V)|0,a=a+Math.imul(_,Z)|0,i=i+Math.imul(m,$)|0,n=(n=n+Math.imul(m,X)|0)+Math.imul(g,$)|0,a=a+Math.imul(g,X)|0,i=i+Math.imul(p,Q)|0,n=(n=n+Math.imul(p,ee)|0)+Math.imul(y,Q)|0,a=a+Math.imul(y,ee)|0;var _e=(u+(i=i+Math.imul(d,re)|0)|0)+((8191&(n=(n=n+Math.imul(d,ie)|0)+Math.imul(f,re)|0))<<13)|0;u=((a=a+Math.imul(f,ie)|0)+(n>>>13)|0)+(_e>>>26)|0,_e&=67108863,i=Math.imul(C,N),n=(n=Math.imul(C,L))+Math.imul(K,N)|0,a=Math.imul(K,L),i=i+Math.imul(x,W)|0,n=(n=n+Math.imul(x,H)|0)+Math.imul(P,W)|0,a=a+Math.imul(P,H)|0,i=i+Math.imul(A,V)|0,n=(n=n+Math.imul(A,Z)|0)+Math.imul(S,V)|0,a=a+Math.imul(S,Z)|0,i=i+Math.imul(v,$)|0,n=(n=n+Math.imul(v,X)|0)+Math.imul(_,$)|0,a=a+Math.imul(_,X)|0,i=i+Math.imul(m,Q)|0,n=(n=n+Math.imul(m,ee)|0)+Math.imul(g,Q)|0,a=a+Math.imul(g,ee)|0,i=i+Math.imul(p,re)|0,n=(n=n+Math.imul(p,ie)|0)+Math.imul(y,re)|0,a=a+Math.imul(y,ie)|0;var ke=(u+(i=i+Math.imul(d,ae)|0)|0)+((8191&(n=(n=n+Math.imul(d,se)|0)+Math.imul(f,ae)|0))<<13)|0;u=((a=a+Math.imul(f,se)|0)+(n>>>13)|0)+(ke>>>26)|0,ke&=67108863,i=Math.imul(R,N),n=(n=Math.imul(R,L))+Math.imul(I,N)|0,a=Math.imul(I,L),i=i+Math.imul(C,W)|0,n=(n=n+Math.imul(C,H)|0)+Math.imul(K,W)|0,a=a+Math.imul(K,H)|0,i=i+Math.imul(x,V)|0,n=(n=n+Math.imul(x,Z)|0)+Math.imul(P,V)|0,a=a+Math.imul(P,Z)|0,i=i+Math.imul(A,$)|0,n=(n=n+Math.imul(A,X)|0)+Math.imul(S,$)|0,a=a+Math.imul(S,X)|0,i=i+Math.imul(v,Q)|0,n=(n=n+Math.imul(v,ee)|0)+Math.imul(_,Q)|0,a=a+Math.imul(_,ee)|0,i=i+Math.imul(m,re)|0,n=(n=n+Math.imul(m,ie)|0)+Math.imul(g,re)|0,a=a+Math.imul(g,ie)|0,i=i+Math.imul(p,ae)|0,n=(n=n+Math.imul(p,se)|0)+Math.imul(y,ae)|0,a=a+Math.imul(y,se)|0;var Ae=(u+(i=i+Math.imul(d,ce)|0)|0)+((8191&(n=(n=n+Math.imul(d,ue)|0)+Math.imul(f,ce)|0))<<13)|0;u=((a=a+Math.imul(f,ue)|0)+(n>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,i=Math.imul(B,N),n=(n=Math.imul(B,L))+Math.imul(T,N)|0,a=Math.imul(T,L),i=i+Math.imul(R,W)|0,n=(n=n+Math.imul(R,H)|0)+Math.imul(I,W)|0,a=a+Math.imul(I,H)|0,i=i+Math.imul(C,V)|0,n=(n=n+Math.imul(C,Z)|0)+Math.imul(K,V)|0,a=a+Math.imul(K,Z)|0,i=i+Math.imul(x,$)|0,n=(n=n+Math.imul(x,X)|0)+Math.imul(P,$)|0,a=a+Math.imul(P,X)|0,i=i+Math.imul(A,Q)|0,n=(n=n+Math.imul(A,ee)|0)+Math.imul(S,Q)|0,a=a+Math.imul(S,ee)|0,i=i+Math.imul(v,re)|0,n=(n=n+Math.imul(v,ie)|0)+Math.imul(_,re)|0,a=a+Math.imul(_,ie)|0,i=i+Math.imul(m,ae)|0,n=(n=n+Math.imul(m,se)|0)+Math.imul(g,ae)|0,a=a+Math.imul(g,se)|0,i=i+Math.imul(p,ce)|0,n=(n=n+Math.imul(p,ue)|0)+Math.imul(y,ce)|0,a=a+Math.imul(y,ue)|0;var Se=(u+(i=i+Math.imul(d,de)|0)|0)+((8191&(n=(n=n+Math.imul(d,fe)|0)+Math.imul(f,de)|0))<<13)|0;u=((a=a+Math.imul(f,fe)|0)+(n>>>13)|0)+(Se>>>26)|0,Se&=67108863,i=Math.imul(q,N),n=(n=Math.imul(q,L))+Math.imul(F,N)|0,a=Math.imul(F,L),i=i+Math.imul(B,W)|0,n=(n=n+Math.imul(B,H)|0)+Math.imul(T,W)|0,a=a+Math.imul(T,H)|0,i=i+Math.imul(R,V)|0,n=(n=n+Math.imul(R,Z)|0)+Math.imul(I,V)|0,a=a+Math.imul(I,Z)|0,i=i+Math.imul(C,$)|0,n=(n=n+Math.imul(C,X)|0)+Math.imul(K,$)|0,a=a+Math.imul(K,X)|0,i=i+Math.imul(x,Q)|0,n=(n=n+Math.imul(x,ee)|0)+Math.imul(P,Q)|0,a=a+Math.imul(P,ee)|0,i=i+Math.imul(A,re)|0,n=(n=n+Math.imul(A,ie)|0)+Math.imul(S,re)|0,a=a+Math.imul(S,ie)|0,i=i+Math.imul(v,ae)|0,n=(n=n+Math.imul(v,se)|0)+Math.imul(_,ae)|0,a=a+Math.imul(_,se)|0,i=i+Math.imul(m,ce)|0,n=(n=n+Math.imul(m,ue)|0)+Math.imul(g,ce)|0,a=a+Math.imul(g,ue)|0,i=i+Math.imul(p,de)|0,n=(n=n+Math.imul(p,fe)|0)+Math.imul(y,de)|0,a=a+Math.imul(y,fe)|0;var Ee=(u+(i=i+Math.imul(d,pe)|0)|0)+((8191&(n=(n=n+Math.imul(d,ye)|0)+Math.imul(f,pe)|0))<<13)|0;u=((a=a+Math.imul(f,ye)|0)+(n>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,i=Math.imul(q,W),n=(n=Math.imul(q,H))+Math.imul(F,W)|0,a=Math.imul(F,H),i=i+Math.imul(B,V)|0,n=(n=n+Math.imul(B,Z)|0)+Math.imul(T,V)|0,a=a+Math.imul(T,Z)|0,i=i+Math.imul(R,$)|0,n=(n=n+Math.imul(R,X)|0)+Math.imul(I,$)|0,a=a+Math.imul(I,X)|0,i=i+Math.imul(C,Q)|0,n=(n=n+Math.imul(C,ee)|0)+Math.imul(K,Q)|0,a=a+Math.imul(K,ee)|0,i=i+Math.imul(x,re)|0,n=(n=n+Math.imul(x,ie)|0)+Math.imul(P,re)|0,a=a+Math.imul(P,ie)|0,i=i+Math.imul(A,ae)|0,n=(n=n+Math.imul(A,se)|0)+Math.imul(S,ae)|0,a=a+Math.imul(S,se)|0,i=i+Math.imul(v,ce)|0,n=(n=n+Math.imul(v,ue)|0)+Math.imul(_,ce)|0,a=a+Math.imul(_,ue)|0,i=i+Math.imul(m,de)|0,n=(n=n+Math.imul(m,fe)|0)+Math.imul(g,de)|0,a=a+Math.imul(g,fe)|0;var xe=(u+(i=i+Math.imul(p,pe)|0)|0)+((8191&(n=(n=n+Math.imul(p,ye)|0)+Math.imul(y,pe)|0))<<13)|0;u=((a=a+Math.imul(y,ye)|0)+(n>>>13)|0)+(xe>>>26)|0,xe&=67108863,i=Math.imul(q,V),n=(n=Math.imul(q,Z))+Math.imul(F,V)|0,a=Math.imul(F,Z),i=i+Math.imul(B,$)|0,n=(n=n+Math.imul(B,X)|0)+Math.imul(T,$)|0,a=a+Math.imul(T,X)|0,i=i+Math.imul(R,Q)|0,n=(n=n+Math.imul(R,ee)|0)+Math.imul(I,Q)|0,a=a+Math.imul(I,ee)|0,i=i+Math.imul(C,re)|0,n=(n=n+Math.imul(C,ie)|0)+Math.imul(K,re)|0,a=a+Math.imul(K,ie)|0,i=i+Math.imul(x,ae)|0,n=(n=n+Math.imul(x,se)|0)+Math.imul(P,ae)|0,a=a+Math.imul(P,se)|0,i=i+Math.imul(A,ce)|0,n=(n=n+Math.imul(A,ue)|0)+Math.imul(S,ce)|0,a=a+Math.imul(S,ue)|0,i=i+Math.imul(v,de)|0,n=(n=n+Math.imul(v,fe)|0)+Math.imul(_,de)|0,a=a+Math.imul(_,fe)|0;var Pe=(u+(i=i+Math.imul(m,pe)|0)|0)+((8191&(n=(n=n+Math.imul(m,ye)|0)+Math.imul(g,pe)|0))<<13)|0;u=((a=a+Math.imul(g,ye)|0)+(n>>>13)|0)+(Pe>>>26)|0,Pe&=67108863,i=Math.imul(q,$),n=(n=Math.imul(q,X))+Math.imul(F,$)|0,a=Math.imul(F,X),i=i+Math.imul(B,Q)|0,n=(n=n+Math.imul(B,ee)|0)+Math.imul(T,Q)|0,a=a+Math.imul(T,ee)|0,i=i+Math.imul(R,re)|0,n=(n=n+Math.imul(R,ie)|0)+Math.imul(I,re)|0,a=a+Math.imul(I,ie)|0,i=i+Math.imul(C,ae)|0,n=(n=n+Math.imul(C,se)|0)+Math.imul(K,ae)|0,a=a+Math.imul(K,se)|0,i=i+Math.imul(x,ce)|0,n=(n=n+Math.imul(x,ue)|0)+Math.imul(P,ce)|0,a=a+Math.imul(P,ue)|0,i=i+Math.imul(A,de)|0,n=(n=n+Math.imul(A,fe)|0)+Math.imul(S,de)|0,a=a+Math.imul(S,fe)|0;var Me=(u+(i=i+Math.imul(v,pe)|0)|0)+((8191&(n=(n=n+Math.imul(v,ye)|0)+Math.imul(_,pe)|0))<<13)|0;u=((a=a+Math.imul(_,ye)|0)+(n>>>13)|0)+(Me>>>26)|0,Me&=67108863,i=Math.imul(q,Q),n=(n=Math.imul(q,ee))+Math.imul(F,Q)|0,a=Math.imul(F,ee),i=i+Math.imul(B,re)|0,n=(n=n+Math.imul(B,ie)|0)+Math.imul(T,re)|0,a=a+Math.imul(T,ie)|0,i=i+Math.imul(R,ae)|0,n=(n=n+Math.imul(R,se)|0)+Math.imul(I,ae)|0,a=a+Math.imul(I,se)|0,i=i+Math.imul(C,ce)|0,n=(n=n+Math.imul(C,ue)|0)+Math.imul(K,ce)|0,a=a+Math.imul(K,ue)|0,i=i+Math.imul(x,de)|0,n=(n=n+Math.imul(x,fe)|0)+Math.imul(P,de)|0,a=a+Math.imul(P,fe)|0;var Ce=(u+(i=i+Math.imul(A,pe)|0)|0)+((8191&(n=(n=n+Math.imul(A,ye)|0)+Math.imul(S,pe)|0))<<13)|0;u=((a=a+Math.imul(S,ye)|0)+(n>>>13)|0)+(Ce>>>26)|0,Ce&=67108863,i=Math.imul(q,re),n=(n=Math.imul(q,ie))+Math.imul(F,re)|0,a=Math.imul(F,ie),i=i+Math.imul(B,ae)|0,n=(n=n+Math.imul(B,se)|0)+Math.imul(T,ae)|0,a=a+Math.imul(T,se)|0,i=i+Math.imul(R,ce)|0,n=(n=n+Math.imul(R,ue)|0)+Math.imul(I,ce)|0,a=a+Math.imul(I,ue)|0,i=i+Math.imul(C,de)|0,n=(n=n+Math.imul(C,fe)|0)+Math.imul(K,de)|0,a=a+Math.imul(K,fe)|0;var Ke=(u+(i=i+Math.imul(x,pe)|0)|0)+((8191&(n=(n=n+Math.imul(x,ye)|0)+Math.imul(P,pe)|0))<<13)|0;u=((a=a+Math.imul(P,ye)|0)+(n>>>13)|0)+(Ke>>>26)|0,Ke&=67108863,i=Math.imul(q,ae),n=(n=Math.imul(q,se))+Math.imul(F,ae)|0,a=Math.imul(F,se),i=i+Math.imul(B,ce)|0,n=(n=n+Math.imul(B,ue)|0)+Math.imul(T,ce)|0,a=a+Math.imul(T,ue)|0,i=i+Math.imul(R,de)|0,n=(n=n+Math.imul(R,fe)|0)+Math.imul(I,de)|0,a=a+Math.imul(I,fe)|0;var De=(u+(i=i+Math.imul(C,pe)|0)|0)+((8191&(n=(n=n+Math.imul(C,ye)|0)+Math.imul(K,pe)|0))<<13)|0;u=((a=a+Math.imul(K,ye)|0)+(n>>>13)|0)+(De>>>26)|0,De&=67108863,i=Math.imul(q,ce),n=(n=Math.imul(q,ue))+Math.imul(F,ce)|0,a=Math.imul(F,ue),i=i+Math.imul(B,de)|0,n=(n=n+Math.imul(B,fe)|0)+Math.imul(T,de)|0,a=a+Math.imul(T,fe)|0;var Re=(u+(i=i+Math.imul(R,pe)|0)|0)+((8191&(n=(n=n+Math.imul(R,ye)|0)+Math.imul(I,pe)|0))<<13)|0;u=((a=a+Math.imul(I,ye)|0)+(n>>>13)|0)+(Re>>>26)|0,Re&=67108863,i=Math.imul(q,de),n=(n=Math.imul(q,fe))+Math.imul(F,de)|0,a=Math.imul(F,fe);var Ie=(u+(i=i+Math.imul(B,pe)|0)|0)+((8191&(n=(n=n+Math.imul(B,ye)|0)+Math.imul(T,pe)|0))<<13)|0;u=((a=a+Math.imul(T,ye)|0)+(n>>>13)|0)+(Ie>>>26)|0,Ie&=67108863;var Ue=(u+(i=Math.imul(q,pe))|0)+((8191&(n=(n=Math.imul(q,ye))+Math.imul(F,pe)|0))<<13)|0;return u=((a=Math.imul(F,ye))+(n>>>13)|0)+(Ue>>>26)|0,Ue&=67108863,c[0]=be,c[1]=me,c[2]=ge,c[3]=we,c[4]=ve,c[5]=_e,c[6]=ke,c[7]=Ae,c[8]=Se,c[9]=Ee,c[10]=xe,c[11]=Pe,c[12]=Me,c[13]=Ce,c[14]=Ke,c[15]=De,c[16]=Re,c[17]=Ie,c[18]=Ue,0!==u&&(c[19]=u,r.length++),r};function p(e,t,r){return(new y).mulp(e,t,r)}function y(e,t){this.x=e,this.y=t}Math.imul||(l=f),n.prototype.mulTo=function(e,t){var r=this.length+e.length;return 10===this.length&&10===e.length?l(this,e,t):r<63?f(this,e,t):r<1024?function(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var i=0,n=0,a=0;a<r.length-1;a++){var s=n;n=0;for(var o=67108863&i,c=Math.min(a,t.length-1),u=Math.max(0,a-e.length+1);u<=c;u++){var h=a-u,d=(0|e.words[h])*(0|t.words[u]),f=67108863&d;o=67108863&(f=f+o|0),n+=(s=(s=s+(d/67108864|0)|0)+(f>>>26)|0)>>>26,s&=67108863}r.words[a]=o,i=s,s=n}return 0!==i?r.words[a]=i:r.length--,r.strip()}(this,e,t):p(this,e,t)},y.prototype.makeRBT=function(e){for(var t=Array(e),r=n.prototype._countBits(e)-1,i=0;i<e;i++)t[i]=this.revBin(i,r,e);return t},y.prototype.revBin=function(e,t,r){if(0===e||e===r-1)return e;for(var i=0,n=0;n<t;n++)i|=(1&e)<<t-n-1,e>>=1;return i},y.prototype.permute=function(e,t,r,i,n,a){for(var s=0;s<a;s++)i[s]=t[e[s]],n[s]=r[e[s]]},y.prototype.transform=function(e,t,r,i,n,a){this.permute(a,e,t,r,i,n);for(var s=1;s<n;s<<=1)for(var o=s<<1,c=Math.cos(2*Math.PI/o),u=Math.sin(2*Math.PI/o),h=0;h<n;h+=o)for(var d=c,f=u,l=0;l<s;l++){var p=r[h+l],y=i[h+l],b=r[h+l+s],m=i[h+l+s],g=d*b-f*m;m=d*m+f*b,b=g,r[h+l]=p+b,i[h+l]=y+m,r[h+l+s]=p-b,i[h+l+s]=y-m,l!==o&&(g=c*d-u*f,f=c*f+u*d,d=g)}},y.prototype.guessLen13b=function(e,t){var r=1|Math.max(t,e),i=1&r,n=0;for(r=r/2|0;r;r>>>=1)n++;return 1<<n+1+i},y.prototype.conjugate=function(e,t,r){if(!(r<=1))for(var i=0;i<r/2;i++){var n=e[i];e[i]=e[r-i-1],e[r-i-1]=n,n=t[i],t[i]=-t[r-i-1],t[r-i-1]=-n}},y.prototype.normalize13b=function(e,t){for(var r=0,i=0;i<t/2;i++){var n=8192*Math.round(e[2*i+1]/t)+Math.round(e[2*i]/t)+r;e[i]=67108863&n,r=n<67108864?0:n/67108864|0}return e},y.prototype.convert13b=function(e,t,i,n){for(var a=0,s=0;s<t;s++)a+=0|e[s],i[2*s]=8191&a,a>>>=13,i[2*s+1]=8191&a,a>>>=13;for(s=2*t;s<n;++s)i[s]=0;r(0===a),r(0==(-8192&a))},y.prototype.stub=function(e){for(var t=Array(e),r=0;r<e;r++)t[r]=0;return t},y.prototype.mulp=function(e,t,r){var i=2*this.guessLen13b(e.length,t.length),n=this.makeRBT(i),a=this.stub(i),s=Array(i),o=Array(i),c=Array(i),u=Array(i),h=Array(i),d=Array(i),f=r.words;f.length=i,this.convert13b(e.words,e.length,s,i),this.convert13b(t.words,t.length,u,i),this.transform(s,a,o,c,i,n),this.transform(u,a,h,d,i,n);for(var l=0;l<i;l++){var p=o[l]*h[l]-c[l]*d[l];c[l]=o[l]*d[l]+c[l]*h[l],o[l]=p}return this.conjugate(o,c,i),this.transform(o,c,f,a,i,n),this.conjugate(f,a,i),this.normalize13b(f,i),r.negative=e.negative^t.negative,r.length=e.length+t.length,r.strip()},n.prototype.mul=function(e){var t=new n(null);return t.words=Array(this.length+e.length),this.mulTo(e,t)},n.prototype.mulf=function(e){var t=new n(null);return t.words=Array(this.length+e.length),p(this,e,t)},n.prototype.imul=function(e){return this.clone().mulTo(e,this)},n.prototype.imuln=function(e){r("number"==typeof e),r(e<67108864);for(var t=0,i=0;i<this.length;i++){var n=(0|this.words[i])*e,a=(67108863&n)+(67108863&t);t>>=26,t+=n/67108864|0,t+=a>>>26,this.words[i]=67108863&a}return 0!==t&&(this.words[i]=t,this.length++),this},n.prototype.muln=function(e){return this.clone().imuln(e)},n.prototype.sqr=function(){return this.mul(this)},n.prototype.isqr=function(){return this.imul(this.clone())},n.prototype.pow=function(e){var t=function(e){for(var t=Array(e.bitLength()),r=0;r<t.length;r++){var i=r/26|0,n=r%26;t[r]=(e.words[i]&1<<n)>>>n}return t}(e);if(0===t.length)return new n(1);for(var r=this,i=0;i<t.length&&0===t[i];i++,r=r.sqr());if(++i<t.length)for(var a=r.sqr();i<t.length;i++,a=a.sqr())0!==t[i]&&(r=r.mul(a));return r},n.prototype.iushln=function(e){r("number"==typeof e&&e>=0);var t,i=e%26,n=(e-i)/26,a=67108863>>>26-i<<26-i;if(0!==i){var s=0;for(t=0;t<this.length;t++){var o=this.words[t]&a,c=(0|this.words[t])-o<<i;this.words[t]=c|s,s=o>>>26-i}s&&(this.words[t]=s,this.length++)}if(0!==n){for(t=this.length-1;t>=0;t--)this.words[t+n]=this.words[t];for(t=0;t<n;t++)this.words[t]=0;this.length+=n}return this.strip()},n.prototype.ishln=function(e){return r(0===this.negative),this.iushln(e)},n.prototype.iushrn=function(e,t,i){var n;r("number"==typeof e&&e>=0),n=t?(t-t%26)/26:0;var a=e%26,s=Math.min((e-a)/26,this.length),o=67108863^67108863>>>a<<a,c=i;if(n=Math.max(0,n-=s),c){for(var u=0;u<s;u++)c.words[u]=this.words[u];c.length=s}if(0===s);else if(this.length>s)for(this.length-=s,u=0;u<this.length;u++)this.words[u]=this.words[u+s];else this.words[0]=0,this.length=1;var h=0;for(u=this.length-1;u>=0&&(0!==h||u>=n);u--){var d=0|this.words[u];this.words[u]=h<<26-a|d>>>a,h=d&o}return c&&0!==h&&(c.words[c.length++]=h),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},n.prototype.ishrn=function(e,t,i){return r(0===this.negative),this.iushrn(e,t,i)},n.prototype.shln=function(e){return this.clone().ishln(e)},n.prototype.ushln=function(e){return this.clone().iushln(e)},n.prototype.shrn=function(e){return this.clone().ishrn(e)},n.prototype.ushrn=function(e){return this.clone().iushrn(e)},n.prototype.testn=function(e){r("number"==typeof e&&e>=0);var t=e%26,i=(e-t)/26,n=1<<t;return!(this.length<=i)&&!!(this.words[i]&n)},n.prototype.imaskn=function(e){r("number"==typeof e&&e>=0);var t=e%26,i=(e-t)/26;if(r(0===this.negative,"imaskn works only with positive numbers"),this.length<=i)return this;if(0!==t&&i++,this.length=Math.min(i,this.length),0!==t){var n=67108863^67108863>>>t<<t;this.words[this.length-1]&=n}return this.strip()},n.prototype.maskn=function(e){return this.clone().imaskn(e)},n.prototype.iaddn=function(e){return r("number"==typeof e),r(e<67108864),e<0?this.isubn(-e):0!==this.negative?1===this.length&&(0|this.words[0])<e?(this.words[0]=e-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this):this._iaddn(e)},n.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},n.prototype.isubn=function(e){if(r("number"==typeof e),r(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this.strip()},n.prototype.addn=function(e){return this.clone().iaddn(e)},n.prototype.subn=function(e){return this.clone().isubn(e)},n.prototype.iabs=function(){return this.negative=0,this},n.prototype.abs=function(){return this.clone().iabs()},n.prototype._ishlnsubmul=function(e,t,i){var n,a,s=e.length+i;this._expand(s);var o=0;for(n=0;n<e.length;n++){a=(0|this.words[n+i])+o;var c=(0|e.words[n])*t;o=((a-=67108863&c)>>26)-(c/67108864|0),this.words[n+i]=67108863&a}for(;n<this.length-i;n++)o=(a=(0|this.words[n+i])+o)>>26,this.words[n+i]=67108863&a;if(0===o)return this.strip();for(r(-1===o),o=0,n=0;n<this.length;n++)o=(a=-(0|this.words[n])+o)>>26,this.words[n]=67108863&a;return this.negative=1,this.strip()},n.prototype._wordDiv=function(e,t){var r=(this.length,e.length),i=this.clone(),a=e,s=0|a.words[a.length-1];0!==(r=26-this._countBits(s))&&(a=a.ushln(r),i.iushln(r),s=0|a.words[a.length-1]);var o,c=i.length-a.length;if("mod"!==t){(o=new n(null)).length=c+1,o.words=Array(o.length);for(var u=0;u<o.length;u++)o.words[u]=0}var h=i.clone()._ishlnsubmul(a,1,c);0===h.negative&&(i=h,o&&(o.words[c]=1));for(var d=c-1;d>=0;d--){var f=67108864*(0|i.words[a.length+d])+(0|i.words[a.length+d-1]);for(f=Math.min(f/s|0,67108863),i._ishlnsubmul(a,f,d);0!==i.negative;)f--,i.negative=0,i._ishlnsubmul(a,1,d),i.isZero()||(i.negative^=1);o&&(o.words[d]=f)}return o&&o.strip(),i.strip(),"div"!==t&&0!==r&&i.iushrn(r),{div:o||null,mod:i}},n.prototype.divmod=function(e,t,i){return r(!e.isZero()),this.isZero()?{div:new n(0),mod:new n(0)}:0!==this.negative&&0===e.negative?(o=this.neg().divmod(e,t),"mod"!==t&&(a=o.div.neg()),"div"!==t&&(s=o.mod.neg(),i&&0!==s.negative&&s.iadd(e)),{div:a,mod:s}):0===this.negative&&0!==e.negative?(o=this.divmod(e.neg(),t),"mod"!==t&&(a=o.div.neg()),{div:a,mod:o.mod}):0!=(this.negative&e.negative)?(o=this.neg().divmod(e.neg(),t),"div"!==t&&(s=o.mod.neg(),i&&0!==s.negative&&s.isub(e)),{div:o.div,mod:s}):e.length>this.length||this.cmp(e)<0?{div:new n(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new n(this.modn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new n(this.modn(e.words[0]))}:this._wordDiv(e,t);var a,s,o},n.prototype.div=function(e){return this.divmod(e,"div",!1).div},n.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},n.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},n.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var r=0!==t.div.negative?t.mod.isub(e):t.mod,i=e.ushrn(1),n=e.andln(1),a=r.cmp(i);return a<0||1===n&&0===a?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},n.prototype.modn=function(e){r(e<=67108863);for(var t=(1<<26)%e,i=0,n=this.length-1;n>=0;n--)i=(t*i+(0|this.words[n]))%e;return i},n.prototype.idivn=function(e){r(e<=67108863);for(var t=0,i=this.length-1;i>=0;i--){var n=(0|this.words[i])+67108864*t;this.words[i]=n/e|0,t=n%e}return this.strip()},n.prototype.divn=function(e){return this.clone().idivn(e)},n.prototype.egcd=function(e){r(0===e.negative),r(!e.isZero());var t=this,i=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var a=new n(1),s=new n(0),o=new n(0),c=new n(1),u=0;t.isEven()&&i.isEven();)t.iushrn(1),i.iushrn(1),++u;for(var h=i.clone(),d=t.clone();!t.isZero();){for(var f=0,l=1;0==(t.words[0]&l)&&f<26;++f,l<<=1);if(f>0)for(t.iushrn(f);f-- >0;)(a.isOdd()||s.isOdd())&&(a.iadd(h),s.isub(d)),a.iushrn(1),s.iushrn(1);for(var p=0,y=1;0==(i.words[0]&y)&&p<26;++p,y<<=1);if(p>0)for(i.iushrn(p);p-- >0;)(o.isOdd()||c.isOdd())&&(o.iadd(h),c.isub(d)),o.iushrn(1),c.iushrn(1);t.cmp(i)>=0?(t.isub(i),a.isub(o),s.isub(c)):(i.isub(t),o.isub(a),c.isub(s))}return{a:o,b:c,gcd:i.iushln(u)}},n.prototype._invmp=function(e){r(0===e.negative),r(!e.isZero());var t=this,i=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var a,s=new n(1),o=new n(0),c=i.clone();t.cmpn(1)>0&&i.cmpn(1)>0;){for(var u=0,h=1;0==(t.words[0]&h)&&u<26;++u,h<<=1);if(u>0)for(t.iushrn(u);u-- >0;)s.isOdd()&&s.iadd(c),s.iushrn(1);for(var d=0,f=1;0==(i.words[0]&f)&&d<26;++d,f<<=1);if(d>0)for(i.iushrn(d);d-- >0;)o.isOdd()&&o.iadd(c),o.iushrn(1);t.cmp(i)>=0?(t.isub(i),s.isub(o)):(i.isub(t),o.isub(s))}return(a=0===t.cmpn(1)?s:o).cmpn(0)<0&&a.iadd(e),a},n.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),r=e.clone();t.negative=0,r.negative=0;for(var i=0;t.isEven()&&r.isEven();i++)t.iushrn(1),r.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;r.isEven();)r.iushrn(1);var n=t.cmp(r);if(n<0){var a=t;t=r,r=a}else if(0===n||0===r.cmpn(1))break;t.isub(r)}return r.iushln(i)},n.prototype.invm=function(e){return this.egcd(e).a.umod(e)},n.prototype.isEven=function(){return 0==(1&this.words[0])},n.prototype.isOdd=function(){return 1==(1&this.words[0])},n.prototype.andln=function(e){return this.words[0]&e},n.prototype.bincn=function(e){r("number"==typeof e);var t=e%26,i=(e-t)/26,n=1<<t;if(this.length<=i)return this._expand(i+1),this.words[i]|=n,this;for(var a=n,s=i;0!==a&&s<this.length;s++){var o=0|this.words[s];a=(o+=a)>>>26,o&=67108863,this.words[s]=o}return 0!==a&&(this.words[s]=a,this.length++),this},n.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},n.prototype.cmpn=function(e){var t,i=e<0;if(0!==this.negative&&!i)return-1;if(0===this.negative&&i)return 1;if(this.strip(),this.length>1)t=1;else{i&&(e=-e),r(e<=67108863,"Number is too big");var n=0|this.words[0];t=n===e?0:n<e?-1:1}return 0!==this.negative?0|-t:t},n.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},n.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,r=this.length-1;r>=0;r--){var i=0|this.words[r],n=0|e.words[r];if(i!==n){i<n?t=-1:i>n&&(t=1);break}}return t},n.prototype.gtn=function(e){return 1===this.cmpn(e)},n.prototype.gt=function(e){return 1===this.cmp(e)},n.prototype.gten=function(e){return this.cmpn(e)>=0},n.prototype.gte=function(e){return this.cmp(e)>=0},n.prototype.ltn=function(e){return-1===this.cmpn(e)},n.prototype.lt=function(e){return-1===this.cmp(e)},n.prototype.lten=function(e){return this.cmpn(e)<=0},n.prototype.lte=function(e){return this.cmp(e)<=0},n.prototype.eqn=function(e){return 0===this.cmpn(e)},n.prototype.eq=function(e){return 0===this.cmp(e)},n.red=function(e){return new k(e)},n.prototype.toRed=function(e){return r(!this.red,"Already a number in reduction context"),r(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},n.prototype.fromRed=function(){return r(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},n.prototype._forceRed=function(e){return this.red=e,this},n.prototype.forceRed=function(e){return r(!this.red,"Already a number in reduction context"),this._forceRed(e)},n.prototype.redAdd=function(e){return r(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},n.prototype.redIAdd=function(e){return r(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},n.prototype.redSub=function(e){return r(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},n.prototype.redISub=function(e){return r(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},n.prototype.redShl=function(e){return r(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},n.prototype.redMul=function(e){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},n.prototype.redIMul=function(e){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},n.prototype.redSqr=function(){return r(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},n.prototype.redISqr=function(){return r(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},n.prototype.redSqrt=function(){return r(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},n.prototype.redInvm=function(){return r(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},n.prototype.redNeg=function(){return r(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},n.prototype.redPow=function(e){return r(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var b={k256:null,p224:null,p192:null,p25519:null};function m(e,t){this.name=e,this.p=new n(t,16),this.n=this.p.bitLength(),this.k=new n(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function g(){m.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function w(){m.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function v(){m.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function _(){m.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function k(e){if("string"==typeof e){var t=n._prime(e);this.m=t.p,this.prime=t}else r(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function A(e){k.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new n(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}m.prototype._tmp=function(){var e=new n(null);return e.words=Array(Math.ceil(this.n/13)),e},m.prototype.ireduce=function(e){var t,r=e;do{this.split(r,this.tmp),t=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength()}while(t>this.n);var i=t<this.n?-1:r.ucmp(this.p);return 0===i?(r.words[0]=0,r.length=1):i>0?r.isub(this.p):r.strip(),r},m.prototype.split=function(e,t){e.iushrn(this.n,0,t)},m.prototype.imulK=function(e){return e.imul(this.k)},i(g,m),g.prototype.split=function(e,t){for(var r=Math.min(e.length,9),i=0;i<r;i++)t.words[i]=e.words[i];if(t.length=r,e.length<=9)return e.words[0]=0,void(e.length=1);var n=e.words[9];for(t.words[t.length++]=4194303&n,i=10;i<e.length;i++){var a=0|e.words[i];e.words[i-10]=(4194303&a)<<4|n>>>22,n=a}n>>>=22,e.words[i-10]=n,0===n&&e.length>10?e.length-=10:e.length-=9},g.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var i=0|e.words[r];t+=977*i,e.words[r]=67108863&t,t=64*i+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},i(w,m),i(v,m),i(_,m),_.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var i=19*(0|e.words[r])+t,n=67108863&i;i>>>=26,e.words[r]=n,t=i}return 0!==t&&(e.words[e.length++]=t),e},n._prime=function(e){if(b[e])return b[e];var t;if("k256"===e)t=new g;else if("p224"===e)t=new w;else if("p192"===e)t=new v;else{if("p25519"!==e)throw Error("Unknown prime "+e);t=new _}return b[e]=t,t},k.prototype._verify1=function(e){r(0===e.negative,"red works only with positives"),r(e.red,"red works only with red numbers")},k.prototype._verify2=function(e,t){r(0==(e.negative|t.negative),"red works only with positives"),r(e.red&&e.red===t.red,"red works only with red numbers")},k.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):e.umod(this.m)._forceRed(this)},k.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},k.prototype.add=function(e,t){this._verify2(e,t);var r=e.add(t);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},k.prototype.iadd=function(e,t){this._verify2(e,t);var r=e.iadd(t);return r.cmp(this.m)>=0&&r.isub(this.m),r},k.prototype.sub=function(e,t){this._verify2(e,t);var r=e.sub(t);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},k.prototype.isub=function(e,t){this._verify2(e,t);var r=e.isub(t);return r.cmpn(0)<0&&r.iadd(this.m),r},k.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},k.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},k.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},k.prototype.isqr=function(e){return this.imul(e,e.clone())},k.prototype.sqr=function(e){return this.mul(e,e)},k.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(r(t%2==1),3===t){var i=this.m.add(new n(1)).iushrn(2);return this.pow(e,i)}for(var a=this.m.subn(1),s=0;!a.isZero()&&0===a.andln(1);)s++,a.iushrn(1);r(!a.isZero());var o=new n(1).toRed(this),c=o.redNeg(),u=this.m.subn(1).iushrn(1),h=this.m.bitLength();for(h=new n(2*h*h).toRed(this);0!==this.pow(h,u).cmp(c);)h.redIAdd(c);for(var d=this.pow(h,a),f=this.pow(e,a.addn(1).iushrn(1)),l=this.pow(e,a),p=s;0!==l.cmp(o);){for(var y=l,b=0;0!==y.cmp(o);b++)y=y.redSqr();r(b<p);var m=this.pow(d,new n(1).iushln(p-b-1));f=f.redMul(m),d=m.redSqr(),l=l.redMul(d),p=b}return f},k.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},k.prototype.pow=function(e,t){if(t.isZero())return new n(1).toRed(this);if(0===t.cmpn(1))return e.clone();var r=Array(16);r[0]=new n(1).toRed(this),r[1]=e;for(var i=2;i<r.length;i++)r[i]=this.mul(r[i-1],e);var a=r[0],s=0,o=0,c=t.bitLength()%26;for(0===c&&(c=26),i=t.length-1;i>=0;i--){for(var u=t.words[i],h=c-1;h>=0;h--){var d=u>>h&1;a!==r[0]&&(a=this.sqr(a)),0!==d||0!==s?(s<<=1,s|=d,(4===++o||0===i&&0===h)&&(a=this.mul(a,r[s]),o=0,s=0)):o=0}c=26}return a},k.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},k.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},n.mont=function(e){return new A(e)},i(A,k),A.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},A.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},A.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var r=e.imul(t),i=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),n=r.isub(i).iushrn(this.shift),a=n;return n.cmp(this.m)>=0?a=n.isub(this.m):n.cmpn(0)<0&&(a=n.iadd(this.m)),a._forceRed(this)},A.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new n(0)._forceRed(this);var r=e.mul(t),i=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),a=r.isub(i).iushrn(this.shift),s=a;return a.cmp(this.m)>=0?s=a.isub(this.m):a.cmpn(0)<0&&(s=a.iadd(this.m)),s._forceRed(this)},A.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(e,bt)})),Fd=/*#__PURE__*/Object.freeze({__proto__:null,default:qd,__moduleExports:qd});class Od{constructor(e){if(void 0===e)throw Error("Invalid BigInteger input");this.value=new qd(e)}clone(){const e=new Od(null);return this.value.copy(e.value),e}iinc(){return this.value.iadd(new qd(1)),this}inc(){return this.clone().iinc()}idec(){return this.value.isub(new qd(1)),this}dec(){return this.clone().idec()}iadd(e){return this.value.iadd(e.value),this}add(e){return this.clone().iadd(e)}isub(e){return this.value.isub(e.value),this}sub(e){return this.clone().isub(e)}imul(e){return this.value.imul(e.value),this}mul(e){return this.clone().imul(e)}imod(e){return this.value=this.value.umod(e.value),this}mod(e){return this.clone().imod(e)}modExp(e,t){const r=t.isEven()?qd.red(t.value):qd.mont(t.value),i=this.clone();return i.value=i.value.toRed(r).redPow(e.value).fromRed(),i}modInv(e){if(!this.gcd(e).isOne())throw Error("Inverse does not exist");return new Od(this.value.invm(e.value))}gcd(e){return new Od(this.value.gcd(e.value))}ileftShift(e){return this.value.ishln(e.value.toNumber()),this}leftShift(e){return this.clone().ileftShift(e)}irightShift(e){return this.value.ishrn(e.value.toNumber()),this}rightShift(e){return this.clone().irightShift(e)}equal(e){return this.value.eq(e.value)}lt(e){return this.value.lt(e.value)}lte(e){return this.value.lte(e.value)}gt(e){return this.value.gt(e.value)}gte(e){return this.value.gte(e.value)}isZero(){return this.value.isZero()}isOne(){return this.value.eq(new qd(1))}isNegative(){return this.value.isNeg()}isEven(){return this.value.isEven()}abs(){const e=this.clone();return e.value=e.value.abs(),e}toString(){return this.value.toString()}toNumber(){return this.value.toNumber()}getBit(e){return this.value.testn(e)?1:0}bitLength(){return this.value.bitLength()}byteLength(){return this.value.byteLength()}toUint8Array(e="be",t){return this.value.toArrayLike(Uint8Array,e,t)}}var Nd,Ld=/*#__PURE__*/Object.freeze({__proto__:null,default:Od}),jd=mt((function(e,t){var r=t;function i(e){return 1===e.length?"0"+e:e}function n(e){for(var t="",r=0;r<e.length;r++)t+=i(e[r].toString(16));return t}r.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"!=typeof e){for(var i=0;i<e.length;i++)r[i]=0|e[i];return r}if("hex"===t){(e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e);for(i=0;i<e.length;i+=2)r.push(parseInt(e[i]+e[i+1],16))}else for(i=0;i<e.length;i++){var n=e.charCodeAt(i),a=n>>8,s=255&n;a?r.push(a,s):r.push(s)}return r},r.zero2=i,r.toHex=n,r.encode=function(e,t){return"hex"===t?n(e):e}})),Wd=mt((function(e,t){var r=t;r.assert=pt,r.toArray=jd.toArray,r.zero2=jd.zero2,r.toHex=jd.toHex,r.encode=jd.encode,r.getNAF=function(e,t){for(var r=[],i=1<<t+1,n=e.clone();n.cmpn(1)>=0;){var a;if(n.isOdd()){var s=n.andln(i-1);a=s>(i>>1)-1?(i>>1)-s:s,n.isubn(a)}else a=0;r.push(a);for(var o=0!==n.cmpn(0)&&0===n.andln(i-1)?t+1:1,c=1;c<o;c++)r.push(0);n.iushrn(o)}return r},r.getJSF=function(e,t){var r=[[],[]];e=e.clone(),t=t.clone();for(var i=0,n=0;e.cmpn(-i)>0||t.cmpn(-n)>0;){var a,s,o,c=e.andln(3)+i&3,u=t.andln(3)+n&3;if(3===c&&(c=-1),3===u&&(u=-1),0==(1&c))a=0;else a=3!==(o=e.andln(7)+i&7)&&5!==o||2!==u?c:-c;if(r[0].push(a),0==(1&u))s=0;else s=3!==(o=t.andln(7)+n&7)&&5!==o||2!==c?u:-u;r[1].push(s),2*i===a+1&&(i=1-i),2*n===s+1&&(n=1-n),e.iushrn(1),t.iushrn(1)}return r},r.cachedProperty=function(e,t,r){var i="_"+t;e.prototype[t]=function(){return void 0!==this[i]?this[i]:this[i]=r.call(this)}},r.parseBytes=function(e){return"string"==typeof e?r.toArray(e,"hex"):e},r.intFromLE=function(e){return new qd(e,"hex","le")}})),Hd=function(e){return Nd||(Nd=new Gd(null)),Nd.generate(e)};function Gd(e){this.rand=e}var Vd=Gd;if(Gd.prototype.generate=function(e){return this._rand(e)},Gd.prototype._rand=function(e){if(this.rand.getBytes)return this.rand.getBytes(e);for(var t=new Uint8Array(e),r=0;r<t.length;r++)t[r]=this.rand.getByte();return t},"object"==typeof self)self.crypto&&self.crypto.getRandomValues?Gd.prototype._rand=function(e){var t=new Uint8Array(e);return self.crypto.getRandomValues(t),t}:self.msCrypto&&self.msCrypto.getRandomValues?Gd.prototype._rand=function(e){var t=new Uint8Array(e);return self.msCrypto.getRandomValues(t),t}:"object"==typeof window&&(Gd.prototype._rand=function(){throw Error("Not implemented yet")});else try{var Zd=d.default;if("function"!=typeof Zd.randomBytes)throw Error("Not supported");Gd.prototype._rand=function(e){return Zd.randomBytes(e)}}catch(e){}Hd.Rand=Vd;var Yd=Wd.getNAF,$d=Wd.getJSF,Xd=Wd.assert;function Jd(e,t){this.type=e,this.p=new qd(t.p,16),this.red=t.prime?qd.red(t.prime):qd.mont(this.p),this.zero=new qd(0).toRed(this.red),this.one=new qd(1).toRed(this.red),this.two=new qd(2).toRed(this.red),this.n=t.n&&new qd(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=[,,,,],this._wnafT2=[,,,,],this._wnafT3=[,,,,],this._wnafT4=[,,,,];var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var Qd=Jd;function ef(e,t){this.curve=e,this.type=t,this.precomputed=null}Jd.prototype.point=function(){throw Error("Not implemented")},Jd.prototype.validate=function(){throw Error("Not implemented")},Jd.prototype._fixedNafMul=function(e,t){Xd(e.precomputed);var r=e._getDoubles(),i=Yd(t,1),n=(1<<r.step+1)-(r.step%2==0?2:1);n/=3;for(var a=[],s=0;s<i.length;s+=r.step){var o=0;for(t=s+r.step-1;t>=s;t--)o=(o<<1)+i[t];a.push(o)}for(var c=this.jpoint(null,null,null),u=this.jpoint(null,null,null),h=n;h>0;h--){for(s=0;s<a.length;s++){(o=a[s])===h?u=u.mixedAdd(r.points[s]):o===-h&&(u=u.mixedAdd(r.points[s].neg()))}c=c.add(u)}return c.toP()},Jd.prototype._wnafMul=function(e,t){var r=4,i=e._getNAFPoints(r);r=i.wnd;for(var n=i.points,a=Yd(t,r),s=this.jpoint(null,null,null),o=a.length-1;o>=0;o--){for(t=0;o>=0&&0===a[o];o--)t++;if(o>=0&&t++,s=s.dblp(t),o<0)break;var c=a[o];Xd(0!==c),s="affine"===e.type?c>0?s.mixedAdd(n[c-1>>1]):s.mixedAdd(n[-c-1>>1].neg()):c>0?s.add(n[c-1>>1]):s.add(n[-c-1>>1].neg())}return"affine"===e.type?s.toP():s},Jd.prototype._wnafMulAdd=function(e,t,r,i,n){for(var a=this._wnafT1,s=this._wnafT2,o=this._wnafT3,c=0,u=0;u<i;u++){var h=(A=t[u])._getNAFPoints(e);a[u]=h.wnd,s[u]=h.points}for(u=i-1;u>=1;u-=2){var d=u-1,f=u;if(1===a[d]&&1===a[f]){var l=[t[d],null,null,t[f]];0===t[d].y.cmp(t[f].y)?(l[1]=t[d].add(t[f]),l[2]=t[d].toJ().mixedAdd(t[f].neg())):0===t[d].y.cmp(t[f].y.redNeg())?(l[1]=t[d].toJ().mixedAdd(t[f]),l[2]=t[d].add(t[f].neg())):(l[1]=t[d].toJ().mixedAdd(t[f]),l[2]=t[d].toJ().mixedAdd(t[f].neg()));var p=[-3,-1,-5,-7,0,7,5,1,3],y=$d(r[d],r[f]);c=Math.max(y[0].length,c),o[d]=Array(c),o[f]=Array(c);for(var b=0;b<c;b++){var m=0|y[0][b],g=0|y[1][b];o[d][b]=p[3*(m+1)+(g+1)],o[f][b]=0,s[d]=l}}else o[d]=Yd(r[d],a[d]),o[f]=Yd(r[f],a[f]),c=Math.max(o[d].length,c),c=Math.max(o[f].length,c)}var w=this.jpoint(null,null,null),v=this._wnafT4;for(u=c;u>=0;u--){for(var _=0;u>=0;){var k=!0;for(b=0;b<i;b++)v[b]=0|o[b][u],0!==v[b]&&(k=!1);if(!k)break;_++,u--}if(u>=0&&_++,w=w.dblp(_),u<0)break;for(b=0;b<i;b++){var A,S=v[b];0!==S&&(S>0?A=s[b][S-1>>1]:S<0&&(A=s[b][-S-1>>1].neg()),w="affine"===A.type?w.mixedAdd(A):w.add(A))}}for(u=0;u<i;u++)s[u]=null;return n?w:w.toP()},Jd.BasePoint=ef,ef.prototype.eq=function(){throw Error("Not implemented")},ef.prototype.validate=function(){return this.curve.validate(this)},Jd.prototype.decodePoint=function(e,t){e=Wd.toArray(e,t);var r=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*r)return 6===e[0]?Xd(e[e.length-1]%2==0):7===e[0]&&Xd(e[e.length-1]%2==1),this.point(e.slice(1,1+r),e.slice(1+r,1+2*r));if((2===e[0]||3===e[0])&&e.length-1===r)return this.pointFromX(e.slice(1,1+r),3===e[0]);throw Error("Unknown point format")},ef.prototype.encodeCompressed=function(e){return this.encode(e,!0)},ef.prototype._encode=function(e){var t=this.curve.p.byteLength(),r=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",t))},ef.prototype.encode=function(e,t){return Wd.encode(this._encode(t),e)},ef.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},ef.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},ef.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],i=this,n=0;n<t;n+=e){for(var a=0;a<e;a++)i=i.dbl();r.push(i)}return{step:e,points:r}},ef.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],r=(1<<e)-1,i=1===r?null:this.dbl(),n=1;n<r;n++)t[n]=t[n-1].add(i);return{wnd:e,points:t}},ef.prototype._getBeta=function(){return null},ef.prototype.dblp=function(e){for(var t=this,r=0;r<e;r++)t=t.dbl();return t};var tf=Wd.assert;function rf(e){Qd.call(this,"short",e),this.a=new qd(e.a,16).toRed(this.red),this.b=new qd(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=[,,,,],this._endoWnafT2=[,,,,]}wt(rf,Qd);var nf=rf;function af(e,t,r,i){Qd.BasePoint.call(this,e,"affine"),null===t&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new qd(t,16),this.y=new qd(r,16),i&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function sf(e,t,r,i){Qd.BasePoint.call(this,e,"jacobian"),null===t&&null===r&&null===i?(this.x=this.curve.one,this.y=this.curve.one,this.z=new qd(0)):(this.x=new qd(t,16),this.y=new qd(r,16),this.z=new qd(i,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}function of(e){Qd.call(this,"mont",e),this.a=new qd(e.a,16).toRed(this.red),this.b=new qd(e.b,16).toRed(this.red),this.i4=new qd(4).toRed(this.red).redInvm(),this.two=new qd(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}rf.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,r;if(e.beta)t=new qd(e.beta,16).toRed(this.red);else{var i=this._getEndoRoots(this.p);t=(t=i[0].cmp(i[1])<0?i[0]:i[1]).toRed(this.red)}if(e.lambda)r=new qd(e.lambda,16);else{var n=this._getEndoRoots(this.n);0===this.g.mul(n[0]).x.cmp(this.g.x.redMul(t))?r=n[0]:(r=n[1],tf(0===this.g.mul(r).x.cmp(this.g.x.redMul(t))))}return{beta:t,lambda:r,basis:e.basis?e.basis.map((function(e){return{a:new qd(e.a,16),b:new qd(e.b,16)}})):this._getEndoBasis(r)}}},rf.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:qd.mont(e),r=new qd(2).toRed(t).redInvm(),i=r.redNeg(),n=new qd(3).toRed(t).redNeg().redSqrt().redMul(r);return[i.redAdd(n).fromRed(),i.redSub(n).fromRed()]},rf.prototype._getEndoBasis=function(e){for(var t,r,i,n,a,s,o,c,u,h=this.n.ushrn(Math.floor(this.n.bitLength()/2)),d=e,f=this.n.clone(),l=new qd(1),p=new qd(0),y=new qd(0),b=new qd(1),m=0;0!==d.cmpn(0);){var g=f.div(d);c=f.sub(g.mul(d)),u=y.sub(g.mul(l));var w=b.sub(g.mul(p));if(!i&&c.cmp(h)<0)t=o.neg(),r=l,i=c.neg(),n=u;else if(i&&2==++m)break;o=c,f=d,d=c,y=l,l=u,b=p,p=w}a=c.neg(),s=u;var v=i.sqr().add(n.sqr());return a.sqr().add(s.sqr()).cmp(v)>=0&&(a=t,s=r),i.negative&&(i=i.neg(),n=n.neg()),a.negative&&(a=a.neg(),s=s.neg()),[{a:i,b:n},{a,b:s}]},rf.prototype._endoSplit=function(e){var t=this.endo.basis,r=t[0],i=t[1],n=i.b.mul(e).divRound(this.n),a=r.b.neg().mul(e).divRound(this.n),s=n.mul(r.a),o=a.mul(i.a),c=n.mul(r.b),u=a.mul(i.b);return{k1:e.sub(s).sub(o),k2:c.add(u).neg()}},rf.prototype.pointFromX=function(e,t){(e=new qd(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),i=r.redSqrt();if(0!==i.redSqr().redSub(r).cmp(this.zero))throw Error("invalid point");var n=i.fromRed().isOdd();return(t&&!n||!t&&n)&&(i=i.redNeg()),this.point(e,i)},rf.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,r=e.y,i=this.a.redMul(t),n=t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);return 0===r.redSqr().redISub(n).cmpn(0)},rf.prototype._endoWnafMulAdd=function(e,t,r){for(var i=this._endoWnafT1,n=this._endoWnafT2,a=0;a<e.length;a++){var s=this._endoSplit(t[a]),o=e[a],c=o._getBeta();s.k1.negative&&(s.k1.ineg(),o=o.neg(!0)),s.k2.negative&&(s.k2.ineg(),c=c.neg(!0)),i[2*a]=o,i[2*a+1]=c,n[2*a]=s.k1,n[2*a+1]=s.k2}for(var u=this._wnafMulAdd(1,i,n,2*a,r),h=0;h<2*a;h++)i[h]=null,n[h]=null;return u},wt(af,Qd.BasePoint),rf.prototype.point=function(e,t,r){return new af(this,e,t,r)},rf.prototype.pointFromJSON=function(e,t){return af.fromJSON(this,e,t)},af.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var r=this.curve,i=function(e){return r.point(e.x.redMul(r.endo.beta),e.y)};e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(i)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(i)}}}return t}},af.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},af.fromJSON=function(e,t,r){"string"==typeof t&&(t=JSON.parse(t));var i=e.point(t[0],t[1],r);if(!t[2])return i;function n(t){return e.point(t[0],t[1],r)}var a=t[2];return i.precomputed={beta:null,doubles:a.doubles&&{step:a.doubles.step,points:[i].concat(a.doubles.points.map(n))},naf:a.naf&&{wnd:a.naf.wnd,points:[i].concat(a.naf.points.map(n))}},i},af.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},af.prototype.isInfinity=function(){return this.inf},af.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e))return this.curve.point(null,null);if(0===this.x.cmp(e.x))return this.curve.point(null,null);var t=this.y.redSub(e.y);0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var r=t.redSqr().redISub(this.x).redISub(e.x),i=t.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,i)},af.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var t=this.curve.a,r=this.x.redSqr(),i=e.redInvm(),n=r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i),a=n.redSqr().redISub(this.x.redAdd(this.x)),s=n.redMul(this.x.redSub(a)).redISub(this.y);return this.curve.point(a,s)},af.prototype.getX=function(){return this.x.fromRed()},af.prototype.getY=function(){return this.y.fromRed()},af.prototype.mul=function(e){return e=new qd(e,16),this.isInfinity()?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},af.prototype.mulAdd=function(e,t,r){var i=[this,t],n=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(i,n):this.curve._wnafMulAdd(1,i,n,2)},af.prototype.jmulAdd=function(e,t,r){var i=[this,t],n=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(i,n,!0):this.curve._wnafMulAdd(1,i,n,2,!0)},af.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},af.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var r=this.precomputed,i=function(e){return e.neg()};t.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(i)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(i)}}}return t},af.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},wt(sf,Qd.BasePoint),rf.prototype.jpoint=function(e,t,r){return new sf(this,e,t,r)},sf.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),r=this.x.redMul(t),i=this.y.redMul(t).redMul(e);return this.curve.point(r,i)},sf.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},sf.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),r=this.z.redSqr(),i=this.x.redMul(t),n=e.x.redMul(r),a=this.y.redMul(t.redMul(e.z)),s=e.y.redMul(r.redMul(this.z)),o=i.redSub(n),c=a.redSub(s);if(0===o.cmpn(0))return 0!==c.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var u=o.redSqr(),h=u.redMul(o),d=i.redMul(u),f=c.redSqr().redIAdd(h).redISub(d).redISub(d),l=c.redMul(d.redISub(f)).redISub(a.redMul(h)),p=this.z.redMul(e.z).redMul(o);return this.curve.jpoint(f,l,p)},sf.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),r=this.x,i=e.x.redMul(t),n=this.y,a=e.y.redMul(t).redMul(this.z),s=r.redSub(i),o=n.redSub(a);if(0===s.cmpn(0))return 0!==o.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var c=s.redSqr(),u=c.redMul(s),h=r.redMul(c),d=o.redSqr().redIAdd(u).redISub(h).redISub(h),f=o.redMul(h.redISub(d)).redISub(n.redMul(u)),l=this.z.redMul(s);return this.curve.jpoint(d,f,l)},sf.prototype.dblp=function(e){if(0===e)return this;if(this.isInfinity())return this;if(!e)return this.dbl();if(this.curve.zeroA||this.curve.threeA){for(var t=this,r=0;r<e;r++)t=t.dbl();return t}var i=this.curve.a,n=this.curve.tinv,a=this.x,s=this.y,o=this.z,c=o.redSqr().redSqr(),u=s.redAdd(s);for(r=0;r<e;r++){var h=a.redSqr(),d=u.redSqr(),f=d.redSqr(),l=h.redAdd(h).redIAdd(h).redIAdd(i.redMul(c)),p=a.redMul(d),y=l.redSqr().redISub(p.redAdd(p)),b=p.redISub(y),m=l.redMul(b);m=m.redIAdd(m).redISub(f);var g=u.redMul(o);r+1<e&&(c=c.redMul(f)),a=y,o=g,u=m}return this.curve.jpoint(a,u.redMul(n),o)},sf.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},sf.prototype._zeroDbl=function(){var e,t,r;if(this.zOne){var i=this.x.redSqr(),n=this.y.redSqr(),a=n.redSqr(),s=this.x.redAdd(n).redSqr().redISub(i).redISub(a);s=s.redIAdd(s);var o=i.redAdd(i).redIAdd(i),c=o.redSqr().redISub(s).redISub(s),u=a.redIAdd(a);u=(u=u.redIAdd(u)).redIAdd(u),e=c,t=o.redMul(s.redISub(c)).redISub(u),r=this.y.redAdd(this.y)}else{var h=this.x.redSqr(),d=this.y.redSqr(),f=d.redSqr(),l=this.x.redAdd(d).redSqr().redISub(h).redISub(f);l=l.redIAdd(l);var p=h.redAdd(h).redIAdd(h),y=p.redSqr(),b=f.redIAdd(f);b=(b=b.redIAdd(b)).redIAdd(b),e=y.redISub(l).redISub(l),t=p.redMul(l.redISub(e)).redISub(b),r=(r=this.y.redMul(this.z)).redIAdd(r)}return this.curve.jpoint(e,t,r)},sf.prototype._threeDbl=function(){var e,t,r;if(this.zOne){var i=this.x.redSqr(),n=this.y.redSqr(),a=n.redSqr(),s=this.x.redAdd(n).redSqr().redISub(i).redISub(a);s=s.redIAdd(s);var o=i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),c=o.redSqr().redISub(s).redISub(s);e=c;var u=a.redIAdd(a);u=(u=u.redIAdd(u)).redIAdd(u),t=o.redMul(s.redISub(c)).redISub(u),r=this.y.redAdd(this.y)}else{var h=this.z.redSqr(),d=this.y.redSqr(),f=this.x.redMul(d),l=this.x.redSub(h).redMul(this.x.redAdd(h));l=l.redAdd(l).redIAdd(l);var p=f.redIAdd(f),y=(p=p.redIAdd(p)).redAdd(p);e=l.redSqr().redISub(y),r=this.y.redAdd(this.z).redSqr().redISub(d).redISub(h);var b=d.redSqr();b=(b=(b=b.redIAdd(b)).redIAdd(b)).redIAdd(b),t=l.redMul(p.redISub(e)).redISub(b)}return this.curve.jpoint(e,t,r)},sf.prototype._dbl=function(){var e=this.curve.a,t=this.x,r=this.y,i=this.z,n=i.redSqr().redSqr(),a=t.redSqr(),s=r.redSqr(),o=a.redAdd(a).redIAdd(a).redIAdd(e.redMul(n)),c=t.redAdd(t),u=(c=c.redIAdd(c)).redMul(s),h=o.redSqr().redISub(u.redAdd(u)),d=u.redISub(h),f=s.redSqr();f=(f=(f=f.redIAdd(f)).redIAdd(f)).redIAdd(f);var l=o.redMul(d).redISub(f),p=r.redAdd(r).redMul(i);return this.curve.jpoint(h,l,p)},sf.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr(),i=t.redSqr(),n=e.redAdd(e).redIAdd(e),a=n.redSqr(),s=this.x.redAdd(t).redSqr().redISub(e).redISub(i),o=(s=(s=(s=s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(a)).redSqr(),c=i.redIAdd(i);c=(c=(c=c.redIAdd(c)).redIAdd(c)).redIAdd(c);var u=n.redIAdd(s).redSqr().redISub(a).redISub(o).redISub(c),h=t.redMul(u);h=(h=h.redIAdd(h)).redIAdd(h);var d=this.x.redMul(o).redISub(h);d=(d=d.redIAdd(d)).redIAdd(d);var f=this.y.redMul(u.redMul(c.redISub(u)).redISub(s.redMul(o)));f=(f=(f=f.redIAdd(f)).redIAdd(f)).redIAdd(f);var l=this.z.redAdd(s).redSqr().redISub(r).redISub(o);return this.curve.jpoint(d,f,l)},sf.prototype.mul=function(e,t){return e=new qd(e,t),this.curve._wnafMul(this,e)},sf.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),r=e.z.redSqr();if(0!==this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))return!1;var i=t.redMul(this.z),n=r.redMul(e.z);return 0===this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0)},sf.prototype.eqXToP=function(e){var t=this.z.redSqr(),r=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(r))return!0;for(var i=e.clone(),n=this.curve.redN.redMul(t);;){if(i.iadd(this.curve.n),i.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(n),0===this.x.cmp(r))return!0}},sf.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},sf.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},wt(of,Qd);var cf=of;function uf(e,t,r){Qd.BasePoint.call(this,e,"projective"),null===t&&null===r?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new qd(t,16),this.z=new qd(r,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}of.prototype.validate=function(e){var t=e.normalize().x,r=t.redSqr(),i=r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);return 0===i.redSqrt().redSqr().cmp(i)},wt(uf,Qd.BasePoint),of.prototype.decodePoint=function(e,t){if(33===(e=Wd.toArray(e,t)).length&&64===e[0]&&(e=e.slice(1,33).reverse()),32!==e.length)throw Error("Unknown point compression format");return this.point(e,1)},of.prototype.point=function(e,t){return new uf(this,e,t)},of.prototype.pointFromJSON=function(e){return uf.fromJSON(this,e)},uf.prototype.precompute=function(){},uf.prototype._encode=function(e){var t=this.curve.p.byteLength();return e?[64].concat(this.getX().toArray("le",t)):this.getX().toArray("be",t)},uf.fromJSON=function(e,t){return new uf(e,t[0],t[1]||e.one)},uf.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},uf.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},uf.prototype.dbl=function(){var e=this.x.redAdd(this.z).redSqr(),t=this.x.redSub(this.z).redSqr(),r=e.redSub(t),i=e.redMul(t),n=r.redMul(t.redAdd(this.curve.a24.redMul(r)));return this.curve.point(i,n)},uf.prototype.add=function(){throw Error("Not supported on Montgomery curve")},uf.prototype.diffAdd=function(e,t){var r=this.x.redAdd(this.z),i=this.x.redSub(this.z),n=e.x.redAdd(e.z),a=e.x.redSub(e.z).redMul(r),s=n.redMul(i),o=t.z.redMul(a.redAdd(s).redSqr()),c=t.x.redMul(a.redISub(s).redSqr());return this.curve.point(o,c)},uf.prototype.mul=function(e){for(var t=(e=new qd(e,16)).clone(),r=this,i=this.curve.point(null,null),n=[];0!==t.cmpn(0);t.iushrn(1))n.push(t.andln(1));for(var a=n.length-1;a>=0;a--)0===n[a]?(r=r.diffAdd(i,this),i=i.dbl()):(i=r.diffAdd(i,this),r=r.dbl());return i},uf.prototype.mulAdd=function(){throw Error("Not supported on Montgomery curve")},uf.prototype.jumlAdd=function(){throw Error("Not supported on Montgomery curve")},uf.prototype.eq=function(e){return 0===this.getX().cmp(e.getX())},uf.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},uf.prototype.getX=function(){return this.normalize(),this.x.fromRed()};var hf=Wd.assert;function df(e){this.twisted=1!=(0|e.a),this.mOneA=this.twisted&&-1==(0|e.a),this.extended=this.mOneA,Qd.call(this,"edwards",e),this.a=new qd(e.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new qd(e.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new qd(e.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),hf(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1==(0|e.c)}wt(df,Qd);var ff=df;function lf(e,t,r,i,n){Qd.BasePoint.call(this,e,"projective"),null===t&&null===r&&null===i?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new qd(t,16),this.y=new qd(r,16),this.z=i?new qd(i,16):this.curve.one,this.t=n&&new qd(n,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}df.prototype._mulA=function(e){return this.mOneA?e.redNeg():this.a.redMul(e)},df.prototype._mulC=function(e){return this.oneC?e:this.c.redMul(e)},df.prototype.jpoint=function(e,t,r,i){return this.point(e,t,r,i)},df.prototype.pointFromX=function(e,t){(e=new qd(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr(),i=this.c2.redSub(this.a.redMul(r)),n=this.one.redSub(this.c2.redMul(this.d).redMul(r)),a=i.redMul(n.redInvm()),s=a.redSqrt();if(0!==s.redSqr().redSub(a).cmp(this.zero))throw Error("invalid point");var o=s.fromRed().isOdd();return(t&&!o||!t&&o)&&(s=s.redNeg()),this.point(e,s)},df.prototype.pointFromY=function(e,t){(e=new qd(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr(),i=r.redSub(this.c2),n=r.redMul(this.d).redMul(this.c2).redSub(this.a),a=i.redMul(n.redInvm());if(0===a.cmp(this.zero)){if(t)throw Error("invalid point");return this.point(this.zero,e)}var s=a.redSqrt();if(0!==s.redSqr().redSub(a).cmp(this.zero))throw Error("invalid point");return s.fromRed().isOdd()!==t&&(s=s.redNeg()),this.point(s,e)},df.prototype.validate=function(e){if(e.isInfinity())return!0;e.normalize();var t=e.x.redSqr(),r=e.y.redSqr(),i=t.redMul(this.a).redAdd(r),n=this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));return 0===i.cmp(n)},wt(lf,Qd.BasePoint),df.prototype.pointFromJSON=function(e){return lf.fromJSON(this,e)},df.prototype.point=function(e,t,r,i){return new lf(this,e,t,r,i)},lf.fromJSON=function(e,t){return new lf(e,t[0],t[1],t[2])},lf.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},lf.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&(0===this.y.cmp(this.z)||this.zOne&&0===this.y.cmp(this.curve.c))},lf.prototype._extDbl=function(){var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr();r=r.redIAdd(r);var i=this.curve._mulA(e),n=this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),a=i.redAdd(t),s=a.redSub(r),o=i.redSub(t),c=n.redMul(s),u=a.redMul(o),h=n.redMul(o),d=s.redMul(a);return this.curve.point(c,u,d,h)},lf.prototype._projDbl=function(){var e,t,r,i=this.x.redAdd(this.y).redSqr(),n=this.x.redSqr(),a=this.y.redSqr();if(this.curve.twisted){var s=(u=this.curve._mulA(n)).redAdd(a);if(this.zOne)e=i.redSub(n).redSub(a).redMul(s.redSub(this.curve.two)),t=s.redMul(u.redSub(a)),r=s.redSqr().redSub(s).redSub(s);else{var o=this.z.redSqr(),c=s.redSub(o).redISub(o);e=i.redSub(n).redISub(a).redMul(c),t=s.redMul(u.redSub(a)),r=s.redMul(c)}}else{var u=n.redAdd(a);o=this.curve._mulC(this.z).redSqr(),c=u.redSub(o).redSub(o);e=this.curve._mulC(i.redISub(u)).redMul(c),t=this.curve._mulC(u).redMul(n.redISub(a)),r=u.redMul(c)}return this.curve.point(e,t,r)},lf.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},lf.prototype._extAdd=function(e){var t=this.y.redSub(this.x).redMul(e.y.redSub(e.x)),r=this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),i=this.t.redMul(this.curve.dd).redMul(e.t),n=this.z.redMul(e.z.redAdd(e.z)),a=r.redSub(t),s=n.redSub(i),o=n.redAdd(i),c=r.redAdd(t),u=a.redMul(s),h=o.redMul(c),d=a.redMul(c),f=s.redMul(o);return this.curve.point(u,h,f,d)},lf.prototype._projAdd=function(e){var t,r,i=this.z.redMul(e.z),n=i.redSqr(),a=this.x.redMul(e.x),s=this.y.redMul(e.y),o=this.curve.d.redMul(a).redMul(s),c=n.redSub(o),u=n.redAdd(o),h=this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(s),d=i.redMul(c).redMul(h);return this.curve.twisted?(t=i.redMul(u).redMul(s.redSub(this.curve._mulA(a))),r=c.redMul(u)):(t=i.redMul(u).redMul(s.redSub(a)),r=this.curve._mulC(c).redMul(u)),this.curve.point(d,t,r)},lf.prototype.add=function(e){return this.isInfinity()?e:e.isInfinity()?this:this.curve.extended?this._extAdd(e):this._projAdd(e)},lf.prototype.mul=function(e){return this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve._wnafMul(this,e)},lf.prototype.mulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!1)},lf.prototype.jmulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!0)},lf.prototype.normalize=function(){if(this.zOne)return this;var e=this.z.redInvm();return this.x=this.x.redMul(e),this.y=this.y.redMul(e),this.t&&(this.t=this.t.redMul(e)),this.z=this.curve.one,this.zOne=!0,this},lf.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},lf.prototype.getX=function(){return this.normalize(),this.x.fromRed()},lf.prototype.getY=function(){return this.normalize(),this.y.fromRed()},lf.prototype.eq=function(e){return this===e||0===this.getX().cmp(e.getX())&&0===this.getY().cmp(e.getY())},lf.prototype.eqXToP=function(e){var t=e.toRed(this.curve.red).redMul(this.z);if(0===this.x.cmp(t))return!0;for(var r=e.clone(),i=this.curve.redN.redMul(this.z);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(t.redIAdd(i),0===this.x.cmp(t))return!0}},lf.prototype.toP=lf.prototype.normalize,lf.prototype.mixedAdd=lf.prototype.add;var pf=mt((function(e,t){var r=t;r.base=Qd,r.short=nf,r.mont=cf,r.edwards=ff})),yf=At.rotl32,bf=At.sum32,mf=At.sum32_5,gf=Dt.ft_1,wf=xt.BlockHash,vf=[1518500249,1859775393,2400959708,3395469782];function _f(){if(!(this instanceof _f))return new _f;wf.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=Array(80)}At.inherits(_f,wf);var kf=_f;_f.blockSize=512,_f.outSize=160,_f.hmacStrength=80,_f.padLength=64,_f.prototype._update=function(e,t){for(var r=this.W,i=0;i<16;i++)r[i]=e[t+i];for(;i<r.length;i++)r[i]=yf(r[i-3]^r[i-8]^r[i-14]^r[i-16],1);var n=this.h[0],a=this.h[1],s=this.h[2],o=this.h[3],c=this.h[4];for(i=0;i<r.length;i++){var u=~~(i/20),h=mf(yf(n,5),gf(u,a,s,o),c,r[i],vf[u]);c=o,o=s,s=yf(a,30),a=n,n=h}this.h[0]=bf(this.h[0],n),this.h[1]=bf(this.h[1],a),this.h[2]=bf(this.h[2],s),this.h[3]=bf(this.h[3],o),this.h[4]=bf(this.h[4],c)},_f.prototype._digest=function(e){return"hex"===e?At.toHex32(this.h,"big"):At.split32(this.h,"big")};var Af={sha1:kf,sha224:Gt,sha256:Wt,sha384:_r,sha512:or};function Sf(e,t,r){if(!(this instanceof Sf))return new Sf(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(At.toArray(t,r))}var Ef=Sf;Sf.prototype._init=function(e){e.length>this.blockSize&&(e=(new this.Hash).update(e).digest()),pt(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(this.inner=(new this.Hash).update(e),t=0;t<e.length;t++)e[t]^=106;this.outer=(new this.Hash).update(e)},Sf.prototype.update=function(e,t){return this.inner.update(e,t),this},Sf.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)};var xf=mt((function(e,t){var r=t;r.utils=At,r.common=xt,r.sha=Af,r.ripemd=Tr,r.hmac=Ef,r.sha1=r.sha.sha1,r.sha256=r.sha.sha256,r.sha224=r.sha.sha224,r.sha384=r.sha.sha384,r.sha512=r.sha.sha512,r.ripemd160=r.ripemd.ripemd160})),Pf={doubles:{step:4,points:[["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a","f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508","11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739","d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c","4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda","96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa","5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0","cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d","9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d","e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1","9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0","5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047","10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862","283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7","7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd","56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83","7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a","53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8","bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d","4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725","7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754","4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c","17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6","6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39","c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891","893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b","febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03","2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d","eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070","7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4","e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da","662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11","1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e","efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41","2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef","67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8","db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d","648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96","35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd","ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5","9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266","40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71","34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac","c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751","1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e","493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241","c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3","be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f","4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19","aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be","b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9","6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2","8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13","7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c","ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba","2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151","e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073","d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458","38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b","69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366","d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa","40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0","620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787","7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e","ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]},naf:{wnd:7,points:[["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9","388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4","d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc","6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe","cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb","d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8","ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e","581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34","4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c","85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5","321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f","2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714","73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729","a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db","2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4","e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5","b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479","2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d","80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f","1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb","d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9","eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963","758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74","958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530","e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b","5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247","cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1","cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120","4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435","91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18","673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8","59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb","3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f","55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143","efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba","e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45","f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a","744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e","c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8","e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c","30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519","e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab","100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca","ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf","8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610","68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4","f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c","d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940","edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980","a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3","66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf","9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63","4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448","fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf","5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5","8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6","8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5","5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99","f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51","f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5","42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5","204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997","4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881","73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5","39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66","d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726","ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede","6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94","60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31","3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51","b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252","ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5","cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b","6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4","322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f","6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889","2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246","b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984","998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a","b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030","bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197","6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593","c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef","21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38","60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a","49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111","5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502","7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea","be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26","8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986","39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e","62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4","25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda","ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859","cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f","f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c","6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942","fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a","1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80","5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d","438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1","cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63","c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352","6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193","ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00","9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58","ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7","d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8","c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e","67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d","cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b","299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f","f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6","462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297","62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a","7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c","ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52","4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb","bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065","bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917","603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9","cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3","553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57","712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66","ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8","9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721","9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180","4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]}},Mf=mt((function(e,t){var r,i=t,n=Wd.assert;function a(e){if("short"===e.type)this.curve=new pf.short(e);else if("edwards"===e.type)this.curve=new pf.edwards(e);else{if("mont"!==e.type)throw Error("Unknown curve type.");this.curve=new pf.mont(e)}this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,n(this.g.validate(),"Invalid curve"),n(this.g.mul(this.n).isInfinity(),"Invalid curve, n*G != O")}function s(e,t){Object.defineProperty(i,e,{configurable:!0,enumerable:!0,get:function(){var r=new a(t);return Object.defineProperty(i,e,{configurable:!0,enumerable:!0,value:r}),r}})}i.PresetCurve=a,s("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:xf.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),s("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:xf.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),s("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:xf.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),s("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:xf.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),s("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:xf.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),s("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",cofactor:"8",hash:xf.sha256,gRed:!1,g:["9"]}),s("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",cofactor:"8",hash:xf.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]}),s("brainpoolP256r1",{type:"short",prime:null,p:"A9FB57DB A1EEA9BC 3E660A90 9D838D72 6E3BF623 D5262028 2013481D 1F6E5377",a:"7D5A0975 FC2C3057 EEF67530 417AFFE7 FB8055C1 26DC5C6C E94A4B44 F330B5D9",b:"26DC5C6C E94A4B44 F330B5D9 BBD77CBF 95841629 5CF7E1CE 6BCCDC18 FF8C07B6",n:"A9FB57DB A1EEA9BC 3E660A90 9D838D71 8C397AA3 B561A6F7 901E0E82 974856A7",hash:xf.sha256,gRed:!1,g:["8BD2AEB9CB7E57CB2C4B482FFC81B7AFB9DE27E1E3BD23C23A4453BD9ACE3262","547EF835C3DAC4FD97F8461A14611DC9C27745132DED8E545C1D54C72F046997"]}),s("brainpoolP384r1",{type:"short",prime:null,p:"8CB91E82 A3386D28 0F5D6F7E 50E641DF 152F7109 ED5456B4 12B1DA19 7FB71123ACD3A729 901D1A71 87470013 3107EC53",a:"7BC382C6 3D8C150C 3C72080A CE05AFA0 C2BEA28E 4FB22787 139165EF BA91F90F8AA5814A 503AD4EB 04A8C7DD 22CE2826",b:"04A8C7DD 22CE2826 8B39B554 16F0447C 2FB77DE1 07DCD2A6 2E880EA5 3EEB62D57CB43902 95DBC994 3AB78696 FA504C11",n:"8CB91E82 A3386D28 0F5D6F7E 50E641DF 152F7109 ED5456B3 1F166E6C AC0425A7CF3AB6AF 6B7FC310 3B883202 E9046565",hash:xf.sha384,gRed:!1,g:["1D1C64F068CF45FFA2A63A81B7C13F6B8847A3E77EF14FE3DB7FCAFE0CBD10E8E826E03436D646AAEF87B2E247D4AF1E","8ABE1D7520F9C2A45CB1EB8E95CFD55262B70B29FEEC5864E19C054FF99129280E4646217791811142820341263C5315"]}),s("brainpoolP512r1",{type:"short",prime:null,p:"AADD9DB8 DBE9C48B 3FD4E6AE 33C9FC07 CB308DB3 B3C9D20E D6639CCA 703308717D4D9B00 9BC66842 AECDA12A E6A380E6 2881FF2F 2D82C685 28AA6056 583A48F3",a:"7830A331 8B603B89 E2327145 AC234CC5 94CBDD8D 3DF91610 A83441CA EA9863BC2DED5D5A A8253AA1 0A2EF1C9 8B9AC8B5 7F1117A7 2BF2C7B9 E7C1AC4D 77FC94CA",b:"3DF91610 A83441CA EA9863BC 2DED5D5A A8253AA1 0A2EF1C9 8B9AC8B5 7F1117A72BF2C7B9 E7C1AC4D 77FC94CA DC083E67 984050B7 5EBAE5DD 2809BD63 8016F723",n:"AADD9DB8 DBE9C48B 3FD4E6AE 33C9FC07 CB308DB3 B3C9D20E D6639CCA 70330870553E5C41 4CA92619 41866119 7FAC1047 1DB1D381 085DDADD B5879682 9CA90069",hash:xf.sha512,gRed:!1,g:["81AEE4BDD82ED9645A21322E9C4C6A9385ED9F70B5D916C1B43B62EEF4D0098EFF3B1F78E2D0D48D50D1687B93B97D5F7C6D5047406A5E688B352209BCB9F822","7DDE385D566332ECC0EABFA9CF7822FDF209F70024A57B1AA000C55B881F8111B2DCDE494A5F485E5BCA4BD88A2763AED1CA2B2FA8F0540678CD1E0F3AD80892"]});try{r=Pf}catch(e){r=void 0}s("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:xf.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",r]})}));function Cf(e){if(!(this instanceof Cf))return new Cf(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=jd.toArray(e.entropy,e.entropyEnc||"hex"),r=jd.toArray(e.nonce,e.nonceEnc||"hex"),i=jd.toArray(e.pers,e.persEnc||"hex");pt(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,i)}var Kf=Cf;Cf.prototype._init=function(e,t,r){var i=e.concat(t).concat(r);this.K=Array(this.outLen/8),this.V=Array(this.outLen/8);for(var n=0;n<this.V.length;n++)this.K[n]=0,this.V[n]=1;this._update(i),this._reseed=1,this.reseedInterval=281474976710656},Cf.prototype._hmac=function(){return new xf.hmac(this.hash,this.K)},Cf.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},Cf.prototype.reseed=function(e,t,r,i){"string"!=typeof t&&(i=r,r=t,t=null),e=jd.toArray(e,t),r=jd.toArray(r,i),pt(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(r||[])),this._reseed=1},Cf.prototype.generate=function(e,t,r,i){if(this._reseed>this.reseedInterval)throw Error("Reseed is required");"string"!=typeof t&&(i=r,r=t,t=null),r&&(r=jd.toArray(r,i||"hex"),this._update(r));for(var n=[];n.length<e;)this.V=this._hmac().update(this.V).digest(),n=n.concat(this.V);var a=n.slice(0,e);return this._update(r),this._reseed++,jd.encode(a,t)};var Df=Wd.assert;function Rf(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var If=Rf;Rf.fromPublic=function(e,t,r){return t instanceof Rf?t:new Rf(e,{pub:t,pubEnc:r})},Rf.fromPrivate=function(e,t,r){return t instanceof Rf?t:new Rf(e,{priv:t,privEnc:r})},Rf.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},Rf.prototype.getPublic=function(e,t){return this.pub||(this.pub=this.ec.g.mul(this.priv)),e?this.pub.encode(e,t):this.pub},Rf.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},Rf.prototype._importPrivate=function(e,t){if(this.priv=new qd(e,t||16),"mont"===this.ec.curve.type){var r=this.ec.curve.one,i=r.ushln(252).sub(r).ushln(3);this.priv=this.priv.or(r.ushln(254)),this.priv=this.priv.and(i)}else this.priv=this.priv.umod(this.ec.curve.n)},Rf.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?Df(e.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||Df(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y));this.pub=this.ec.curve.decodePoint(e,t)},Rf.prototype.derive=function(e){return e.mul(this.priv).getX()},Rf.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},Rf.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},Rf.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var Uf=Wd.assert;function Bf(e,t){if(e instanceof Bf)return e;this._importDER(e,t)||(Uf(e.r&&e.s,"Signature without r or s"),this.r=new qd(e.r,16),this.s=new qd(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}var Tf=Bf;function zf(){this.place=0}function qf(e,t){var r=e[t.place++];if(!(128&r))return r;for(var i=15&r,n=0,a=0,s=t.place;a<i;a++,s++)n<<=8,n|=e[s];return t.place=s,n}function Ff(e){for(var t=0,r=e.length-1;!e[t]&&!(128&e[t+1])&&t<r;)t++;return 0===t?e:e.slice(t)}function Of(e,t){if(t<128)e.push(t);else{var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|r);--r;)e.push(t>>>(r<<3)&255);e.push(t)}}Bf.prototype._importDER=function(e,t){e=Wd.toArray(e,t);var r=new zf;if(48!==e[r.place++])return!1;if(qf(e,r)+r.place!==e.length)return!1;if(2!==e[r.place++])return!1;var i=qf(e,r),n=e.slice(r.place,i+r.place);if(r.place+=i,2!==e[r.place++])return!1;var a=qf(e,r);if(e.length!==a+r.place)return!1;var s=e.slice(r.place,a+r.place);return 0===n[0]&&128&n[1]&&(n=n.slice(1)),0===s[0]&&128&s[1]&&(s=s.slice(1)),this.r=new qd(n),this.s=new qd(s),this.recoveryParam=null,!0},Bf.prototype.toDER=function(e){var t=this.r.toArray(),r=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r)),t=Ff(t),r=Ff(r);!(r[0]||128&r[1]);)r=r.slice(1);var i=[2];Of(i,t.length),(i=i.concat(t)).push(2),Of(i,r.length);var n=i.concat(r),a=[48];return Of(a,n.length),a=a.concat(n),Wd.encode(a,e)};var Nf=Wd.assert;function Lf(e){if(!(this instanceof Lf))return new Lf(e);"string"==typeof e&&(Nf(Mf.hasOwnProperty(e),"Unknown curve "+e),e=Mf[e]),e instanceof Mf.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}var jf=Lf;Lf.prototype.keyPair=function(e){return new If(this,e)},Lf.prototype.keyFromPrivate=function(e,t){return If.fromPrivate(this,e,t)},Lf.prototype.keyFromPublic=function(e,t){return If.fromPublic(this,e,t)},Lf.prototype.genKeyPair=function(e){e||(e={});var t=new Kf({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||Hd(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()});if("mont"===this.curve.type){var r=new qd(t.generate(32));return this.keyFromPrivate(r)}for(var i=this.n.byteLength(),n=this.n.sub(new qd(2));;){if(!((r=new qd(t.generate(i))).cmp(n)>0))return r.iaddn(1),this.keyFromPrivate(r)}},Lf.prototype._truncateToN=function(e,t,r){var i=(r=r||8*e.byteLength())-this.n.bitLength();return i>0&&(e=e.ushrn(i)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},Lf.prototype.truncateMsg=function(e){var t;return e instanceof Uint8Array?(t=8*e.byteLength,e=this._truncateToN(new qd(e,16),!1,t)):"string"==typeof e?(t=4*e.length,e=this._truncateToN(new qd(e,16),!1,t)):e=this._truncateToN(new qd(e,16)),e},Lf.prototype.sign=function(e,t,r,i){"object"==typeof r&&(i=r,r=null),i||(i={}),t=this.keyFromPrivate(t,r),e=this.truncateMsg(e);for(var n=this.n.byteLength(),a=t.getPrivate().toArray("be",n),s=e.toArray("be",n),o=new Kf({hash:this.hash,entropy:a,nonce:s,pers:i.pers,persEnc:i.persEnc||"utf8"}),c=this.n.sub(new qd(1)),u=0;;u++){var h=i.k?i.k(u):new qd(o.generate(this.n.byteLength()));if(!((h=this._truncateToN(h,!0)).cmpn(1)<=0||h.cmp(c)>=0)){var d=this.g.mul(h);if(!d.isInfinity()){var f=d.getX(),l=f.umod(this.n);if(0!==l.cmpn(0)){var p=h.invm(this.n).mul(l.mul(t.getPrivate()).iadd(e));if(0!==(p=p.umod(this.n)).cmpn(0)){var y=(d.getY().isOdd()?1:0)|(0!==f.cmp(l)?2:0);return i.canonical&&p.cmp(this.nh)>0&&(p=this.n.sub(p),y^=1),new Tf({r:l,s:p,recoveryParam:y})}}}}}},Lf.prototype.verify=function(e,t,r,i){return r=this.keyFromPublic(r,i),t=new Tf(t,"hex"),this._verify(this.truncateMsg(e),t,r)||this._verify(this._truncateToN(new qd(e,16)),t,r)},Lf.prototype._verify=function(e,t,r){var i=t.r,n=t.s;if(i.cmpn(1)<0||i.cmp(this.n)>=0)return!1;if(n.cmpn(1)<0||n.cmp(this.n)>=0)return!1;var a,s=n.invm(this.n),o=s.mul(e).umod(this.n),c=s.mul(i).umod(this.n);return this.curve._maxwellTrick?!(a=this.g.jmulAdd(o,r.getPublic(),c)).isInfinity()&&a.eqXToP(i):!(a=this.g.mulAdd(o,r.getPublic(),c)).isInfinity()&&0===a.getX().umod(this.n).cmp(i)},Lf.prototype.recoverPubKey=function(e,t,r,i){Nf((3&r)===r,"The recovery param is more than two bits"),t=new Tf(t,i);var n=this.n,a=new qd(e),s=t.r,o=t.s,c=1&r,u=r>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&u)throw Error("Unable to find sencond key candinate");s=u?this.curve.pointFromX(s.add(this.curve.n),c):this.curve.pointFromX(s,c);var h=t.r.invm(n),d=n.sub(a).mul(h).umod(n),f=o.mul(h).umod(n);return this.g.mulAdd(d,s,f)},Lf.prototype.getKeyRecoveryParam=function(e,t,r,i){if(null!==(t=new Tf(t,i)).recoveryParam)return t.recoveryParam;for(var n=0;n<4;n++){var a;try{a=this.recoverPubKey(e,t,n)}catch(e){continue}if(a.eq(r))return n}throw Error("Unable to find valid recovery factor")};var Wf=Wd.assert,Hf=Wd.parseBytes,Gf=Wd.cachedProperty;function Vf(e,t){if(this.eddsa=e,t.hasOwnProperty("secret")&&(this._secret=Hf(t.secret)),e.isPoint(t.pub))this._pub=t.pub;else if(this._pubBytes=Hf(t.pub),this._pubBytes&&33===this._pubBytes.length&&64===this._pubBytes[0]&&(this._pubBytes=this._pubBytes.slice(1,33)),this._pubBytes&&32!==this._pubBytes.length)throw Error("Unknown point compression format")}Vf.fromPublic=function(e,t){return t instanceof Vf?t:new Vf(e,{pub:t})},Vf.fromSecret=function(e,t){return t instanceof Vf?t:new Vf(e,{secret:t})},Vf.prototype.secret=function(){return this._secret},Gf(Vf,"pubBytes",(function(){return this.eddsa.encodePoint(this.pub())})),Gf(Vf,"pub",(function(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())})),Gf(Vf,"privBytes",(function(){var e=this.eddsa,t=this.hash(),r=e.encodingLength-1,i=t.slice(0,e.encodingLength);return i[0]&=248,i[r]&=127,i[r]|=64,i})),Gf(Vf,"priv",(function(){return this.eddsa.decodeInt(this.privBytes())})),Gf(Vf,"hash",(function(){return this.eddsa.hash().update(this.secret()).digest()})),Gf(Vf,"messagePrefix",(function(){return this.hash().slice(this.eddsa.encodingLength)})),Vf.prototype.sign=function(e){return Wf(this._secret,"KeyPair can only verify"),this.eddsa.sign(e,this)},Vf.prototype.verify=function(e,t){return this.eddsa.verify(e,t,this)},Vf.prototype.getSecret=function(e){return Wf(this._secret,"KeyPair is public only"),Wd.encode(this.secret(),e)},Vf.prototype.getPublic=function(e,t){return Wd.encode((t?[64]:[]).concat(this.pubBytes()),e)};var Zf=Vf,Yf=Wd.assert,$f=Wd.cachedProperty,Xf=Wd.parseBytes;function Jf(e,t){this.eddsa=e,"object"!=typeof t&&(t=Xf(t)),Array.isArray(t)&&(t={R:t.slice(0,e.encodingLength),S:t.slice(e.encodingLength)}),Yf(t.R&&t.S,"Signature without R or S"),e.isPoint(t.R)&&(this._R=t.R),t.S instanceof qd&&(this._S=t.S),this._Rencoded=Array.isArray(t.R)?t.R:t.Rencoded,this._Sencoded=Array.isArray(t.S)?t.S:t.Sencoded}$f(Jf,"S",(function(){return this.eddsa.decodeInt(this.Sencoded())})),$f(Jf,"R",(function(){return this.eddsa.decodePoint(this.Rencoded())})),$f(Jf,"Rencoded",(function(){return this.eddsa.encodePoint(this.R())})),$f(Jf,"Sencoded",(function(){return this.eddsa.encodeInt(this.S())})),Jf.prototype.toBytes=function(){return this.Rencoded().concat(this.Sencoded())},Jf.prototype.toHex=function(){return Wd.encode(this.toBytes(),"hex").toUpperCase()};var Qf=Jf,el=Wd.assert,tl=Wd.parseBytes;function rl(e){if(el("ed25519"===e,"only tested with ed25519 so far"),!(this instanceof rl))return new rl(e);e=Mf[e].curve;this.curve=e,this.g=e.g,this.g.precompute(e.n.bitLength()+1),this.pointClass=e.point().constructor,this.encodingLength=Math.ceil(e.n.bitLength()/8),this.hash=xf.sha512}var il=rl;rl.prototype.sign=function(e,t){e=tl(e);var r=this.keyFromSecret(t),i=this.hashInt(r.messagePrefix(),e),n=this.g.mul(i),a=this.encodePoint(n),s=this.hashInt(a,r.pubBytes(),e).mul(r.priv()),o=i.add(s).umod(this.curve.n);return this.makeSignature({R:n,S:o,Rencoded:a})},rl.prototype.verify=function(e,t,r){e=tl(e),t=this.makeSignature(t);var i=this.keyFromPublic(r),n=this.hashInt(t.Rencoded(),i.pubBytes(),e),a=this.g.mul(t.S());return t.R().add(i.pub().mul(n)).eq(a)},rl.prototype.hashInt=function(){for(var e=this.hash(),t=0;t<arguments.length;t++)e.update(arguments[t]);return Wd.intFromLE(e.digest()).umod(this.curve.n)},rl.prototype.keyPair=function(e){return new Zf(this,e)},rl.prototype.keyFromPublic=function(e){return Zf.fromPublic(this,e)},rl.prototype.keyFromSecret=function(e){return Zf.fromSecret(this,e)},rl.prototype.genKeyPair=function(e){e||(e={});var t=new Kf({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||Hd(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.curve.n.toArray()});return this.keyFromSecret(t.generate(32))},rl.prototype.makeSignature=function(e){return e instanceof Qf?e:new Qf(this,e)},rl.prototype.encodePoint=function(e){var t=e.getY().toArray("le",this.encodingLength);return t[this.encodingLength-1]|=e.getX().isOdd()?128:0,t},rl.prototype.decodePoint=function(e){var t=(e=Wd.parseBytes(e)).length-1,r=e.slice(0,t).concat(-129&e[t]),i=0!=(128&e[t]),n=Wd.intFromLE(r);return this.curve.pointFromY(n,i)},rl.prototype.encodeInt=function(e){return e.toArray("le",this.encodingLength)},rl.prototype.decodeInt=function(e){return Wd.intFromLE(e)},rl.prototype.isPoint=function(e){return e instanceof this.pointClass};var nl=mt((function(e,t){var r=t;r.utils=Wd,r.rand=Hd,r.curve=pf,r.curves=Mf,r.ec=jf,r.eddsa=il})),al=/*#__PURE__*/Object.freeze({__proto__:null,default:nl,__moduleExports:nl});exports.AEADEncryptedDataPacket=bo,exports.CleartextMessage=uc,exports.CompressedDataPacket=no,exports.Key=Qo,exports.LiteralDataPacket=Gs,exports.MarkerPacket=class{static get tag(){return ge.packet.marker}read(e){return 80===e[0]&&71===e[1]&&80===e[2]}},exports.Message=ac,exports.OnePassSignaturePacket=ro,exports.PacketList=Do,exports.PublicKeyEncryptedSessionKeyPacket=mo,exports.PublicKeyPacket=vo,exports.PublicSubkeyPacket=Ao,exports.SecretKeyPacket=Eo,exports.SecretSubkeyPacket=Co,exports.Signature=Io,exports.SignaturePacket=eo,exports.SymEncryptedIntegrityProtectedDataPacket=po,exports.SymEncryptedSessionKeyPacket=wo,exports.SymmetricallyEncryptedDataPacket=ko,exports.TrustPacket=class{static get tag(){return ge.packet.trust}read(){}},exports.UserAttributePacket=So,exports.UserIDPacket=Mo,exports.armor=Me,exports.config=we,exports.createCleartextMessage=async function({text:e}){if(!e)throw Error("createCleartextMessage: must pass options object containing `text`");if(!ue.isString(e))throw Error("createCleartextMessage: options.text must be a string");return new uc(e)},exports.createMessage=async function({text:e,binary:t,filename:r,date:i=new Date,format:n=(void 0!==e?"utf8":"binary")}){let a=void 0!==e?e:t;if(void 0===a)throw Error("createMessage: must pass options object containing `text` or `binary`");if(e&&!ue.isString(e)&&!ue.isStream(e))throw Error("createMessage: options.text must be a string or stream");if(t&&!ue.isUint8Array(t)&&!ue.isStream(t))throw Error("createMessage: options.binary must be a Uint8Array or stream");const s=ue.isStream(a);s&&(await F(),a=N(a));const o=new Gs(i);void 0!==e?o.setText(a,n):o.setBytes(a,n),void 0!==r&&o.setFilename(r);const c=new Do;c.push(o);const u=new ac(c);return u.fromStream=s,u},exports.decrypt=function({message:e,privateKeys:t,passwords:r,sessionKeys:i,publicKeys:n,expectSigned:a=!1,format:s="utf8",signature:o=null,date:c=new Date,config:u}){return u={...we,...u},hc(e),n=fc(n),t=fc(t),r=fc(r),i=fc(i),e.decrypt(t,r,i,u).then((async function(t){n||(n=[]);const r={};if(r.signatures=o?await t.verifyDetached(o,n,c,u):await t.verify(n,c,u),r.data="binary"===s?t.getLiteralData():t.getText(),r.filename=t.getFilename(),pc(r,e),a){if(0===n.length)throw Error("Public keys are required to verify message signatures");if(0===r.signatures.length)throw Error("Message is not signed");r.data=j([r.data,ae(async()=>{await ue.anyPromise(r.signatures.map(e=>e.verified))})])}return r.data=await lc(r.data,e.fromStream,s),e.fromStream||await yc(r.signatures),r})).catch(bc.bind(null,"Error decrypting message"))},exports.decryptKey=async function({privateKey:e,passphrase:t,config:r}){if(r={...we,...r},!e.isPrivate())throw Error("Cannot decrypt a public key");const i=await e.clone(!0);try{const e=ue.isArray(t)?t:[t];return await Promise.all(i.getKeys().map(t=>ue.anyPromise(e.map(e=>t.keyPacket.decrypt(e))))),await i.validate(r),i}catch(e){return i.clearPrivateParams(),bc("Error decrypting private key",e)}},exports.decryptSessionKeys=function({message:e,privateKeys:t,passwords:r,config:i}){return i={...we,...i},hc(e),t=fc(t),r=fc(r),Promise.resolve().then((async function(){return e.decryptSessionKeys(t,r,i)})).catch(bc.bind(null,"Error decrypting session keys"))},exports.encrypt=function({message:e,publicKeys:t,privateKeys:r,passwords:i,sessionKey:n,armor:a=!0,detached:s=!1,signature:o=null,wildcard:c=!1,signingKeyIDs:u=[],encryptionKeyIDs:h=[],date:d=new Date,fromUserIDs:f=[],toUserIDs:l=[],config:p}){if(p={...we,...p},hc(e),t=fc(t),r=fc(r),i=fc(i),f=fc(f),l=fc(l),s)throw Error("detached option has been removed from openpgp.encrypt. Separately call openpgp.sign instead. Don't forget to remove privateKeys option as well.");return Promise.resolve().then((async function(){const s=e.fromStream;return r||(r=[]),(r.length||o)&&(e=await e.sign(r,o,u,d,f,p)),e=e.compress(await Oo("compression",t,d,l,p),p),e=await e.encrypt(t,i,n,c,h,d,l,p),lc(a?e.armor(p):e.write(),s,a?"utf8":"binary")})).catch(bc.bind(null,"Error encrypting message"))},exports.encryptKey=async function({privateKey:e,passphrase:t,config:r}){if(r={...we,...r},!e.isPrivate())throw Error("Cannot encrypt a public key");const i=await e.clone(!0);try{const e=i.getKeys(),n=ue.isArray(t)?t:Array(e.length).fill(t);if(n.length!==e.length)throw Error("Invalid number of passphrases for key");return await Promise.all(e.map(async(e,t)=>{const{keyPacket:i}=e;await i.encrypt(n[t],r),i.clearPrivateParams()})),i}catch(e){return i.clearPrivateParams(),bc("Error encrypting private key",e)}},exports.encryptSessionKey=function({data:e,algorithm:t,aeadAlgorithm:r,publicKeys:i,passwords:n,armor:a=!0,wildcard:s=!1,encryptionKeyIDs:o=[],date:c=new Date,toUserIDs:u=[],config:h}){return h={...we,...h},function(e,t){if(!ue.isUint8Array(e))throw Error("Parameter ["+(t||"data")+"] must be of type Uint8Array")}(e),function(e,t){if(!ue.isString(e))throw Error("Parameter ["+(t||"data")+"] must be of type String")}(t,"algorithm"),i=fc(i),n=fc(n),u=fc(u),Promise.resolve().then((async function(){const d=await ac.encryptSessionKey(e,t,r,i,n,s,o,c,u,h);return a?d.armor(h):d.write()})).catch(bc.bind(null,"Error encrypting session key"))},exports.enums=ge,exports.generateKey=function({userIDs:e=[],passphrase:t="",type:r="ecc",rsaBits:i=4096,curve:n="curve25519",keyExpirationTime:a=0,date:s=new Date,subkeys:o=[{}],config:c}){if(c={...we,...c},0===(e=fc(e)).length)throw Error("UserIDs are required for key generation");if("rsa"===r&&i<c.minRSABits)throw Error(`rsaBits should be at least ${c.minRSABits}, got: ${i}`);return async function(e,t){e.sign=!0,(e=Ho(e)).subkeys=e.subkeys.map((t,r)=>Ho(e.subkeys[r],e));let r=[Bo(e,t)];return r=r.concat(e.subkeys.map(e=>Uo(e,t))),Promise.all(r).then(r=>tc(r[0],r.slice(1),e,t))}({userIDs:e,passphrase:t,type:r,rsaBits:i,curve:n,keyExpirationTime:a,date:s,subkeys:o},c).then(async e=>{const t=await e.getRevocationCertificate(s,c);return e.revocationSignatures=[],{key:e,privateKeyArmored:e.armor(c),publicKeyArmored:e.toPublic().armor(c),revocationCertificate:t}}).catch(bc.bind(null,"Error generating keypair"))},exports.generateSessionKey=function({publicKeys:e,date:t=new Date,toUserIDs:r=[],config:i}){return i={...we,...i},e=fc(e),r=fc(r),Promise.resolve().then((async function(){return ac.generateSessionKey(e,t,r,i)})).catch(bc.bind(null,"Error generating session key"))},exports.readCleartextMessage=async function({cleartextMessage:e,config:t}){if(t={...we,...t},!e)throw Error("readCleartextMessage: must pass options object containing `cleartextMessage`");if(!ue.isString(e))throw Error("readCleartextMessage: options.cleartextMessage must be a string");const r=await Pe(e);if(r.type!==ge.armor.signed)throw Error("No cleartext signed message.");const i=new Do;await i.read(r.data,cc,void 0,t),function(e,t){const r=function(e){const r=e=>t=>e.hashAlgorithm===t;for(let i=0;i<t.length;i++)if(t[i].constructor.tag===ge.packet.signature&&!e.some(r(t[i])))return!1;return!0};let i=null,n=[];if(e.forEach((function(e){if(i=e.match(/Hash: (.+)/),!i)throw Error('Only "Hash" header allowed in cleartext signed message');i=i[1].replace(/\s/g,""),i=i.split(","),i=i.map((function(e){e=e.toLowerCase();try{return ge.write(ge.hash,e)}catch(t){throw Error("Unknown hash algorithm in armor header: "+e)}})),n=n.concat(i)})),!n.length&&!r([ge.hash.md5]))throw Error('If no "Hash" header in cleartext signed message, then only MD5 signatures allowed');if(n.length&&!r(n))throw Error("Hash algorithm mismatch in armor header and signature")}(r.headers,i);const n=new Io(i);return new uc(r.text,n)},exports.readKey=async function({armoredKey:e,binaryKey:t,config:r}){if(r={...we,...r},!e&&!t)throw Error("readKey: must pass options object containing `armoredKey` or `binaryKey`");if(e&&!ue.isString(e))throw Error("readKey: options.armoredKey must be a string");if(t&&!ue.isUint8Array(t))throw Error("readKey: options.binaryKey must be a Uint8Array");let i;if(e){const{type:t,data:n}=await Pe(e,r);if(t!==ge.armor.publicKey&&t!==ge.armor.privateKey)throw Error("Armored text not of type key");i=n}else i=t;const n=new Do;return await n.read(i,ec,void 0,r),new Qo(n)},exports.readKeys=async function({armoredKeys:e,binaryKeys:t,config:r}){r={...we,...r};let i=e||t;if(!i)throw Error("readKeys: must pass options object containing `armoredKeys` or `binaryKeys`");if(e&&!ue.isString(e))throw Error("readKeys: options.armoredKeys must be a string");if(t&&!ue.isUint8Array(t))throw Error("readKeys: options.binaryKeys must be a Uint8Array");if(e){const{type:t,data:n}=await Pe(e,r);if(t!==ge.armor.publicKey&&t!==ge.armor.privateKey)throw Error("Armored text not of type key");i=n}const n=[],a=new Do;await a.read(i,ec,void 0,r);const s=a.indexOfTag(ge.packet.publicKey,ge.packet.secretKey);if(0===s.length)throw Error("No key packet found");for(let e=0;e<s.length;e++){const t=a.slice(s[e],s[e+1]),r=new Qo(t);n.push(r)}return n},exports.readMessage=async function({armoredMessage:e,binaryMessage:t,config:r}){r={...we,...r};let i=e||t;if(!i)throw Error("readMessage: must pass options object containing `armoredMessage` or `binaryMessage`");if(e&&!ue.isString(e)&&!ue.isStream(e))throw Error("readMessage: options.armoredMessage must be a string or stream");if(t&&!ue.isUint8Array(t)&&!ue.isStream(t))throw Error("readMessage: options.binaryMessage must be a Uint8Array or stream");const n=ue.isStream(i);if(n&&(await F(),i=N(i)),e){const{type:e,data:t}=await Pe(i,r);if(e!==ge.armor.message)throw Error("Armored text not of type message");i=t}const a=new Do;await a.read(i,rc,n,r);const s=new ac(a);return s.fromStream=n,s},exports.readSignature=async function({armoredSignature:e,binarySignature:t,config:r}){r={...we,...r};let i=e||t;if(!i)throw Error("readSignature: must pass options object containing `armoredSignature` or `binarySignature`");if(e&&!ue.isString(e))throw Error("readSignature: options.armoredSignature must be a string");if(t&&!ue.isUint8Array(t))throw Error("readSignature: options.binarySignature must be a Uint8Array");if(e){const{type:e,data:t}=await Pe(i,r);if(e!==ge.armor.signature)throw Error("Armored text not of type signature");i=t}const n=new Do;return await n.read(i,Ro,void 0,r),new Io(n)},exports.reformatKey=function({privateKey:e,userIDs:t=[],passphrase:r="",keyExpirationTime:i=0,date:n,config:a}){return a={...we,...a},async function(e,t){e=a(e);const{privateKey:r}=e;if(r.isPublic())throw Error("Cannot reformat a public key");if(r.primaryKey.isDummy())throw Error("Cannot reformat a gnu-dummy primary key");if(!r.getKeys().every(({keyPacket:e})=>e.isDecrypted()))throw Error("Key is not decrypted");const i=r.keyPacket;e.subkeys||(e.subkeys=await Promise.all(r.subKeys.map(async e=>{const r=e.keyPacket,n={key:i,bind:r},a=await To(e.bindingSignatures,i,ge.signature.subkeyBinding,n,null,t).catch(()=>({}));return{sign:a.keyFlags&&a.keyFlags[0]&ge.keyFlags.signData}})));const n=r.subKeys.map(e=>e.keyPacket);if(e.subkeys.length!==n.length)throw Error("Number of subkey options does not match number of subkeys");return e.subkeys=e.subkeys.map(t=>a(t,e)),tc(i,n,e,t);function a(e,t={}){return e.keyExpirationTime=e.keyExpirationTime||t.keyExpirationTime,e.passphrase=ue.isString(e.passphrase)?e.passphrase:t.passphrase,e.date=e.date||t.date,e}}({privateKey:e,userIDs:t=fc(t),passphrase:r,keyExpirationTime:i,date:n},a).then(async e=>{const t=await e.getRevocationCertificate(n,a);return e.revocationSignatures=[],{key:e,privateKeyArmored:e.armor(a),publicKeyArmored:e.toPublic().armor(a),revocationCertificate:t}}).catch(bc.bind(null,"Error reformatting keypair"))},exports.revokeKey=function({key:e,revocationCertificate:t,reasonForRevocation:r,config:i}){return i={...we,...i},Promise.resolve().then(()=>t?e.applyRevocationCertificate(t,i):e.revoke(r,void 0,i)).then(async e=>{if(e.isPrivate()){const t=e.toPublic();return{privateKey:e,privateKeyArmored:e.armor(i),publicKey:t,publicKeyArmored:t.armor(i)}}return{publicKey:e,publicKeyArmored:e.armor(i)}}).catch(bc.bind(null,"Error revoking key"))},exports.sign=function({message:e,privateKeys:t,armor:r=!0,detached:i=!1,signingKeyIDs:n=[],date:a=new Date,fromUserIDs:s=[],config:o}){if(o={...we,...o},dc(e),e instanceof uc&&!r)throw Error("Can't sign non-armored cleartext message");if(e instanceof uc&&i)throw Error("Can't detach-sign a cleartext message");return t=fc(t),s=fc(s),Promise.resolve().then((async function(){let c;return c=i?await e.signDetached(t,void 0,n,a,s,o):await e.sign(t,void 0,n,a,s,o),c=r?c.armor(o):c.write(),i&&(c=X(e.packets.write(),async(e,t)=>{await Promise.all([V(c,t),ie(e).catch(()=>{})])})),lc(c,e.fromStream,r?"utf8":"binary")})).catch(bc.bind(null,"Error signing message"))},exports.stream=mc,exports.unarmor=Pe,exports.verify=function({message:e,publicKeys:t,expectSigned:r=!1,format:i="utf8",signature:n=null,date:a=new Date,config:s}){if(s={...we,...s},dc(e),e instanceof uc&&"binary"===i)throw Error("Can't return cleartext message data as binary");if(e instanceof uc&&n)throw Error("Can't verify detached cleartext signature");return t=fc(t),Promise.resolve().then((async function(){const o={};if(o.signatures=n?await e.verifyDetached(n,t,a,s):await e.verify(t,a,s),o.data="binary"===i?e.getLiteralData():e.getText(),e.fromStream&&pc(o,e),r){if(0===o.signatures.length)throw Error("Message is not signed");o.data=j([o.data,ae(async()=>{await ue.anyPromise(o.signatures.map(e=>e.verified))})])}return o.data=await lc(o.data,e.fromStream,i),e.fromStream||await yc(o.signatures),o})).catch(bc.bind(null,"Error verifying signed message"))};
//# sourceMappingURL=openpgp.min.js.map


/***/ }),

/***/ 118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint-disable node/no-deprecated-api */



var buffer = __webpack_require__(293)
var Buffer = buffer.Buffer

var safer = {}

var key

for (key in buffer) {
  if (!buffer.hasOwnProperty(key)) continue
  if (key === 'SlowBuffer' || key === 'Buffer') continue
  safer[key] = buffer[key]
}

var Safer = safer.Buffer = {}
for (key in Buffer) {
  if (!Buffer.hasOwnProperty(key)) continue
  if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue
  Safer[key] = Buffer[key]
}

safer.Buffer.prototype = Buffer.prototype

if (!Safer.from || Safer.from === Uint8Array.from) {
  Safer.from = function (value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value)
    }
    if (value && typeof value.length === 'undefined') {
      throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value)
    }
    return Buffer(value, encodingOrOffset, length)
  }
}

if (!Safer.alloc) {
  Safer.alloc = function (size, fill, encoding) {
    if (typeof size !== 'number') {
      throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size)
    }
    if (size < 0 || size >= 2 * (1 << 30)) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"')
    }
    var buf = Buffer(size)
    if (!fill || fill.length === 0) {
      buf.fill(0)
    } else if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
    return buf
  }
}

if (!safer.kStringMaxLength) {
  try {
    safer.kStringMaxLength = process.binding('buffer').kStringMaxLength
  } catch (e) {
    // we can't determine kStringMaxLength in environments where process.binding
    // is unsupported, so let's not set it
  }
}

if (!safer.constants) {
  safer.constants = {
    MAX_LENGTH: safer.kMaxLength
  }
  if (safer.kStringMaxLength) {
    safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength
  }
}

module.exports = safer


/***/ }),

/***/ 357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 293:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 129:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 417:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 614:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 87:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 669:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(109);
/******/ })()
;