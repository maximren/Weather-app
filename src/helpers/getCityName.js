const getCityName = (results) => {
	if (results[1]) {
		let city = null
		let c, lc, component;
		for (let r = 0, rl = results.length; r < rl; r += 1) {
			let result = results[r];

			if (!city && result.types[0] === 'locality') {
				for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
					component = result.address_components[c];

					if (component.types[0] === 'locality') {
						city = component.long_name;
						break;
					}
				}
			}
			else if (!city && result.types[0] === 'administrative_area_level_1') {
				for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
					component = result.address_components[c];
				}
			}
			if (city) {
				break;
			}
		}
		return city;
	}
}

export default getCityName;