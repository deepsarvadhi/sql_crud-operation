const express = require('express');
const mysql = require('mysql');
const connection = require('../../config/connection');
const HTTP = require('../../constants/responseCode.constant');
var jwt = require('jsonwebtoken');

// Default Sign up

(async function deafultAdminsignup(req, res) {
    try {
        //Admin exist
        var sqlcheck = `SELECT * FROM admin WHERE email = 'Admin@gmail.com'`;

        connection.query(sqlcheck, (err, data) => {
            if (err) {
                console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
            }
            if (!data == " ") return;

            //Default admin insert

            var sql = `INSERT INTO admin (name, email, password, role) VALUES ('Admin', 'Admin@gmail.com', 'Admin@123', 'Admin')`;

            connection.query(sql, (err, data) => {
                if (err) {
                    console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
                }

                if (!data) {
                    return false;
                }
                return false;
            });

        });

    } catch (error) {
        console.log("🚀 ~ file: admin.controller.js:39 ~ deafultAdminsignup ~ error:", error)
    }
})();

// Sign in

async function adminSignIn(req, res) {
    try {
        let { email, password } = req.body;
        let sql = `SELECT * FROM admin WHERE email = '${email}' AND password = '${password}'`;

        connection.query(sql, (err, data) => {
            if (err) {
                console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
            }

            if (!data) {
                return res.status(HTTP.SUCCESS).send({ status: false, code: HTTP.BAD_REQUEST, message: "Email or Password Increct", data: {} });
            }

            const token = jwt.sign({ email: data.email, id: data.id, role: data.role }, 'admin@123');

            return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Admin Sign In", data: token });

        });

    } catch (error) {
        console.log("🚀 ~ file: admin.controller.js:48 ~ adminSignIn ~ error:", error)
    }
}

// admin Reset Password

async function adminResetPassword(req, res) {
    try {
        let { email, password, Cpassword } = req.body;
        var sql = `SELECT * FROM admin WHERE email = '${email}' AND password = '${password}'`;

        connection.query(sql, (err, data) => {
            for (var Dataid of data) { }
            if (err) {
                console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
            }

            if (!data) {
                return res.status(HTTP.SUCCESS).send({ status: false, code: HTTP.BAD_REQUEST, message: "Email or Password Increct", data: {} });
            }

            const sqlupdate = `UPDATE admin SET password = '${Cpassword}' WHERE id = ${Dataid.id}`;

            connection.query(sqlupdate, (err, data) => {
                if (err) {
                    console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
                }
                return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Password update successfully", data: {} });
            });
        });

    } catch (error) {
        console.log("🚀 ~ file: admin.controller.js:74 ~ adminResetPassword ~ error:", error)
    }
}



module.exports = {
    adminSignIn,
    adminResetPassword
}