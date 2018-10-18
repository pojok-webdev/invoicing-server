var getclient = obj => {
        sql = 'select client_id,a.name,b.name,a.siup,a.npwp,a.npwpaddress from fbs a         ';
        sql+= 'left outer join clients b on b.id=a.client_id ';
        return sql;
    }
    module.exports = {
        getclient:getclient
    }
