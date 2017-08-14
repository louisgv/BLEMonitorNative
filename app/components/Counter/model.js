import autobind from 'autobind-decorator'
import {
	action,
	reaction,
	observable,
	observe,
	computed,
	autorun
} from 'mobx';
import {
	List
} from 'immutable';

import {BleManager} from 'react-native-ble-plx';

@autobind
class Model {
	manager = new BleManager()
	@observable deviceList = List([]);
	constructor() {

	}
	scanAndConnect() {
		this.manager.startDeviceScan(null, null, (error, device) => {
			if(error) {
				// Handle error (scanning will be stopped automatically)
				return
			}
			this.addDevice(device)
		});
	}
	enableSubscription() {
		const subscription = this.manager.onStateChange((state) => {
			if(state === 'PoweredOn') {
				this.scanAndConnect();
				subscription.remove();
			}
		}, true);
	}
	@action addDevice(device) {
		this.deviceList = this.deviceList.unshift(device);
	}
}
export default new Model();
