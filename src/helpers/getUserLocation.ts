export const getUserlocation = async():Promise<[number, number]> => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				resolve([coords.longitude, coords.latitude])
			},
			(err) => {
				alert('cannot access to your current position')
				console.log(err)
				reject();
			}
		)
	})
}
