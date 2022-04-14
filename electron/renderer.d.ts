export interface ElectronAPI {
	send: (channel: string, message: string) => void,
	receive: (channel: string, func: Function) => void,
}

declare global {
	interface Window {
		electronAPI: IElectronAPI
	}
}