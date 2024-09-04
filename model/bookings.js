import { connection as db} from '../config/index.js'


class Bookings {

    static fetchbookings(req, res ) {
        try {      
            const query = `
                SELECT *
                FROM Bookings;
            `
            db.query(query, (err, results) => {
                if (err) throw err
                res.json({
                    status: 200,
                    results: results
                })
            })
        } catch (error) {
            res.json({
                status: 500,
                message: error.message
            })
        }
    }
    static fetchAllBookings(req, res) {
        try {
            const query = `
                SELECT DISTINCT b.userID , concat(u.firstName, ' ', u.lastName) 'Full Name', group_concat(s.serviceName) 'Services',sum(Duration) 'Duration' ,
                sum(CASE 
                WHEN s.serviceName NOT IN ('Grooming', 'VAT Care') THEN Duration * s.price
                ELSE s.price
                END) AS 'Total Amount'
                FROM Bookings b
                JOIN Users u USING(userID)
                JOIN Services s USING(serviceID)
                GROUP BY b.userID
                ;
            
            `
            db.query(query, (err, results) => {
                if (err) throw err
                res.json({
                    status: 200,
                    results: results
                })
            })  
        } catch (error) {
            res.json({
                status: 404,
                message: error.message
            })
        }
    }

    static onePersonsBookings(req, res){
        try {   
            const query = `
                SELECT b.userID , concat(u.firstName, ' ', u.lastName) 'Full Name', b.bookID 'book ID', s.serviceName 'Services', Duration 'Duration' ,
                CASE 
                    WHEN s.serviceName NOT IN ('Grooming', 'VAT Care') THEN Duration * s.price
                    ELSE s.price
                END AS 'Total Amount'
                FROM Bookings b
                JOIN Users u USING(userID)
                JOIN Services s USING(serviceID)
                WHERE b.userID = 2
                ;
            `
            db.query(query, (err, results) => {
                if (err) throw new Error('Couldn\'t fetch this user😭' )
                res.json({
                    status: 200,
                    results: results
                })
            })
        } catch (error) {
            res.json({
                status: 404,
                message: error.message
            })
        }
    }

    static onePersonsBooking(req, res) {
        try {        
            const query = `
                SELECT b.userID , concat(u.firstName, ' ', u.lastName) 'Full Name',b.bookID 'book ID' ,s.serviceName 'Services', Duration 'Total Duration',
                CASE 
                    WHEN s.serviceName NOT IN ('Grooming', 'VAT Care') THEN Duration * s.price
                    ELSE s.price
                END AS 'Total Amount'
                FROM Bookings b
                JOIN Users u USING(userID)
                JOIN Services s USING(serviceID)
                WHERE b.userID = ${req.params.id} AND bookID = ${req.params.bookid}
                GROUP BY b.userID
                ;
            `
            db.query(query, (err, results) => {
                if (err) throw new Error('Couldn\'t fetch this booking��' )
                res.json({
                    status: 200,
                    results: results
                })
            })
        } catch (error) {
            res.json({
                status: 404,
                message: error.message
            })
        }
    }

    static addBooking(req,res) {
        try {    
            const query = `
                INSERT INTO Bookings (userID, serviceID, bookingDate, Duration)
                VALUES (${req.params.id}, ${req.body.serviceID}, "${req.body.bookingDate}", ${req.body.Duration});
            `
            db.query(query, (err, results) => {
                if (err) throw err
                res.json({
                    status: 200,
                    message: 'Booking added successfully!'
                })
            })
        } catch (error) {
            res.json({
                status: 500,
                message: error.message
            })
        }
    }

    static updateBooking(req, res) {
        try {
            const query = `
                UPDATE Bookings
                Set ?
                WHERE userID = ${req.params.id} AND bookID = ${req.params.bookid};
            `
            db.query(query, [req.body], (err, results) => {
                if (err) throw err
                res.json({
                    status: 200,
                    message: 'Booking updated successfully!'
                })
            })  
        } catch (error) {
            res.json({
                status: 500,
                message: error.message
            })
        }
    }

    static deleteBooking(req, res) {
        try {
            const query = `
                DELETE FROM Bookings
                WHERE userID = ${req.params.id} AND bookID = ${req.params.bookid};
            `
            db.query(query, (err, results) => {
                if (err) throw err
                res.json({
                    status: 200,
                    message: 'All bookings for this user deleted successfully!'
                })
            })
        } catch (error) {
            res.json({
                status: 500,
                message: error.message
            })
        }
    }

    static deleteBookingS(req, res) {   
        try {
            const query = `
                DELETE FROM Bookings
                WHERE userID = ${req.params.id};
            `
            db.query(query, (err, results) => {
                if (err) throw err
                res.json({
                    status: 200,
                    message: 'Booking deleted successfully!'
                })
            })
        } catch (error) {
            res.json({
                status: 500,
                message: error.message
            })
        }
    }

}

export{
    Bookings 
}