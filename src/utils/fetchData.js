export const apiOptions={
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
}


export const apiOptions2 = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData=async(url,options)=>{
    try{
        const response=await fetch(url,options)
        const data=await response.json()
        return data

    } catch(error){
        console.log(error)
    }

}


