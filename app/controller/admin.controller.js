const express = require('express');
const mysql = require('mysql');
const connection = require('../../config/connection');
const HTTP = require('../../constants/responseCode.constant');


(async function deafultAdminsignup(req, res) {
    try {
        //Admin exist
        var sqlcheck = `SELECT * FROM admin WHERE email = 'Admin@gmail.com'`

        connection.query(sqlcheck, (err, data) => {
            if (err) {
                console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
            }

            if (data) {
                return false;
            }
            return true;
        });

        //Default admin insert

        var sql = `INSERT INTO admin (name, email, password, role) VALUES ('Admin', 'Admin@gmail.com', 'Admin@123', 'Admin')`;

        connection.query(sql, (err, data) => {
            if (err) {
                console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
            }

            if (!data) {
                return true;
            }
            return false;
        });


    } catch (error) {
        console.log("🚀 ~ file: admin.controller.js:39 ~ deafultAdminsignup ~ error:", error)
    }
})();