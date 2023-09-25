import axios from "axios";

type User = {
	id?: number;
	name: string;
	email: string;
	password: string;
	role?: string;
	avatar?: string;
};
const createUser = async (details: User): Promise<void> => {
	let config = {
		method: "post",
		url: "https://api.escuelajs.co/api/v1/users/",
		headers: {
			"Content-Type": "application/json",
		},
		data: JSON.stringify({
			...details,
			avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
		}),
	};
	try {
		const response = await axios.request(config);
		const data = JSON.stringify(response.data);
		console.log("done");
	} catch (error) {
		console.log(error);
		console.log("sheesh");
	}
};

export default createUser;
