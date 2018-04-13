function openGP(gpid, role, startpop) {
    let response ='';

    fetch('http://localhost:8080/hr-business-services-rest/business-services/gp/'+gpid+'?role='+role+'&startpop='+startpop
        , {
            method: 'GET',
            credentials: 'include',
            headers: new Headers({
                'Accept': 'application/json',
                'Accept-Language': 'fr-FR',
            })
        }
    )
        .then(response => response.json()).then(item => {
            response = item;
            return response;
        })
}

export default {openGP}