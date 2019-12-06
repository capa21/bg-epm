import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    Accept: 'application/json',
    'OData-Version': '4.0',
    'OData-MaxVersion': '4.0',
    'Ocp-Apim-Subscription-Key': '30462a9d27c6451e82eab03dcc422ca9'
  })
};

const bodyPeticion = {
  Instancia: 'ConectorCrm_ComercialDllo',
  FetchXml: '<fetch version=\'1.0\' output-format=\'xml-platform\' mapping=\'logical\' distinct=\'false\'><entity name=\'contact\'><attribute name=\'fullname\' /><attribute name=\'epm_clidentificationnumber\' /><attribute name=\'contactid\' /><filter type=\'and\'><condition attribute=\'fullname\' operator=\'like\' value=\'%1%\' /></filter></entity></fetch>'
}

interface Respuesta {
  LogicalName: string;
  Id: string;
  Attributes: {};
}

interface DataType {
  Respuesta: Respuesta[];
  Error: {};
}

@Injectable()
export class DataService {

  url = 'https://epmapimdes.azure-api.net:443/ConectorCrm/api/Consultar';

  constructor(
    private http: HttpClient
  ) { }

  // getData(): Observable<any> {
  //   return this.http.post<any>(this.url, bodyPeticion, httpOptions);
  // }

