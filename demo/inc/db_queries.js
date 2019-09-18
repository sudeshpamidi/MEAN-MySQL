function executeQuery(conn, res, qryStr) {
    return conn.query(qryStr, function(err, rows) {
        //console.log('executing query:\n' + qryStr);
        if (err) {
            console.log('Error while performing Query.');
            console.log('Executing Query:\n' + qryStr);
            conn.end();

            if (err.toString().indexOf('ER_DUP_ENTRY')) {
                res.json({
                    'success': false,
                    'msg': 'Error executing query.',
                    'err_code': 'ER_DUP_ENTRY'
                });
            } else {
                res.json({
                    'success': false,
                    'msg': 'Error executing query.'
                });
            }
        }
        //console.log(rows);
        conn.end();
        res.json(rows);
    });
}

module.exports = {
    postUserLogin: function(conn, req, res) {
        if (conn) {
            var username = req.body.username;
            var password = req.body.password;

            var qryStr = 'SELECT * FROM user WHERE user_name = "' + username + '" and password = "' + password + '"';
            executeQuery(conn, res, qryStr);
        } else {
            res.json({
                'success': false,
                'msg': 'No DB Connection established.'
            });
        }
    },

    getAllusers: function(conn, req, res) {
        if (conn) {
            var username = req.body.username;
            var password = req.body.password;


            var qryStr = 'SELECT * FROM user';
            executeQuery(conn, res, qryStr);
        } else {
            res.json({
                'success': false,
                'msg': 'No DB Connection established.'
            });
        }
    },

    putUserUpdate: function(conn, req, res) {
        if (conn) {
            var username = req.body.username;
            var password = req.body.password;

            var qryStr = 'update user set password = "' + password + '" WHERE user_name = "' + username + '"';
            executeQuery(conn, res, qryStr);
        } else {
            res.json({
                'success': false,
                'msg': 'No DB Connection established.'
            });
        }
    },

    deleteUser: function(conn, req, res) {

        if (conn) {
            var userid = req.params.userid;
            var qryStr = 'delete from  user WHERE ID = ' + userid;
            console.log(qryStr);
            executeQuery(conn, res, qryStr);
        } else {
            res.json({
                'success': false,
                'msg': 'No DB Connection established.'
            });
        }
    },

    postUserRegister: function(conn, req, res) {
        if (conn) {
            var username = req.body.username;
            var password = req.body.password;
            var email = req.body.email;
            var qryStr = 'INSERT into user (USER_NAME, PASSWORD, IS_ADMIN, EMAIL) values ("' + username + '","' + password + '",0,"' + email + '")';
            console.log(qryStr);
            executeQuery(conn, res, qryStr);
        } else {
            res.json({
                'success': false,
                'msg': 'No DB Connection established.'
            });
        }
    },

    setUserUpdate: function(conn, req, res) {
        if (conn) {
            var userid = req.params.userid;
            var updatetype = req.body.updatetype;
            var updatevalue = req.body.updatevalue;

            var qryStr = `update user set ${updatetype} = "${updatevalue}" where ID = ${userid}`;
            console.log(qryStr);
            executeQuery(conn, res, qryStr);
        } else {
            res.json({
                'success': false,
                'msg': 'No DB Connection established.'
            });
        }
    },
    getUserById: function(conn, req, res) {
        if (conn) {
            var userid = req.params.userid;
            var qryStr = `SELECT * FROM user where ID =${userid}`;
            executeQuery(conn, res, qryStr);
        } else {
            res.json({
                'success': false,
                'msg': 'No DB Connection established.'
            });
        }
    }
};