const {
	contextBridge,
	ipcRenderer
} = require("electron");

contextBridge.exposeInMainWorld(
	"electronAPI", {
		send: (channel: string, message: string) => {
			let validChannels = ["toMain"];
			if (validChannels.includes(channel)) {
					ipcRenderer.send(channel, message);
			}
		},
		receive: (channel: string, func: Function) => {
			let validChannels = ["fromMain" ];
			if (validChannels.includes(channel)) {
				ipcRenderer.on(channel, (event, ...args) => func(...args));
			} else { console.log('invalid channel') }
		}
	}
);