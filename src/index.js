import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from "./routes";

var parseString = require('xml2js').parseString;
var xml = '<teamResponse> <status>OK</status>    <members>    <member dossierID="522" dossierSOCCLE="FRL" dossierMATCLE="FRP1048" name="foulen, blabla" urlPicture="picture?dossierID=522&amp;role=EMPLOYEE(FRLFRP1048)"/>   <member dossierID="33021" dossierSOCCLE="FRL" dossierMATCLE="FRP1111" name="Marc Test" urlPicture="picture?dossierID=33021&amp;role=EMPLOYEE(FRLFRP1048)"/>    </members>    </teamResponse>';
parseString(xml, function (err, result) {
    console.dir(result.teamResponse.members[0].member);
});

ReactDOM.render(
    <Routes/>
    , document.getElementById('root'));
registerServiceWorker();
