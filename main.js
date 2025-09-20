const base = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/res';

const api_id = 'RES_offReserveAssets'
const date_of = '202202';

const parametrs = new URLSearchParams({
    id : api_id,
    date : date_of,
    json : '' 
});

const url = new URL(base);
url.search = parametrs.toString();
console.log(url.toString());