  getData(): DataType {
    return {
      "Respuesta": [
          {
              "LogicalName": "contact",
              "Id": "97606120-297a-e811-9143-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba12 Praa"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "12456789"
                  },
                  "contactid": {
                      "Value": "97606120-297a-e811-9143-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "0000c2ba-547a-e811-9147-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Julian Prueba12"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "123213123"
                  },
                  "contactid": {
                      "Value": "0000c2ba-547a-e811-9147-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "7dfc0a1a-f97a-e811-9149-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "qqqq 1111"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "80186150"
                  },
                  "contactid": {
                      "Value": "7dfc0a1a-f97a-e811-9149-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "fb5a1e94-b28e-e811-9179-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Luis Funcion1"
                  },
                  "contactid": {
                      "Value": "fb5a1e94-b28e-e811-9179-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "cce68c3d-b48e-e811-9179-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Luis Prueba1"
                  },
                  "contactid": {
                      "Value": "cce68c3d-b48e-e811-9179-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "71e54dd4-bb8e-e811-9179-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Julian PruebaLogs1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "5674325"
                  },
                  "contactid": {
                      "Value": "71e54dd4-bb8e-e811-9179-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "f41fe64f-0d94-e811-917f-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "prueba 1"
                  },
                  "contactid": {
                      "Value": "f41fe64f-0d94-e811-917f-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "9d14eeed-0195-e811-917f-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba 10"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "80182612"
                  },
                  "contactid": {
                      "Value": "9d14eeed-0195-e811-917f-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "c94fb143-9895-e811-9180-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba 11"
                  },
                  "contactid": {
                      "Value": "c94fb143-9895-e811-9180-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "ef006d8b-9895-e811-9180-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba 11"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "80182615"
                  },
                  "contactid": {
                      "Value": "ef006d8b-9895-e811-9180-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "72c9a6d0-9a95-e811-9180-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba 12"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "80182620"
                  },
                  "contactid": {
                      "Value": "72c9a6d0-9a95-e811-9180-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "f3efed92-9c95-e811-9180-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba 13"
                  },
                  "contactid": {
                      "Value": "f3efed92-9c95-e811-9180-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "ba36ad88-9d95-e811-9180-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba 14"
                  },
                  "contactid": {
                      "Value": "ba36ad88-9d95-e811-9180-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "66d93fd7-9f95-e811-9182-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba 15"
                  },
                  "contactid": {
                      "Value": "66d93fd7-9f95-e811-9182-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "710d44f3-a095-e811-9182-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba 16"
                  },
                  "contactid": {
                      "Value": "710d44f3-a095-e811-9182-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "ea0677eb-a495-e811-9182-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba 21"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "76767"
                  },
                  "contactid": {
                      "Value": "ea0677eb-a495-e811-9182-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "37dd39eb-d095-e811-9183-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Luis 15"
                  },
                  "contactid": {
                      "Value": "37dd39eb-d095-e811-9183-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "3c126cda-d195-e811-9183-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Luis 16"
                  },
                  "contactid": {
                      "Value": "3c126cda-d195-e811-9183-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "113c529f-6b96-e811-9184-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Luis 31"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "7687878"
                  },
                  "contactid": {
                      "Value": "113c529f-6b96-e811-9184-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "54051e49-c99f-e811-9188-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba231 Funciona"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "123141312"
                  },
                  "contactid": {
                      "Value": "54051e49-c99f-e811-9188-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "cc7ccf4b-ce9f-e811-9188-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Julian PruebaLog1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "1214715767"
                  },
                  "contactid": {
                      "Value": "cc7ccf4b-ce9f-e811-9188-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "8bf2f4e2-ce9f-e811-9188-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Julian PruebaLog1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "1214715767"
                  },
                  "contactid": {
                      "Value": "8bf2f4e2-ce9f-e811-9188-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "5ad95952-8ea0-e811-9188-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "PruebaEscenario1 Funciona2"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "123141244"
                  },
                  "contactid": {
                      "Value": "5ad95952-8ea0-e811-9188-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "f889a2c1-41a5-e811-9190-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Julian Prueba Logs123"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "12346789"
                  },
                  "contactid": {
                      "Value": "f889a2c1-41a5-e811-9190-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "f278a3eb-51ad-e811-91ac-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Stephanie Lizeth Orrego Zapata 1128395963"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "1128395963"
                  },
                  "contactid": {
                      "Value": "f278a3eb-51ad-e811-91ac-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "88dbb48a-dcb1-e811-91b3-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Sprint 14 B2C"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "1278912678"
                  },
                  "contactid": {
                      "Value": "88dbb48a-dcb1-e811-91b3-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "cf252b7b-06b2-e811-91b3-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "PruebaB3c Logs21"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "12314144"
                  },
                  "contactid": {
                      "Value": "cf252b7b-06b2-e811-91b3-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "922d4533-0bb2-e811-91b3-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "JulianSprint12 Logs1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "56789678"
                  },
                  "contactid": {
                      "Value": "922d4533-0bb2-e811-91b3-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "2666d975-0cb2-e811-91b3-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Julianp Sprint14"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "12314127"
                  },
                  "contactid": {
                      "Value": "2666d975-0cb2-e811-91b3-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "11aed850-0eb2-e811-91b3-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Julian221 Funciona1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "56789622"
                  },
                  "contactid": {
                      "Value": "11aed850-0eb2-e811-91b3-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "35f687df-0eb2-e811-91b3-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Sprint142 Logb2c"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "456712311"
                  },
                  "contactid": {
                      "Value": "35f687df-0eb2-e811-91b3-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "994c028d-13b2-e811-91b3-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba123 Log2"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "567891212"
                  },
                  "contactid": {
                      "Value": "994c028d-13b2-e811-91b3-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "df15452f-17b2-e811-91b4-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba241 Logs222"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "12354112"
                  },
                  "contactid": {
                      "Value": "df15452f-17b2-e811-91b4-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "f3d17633-20b2-e811-91b4-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "sadsa11 233"
                  },
                  "contactid": {
                      "Value": "f3d17633-20b2-e811-91b4-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "7ef5d3a1-20b2-e811-91b4-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Luis12 123123"
                  },
                  "contactid": {
                      "Value": "7ef5d3a1-20b2-e811-91b4-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "7f83d903-21b2-e811-91b4-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "sadsadsa 21312412"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "213214124"
                  },
                  "contactid": {
                      "Value": "7f83d903-21b2-e811-91b4-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "ffd1db99-21b2-e811-91b4-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "sdas12 Funciona2"
                  },
                  "contactid": {
                      "Value": "ffd1db99-21b2-e811-91b4-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "7f60f4dd-25b2-e811-91b4-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Luis23 Logs231"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "45235324"
                  },
                  "contactid": {
                      "Value": "7f60f4dd-25b2-e811-91b4-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "0e4b5410-26b2-e811-91b4-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "asdascc Logs231"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "54352231"
                  },
                  "contactid": {
                      "Value": "0e4b5410-26b2-e811-91b4-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "d9dbdbf2-d3b2-e811-91b4-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Pruebaesc6 Logs1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "25214512"
                  },
                  "contactid": {
                      "Value": "d9dbdbf2-d3b2-e811-91b4-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "506d7318-fdb4-e811-91b5-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "sdfdsf12 Logs222"
                  },
                  "contactid": {
                      "Value": "506d7318-fdb4-e811-91b5-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "f55c77c3-fdb4-e811-91b5-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "asdsad123 Logs23"
                  },
                  "contactid": {
                      "Value": "f55c77c3-fdb4-e811-91b5-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "fa568328-feb4-e811-91b5-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "1/1/0001 12:00:00 AM 9/10/2018 8:31:54 AM"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "43431229"
                  },
                  "contactid": {
                      "Value": "fa568328-feb4-e811-91b5-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "1e0f99c7-feb4-e811-91b5-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "1/1/0001 12:00:00 AM 9/10/2018 8:36:21 AM"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "567896431"
                  },
                  "contactid": {
                      "Value": "1e0f99c7-feb4-e811-91b5-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "d8c25689-ffb4-e811-91b5-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "9/10/2018 8:43:45 AM 9/10/2018 8:41:46 AM"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "435245211"
                  },
                  "contactid": {
                      "Value": "d8c25689-ffb4-e811-91b5-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "9669eed3-ffb4-e811-91b5-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba21 Logs231"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "12312467"
                  },
                  "contactid": {
                      "Value": "9669eed3-ffb4-e811-91b5-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "362c2a03-00b5-e811-91b5-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Pruebacrm12 Logsb"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "54245671"
                  },
                  "contactid": {
                      "Value": "362c2a03-00b5-e811-91b5-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "f9d1e9d6-00b5-e811-91b5-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba241 Logs22"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "12415144566"
                  },
                  "contactid": {
                      "Value": "f9d1e9d6-00b5-e811-91b5-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "e3ef5b5b-01b5-e811-91b5-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Pruebacrm1234 Logsb2c1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "41413242"
                  },
                  "contactid": {
                      "Value": "e3ef5b5b-01b5-e811-91b5-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "331b19b3-02b5-e811-91b5-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Luis12312 Logs2"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "567896189"
                  },
                  "contactid": {
                      "Value": "331b19b3-02b5-e811-91b5-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "df12fcaa-1db5-e811-91b5-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "sadas12 jasraoq"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "567896123"
                  },
                  "contactid": {
                      "Value": "df12fcaa-1db5-e811-91b5-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "744be695-b0b6-e811-91b6-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "lasdcD Logs21"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "51321222"
                  },
                  "contactid": {
                      "Value": "744be695-b0b6-e811-91b6-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "31bd4a1d-c0b6-e811-91b6-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Julian2 Logs21"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "19457853"
                  },
                  "contactid": {
                      "Value": "31bd4a1d-c0b6-e811-91b6-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "23df91d4-cfb6-e811-91b7-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Luis112 Logs211"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "56424231"
                  },
                  "contactid": {
                      "Value": "23df91d4-cfb6-e811-91b7-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "4d564cdb-d5b6-e811-91b8-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Luis231 Logs23"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "34125619"
                  },
                  "contactid": {
                      "Value": "4d564cdb-d5b6-e811-91b8-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "7b81620e-d7b6-e811-91b8-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba242 Logs231"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "5678965421"
                  },
                  "contactid": {
                      "Value": "7b81620e-d7b6-e811-91b8-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "60d07622-d8b6-e811-91b8-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Julian21 Logs231"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "6513417"
                  },
                  "contactid": {
                      "Value": "60d07622-d8b6-e811-91b8-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "a1f3be5e-dfb6-e811-91b8-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba2e Logs231"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "12345113213"
                  },
                  "contactid": {
                      "Value": "a1f3be5e-dfb6-e811-91b8-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "58ccb308-9fba-e811-91bb-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Julian2212 PruebaLog12"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "127214178"
                  },
                  "contactid": {
                      "Value": "58ccb308-9fba-e811-91bb-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "5feabe42-52e4-e811-921b-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "juan camilo higuita jcamilo1031"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "1128457017"
                  },
                  "contactid": {
                      "Value": "5feabe42-52e4-e811-921b-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "b48f4744-6ce4-e811-921b-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "rayito1 perez"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "9434818"
                  },
                  "contactid": {
                      "Value": "b48f4744-6ce4-e811-921b-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "21eab1ca-7ef2-e811-9232-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Cuenta 1 Prueba 1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "2345432345"
                  },
                  "contactid": {
                      "Value": "21eab1ca-7ef2-e811-9232-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "91b2c539-1083-e911-9308-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Revisor 1 Metropolitano"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "112233445544"
                  },
                  "contactid": {
                      "Value": "91b2c539-1083-e911-9308-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "e712bd46-1e8d-e911-931b-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "nombre1 apellido1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "898989"
                  },
                  "contactid": {
                      "Value": "e712bd46-1e8d-e911-931b-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "c98836c2-6e8d-e911-931b-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Revisor 1 Bajo Cauca"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "11223344556633"
                  },
                  "contactid": {
                      "Value": "c98836c2-6e8d-e911-931b-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "d9c93384-c0af-e911-9345-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Revisor 1 Alquiler infraestructura Energía"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "71727830"
                  },
                  "contactid": {
                      "Value": "d9c93384-c0af-e911-9345-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "053d9214-93b8-e911-9351-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba 111 Prueba 222"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "12181"
                  },
                  "contactid": {
                      "Value": "053d9214-93b8-e911-9351-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "7eb18f04-b3f9-e911-939b-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "nombre1 apellido1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "112845701896"
                  },
                  "contactid": {
                      "Value": "7eb18f04-b3f9-e911-939b-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "ffd97bec-a301-ea11-93ab-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "D'mogas Técnico 1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "432109994"
                  },
                  "contactid": {
                      "Value": "ffd97bec-a301-ea11-93ab-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "2fee7560-a901-ea11-93ab-000d3a1fd324",
              "Attributes": {
                  "fullname": {
                      "Value": "Haceb Técnico 1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "4321099911"
                  },
                  "contactid": {
                      "Value": "2fee7560-a901-ea11-93ab-000d3a1fd324"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "5bdcdac3-7d37-e811-9107-00155d130504",
              "Attributes": {
                  "fullname": {
                      "Value": "Cliente 123"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "123455677"
                  },
                  "contactid": {
                      "Value": "5bdcdac3-7d37-e811-9107-00155d130504"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "ef579e1f-d13d-e811-9108-00155d130504",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba Mapeo 1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "12321232"
                  },
                  "contactid": {
                      "Value": "ef579e1f-d13d-e811-9108-00155d130504"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "88fbe248-58ca-e311-8ae1-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Andrea 1 Bustamante"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "43689"
                  },
                  "contactid": {
                      "Value": "88fbe248-58ca-e311-8ae1-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "c2f338e4-853d-e211-8e5e-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Pruebas 1 Pruebas"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "111122"
                  },
                  "contactid": {
                      "Value": "c2f338e4-853d-e211-8e5e-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "cb349b4e-fa6c-e511-990e-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Asesor Generico 1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "0104"
                  },
                  "contactid": {
                      "Value": "cb349b4e-fa6c-e511-990e-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "348c1bbf-a0ac-e411-9918-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Nom1 Nom2 Ape1 Ape2"
                  },
                  "contactid": {
                      "Value": "348c1bbf-a0ac-e411-9918-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "cb4de288-2213-e211-9c35-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Carolina Londono Gómez1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "32209912"
                  },
                  "contactid": {
                      "Value": "cb4de288-2213-e211-9c35-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "8a98e33b-dc1d-e211-9c35-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "yo1 yo1"
                  },
                  "contactid": {
                      "Value": "8a98e33b-dc1d-e211-9c35-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "1cc6415c-dc1d-e211-9c35-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "n1 n1"
                  },
                  "contactid": {
                      "Value": "1cc6415c-dc1d-e211-9c35-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "5d73a48d-c058-e511-a211-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Contaco 1 Repuestos"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "895217812"
                  },
                  "contactid": {
                      "Value": "5d73a48d-c058-e511-a211-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "c7631947-1b5b-e511-a211-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Contacto 1 Perman"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "9786186"
                  },
                  "contactid": {
                      "Value": "c7631947-1b5b-e511-a211-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "222bbd1a-da5b-e511-a211-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Contacto 1 Peldar"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "365471"
                  },
                  "contactid": {
                      "Value": "222bbd1a-da5b-e511-a211-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "2beb4d7b-f3f2-e311-a4f2-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba1 Prueba1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "3323123"
                  },
                  "contactid": {
                      "Value": "2beb4d7b-f3f2-e311-a4f2-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "6bded3cf-f4f2-e311-a4f2-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba1 Prueba1"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "22322232"
                  },
                  "contactid": {
                      "Value": "6bded3cf-f4f2-e311-a4f2-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "0fdbcd2c-10f3-e311-a4f2-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Prueba1 Prueba"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "3353191"
                  },
                  "contactid": {
                      "Value": "0fdbcd2c-10f3-e311-a4f2-3a80c51b31d6"
                  }
              }
          },
          {
              "LogicalName": "contact",
              "Id": "f4aeffb7-300c-e411-b272-3a80c51b31d6",
              "Attributes": {
                  "fullname": {
                      "Value": "Personita 1 Apellido Dskdf"
                  },
                  "epm_clidentificationnumber": {
                      "Value": "4320983"
                  },
                  "contactid": {
                      "Value": "f4aeffb7-300c-e411-b272-3a80c51b31d6"
                  }
              }
          }
      ],
      Error: null
    }
  }

  getDataFiltrada(): any[]  {
    let arrayAttributes: any[] = [];
    this.getData().Respuesta.forEach(element => {
      arrayAttributes.push(element.Attributes);
    });
    return arrayAttributes;
  }

}
