const nombre ="Patrik";//ECMAScript
google.maps.event.addDomListener(window,"load",()=>{//cargar la pagina y cargar los mapas son cosas distintas por eso lo llamamos aparte
       //Geolocation => Navigator
    const user_location = new UserLocation(()=>{
        const mapOption = {//jason para configuracion del mapa
            zoom:15,
            center:{
                lat:user_location.latitude,
                lng:user_location.longitude,
            }
        };
        const mapa_element = document.getElementById('map');
        const map = new google.maps.Map(mapa_element,mapOption)//le pasamos en donde dibujar el mapa y la configuracion de nuestro mapa a google
        
        const search_input = document.getElementById('search-place');
        const autocomplete = new google.maps.places.Autocomplete(search_input);

        const marker = new google.maps.Marker({
            map :map
        });

        autocomplete.bindTo("bounds",map);//enlaza con el mapa

        google.maps.event.addListener(autocomplete,"place_changed",()=>{
            console.log("Cambiamos de lugar");

            const place = autocomplete.getPlace();

            if(place.geometry.viewport){//geometry info respecto al lugar   vieweport da infor que el mapa necesita para centrarse
                map.fitBounds(place.geometry.viewport);//centra el lugar con un mejor zoom
                console.log("esta vivi");
            }else{
                map.setCenter(place.geometry.location);
                map.setZoom(15);
            }
            marker.setPlace({
                placeId: place.place_id,
                location: place.geometry.location
            });
            marker.setVisible(true);
        });
    
        console.log("Ya te tenemos localizado ehh");
        console.log(user_location);
   });//creamos un nuevo objeto user location, al crearse este nosotros le pasamos una funcion  
})
   
   

 