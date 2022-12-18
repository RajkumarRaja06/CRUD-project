import {DB} from './server.js'

class CompanyService {

  doGetAll = () => {
    const xhr = new XMLHttpRequest();
    let responseText;
    xhr.open('GET', DB.SOURCEURL, false);
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) return;
      if (this.status !== 200) return;
      responseText = this.responseText;
    };
    xhr.send();
    return responseText;
  }

  doGetByIdID = (id) => {
    const xhr= new XMLHttpRequest();
    let responseText;
    xhr.open('GET', DB.SOURCEURL + id,  false);
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) return;
      if (this.status !== 200) return;
      responseText = this.responseText;
    };
    xhr.send();
    return responseText;  
  }

  doAdd = (company) => {  
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(company),
    }
    return fetch(DB.SOURCEURL, options)
              .then(response => response.json());
  }

  doEdit = (company) => {  
    const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(company),
    }
    return fetch(DB.SOURCEURL  + company['id'], options)
              .then(response => response.json());
  }

  doDeletebyId = (id) => {
    const xhr = new XMLHttpRequest();
    let responseText;
    xhr.open('DELETE', DB.SOURCEURL + id, false);
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) return;
      if (this.status !== 200) return;
      responseText = this.responseText;
    };
    xhr.send();
    return responseText;
  }
}

export default CompanyService;