const call = ()=>{
        axios.get('https://thongtindoanhnghiep.co/api/city')
    .then(function (response) {
      console.log('====================================');
      console.log(response);
      console.log('====================================');
    })
    .catch(function (error) {
        console.log(error);
    });   
}