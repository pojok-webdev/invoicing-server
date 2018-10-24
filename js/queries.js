var getclient = obj => {
        sql = 'select client_id,a.name,b.name,a.siup,a.npwp,a.npwpaddress from fbs a         ';
        sql+= 'left outer join clients b on b.id=a.client_id ';
        console.log('sql',sql)
        return sql;
    },
    getServices = obj => {
        sql = 'select a.id,a.name,concat(c.category," ",c.bandwidth," ",upstr," ",dnstr) svc '
        sql+= 'from clients a left outer join fbs b on b.client_id=a.id left outer join fbservices c on c.fb_id=b.nofb;'
        console.log('getservices',sql)
        return sql
    }
    module.exports = {
        getclient:getclient,
        getServices:getServices
    }
