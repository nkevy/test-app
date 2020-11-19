import React, {useState, useEffect } from 'react';
import axios from 'axios';
//const api = axios.create({
//	baseURL:'http://localhost:8080',
//	timeout: 10000,
//});
const head = {'Content-Type':'application/json'};
export const Display = () => {
	const [data, setData] = useState('')
	async function recentWord(){
		return axios.post('/recentword',{},head)
			.then(function(res){
				console.log(res.data)
				if (res.data[0].success){
					setData(res.data[1].word)
				}
			})
			.catch(function(err){
				console.log(err)
			});
	}
	useEffect(()=>{
		recentWord();
	},[]);
        return (
		<div>
			<p>data: {data}</p>
		</div>
        );
}
//EOF
