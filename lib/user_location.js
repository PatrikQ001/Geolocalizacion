class UserLocation{
    constructor(callback){
        if (navigator.geolocation) {//si tiene la api de geolocalizacion
            navigator.geolocation.getCurrentPosition((localizacion)=>{//el path arrow remmplaza function, asincrono usando el callback
                //esto se ejecutara cuando tengamos la geolocalizacion
                this.latitude = localizacion.coords.latitude;
                this.longitude = localizacion.coords.longitude;
            callback();
            })
        } else {
            alert("Tu navegador se rompe");
        }
    }
}