import { connection as db } from "../config/index.js";

class Services {
    static fetchServices ( req, res) {
        try {
            const strQry = `
            SELECT *
            FROM Services
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Failed to fetch all services😭')
                res.json({
                    status: res.statusCode,
                    results: results
                })
            })
        } catch (e) {
            res.json ({
                status: 404,
                msg: 'Failed to fetch all services😭'
            })
        }
    }

    static fetchOneService(req, res) {

        try {
            const strQry = 
            `   SELECT *
                FROM Services
                WHERE serviceID = ${req.params.id}
            `
                db.query(strQry, (err, result) => {
                    if (err) throw new Error('Fail to fetch service😭')
                    res.json({
                        status: res.statusCode,
                        results: result[0]
                    })
                })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
            
        }
    }

    static addService (req, res) {
        try {
            const strQry = `
            INSERT INTO Services
            SET?
            `
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Failed to add service😭')
                res.json({
                    status: res.statusCode,
                    msg: 'Service added successfully🤓'
                })
            })
        } catch {
            res.json({
                status: 404,
                err: e.message
            })
        }
    
    }

    static updateService (req, res) {
    try {
        const strQry = ` 
        UPDATE Services 
        SET ?
        WHERE serviceID = ${req.params.id};
        `
        db.query(strQry, [req.body], (err) => {
            if (err) throw new Error('Failed to update service😭')
            res.json({
                status: res.statusCode,
                msg: 'Service updated successfully🤓'
            })
        })
    } catch (e) {
        res.json({
            status: 404,
            err: e.message
        })
    }
    }

    static deleteService (req, res) {
        try {
            const strQry = `
            DELETE FROM Services
            WHERE serviceID = ${req.params.id}
            ` 
            db.query(strQry, (err) => {
                if (err) throw new Error('Failed to delete service😭')
                res.json({
                    status: res.statusCode,
                    msg: 'Service deleted successfully🚮'
                })
            })
        } catch {
            res.json({
                status: 404,
                err: e.message
            })
        }

    }

}

export { 
    Services 
}