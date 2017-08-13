import autobind from 'autobind-decorator'
import {
	action,
	reaction,
	observable,
	observe,
	computed,
	autorun
} from 'mobx';

@autobind
class Model {
	manager = new BleManager()

	constructor() {
		reaction(() => this.counter, this.increaseTotal);
	}

	scanAndConnect() {
		this.manager.startDeviceScan(null, null, (error, device) => {
			if(error) {
				// Handle error (scanning will be stopped automatically)
				return
			}
			console.log(device);
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
}
export default new Model();
