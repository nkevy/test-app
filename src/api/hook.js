const axios = require('axios')

async function sendPost(url='',data={}){
	try{
		const resp = await axios.post(url,data)
		console.log(resp);
		return (resp.data);
	}catch(err){
		return err
	}
}

export default sendPost;
